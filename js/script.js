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
   // var downloadButton = document.querySelectorAll("canvas");
   // downloadButton.forEach((elem)=>{
   //    elem.addEventListener("click", startDownload);
   // })

   var articleParent = document.querySelector("#bekende-personen .horizontal-scroll");
   var timesClicked = 0;

   articleParent.addEventListener('click', (e)=>{
      // e.stopPropagation();
      var element = e.target.parentNode;
      console.log(element)
      if(element.tagName.toLowerCase() == "button"){
         element.addEventListener('click', startDownload)
      }
   }, true)

   function startDownload(e){
      console.log(`${e.target} ${this}  test`);
      var counter = 0;

      var button = this;

      var counterDisplay = this.querySelector('.counter');
      // console.log(counterDisplay)

      var c = this.querySelector('canvas');
      var ctx = c.getContext("2d");
      var progress = -.5;

      timesClicked++;
      console.log(timesClicked);

      function circleUp(){

         button.classList.add("intermediate");
         if(progress < 1.5 ){

            if(counter < 100){
               counter++;
               counterDisplay.textContent = counter + "%";
            }

            if (counter == 100){
               button.classList.remove("intermediate");
               button.classList.add("active");
               counterDisplay.textContent = "Verwijder";
               clearInterval(intervalID);
            }

            progress += (2 / 100);

            ctx.beginPath();
            ctx.strokeStyle = "#00D66B";
            ctx.lineWidth = 4;
            ctx.arc(45, 61, 25, -.5 * Math.PI, progress * Math.PI);
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
         // timesClicked = 0;
      }

      else{
         console.log("on");
         var intervalID = setInterval(circleUp, 20);
      }
   }
};
