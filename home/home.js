// function for menu open and close
function myFunction(x) {
    x.classList.toggle("change");
}

$('.profile-image-href').mouseenter(()=>{
  $(".profile-nav").slideDown();
});

$('.profile-image-href').mouseleave(()=>{
  $('.profile-nav').mouseenter(()=>{
    $(".profile-nav").slideDown();
  });
  $('.profile-nav').mouseleave(()=>{
    $(".profile-nav").slideUp();
  });
  
});




// menu-button settings
$(".nav-container").click(function(){
    $(".nav-menu").slideToggle();
  });

  $(document).ready(function(){
    $(window).resize(function(){
      console.log($('body').outerWidth());
      if($('body').outerWidth()<768){
        document.querySelector('.nav-container').className="nav-container";
        $('.nav-menu').slideUp();
      }else{
        $('.nav-menu').css('display', 'flex');
        document.querySelector('.nav-container').classList.toggle("change");
      }
    });
  })