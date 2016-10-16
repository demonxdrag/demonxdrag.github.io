$( document ).ready(function() {
});

var i = 0;
$('#home_circle p').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  this.removeAttribute("class");
  if (i==0){
    this.className = "animated fadeOut";
  }
  i = 1;
});
