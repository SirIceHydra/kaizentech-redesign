<template>
    <a :href="websiteUrl" target="_blank" rel="noopener noreferrer" class="project-link">
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
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: { type: String, default: 'middle' },
    image: { type: String, default: '/img/img-1.png' },
    icon: { type: String, default: '/logo/logo-white.svg' },
    client: { type: String, default: 'Client' },
    desc: { type: String, default: 'GP Website' },
    websiteUrl: { type: String, default: '#' }
});
</script>

<style scoped>
.project-link {
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;
}

.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    align-items: stretch;
    transition: transform 0.2s ease;
}

.project-card:hover {
    transform: translateY(-5px) scale(1.02);
}

.project-image {
    background-color: transparent;
    border-radius: 18px;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.2s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
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
    transition: transform 0.2s ease;
}

.project-card:hover .client-icon {
    transform: scale(1.1);
}

.client-name {
    color: var(--white);
    margin: 0;
}

.client-desc {
    color: var(--white);
    opacity: 0.7;
    margin: 4px 0 0 0;
    transition: opacity 0.2s ease;
}

.project-card:hover .client-desc {
    opacity: 1;
}

/* Responsive */
@media screen and (max-width: 920px) {
    .project-card {
        width: 100%;
    }
}
</style>