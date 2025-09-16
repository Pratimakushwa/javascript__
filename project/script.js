 function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
  }


function fun() {
  const form = document.querySelector('.form-pop');
  form.style.display = 'block';
}

function closeForm() {
 let close= document.querySelector('.form-pop')
  close.style.display = 'none';
}


function storedata(){

    let name =document .querySelector('#name').value
    let contact =document .querySelector('#contact').value
    let email=document .querySelector('#email').value
    let password=document.querySelector('#password').value

    if (name==""){
      
       alert("please enter your name")
       document.querySelector('#name').focus()
       
       return false
    }
   
     else if (contact==""){
         alert("please enter your contact")
       document.querySelector('#contact').focus()
       
       return false
     }
    else if (contact.length>10 || contact.length<10){
         alert("please enter 10 digits contact")
       document.querySelector('#contact').focus()
       
       return false
     
    }
    else if (isNaN(contact)){
         alert("please enter your contact in digit")
       document.querySelector('#contact').focus()
       
       return false
     }
     
     else if (email==""){
         alert("please enter your email")
       document.querySelector('#email').focus()
       
       return false
     }
   
    
else if (password==""){
      
       alert("please enter your password")
       document.querySelector('#password').focus()
       
       return false
    }
else if (!(password.match(/[ !,~,^,-,+,*,@]/))){
  alert("please enter special charcter")
  document.querySelector('#password').foucs()
  return false
}


  let userdata={
        name:document.querySelector('#name').value,
        contact:document.querySelector('#contact').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#password').value,
       
}
localStorage.setItem('signdata',JSON.stringify(userdata))
}

let storedataa=JSON.parse(localStorage.getItem('signdata'))
console.log(storedataa);
function logindata() {
    let logind = {
        email: document.querySelector('#loginemail').value,
        password: document.querySelector('#loginpass').value
    };

    let storedUser = JSON.parse(localStorage.getItem('signdata'));

    if (storedUser && storedUser.email === logind.email && storedUser.password === logind.password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");

        document.querySelector(".form-pop").style.display = "none";
        document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Incorrect email or password");
        return false;
    }
}


function room(){
  let room=document.querySelector('#room')
  room.classList.add('room')

}

function about(){
  let about=document.querySelector('#about')
  about.classList.add('about')

}
function service(){
  let service =document.querySelector('#service')
  service.classList.add('service')

}
function gellery(){
  let gellery=document.querySelector('#gellery')
  gellery.classList.add('gellery')

}


document.querySelector(".book").addEventListener("click", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });

    // document.querySelector("#booking").style.classList.add . scrollIntoView({ behavior: "smooth" });
  } else {
    document.querySelector(".form-pop").style.display = "block";
  }
});
document.querySelector(".btn").addEventListener("click", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });

    // document.querySelector("#booking").style.classList.add . scrollIntoView({ behavior: "smooth" });
  } else {
    document.querySelector(".form-pop").style.display = "block";
  }
});




document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from redirecting

  let frmdata = {
    name: document.querySelector('#bname').value,
    email: document.querySelector('#bemail').value,
    phone: document.querySelector('#bphone').value,
    address: document.querySelector('#baddress').value,
    city: document.querySelector('#bcity').value,
    state: document.querySelector('#bstate').value,
    zip: document.querySelector('#bzip').value,
    country: document.querySelector('#bcountry').value,
    checkin: document.querySelector('#bcheckin').value,
    checkout: document.querySelector('#bcheckout').value,
    persons: document.querySelector('#bno').value,
    gender: document.querySelector('#bgender').value,
    adults: document.querySelector('#badults').value,
    kids: document.querySelector('#bkids').value
  };

  fetch('http://localhost:3000/bookings', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(frmdata)
  })
.then(res => {
  if (res.ok) {
    alert("Booking submitted successfully!"); 
  } else {
    alert("Server error: " + res.status);
  }
})
})




function showAdminLogin() {
  document.getElementById("adminLoginForm").style.display = "block";
}

function closeAdminLogin() {
  document.getElementById("adminLoginForm").style.display = "none";
}

function adminLogin() {
  let user = document.getElementById("adminUser").value;
  let pass = document.getElementById("adminPass").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("adminLogin", "true");
    alert("Admin login successful!");
    window.location.href = "table.html";
  } else {
    alert("Invalid credentials!");
  }
}




async function demo(){
    let response= await fetch("http://localhost:3000/bookings")
    let data = await response.json()
  
    
    let apidata =data.map((item)=>`
    <tr>
    
     <td>${item.name}</td>
    <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
            <td>${item.country}</td>
            <td>${item.checkin}</td>
            <td>${item.checkout}</td>
            <td>${item.persons}</td>
            <td>${item.gender}</td>
            <td>${item.adults}</td>
            <td>${item.kids}</td>

    </tr>
`).join(" ")
// console.log(apidata);

let savedata=document.querySelector("#storedata")
savedata.innerHTML=apidata
   

    
}
demo()


let right = document.querySelector('.right');
let left = document.querySelector('.left');
let slide = document.querySelector('.slide');
let images = document.querySelectorAll('.image');

let slidenumber = 0; // start from 0 (first image)
let imageWidth = 600; // same as CSS frame width

// 👉 Right Button (Next
right.addEventListener('click', () => {
    if (slidenumber < images.length) {
        slidenumber++;
    } else {
        slidenumber = 0; // back to first image
    }
    slide.style.transform = `translateX(-${slidenumber * imageWidth}px)`;
});

// 👉 Left Button (Previous)
left.addEventListener('click', () => {
    if (slidenumber > 0) {
        slidenumber--;
    } else {
        slidenumber = images.length ; // go to last image
    }
    slide.style.transform = `translateX(-${slidenumber * imageWidth}px)`;
});