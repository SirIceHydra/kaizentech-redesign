<template>
    <div class="component project-card" :id="id">
        <div class="project-image">
            <img :src="image" :alt="client + ' project preview'" />
        </div>
        <div class="project-meta">
            <div class="client">
                <img class="client-icon" :src="icon" :alt="client + ' logo'" />
                <div class="client-texts">
                    <h4 class="client-name">{{ client }}</h4>
                    <p class="client-desc">{{ desc }}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: { type: String, default: 'middle' },
    image: { type: String, default: '/img/img-1.png' },
    icon: { type: String, default: '/logo/logo-white.svg' },
    client: { type: String, default: 'Client' },
    desc: { type: String, default: 'GP Website' }
});
</script>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    align-items: stretch;
}

.project-image {
    background-color: transparent;
    border-radius: 18px;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.project-meta {
    padding: 0;
    margin-top: 16px;
    display: flex;
    align-items: center;
}

.client {
    display: flex;
    align-items: center;
    gap: 12px;
}

.client-icon {
    width: 56px;
    height: 56px;
    object-fit: contain;
    background-color: transparent;
    border-radius: 10px;
    padding: 0;
}

.client-name {
    color: var(--white);
    margin: 0;
}

.client-desc {
    color: var(--white);
    opacity: 0.7;
    margin: 4px 0 0 0;
}

/* Responsive */
@media screen and (max-width: 920px) {
    .project-card {
        width: 100%;
    }
}
</style>