const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let input=document.getElementById("input")
const btnclick=document.getElementById("generate")
const password_1=document.getElementById("pass1") 
const password_2=document.getElementById("pass2") 
btnclick.addEventListener("click",function(){
    inputValue = input.value;
    if (inputValue===""){
        inputValue=15
        render(inputValue)
    }
    else{
        render(inputValue)
    }    
})
function generate_password(x){
    let item =""
    for(i=0;i<x;i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        item +=characters[randomIndex]
        
    }
    return item
}
function render(inputValue){
    const pass1=generate_password(inputValue)
    const pass2=generate_password(inputValue)
    password_1.textContent=pass1
    password_1.dataset.pass=pass1
    password_2.textContent=pass2
    password_2.dataset.pass=pass2
}

document.addEventListener('click', function(e){
    if(e.target.dataset.pass){
        navigator.clipboard.writeText(e.target.dataset.pass)
        alert("Copied the text: " + e.target.dataset.pass)
    }
})


