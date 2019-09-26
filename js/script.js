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
      var element = e.target;
      console.log(element)
      if(element.tagName.toLowerCase() == "button"){
         // element.addEventListener('click', startDownload);
         startDownload(element);
         // element.click();
         console.log('fef');
      }
   })
   var downloads = 0;
   var downloaded = [];

   function startDownload(target){
      console.log(`${target.id} ${this}  test`);
      var counter = 0;
      
      var note = document.querySelectorAll('li a span[data-display="counter"]');

      var button = this;

      // timesClicked++;
      // console.log(timesClicked);

      

      function circleUp(target){

         target.classList.add("intermediate");
         // console.log("haahaha")
 
         var test = setInterval(function(){
            counter++;
            // console.log('fwefwef')
            console.log(counter)

            if (counter == 100){
               clearInterval(test);
               console.log("hahahahaha")
               target.classList.remove("intermediate");
               target.classList.add("active");
               
               // counterDisplay.textContent = "Verwijder";
               
            }
         }, 20);

         // if(timesClicked % 2 == 0){
         //    target.classList.remove("intermediate");
         //    target.classList.remove("active");
         //    clearInterval(test);
         // }

      }

      if(downloaded.includes(target.id)){
         target.classList.remove("active");
         target.classList.remove("intermediate");
         // console.log(target.id)
         var index = downloaded.indexOf(target.id);
         
         downloaded.splice(index, 1);
           
       
         console.log("if "+ downloaded);
         // console.log(downloaded)
         // downloaded.pop(e.target.id);
            
      }
      else{
         // target.classList.add("intermediate");
         circleUp(target);
         downloaded.push(target.id);
         console.log('else '+ downloaded);
      }

      // if(timesClicked % 2 == 0){
      //    console.log("off ");
      //    counter = 0;
      //    button.classList.remove("active");
      //    button.classList.remove("intermediate");
      // }

      // else{
      //    downloads++;
      //    note.forEach((elem)=>{
      //       elem.classList.add("counter");
      //       elem.textContent = String(downloads);
      //    })
         
      //    console.log("on");
      //    circleUp();
      // }
   }
};
