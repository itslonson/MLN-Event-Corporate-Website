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

    <section class="nav-overlay">
      <img src='~assets/images/bubbles.png' alt="bubbles" class="bubbles">
        <div class="nav-info-logo">
          <img src="~assets/images/logo_box.png" alt="logo" class="logo-box">
        </div> 
            <div id = "loft" class="nav-slider-text">
          <h1>loft</h1>
        </div>     
    </section>

    <section class="nav-overlay-1">
      <img src='~assets/images/bubbles.png' alt="bubbles" class="bubbles">

      <div class="overlay-1-area">
          <div class="left-area">
              <p>вместимость лофта</p>
              <h4>до 150 человек</h4>
          </div>
          <div class="right-area">
              <video autoplay="" muted="" loop="">
                  <source src="~assets/videos/loft_video.mp4">
              </video>
              <img src="~assets/images/splash.png" alt="" class="splash">
          </div>
          <div class="bottom-area">
              <h1>организация, проведение, сопровождение, обслуживание</h1>
          </div>
      </div>

    </section>

    <section class="nav-overlay-2">
        <div class="overlay-2-area">
            <div class="top-area">
                <img src="~assets/images/logo_box.png" alt="logo" class="top-area-logo">
                <h1>включено в аренду</h1>
            </div>
            <div class="middle-area">

                <h3>ПЕРСОНАЛ:</h3>
                <p>— художник по свету</p>
                <p>— звукорежиссер </p>
                <p>— клинер 1 человек</p>
                <p>— персональный менеджер события</p>

                <h3>ТЕХНИКА:</h3>
                <p>— 10 кВт активной акустики</p>
                <p>— 2 ручных радиомикрофона, цифровой микшерный пульт 16 каналов с беспроводным управлением.</p>
                <p>— 20 световых приборов, включая профессиональный пульт chamsys, стробоскоп, дискошар и дыммашина.</p>
                <p>— проектор 6000 Лмн</p>
                <p>— экран (Огромная белая стена, как в кинотеатре) </p>
                <p>— проводной и беспроводной интернет 90 мБит/с более чем на 100 подключений</p>
                <p>— сцена 4\3</p>
                <p>— кликер презентер</p>
            </div>        
        </div>
    </section>   

    <section class="nav-overlay-3">
        <div class="overlay-3-area">
            <div class="top-area">
                <img src="~assets/images/logo_box.png" alt="logo" class="top-area-logo">
                <h1>оформим</h1>
                <p>Построим сцену любой сложности, арт-объекты и декорации, создание брендового мероприятия, свадебный декор и флористика, дизайн полиграфии и создание тематической атмосферы.</p>
            </div>
                <div class="slick-slider">
                    <div class="slider-img"><img src="~assets/images/loft/loft_1.jpg" alt=""></div>
                    <div class="slider-img"><img src="~assets/images/loft/loft_2.jpg" alt=""></div>
                    <div class="slider-img"><img src="~assets/images/loft/loft_3.jpg" alt=""></div>
                    <div class="slider-img"><img src="~assets/images/loft/loft_4.jpg" alt=""></div>                                                                     
                </div>
        </div> 
    </section>

    <section class="nav-overlay-4">
        <div class="overlay-4-area">
            <div class="top-area">
                <h1>Moskva catering</h1>
                <p>фуршет, банкет, станции анимации,фуд-корт, стрит-фуд, пикник, барбекю, бар и многое другое. Ваши гости будут сыты и довольны.</p>
            </div>
            <div class="middle-area">
            <div class="video-cover"></div>
            <iframe src="https://www.youtube.com/embed/IjtJEbHUxQs?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;origin=https://www.sredaloft.ru&amp;playlist=IjtJEbHUxQs&amp;mute=1" frameborder="0" allow="autoplay" id="widget4" style="height: 988px; width: 1762px; margin-top: -147px; margin-left: -198px;"></iframe>
            </div>
        </div>

    </section>

  </div>
</template>
<script>
export default {
  mounted() {

    $(window).scroll(function() {
        if ( ($(document).scrollTop() > ($(".nav-overlay-1").height() + 500)) ) {
        $(".nav").addClass("nav-min-pink"); 
      }
        if ( ($(document).scrollTop() > ($(".nav-overlay-1").height() + $(".nav-overlay-2").height() + 800)) ){
        $(".nav").removeClass("nav-min-pink");
        $(".nav").addClass("nav-min-purple");
      }
        if ( ($(document).scrollTop() < ($(".nav-overlay-1").height() + 500))) {
            $(".nav").removeClass("nav-min-pink");          
      }
        if ( ($(document).scrollTop() < ($(".nav-overlay-1").height() + $(".nav-overlay-2").height() + 800)) ){
            $(".nav").removeClass("nav-min-purple");
        }

        if ( ($(document).scrollTop() > ($(".nav-overlay-1").height() + $(".nav-overlay-2").height() + 1400)) ){
        $(".nav").removeClass("nav-min-pink");
        $(".nav").removeClass("nav-min-purple");
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
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2600,
      arrows: false,
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

.slick-slider{
    top: 15%;
    padding: 0;
    margin: 0;
}

.slider-img{
    transform: scale(0.45);
    margin: 0 390px;
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
  color: #e9c000;
}

.nav-min-pink {
  padding: 0;
  background: #ff03fc;
  opacity: 0.8;
}

.nav-min-purple {
  padding: 0;
  background: #7200e1;
  opacity: 0.8;
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
  background: linear-gradient(to bottom, #ff03fc  0%, #e9c000 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.nav-overlay-1 {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #e9c000  0%, #ff03fc 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.nav-overlay-2 {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 122vh;
  background: #ff03fc;
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.nav-overlay-3 {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 120vh;
  background: linear-gradient(to bottom, #ff03fc  0%, #7200e1 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.nav-overlay-4 {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: #7200e1;
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}


.nav-info-logo {
  position: absolute;
  top: 25%;
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

.nav-slider-text{
  position: absolute;
  top:60%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-slider-text > h1{
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: #fff;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 80px 0;
}

.nav-slider-text-sticky{
    position: fixed;
    top: 10%;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    z-index: 100;
}

.nav-slider-text-sticky > h1{
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: #fff;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 10px 0;
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

.overlay-1-area{
    width: 100%;
    height: 100%;
    position: absolute;
    display: inline-block;
}

.overlay-1-area .left-area{
    position: absolute;
    top: 15%;
    left: 5%;
    padding: 0;
    margin: 0;
}

.overlay-1-area .left-area p, .bottom-area h1{
    font-size: 2em;
    color: #fff;
    padding: 0;
    margin: 0;
}

.overlay-1-area .left-area h4{
    color: #fff;
    font-size: 4em;
    padding: 0;
    margin: 0;
}

.overlay-1-area .right-area{
    position: absolute;
    top: 15%;
    right: 10%;
}

.overlay-1-area .right-area video{
    position: relative;
    width: 600px;
    z-index: 5;
}

.overlay-1-area .right-area > .splash{
    position: absolute;
    width: 1000px;
    bottom: -110%;
    right: -22%;
    z-index: 0;
}

.overlay-1-area .bottom-area{
    position:absolute;
    bottom: 15%;
    left: 18%
}

.overlay-2-area{
    width: 100%;
    height: 100%;
}

.overlay-2-area .top-area-logo{
    position: absolute;
    width: 70px;
    top: 5%;
    left: 10%;
}

.overlay-2-area .top-area h1 {
    position: absolute;
    color: #fff;
    font-size: 4em;
    top: 3%;
    left: 21%;
    text-transform: uppercase;
}

.overlay-2-area .middle-area{
    position: absolute;
    top: 15%;
    left: 21%;
}

.overlay-2-area .middle-area h3{
    color: #fff;
    font-size: 2em;
    text-transform: uppercase;
}

.overlay-2-area .middle-area p{
    color: #fff;
    font-size: 1.25em;
}

.overlay-3-area{
    width: 100%;
    height: 100%;
}

.overlay-3-area .top-area-logo{
    position: absolute;
    width: 70px;
    top: 5%;
    left: 10%;
}

.overlay-3-area .top-area h1 {
    position: absolute;
    color: #fff;
    font-size: 4em;
    top: 3%;
    left: 21%;
    text-transform: uppercase;
}

.overlay-3-area .top-area p {
    position: absolute;
    width: 50%;
    top: 15%;
    left: 21%;
    color: #fff;
    font-size: 1.25em;
    padding: 30px 0;
}

.overlay-4-area{
    width: 100%;
    height: 100%;
}

.overlay-4-area .top-area h1 {
    position: absolute;
    color: #fff;
    font-size: 4em;
    top: 8%;
    left: 21%;
    text-transform: uppercase;
    z-index: 5;
}

.overlay-4-area .top-area p {
    position: absolute;
    width: 50%;
    top: 20%;
    left: 21%;
    color: #fff;
    font-size: 1.5em;
    padding: 30px 0;
    z-index: 5;
}

.video-cover{
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    background-size: cover;
    background-position: center;
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
    background: black;
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


</style>


