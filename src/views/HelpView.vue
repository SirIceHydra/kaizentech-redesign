<template>
    <MainLayout>
        <section id="help-section">
            <SectionTitle 
                :title="'Help Center'"
                :desc="'How can we help you today? Welcome to Kaizen\'s Help Center'"
                class="title" 
            />
            
            <div class="help-grid">
                <div 
                    v-for="(helpItem, index) in helpArticles" 
                    :key="'help-' + index"
                    class="help-card-wrapper"
                    :class="{ 'full-width': index === helpArticles.length - 1 && helpArticles.length % 2 === 1 }"
                    @click="navigateToDetail(helpItem.slug)"
                >
                    <HelpCard 
                        :title="helpItem.title" 
                        :description="helpItem.shortDescription"
                        :action-text="helpItem.actionText"
                    />
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import HelpCard from '@/components/Cards/HelpCard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

// Help articles data from the old website
const helpArticles = [
    {
        title: 'Getting started with Kaizen',
        shortDescription: 'Account setup, onboarding, and where to find everything.',
        description: 'Account setup, onboarding, and where to find everything. Learn how to start accepting appointments with complete step-by-step guides to set up your profile, working hours, procedures, and begin accepting patient bookings. This section also includes familiarizing yourself with the Kaizen Dashboard and navigating all dashboard tabs and features including Home, Calendar, and Settings.',
        slug: 'getting-started',
        actionText: 'View articles →'
    },
    {
        title: 'Managing appointments',
        shortDescription: 'Create, edit, and manage appointments in your calendar.',
        description: 'Create, edit, and manage appointments in your calendar. This comprehensive section covers creating appointments manually from the Home, Manage Appointments, and Calendar tabs, updating appointments using both the Calendar and Manage Appointments tabs, canceling appointments, managing appointment requests with confirmation and cancellation options, and marking appointments as Completed or No Show after they conclude.',
        slug: 'managing-appointments',
        actionText: 'Read article →'
    },
    {
        title: 'Staff management',
        shortDescription: 'Manage staff profiles, working hours, and time-off.',
        description: 'Manage staff profiles, working hours, and time-off. Learn how to manage time-off for staff members including hourly and daily leave requests, set up your working hours and availability schedule in the Doctors Settings, and create and customize your doctor profile with personal information, qualifications, and consultation rates.',
        slug: 'staff-management',
        actionText: 'Read article →'
    },
    {
        title: 'Administration',
        shortDescription: 'Create doctors, procedures, and more.',
        description: 'Create doctors, procedures, and more. This section provides complete guides for manually creating doctors, procedures, promotions and transferring practice ownership. Learn how to set up your practice structure and manage administrative tasks effectively.',
        slug: 'administration',
        actionText: 'Read article →'
    },
    {
        title: 'Billing',
        shortDescription: 'Manage your subscription and billing details.',
        description: 'Manage your subscription and billing details. Complete guide to managing your subscription and understanding billing processes within the Kaizen AMS system.',
        slug: 'billing',
        actionText: 'Read article →'
    }
];

const navigateToDetail = (slug) => {
    if (slug === 'getting-started') {
        router.push('/help/getting-started');
    }
    // For now, only getting-started is implemented
    // TODO: Implement other help sections
};
</script>

<style scoped>
#help-section {
    padding: 70px 50px;
    max-width: 1200px;
    margin: 0 auto;
}

.title {
    margin-bottom: 60px;
}

.help-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
}

.help-card-wrapper {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.help-card-wrapper.full-width {
    grid-column: 1 / -1;
    max-width: 580px;
    margin: 0 auto;
}

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #help-section {
        padding: 50px 30px;
    }
    
    .title {
        margin-bottom: 40px;
    }
    
    .help-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        max-width: 600px;
    }
    
    .help-card-wrapper.full-width {
        grid-column: 1;
        max-width: 100%;
    }
}

@media screen and (max-width: 620px) {
    #help-section {
        padding: 40px 20px;
    }
    
    .help-grid {
        gap: 20px;
        max-width: 100%;
    }
}
</style>
