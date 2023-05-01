let btn = document.querySelector('.item__icon1')
let img = document.querySelector('.item__icon')

let click__icon__NUM = 0

function click__icon() {
    click__icon__NUM ++
    if (click__icon__NUM%2 == 1) {
        img.style.display='flex'
        btn.style.display='none'

    }else{
        img.style.display='none'
        btn.style.display='flex'

    }
}
function click__icon1() {
    click__icon__NUM --
    if (click__icon__NUM%2 == 0) {
        img.style.display='none'
        btn.style.display='flex'

    }else{
        img.style.display='flex'
        btn.style.display='none'

    }
}




let btn2 = document.querySelector('.item__you')
let img2 = document.querySelector('.item__you1')


let click__icon__NUM1 = 0

function click__icon2() {
    click__icon__NUM1 ++
    if (click__icon__NUM1%2 == 1) {
        btn2.style.display='none'
        img2.style.display='flex'
    }else{
        btn2.style.display='flex'
        img2.style.display='none'
    }
}
function click__icon3() {
    click__icon__NUM1 --
    if (click__icon__NUM1%2 == 0) {
        btn2.style.display='flex'
        img2.style.display='none'
    }else{
        btn2.style.display='none'
        img2.style.display='flex'
    }
}





let repImg1 = document.querySelector('#id1')
let repImg2 = document.querySelector('#id2')
let repImg3 = document.querySelector('#id3')
let repImg4 = document.querySelector('#id4')


let NUM__iconPng = 10000000
function click__icon4() {
    NUM__iconPng ++
    if (NUM__iconPng%4 == 1) {
        repImg1.style.display='none'
        repImg2.style.display='flex'
        repImg3.style.display='none'
        repImg4.style.display='none'
    }
    else if (NUM__iconPng%4 == 2) {
        repImg1.style.display='none'
        repImg2.style.display='none'
        repImg3.style.display='flex'
        repImg4.style.display='none'
    }
    else if(NUM__iconPng%4 == 3){
        repImg1.style.display='none'
        repImg2.style.display='none'
        repImg3.style.display='none'
        repImg4.style.display='flex'
    }
    else{
        repImg1.style.display='flex'
        repImg2.style.display='none'
        repImg3.style.display='none'
        repImg4.style.display='none'
    }
}   

function click__icon5() {
    NUM__iconPng --
    if (NUM__iconPng%4 == 1) {
        repImg1.style.display='flex'
        repImg2.style.display='none'
        repImg3.style.display='none'
        repImg4.style.display='none'
    }
    else if (NUM__iconPng%4 == 2) {
        repImg1.style.display='none'
        repImg2.style.display='flex'
        repImg3.style.display='none'
        repImg4.style.display='none'
    }
    else if(NUM__iconPng%4 == 3){
        repImg1.style.display='none'
        repImg2.style.display='none'
        repImg3.style.display='flex'
        repImg4.style.display='none'
    }
    else{
        repImg1.style.display='none'
        repImg2.style.display='none'
        repImg1.style.display='none'
        repImg4.style.display='flex'
    }
}   




let burgerBT = document.querySelector('.burMenu__btn')
let burgerBTX = document.querySelector('.burger__manu')
let lin_1 = document.querySelector('#lin_1')
let lin_2 = document.querySelector('#lin_2')
let lin_3 = document.querySelector('#lin_3')


let bur__tap = 0
function burger() {
    bur__tap ++
    if (bur__tap%2 == 1) {
        burgerBT.style.right="0px"
        burgerBTX.style.right="0px"
        burgerBTX.style.left="30px"
        lin_1.style.opacity="0"
        lin_2.style.transform="rotate(50deg)"
        lin_2.style.top="15px"
        lin_3.style.transform="rotate(-50deg)"
        lin_3.style.top="12px"
    }
    else{
        burgerBT.style.right="-700px"
        burgerBTX.style.right="0px"
        burgerBTX.style.left="0px"
        lin_1.style.opacity="1"
        lin_2.style.transform="rotate(0deg)"
        lin_2.style.top="15px"
        lin_3.style.transform="rotate(0deg)"
        lin_3.style.top="25px"
    }
}