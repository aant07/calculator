 var calculationTotal = 0,
     currentNumber ="",
     currentOperation = "";
                      
    $("#calculator .number").on("click", function() {
      // need to catch number - this- any button that click on it 
      let value = $(this).val();  
      // concat string value needs to be atteched to something 
      // var keep the 
      currentNumber=currentNumber.concat(value);
      $("#calculator #display").val(parseInt(currentNumber));
    });

    $("#calculator .#clear").on("click", function() {
     currentNumber = "0";
    $("#calculator #display").val(parseInt(currentNumber));
     });

      var operation = $(this).value();
      
      // Special behaviors for clear and equals
      if (operations === "C") {
      
        caculationTotal = 0;
        currentNumber = "";
        currentOperation = "";
        $("#display").value("0");        
      
      }else if(operations === "=") {
        
        // Check to see what currentOperation is and
        // apply that to parseInt(currentNumber) and the calculationTotal
                
      }else{
      
        currentOperation = operation;               
      }      
    });
    