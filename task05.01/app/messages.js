import express from "express";
import fsDemo from "../fsDemo";
const  router = express.Router();

router.get("/:messages", (req, res) => {
    if(req.params.messages === "messages"){
        res.send(fsDemo.readFile());
    }else{
        res.send("неправильный запрос");
    }
});

router.post("/messages", (req, res) => {
    fsDemo.addItem(req.body);
    let now = new Date();
    req.body.datetime = now;
    fsDemo.saveData(res.send(req.body));
});

export default router;