
const numbers = [1,2,3,4,5]

numbers.forEach(number=>console.log(number  *2))


import chalk from 'chalk';
import { log } from 'console';

console.log(chalk.red('hola mundo!') + chalk.blue(("hola")));



import  Express  from 'express';
const app = Express()

app.get("/", (req, res)=>{
    res.send("hola pinche putito")
})

const PORT = process.env.PORT || 3000

console.log(PORT);

app.listen(PORT,()=>
console.log("se escucha puerto ", PORT)
);
