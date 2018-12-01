
document.addEventListener("DOMContentLoaded", function(event){
  var button = document.getElementById("update");
  button.addEventListener("click", test());
  button.style.color="red";
});


  window.onload = function() {
    var abc = document.getElementById("abc");
    console.log(abc.innerText);
  };

  function test(){
    console.log("test");
  }

function parseSettings(settings){
  var settings;
  var savedSettings = chrome.storage.sync.get(["emails","keywords", "time"], function(result){
    console.log(result.key);
  })
}

function submitSettings(){
  var emails, keywords, time;
  emails = document.getElementById("emails");
  keywords = document.getElementById("keywords");
  time = document.getElementById("time");
  console.log(emails);
  chrome.storage.sync.set()
}
