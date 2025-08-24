<template>
    <nav class="component side-panel" :class="{ show: isOpen }" v-if="isMobile" v-show="isOpen" @click.self="emits('closeNavbarPanel')">
        <ul id="links" v-if="isMobile" @click.stop>
            <button class="close-btn" aria-label="Close" @click.stop="emits('closeNavbarPanel')">×</button>
            <li class="link">
                <a href="#services" @click="scrollToSection('services'); emits('closeNavbarPanel')">
                    <NavLinkButton :text="'Services'" />
                </a>
            </li>
            <li class="link">
                <a href="#projects" @click="scrollToSection('projects'); emits('closeNavbarPanel')">
                    <NavLinkButton :text="'Projects'" />
                </a>
            </li>
            <li class="link">
                <a href="#software" @click="scrollToSection('software'); emits('closeNavbarPanel')">
                    <NavLinkButton :text="'Software'" />
                </a>
            </li>
            <li class="link">
                <a href="#faq-section" @click="scrollToSection('faq-section'); emits('closeNavbarPanel')">
                    <NavLinkButton :text="'FAQs'" />
                </a>
            </li>
            <li class="link">
                <RouterLink :to="{ name: 'help' }" @click="emits('closeNavbarPanel')">
                    <NavLinkButton :text="'Help'" />
                </RouterLink>
            </li>
            <li class="link">
                <a href="https://app.kaizenams.co.za/login/" target="_blank">
                    <NavLinkButton :text="'Login'" />
                </a>
            </li>
            <li class="link">
                <a href="https://app.kaizenams.co.za/signup/" target="_blank">
                    <BasicButton :text="'Get started free'" :type="1" />
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import Hamburger from '../Buttons/Hamburger/Hamburger.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import BasicButton from '../Buttons/BasicButton/BasicButton.vue';

const props = defineProps({
    isMobile: Boolean,
    isOpen: Boolean
});

const emits = defineEmits(['closeNavbarPanel']);

const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
        window.location.href = `/#${sectionId}`;
        return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Additional offset to ensure we're at the very top of the section
        setTimeout(() => {
            window.scrollBy(0, -120);
        }, 100);
    }
};
</script>

<style scoped>
.side-panel {
    position: fixed;
    inset: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1500;
    pointer-events: none;
}

.side-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity 0.25s ease;
}

.side-panel.show::before {
    opacity: 1;
    pointer-events: auto;
}

#links {
    padding-top: 30px;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}

.side-panel #links {
    background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%);
    border: 1px solid rgba(243,243,243,0.95);
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    border-radius: 28px;
    width: 100%;
    max-width: 720px;
    margin-top: 70px;
    padding: 28px 20px 32px;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.6),
        0 12px 30px rgba(0,0,0,0.18);
    pointer-events: auto;
}

.close-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: rgba(255,255,255,0.9);
    border: 1px solid rgba(0,0,0,0.1);
    font-size: 28px;
    line-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1600;
}



/* RESPONSIVE */
@media screen and (max-width: 620px) {
    .side-panel #links {
        margin-top: 60px;
    }
}
</style>