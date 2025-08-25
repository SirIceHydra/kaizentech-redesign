<template>
    <div class="component simple-action-card">
        <div class="container">
            <div class="action-info">
                <h3 id="text">{{ title }}</h3>
                <p id="desc">
                    {{ desc }}
                </p>
                <BasicButton :text="'Get your free consultation'" :type="2" @click="scrollToContact" />
            </div>
            <picture id="icon" v-html="icon">
            </picture>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { type: String, required: true }
});

const scrollToContact = () => {
    const contactSection = document.getElementById('contact-access');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
.simple-action-card {
    height: 350px;
    position: relative;
}

.simple-action-card::before {
    display: none;
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
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    transition: 0.2s;
    z-index: 1;
}

/* LISTENERS */

#icon:hover {
    transform: translateY(-60%);
}

/* RESPONSIVE */
@media screen and (max-width: 1220px) {
    #icon {
        right: 5%;
    }
}

@media screen and (max-width: 930px) {
    .simple-action-card {
        height: auto;
    }

    #icon {
        margin-left: 120px;
        position: initial;
    }

    .container {
        padding-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .action-info {
        gap: 30px;
        align-items: center;
        justify-content: initial;
        text-align: center;
    }

    /* LISTENERS */
    #icon:hover {
        transform: translateY(0);
    }
}

@media screen and (max-width: 620px) {
    .action-info {
        --padding: 30px;
        align-items: initial;
        max-width: 100%;
    }

    .container {
        margin: 0 10px;
        border-radius: 25px;
    }

    #icon {
        min-width: max-content;
        margin-left: 0;
        margin-top: 20px;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding-bottom: 0;
        margin: 0 5px;
        border-radius: 20px;
    }

    .action-info {
        --padding: 20px;
    }

    #icon {
        display: none;
    }
}
</style>