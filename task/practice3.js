function fun(){
    let a=document.querySelector('#dice')
    let b=document.querySelector('#dice1')
    let c=document.querySelector('#result')
    let random=Math.floor(Math.random()*6)+1
    a.src=`images\a${random}.svg`;
    b.src=`images\b${random}.svg`;
}