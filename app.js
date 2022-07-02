// console.log("Hello JavaScript")
//  prompt("Enter your name?")
//  alert("Welcome in JS world")

var btnTranslate = document.querySelector("#btn")
var textInput = document.querySelector("#textarea-box")
var showOutput = document.querySelector("#output")
console.log(btnTranslate)
console.log(textInput)
// var serverUrl = " https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=manish"
var serverUrl ="https://api.funtranslations.com/translate/minion.json"


btn.addEventListener('click' , function clickEventHandler () {
    console.log('Clicked')
    console.log(textInput.value)

    showOutput.innerText = "Hi this is your output" + textInput.value

    var input = textInput.value



fetch(getTranslationUrl(input))
.then(response => response.json())
.then(json => console.log(json.contents.translated))
.catch(errorHandler)
})

function getTranslationUrl(text) {
        return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured" , error)
}









// textarea.addEventListener('onclick' , function () {
//     console.log(textarea.value)
//     console.log("hii")
// })
// fetch(serverUrl)
// .then(response => response.json())
// .then(json => console.log(json.contents.translated))
// Promise {<pending>}
// VM1027:3 Testing,  you are