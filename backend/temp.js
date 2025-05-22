console.log("running");

const temp = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("finished inside promise")
        res()
    }, 2000);
})

console.log("last line");