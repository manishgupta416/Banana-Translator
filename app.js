var btnTranslate = document.querySelector("#btn")
var textInput = document.querySelector("#textarea-box")
var showOutput = document.querySelector("#output")
var styleOutputBox = `
background-color: #0533ab;
font-size: large;
font-weight: bold;
color: white;`


var serverUrl = " https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var serverUrl ="https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
console.log("error occured" , error)
}

btn.addEventListener('click' , clickEventHandler)


function clickEventHandler () {
var inputTxt = textInput.value
console.log(inputTxt)

fetch(getTranslationUrl(inputTxt))
.then(response => response.json())
.then(json => 
    // console.log(json)
    {var translatedText = json.contents.translated
    showOutput.innerText = translatedText
    showOutput.style = styleOutputBox}
    )
    
.catch(errorHandler)
}

