
const numbers = [1,2,3,4,5]

numbers.forEach(number=>console.log(number  *2))


import chalk from 'chalk';
import { log } from 'console';

console.log(chalk.red('Hello world!') + chalk.blue(("hola")));



import  Express  from 'express';
const app = Express()

app.get("/", (req, res)=>{
    res.send("/")
})

app.listen(3000,()=>
console.log("se escucha puerto 3000"),
);


