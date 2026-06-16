const fs = require('fs')

// fs.readFile('Day4/data.txt','utf-8',(err, data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })

fs.writeFile('Day4/copy.txt',()=>{
    const des = fs.readFileSync('Day4/data.txt','utf-8',(err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data)
    })
})

