<template>
    <div class="component home-hero">
        <div id="left">
            <h1 id="title">
                Driving Digital <span class="blue-text">Innovation</span> in Healthcare & <span class="blue-text">Beyond</span>
            </h1>
            <p id="sub-title" v-if="width > 1049">
                At Kaizen Technology, we’ve grown from healthcare SaaS specialists into a full-service digital partner. We design websites, apps, booking systems, and provide SEO, social media, and branding — delivering end-to-end solutions that drive growth.
            </p>
            <BasicButton :text="'Book a consultation'" :type="2" v-if="width > 1049" />
        </div>
        <div id="right">
            <picture class="icon">
                <img src="/assets/Screen No 2.svg" alt="Hero Illustration" />
            </picture>
            <p id="sub-title" v-if="width <= 1049">
                Our digital marketing agency helps businesses grow and succeed online through a range of services
                including SEO, PPC, social media marketing, and content creation.
            </p>
            <BasicButton id="action" :text="'Book a consultation'" :type="2" v-if="width <= 1049" />

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const width = ref(window.innerWidth);

window.addEventListener('resize', (e) => {
    width.value = window.innerWidth;
});
</script>

<style scoped>
.home-hero {
    margin: 70px 0;
    display: flex;
    justify-content: space-between;
}

#left {
    max-width: 50%;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: start;
}

.blue-text {
    color: var(--primary-color);
}

#right {
    flex-shrink: 1;
}

.icon img {
    width: 750px;
    height: auto;
}

/* RESPONSIVE */
@media screen and (max-width: 1049px) {
    .home-hero {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #left {
        max-width: 100%;
        min-width: 0;
        display: flex;
        flex-direction: column;
    }

    #left #title {
        text-align: center;
    }

    #right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #right .icon {
        display: flex;
        justify-content: center;
    }

    #right #sub-title {
        text-align: center;
        margin-bottom: 35px;
    }

    #right #sub-title #action {
        max-width: max-content;
    }
}

@media screen and (max-width: 620px) {
    #right {
        align-items: initial;
    }

    #right #sub-title #action {
        max-width: none;
        width: 100%;
    }
}
</style>