// function fun(){
//   let dic3=document.querySelector('#dic1')
//   let dic6=document.querySelector('#dic2')
//   let result=document.querySelector('#result')
// const emoji=["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
//   const dic1=Math.floor(Math.random()*6)+1
//   const dic2=Math.floor(Math.random()*6)+1
//   dic3.textContent=emoji[dic1-1]
//   dic6.textContent=emoji[dic2-1]
//   result.textContent= dic1+dic2


// }


function fun(){
  let d=document.querySelector('#d')
  let d1=document.querySelector('#d1')
  let result=document.querySelector('#result')
  const emoji=["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
  const d2=Math.floor(Math.random()*6)+1
  const d3=Math.floor(Math.random()*6)+1
  d.textContent=emoji[d2-1]
  d1.textContent=emoji[d3-1]
  result.textContent=d2+d3

}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dice Roller</title>
  <style>
    body {
      text-align: center;
      padding: 50px;
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #333;
    }

    img {
      width: 150px;
      height: 150px;
      margin: 20px;
    }

    button {
      padding: 12px 25px;
      font-size: 20px;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    button:hover {
      background-color: #004ba0;
    }
  </style>
</head>
<body>

  <h1>🎲 Dice Roller</h1>
  <img id="dice" src="images/dice1.png" alt="Dice">
  <br>
  <button onclick="rollDice()">Roll Dice</button>

  <script>
    function rollDice() {
      const dice = document.getElementById('dice');
      const random = Math.floor(Math.random() * 6) + 1;
      dice.src = `images/dice${random}.png`; // images folder se image load hoti hai
    }
  </script>

</body>
</html>
