<template>
  <main>
    <section class="event">
      <div class="event-heading">
        <img src="~assets/images/events/icons/flowers.svg" alt="MLN-event лого">
        <h1 class="h1-heading color-gray m0">Свадьба</h1>
      </div>

      <div class="events-content">
        <div class="row">
          <div class="graphics">
            <img
              src="~assets/images/events/graphics/weddings.png"
              class="photo"
              alt="HR мероприятия"
              style="width:300px;"
            >
          </div>
          <div class="event-text">
            <h2 class="h2-heading color-gray">СВАДЬБА</h2>
            <p
              class="regular-text color-gray"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit libero excepturi nam? Repudiandae ab labore corporis mollitia, error voluptatum nisi totam id accusamus eaque fugit dignissimos, assumenda eveniet. Labore, itaque!</p>
          </div>
        </div>
      </div>
      <div class="main-text">
        <p class="regular-text color-gray" v-for="item in 2" :key="item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi temporibus impedit et dolor, ad distinctio sequi culpa quo dignissimos pariatur officiis quia aliquam nulla porro minima consequuntur blanditiis! Ullam?
          Omnis distinctio assumenda blanditiis odio inventore quas ullam. Eius sit in magnam blanditiis nisi eveniet voluptatibus laboriosam vero minus ratione facilis dolor, deleniti ipsum rerum placeat consequatur non facere. Sint.
          Asperiores, eveniet et assumenda vitae veritatis fuga officia? Adipisci quas velit exercitationem libero cum impedit hic veritatis ad harum odit, nostrum autem, aspernatur explicabo ex. Numquam quasi qui aut quis!
        </p>
      </div>
      <section class="event-images">
        <div class="image-row">
          <div class="image-column">
            <img
              id="myImg"
              src="https://pp.userapi.com/c850736/v850736293/14c397/x8LacEc8seM.jpg"
              alt="Празднование"
            >
            <img
              id="myImg2"
              src="https://pp.userapi.com/c850736/v850736293/14c3bf/bxDUOPmUBHA.jpg"
              alt="Банкет"
            >
          </div>
          <div class="image-column">
            <img
              id="myImg3"
              src="https://pp.userapi.com/c850736/v850736293/14c3bf/bxDUOPmUBHA.jpg"
              alt="Банкет"
            >
            <img
              id="myImg4"
              src="https://pp.userapi.com/c850736/v850736293/14c397/x8LacEc8seM.jpg"
              alt="Празднование"
            >
          </div>
          <div class="image-column">
            <img
              id="myImg5"
              src="https://pp.userapi.com/c850736/v850736293/14c397/x8LacEc8seM.jpg"
              alt="Празднование"
            >
            <img
              id="myImg6"
              src="https://pp.userapi.com/c850736/v850736293/14c3bf/bxDUOPmUBHA.jpg"
              alt="Банкет"
            >
          </div>
        </div>
        <div id="modal" class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="modalImg">
          <div id="caption"></div>
        </div>
      </section>
    </section>
    <section class="request" id="request-anchor">
      <div class="request-header">
        <h1 class="h1-heading color-gray">Заинтересовались?</h1>
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
    var modal = document.getElementById("modal");
    var img = document.getElementById("myImg");
    var img2 = document.getElementById("myImg2");
    var img3 = document.getElementById("myImg3");
    var img4 = document.getElementById("myImg4");
    var img5 = document.getElementById("myImg5");
    var img6 = document.getElementById("myImg6");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    img2.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    img3.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    img4.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    img5.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };

    img6.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };
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
.event {
  background: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
.event-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 92px;
  max-width: 444px;
  padding-bottom: 25px;
}

.event-heading img {
  width: 70px;
  padding-right: 40px;
}

.row {
  display: flex;
  order: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  align-self: center;
  padding: 80px 200px;
  position: relative;
}

.graphics {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  z-index: 20;
}

.event-text {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 37%;
  padding: 0;
  margin: 0;
}

.main-text {
  padding: 0px 12%;
  padding-bottom: 5%;
}

.main-text > p {
  padding: 1% 0px;
}

.event-images {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
}

.image-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.image-column {
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.image-column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

@media (max-width: 1023px) {
  .row {
    flex-direction: column;
    justify-content: center;
    padding: 80px 0px;
  }
  .graphics {
    justify-content: center;
  }
  .event-text {
    justify-content: center;
    align-self: unset;
    align-items: center;
    padding-top: 1%;
  }
  .event-text h2 {
    text-align: center;
  }
}

@media (max-width: 800px) {
  .image-column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

@media (max-width: 600px) {
  .image-column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

@media (max-width: 500px) {
  .event-text {
    width: 60%;
  }
  .main-text > p {
    padding: 2% 0px;
  }
}

@media (max-width: 400px) {
  .event-text,
  .main-text {
    text-align: center;
  }
  .event-text {
    padding-top: 3%;
  }
  .row {
    padding: 40px 0;
  }
}

/*  EXPERIMENTAL*/
#myImg,
#myImg2,
#myImg3,
#myImg4,
#myImg5,
#myImg6 {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover,
#myImg2:hover,
#myImg3:hover,
#myImg4:hover,
#myImg5:hover,
#myImg6:hover {
  opacity: 0.7;
}

.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 50px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>