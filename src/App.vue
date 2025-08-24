<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                // Additional offset for fixed navbar
                setTimeout(() => {
                    window.scrollBy(0, -120);
                }, 100);
            }
        }, 100);
    }
});
</script>