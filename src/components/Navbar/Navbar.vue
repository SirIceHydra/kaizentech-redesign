<template>
    <nav id="navbar" :class="{ hide: isMobile, 'panel-open': isOpen }">
        <div id="left">
            <RouterLink :to="{ name: 'home' }" class="logo">
                <Logo :dark="true" />
            </RouterLink>
        </div>
        <div id="right">
            <ul id="links">
                <li class="link">
                    <NavLinkButton :text="'Services'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Projects'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Software'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'FAQs'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Help'" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Login'" />
                </li>
                <li class="link">
                    <a href="https://github.com/Poufles/vue-olga-positivus" target="_blank">
                        <BasicButton :text="'Get started free'" :type="1" />
                    </a>
                </li>
            </ul>
            <Hamburger class="nav-side-action" @click="emit('openNavbarPanel')" />
        </div>
    </nav>
</template>

<script setup>
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import Hamburger from '../Buttons/Hamburger/Hamburger.vue';
import BasicButton from '../Buttons/BasicButton/BasicButton.vue';

const props = defineProps({
    isMobile: { type: Boolean },
    isOpen: { type: Boolean, default: false }
});

const emit = defineEmits([ 'openNavbarPanel' ]);
</script>

<style scoped>
#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    /* glassmorphism container */
    padding: 8px 26px;
    border-radius: 9999px;
    /* More translucent glass base */
    background: linear-gradient(135deg, rgba(243,243,243,0.6) 0%, rgba(243,243,243,0.45) 100%);
    border: 1px solid rgba(255,255,255,0.7);
    /* remove drop shadows for a cleaner bar */
    box-shadow: none;
    backdrop-filter: blur(18px) saturate(180%) contrast(1.06);
    -webkit-backdrop-filter: blur(18px) saturate(180%) contrast(1.06);
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    max-width: 1366px;
    z-index: 1000;
}

/* Light/reflection overlays */
#navbar::before,
#navbar::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
}

/* Sheen/highlight */
#navbar::before {
    background:
        radial-gradient(120% 120% at 8% 8%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 35%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 65%),
        linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
    mix-blend-mode: screen;
}

/* Subtle micro-noise for texture */
#navbar::after {
    background-image: linear-gradient(transparent 0, rgba(255,255,255,0.08) 100%);
    opacity: 0.08;
}

#left {
    display: flex;
    align-items: center;
    gap: 5px;
}

#left .logo {
    text-decoration: none;
    color: var(--secondary-color);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 48px;
}

/* Keep logo fully opaque over the glass */
#left .logo :deep(img) {
    isolation: isolate;
    mix-blend-mode: normal;
    filter: none !important;
}

#right #links {
    list-style: none;
    display: flex;
    gap: 28px;
    align-items: center;
}

#navbar.hide #right #links {
    display: none;
}

#navbar:not(.hide) .nav-side-action {
    display: none;
}

/* Ensure hamburger sits above when visible, but not above panel close button */
.nav-side-action {
    position: relative;
    z-index: 2;
}

/* Hide hamburger when panel is open so it doesn't clash with the close button */
#navbar.panel-open .nav-side-action {
    display: none !important;
}



/* Make Get started free button text turn white on hover */
#right a:hover :deep(.basic-btn #text) {
    color: var(--white);
}

/* Reduce only the header button size to match navbar typography */
#right a :deep(.basic-btn) {
    height: 48px;
    padding: 0 22px;
    border-radius: 12px;
}

#right a :deep(.basic-btn #text) {
    font-size: 16px;
}

/* Responsive adjustments for navbar with additional items */
@media screen and (max-width: 1200px) {
    #right #links {
        gap: 20px;
    }
    
    #right a :deep(.basic-btn) {
        padding: 0 18px;
    }
    
    #right a :deep(.basic-btn #text) {
        font-size: 14px;
    }
}

@media screen and (max-width: 1050px) {
    #right #links {
        gap: 16px;
    }
    
    #right a :deep(.basic-btn) {
        padding: 0 16px;
    }
}
</style>