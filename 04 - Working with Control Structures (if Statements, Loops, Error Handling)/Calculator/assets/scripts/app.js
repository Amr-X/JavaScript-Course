const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
//
// Gets input from input field
// .value gets you the string value not int 
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

// writes additional information about what is 
// happening in the console with objects and arrays
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
// calculate Result based on a condition 
// no need for 4 function and repeating yourself
function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();

  if (
    calculationType!=="ADD"&&
    calculationType!=="SUBTRACT"&&
    calculationType!=="MULTIPLY"&&
    calculationType!=="DIVIDE" ||
    !enteredNumber //A falsy value it holds which is zero, so it returns and doesn't continue the code
  ){
    return;
  }


  const initialResult = currentResult;
  let mathOperator;
  if(calculationType==="ADD"){
    currentResult += enteredNumber;
    mathOperator= "+";
  }
  else if (calculationType==="SUBTRACT"){
    currentResult -= enteredNumber;
    mathOperator= "-";
  }else if (calculationType==="MULTIPLY"){
    currentResult *= enteredNumber;
    mathOperator= "*";
  }else if (calculationType==="DIVIDE"){
    currentResult /= enteredNumber;
    mathOperator= "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
