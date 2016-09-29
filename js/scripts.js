/*window.onload = function home_circle(){
  var id = setInterval(frame, 10);
  var circle = document.getElementById('home_circle')
  var x = 0.0
  function startup_frame() {
    if (circle.style.boxShadow == '0px 10px 50px rgba(41,41,41,1)') {
        clearInterval(id);
    } else {
        x = x + 0.1
        circle.style.boxShadow = "0px 10px 50px rgba(41,41,41," + x + ")"
    }
  }
};*/
$(document).ready(function(){
  console.log("ff");
  $('#home_circle').css('opacity') = '0';
});
