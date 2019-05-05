<template>
<div class="content">
    <div class="container">
        <div class="nav-logo">
            <nav class="tabs">
                <ul class="tabs-ul">
                    <li class="tabs-li  disableselect disabledrag"><nuxt-link to="/posts">о нас</nuxt-link></li>
                    <li class="tabs-li  disableselect disabledrag"><nuxt-link to="/posts">портфолио</nuxt-link></li>
                    <li class="tabs-li  disableselect disabledrag"><nuxt-link to="/posts">LOFT</nuxt-link></li>
                    <li class="tabs-li  disableselect disabledrag"><nuxt-link to="/posts">блог</nuxt-link></li>
                </ul>
            </nav>

            <div class="logo">
                <img  src="~assets/logo.png" class="disableselect disabledrag" alt="">
                <h3 class="motto">ВАШ ЛУЧШИЙ ПРАЗДНИК</h3>
            </div>
        </div>
        <nav class="menu">
            <ul class="menu-ul">
                <li class="menu-li disableselect disabledrag"><nuxt-link to="/posts" >свадьба</nuxt-link></li>
                <li class="menu-li disableselect disabledrag"><nuxt-link to="/posts" >корпоративы</nuxt-link></li>
                <li class="menu-li disableselect disabledrag"><nuxt-link to="/posts" >для детей</nuxt-link></li>
                <li class="menu-li disableselect disabledrag"><nuxt-link to="/posts" >VIP</nuxt-link></li>
            </ul>
        </nav>


    </div>

    <div class="bubbles">
        <img src="~assets/bubbles.png" alt=""  class="disableselect disabledrag">
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
    text-transform:uppercase;
    cursor:pointer;
    text-align:center;
    z-index: 4;
}

a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 1.3em;
}

.burger-nav{
    display: none;
}

.container{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(to right, rgb(248, 182, 78) 0%, rgb(251, 82, 82) 100%);
    height: 90vh;
}

.nav-logo{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5rem;
    margin-block-start: 5rem;
    flex: 2;
    order: 1;
    flex-direction: column-reverse;
}

.tabs{
    flex-direction: row;
    flex-wrap: nowrap;
    z-index: 4;
}

.logo{
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

.menu{
    flex:1;
    flex-basis: auto;
    margin-block-start: 8rem;
    order: 2;
    z-index: 4;
}

.menu-ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    z-index: 4;
}

.menu-li{
    position:relative;
    padding: 0px;
    margin: 16px 0px ;
    text-transform:uppercase;
    cursor:pointer;
    z-index: 4;
}

.menu a:hover{
    color: rgb(245, 220, 0);
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
    background-color:  rgb(201, 40, 94);

    position: absolute;
    bottom: 26px;
    width: 0%;
    transition: all ease-in-out 250ms;
}

.tabs a:hover{
    color: rgb(201, 40, 94);
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

.yellow-wave{
    background: url('~assets/yellow_wave.png') bottom no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden; 
    position: fixed;
    bottom: 100px;
    right: 100px;
    transform: scale(1.4);

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge*/
    user-select: none;
    
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
}

.purple-wave{
    background: url('~assets/purple_wave.png') bottom no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    bottom: -4px;
    z-index: 1;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge*/
    user-select: none;
    
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
}

@media only screen and (max-width: 900px){
.menu .menu-ul .menu-li{
    all:unset;
    display: none;
}

.tabs .tabs-ul .tabs-li{
    all: unset;
    display: none;
}

.nav-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    order: 1;
    flex-direction: column-reverse;
}

.logo{
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 4;
    transform: scale(0.5);
}

ul{
    list-style: none;
    z-index: 4;
}

}

.disableselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge*/
   user-select: none;
}

.disabledrag{
   -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   user-drag: none;
}



</style>

