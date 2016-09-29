$(document).ready(function(){
  $('#home_circle')
    .velocity({
      opacity: "1"
    }, {
      duration: 700,
      easing: "easeInQuad"
    })
    .velocity({
      color: "#414141"
    }, {
      duration: 1000
    });
});
