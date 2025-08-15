// let sec=0
// let hr=0
// let min=0
// timer=null

// function start(){
//     if (timer !== null) return;
//     timer=setInterval(() => {
//         sec++
//         if(sec === 60){
//             sec=0
//             min++
//         }
//         if(min === 60){
//             min=0
//             hr++
//         }
//         let h=(hr<10 ?"0"+ hr:hr)
//         let s=(hr<10 ?"0"+ sec:sec)
//         let m=(hr<10 ?"0"+ min:min)
//         document.querySelector('#timer').innerHTML=h + ":"+ m +":"+s;

        
//     },1000 );
// }
// function stop(){
//     clearInterval(timer)
//     timer=null
// }
// function reset(){
//     stop()
//     hr=0
//     min=0
//     sec=0
//  document.querySelector('#timer').innerHTML="00:00:00"
// }




    // let hr = 0;
    // let min = 0;
    // let sec = 0;
    // let timer = null;

    // function start() {
    //   if (timer !== null) return;

    //   timer = setInterval(() => {
    //     sec++;

    //     if (sec === 60) {
    //       sec = 0;
    //       min++;
    //     }

    //     if (min === 60) {
    //       min = 0;
    //       hr++;
    //     }

    //     // 👇 Simple way to display with manual 0 padding
    //     let h = (hr < 10 ? "0" + hr : hr);
    //     let m = (min < 10 ? "0" + min : min);
    //     let s = (sec < 10 ? "0" + sec : sec);

    //     document.getElementById("time").innerText = h + ":" + m + ":" + s;
    //   }, 1000);
    // }

    // function stop() {
    //   clearInterval(timer);
    //   timer = null;
    // }

    // function reset() {
    //   stop();
    //   hr = 0;
    //   min = 0;
    //   sec = 0;
    //   document.getElementById("time").innerText = "00:00:00";
    // }
 

    let hr=0
    let sec=0
    let min=0
    timer=null
    function start(){
        if(timer !==null) return
    timer= setInterval(() => {
            sec++;

            if(sec === 60){
                sec = 0
                min++
            }
            if(min === 60){
                min = 0
                hr++
            }
            let h=(hr<10 ? "0" + hr: hr)
            let m=(min<10 ? "0" + min: min)
            let s=(sec<10 ? "0" + sec: sec)
            document.querySelector('#timer').innerHTML=h+":"+m+":"+s
        }, 1000);

    }

    function stop(){
        clearInterval(timer)
        timer = null
    }
    function reset(){
       stop()
       hr=0
       sec=0
       min=0
       document.querySelector('#timer').innerHTML="00:00:00"
    }