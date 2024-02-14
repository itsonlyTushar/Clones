$(window).on('scroll', function(){
    var parallax = $(".inside_out")
    var scrollPosition = $(this).scrollTop()
    parallax.css("transform","translateY("+scrollPosition*0.5+"px"+")")  
})