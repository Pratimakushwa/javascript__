// // // let total = 0;

// // // function addExpense() {
// // //   const description = document.getElementById("description").value;
// // //   const amount = document.getElementById("amount").value;
// // //   const list = document.getElementById("expense-list");
// // //   const totalDisplay = document.getElementById("total");

// // //   if (description === "" || amount === "") {
// // //     alert("Please fill both fields");
// // //     return;
// // //   }

// // //   const li = document.createElement("li");
// // //   li.innerHTML = `<span>${description}</span> <span>₹${parseFloat(amount).toFixed(2)}</span>`;
// // //   list.appendChild(li);

// // //   total += parseFloat(amount);
// // //   totalDisplay.textContent = total.toFixed(2);

// // //   // Clear inputs
// // //   document.getElementById("description").value = "";
// // //   document.getElementById("amount").value = "";
// // // }

// // let total = 0;

// // function addExpense() {
// //   const description = document.getElementById("description").value;
// //   const amount = document.getElementById("amount").value;
// //   const list = document.getElementById("expense-list");
// //   const totalDisplay = document.getElementById("total");

// //   if (description === "" || amount === "") {
// //     alert("Please fill both fields");
// //     return;
// //   }

// //   const li = document.createElement("li");
// //   li.innerHTML = `<span>${description}</span> <span>₹${parseFloat(amount).toFixed(2)}</span>`;
// //   list.appendChild(li);

// //   total += parseFloat(amount);
// //   totalDisplay.textContent = total.toFixed(2);

// //   // Clear inputs
// //   document.getElementById("description").value = "";
// //   document.getElementById("amount").value = "";
// // }


// let total = 0;

// function addExpense() {
//   const description = document.getElementById("description").value;
//   const amount = document.getElementById("amount").value;
//   const list = document.getElementById("expense-list");
//   const totalDisplay = document.getElementById("total");

//   if (description === "" || amount === "") {
//     alert("Please fill both fields");
//     return;
//   }

//   // Create new li element
//   const li = document.createElement("li");

//   // Create description + amount
//   const textSpan = document.createElement("span");
//   textSpan.textContent = description;

//   const amountSpan = document.createElement("span");
//   const value = parseFloat(amount).toFixed(2);
//   amountSpan.textContent = `₹${value}`;

//   // Create delete button
//   const delBtn = document.createElement("btn");
//   delBtn.textContent = "X";
//   delBtn.className = "delete-btn";

//   // Delete button action
//   delBtn.onclick = function () {
//     list.removeChild(li); // remove li
//     total -= parseFloat(value); // subtract from total
//     totalDisplay.textContent = total.toFixed(2); // update total
//   };

//   // Add all into li
//   li.appendChild(textSpan);
//   li.appendChild(amountSpan);
//   li.appendChild(delBtn);
//   list.appendChild(li);

//   // Update total
//   total += parseFloat(value);
//   totalDisplay.textContent = total.toFixed(2);

//   // Clear inputs
//   document.getElementById("description").value = "";
//   document.getElementById("amount").value = "";
  

// }

let total=0
function add(){
    let input1=document.querySelector('#input1').value
let input2=document.querySelector('#input2').value
let totals=document.querySelector('#total')
let list = document.querySelector('#list')

if (input1===""||input2=== ""){
    alert("fill the inputs")
    return
}
let li=document.createComment("li")
li.textContent=input1
let ul=document.createElement("span")
const value= parseFloat(amount).toFixed(2)
ul.textContent=`$rs{value}`

 let del=document.createElement("delbtn")
 del.textContent=delete
 
 

 del.onclick = function () {
   list.removeChild(li)
   total -= parseFloat(value)
   totals.textContent=  total.toFixed(2)
 }
 li.appendChild(delbtn)
 li.appendChild(li)
 li.appendChild(ul)
 list.appendChild(li)

total+=parseFloat(value)
totals.textContent=total.toFixed(2)

}

