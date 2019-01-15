import fs from "fs";


export default {
    data: [],
    init(callback) {
        fs.readFile("./db.json", "utf8", (err, res)=> {
            if (err) throw err;
            if (res) this.data = JSON.parse(res);
            callback();
        })
    },
    addItem(item){
        this.data.push(item)
    },
    saveData(callback) {
        fs.writeFile("./db.json", JSON.stringify(this.data), err => {
            if (err) throw err;
            callback()
        })
    }

};