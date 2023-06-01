<template>
    <!-- <slot name="header"> 
        <Header></Header>
    </slot> -->
    <!-- <Header></Header> -->
    <slot name="content"></slot>
    <slot name="footer"> 
        <Footer />
    </slot>
</template>

<script setup>
// import Header from '../layout/paration/Header.vue'
import Footer from './paration/Footer.vue'
</script>