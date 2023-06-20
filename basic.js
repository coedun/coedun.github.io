function functionShowHide(divName) {
  var x = document.getElementById(divName);
  toggle_visibility(x);
}

function toggle_visibility(x){
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}