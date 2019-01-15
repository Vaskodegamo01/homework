import fs from "fs";
const path = "./messages/";
const messages = [];

export default {
    data: [],
    readFile(){
            fs.readdir(path, (err, files) => {
                if (err) {
                    throw err;
                    return;
                }
                files.forEach(file => {
                fs.readFile(path + file, "utf8", (err, res) => {
                    if (err) {
                        throw err;
                        return;
                    }
                    if (res) this.data = JSON.parse(res);
                    messages.push(this.data[0]);
                    console.log(messages);  //messages тут все есть
                });
                console.log(messages); //messages пустой
            });
        });
         console.log(messages); //messages пустой
        return messages;
    },
    addItem(item){
        this.data.push(item);
    },
    saveData(callback){
        let now = new Date();
        fs.writeFile(path + now.toISOString() + ".txt", JSON.stringify(this.data), err => {
            if (err) throw err;
        })
    }
};