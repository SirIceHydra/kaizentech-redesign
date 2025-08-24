<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help" class="back-link">← Back to Help Center</router-link>
            </div>
            
            <SectionTitle 
                :title="'Managing Appointments'"
                :desc="'Create, edit, and manage appointments in your calendar'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Learn how to create, edit, and manage appointments across different tabs in your Kaizen dashboard. This comprehensive guide covers all aspects of appointment management from creation to completion.
                    </p>
                    
                    <!-- Articles Grid -->
                    <div class="articles-grid">
                        <div 
                            v-for="(article, index) in managingAppointmentsArticles" 
                            :key="'article-' + index"
                            class="article-card-wrapper"
                            @click="navigateToArticle(article.slug)"
                        >
                            <div class="article-card">
                                <div class="article-card-content">
                                    <h3 class="article-card-title">{{ article.title }}</h3>
                                    <p class="article-card-description">{{ article.description }}</p>
                                    <div class="article-card-meta">
                                        <span class="read-time">{{ article.readTime }}</span>
                                        <span class="read-more">Read article →</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Managing Appointments articles data from the old website
const managingAppointmentsArticles = [
    {
        title: 'Create an appointment',
        description: 'Complete guide to manually creating appointments from the Home, Manage Appointments, and Calendar tabs.',
        readTime: '8 min read',
        slug: 'create-appointment'
    },
    {
        title: 'Updating an appointment',
        description: 'Step-by-step guide to update appointments using both the Calendar and Manage Appointments tabs.',
        readTime: '10 min read',
        slug: 'update-appointment'
    },
    {
        title: 'Cancel an appointment',
        description: 'Learn how to cancel appointments using both the Calendar and Manage Appointments tabs.',
        readTime: '6 min read',
        slug: 'cancel-appointment'
    },
    {
        title: 'Appointment requests',
        description: 'Comprehensive guide to confirming and cancelling appointments from the Home, Calendar, and Manage Appointments tabs.',
        readTime: '15 min read',
        slug: 'appointment-control'
    }
];

const navigateToArticle = (slug) => {
    switch (slug) {
        case 'create-appointment':
            router.push('/help/managing-appointments/create-appointment');
            break;
        case 'update-appointment':
            router.push('/help/managing-appointments/update-appointment');
            break;
        case 'cancel-appointment':
            router.push('/help/managing-appointments/cancel-appointment');
            break;
        case 'appointment-control':
            router.push('/help/managing-appointments/appointment-control');
            break;

        default:
            console.log(`Route not implemented for: ${slug}`);
    }
};
</script>

<style scoped>
#help-detail-section {
    padding: 70px 0;
    width: 100%;
}

.back-link-container {
    margin-bottom: 30px;
}

.back-link {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.8;
    line-height: 1.5;
}

.back-link:hover {
    text-decoration: underline;
}

.title {
    margin-bottom: 60px;
}

.help-content {
    width: 100%;
}

.main-guide-section {
    margin-bottom: 60px;
}

.section-description {
    color: var(--secondary-color);
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0.8;
    line-height: 1.6;
}

.articles-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    width: 100%;
    align-items: start;
}

.article-card-wrapper {
    cursor: pointer;
    transition: transform 0.2s ease;
    height: fit-content;
}

.article-card-wrapper:hover {
    transform: translateY(-2px);
}

.article-card {
    background: var(--gray);
    border: 2px solid var(--secondary-color);
    border-radius: 20px;
    padding: 30px;
    position: relative;
    min-height: 200px;
    display: flex;
    flex-direction: column;
}

.article-card::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    bottom: -8px;
    background-color: var(--secondary-color);
    border-radius: 20px;
    z-index: -1;
}

.article-card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.article-card-title {
    color: var(--secondary-color);
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 16px 0;
    line-height: 1.3;
}

.article-card-description {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 20px 0;
    opacity: 0.8;
    flex: 1;
}

.article-card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.read-time {
    color: var(--secondary-color);
    font-size: 14px;
    opacity: 0.6;
}

.read-more {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 600;
}

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #help-detail-section {
        padding: 50px 0;
    }
    
    .title {
        margin-bottom: 40px;
    }
    
    .articles-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .article-card {
        padding: 25px;
    }
    
    .article-card-title {
        font-size: 18px;
    }
}

@media screen and (max-width: 620px) {
    #help-detail-section {
        padding: 40px 0;
    }
    
    .article-card {
        padding: 20px;
    }
    
    .article-card-title {
        font-size: 16px;
    }
    
    .article-card-description {
        font-size: 14px;
    }
}
</style>
