<template>
  <div>
    <section class="slider">
      <article class="slider__item cont0">
          <div class="nav-logo">

            <nav class="navbar">
                  <span class="navbar-logo">
                    <nuxt-link to="/" class="nav-links">Millenum Event</nuxt-link>
                  </span>
                  <span class="navbar-toggle" id="js-navbar-toggle">
                    <i class="fas fa-bars"></i>
                  </span>
                    <ul class="main-nav" id="js-menu">

                        <li>
                            <nuxt-link to="/about" class="nav-links">о нас</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/portfolio" class="nav-links">портфолио</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/loft" class="nav-links">LOFT</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/posts" class="nav-links">блог</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/weddings" class="nav-links">свадьба</nuxt-link>
                        </li>
                        
                        <li>
                            <nuxt-link to="/corporate" class="nav-links">корпоративы</nuxt-link>
                        </li>

                        <li>
                          <nuxt-link to="/kids" class="nav-links">для детей</nuxt-link>
                        </li>

                        <li>
                          <nuxt-link to="/vip" class="nav-links">VIP</nuxt-link>
                        </li>
                    </ul>
            </nav>

            <nav class="tabs">
              <ul class="tabs-ul">
                <li class="tabs-li disableselect disabledrag">
                  <nuxt-link to="/about">о нас</nuxt-link>
                </li>
                <li class="tabs-li disableselect disabledrag">
                  <nuxt-link to="/portfolio">портфолио</nuxt-link>
                </li>
                <li class="tabs-li disableselect disabledrag">
                  <nuxt-link to="/loft">LOFT</nuxt-link>
                </li>
                <li class="tabs-li disableselect disabledrag">
                  <nuxt-link to="/posts">блог</nuxt-link>
                </li>
              </ul>
            </nav>

            <div class="logo">
              <img src="~assets/logo.svg" class="disableselect disabledrag" alt>
              <h3 class="motto">ВАШ ЛУЧШИЙ ПРАЗДНИК</h3>
            </div>
            
          </div>

          <nav class="menu">
            <ul class="menu-ul">
              <li class="menu-li disableselect disabledrag">
                <nuxt-link to="/weddings" class="weddings">свадьба</nuxt-link>
                <img src="~/assets/flowers.png" alt="flower" class="menu-image-1">
              </li>
              <li class="menu-li disableselect disabledrag">
                <nuxt-link to="/corporate" class="corporate">корпоративы</nuxt-link>
                <img src="~/assets/glasses.png" alt="glasses" class="menu-image-2">
              </li>
              <li class="menu-li disableselect disabledrag">
                <nuxt-link to="/kids" class="kids">для детей</nuxt-link>
                <img src="~/assets/t_bear.png" alt="teddy bear" class="menu-image-3">                
              </li>
              <li class="menu-li disableselect disabledrag">
                <nuxt-link to="/vip" class="vip">VIP</nuxt-link>
                <img src="~/assets/crown.png" alt="vip" class="menu-image-4">                
              </li>
            </ul>
          </nav>
          
          <div class="bubbles">
            <img src="~assets/bubbles.png" alt class="disableselect disabledrag">
          </div>

      </article>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {

      $('.weddings').mouseenter(function(){
          $('.menu-image-1').fadeIn(250);
      });

      $('.weddings').mouseleave(function(){
          $('.menu-image-1').fadeOut(250);
      });

      $('.corporate').mouseenter(function(){
          $('.menu-image-2').fadeIn(250);
      });

      $('.corporate').mouseleave(function(){
          $('.menu-image-2').fadeOut(250);
      });

      $('.kids').mouseenter(function(){
          $('.menu-image-3').fadeIn(250);
      });

      $('.kids').mouseleave(function(){
          $('.menu-image-3').fadeOut(250);
      });

      $('.vip').mouseenter(function(){
          $('.menu-image-4').fadeIn(250);
      });

      $('.vip').mouseleave(function(){
          $('.menu-image-4').fadeOut(250);
      });

      $(window).mousemove(function(event) {
        $(".bubbles").css({
          "margin-left": -(event.pageX * 0.025),
          "margin-top": -(event.pageY * 0.025)
        });
      });



      $(".slider").slick({
        arrows: false
      });

      $(".slider").mousewheel(function(e) {
        if (e.deltaY !== 1) {
          $(".slider").slick("slickNext");
        } else {
          $(".slider").slick("slickPrev");
        }
        e.preventDefault();
      });
    });

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  }
};
</script>

<style scoped>

/* utils */

html,body{
  width: 100%;
  height: 100%;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

.disableselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.disabledrag {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}


/* tags */
ul {
  list-style: none;
  z-index: 4;
}

li {
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  z-index: 4;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.3em;
}


/* desktop classes */

.slider {
  width: 100vw;
  height: 100vh;
}

.slick-list,
.slick-track {
  width: 100%;
  height: 100%;
}

.slider__item {
  width: 100%;
  height: 100%;
}

.cont0 {
  margin: auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background: linear-gradient(to right, #e9c000 0%, #ff03fc 100%);
}


.nav-logo {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5rem;
  flex: 2;
  order: 2;
  flex-direction: column-reverse;
}

.tabs {
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 4;
}

.logo {
  flex-wrap: wrap;
  z-index: 4;
  transform: scale(0.8);
  align-items: center;
  justify-content: center;
}

.motto {
  width: 500px;
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 2.5em;
  margin: 40px 0px 0px 10px;
  text-align: center;
}

.menu {
  flex: 1;
  flex-basis: auto;
  margin-block-start: 2rem;
  order: 3;
  z-index: 4;
}

.menu-ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  z-index: 4;
}

.menu-li {
  position: relative;
  padding: 0px;
  margin: 16px 0px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 4;
}

.menu a:hover {
  color: #e9c000;
}

.tabs-ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  z-index: 4;
  margin: 0;
}

.tabs-li {
  position: relative;
  padding: 0px;
  margin: 0px 20px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 4;
}

.tabs a::before {
  content: "";
  display: block;
  height: 5px;
  background-color: #ff03fc;

  position: absolute;
  bottom: 26px;
  width: 0%;
  transition: all ease-in-out 250ms;
}

.tabs a:hover {
  color: #ff03fc;
}

.tabs a:hover::before {
  width: 100%;
}

.bubbles {
  overflow: hidden;
  position: fixed;
  top: -19%;
  z-index: 1;

  transform: scale(0.5);
}

.menu-image-1 {
    display: none;
    z-index: -1;
    transform: scale(0.7);
    position: absolute;
    top: -19em;
    left: -21em;
}

.menu-image-2 {
    display: none;
    z-index: -1;
    transform: scale(0.7);
    position: absolute;
    top: -20em;
    left: -19em;
}

.menu-image-3 {
    display: none;
    z-index: -1;
    transform: scale(0.7);
    position: absolute;
    top: -24em;
    left: -21em;
}

.menu-image-4 {
    display: none;
    z-index: -1;
    transform: scale(0.7);
    position: absolute;
    top: -26em;
    left: -21em;
}

.navbar{
  display: none;
}

/* MEDIA 768 

  position: sticky;
  width: 100%;
  height: 70px;
  top:0;
  padding-top: 30px;

*/

@media (max-width: 1017px) { 

  .nav-logo {
    margin-left: 0rem;
  }

  .motto {
    width: 500px;
    margin: 40px 0px 0px 11px;
    font-weight: 400;
    font-size: 2.0em;
    text-align: left;
  }

  .logo {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .tabs{
    width: 500px;
  }

  .tabs-ul{
    padding: 0;
    margin: 0 0 0 40px;
  }

  .menu{
    padding: 0;
    margin: 10px 10px 10px 0px;

  }
}

@media (max-width: 691px) {

  .bubbles{
    overflow: hidden;
    position: absolute;
    z-index: 8;
  }

  .tabs, .tabs-ul, .tabs-li, .menu, .menu-ul, .menu-li  {
    all: unset;
    display: none;
    visibility: hidden;
  }

  .navbar{
    all: unset;
  }

  .navbar {
    order: 1;
    width: 100%;
    background: linear-gradient(to right, #e9c000 0%, #ff03fc 100%);
    z-index: 5;
  }

  .main-nav {
    list-style-type: none;
  }

  .main-nav li {
    text-align: center;
    margin: 15px auto;
  }

  .navbar-logo{
    position: absolute;
    top: 10px;
    left: 20px;
    cursor: pointer; 
    color: rgba(255,255,255,0.8);
    z-index: 6;
  }

  .navbar-toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer; 
    color: rgba(255,255,255,0.8);
    font-size: 24px;
    z-index: 6;
  }

  .main-nav {
    list-style-type: none;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    z-index: 5;
  }

  .active {
    visibility: visible;
    opacity: 1;
  }

  .logo{
    all: unset;
    display: none;
  }
}

</style>

