<template>
  <main>
    <section class="company-logo">
      <div class="logo-container">
        <img src="~assets/images/logo/logo.svg" alt="MLN-event logo" class="mln-long">
        <img src="~assets/images/logo/logo-box.svg" alt="MLN-event logo" class="mln-short">
      </div>
      <div class="event-grid">
        <div class="hr">
          <nuxt-link to="/services/hr">
            <h5 class="h5-heading">HR events</h5>
            <img src="~assets/images/events/icons/glasses.svg" alt="HR events">
          </nuxt-link>
        </div>
        <div class="weddings">
          <nuxt-link to="/services/weddings">
            <h5 class="h5-heading">свадьбы</h5>
            <img src="~assets/images/events/icons/flowers.svg" alt="Свадьбы">
          </nuxt-link>
        </div>
        <div class="vip-party">
          <nuxt-link to="/services/vip">
            <h5 class="h5-heading">VIP party</h5>
            <img src="~assets/images/events/icons/crown.svg" alt="VIP вечеринки">
          </nuxt-link>
        </div>
        <div class="for-kids">
          <nuxt-link to="/services/kids">
            <h5 class="h5-heading">Детям</h5>
            <img src="~assets/images/events/icons/balloon.svg" alt="Детские праздники">
          </nuxt-link>
        </div>
      </div>
    </section>
    <a href="#team-anchor" class="arrow-down-team">
      <i
        class="fas fa-angle-down bounce"
        style="font-size:35px; color: #444444; margin-top: 30px; scroll-behavior: smooth;"
      ></i>
    </a>
    <section class="team" id="team-anchor">
      <div class="team-heading">
        <img src="~assets/images/logo/logo-box.svg" alt="MLN-event лого">
        <h1 class="h1-heading color-gray m0">Наша История</h1>
      </div>
      <div class="company-pitch">
        <h2 class="h2-heading color-gray">организуем события с любовью и заботой</h2>
        <br>
      </div>
      <div class="team-content">
        <p>Первый праздник был проведен нами в 2014 году</p>
        <p>Мы получали не крупные, но очень интересные заказы</p>
        <p>Теперь мы выросли и готовы браться</p>
        <p>за самые невероятные проекты!</p>
      </div>
    </section>
    <a href="#video-anchor" class="arrow-down-video">
      <i
        class="fas fa-angle-down bounce"
        style="font-size:35px; color: #444444; margin-top: 30px; scroll-behavior: smooth;"
      ></i>
    </a>

    <section class="video" id="video-anchor">
      <video
        class="landing-vid"
        style="opacity:0.75;"
        src="~assets/videos/landing-video.mp4"
        muted
        loop
        autoplay
      ></video>
    </section>

    <a href="#events-anchor" class="arrow-down-events">
      <i
        class="fas fa-angle-down bounce"
        style="font-size:35px; color: #940283; margin-top: 30px; scroll-behavior: smooth;"
      ></i>
    </a>

    <section class="events" id="events-anchor">
      <div class="events-header">
        <h1 class="h1-heading color-gray">Мероприятия</h1>
        <img src="~assets/images/events/graphics/ribbon-l.png" alt="ribbon" class="ribbon-l">

        <ul>
          <nuxt-link to="/services/hr">
            <li class="hr-li">#HREVENTS</li>
          </nuxt-link>
          <nuxt-link to="/services/weddings">
            <li class="wd-li">#СВАДЬБЫ</li>
          </nuxt-link>
          <nuxt-link to="/services/vip">
            <li class="vp-li">#VIP</li>
          </nuxt-link>
          <nuxt-link to="/services/kids">
            <li class="kd-li">#ДЕТЯМ</li>
          </nuxt-link>
        </ul>
      </div>
      <div class="events-content">
        <div class="row">
          <div class="graphics">
            <img
              src="~assets/images/events/graphics/hr.png"
              class="photo"
              alt="HR мероприятия"
              style="width:220px;"
            >
            <img src="~assets/images/events/icons/glasses.svg" alt="HR events" class="icon glasses">
          </div>
          <div class="event-text">
            <h2 class="h2-heading color-gray">HR EVENTS</h2>
            <p
              class="regular-text color-gray"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero excepturi nam? Repudiandae ab labore corporis mollitia, error voluptatum nisi totam id accusamus eaque fugit dignissimos, assumenda eveniet. Labore, itaque!</p>
          </div>
        </div>

        <div class="row">
          <div class="graphics">
            <img
              src="~assets/images/events/graphics/weddings.png"
              class="photo"
              alt="Свадьбы"
              style="width:220px;"
            >
            <img src="~assets/images/events/icons/flowers.svg" alt="Свадьбы" class="icon flowers">
          </div>
          <div class="event-text">
            <h2 class="h2-heading color-gray">СВАДЬБЫ</h2>
            <p
              class="regular-text color-gray"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero excepturi nam? Repudiandae ab labore corporis mollitia, error voluptatum nisi totam id accusamus eaque fugit dignissimos, assumenda eveniet. Labore, itaque!</p>
          </div>
        </div>

        <div class="row">
          <div class="graphics">
            <img
              src="~assets/images/events/graphics/vip.png"
              class="photo"
              alt="VIP мероприятия"
              style="width:220px;"
            >
            <img src="~assets/images/events/icons/crown.svg" alt="VIP Party" class="icon crown">
          </div>
          <div class="event-text">
            <h2 class="h2-heading color-gray">VIP PARTY</h2>
            <p
              class="regular-text color-gray"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero excepturi nam? Repudiandae ab labore corporis mollitia, error voluptatum nisi totam id accusamus eaque fugit dignissimos, assumenda eveniet. Labore, itaque!</p>
          </div>
        </div>

        <div class="row">
          <div class="graphics">
            <img
              src="~assets/images/events/graphics/kids.png"
              class="photo"
              alt="Детские мероприятия"
              style="width:220px;"
            >
            <img
              src="~assets/images/events/icons/balloon.svg"
              alt="Детские праздники"
              class="icon balloon"
            >
          </div>
          <div class="event-text">
            <h2 class="h2-heading color-gray">ДЕТЯМ</h2>
            <p
              class="regular-text color-gray"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero excepturi nam? Repudiandae ab labore corporis mollitia, error voluptatum nisi totam id accusamus eaque fugit dignissimos, assumenda eveniet. Labore, itaque!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="events-gallery">
      <div class="gallery-heading">
        <h1 class="h1-heading color-white">мероприятия 2018</h1>
        <h2 class="h2-heading color-white text-center">Мы провели 30 праздников</h2>
      </div>
      <img src="~assets/images/events/event-img.png" alt="event images">
    </section>

    <section class="loft">
      <img src="~assets/images/events/graphics/ribbon-s.png" alt="ribbon" class="ribbon-s">
      <div class="loft-heading">
        <h1 class="h1-heading color-gray">ЛОФТ</h1>
        <h2 class="h2-heading color-gray">
          пространство
          для вашего
          <br>праздника
        </h2>
        <p class="regular-text color-gray">
          Подходит для мероприятий разного характера
          от Дня Рождения и Нового года, до серъезных конференций
          <br>и важных бизнес-собыйти, в рамках пространства
        </p>
      </div>
      <span class="circle"></span>
      <img class="loft-flowers" src="~assets/images/events/icons/flowers.svg" alt="Свадьбы">
      <img class="loft-glasses" src="~assets/images/events/icons/glasses.svg" alt="HR events">
      <img
        class="loft-balloon"
        src="~assets/images/events/icons/balloon.svg"
        alt="Детские праздники"
      >
      <p class="regular-text color-gray loft-text">
        Lorem ipsum dolor sit amet
        <br>consectetur, adipisicing elit.
        <br>Deleniti vitae
      </p>
    </section>

    <section class="testimonials">
      <div class="testimonials-heading">
        <h1 class="h1-heading color-white">ОТЗЫВЫ ОТ НАШИХ КЛИЕНТОВ</h1>
      </div>
      <div class="testimonials-grid">
        <div class="testimonials-item">
          <div class="item-head">
            <h3 class="h3-heading color-white text-left">
              «Идейные соображения высшего порядка
              <br>в значительной степени обуславливает
              <br>создание форм развития»
            </h3>
          </div>
          <div class="item-content">
            <img src="~assets/images/testimonials/ivan.png" alt="first">
            <div class="item-content-text">
              <p class="regular-text color-white">Директор компании</p>
              <p class="regular-text color-white">"Рыбатекст"</p>
              <p class="regular-text color-white">Иванов Иван</p>
            </div>
          </div>
        </div>
        <div class="testimonials-item">
          <div class="item-head">
            <h3 class="h3-heading color-white text-left">
              «Идейные соображения высшего порядка
              <br>в значительной степени обуславливает
              <br>создание форм развития»
            </h3>
          </div>
          <div class="item-content">
            <img src="~assets/images/testimonials/nika.png" alt="first">
            <div class="item-content-text">
              <p class="regular-text color-white">Директор компании</p>
              <p class="regular-text color-white">"Татударом"</p>
              <p class="regular-text color-white">Петрова Ника</p>
            </div>
          </div>
        </div>
        <div class="testimonials-item">
          <div class="item-head">
            <h3 class="h3-heading color-white text-left">
              «Идейные соображения высшего порядка
              <br>в значительной степени обуславливает
              <br>создание форм развития»
            </h3>
          </div>
          <div class="item-content">
            <img src="~assets/images/testimonials/elena.png" alt="first">
            <div class="item-content-text">
              <p class="regular-text color-white">Директор компании</p>
              <p class="regular-text color-white">"Красиво"</p>
              <p class="regular-text color-white">Сидорова Елена</p>
            </div>
          </div>
        </div>
        <div class="testimonials-item">
          <div class="email-block">
            <a href="mailto:omnixejiharu@gmail.com?Subject=Отзыв%20по%20работе" target="_blank">
              <i class="far fa-envelope envelope"></i>
            </a>
            <a href="mailto:omnixejiharu@gmail.com?Subject=Отзыв%20по%20работе" target="_blank">
              <h3 class="h3-heading color-white">
                Присылайте нам отзыв
                <br>о нашей работе
                <br>и мы его опубликуем
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="request" id="request-anchor">
      <div class="request-header">
        <h1 class="h1-heading color-gray">Закажите мероприятие</h1>
      </div>
      <div class="request-left">
        <h2 class="h2-heading color-gray">Оставьте заявку</h2>
        <RequestPostForm @submit="onSubmitted"/>
      </div>
      <div class="request-right">
        <iframe
          class="map-frame"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d9330d9eaa01521f31b6fc7d1571373a0d7277e733d3e63594eef63c1292687&amp;source=constructor"
          width="900"
          height="440"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    if ($(window).width() <= 768) {
      $(".landing-vid").prop("controls", true);
      $(".landing-vid").prop("autoplay", false);
      $(".landing-vid").prop("preload", false);
    }
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addRequest", postData).then(() => {
        document.getElementById("myform").reset();
      });
    }
  }
};
</script>


<style scoped>
/*                                                company-logo SECTION  */
.company-logo {
  background: #ededed;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 10;
}

.mln-short {
  display: none;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 5%;
}

.logo-container img {
  max-width: 500px;
  width: 500px;
}

.event-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 10;
  text-align: center;
}

.event-grid > div {
  width: 25%;
  text-align: center;
  position: relative;
}

.event-grid > div > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  text-align: center;
}

.event-grid > div > a > h5 {
  text-align: center;
  background: white;
  border-radius: 50px;
  border-width: 1px;
  border-color: rgb(221, 221, 221);
  height: 40px;
  width: 180px;
  margin: 0px 20px;
}

.event-grid > div > a > h5:hover {
  color: #940283;
  transition: all 0.2s ease-in-out;
}

.event-grid > div > a {
  text-decoration: none;
  text-align: center;
}

.event-grid > div > a > img {
  max-width: 90px;
  height: 100px;
}

.vip-party img {
  max-width: 78px !important;
  height: 43px !important;
  position: absolute;
  right: -6px;
  top: -23px;
  transform: rotateZ(35deg);
}

.for-kids img {
  position: absolute;
  right: 0px;
  top: -50px;
}

.weddings img {
  position: absolute;
  right: 0px;
  top: -50px;
}

.hr img {
  position: absolute;
  right: 0px;
  top: -50px;
}

.arrow-down-team {
  position: absolute;
  top: 85vh;
  left: 50%;
  z-index: 10;
}

.arrow-down-video {
  position: absolute;
  top: 185vh;
  left: 50%;
  z-index: 10;
}

.arrow-down-events {
  position: absolute;
  top: 285vh;
  left: 50%;
  z-index: 10;
}

.company-pitch {
  z-index: 10;
}

/*                                                     team SECTION */

.team {
  background: white;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.team-heading {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 25vh;
  width: 444px;
}

.team-heading img {
  width: 70px;
  padding-right: 40px;
}

.company-pitch h2 {
  margin-top: 60px;
}

.team-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.team-content p {
  font-family: "FuturaRegular";
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #444444;
  text-align: justify;
  margin: 2px 0;
}

/*                                                     video SECTION */
.video {
  background: #ededed;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video video {
  min-width: 100%;
  min-height: 100%;
}

/*                                                          events SECTION*/

.events {
  background: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 20;
}

.ribbon-l {
  position: absolute;
  top: -31%;
  left: -13%;
  z-index: 1;
}

.ribbon-s {
  position: absolute;

  z-index: 2;
  transform: rotatez(110deg);
  right: -20%;
  width: 400px;
  bottom: 1%;
  z-index: 1;
}

.events-header {
  display: flex;
  width: 100%;
  order: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  z-index: 99;
  text-transform: uppercase;
  color: #444444;
  padding-bottom: 80px;
  z-index: 10;
}

.events-header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

.events-header a {
  text-decoration: none;
  z-index: 20;
}

.events-header li {
  text-decoration: none;
  list-style: none;
  padding: 0 20px;
  text-transform: uppercase;
  font-family: "FuturaRegular";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #444444;
  text-align: center;
}

.events-header li:hover {
  color: #940283;
  transition: all 0.2s ease-in-out;
}

.row {
  display: flex;
  order: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;
  padding-bottom: 40px;
  position: relative;
}

.graphics {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 100px;
  z-index: 20;
}

.graphics .photo {
  padding: 0 70px;
}

.graphics .icon {
  position: absolute;
  top: 0px;
  width: 35px;
  right: 32%;
}

.glasses {
  top: -15px !important;
}

.flowers {
  top: -10px !important;
  right: 33.2% !important;
}

.crown {
  top: 10px !important;
  right: 33.2% !important;
  transform: rotateZ(35deg);
}

.balloon {
  top: -15px !important;
  right: 34.5% !important;
  width: 30px !important;
}

.event-text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  padding: 0;
  margin: 0;
}

/*                                                    events-gallery SECTION */

.events-gallery {
  background: #3a3a3a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.gallery-heading {
  padding-top: 60px;
  padding-bottom: 10px;
}

.events-gallery img {
  width: 60%;
  padding-bottom: 50px;
}

.gallery {
  display: grid;
  grid-template-columns: 120px 120px 120px 120px 120px 120px 120px 120px;
  grid-template-rows: 120px 120px 120px 120px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
}

.gallery > figure {
  margin: 0;
  padding: 0;
}

figure > img {
  width: 100%;
  height: 100%;
}

/*                                                     loft SECTION*/

.loft {
  background: #ededed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: row;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
}

.loft-heading {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 33%;
  height: 80%;
  z-index: 100;
  padding-right: 25%;
  padding-bottom: 25%;
}

.circle {
  background: white;
  width: 70vh;
  height: 70vh;
  border-radius: 50%;
  position: absolute;
  right: 250px;
  top: 80px;
}
.loft-glasses,
.loft-balloon,
.loft-flowers {
  z-index: 20;
  position: absolute;
  width: 100px;
}

.loft-glasses {
  right: 26%;
  top: 55%;
}

.loft-balloon {
  right: 30%;
  top: 35%;
}

.loft-flowers {
  right: 40%;
  top: 45%;
}

.loft-text {
  z-index: 20;
  position: absolute;
  top: 22%;
  right: 14%;
}

/*                                                     testimonials SECTION*/

.testimonials {
  background: #3a3a3a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 40px;
}

.testimonials-heading {
  display: flex;
  flex: 1 0 100%;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 500px 500px;
  grid-template-rows: 300px 300px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
}

.testimonials-item {
  text-align: center;
  padding: 20px 0px;
}

.email-block {
  background: #4d4d4d;
  width: 300px;
  height: 200px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.email-block i {
  font-size: 30px;
  color: white;
}

.email-block a {
  text-decoration: none;
}

.item-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
}

.item-content img {
  border-radius: 50%;
}

.item-content-text {
  display: flex;
  height: 150px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
}

/*                                                     request SECTION */

/*                                                    768px MEDIA */

@media (max-width: 1024px) {
  .graphics .icon {
    right: 23% !important;
  }
}

@media (max-width: 768px) {
  .ribbon-l {
    display: none;
  }

  .ribbon-s {
    display: none;
  }

  .glasses {
    all: unset;
  }

  .flowers {
    all: unset;
  }

  .crown {
    all: unset;
    transform: rotateZ(35deg);
  }

  .balloon {
    width: 170px !important;
  }

  .graphics .icon {
    all: unset;
    padding-right: 20px;
    width: 170px;
    height: 170px;
  }

  .event-text {
    width: 33%;
  }

  .arrow-down-team {
    top: 48vh;
  }

  .company-logo {
    height: 56vh;
  }
  /*                                       LOGO*/
  .logo-container img {
    width: 400px;
  }

  .event-grid {
    flex-wrap: wrap;
  }

  .vip-party img {
    right: -2px;
    top: -21px;
    width: 37px;
  }

  .for-kids img {
    right: 3px;
    top: -50px;
    width: 26px;
  }

  .weddings img {
    right: 8px;
    top: -48px;
    width: 30px;
  }

  .hr img {
    right: 0px;
    top: -50px;
    width: 30px;
  }

  .event-grid > div > a > h5 {
    height: 42px;
    width: 135px;
  }

  .h5-heading {
    font-size: 18px;
    line-height: 42px;
  }

  /*                             VIDEO*/
  .video {
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .video video {
    min-width: unset;
    min-height: unset;
    width: 100%;
  }

  .video {
    height: unset;
  }

  .arrow-down-events {
    display: none;
  }
  /* EVENTS */
  .graphics .photo {
    display: none;
  }

  .graphics .icon {
    text-align: center;
  }

  .events-gallery img {
    width: 85%;
  }

  /* LOFT */

  .loft-heading {
    justify-content: flex-start;
    width: 50%;
    padding-right: 30%;
    padding-bottom: unset;
  }

  .loft {
    height: 70vh;
  }
  .circle {
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 175px;
  }

  .loft-text {
    z-index: 20;
    position: absolute;
    top: 28%;
    right: 4%;
  }

  .loft-glasses,
  .loft-balloon,
  .loft-flowers {
    z-index: 20;
    position: absolute;
    width: 70px;
  }

  .loft-glasses {
    right: 14%;
    top: 66%;
  }

  .loft-balloon {
    right: 23%;
    top: 53%;
  }

  .loft-flowers {
    right: 36%;
    top: 65%;
  }

  .events-header {
    padding: 0;
  }

  .team {
    height: unset;
    position: relative;
    padding: 100px 0;
  }

  .team-heading {
    padding-top: unset;
  }

  /* TESTIMONIALS*/

  .testimonials-grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .email-block {
    margin-top: unset;
  }

  /*REQUEST*/
}

@media (max-width: 425px) {
  .mln-long {
    display: none;
  }

  .logo-container {
    width: unset;
    padding-top: unset;
  }

  .company-logo {
    height: 100vh;
  }

  .arrow-down-team {
    top: 88vh;
  }

  .logo-container img {
    max-width: unset;
    width: unset;
    width: 125px;
  }

  .mln-short {
    display: unset;
  }

  .event-grid {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 80%;
  }

  .event-grid > div {
    width: unset;
  }

  .event-grid > div > a > h5 {
    height: 30px;
    width: 148px;
  }

  .hr {
    flex: 1 0 50%;
  }

  .weddings {
    flex: 2 0 50%;
  }

  .vip-party {
    flex: 3 0 50%;
  }

  .for-kids {
    flex: 4 0 50%;
  }

  .team-heading {
    padding-top: 70px;
    justify-content: center;
  }

  .team-heading img {
    padding-right: unset;
  }

  .h1-heading {
    text-align: center;
    font-size: 24px;
  }

  .h2-heading {
    text-align: center;
    font-size: 17px;
  }

  .team-content p {
    text-align: center;
    font-size: 17px;
  }

  .company-pitch h2 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .video {
    height: unset;
  }

  .arrow-down-events {
    display: none;
  }

  .company-pitch {
    width: 60.6%;
  }
  .team-content {
    padding: 0 25px;
  }

  .events-header ul {
    margin: 0;
    padding: 0;
    z-index: 20;
  }

  .graphics {
    padding-right: unset;
  }

  .event-text {
    width: unset;
  }

  .event-text h2 {
    text-align: left;
  }

  .gallery-heading h1 {
    margin-top: 0;
  }

  .loft {
    height: unset;
  }
  .loft-heading {
    padding-right: unset;
    padding-bottom: unset;
    align-items: unset;
    height: unset;
  }

  .loft-glasses,
  .loft-balloon,
  .loft-flowers,
  .loft-text {
    display: none;
  }

  .circle {
    display: none;
  }

  .item-content {
    justify-content: center;
  }

  .testimonials-item {
    padding: unset;
    padding-bottom: 10px;
  }

  .request-left {
    padding: 20px 0;
  }
  iframe {
    width: 425px;
  }

  #myform {
    width: 290px;
  }

  .graphics .icon {
    height: 100px;
  }

  .crown {
    transform: scale(0.5) !important;
  }

  .event-grid > div > a > h5 {
    height: 27px;
    width: 105px;
  }

  .h5-heading {
    font-size: 12px;
    line-height: 29px;
  }

  .team-heading {
    padding: 0;
  }

  .arrow-down-video {
    display: none;
  }

  .arrow-down-events {
    display: none;
  }
}

@media (max-width: 375px) {
  .team-heading {
    width: 300px;
  }
  .events-header li {
    padding: 0 10px;
  }
  .graphics .icon {
    padding-right: unset;
  }

  .events-gallery {
    height: 77vh;
  }

  .circle {
    right: 10%;
    top: 29%;
  }

  .h3-heading {
    font-size: 17px;
  }

  iframe {
    width: 375px;
  }
}

@media (max-width: 320px) {
  .events-header {
    padding-bottom: unset;
  }

  .graphics .icon {
    display: none;
  }

  .event-text {
    padding: 0 32px;
  }

  .event-text h2 {
    text-align: center;
  }

  .event-text p {
    text-align: justify;
  }

  .circle {
    right: 2%;
  }

  .loft-heading {
    justify-content: center;
    width: 100%;
  }

  .loft-heading p {
    text-align: center;
    padding: 0px 70px;
  }

  .h3-heading {
    font-size: 14px;
  }

  .events-header ul {
    flex-direction: column;
    flex-wrap: wrap;
    height: 65px;
    align-self: center;
    width: 50%;
    justify-content: center;
    align-items: center;
  }

  .events-header li {
    padding: 5px 5px;
  }

  #myform {
    width: 250px;
  }
}

/*animation classes*/

.bounce {
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
}

.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

/*animations*/
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes scale-up-left {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
  }
  100% {
    opacity: 0;
  }
}

@keyframes scale-up-right {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  100% {
    opacity: 0;
  }
}
</style>