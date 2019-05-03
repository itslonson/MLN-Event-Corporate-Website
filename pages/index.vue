<template>
<div class="content">
    <div class="container">
        
        <nav class="tabs">
            <ul class="tabs-ul">
                <li class="tabs-li"><nuxt-link to="/posts">о нас</nuxt-link></li>
                <li class="tabs-li"><nuxt-link to="/posts">портфолио</nuxt-link></li>
                <li class="tabs-li"><nuxt-link to="/posts">LOFT</nuxt-link></li>
                <li class="tabs-li"><nuxt-link to="/posts">блог</nuxt-link></li>
            </ul>
        </nav>
        
        <nav class="menu">
            <ul class="menu-ul">
                <li class="menu-li"><nuxt-link to="/posts">свадьба</nuxt-link></li>
                <li class="menu-li"><nuxt-link to="/posts">корпоративы</nuxt-link></li>
                <li class="menu-li"><nuxt-link to="/posts">для детей</nuxt-link></li>
                <li class="menu-li"><nuxt-link to="/posts">VIP</nuxt-link></li>
            </ul>
        </nav>


        <div class="logo">
            <img  src="~assets/logo.png" alt="">
            <h3 class="motto">ВАШ ЛУЧШИЙ ПРАЗДНИК</h3>
        </div>
    </div>
    <div class="flowers">
        <img src="~assets/flowers.png" alt="">
    </div>

    <div class="bubbles">
        <img src="~assets/bubbles.png" alt="">
    </div>

    <div class="purple-wave">
        
    </div>

    <div class="yellow-wave">
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

ul{
    list-style: none;
    z-index: 4;
}

li{
    position:relative;
    padding: 0px;
    margin: 5px 0px 40px 0px;
    text-transform:uppercase;
    cursor:pointer;
    text-align:center;
    z-index: 4;
}

a{
    text-decoration: none;
    color: #e0e0e0;
    font-weight: 600;
    font-size: 1.3em;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, rgb(248, 182, 78) 0%, rgb(251, 82, 82) 100%) no-repeat center center fixed;
    height: 100vh;
}

.tabs{
    position: flex;
    top: 55%;
    left: 7.75%;
    z-index: 4;
}

.menu{
    position: flex;
    top: 15%;
    left: 70%;
    z-index: 4;
}

.logo{
    display: flex;
    flex-wrap: wrap;
    z-index: 4;
    transform: scale(0.8);
}

.motto{
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 2.5em;
}
.menu-ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    z-index: 4;
}

.menu-li{
    position:relative;
    padding: 0px 0px 0px 0px;
    margin: 20px 0px;
    text-transform:uppercase;
    cursor:pointer;
    z-index: 4;
}

.menu a::before {
    content: '';
    display: block;
    height: 5px;
    background-color: rgb(249, 121, 163);

    position: absolute;
    top: 26px;
    width: 0%;
    transition: all ease-in-out 250ms;
}

.menu a:hover{
    color: #fff;
}

.menu a:hover::before {
    width: 100%;
}

.tabs-ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    z-index: 4;
}

.tabs-li{
    position:relative;
    padding: 0px;
    margin: 0px 20px ;
    text-transform:uppercase;
    cursor:pointer;
    z-index: 4;
}

.tabs a::before {
    content: '';
    display: block;
    height: 5px;
    background-color: rgb(249, 121, 163);

    position: absolute;
    bottom: 26px;
    width: 0%;
    transition: all ease-in-out 250ms;
}

.tabs a:hover{
    color: #fff;
}

.tabs a:hover::before {
    width: 100%;
}

.bubbles{
    overflow: hidden;
    position: fixed;
    top: 0px;
    z-index: 2;
    transform: scale(1.2);
}

.flowers{
    display: none;
    position: absolute;
    top: 19%;
    left: 57%;
    z-index: 3;
    transform: scale(1.5);
}

.yellow-wave{
    background: url('~assets/yellow_wave.png') bottom no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    position: fixed;
    bottom: 100px;
    right: 100px;
    transform: scale(1.4);
}

.purple-wave{
    background: url('~assets/purple_wave.png') bottom no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    bottom: -4px;
    z-index: 1;
}
</style>

