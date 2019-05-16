<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="logo">
          <nuxt-link to="/" class="long">Millennium Event</nuxt-link>
          <nuxt-link to="/" class="short">ME</nuxt-link>
        </div>
        <div id="menu-id" class="menu">
          <ul class="nav-links">
            <li>
              <nuxt-link to="/about">о нас</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services">услуги</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio">портфолио</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/loft">loft</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/posts">блог</nuxt-link>
            </li>
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
        <img src="~assets/images/bubbles.png" alt="bubbles" class="bubbles">
        <div class="nav-info-logo">
          <img src="~assets/images/logo_box.png" alt="logo" class="logo-box">
        </div>
        <div class="nav-slider-text">
          <h1>Millennium Event</h1>
          <p>Ваш лучший праздник</p>
          <button>
            <a href="/about">наше портфолио</a>
          </button>
        </div>
      </section>

      <section class="nav-overlay-slide2">
        <img src="~assets/images/bubbles.png" alt="bubbles" class="bubbles">
        <div class="nav-info-flowers">
          <img src="~assets/images/flowers.png" alt="flowers" class="flowers">
        </div>
        <div class="nav-slider-text">
          <h1>Свадьбы</h1>
          <p>Ваш лучший праздник</p>
          <button>
            <a href="/about">подробнее</a>
          </button>
        </div>
      </section>

      <section class="nav-overlay-slide3">
        <img src="~assets/images/bubbles.png" alt="bubbles" class="bubbles">
        <div class="nav-info-glasses">
          <img src="~assets/images/glasses.png" alt="glasses" class="glasses">
        </div>
        <div class="nav-slider-text">
          <h1>Корпоративы</h1>
          <p>Ваш лучший праздник</p>
          <button>
            <a href="/about">подробнее</a>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > $(".nav-overlay").height()) {
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
      arrows: false
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

.bubbles {
  transform: scale(0.45);
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
  background: linear-gradient(to right, #ff03fc 0%, #7200e1 100%);
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
  background: linear-gradient(to right, #7200e1 0%, #e9c000 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
}

.nav-info-logo {
  position: absolute;
  top: 17%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-info-logo .logo-box {
  width: 200px;
  padding: 0;
  margin: 0;
}

.nav-info-flowers {
  position: absolute;
  top: 17%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-info-flowers .flowers {
  width: 280px;
  padding: 0;
  margin: 0;
}

.nav-info-glasses {
  position: absolute;
  top: 17%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-info-glasses .glasses {
  width: 350px;
  padding: 0;
  margin: 0;
}

.nav-slider-text {
  position: absolute;
  top: 60%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.nav-slider-text > h1,
.nav-slider-text > p,
.nav-slider-text > button > a {
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

.nav-slider-text > button:hover {
  background: #e9c000;
  transition: all 0.1s ease-in-out;
}

/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .nav-info-logo,
  .nav-info-flowers,
  .nav-info-glasses {
    top: 20%;
  }

  .bubbles {
    transform: scale(0.3);
    z-index: 0;
  }

  .nav-slider-text {
    position: absolute;
    top: 70%;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 10px 0px;
  }

  .nav-slider-text > h1 {
    font-size: 2rem;
    margin: 10px 0;
  }

  .nav-slider-text > p {
    font-size: 1rem;
  }

  .nav-slider-text > button {
    margin: 12px 0px;
    width: 100%;
    height: 60px;
    background: transparent;
    border: 4px solid #e9c000;
    border-radius: 50px;
  }

  .nav-slider-text > button > a {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

@media screen and (min-width: 320px) and (max-width: 425px) {
  .bubbles {
    transform: scale(0.14);
    z-index: 0;
  }
  .nav-slider-text {
    position: absolute;
    top: 70%;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 10px 0px;
  }

  .nav-slider-text > h1 {
    font-size: 1.7rem;
    margin: 10px 0;
  }

  .nav-slider-text > p {
    font-size: 1rem;
  }

  .nav-slider-text > button {
    margin: 12px 0px;
    width: 100%;
    height: 60px;
    background: transparent;
    border: 4px solid #e9c000;
    border-radius: 50px;
  }

  .nav-slider-text > button > a {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>


