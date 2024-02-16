// JavaScript to toggle between skeleton and actual content
document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading delay (you can replace this with actual loading logic)
    setTimeout(function () {
        document.querySelector(".content-placeholder").style.display = "none";
        document.querySelector(".actual-content").style.display = "block";
    }, 2000); // Adjust the delay as needed
});

let display = document.querySelector("#display")
display.style.display = 'none'

let cross = document.querySelector("#cross")

let userName = document.querySelector("input[type = 'text']")
let gender = document.querySelectorAll("input[type = 'radio']")
let age1 = document.querySelector("#age1")
let salary = document.querySelector("#salary")

let age2 = document.querySelector("#age2")
let salary1 = document.querySelector("#salary1")
let salary2 = document.querySelector("#salary2")

let submit = document.querySelector("#submit")
let reset = document.querySelector("#reset")

let taxedSalary = 0

submit.addEventListener('click',function(e){
    e.preventDefault()
    let inputAge = parseInt(age1.value)
    let inputSalary = parseInt(salary.value)

    if (inputAge < 60){
        if (inputSalary <= 250000){
            taxedSalary = inputSalary
        }
        else if(inputSalary > 250000 && inputSalary <= 500000){
            taxedSalary = inputSalary-((5/100)*(inputSalary-250000))
        }
        else if(inputSalary > 500000 && inputSalary <= 1000000) {
            taxedSalary = inputSalary-(12500+((20/100)*(inputSalary-250000)))
        }
        else if(inputSalary > 1000000) {
            taxedSalary = inputSalary-(112500+((30/100)*(inputSalary-1000000)))
        }
    }
    else if(inputAge >= 60 && inputAge < 80){
        if (inputSalary <= 300000){
            taxedSalary = inputSalary
        }
        else if(inputSalary > 300000 && inputSalary <= 500000){
            taxedSalary = inputSalary-((5/100)*(inputSalary-300000))
        }
        else if(inputSalary > 500000 && inputSalary <= 1000000) {
            taxedSalary = inputSalary-(10000+((20/100)*(inputSalary-500000)))
        }
        else if(inputSalary > 1000000) {
            taxedSalary = inputSalary-(110000+((30/100)*(inputSalary-1000000)))
        }
    }
    else if (inputAge >= 80){
        if (inputSalary <= 500000){
            taxedSalary = inputSalary
        }
        else if(inputSalary > 500000 && inputSalary <= 1000000) {
            taxedSalary = inputSalary-((20/100)*(inputSalary-500000))
        }
        else if(inputSalary > 1000000) {
            taxedSalary = inputSalary-(110000+((30/100)*(inputSalary-1000000)))
        }
    }
    else {
        alert("please enter a valid age")
    }
    

    if (age1.value != '' && salary.value != ''){
        displaySalary()
    }
    // console.log(typeof(inputAge))
    // console.log(typeof(inputSalary))
})

function displaySalary(){
    age2.innerHTML = age1.value
    salary1.innerHTML = salary.value
    salary2.innerHTML = taxedSalary

    display.style.display = ''
    
}

cross.addEventListener('click',function(){
    display.style.display = 'none'
    age1.value = ''
    salary.value = ''
    userName.value = ''
    gender.value = ''
})