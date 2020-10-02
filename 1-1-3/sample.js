function enableCheck() {
  var checkbox = document.getElementsByName("data");

  checkbox.forEach((item, i) => {
    checkbox[i].checked = true;
  });
}

function disableCheck() {
  var checkbox = document.getElementsByName("data");

  checkbox.forEach((item, i) => {
    checkbox[i].checked = false;
  });
}
