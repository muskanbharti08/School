let h = document.querySelector('.h1');





// for changing the color for h1
function fn(c){
        return new Promise((sol,rej)=>{
                setTimeout(() => {
                  h.style.color =c;      
                  sol();
                }, 1000);
     
        })
}
async function fn2(){
        await fn("red")
        await fn("blue")
        await fn("yellow")
        await fn("green")
}
fn2();
