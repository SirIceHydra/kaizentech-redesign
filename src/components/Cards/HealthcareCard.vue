<template>
    <div class="component healthcare-card" :id="id">
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
.healthcare-card {
    width: 30%;
    min-width: 0px;
    display: grid;
    grid-template-rows: 200px 100px 1fr 50px; /* Fixed grid: image | title | text | button */
    background-color: var(--gray);
    border-radius: 20px;
    padding: 30px;
    border: 2px solid var(--secondary-color);
    height: 700px; /* Fixed height - same for all cards */
    box-sizing: border-box;
    gap: 0;
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
    margin: 0 20px;
}

/* RESPONSIVE */
@media screen and (max-width: 920px) {
    .healthcare-card {
        width: 100%;
        height: auto;
        margin-bottom: 30px;
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
