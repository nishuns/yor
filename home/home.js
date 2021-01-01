$(document).ready(()=>{
  document.body.style.display='block';
})

// function for menu open and close
function myFunction(x) {
    x.classList.toggle("change");
    $(".profile-nav").slideUp();
}

$('.profile-image-href').mouseenter(()=>{
  $(".profile-nav").slideDown();
});

$('.profile-image-href').mouseleave(()=>{
  $(".profile-nav").slideUp(500,()=>{
    $('.profile-nav').mouseenter(()=>{
      $('.profile-nav').stop();
      $(".profile-nav").slideDown(()=>{
        $('.profile-nav').mouseleave(()=>{
          $(".profile-nav").slideUp();
        });
      });
    });
  });
});


// if($('body').outerWidth()<768){
//   $('.profile-image-href').click(()=>{
//     $(".profile-nav").slideToggle();
//   });
// }else{
//   $('.profile-image-href').mouseenter(()=>{
//     $(".profile-nav").slideDown();
//   });

//   $('.profile-image-href').mouseleave(()=>{
//     $('.profile-nav').mouseenter(()=>{
//       $(".profile-nav").slideDown();
//     });
//     $('.profile-nav').mouseleave(()=>{
//       $(".profile-nav").slideUp();
//     });
//   });
// }

// $(document).ready(function(){
//   $(window).resize(function(){
//     console.log($('body').outerWidth());
//     if($('body').outerWidth()<768){
//       $('.profile-image-href').click(()=>{
//         $(".profile-nav").slideToggle();
//       });
//     }else{
//       $('.profile-image-href').mouseenter(()=>{
//         $(".profile-nav").slideDown();
//       });
    
//       $('.profile-image-href').mouseleave(()=>{

//         $('.profile-nav').mouseenter(()=>{
//           $(".profile-nav").slideDown();
//         });
//         $('.profile-nav').mouseleave(()=>{
//           $(".profile-nav").slideUp();
//         });
        
//       });
//     }
//   });
// })





if($('body').outerWidth()<768){
  $('.nav-menu').slideUp();
}else{
  $('.nav-menu').css('display', 'flex');
}


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