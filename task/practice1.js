function fun(){
    setInterval(() => {
    let b=document.querySelector('#emoji')


  let emojis=["😀","😔","❤️"]
  let random=Math.floor(Math.random()*emojis.length)
  b.textContent= emojis[random]

    }, 1000);
   
  



}

 function fun1(){
     document.querySelector('#emoji').textContent=""

}