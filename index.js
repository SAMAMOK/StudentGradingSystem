 
    var total_average = function(){ 
  
      var total_prelim = parseInt(document.getElementById("prelim").value); 
      var total_midterm = parseInt(document.getElementById("midterm").value);
      var total_final = parseInt(document.getElementById("final").value);
   
      var total_average = (total_prelim+total_midterm+total_final) / 3;
      document.getElementById("ave").value = total_average; 
      

      if(total_average<60){
        document.getElementById("equ").value = "5";
      }

      if(total_average>59 && total_average< 64.4){
        document.getElementById("equ").value = "3";
      }

      if(total_average>64.5 && total_average<68.9){
        document.getElementById("equ").value = "2.75";
      }

      if(total_average>69.0 && total_average<73.4){
        document.getElementById("equ").value = "2.50";
      }

      if(total_average>73.5 && total_average<77.9){
        document.getElementById("equ").value = "2.25";
      }

      if(total_average>78.0 && total_average<82.4){
        document.getElementById("equ").value = "2.00";
      }

      if(total_average>82.5 && total_average<86.9){
        document.getElementById("equ").value = "1.75";
      }

      if(total_average>87.0 && total_average<91.4){
        document.getElementById("equ").value = "1.50";
      }

      if(total_average>91.5 && total_average<95.9){
        document.getElementById("equ").value = "1.25";
      }
      if(total_average>96.0 && total_average<100){
        document.getElementById("equ").value = "1.00";
      }

     
  }

    


switch(true) {
  case prelim >= 0 && prelim <= 100:
    total += prelim;
    count++;
    break;
  default:
    
}

switch(true) {
  case midterm >= 0 && midterm <= 100:
    total += midterm;
    count++;
    break;
  default:
   
}

switch(true) {
  case final >= 0 && final <= 100:
    total += final;
    count++;
    break;
  default:
    alert("Invalid grade for the Final exam!");
}

if (count === 3) {
  let average = total / count;
  document.write("The total average is " + average.toFixed(2));
} 
   



