<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">MLN-EVENT</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li><nuxt-link to="/posts" class="nav-item">о нас</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">портфолио</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">LOFT</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">блог</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">свадьба</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">корпоративы</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">для детей</nuxt-link></li>
        <li><nuxt-link to="/posts" class="nav-item">VIP</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/Landing/TheLandingSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 900px) {
  .navigation-items {
    display: none;
  }
  
  .the-header {
    z-index: -999;
    background: linear-gradient(to right, rgb(248, 182, 78) 0%, rgb(251, 82, 82) 100%);
  }

  .logo{
    display: none;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
