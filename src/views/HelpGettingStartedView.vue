<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help" class="back-link">← Back to Help Center</router-link>
            </div>
            
            <SectionTitle 
                :title="'Getting Started with Kaizen'"
                :desc="'Welcome to Kaizen! Start here to set up your account and begin managing your practice effectively.'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <h2 class="section-title">Quick Start Guide - How to start accepting appointments</h2>
                    <p class="section-description">
                        Complete step-by-step guide to set up your profile, working hours, procedures, and start accepting patient bookings.
                    </p>
                    
                    <div class="guide-iframe-container">
                        <div class="tutorial-intro">
                            <h3>Interactive Tutorial</h3>
                            <p>Follow this comprehensive guide to get your Kaizen system ready for patient bookings. This tutorial will walk you through every step from setting up your profile to accepting your first appointment.</p>
                        </div>
                        
                        <!-- Tango iframe embedded -->
                        <div class="iframe-wrapper">
                            <iframe 
                                src="https://app.tango.us/app/embed/6bbf2bfd-5650-4aca-8b5e-94333523ca71" 
                                title="How to start accepting appointments"
                                style="width: 100%; height: 800px; border: 0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
                                sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation"
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

                <!-- Additional Guides Section -->
                <div class="additional-guides-section">
                    <h2 class="section-title">Additional Guides</h2>
                    <p class="section-description">
                        Explore these guides to learn more about specific features and workflows.
                    </p>
                    
                    <div class="guides-grid">
                        <QnACard 
                            title="Familiarize yourself with the Kaizen Dashboard"
                            :msg="'Comprehensive guide to navigating all dashboard tabs and features including Home, Calendar, and Settings. Learn where to find everything you need to manage your practice effectively.'"
                        />
                        
                        <QnACard 
                            title="Dashboard Overview Tutorial"
                            :msg="'Interactive walkthrough of the main dashboard features and navigation. This tutorial shows you how to access different sections and understand the layout of your Kaizen system.'"
                        />
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="quick-stats">
                    <div class="stat-item">
                        <span class="stat-number">2</span>
                        <span class="stat-label">Articles</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">~25 min</span>
                        <span class="stat-label">Total read time</span>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import QnACard from '@/components/Cards/QnACard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
</script>

<style scoped>
#help-detail-section {
    padding: 70px 50px;
    max-width: 1200px;
    margin: 0 auto;
}

.back-link-container {
    margin-bottom: 30px;
}

.back-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
}

.back-link:hover {
    text-decoration: underline;
}

.title {
    margin-bottom: 60px;
}

.help-content {
    max-width: 1000px;
    margin: 0 auto;
}

.main-guide-section, .additional-guides-section {
    margin-bottom: 60px;
}

.section-title {
    color: var(--secondary-color);
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 12px;
}

.section-description {
    color: var(--secondary-color);
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0.8;
    line-height: 1.6;
}

.guide-iframe-container {
    background: var(--gray);
    border-radius: 45px;
    border: 2px solid var(--secondary-color);
    padding: 40px;
    margin-bottom: 40px;
    position: relative;
}

.guide-iframe-container::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    bottom: -8px;
    background-color: var(--secondary-color);
    border-radius: 45px;
    z-index: -1;
}

.tutorial-intro {
    margin-bottom: 30px;
}

.tutorial-intro h3 {
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
}

.tutorial-intro p {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    opacity: 0.9;
}

.iframe-wrapper {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.guides-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.quick-stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 2px solid var(--secondary-color);
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    color: var(--primary-color);
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 8px;
}

.stat-label {
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: 600;
}

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #help-detail-section {
        padding: 50px 30px;
    }
    
    .title {
        margin-bottom: 40px;
    }
    
    .guide-iframe-container {
        padding: 30px 20px;
    }
    
    .section-title {
        font-size: 24px;
        text-align: center;
    }
    
    .section-description {
        text-align: center;
    }
    
    .quick-stats {
        gap: 40px;
    }
    
    .stat-number {
        font-size: 28px;
    }
}

@media screen and (max-width: 620px) {
    #help-detail-section {
        padding: 40px 20px;
    }
    
    .guide-iframe-container {
        padding: 20px 15px;
    }
    
    .iframe-wrapper iframe {
        height: 600px !important;
    }
    
    .guides-grid {
        gap: 15px;
    }
    
    .quick-stats {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
}
</style>
