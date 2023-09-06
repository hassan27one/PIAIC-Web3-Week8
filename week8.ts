// we want to save some Action of this Objects  
let car =  [
            {
            Model:"city VXi",
            Brand:"Honda",
            Year:2013,
            color:"white",
            race:() =>{
                return"Racing Racing ";
                    }
            },
        {
            Model:"C454",
            Brand:"BMW",
            Year:2021,
            color:"Black",
            race:() =>
            {
                return"Racing-2 Racing-2 ";
            }
        }
    ];

console.log(car[1].race());


// import inquirer from "inquirer";
// const data = await inquirer.prompt(
//     [{
//         name:"num",
//         type:"number",
//         message:"Enater a Message ", 
//     }]
// );

// npm install data 