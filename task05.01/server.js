import express from "express";
import messages from "./app/messages";
import fsDemo from "./fsDemo";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/", messages);

app.listen(port, () => console.log("server start at " + port));
