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

    <section class="logo-loft-section">
      <img src="~assets/images/bubbles.png" alt="bubbles" class="bubbles">
      <div class="logo-loft">
        <img src="~assets/images/logo_box.png" class="logo-img" alt="logo">
        <h1>loft</h1>
      </div>
      <img src="~assets/images/scroll-icon.png" class="scroll-img" alt="scroll">
    </section>

    <section class="loft-capacity-section">
      <img src="~assets/images/bubbles.png" alt="bubbles" class="bubbles">
      <div class="capacity-text-area">
        <h4>вместимость лофта</h4>
        <h1>до 150 человек</h1>
      </div>
      <div class="video-area">
        <img src="~assets/images/splash.png" class="splash" alt="splash">
        <video src="~assets/videos/loft_video.mp4" muted controls></video>
      </div>
      <div class="bottom-text">
        <h3>организация, проведение, сопровождение, обслуживаение</h3>
      </div>
    </section>

    <section class="loft-includes-section">
		
      <div class="section-title">
        <div class="section-title-logo">
          <img src="~assets/images/logo_box.png" alt="logo">
        </div>
        <div class="section-title-text">
          <h1>включено в аренду</h1>
        </div>
      </div>

      <div class="includes-section-text-area">
        <h3>ПЕРСОНАЛ:</h3>
        <p>— художник по свету</p>
        <p>— звукорежиссер</p>
        <p>— клинер 1 человек</p>
        <p>— персональный менеджер события</p>

        <h3>ТЕХНИКА:</h3>
        <p>— 10 кВт активной акустики</p>
        <p>— 2 ручных радиомикрофона, цифровой микшерный пульт 16 каналов с беспроводным управлением.</p>
        <p>— 20 световых приборов, включая профессиональный пульт chamsys, стробоскоп, дискошар и дыммашина.</p>
        <p>— проектор 6000 Лмн</p>
        <p>— экран (Огромная белая стена, как в кинотеатре)</p>
        <p>— проводной и беспроводной интернет 90 мБит/с более чем на 100 подключений</p>
        <p>— сцена 4\3</p>
        <p>— кликер презентер</p>
      </div>
    </section>

    <section class="loft-our-offer-section">
      <div class="section-title">
        <div class="section-title-logo">
          <img src="~assets/images/logo_box.png" alt="logo">
        </div>
        <div class="section-title-text">
          <h1>оформим</h1>
        </div>
      </div>
      <div class="our-offer-text-area">
        <p>Построим сцену любой сложности, арт-объекты и декорации, создание брендового мероприятия, свадебный декор и флористика, дизайн полиграфии и создание тематической атмосферы.</p>
      </div>
      <div class="slick-slider our-offer-carousel">
        <div><img src="~assets/images/loft/loft_1.jpg" class="slider-img" alt></div>
        <div><img src="~assets/images/loft/loft_2.jpg" class="slider-img" alt></div>
        <div><img src="~assets/images/loft/loft_3.jpg" class="slider-img" alt></div>
        <div><img src="~assets/images/loft/loft_4.jpg" class="slider-img" alt></div>
		</div>

      <div class="section-title catering">
        <div class="section-title-logo catering">
          <img src="~assets/images/logo_box.png" alt="logo">
        </div>

        <div class="section-title-text catering">
          <h1>Moskva Catering</h1>
        </div>
      </div>
      <div class="our-offer-text-area catering offer-mb">
        <p>Фуршет, банкет, станции анимации,фуд-корт, стрит-фуд, пикник, барбекю, бар и многое другое. Ваши гости будут сыты и довольны.</p>
      </div>
	  <div class="moskva-catering">
		  <div class="video-cover"></div>
		  <video src="~assets/videos/loft_catering.mp4" autoplay muted loop></video>
	  </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // $(window).scroll(function() {
    //   if ($(document).scrollTop() > $(".logo-loft-section").height()) {
    //     $(".nav").addClass("nav-min");
    //   } else {
    //     $(".nav").removeClass("nav-min");
    //   }
    // });

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

	if ($(window).width() > 426) {
		$(".slick-slider").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2600,
			arrows: false
		});		
	}else{
		$(".slick-slider").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2600,
			arrows: false
		});			
	}
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
  z-index: 0;
  position: absolute;
  top: -10%;
}

/* logo-loft-section section */

.logo-loft-section {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #ff03fc 0%, #e9c000 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.logo-loft {
  z-index: 1;
}

.logo-img {
  order: 1;
  width: 200px;
}

.logo-loft h1 {
  order: 2;
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  padding: 0;
  margin: 10px 0;
}

.scroll-img {
  position: absolute;
  bottom: 5%;
  order: 3;
  width: 25px;
}

/* loft-capacity-section section */

.loft-capacity-section {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #e9c000 0%, #ff03fc 100%);
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.capacity-text-area {
  order: 1;
  margin: auto;
  margin-top: 150px;
  align-self: flex-start;
  z-index: 1;
}

.capacity-text-area h1 {
  color: #fff;
  font-size: 3rem;
  padding: 0;
  margin: 10px 0;
}

.capacity-text-area h4 {
  color: #fff;
  font-size: 1.25rem;
  padding: 0;
  margin: 10px 0;
}

.video-area {
  order: 2;
  margin: auto;
  margin-top: 150px;
}

.video-area video {
  height: 350px;
  position: relative;
}

.video-area .splash {
  position: absolute;
  top: 0;
  transform: scaleX(-1);
}

.bottom-text {
  order: 3;
  align-self: center;
  z-index: 1;
  margin: auto;
  color: #fff;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 300;
}

/* loft-includes-section section  */

.loft-includes-section {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #ff03fc;
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  flex-wrap: nowrap;
}

.section-title {
  display: flex;
  order: 1;
  flex-direction: row;
}

.section-title-logo {
  margin-left: 80px;
  margin-right: 150px;
}

.section-title-text {
  margin: auto;
}

.section-title-logo img {
  width: 75px;
}

.section-title-text h1 {
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
}

.includes-section-text-area {
  order: 2;
  margin: auto;
  color: #fff;
  margin-right: 35px;
}

.includes-section-text-area h3 {
  font-size: 2rem;
  text-transform: uppercase;
}

.includes-section-text-area p {
  font-size: 1.25rem;
}

/* loft-our-offer-section section*/

.loft-our-offer-section {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #ff03fc 0%, #7200e1 100%);
  background-position: center top;
  background-size: cover;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  flex-wrap: nowrap;
}

.our-offer-text-area {
  order: 2;
  width: 680px;
  color: #fff;
  font-size: 1.25rem;
  margin-left: 22.5%;
  margin-top: -2%;
  text-align: justify;
}

.our-offer-carousel {
  order: 3;
  width: 100%;
  height: 300px;	
}

.catering {
  order: 4;
  z-index: 5;
}

.slider-img {
	width: 450px;
	margin-top: 37.5px;
}

.moskva-catering {
	order: 5;
	width: 100%;
	height: 100%;
}

.video-cover {
	position: absolute;
    width: 100%;
    height: 100%;
	background: black;
	opacity: 0.7;
    background-size: cover;
	background-position: center;
	margin-top: -17.1%;
}

.moskva-catering video {
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	margin-top: -17.1%;
}
/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .bubbles {
    transform: scale(0.3);
    z-index: 0;
    position: absolute;
    top: -20%;
  }

  .loft-capacity-section {
    height: 100%;
  }

  .capacity-text-area {
    margin-top: unset;
    text-align: center;
  }

  .video-area {
    margin-top: unset;
  }

  .video-area video {
    width: 100%;
    height: 100%;
  }

  .bottom-text {
    font-size: 1rem;
  }

  .loft-includes-section,
  .loft-our-offer-section {
    align-items: center;
  }

  .section-title-logo {
    display: none;
  }

  .section-title-text {
    margin: auto;
  }

  .our-offer-text-area {
    margin: 0;
    text-align: center;
  }

  .section-title-text h1 {
    font-size: 2rem;
  }

  .includes-section-text-area {
    margin-left: 40px;
  }

  .includes-section-text-area h3 {
    font-size: 1.5rem;
  }

  .includes-section-text-area p {
    font-size: 1rem;
  }

  .video-cover {
	margin-top: -27%;
}

.moskva-catering video {
	margin-top: -27%;
}
}

@media screen and (min-width: 320px) and (max-width: 425px) {
  .bubbles {
    transform: scale(0.25);
    z-index: 0;
    position: absolute;
    top: -30%;
  }

  .logo-loft h1 {
    font-size: 2rem;
  }

  .capacity-text-area {
    margin-top: 80px;
    margin-bottom: 0;
    text-align: center;
  }

  .video-area {
    margin-top: unset;
  }

  .video-area video {
    width: 100%;
    height: 250px;
    margin: 0;
    padding: 0;
  }

  .bottom-text {
    font-size: 0.8rem;
    margin-top: -10px;
    text-align: center;
    color: rgb(255, 255, 255);
  }

  .loft-includes-section {
    align-items: center;
  }

  .section-title-logo {
    display: none;
  }

  .section-title-text {
    margin: auto;
  }

  .section-title-text h1 {
    font-size: 2rem;
  }

  .includes-section-text-area {
    margin-left: 20px;
  }

  .includes-section-text-area h3 {
    font-size: 1.5rem;
  }

  .includes-section-text-area p {
    font-size: 1rem;
  }

  .loft-our-offer-section {
	  align-items: center;
  }

	.our-offer-text-area {
	margin: 0;
	text-align: center;
	font-size: 1rem;
	width: 100%;
	}

	.our-offer-text-area p {
		padding-left: 15px;
		padding-right: 15px;
	}

	.our-offer-carousel {
	width: 100%;
	height: 300px;	
	}

	.offer-mb {
		margin-bottom: -80px

	}

	.slider-img {
		width: 450px;
		/* margin-top: 37.5px; */
	}

}


  @media screen and (max-width: 320px) {
    .capacity-text-area {
      margin-top: 80px;
    }

    .capacity-text-area h1 {
      font-size: 2rem;
    }

    .video-area video {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
	}
	
		  .video-cover {
	margin-top: -17%;
		  }
	.video-cover video {
	width: 100%;
	height: 100%;
	}

		  }

</style>


