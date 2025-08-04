// let input=document.querySelector('#input')
// let list=document.querySelector('#list-container')

// function add(){
//     if(input.value === ""){
//         alert("invalid")
//     }
//     else{
//         let li=document.createElement("li")
//         li.innerHTML=input.value 
//         list-container.appenChild(li)

//     }
// }


// let input=document.querySelector('#input')
// let list=document.querySelector('#list-container')
// function add(){
//     if(input.value ===""){
//         alert("invalid")
//     }
//     else{
//     }
//     let li=document.createElement("li")
//     let text=document.createElement("span")
//     text.textContent=input.value
//     li.appendChild(text)
//     list.appendChild(li)

// let btn=document.createElement("button")
// btn.textContent="x"
// btn.className="delete-btn"
//     li.appendChild(btn)


// btn.onclick= function(){
//     list.removeChild(li)

// input.value=""
// }



// }

// let input = document.querySelector('#input');
//   let list = document.querySelector('#list-container');

//   function add() {
//     if (input.value.trim() === "") {
//       alert("Please enter a task");
//     } else {
//       let li = document.createElement("li");

//       // Create span for text
//       let taskText = document.createElement("span");
//       taskText.textContent = input.value;

//       // Create delete button
//       let delBtn = document.createElement("button");
//       delBtn.textContent = "Delete";
//       delBtn.className = "delete-btn";

//       // Delete function
//       delBtn.onclick = function () {
//         list.removeChild(li);
//       };

//       // Append to li
//       li.appendChild(taskText);
//       li.appendChild(delBtn);
//       list.appendChild(li);

//       input.value = "";
//     }
//   } 

// function add(){
// let input= document.querySelector('#input').value 
// let list= document.querySelector('#list-container')

//     if (input.value ===""){
//         alert("please enter the value")
//     }
//     else{
//        let li= document.createElement("li")
//        let text= document.createElement("span")
//        text.textContent=input.value
//        list.appendChild(li)
//        li.appendChild(text)
    

//     let bt=document.createElement('button')
//     bt.textContent="X"
//     bt.className="delete-btn";
//     li.appendChild(bt)

//     bt.onclick=function(){
//         list.removeChild(li)

//     }

//     input.value=" "
// }

// }
function add() {
    let inputField = document.querySelector('#input'); // keep the input element
    let inputValue = inputField.value; // get its value
    let list = document.querySelector('#list-container');

    if (inputValue === "") {
        alert("please enter the value");
    } else {
        let li = document.createElement("li");

        let text = document.createElement("span");
        text.textContent = inputValue;
        li.appendChild(text);

        let bt = document.createElement("button"); // use button, not <delete>
        bt.textContent = "X";
        bt.className = "delete-btn";
        li.appendChild(bt);

        bt.onclick = function () {
            list.removeChild(li);
        };

        list.appendChild(li); // append after all children are added

        inputField.value = ""; // clear the input field
    }
}
