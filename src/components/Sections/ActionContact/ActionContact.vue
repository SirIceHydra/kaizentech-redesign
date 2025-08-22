<template>
    <section id="action-contact">
        <SimpleActionCard :title="'Ready to grow your practice?'"
            :desc="'Get custom websites, patient booking systems, and digital marketing solutions designed specifically for healthcare professionals.'"
            :icon="icon" />
    </section>
</template>

<script setup>
import SimpleActionCard from '@/components/Cards/SimpleActionCard.vue';

const icon = `<img src="/assets/banner.svg" alt="Banner illustration" style="max-width: 300px; height: auto;" />`
</script>

<style scoped>
.wrapper {
    height: 350px;
    position: relative;
}

.wrapper::before {
    content: '';
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
}

.container {
    background-color: var(--gray);
    height: 100%;
    border-radius: 45px;
    display: flex;
}

.action-info {
    --padding: 60px;

    max-width: 50%;
    width: 100%;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}

#desc {
    max-width: 450px;
}

#icon {
    position: absolute;
    top: -30px;
    right: 0;
    transition: 0.2s;
    z-index: 1;
}

/* LISTENERS */
.wrapper:hover::before {
    height: 200px;
}

#icon:hover {
    transform: translateY(-10px);
}
</style>