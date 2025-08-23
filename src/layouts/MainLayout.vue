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
        // Prevent background scrolling without visual displacement
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = getScrollbarWidth() + 'px';
    } else {
        // Restore scrolling
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };
};

// Helper function to calculate scrollbar width to prevent layout shift
function getScrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
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