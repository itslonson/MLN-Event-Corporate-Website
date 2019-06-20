<template>
  <main>
    <section class="loft" id="loft1-anchor">
      <img src="~assets/images/events/graphics/ribbon-l.png" alt="ribbon" class="ribbon-l">
      <div class="loft-heading">
        <h2 class="h2-heading color-gray">вместимость лофта</h2>
        <h1 style="text-transform: lowercase;" class="h1-heading color-gray">до 80 человек</h1>
        <p class="regular-text color-gray">
          Подходит для мероприятий разного характера
          от Дня Рождения и Нового года, до серъезных конференций
          <br>и важных бизнес-собыйти, в рамках пространства
        </p>
      </div>
      <span class="circle"></span>
      <img class="loft-subwoofer" src="~assets/images/events/icons/subwoofer.svg" alt="Колонка">
      <img
        class="loft-sparkler"
        src="~assets/images/events/icons/sparkler.svg"
        alt="Праздник Бенгальские Огни"
      >
    </section>

    <a href="#loft2-anchor" class="arrow-down-loft2">
      <i
        class="fas fa-angle-down bounce"
        style="font-size:35px; color: #444444; margin-top: 30px; scroll-behavior: smooth;"
      ></i>
    </a>

    <section class="about-loft-2" id="loft2-anchor">
      <h1 class="h1-heading color-gray text-center">мы предоставляем</h1>
      <div class="columns">
        <div class="first-column">
          <h2 class="h2-heading color-gray">зал и оборудование</h2>
          <p class="regular-text color-gray">
            <br>◖10 кВт активной акустики
            <br>◖2 ручных радиомикрофона, цифровой микшерный пульт 16 каналов с беспроводным управлением
            <br>◖20 световых приборов, включая профессиональный пульт chamsys, стробоскоп, дискошар и дыммашина
            <br>◖проектор 6000Лмн
            <br>◖экран
            <br>◖проводной и беспроводной интернет 90 мБит/с более чем на 100 подключений
            <br>◖сцена 4\3
            <br>◖кликер презентер
            <br>◖3 оборудованые барные станции
            <br>◖оборудование для розлива пива
            <br>
          </p>
        </div>
        <div class="second-column">
          <h2 class="h2-heading color-gray">персонал</h2>
          <p class="regular-text color-gray">
            <br>◖менеджер события
            <br>◖художник по свету
            <br>◖звукорежиссер
            <br>◖клинер 1 человек
            <br>◖обслуживающий персонал
          </p>
        </div>
      </div>
      <a href="#loft3-anchor" class="arrow-down-loft3">
        <i
          class="fas fa-angle-down bounce"
          style="font-size:35px; color: #444444; margin-top: 30px; scroll-behavior: smooth;"
        ></i>
      </a>
    </section>

    <section class="events-gallery" id="loft3-anchor">
      <div class="gallery-heading">
        <h1 class="h1-heading color-white text-center">Наши праздники</h1>
        <ul>
          <a href="http://www.google.com/search?q=loft" target="_blank">
            <li>#loft</li>
          </a>
          <a href="http://www.google.com/search?q=mlnloft" target="_blank">
            <li>#mlnloft</li>
          </a>
          <a href="http://www.google.com/search?q=mlnevent" target="_blank">
            <li>#mlnevent</li>
          </a>
          <a href="http://www.google.com/search?q=moscowloft" target="_blank">
            <li>#moscowloft</li>
          </a>
        </ul>
      </div>
      <img src="~assets/images/events/event-img.png" alt="event images">
 
      <a href="#request-anchor" class="arrow-down-loft4">
        <i
          class="fas fa-angle-down bounce"
          style="font-size:35px; color: white; margin-top: 30px; scroll-behavior: smooth;"
        ></i>
      </a>
    </section>

    <section class="request" id="request-anchor">
      <div class="request-header">
        <h1 class="h1-heading color-gray text-center">Закажите мероприятие</h1>
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
export default {
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
.arrow-down-loft1 {
  position: absolute;
  top: 85vh;
  left: 50%;
  z-index: 10;
}

.ribbon-l {
  position: absolute;
  top: 2%;
  left: -5%;
  z-index: 99;
  height: 125%;
  transform: rotateZ(140deg);
}

.arrow-down-loft2 {
  position: absolute;
  top: 185vh;
  left: 50%;
  z-index: 10;
}

.arrow-down-loft3 {
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 10;
}

.arrow-down-loft4 {
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 10;
}

/* first */
.about-loft-0 {
  background: #ededed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 10;
  position: relative;
  overflow: hidden;
}

.about-loft-1 {
  background: #ededed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 10;
}

/*second*/
.loft {
  background: #ededed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: row;
  position: relative;
  padding-top: 60px;
  overflow: hidden;
}

.loft-heading {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 33%;
  height: 80%;
  z-index: 100;
  padding-right: 25%;
}

.circle {
  background: white;
  width: 70vh;
  height: 70vh;
  border-radius: 50%;
  position: absolute;
  right: 250px;
  top: 100px;
}
.loft-sparkler,
.loft-subwoofer {
  z-index: 20;
  position: absolute;
  width: 185px;
}

.loft-sparkler {
  right: 18%;
  top: 16%;
  transform: rotatez(24deg);
}

.loft-subwoofer {
  right: 32%;
  top: 32%;
  width: 180px;
}

/* third */
.about-loft-2 {
  background: white;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 10;
  width: 100wv;
  padding: 60px 0;
  position: relative;
}

.about-loft-2 h1 {
  align-self: center;
}

.columns {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  z-index: 10;
  padding: 0 15%;
}

.first-column {
  flex: 1 0 100%;
  padding: 10px 0;
}

.first-column h2 {
  margin-bottom: 0;
}

.second-column {
  flex: 1 0 100%;
  padding: 20px 0;
}

.second-column h2 {
  margin-bottom: 0;
}

/* fourth*/
.events-gallery {
  background: #3a3a3a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
  position: relative;
}

.events-gallery img {
  width: 70%;
}

.events-gallery ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

.events-gallery a {
  text-decoration: none;
}

.events-gallery li {
  text-decoration: none;
  list-style: none;
  padding: 0 20px;
  text-transform: lowercase;
  font-family: "FuturaRegular";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: white;
  text-align: center;
}

.button {
  display: none;
}

.events-gallery li:hover {
  color: #dedede;
  transition: all 0.2s ease-in-out;
}

@media (max-width: 768px) {
  .arrow-down-loft3,
  .arrow-down-loft4 {
    display: none;
  }

  .loft-heading {
    justify-content: flex-start;
    width: 50%;
    padding-right: 30%;
    padding-bottom: unset;
  }

  .circle {
    width: 40vh;
    height: 40vh;
    border-radius: 50%;
    position: absolute;
    right: 14px;
    top: 175px;
  }

  .loft-sparkler {
    right: 13%;
    top: 23%;
    width: 139px;
  }
  .loft-subwoofer {
    right: 28%;
    top: 37%;
    width: 136px;
  }

  .loft {
    height: 73vh;
  }

  .ribbon-l {
    display: none;
  }

  .button {
    display: none;
  }
}

@media (max-width: 425px) {
  .arrow-down-loft2,
  .arrow-down-loft3,
  .arrow-down-loft4 {
    display: none;
  }

  ul {
    padding: 0;
  }

  .events-gallery img {
    width: 100%;
  }

  .loft {
    height: unset;
    padding: 80px 0;
  }
  .loft-heading {
    padding-right: unset;
    padding-bottom: unset;
    align-items: unset;
    height: unset;
  }

  .loft-subwoofer,
  .loft-sparkler {
    display: none;
  }

  .circle {
    display: none;
  }

  .loft-heading h2 {
    margin-bottom: 0;
  }

  .h1-heading {
    text-align: center;
    font-size: 24px;
  }
  .h2-heading {
    text-align: center;
    font-size: 17px;
  }
}

@media (max-width: 375px) {
  .circle {
    right: 10%;
    top: 29%;
  }

  .h3-heading {
    font-size: 17px;
  }
}

@media (max-width: 320px) {
  .first-column h2,
  .second-column h2 {
    text-align: center;
  }

  .events-gallery {
    padding: 80px 0;
  }

  .events-gallery li {
    padding: 0 10px;
  }

  .loft-heading {
    justify-content: center;
    width: 100%;
  }

  .loft-heading p {
    text-align: center;
    padding: 0px 70px;
  }

  .circle {
    display: none;
  }
  .events-gallery img {
    display: none;
  }
  .gallery-heading {
    margin-bottom: 60px;
  }

  .events-gallery .button {
    display: unset;
    width: 200px;
    height: 40px;
    text-decoration: none;
    background: #ededed;
    border-radius: 50px;
    line-height: 40px;
  }

  #myform {
    width: 250px;
  }
}
</style>

