<template>
    <section id="faq-section">
        <SectionTitle :title="'FAQ'"
            :desc="'Frequently asked questions about our services'"
            class="title" />
        
        <div class="faq-grid">
            <!-- Website & App Development FAQ -->
            <div class="faq-category">
                <h3 class="category-title">Website & App Development</h3>
                <p class="category-desc">Common questions about our development services.</p>
                <div class="faq-list">
                    <QnACard v-for="(faq, index) in webDevFaqs" :key="'webdev-' + index" 
                        :title="faq.question" :msg="faq.answer" />
                </div>
            </div>

            <!-- Healthcare SaaS FAQ -->
            <div class="faq-category">
                <h3 class="category-title">Kaizen Healthcare SaaS</h3>
                <p class="category-desc">Everything you need to know about our healthcare solutions.</p>
                <div class="faq-list">
                    <QnACard v-for="(faq, index) in healthcareFaqs" :key="'healthcare-' + index" 
                        :title="faq.question" :msg="faq.answer" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import QnACard from '@/components/Cards/QnACard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';

// Healthcare SaaS FAQ Data
const healthcareFaqs = [
    {
        question: 'How do I get started?',
        answer: 'To get started, simply contact our team and we will guide you through the process, OR click on the "Get Started" button on the top right of the page to begin our free trial!'
    },
    {
        question: 'What features are included?',
        answer: 'Our solutions include a patient booking system, appointment reminders, and patient management tools, along with optional add-ons of website design and hosting, and website re-design.'
    },
    {
        question: 'How long does implementation take?',
        answer: 'The AMS booking system is instantaneous and available for use immediately after signing up for the free trial. The implementation time of the website is based on the complexity of the website, but our team will work efficiently to minimize any disruption. We estimate anywhere between 2-4 weeks.'
    },
    {
        question: 'Is support provided?',
        answer: 'Yes, we provide ongoing support to ensure smooth operation and deployment. We also provide technical support and bug fixes after deployment, and support future updates to the system.'
    },
    {
        question: 'Can I contact you for support or help with the system?',
        answer: 'Absolutely! You can contact us via email at info@kaizentech.co.za for any questions or support you may need. You can also find our user guides to help with the software right here on our website.'
    },
    {
        question: 'What does it cost?',
        answer: 'There are different subscription plans available for the booking system, with the most popular being the Premium plan, which is R300 p/m, and includes FREE website design and hosting, as well as a Basic plan, which is R200 p/m, for only the booking system. There is a fixed add-on cost for implementation on an existing website, and/or cloud hosting of the website, however, the cost for a website re-design is variable depending on the complexity.'
    }
];

// Website & App Development FAQ Data
const webDevFaqs = [
    {
        question: 'What technologies do you use?',
        answer: 'We use modern technologies including Vue.js, React, Node.js, Python, and cloud platforms like AWS and Azure. We choose the best technology stack based on your project requirements and scalability needs.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed project timelines during our initial consultation.'
    },
    {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance optimization, bug fixes, and feature enhancements. Our support team ensures your application stays secure and up-to-date.'
    },
    {
        question: 'Can you work with our existing systems?',
        answer: 'Absolutely! We specialize in integrating with existing systems, APIs, and databases. We can modernize legacy systems or build new solutions that seamlessly connect with your current infrastructure.'
    },
    {
        question: 'What is your development process?',
        answer: 'We follow an agile development methodology with regular client feedback loops. Our process includes discovery, design, development, testing, and deployment phases with transparent communication throughout.'
    },
    {
        question: 'Do you offer mobile app development?',
        answer: 'Yes, we develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. We can also create progressive web apps (PWAs) that work seamlessly across all devices.'
    }
];

</script>

<style scoped>
.faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: flex-start;
}

.faq-category {
    display: flex;
    flex-direction: column;
}

.category-title {
    color: var(--secondary-color);
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 12px;
}

.category-desc {
    color: var(--secondary-color);
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0.8;
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    .faq-grid {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    .category-title {
        font-size: 24px;
        text-align: center;
    }
    
    .category-desc {
        text-align: center;
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 620px) {
    .faq-grid {
        gap: 40px;
    }
    
    .category-title {
        font-size: 22px;
    }
    
    .category-desc {
        font-size: 14px;
        margin-bottom: 25px;
    }
    
    .faq-list {
        gap: 15px;
    }
}
</style>