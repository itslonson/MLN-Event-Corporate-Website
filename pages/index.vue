<template>
  <div>
    <section class="slider">
      <article class="slider__item cont0">
          <div class="nav-logo">
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
          $('.menu-image-1').fadeIn(500);
      });

      $('.weddings').mouseleave(function(){
          $('.menu-image-1').fadeOut(250);
      });

      $('.corporate').mouseenter(function(){
          $('.menu-image-2').fadeIn(500);
      });

      $('.corporate').mouseleave(function(){
          $('.menu-image-2').fadeOut(250);
      });

      $('.kids').mouseenter(function(){
          $('.menu-image-3').fadeIn(500);
      });

      $('.kids').mouseleave(function(){
          $('.menu-image-3').fadeOut(250);
      });

      $('.vip').mouseenter(function(){
          $('.menu-image-4').fadeIn(500);
      });

      $('.vip').mouseleave(function(){
          $('.menu-image-4').fadeOut(250);
      });

      $(window).mousemove(function(event) {
        $(".bubbles").css({
          "margin-left": -(event.pageX * 0.01),
          "margin-top": -(event.pageY * 0.01)
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
  }
};
</script>

<style scoped>

/* utils */

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
  margin-block-start: 2rem;
  flex: 2;
  order: 1;
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
}

.motto {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 2.5em;
}

.menu {
  flex: 1;
  flex-basis: auto;
  margin-block-start: 8rem;
  order: 2;
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
</style>

