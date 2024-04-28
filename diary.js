var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".container")
var adddiary = document.getElementById("add-diary")
var diarytitleinput = document.getElementById("diary-title-input")
var diarydateinput = document.getElementById("diary-date-input")
var diaryeventinput = document.getElementById("diary-event-input")

adddiary.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","diary-container")
    div.innerHTML = `
    <h2>${diarytitleinput.value}</h2>
    <h5>${diarydateinput.value}</h5>
    <p>${diaryeventinput.value}</p>
    <button onclick="deletediary(event)">Delete this Memory</button>
`;
    container.append(div)
    diarytitleinput.value = "";
    diarydateinput.value = "";
    diaryeventinput.value = "";
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
  
function deletediary(event)
{
    event.target.parentElement.remove()
}
  

    


