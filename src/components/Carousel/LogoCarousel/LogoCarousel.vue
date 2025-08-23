<template>
    <div class="component logo-carousel" :class="{ running: isMobile }" ref="component">
        <div class="layer" id="top-layer" ref="cont_layer">
            <div class="logo-container">
                <picture class="logo" v-for="(logo) in logos" v-html="logo.logo" :id="`logo-${logo.id}`">
                </picture>
            </div>
            <div class="logo-container copy">
                <picture class="logo" v-if="isMobile" v-for="(logo) in logos" v-html="logo.logo" :id="`logo-${logo.id}-alt`">
                </picture>
            </div>
        </div>

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    logos: { type: Array, required: true },
});

/**
 * @type {HTMLElement} component
 */
const component = ref(null);
const componentWidth = ref(0);
const cont_layer = ref(null); 
const layerWidth = ref(0);

const logosReversed = computed(() => [...props.logos].reverse());

const isMobile = ref(false);

onMounted(() => {
    layerWidth.value = cont_layer.value.getBoundingClientRect().width;
    CheckSize();
});

window.addEventListener('resize', (e) => {
    CheckSize();
});

function CheckSize() {
    componentWidth.value = component.value.getBoundingClientRect().width;
    
    // Use screen width instead of container comparison to determine mobile
    if (window.innerWidth < 1120) isMobile.value = true;
    else isMobile.value = false;
};
</script>

<style scoped>
.logo-carousel {
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow: hidden;
}

.logo-carousel.running {
    -webkit-mask-image: linear-gradient(to left, transparent 1%, black 7% 93%, transparent 99%);
    mask-image: linear-gradient(to left, transparent 1%, black 7% 93%, transparent 99%);
}

.layer {
    min-width: max-content;
    white-space: nowrap;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-carousel.running .logo-container {
    display: inline-block;
    animation: slide linear infinite 20s;
}



.logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    filter: grayscale(100%);
    opacity: 0.7;
    height: 60px;
    width: 160px;
    overflow: hidden;
}

.logo :deep(svg),
.logo :deep(img) {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

/* Redgum logo positioning */
#logo-redgum :deep(svg) {
    transform: translateY(-8px);
}

/* Mishqah logo needs to be 1.5x larger and moved down */
#logo-mishqah :deep(img) {
    transform: scale(2.0) translateY(2px);
}

.logo-carousel.running .logo {
    filter: grayscale(100%);
    opacity: 0.6;
}

.logo:not(:first-of-type) {
    margin-left: 60px;
}

.logo-carousel.running .logo {
    margin: 0 30px;
}

/* ANIMATE */
@keyframes slide {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}



/* LISTENER */
.logo:hover {
    filter: grayscale(0%);
    opacity: 1;
}

.logo-carousel.running .logo:hover {
    filter: grayscale(0%);
    opacity: 1;
}

/* Mobile responsive sizing */
@media screen and (max-width: 620px) {
    .logo-carousel {
        margin-bottom: 50px;
    }
    
    .logo {
        height: 45px;
        width: 120px;
    }
    
    .logo :deep(svg),
    .logo :deep(img) {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    
    /* Redgum logo positioning on mobile */
    #logo-redgum :deep(svg) {
        transform: translateY(-6px);
    }
    
    /* Mishqah logo needs to be 1.5x larger and moved down on mobile too */
    #logo-mishqah :deep(img) {
        transform: scale(2.0) translateY(4px);
    }
    
    .logo:not(:first-of-type) {
        margin-left: 40px;
    }
    
    .logo-carousel.running .logo {
        margin: 0 20px;
    }
}
</style>