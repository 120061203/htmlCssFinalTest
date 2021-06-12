$(document).ready(function(){
    $('.dropDown').click(function(event){
        event.preventDefault();
        $('.dropDownOpen').slideToggle();
    });
    //lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop':300
      })
});