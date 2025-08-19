<template>
    <div class="component logo">
        <picture id="logo-container">
            <img v-if="dark" src="/logo/kaizentech.svg" alt="KaizenTech Logo" />
            <img v-else src="/logo/kaizentech.svg" alt="KaizenTech Logo" />
        </picture>
        <!-- <h2 id="logo-text" v-if="dark">Positivus</h2>
        <h2 id="logo-text" class="white" v-else>Positivus</h2> -->
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    dark: { type: Boolean, default: true },

});

</script>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 5px;
}

#logo-container img {
    height: 80px;
    width: auto;
    display: block;
}

#logo-text::selection {
    background-color: transparent;
}

#logo-text.white {
    color: var(--white)
}

#logo.white {
    fill: var(--white)
}
</style>