<template>
    <div class="component healthcare-card-wrapper" :id="id">
        <div class="shadow"></div>
        <div class="healthcare-card">
            <div class="image-container" v-if="image">
                <img :src="image" :alt="title || 'Feature illustration'" />
            </div>
            <div class="content">
                <div class="text-content">
                    <h3 v-if="title" id="title">{{ title }}</h3>
                    <p id="text">
                        {{ text }}
                    </p>
                </div>
                <div class="button-container">
                    <SimpleLinkButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import SimpleLinkButton from '../Buttons/SimpleLinkButton/SimpleLinkButton.vue';

const props = defineProps({
    id: { type: String, default: 'middle' },
    title: { type: String },
    text: { type: String, default: 'This is a placeholder to be changed!' },
    image: { type: String }
});
</script>

<style scoped>
.healthcare-card-wrapper {
    width: 30%;
    min-width: 0px;
    height: 700px; /* Fixed height - same for all cards */
    position: relative;
}

.healthcare-card-wrapper .shadow {
    background-color: var(--secondary-color);
    content: '';
    border-radius: 20px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 8px;
    left: 0%;
    transform: translateX(-0%);
    transition-property: opacity, width;
    transition-duration: 0.2s, 0.2s;
    z-index: -1;
}

.healthcare-card {
    display: grid;
    grid-template-rows: 200px 100px 1fr 50px; /* Fixed grid: image | title | text | button */
    background-color: var(--gray);
    border-radius: 20px;
    padding: 30px;
    border: 2px solid var(--secondary-color);
    height: 100%; /* Fill the wrapper */
    box-sizing: border-box;
    gap: 0;
    transition: 0.2s;
}

.image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1;
}

.image-container img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}

.content {
    display: contents; /* Let children use the grid directly */
}

.text-content {
    display: contents; /* Let children use the grid directly */
}

#title {
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0 0 0;
    line-height: 1.2;
    display: flex;
    align-items: flex-start;
    grid-row: 2;
    overflow: visible;
}

#text {
    color: var(--secondary-color);
    margin: 20px 0 0 0;
    line-height: 1.4;
    grid-row: 3;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
}

.button-container {
    grid-row: 4;
    display: flex;
    align-items: flex-end;
    margin: 0;
    padding-bottom: 0;
}

#middle {
    padding: 30px;
    border-left: 2px solid var(--secondary-color);
    border-right: 2px solid var(--secondary-color);
    margin: 0;
}

/* HOVER EFFECTS */
.healthcare-card-wrapper:hover .healthcare-card {
    transform: translateY(-5px) scale(1.01);
}

.healthcare-card-wrapper:hover .shadow {
    opacity: 0.7;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
}

/* RESPONSIVE */
@media screen and (max-width: 920px) {
    .healthcare-card-wrapper {
        width: 100%;
        height: auto;
        margin-bottom: 30px;
    }
    
    .healthcare-card {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .text-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    #middle {
        border-left: 0;
        border-right: 0;
        border-top: 2px solid var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding: 30px 0;
        margin: 30px 0;
    }

    .image-container {
        height: 150px;
    }

    #title {
        margin: 0 0 15px 0;
    }

    #text {
        margin: 0 0 15px 0;
    }

    .button-container {
        margin: 0;
    }
}
</style>
