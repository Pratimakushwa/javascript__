
function fun(){
    let s=document.querySelector('#input1').value.toLowerCase()
let d=document.querySelector('#input2').value.toLowerCase()
let c=document.querySelector('#result')

    if(s === ""|| d ===" "){
        c.textContent="fil the both word"
        return
    }
 let sort1=s.split('').sort().join('');
 let sort2=d.split('').sort().join('');

 if(sort1 === sort2){
    c.textContent="this is anagram"
 }
 else{
    c.textContent="not an anagram"
 }
        
}

function  fun1(){
    document.querySelector('#input1').value=""
    document.querySelector('#input2').value=""
    document.querySelector('#result').textContent=""
}



    // function fun() {
    //   // get values
    //   let s = document.querySelector('#input1').value.toLowerCase().replace(/\s/g, "");
    //   let d = document.querySelector('#input2').value.toLowerCase().replace(/\s/g, "");
    //   let c = document.querySelector('#result');

    //   // check empty
    //   if (s === "" || d === "") {
    //     c.textContent = "⚠️ Fill both words";
    //     return;
    //   }

    //   // sort both
    //   let sort1 = s.split('').sort().join('');
    //   let sort2 = d.split('').sort().join('');

    //   // compare
    //   if (sort1 === sort2) {
    //     c.textContent = "✅ This is an anagram!";
    //   } else {
    //     c.textContent = "❌ Not an anagram.";
    //   }
    // }

    // function fun1() {
    //   document.querySelector('#input1').value = "";
    //   document.querySelector('#input2').value = "";
    //   document.querySelector('#result').textContent = "";
    // }

