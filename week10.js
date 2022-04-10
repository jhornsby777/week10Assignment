console.log('hello world');

function testNewContent(){
    let testDocument = document.getElementById('addNewContent').value;
    const newRows = document.createElement("e");
    let tableContentVariable = document.getElementById('tableContent');
    let newRow = tableContentVariable.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(testDocument);
    newCell.appendChild(newText);
    console.log(testDocument);
} 
function testButtonFunction(){
let testButton = document.getElementById('addNewButton');
testButton.onclick = () => testNewContent();
}
window.onload=testButtonFunction;