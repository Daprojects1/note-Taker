let btn  = document.querySelector("#btn")
let textA = document.querySelector("#texta")
let addNotes = document.querySelector(".addedText")
let body = document.querySelector("body")
let modal = document.getElementById("myModal");

let mainFunc = ()=> {
    if(textA.value.length > 0){
        let newArr = textA.value.split("");
        let newAry =[];
       newArr.filter((item)=> {
          let newI = item.toLowerCase();
        if (newI === "a"|| newI === "e" || newI === "i" || newI === "o" || newI === "u"){
            newAry.push(item)
        }
       })
       let number = newAry.length;
       alert(`This sentence has ${number} vowels`)
    } else{
        alert(`Write a message`)
    }

}
btn.addEventListener("click", mainFunc)
