window.onload = function(){

/*
   Hieronder de Download microinteractie, helemaal zelf gemaakt alleen info over de setup om te kunnen tekenen op de canvas
   en hoe je een circel geraadpleegd op https://www.w3schools.com/tags/canvas_arc.asp
*/



//
//    var downloadButton = document.querySelector(".download");
//    downloadButton.addEventListener("click", startDownload);
//
//    var timesClicked = 0;
//    var counter = 0,
//    counterDisplay = document.querySelector(".counter");
//    counterDisplay.textContent = "Download";
//
//    function startDownload(){
//       console.log("startDownload");
//
//       counterDisplay.textContent = "Download";
//
//       timesClicked++;
//
//       function circleUp(){
//
//             if(counter < 100){
//                counter++;
//                counterDisplay.textContent = counter + "%";
//             }
//
//             if (counter == 100){
//                downloadButton.classList.add("active");
//                counterDisplay.textContent = "Verwijder";
//                clearInterval(intervalID);
//             }
//          }
//       }
//
//       if(timesClicked % 2 == 0){
//          console.log("haha");
//          clearInterval(intervalID);
//          counter = 0;
//          counterDisplay.textContent = "Download";
//          downloadButton.classList.remove("active");
//       }
//
//       else{
//          var intervalID = setInterval(circleUp, 200);
//       }
//
// };
//
//










   // var button = document.querySelectorAll(".download");
   var downloadButton = document.querySelectorAll("canvas");
   downloadButton.forEach((elem)=>{
      elem.addEventListener("click", startDownload);
   })
   // downloadButton.addEventListener("click", startDownload);

   
   // counterDisplay = document.querySelector(".counter");
   // counterDisplay.textContent = "Download";
   var timesClicked = 0;
   function startDownload(e){
      
   var counter = 0;
// console.log(e.target)
var button = e.target.parentNode;

var counterDisplay = e.target.nextElementSibling;
console.log(counterDisplay)
// counterDisplay.textContent = "Download";
      var c = e.target,
      ctx = c.getContext("2d");
      var progress = -.5;

      

      timesClicked++;
      console.log(timesClicked);


      function circleUp(){
         if(progress < 1.5 ){

            if(counter < 100){
               counter++;
               counterDisplay.textContent = counter + "%";
            }

            if (counter == 100){
               button.classList.add("active");
               counterDisplay.textContent = "Verwijder";
               clearInterval(intervalID);
            }

            progress += (2 / 100);

            ctx.beginPath();
            ctx.strokeStyle = "#00D66B";
            ctx.lineWidth = 3;
            ctx.arc(20, 15, 15, -.5 * Math.PI, progress * Math.PI);
            ctx.stroke();
            // console.log(progress);
         }
      }

      if(timesClicked % 2 == 0){
         clearInterval(intervalID);
         console.log("off " + progress);
         counter = 0;
         ctx.clearRect(0, 0, c.width, c.height);
         counterDisplay.textContent = "Download";
         button.classList.remove("active");
      }

      else{
         console.log("on");
         var intervalID = setInterval(circleUp, 20);
      }
   }
};
