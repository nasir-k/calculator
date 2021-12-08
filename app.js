const defaultValue = 0;
let currentResult = defaultValue;
let enteredNumber = 0;
let logEntries = [];

function createOutput(operator, recentResult, numberToCal){
    const calDesccription = `${recentResult} ${operator} ${numberToCal}`;
    outputResult(currentResult, calDesccription);
}

function writeLogs(operation, prevResult, number, result){
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        inputNmunber: number,
        result: result
      };
      logEntries.push(logEntry);
      console.log(logEntries);
}

function add() {
  let initialResult = currentResult;
  enteredNumber = parseInt(usrInput.value);
  currentResult += enteredNumber;
  createOutput('+', initialResult, enteredNumber);
  writeLogs('ADD', initialResult, enteredNumber, currentResult);
}

function subtract(){
    let initialResult = currentResult;
    enteredNumber = parseInt(usrInput.value);
    currentResult -= enteredNumber;
    createOutput('-', initialResult, enteredNumber);
    writeLogs('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply(){
    let initialResult = currentResult;
    enteredNumber = parseInt(usrInput.value);
    currentResult *= enteredNumber;
    createOutput('*', initialResult, enteredNumber);
    writeLogs('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide(){
    let initialResult = currentResult;
    enteredNumber = parseInt(usrInput.value);
    currentResult /= enteredNumber;
    createOutput('/', initialResult, enteredNumber);
    writeLogs('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
