function getInputDict(mode){
    inputTextLines = document.getElementById('codeTable').value.replace('\r','').split('\n');
    var dict = {};
    for(var i = 0;i < inputTextLines.length;i++){
        components = inputTextLines[i].split(',');
        if (mode == 0){
            dict[components[0]] = components[2]
        }else if (mode == 1){
            dict[components[0]] = components[1]
        }else{
            dict[components[1]] = components[0]
        }
    }
    return dict;
}

function getInputCode(){
    dict = getInputDict(0);
    inputText = document.getElementById('inputText').value;
    output = '';
    for (let i = 0; i < inputText.length; i++) {
        if (/\s/.test(inputText[i])) {
            output += inputText[i];
            continue;
        }
        outChar = dict[inputText[i]];
        if (dict[inputText[i]] == undefined){
            outChar =  '未定义';
        }
        output += '{' + inputText[i] +':'+ outChar + '}';
    }
    document.getElementById('result').value = output;
}
function getKorean(){
    dict = getInputDict(1);
    inputText = document.getElementById('inputText').value;
    output = '';
    for (let i = 0; i < inputText.length; i++) {
        if (/\s/.test(inputText[i])) {
            output += inputText[i];
            continue;
        }
        outChar = dict[inputText[i]];
        if (dict[inputText[i]] == undefined){
            outChar = '{'+inputText[i] + ':未定义'+'}';
        }
        output += outChar;
    }
    document.getElementById('result').value = output;
}
function getChinese(){
    dict = getInputDict(2);
    inputText = document.getElementById('inputText').value;
    output = '';
    for (let i = 0; i < inputText.length; i++) {
        if (/\s/.test(inputText[i])) {
            output += inputText[i];
            continue;
        }
        outChar = dict[inputText[i]];
        if (dict[inputText[i]] == undefined){
            outChar = '{'+inputText[i] + ':未定义'+'}';
        }
        output += outChar;
    }
    document.getElementById('result').value = output;
}

function showTable() {
    document.querySelector("div#tableContainer").style.display = "block";
    document.querySelector("button#btnShowTable").style.display = "none";
}

async function loadTable() {
    const response = await fetch("resources/table.txt");
    const text = await response.text();
    const table_textarea = document.querySelector("textarea#codeTable");
    table_textarea.value = text;
}

window.addEventListener("load", (event)=>{
    loadTable();
});
