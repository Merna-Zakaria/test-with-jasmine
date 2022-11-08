const express = require("express");

const app = express();

//routes
app.get("/api", (req: any, res: { send: (arg0: string) => any; }) => res.send("hello"));

const port = 8000;
const start = async () => {
  try {
    app.listen(port, () => console.log("hi from app"));
  } catch (err) {
    console.log("error start", err);
  }
};

start();

const myName = "your name";

const hello = (userName: string): string => `hello, ${userName}`;

console.log(hello);

export const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default app;
