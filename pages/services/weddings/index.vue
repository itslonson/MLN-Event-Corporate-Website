<template>
  <main>
    <section class="weddings">
      <div class="team-heading">
        <img src="~assets/images/events/icons/flowers.svg" alt="MLN-event лого">
        <h1 class="h1-heading color-gray m0">Свадьба</h1>
      </div>

      <div class="item-grid">
        <div class="item">
          <img src="https://pp.userapi.com/c850736/v850736293/14c397/x8LacEc8seM.jpg" alt>
          <h2 class="h2-heading color-gray text-center">программа</h2>
        </div>
        <div class="item-grid">
          <div class="item">
            <img src="https://pp.userapi.com/c850736/v850736293/14c3b5/iOBWJMUCTiA.jpg" alt>
            <h2 class="h2-heading color-gray text-center">Выездная регистрация</h2>
          </div>
          <div class="item-grid">
            <div class="item">
              <img src="https://pp.userapi.com/c850736/v850736293/14c3bf/bxDUOPmUBHA.jpg" alt>
              <h2 class="h2-heading color-gray text-center">Наши заллы</h2>
            </div>
          </div>
        </div>
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
    </section>
  </main>
</template>

<style scoped>
.weddings {
  background: white;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
.team-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 15vh;
  width: 444px;
  padding-bottom: 50px;
}

.team-heading img {
  width: 70px;
  padding-right: 40px;
}

.item-grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 40px;
  text-align: center;
  justify-items: stretch;
  align-items: stretch;
}

.item img {
  width: 250px;
  height: 250px;
  cursor: pointer;
}

.item:hover > h2 {
  color: #940283;
  transition: all 0.2s ease-in;
  cursor: pointer;
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
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 37%;
  padding: 0;
  margin: 0;
}
</style>
