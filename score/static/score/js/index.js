window.onload = function(){
  var status = document.getElementsByClassName("status");
  for(var i =0; i<status.length; i++){
    check = status[i].textContent
    if(check == "走行後"){
      status[i].style.backgroundColor = '#ff0000';
    }
  }
}