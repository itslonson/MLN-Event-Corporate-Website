<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="logo">
          <nuxt-link to='/' class="long">Millennium Event</nuxt-link>
          <nuxt-link to='/' class="short">ME</nuxt-link>
        </div>
        <div id="menu-id" class="menu">
          <ul class="nav-links">
            <li><nuxt-link to="/about">о нас</nuxt-link></li>
            <li><nuxt-link to="/services">услуги</nuxt-link></li>            
            <li><nuxt-link to="/portfolio">портфолио</nuxt-link></li>
            <li><nuxt-link to="/loft">loft</nuxt-link></li>
            <li><nuxt-link to="/posts">блог</nuxt-link></li>
          </ul>
        </div>
        <a class="tel" href="tel:+74957710992">+7 (495) 771-09-92</a>
        <span class="nav-trigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
    <div class="slick-slider">
    <section class="nav-overlay">
      <img src='~assets/images/bubbles.png' alt="bubbles" class="bubbles">
        <div class="nav-info-logo">
          <img src="~assets/images/logo_box.png" alt="logo" class="logo-box">
        </div>
        <div class="nav-slider-text">
          <h1>Millennium Event</h1>
          <p>Ваш лучший праздник</p>
          <button><a href="/about">наше портфолио</a></button>
        </div>        
    </section>

    <section class="nav-overlay-slide2">
      <img src='~assets/images/bubbles.png' alt="bubbles" class="bubbles">
        <div class="nav-info-flowers">
          <img src="~assets/images/flowers.png" alt="flowers" class="flowers">
        </div>
        <div class="nav-slider-text">
          <h1>Свадьбы</h1>
          <p>Ваш лучший праздник</p>
          <button><a href="/about">подробнее</a></button>
        </div>        
    </section>

        <section class="nav-overlay-slide3">
      <img src='~assets/images/bubbles.png' alt="bubbles" class="bubbles">
        <div class="nav-info-glasses">
          <img src="~assets/images/glasses.png" alt="glasses" class="glasses">
        </div>
        <div class="nav-slider-text">
          <h1>Корпоративы</h1>
          <p>Ваш лучший праздник</p>
          <button><a href="/about">подробнее</a></button>
        </div>        
    </section>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

    $(window).scroll(function() {
      if ($(document).scrollTop() > ($(".nav-overlay").height()) ) {
        $(".nav").addClass("nav-min");
      } else {
        $(".nav").removeClass("nav-min");
      }
    });

    $(".nav-trigger").click(function() {
      $(this).toggleClass("active");
      $("#menu-id").toggleClass("show-list");
      $("#menu-id").fadeIn();
    });

    $(window).mousemove(function(event) {
      $(".bubbles").css({
        "margin-left": -(event.pageX * 0.025),
        "margin-top": -(event.pageY * 0.025)
      });
    });

    $(".slick-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      arrows: false,
    });

    $(".slick-slider").mousewheel(function(e) {
      if (e.deltaY !== 1) {
        $(".slick-slider").slick("slickNext");
      } else {
        $(".slick-slider").slick("slickPrev");
      }
      e.preventDefault();
    });


  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bubbles{
  transform: scale(0.45);
}

/* Navbar section */

.nav {
  width: 100%;
  height: 65px;
  position: fixed;
  line-height: 65px;
  text-align: center;
  z-index: 100;
}

.nav .logo {
  float: left;
  width: auto;
  height: auto;
  padding-left: 3rem;
}

.nav .logo .short {
  display: none;
  font-size: 2em;
  padding-left: 0.5em;
}

.nav .logo a {
  text-decoration: none;
  color: #fff;
  font-size: 1.75em;
  font-weight: 600;
}

.nav .logo a:hover {
  color: #ff03fc;
}

.nav-min {
  padding: 0;
  background: linear-gradient(to right, #e9c000 0%, #ff03fc 100%);
}

.nav .menu {
  height: 65px;
  float: right;
}

.nav .menu ul {
  width: 100%;
  height: 65px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav .menu ul li {
  width: auto;
  height: 65px;
  padding: 0;
  padding-right: 3rem;
}

.nav .menu ul li a, .tel {
  text-decoration: none;
  color: #fff;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 600;
}

.nav .menu ul li a:hover, .tel:hover{
  color: #e9c000;
}

/* nav-overlay section */

.nav-overlay {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #e9c000 0%, #ff03fc 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.nav-overlay-slide2 {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #ff03fc  0%, #7200e1 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center; 
}

.nav-overlay-slide3 {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #7200e1  0%, #e9c000 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center; 
}

.nav-info-logo {
  position: absolute;
  top: 15%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-info-logo .logo-box{
  width: 200px;
  padding: 0;
  margin: 0;
}

.nav-info-flowers {
  position: absolute;
  top: 6%;
  left: 33%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-info-flowers .flowers{
  width: 400px;
  padding: 0;
  margin: 0;
}

.nav-info-glasses {
  position: absolute;
  top: 6%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-info-glasses .glasses{
  width: 400px;
  padding: 0;
  margin: 0;
}


/* .nav-info-logo .logo-box:hover{
  animation: jumpBox ease-in-out 0.8s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  -webkit-animation: jumpBox ease-in-out 0.8s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: jumpBox ease-in-out 0.8s;
  -moz-animation-iteration-count: 1;
  -moz-transform-origin: 50% 50%;
  -o-animation: jumpBox ease-in-out 0.8s;
  -o-animation-iteration-count: 1;
  -o-transform-origin: 50% 50%;
  -ms-animation: jumpBox ease-in-out 0.8s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
} */

.nav-slider-text{
  position: absolute;
  top: 60%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}



.nav-slider-text > h1, .nav-slider-text > p, .nav-slider-text > button > a {
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: #fff;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}

.nav-slider-text > h1 {
  font-size: 3rem;
  margin: 10px 0;
}

.nav-slider-text > p {
  font-size: 2rem;
}

.nav-slider-text > button {
  margin: 45px 0px;
  width: 100%;
  height: 80px;
  background: transparent;
  border: 4px solid #e9c000;
  border-radius: 50px;
}

.nav-slider-text > button > a {
  font-size: 1.25rem;
  font-weight: 600;
}

.nav-slider-text > button:hover{
  background: #e9c000;
  transition: all 0.1s ease-in-out;
}


.nav-trigger {
  display: none;
}

.nav {
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    margin: 0;
  }

  .tel{
    float: right;
    padding: 0px 48px 0px 0px;
  }
}

@media screen and (max-width: 1024px) {
  .bubbles{
    transform: scale(1);
    z-index: 0;
  }
}

@media screen and (min-width: 426px) and (max-width: 768px) {

  .tel{
    position:absolute;
    right: 15%;
  }

  .nav-trigger {
    display: block;
  }
  
  .nav .menu {
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .nav .show-list {
    height: auto;
    display: none;
    transition: all 0.4s ease-in-out;
  }
  .nav .menu ul {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #e9c000 0%, #ff03fc 100%);
    background-position: center top;
  }
  .nav .menu ul li {
    width: 100%;
    text-align: right;
  }
  .nav .menu ul li a {
    text-align: center;
    width: 100%;
    font-size: 1em;
    padding: 20px;
  }
  .nav .media_button {
    display: block;
  }
}

@media screen and (min-width: 320px) and (max-width: 425px) {

  .tel{
    position: absolute;
    font-size: 1em;
    right: 24%;
  }

  .nav .logo .short {
    display: unset;
  }

  .nav .logo .long {
    display: none;
  }
  .nav-trigger {
    display: block;
  }
  
  .nav .logo {
    float: left;
    width: auto;
    height: auto;
    padding-left: 1rem;
  }
  
  .nav .logo a {
    font-size: 1.25em;
  }

  .nav .menu {
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .nav .show-list {
    height: auto;
    display: none;
    transition: all 0.4s ease-in-out;
  }
  .nav .menu ul {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #e9c000 0%, #ff03fc 100%);
    background-position: center top;
  }
  .nav .menu ul li {
    width: 100%;
    text-align: right;
  }
  .nav .menu ul li a {
    text-align: center;
    width: 100%;
    font-size: 1em;
    padding: 20px;
  }
  .nav .media_button {
    display: block;
  }
}

.nav-trigger {
  cursor: pointer;
  width: 30px;
  height: 25px;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 0;
  bottom: 0;
}

.nav-trigger i {
  background-color: #fff;
  border-radius: 2px;
  content: "";
  display: block;
  width: 100%;
  height: 4px;
}

.nav-trigger i:nth-child(1) {
  -webkit-animation: outT 0.4s backwards;
  animation: outT 0.4s backwards;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

.nav-trigger i:nth-child(2) {
  margin: 5px 0;
  -webkit-animation: outM 0.4s backwards;
  animation: outM 0.4s backwards;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

.nav-trigger i:nth-child(3) {
  -webkit-animation: outBtm 0.4s backwards;
  animation: outBtm 0.4s backwards;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

.nav-trigger.active i:nth-child(1) {
  -webkit-animation: inT 0.4s forwards;
  animation: inT 0.4s forwards;
}

.nav-trigger.active i:nth-child(2) {
  -webkit-animation: inM 0.4s forwards;
  animation: inM 0.4s forwards;
}

.nav-trigger.active i:nth-child(3) {
  -webkit-animation: inBtm 0.4s forwards;
  animation: inBtm 0.4s forwards;
}

@keyframes inM {
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes outM {
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes inT {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(9px) rotate(0deg);
  }
  100% {
    transform: translateY(9px) rotate(135deg);
  }
}

@keyframes outT {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(9px) rotate(0deg);
  }
  100% {
    transform: translateY(9px) rotate(135deg);
  }
}

@keyframes inBtm {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-9px) rotate(0deg);
  }
  100% {
    transform: translateY(-9px) rotate(135deg);
  }
}

@keyframes outBtm {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-9px) rotate(0deg);
  }
  100% {
    transform: translateY(-9px) rotate(135deg);
  }
}

/* @keyframes jumpBox{
  0% {
    transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
}

@-moz-keyframes jumpBox{
  0% {
    -moz-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    -moz-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    -moz-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    -moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    -moz-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    -moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    -moz-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    -moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    -moz-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    -moz-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    -moz-transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
}

@-webkit-keyframes jumpBox {
  0% {
    -webkit-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    -webkit-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    -webkit-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    -webkit-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    -webkit-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    -webkit-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    -webkit-transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
}

@-o-keyframes jumpBox {
  0% {
    -o-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    -o-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    -o-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    -o-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    -o-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    -o-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    -o-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    -o-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    -o-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    -o-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    -o-transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
}

@-ms-keyframes jumpBox {
  0% {
    -ms-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    -ms-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    -ms-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    -ms-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    -ms-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    -ms-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    -ms-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    -ms-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    -ms-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    -ms-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    -ms-transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
} */

a.nuxt-link-active{
  color: red;
}

</style>


