let numberBank=[]


let numberBankElement = document.getElementById('numberBank')


//This takes in the addNumber at the top
function addNumber(num, event){
    //avoid it from refreshing
    event.preventDefault()
    console.log("Submitted", num)

    //This stores the number
    numberBank.push(num)

    // [5,6,7,]>> "5, 6, 7" Putting those numbers in the div space numberBank
    numberBankElement.innerText = numberBank.join(",")
}


//sort the numbers

let odds = []
let evens = []

let oddsElement = document.getElementById('odds')
let evensElement = document.getElementById('evens')

//THIS BELOW JUST APPLYS TO THE "SORT ONE" BUTTON ONLY--------------------
function sortOne(){
    let firstNum = numberBank.shift()
    //get first number from array (remove it from numberBank)

    if (firstNum % 2 === 0) {
        evens.push(firstNum)
    }
    else {
        odds.push(firstNum)
    }
    //decide wether its odd or even
    //place number in appropriate array
    //update html


    numberBankElement.innerText = numberBank.join(",")
    oddsElement.innerText = odds.join(",")
    evensElement.innerText = evens.join(",")

}



//THIS IS TO SORT ALL BUTTON
//Basically asking the sort one to happen over and over again until its at 0

function sortAll(){
    while(numberBank.length>0){
        sortOne()
    }



}
