function inputValue(value) {
    document.getElementById("result").value += value;}

function printButtons(value) { 
        let printButton = document.createElement("button"); 
        let textButton = document.createTextNode(value); 
        let id = value; 
        printButton.setAttribute("id", value); 
        printButton.setAttribute("onclick", "inputValue(id)"); 
        printButton.appendChild(textButton); 
        document.body.appendChild(printButton); 
      } 
      let arrayNumbersOfButtons = ['/', '*', '-', '+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < arrayNumbersOfButtons.length; i++) { 
        printButtons(arrayNumbersOfButtons[i]); 
      }