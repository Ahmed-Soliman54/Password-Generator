let PassWord = document.getElementById("Password");
let btn = document.getElementById("bt");
let icon = document.getElementById("icon")
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
let Symbols = "=+-_*()><?/\\@!~#$%^\"&`";
let Numbers = "0123456789";
let Charcter = PassWord+upperchars+lowerchars+Symbols;
icon.onclick=()=>{
    PassWord.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    icon.classList.add("active")
    setTimeout(()=>{
        icon.classList.remove("active")
    },2000)
}
btn.onclick=()=>{
GeneratePassword ()
}

function GeneratePassword (){
    let Pass = "";
    let random1 = Math.floor(Math.random()*lowerchars.length);
    let random2 = Math.floor(Math.random()*upperchars.length);
    let random3 = Math.floor(Math.random()*Symbols.length);
    let random4 = Math.floor(Math.random()*Numbers.length);
    Pass = Pass+lowerchars[random1]+upperchars[random2]+Symbols[random3]+Numbers[random4] ;2222
    for(let i = Pass.length ; i < 12 ; i++){
    Pass = Pass + Charcter[Math.floor(Math.random()*Charcter.length)]; 
    PassWord.value=Pass

    }
}
/*  // while(PassWord.length < 12 ){
    //     PassWord = PassWord + Charcter[Math.floor(Math.random()*Charcter.length)];
    // }
    // console.log(PassWord)*/

