<template>
  <nav class="nav">
    <div class="container">
      <div id="menu-id" class="menu">
        <ul class="nav-links">
          <li>
            <nuxt-link to="/" class="link">Главная</nuxt-link>
          </li>

          <li>
            <nuxt-link to="/loft" class="link">loft</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio" class="link">портфолио</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/posts" class="link">блог</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin" class="link">админ-панель</nuxt-link>
          </li>
        </ul>
      </div>

      <span class="nav-trigger">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    $(window).on("scroll", function() {
      // if ($(window).scrollTop() > $(".team").height() * 1.9) {
      //   $(".link").addClass("change-color");
      // } else {
      //   $(".link").removeClass("change-color");
      // }

      // if ($(window).scrollTop() > $(".video").height() * 2.8) {
      //   $(".link").removeClass("change-color");
      // }
      // if (
      //   $(window).scrollTop() >
      //   $(".video").height() * 2.8 + $(".events").height()
      // ) {
      //   $(".link").addClass("change-color");
      // }
      // if (
      //   $(window).scrollTop() >
      //   $(".video").height() * 2.8 + $(".events").height() * 1.5
      // ) {
      //   $(".link").removeClass("change-color");
      // }

      if (
        $(window).scrollTop() >
        $(".video").height() * 2.8 +
          $(".events").height() * 1.5 +
          $(".loft").height() * 1.2
      ) {
        $(".link").addClass("change-color");
      }

      if (
        $(window).scrollTop() >
        $(".video").height() * 2.8 +
          $(".events").height() * 1.5 +
          $(".loft").height() * 2.2
      ) {
        $(".link").removeClass("change-color");
      }
    });

    $(".nav-trigger").click(function() {
      $(this).toggleClass("active");
      $("#menu-id").toggleClass("show-list");
      $("#menu-id").fadeIn();
    });
  }
};
</script>

<style scoped>
@font-face {
  font-family: "FuturaBold";
  src: url("~assets/fonts/FuturaPT-Bold.woff") format("woff");
}
* {
  font-family: "FuturaBold";
}
/* Navbar section */

.nav {
  width: 100%;
  height: 40px;
  position: fixed;
  line-height: 65px;
  text-align: center;
  z-index: 100;
  background: white;
  padding: 0;
}

.nav .logo .short {
  display: none;
  font-size: 13px;
  padding-left: 0.5em;
}

.nav .logo a {
  text-decoration: none;
  color: #282828;
  font-size: 13px;
  font-weight: 600;
}

.nav .logo a:hover {
  color: #940283;
  transition: all 0.2s ease-in-out;
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

.nav .menu ul li a,
.tel {
  text-decoration: none;
  color: #282828;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
}

.nav .menu ul li a:hover,
.tel:hover {
  color: #940283;
  transition: all 0.2s ease-in-out;
}

.nav-trigger {
  display: none;
}

.nav {
  padding-bottom: 20px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  order: 0;
}

/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .nav {
    padding-top: 0px;
    padding-bottom: 20px;
  }
  .container {
    margin: 0;
  }

  .tel {
    float: right;
  }
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .nav {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .nav-trigger {
    display: block;
  }

  .nav .menu {
    width: 100%;
    height: 0;
    overflow: hidden;
    text-align: center;
  }

  .nav .show-list {
    height: auto;
    width: 100vw;
    display: none;
  }

  .nav .menu ul {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    right: 0;
    left: 0;
    bottom: 0;
    background: white !important;
    background-position: center top;
  }

  .nav .menu ul li {
    width: 100%;
    text-align: center;
  }

  .nav .menu ul li a {
    text-align: center;
    width: 100%;
    font-size: 13px;
    padding: 20px;
  }

  .nav .media_button {
    display: block;
  }
}

@media screen and (min-width: 320px) and (max-width: 425px) {
  .nav {
    padding-top: 0px;
    padding-bottom: 0px;
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
    font-size: 13px;
  }

  .nav .menu {
    width: 100%;
    height: 0;
    overflow: hidden;
  }

  .nav .show-list {
    height: auto;
    width: 100vw;
  }

  .nav .menu ul {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    right: 0;
    left: 0;
    bottom: 0;
    background: white !important;
    opacity: 1;
    background-position: center top;
  }

  .nav .menu ul li {
    width: 100%;
    text-align: center;
  }

  .nav .menu ul li a {
    text-align: center;
    width: 100%;
    font-size: 13px;
    padding: 20px;
    color: #444444;
    opacity: 1;
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
  background-color: #282828;
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

