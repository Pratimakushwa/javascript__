// function fun(){
//     let input=document.querySelector('#text')
//     let emoji=document.querySelector('#emojiDisplay')
//     let name=document.querySelector('#emojiName')
//     let error=document.querySelector('#error')

//   if(input === smile){
//     emoji.textContent="😀"
//     name.textContent="smile"
//     error.textContent=""
//   }
//  else if(input === sad){
//     emoji.textContent="😔"
   
//     name.textContent="sad"
//     error.textContent=""

//  }
//  else {
//         emoji.textContent = "";
//         name.textContent = "";
//         error.textContent = "Only 'smile' or 'sad' allowed!";
//  }
// }

// function fun() {
//     // let input = document.querySelector('#text').value.trim().toLowerCase(); // Get input value
//     let emoji = document.querySelector('#emoji');
//     let name = document.querySelector('#name');
//     let error= document.querySelector('#error');

//     const emojis=["😀","😔","❤️"]
//     const names=["smile","sad","love"]
//     let random=Math.floor(Math.random()*emojis.length)
//     emoji.textContent=emoji[random].emojis
//     name.textContent=name[random].names

    // if (input === "smile") {
    //     emoji.textContent = "😀";
    //     name.textContent = "smile";
    // }
    // else if (input === "sad") {
    //     emoji.textContent = "😔";
    //     name.textContent = "sad";
    // }
    // else {
    //     emoji.textContent = "";
    //     name.textContent = "";
    //     error.textContent = "❌ Only 'smile' or 'sad' allowed!";
    // }
// }

// function fun1() {
//     // Clear all content
//     document.querySelector('#text').value = "";
//     document.querySelector('#emoji').textContent = "";
//     document.querySelector('#name').textContent = "";
//     document.querySelector('#error').textContent = "";
// }


// function fun2(){
//      let input = document.querySelector('#text').value.trim().toLowerCase(); // Get input value
//     let emoji = document.querySelector('#emojiDisplay');
//     let name = document.querySelector('#emojiName');
//     let error = document.querySelector('#error');

// }




// function fun(){
//     let input= document.querySelector('#text').value.trim().toLowercase();
//     let name=document.querySelector('#name')
//     let emoji=document.querySelector('#emoji')

//     if(input === "smile"){
//     emoji.textContent="😊"
//     name.textContent="smile"
//     }
// }

// function fun(){
    
//     let list= [
//     { emoji: "😊",name: "Smile" },
//     { emoji: "😢", name: "Sad" },
//     { emoji: "😡", name: "Angry" },
//     { emoji: "❤️", name: "Love" },
//     { emoji: "😎", name: "Cool" },
//     { emoji: "😂", name: "Laugh" },
//     { emoji: "🤔", name: "Thinking" },
//     { emoji: "😴", name: "Sleepy" }
//     ]
//  let random=Math.floor(Math.random()*list.length)
//  let emoji=document.querySelector('#emoji')
//  emoji.textContent=list[random].emoji;
//  let name=document.querySelector('#name')
//  name.textContent=list[random].name;

// }
// function fun1() {
//     // Clear all content
//     document.querySelector('#emoji').textContent = "";
//     document.querySelector('#name').textContent = "";
//     document.querySelector('#error').textContent = "";
// }



let interval = null;
function fun1(){
    if(interval !==null) return

interval=setInterval(() => {
  


let list=[
    {emoji:"😊",name:"smile"},
    {emoji:"😔",name:"sad"}
]

let random=Math.floor(Math.random()*list.length)
   let emoji=document.querySelector('#emoji')

   emoji.textContent=list[random].emoji
    let name=document.querySelector('#name')
     name.textContent=list[random].name

},1000);
}


function fun2(){
    clearInterval(interval)
    interval=null
    let emoji=document.querySelector('#emoji')
    emoji.textContent=" "
    let name=document.querySelector('#name')
    name.textContent=" "



}

// function fun1(){
//     // // let input=document.querySelector('#input').value.toLowerCase()
//     // let emoji=document.querySelector('#emoji')
//     // let name=document.querySelector('#name')



// let list=[
//     {emoji:"😊",name:"smile"},
//     {emoji:"😔",name:"sad"}
// ]

// let random=Math.floor(Math.random()*list.length)
//    let emoji=document.querySelector('#emoji')

//    emoji.textContent=list[random].emoji
//     let name=document.querySelector('#name')
//      name.textContent=list[random].name


// }







//     if(input === "smile"){
//         emoji.textContent="😊"
//         name.textContent="smile"
//     }
//     else if(input ==="sad" ){
//         emoji.textContent="😔"
//         name.textContent="sad"
//     }
//     else{
//         alert(" please enter emoji name")
//     }
// }
// function fun2(){
//     let emoji=document.querySelector('#emoji')
//     let name=document.querySelector('#name')
//     // input.value=""    
//    clearInterval(st)
//    st=null
//     // emoji.textContent=""
//     // name.textContent=""
// }