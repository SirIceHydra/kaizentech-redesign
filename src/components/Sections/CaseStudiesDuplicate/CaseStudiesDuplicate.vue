<template>
    <section id="action-contact">
        <SectionTitle :title="'Our Projects'"
            :desc="'Explore our web design projects—tailored to client goals, fully responsive across devices, and built with SEO best practices.'"
            class="title" />
        <UseCase>
            <!-- Row 1 -->
            <UseCaseCard :id="'left'" :image="'/assets/Projects_DrPayal.png'" :icon="'/assets/DrPayalLogo.png'"
                :client="'Dr Payal'" :desc="'GP Website'" />
            <UseCaseCard :id="'middle'" :image="'/assets/Projects_Womanon.png'" :icon="'/assets/WomanonLogo.jpg'"
                :client="'Womanon'" :desc="'Womens Health Website'" />
            <UseCaseCard :id="'right'" :image="'/assets/Projects_DrMishqah.png'" :icon="'/assets/MishqahLogo.png'"
                :client="'Dr Mishqah'" :desc="'Dentist Website'" />
            <!-- Row 2 -->
            <UseCaseCard :id="'left-2'" :image="'/assets/Projects_Safiyah.png'" :icon="'/assets/SafiyahLogo.png'"
                :client="'SH Dietitians'" :desc="'Dietitian Website'" />
            <UseCaseCard :id="'middle-2'" :image="'/assets/Projects_Womany.png'" :icon="'/assets/WomanyLogo.jpg'"
                :client="'Womany'" :desc="'Womans Health Website'" />
            <UseCaseCard :id="'right-2'" :image="'/assets/Projects_Invictus.png'" :icon="'/assets/Invictus.png'"
                :client="'Invictus Nutrition'" :desc="'E-Commerce Website'" />
        </UseCase>
    </section>
</template>

<script setup>
import UseCase from '@/components/Articles/UseCase/UseCase.vue';
import UseCaseCard from '@/components/Cards/UseCaseCard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
</script>
