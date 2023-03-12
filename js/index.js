 var total_average = function(){ 
  
      var total_prelim = parseInt(document.getElementById("prelim").value); 
      var total_midterm = parseInt(document.getElementById("midterm").value);
      var total_final = parseInt(document.getElementById("final").value);
      
      var total_average = (total_prelim+total_midterm+total_final) / 3;
     
      if (total_prelim>100 || total_midterm>100 || total_final>100){
        alert("WALANG GRADE NA ABOVE 100");
      }
      else{
          document.getElementById("ave").value = total_average;
          document.getElementById("namee").value =  document.getElementById("Studname").value;
          document.getElementById("subject").value =  document.getElementById("Subject1").value;
          document.getElementById("coursee").value =  document.getElementById("Course1").value;
         
    
          if(total_average<60){
            document.getElementById("equ").value = "5";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showSadShark, 1100);
          }
    
          if(total_average>59 && total_average< 64.4){
            document.getElementById("equ").value = "3";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>64.5 && total_average<68.9){
            document.getElementById("equ").value = "2.75";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>69.0 && total_average<73.4){
            document.getElementById("equ").value = "2.50";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>73.5 && total_average<77.9){
            document.getElementById("equ").value = "2.25";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>78.0 && total_average<82.4){
            document.getElementById("equ").value = "2.00";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>82.5 && total_average<86.9){
            document.getElementById("equ").value = "1.75";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>87.0 && total_average<91.4){
            document.getElementById("equ").value = "1.50";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
    
          if(total_average>91.5 && total_average<95.9){
            document.getElementById("equ").value = "1.25";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
          if(total_average>96.0 && total_average<=100){
            document.getElementById("equ").value = "1.00";
            document.getElementById("shark").style.display = "none";
            setTimeout(showLoad, 1);
            setTimeout(hideLoad, 1000);
            setTimeout(showHappyShark, 1100);
          }
      }
      document.getElementById("box2").style.transform = "rotateY(180deg)";
      document.getElementById("box3").style.transform = "rotateY(360deg)";
      
     return false;
  }

  function bura(){
  
    document.getElementById("namee").value = "";  
    document.getElementById("Studname").value = "";
    document.getElementById("subject").value = "";  
    document.getElementById("Subject1").value = "";
    document.getElementById("coursee").value = "";
    document.getElementById("Course1").value = "";

    document.getElementById("prelim").value = "";  
    document.getElementById("midterm").value = "";
    document.getElementById("final").value = "";  
    document.getElementById("ave").value = "";
    document.getElementById("equ").value = "";
   
    document.getElementById("box2").style.transform = "rotateY(360deg)";
    document.getElementById("box3").style.transform = "rotateY(180deg)";

    document.getElementById("shark").style.display = "block";
    document.getElementById("sadshark").style.display = "none";
    document.getElementById("happyshark").style.display = "none";
  }

  function showLoad(){
    document.getElementById("loading").style.display = "block"; 
  }

  function hideLoad(){
    document.getElementById("loading").style.display = "none"; 
  }

  function showHappyShark(){
    document.getElementById("shark").style.display = "none";
    document.getElementById("happyshark").style.display = "block";
    document.getElementById("sadshark").style.display = "none";
  }

  function showShark(){
    document.getElementById("shark").style.display = "block";
    document.getElementById("happyshark").style.display = "none";
    document.getElementById("sadshark").style.display = "none";
  }

  function showSadShark(){
    document.getElementById("shark").style.display = "none";
    document.getElementById("happyshark").style.display = "none";
    document.getElementById("sadshark").style.display = "block";
  }

  
        
  function checkme(Inputtext) {
      var value = Inputtext.value;
      const regEx = /^[a-zA-Z\s]+$/; 
      var textOnly = regEx.test(value);
    
      if(textOnly == false)
      {
        Inputtext.className += " shake";
        Inputtext.style.borderColor = "red";
      }

      else
      {
        Inputtext.className = 'form-control text-white';
        Inputtext.style.borderColor = "black";
      }
  }

  function eraseme(Inputtext) {
    Inputtext.className = 'form-control text-white';
    Inputtext.style.borderBlockColor = "black";
  }
