<template>
    <section id="projects">
        <SectionTitle :title="'Our Projects'"
            :desc="'Explore our web design projects—tailored to client goals, fully responsive across devices, and built with SEO best practices.'"
            class="title" />
        <UseCase>
            <!-- Row 1 -->
            <UseCaseCard :id="'left'" :image="'/assets/Projects_DrPayal.png'" :icon="'/assets/DrPayalLogo.png'"
                :client="'Dr Payal'" :desc="'GP Website'" :websiteUrl="'https://www.drpayal.co.za'" />
            <UseCaseCard :id="'middle'" :image="'/assets/Projects_Womanon.png'" :icon="'/assets/WomanonLogo.jpg'"
                :client="'Womanon'" :desc="'Womens Health Website'" :websiteUrl="'https://www.womanon.org'" />
            <UseCaseCard :id="'right'" :image="'/assets/Projects_DrMishqah.png'" :icon="'/assets/MishqahLogo.png'"
                :client="'Dr Mishqah'" :desc="'Dentist Website'" :websiteUrl="'https://www.drmishqahdollie.co.za/'" />
            <!-- Row 2 -->
            <UseCaseCard :id="'left-2'" :image="'/assets/Projects_Safiyah.png'" :icon="'/assets/SafiyahLogo.png'"
                :client="'SH Dietitians'" :desc="'Dietitian Website'" :websiteUrl="'https://www.safiyahhassandietitians.co.za'" />
            <UseCaseCard :id="'middle-2'" :image="'/assets/Projects_Womany.png'" :icon="'/assets/WomanyLogo.jpg'"
                :client="'Womany'" :desc="'Womans Health Website'" :websiteUrl="'https://www.womany.org'" />
            <UseCaseCard :id="'right-2'" :image="'/assets/Projects_Invictus.png'" :icon="'/assets/Invictus.png'"
                :client="'Invictus Nutrition'" :desc="'E-Commerce Website'" :websiteUrl="'https://www.invictusnutrition.co.za'" />
        </UseCase>
    </section>
</template>

<script setup>
import UseCase from '@/components/Articles/UseCase/UseCase.vue';
import UseCaseCard from '@/components/Cards/UseCaseCard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
</script>
