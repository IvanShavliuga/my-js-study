const fs = require("fs")

fs.mkdir("./iv2-tests",(err)=>{
    if(err){
        console.log("folder already exists")
    }
    console.log("new folder created")
})
let lst = []
let nf = 0
fs.readFile("./iv2-tests/numbers.txt",(err,data)=>{
console.log('read number')
if(err){nf=1}
 nf = (+data.toString())+1
 console.log(data)
for (let i=0; i<25; i++)
{
  const rndfile = ~~(Math.random()*1000)
  const namefile = "./iv2-tests/test"+ rndfile + ".txt"
  fs.writeFile(namefile,"hello world!! file number: "+rndfile,()=>{
    console.log("created File: " + namefile)
  })
  lst.push(namefile)
}
fs.writeFile("./iv2-tests/test-list-"+nf+".txt","files: "+lst,()=>{
    console.log("created File: list")
})
fs.writeFile("./iv2-tests/numbers.txt",""+nf,()=>{
    console.log("number update")
})
})


