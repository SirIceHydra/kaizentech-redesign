<template>
    <MainLayout>
        <HeroHome />
        <LogoCarousel :logos="logos"></LogoCarousel>
        <ServiceSection />
        <ActionContact />
        <CaseStudiesDuplicate />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactAccess />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import HeroHome from '@/components/Heroes/HeroHome.vue';
import LogoCarousel from '@/components/Carousel/LogoCarousel/LogoCarousel.vue';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection.vue';
import ActionContact from '@/components/Sections/ActionContact/ActionContact.vue';
import CaseStudies from '@/components/Sections/CaseStudies/CaseStudies.vue';
import CaseStudiesDuplicate from '@/components/Sections/CaseStudiesDuplicate/CaseStudiesDuplicate.vue';
import WorkingProcess from '@/components/Sections/WorkingProcess/WorkingProcess.vue';
import Team from '@/components/Sections/Team/Team.vue';
import Testimonials from '@/components/Sections/Testimonials/Testimonials.vue';
import ContactAccess from '@/components/Sections/ContactAccess/ContactAccess.vue';

import redgumLogo from '/assets/Redgum.svg?raw';
import dmcLogo from '/assets/DMC.svg?raw';
import invictusLogo from '/logo-banner/Invictus.svg?raw';
import noBgBlackLogo from '/logo-banner/noBgBlack.svg?raw';
import womanyLogo from '/logo-banner/WOMANY(2).svg?raw';

// Since we only have 5 SVG files, let's use img tags for the PNG
const logos = [
    {
        logo: redgumLogo,
        id: 'redgum'
    },
    {
        logo: dmcLogo,
        id: 'dmc'
    },
    {
        logo: invictusLogo,
        id: 'invictus'
    },
    {
        logo: noBgBlackLogo,
        id: 'nobg-black'
    },
    {
        logo: womanyLogo,
        id: 'womany'
    },
    {
        logo: '<img src="/logo-banner/mishqah-logo.6499a9a778f3106d6e2b.png" alt="Mishqah logo" style="max-height: 100%; max-width: 100%; object-fit: contain;" />',
        id: 'mishqah'
    }
];
</script>

<style scoped>
section {
    margin-top: 70px;
    padding-bottom: 70px;
}

@media screen and (max-width: 620px) {
    section {
        margin-top: 0;
        padding-bottom: 70px;
    }
}
</style>