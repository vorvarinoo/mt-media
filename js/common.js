jQuery( document ).ready( function( $ ) {


  $( '.header__left .header__hamburger, .header__hamburger_close' ).click( function() {
    $( '.header__mobile' ).toggleClass( 'open' );
    $( 'html' ).toggleClass( 'is-open-menu' );
  } );

  $( '.develop__read' ).click( function() {
    $( '.develop__more' ).slideToggle( '400' );
    $( '.develop__gallery' ).addClass( 'open' );
  } );



  $( '.offer button, .order button, .consultation button' ).click( function() {
    $( '.form__title' ).html( 'Закажите консультацию <span>наш менеджер свяжется с вами в течении 15 минут</span>' );
    $( '.form__form input[type="submit"]' ).val( 'Заказать консультацию' );
  } );

  $( '.result button' ).click( function() {
    $( '.form__title' ).html( 'Закажите аудит <span>наш менеджер свяжется с вами в течении 15 минут</span>' );
    $( '.form__form input[type="submit"]' ).val( 'Заказать аудит' );
  } );

  $( '.footer button' ).click( function() {
    $( '.form__title' ).html( 'Закажите звонок <span>наш менеджер свяжется с вами в течении 15 минут</span>' );
    $( '.form__form input[type="submit"]' ).val( 'Заказать звонок' );
  } );

  $( '.header__mobile > button' ).click( function() {
    $( '.form__title' ).html( 'Задайте нам вопрос <span>наш менеджер свяжется с вами в течении 15 минут</span>' );
    $( '.form__form input[type="submit"]' ).val( 'Задать вопрос' );
  } );

  /*
  $( '.offer button, .order button, .result button, .consultation button, .footer__right button' ).click(function(){
     $( '.form__popup-wrapper .form__popup-title' ).text( 'Закажите звонок' );
     $( '.form__popup-wrapper .ff-btn-submit' ).text( 'Перезвоните мне' );
  });

  $( '.offer button, .order button, .result button, .consultation button, .footer__right button' ).click(function(){
     $( '.form__popup-wrapper .form__popup-title' ).text( 'Закажите звонок' );
     $( '.form__popup-wrapper .ff-btn-submit' ).text( 'Перезвоните мне' );
  });
  */



  const swiper_one = new Swiper( '.cases__row .swiper', {

    slidesPerView: 3,
    //slidesPerGroup: 1,
    //watchSlidesProgress: true,
    grabCursor: true,
    //threshold: 1,
    //spaceBetween: 30,
    //autoplay: {
    // delay: 5000,
    // pauseOnMouseEnter: true,
    //},
    speed: 700,
    //cssMode: true,
    //freeMode: true,
    //wrapperClass: 'gall-two',
    //direction: 'vertical',
    loop: true,
    centeredSlides: true,
    spaceBetween: 100,
    //initialSlide: 2,
    autoHeight: true,

    pagination: {
      el: ".cases__pagination",
      clickable: true,
      //dynamicBullets: true,
    },

    navigation: {
      nextEl: '.cases__row .swiper-button-next',
      prevEl: '.cases__row .swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      // when window width is >= 992px
      992: {
        spaceBetween: 100
      },
      // when window width is >= 1200px
      1200: {
        spaceBetween: 100
      }
    }

    //scrollbar: {
    // el: '.swiper-scrollbar',
    // draggable: true,
    // dragSize: 100,
    // snapOnRelease: true
    //},

  } );





  const swiper_two = new Swiper( '.price__block .swiper', {

    slidesPerView: 3,
    //slidesPerGroup: 1,
    //watchSlidesProgress: true,
    grabCursor: true,
    //threshold: 1,
    spaceBetween: 35,
    //autoplay: {
    // delay: 5000,
    // pauseOnMouseEnter: true,
    //},
    speed: 700,
    //cssMode: true,
    //freeMode: true,
    //wrapperClass: 'gall-two',
    //direction: 'vertical',
    loop: true,

    navigation: {
      nextEl: '.price__row .swiper-button-next',
      prevEl: '.price__row .swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 992px
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
      }
    }


  } );




  const swiper_three = new Swiper( '.reviews__block .swiper', {

    slidesPerView: 1,
    //slidesPerGroup: 1,
    //watchSlidesProgress: true,
    grabCursor: true,
    //threshold: 1,
    //spaceBetween: 35,
    //autoplay: {
    // delay: 5000,
    // pauseOnMouseEnter: true,
    //},
    speed: 700,
    autoHeight: true,
    //cssMode: true,
    //freeMode: true,
    //wrapperClass: 'gall-two',
    //direction: 'vertical',
    loop: true,

    navigation: {
      nextEl: '.reviews__block .swiper-button-next',
      prevEl: '.reviews__block .swiper-button-prev',
    },

    pagination: {
      el: ".reviews__pagination",
      clickable: true,
      //dynamicBullets: true,
    },


  } );






  $( '[data-fancybox="gallery-one"]' ).fancybox( {

    //selector: '.swiper-slide:not(.swiper-slide-duplicate) > a',
    selector: '.cases__row .swiper .swiper-slide:not(.swiper-slide-duplicate) a',
    //thumbs : {
    //  autoStart : true
    //},
    toolbar: true,
    buttons: [
      "zoom",
      //"share",
      //"slideShow",
      "fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    touch: true,
    loop: true,

    afterShow: function() {
      $( '.fancybox-button--zoom' ).click();
    }

  } );



  $( '[data-fancybox="gallery-two"]' ).fancybox( {

    //selector: '.swiper-slide:not(.swiper-slide-duplicate) > a',
    selector: '.price__row .swiper .swiper-slide:not(.swiper-slide-duplicate) a',
    //thumbs : {
    //  autoStart : true
    //},
    toolbar: true,
    buttons: [
      "zoom",
      //"share",
      //"slideShow",
      "fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    touch: true,
    loop: true,

    afterShow: function() {
      $( '.fancybox-button--zoom' ).click();
    }

  } );



  $( '[data-fancybox="gallery-three"]' ).fancybox( {

    //selector: '.develop__row .develop__gallery .develop__item .develop__overlay button',
    selector: '.develop__row .develop__gallery .develop__item .yellow__button',
    //thumbs : {
    //  autoStart : true
    //},
    //baseClass: 'develop',
    //wrapCSS: 'develop',
    //slideClass: 'develop',
    toolbar: true,
    buttons: [
      'zoom',
      //"share",
      //"slideShow",
      'fullScreen',
      //"download",
      //"thumbs",
      'close'
    ],
    touch: true,
    wheel: false,
    loop: true,

    afterShow: function() {
      $( '.fancybox-button--zoom' ).click();
    }

  } );



  //jQuery( '.cases__img a' ).click(function() {
  //   setTimeout(function(){
  //     jQuery('.fancybox-button--zoom').click();
  //   }, 10);
  //});


  $.fancybox.defaults.backFocus = false;

  $( '.offer button, .order button, .result button, .consultation button, .footer button' ).fancybox( {
    touch: false,
    scrolling: 'no'
  } );



  $( '.li-nk' ).click( function() {
    var scroll_el = jQuery( this ).attr( 'href' );
    if ( $( scroll_el ).length != 0 ) {
      $( 'html, body' ).animate( {
        scrollTop: $( scroll_el ).offset().top - 70
      }, 700 );
      $( '.header__mobile' ).removeClass( 'open' );
      $( 'html' ).removeClass( 'is-open-menu' );
    }
    return false;
  } );

  $( '.offer__img--mobile' ).click( function() {
    $( '.offer__img--mobile' ).toggleClass( 'offer__img--click' );
  } );

} );


//Код для смены текста на кнопках при нажании, в блоке портфолио
const cb = ( evt ) => {
  if ( evt.target.classList.contains( 'click-btn' ) ) {
    evt.target.textContent = 'Были внесены изменения'
  }
};

document.addEventListener( 'click', cb );


//Код для скрытия/появления шапки при скролле

const header = document.querySelector( ".header" );

let lastScrollPosition = 0;

window.addEventListener( "scroll", () => {
  let currentScrollPosition = window.pageYOffset;

  if ( currentScrollPosition - lastScrollPosition > 0 ) {
    header.classList.add( "hide" );
  } else {
    header.classList.remove( "hide" );
  }

  if ( currentScrollPosition < 50 ) {
    header.classList.remove( "hide" );
  }

  lastScrollPosition = currentScrollPosition;
} )