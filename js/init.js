(function($){
  $(function(){

    //$('.sidenav').sidenav();
    $("#numberofscreenshots").val("5")
    console.log("Under the hood it's running a V8. Javascript V8!");
    $("#footerYear").html("&copy Internet Screenshots " + new Date().getFullYear())
  });
})(jQuery);

$("#numberofscreenshots").change(function(){
  let value = $("#numberofscreenshots").val()
  if(value<1 || value>10){
    $("#numberofscreenshots").val(10)
    M.toast({html: 'Value should be between 1 and 10' , classes:"center"})
  }
});

$("#view-button").click(function(){
  let count = parseInt($("#numberofscreenshots").val())
  for (var i = 0; i < count; i++) {
    let urlToOpen = "https://prnt.sc/"+randomStringGenerator();
    window.open(urlToOpen, '_blank').focus();
  }
});
function randomStringGenerator() {
   let output = '';
   let sampleSet  = 'abcdefghijklmnopqrstuvwxyz0123456789';
   for ( var i = 0; i < 6; i++ ) {
    output += sampleSet.charAt(Math.floor(Math.random() * sampleSet.length));
   }
   return output;
}