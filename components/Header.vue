<template>
    <header>
        <ul>
            <li><nuxt-link to="/">Главная</nuxt-link></li>
        </ul>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li{
    margin: 0 10px;
}
</style>
