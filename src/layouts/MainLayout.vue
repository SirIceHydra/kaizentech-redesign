<template>
    <div id="main-layout" :class="{ 'panel-open': isOpenNavbarPanel }">
        <Navbar :is-mobile="isMobile" :is-open="isOpenNavbarPanel" @open-navbar-panel="ToggleNavbarPanel" />
        <NavbarPanel :is-mobile="isMobile" :is-open="isOpenNavbarPanel" @close-navbar-panel="ToggleNavbarPanel"
            v-if="isMobile" />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
import NavbarPanel from '@/components/Navbar/NavbarPanel.vue';

import { ref } from 'vue';

const isMobile = ref(false);
const isOpenNavbarPanel = ref(false);

CheckWidth();

window.addEventListener('resize', (e) => {
    CheckWidth();
});

function ToggleNavbarPanel() {
    isOpenNavbarPanel.value = !isOpenNavbarPanel.value;
    CheckNavbarPanelActive();
};

function CheckWidth() {
    const width = window.innerWidth;

    if (width < 1120) isMobile.value = true;
    else isMobile.value = false;
}

function CheckNavbarPanelActive() {
    if (isOpenNavbarPanel.value) {
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        document.body.setAttribute('data-scroll-y', String(scrollY));
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
    } else {
        const saved = document.body.getAttribute('data-scroll-y');
        document.body.removeAttribute('data-scroll-y');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        if (saved) {
            const y = parseInt(saved, 10) || 0;
            window.scrollTo(0, y);
        }
    };
};
</script>

<style scoped>
#main-layout {
    width: 100%;
    max-width: 1366px;
    min-height: 100dvh;
    margin-top: 84px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.panel-open :deep(#navbar) {
    background: linear-gradient(135deg, rgba(243,243,243,0.95) 0%, rgba(243,243,243,0.9) 100%);
}
</style>