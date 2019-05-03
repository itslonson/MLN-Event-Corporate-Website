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
import TheSideNavToggle from "@/components/Navigation/Other/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>

a{
    text-decoration: none;
  color: white;
}
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
  background: linear-gradient(to right, rgb(87, 193, 159) 0%, rgb(132, 210, 242) 100%);
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

@media (min-width: 800px) {
  .navigation-items {
    display: block;
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
