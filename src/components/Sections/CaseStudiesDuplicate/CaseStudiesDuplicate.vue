<template>
    <section id="action-contact">
        <SectionTitle :title="'Our Projects'"
            :desc="'Explore our web design projects—tailored to client goals, fully responsive across devices, and built with SEO best practices.'"
            class="title" />
        <UseCase>
            <!-- Row 1 -->
            <UseCaseCard :id="'left'" :image="'/assets/Projects_DrPayal.png'" :icon="'/assets/DrPayalLogo.png'"
                :client="'Dr Payal'" :desc="'GP Website'" />
            <UseCaseCard :id="'middle'" :image="'/assets/Projects_Safiyah.png'" :icon="'/assets/SafiyahLogo.png'"
                :client="'SH Dietitians'" :desc="'Dietitian Website'" />
            <UseCaseCard :id="'right'" :image="'/img/img-3.png'" :icon="'/logo/logo-hubspot.svg'"
                :client="'HubSpot'" :desc="'React Native'" />
            <!-- Row 2 -->
            <UseCaseCard :id="'left-2'" :image="'/img/img-4.png'" :icon="'/logo/logo-notion.svg'"
                :client="'Notion'" :desc="'iOS'" />
            <UseCaseCard :id="'middle-2'" :image="'/img/img-5.png'" :icon="'/logo/logo-netflix.svg'"
                :client="'Netflix'" :desc="'Android'" />
            <UseCaseCard :id="'right-2'" :image="'/img/img-6.png'" :icon="'/logo/logo-zoom.svg'"
                :client="'Zoom'" :desc="'Web'" />
        </UseCase>
    </section>
</template>

<script setup>
import UseCase from '@/components/Articles/UseCase/UseCase.vue';
import UseCaseCard from '@/components/Cards/UseCaseCard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
</script>
