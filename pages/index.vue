<template>
<div class="content">
    <nav class="menu">
        <ul>
            <li><a class="wedding" href="#">свадьба</a></li>
            <li><a href="#">корпоративы</a></li>
            <li><a href="#">для детей</a></li>
            <li><a href="#">VIP</a></li>
        </ul>
    </nav>

    <nav class="tabs">
        <ul class="tabs-ul">
            <li class="tabs-li"><a href="#">о нас</a></li>
            <li class="tabs-li"><a href="#">портфолио</a></li>
            <li class="tabs-li"><a href="#">loft</a></li>
            <li class="tabs-li"><a href="#">блог</a></li>
        </ul>
    </nav>

    <div class="flowers">
        <img src="~assets/flowers.png" alt="">
    </div>

    <div class="bubbles">
        <img src="~assets/bubbles.png" alt="">
    </div>

    <div class="logo">
        <img  src="~assets/logo.png" alt="">
        <h3 class="motto">ВАШ ЛУЧШИЙ ПРАЗДНИК</h3>
    </div>

    <div class="purple-wave">
        <img src="~assets/purple_wave.png" alt="">
    </div>

    <div class="yellow-wave">
        <img src="~assets/yellow_wave.png" alt="">
    </div>
</div>
</template>

<style scoped>

.menu{
    position: absolute;
    top: 15%;
    left: 70%;
    z-index: 4;
}

.menu a::before {
    content: '';
    display: block;
    height: 5px;
    background-color: rgb(249, 121, 163);

    position: absolute;
    top: 25px;
    width: 0%;
    transition: all ease-in-out 250ms;
}

.menu a:hover{
    color: #fff;
}

.menu a:hover::before {
    width: 100%;
}

ul{
    list-style: none;
    z-index: 4;
}

li{
    position:relative;
    padding: 0px 0px 0px 0px;
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

.tabs{
    position: absolute;
    top: 55%;
    left: 7.75%;
    z-index: 4;
}

.tabs-ul{
    display: flex;
    list-style: none;
    z-index: 4;
}

.tabs-li{
    position:relative;
    padding: 0px 0px 0px 0px;
    margin: 0px 20px 0px 20px;
    text-transform:uppercase;
    cursor:pointer;
    text-align:center;
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

.logo{
    position: absolute;
    top: 15%;
    left: 8%;
    z-index: 4;
    transform: scale(0.8);
}

.motto{
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    font-size: 2.5em;
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
    overflow: hidden; 
    position: fixed;
    bottom: 20%;
    left: 11%;
    transform: scale(1.5);
}

.purple-wave{
    overflow: hidden;
    position: fixed;
    bottom: -4px;
    z-index: 1;
}
</style>


<script>
export default {
}

</script>

