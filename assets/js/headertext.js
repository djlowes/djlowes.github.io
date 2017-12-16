window.setInterval(color_text, 100);

function color_text() {
  var x = document.getElementById('bubble').innerHTML;
  if (x == "Well, not anything!" || x == "You get the point..") {
    document.getElementById('colorchange').style.color = "#FF0000"
  } else {
    document.getElementById('colorchange').style.color = "#FFFFFF"
  }
}
