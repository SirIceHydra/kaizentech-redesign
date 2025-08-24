<template>
    <MainLayout>
        <section id="terms-of-service-section">
            <SectionTitle 
                :title="'Terms of Service'"
                :desc="'Terms and conditions for Kaizen Tech services'"
                class="title" 
            />
            
            <div class="terms-content">
                <p class="effective-date">Effective Date: 15/10/2024</p>

                <p class="paragraph">
                    Welcome to <strong>Kaizen Technology Pty (Ltd)</strong> ("we", "our", or "us"). By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                </p>

                <h2 class="subheading">1. Services Provided</h2>
                <p class="paragraph">
                    <strong>Kaizen Technology</strong> specializes in crafting custom websites and scalable web applications for the healthcare industry, including Clinical Patient and Doctor Management Software. Our services are designed to meet the unique needs of each client and include ongoing support.
                </p>

                <h2 class="subheading">2. User Responsibilities</h2>
                <p class="paragraph">
                    Users agree to provide accurate information when using our services. Users are responsible for maintaining the confidentiality of their account credentials and ensuring that all activities under their account comply with applicable laws.
                </p>

                <h2 class="subheading">3. Service Availability</h2>
                <p class="paragraph">
                    While we strive to provide continuous access to our services, we do not guarantee uninterrupted availability. Scheduled maintenance and unforeseen outages may occur, and we will make efforts to inform users in advance when possible.
                </p>

                <h2 class="subheading">4. Payments and Refunds</h2>
                <p class="paragraph">
                    Payments for our services are handled through third-party providers like PayFast. Refund policies vary depending on the specific service package purchased. For detailed information on refunds, please contact our support team at <a href="mailto:info@kaizentech.co.za">info@kaizentech.co.za</a>.
                </p>

                <h2 class="subheading">5. Intellectual Property</h2>
                <p class="paragraph">
                    All intellectual property, including but not limited to logos, software, and content provided through our services, remains the property of <strong>Kaizen Technology Pty (Ltd)</strong>. Users are not permitted to copy, distribute, or modify any part of our services without our express consent.
                </p>

                <h2 class="subheading">6. Termination of Service</h2>
                <p class="paragraph">
                    Both you and <strong>Kaizen Technology Pty (Ltd)</strong> have the right to terminate your account at any time. We reserve the right to suspend or terminate accounts that violate our terms of service.
                </p>

                <h2 class="subheading">7. Limitations of Liability</h2>
                <p class="paragraph">
                    <strong>Kaizen Technology Pty (Ltd)</strong> will not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                </p>

                <h2 class="subheading">8. Changes to These Terms</h2>
                <p class="paragraph">
                    We reserve the right to update these terms from time to time. Any changes will be communicated to users via email and will be posted on this page. Continued use of our services after the changes are made constitutes acceptance of the updated terms.
                </p>

                <h2 class="subheading">9. Contact Information</h2>
                <p class="paragraph">
                    If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:info@kaizentech.co.za">info@kaizentech.co.za</a> or by mail at <strong>57 Sunnyside Road, Crawford, Cape Town, 7780</strong>.
                </p>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
</script>

<style scoped>
#terms-of-service-section {
    padding: 70px 0;
    width: 100%;
}

.title {
    margin-bottom: 60px;
}

.terms-content {
    max-width: 800px;
    margin: 0 auto;
}

.effective-date {
    color: var(--secondary-color);
    font-size: 16px;
    margin-bottom: 30px;
    opacity: 0.8;
}

.paragraph {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 25px;
}

.paragraph strong {
    color: var(--secondary-color);
    font-weight: 600;
}

.paragraph a {
    color: var(--primary-color);
    text-decoration: underline;
}

.paragraph a:hover {
    color: var(--secondary-color);
}

.subheading {
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 20px 0;
    line-height: 1.3;
}

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #terms-of-service-section {
        padding: 50px 0;
    }
    
    .title {
        margin-bottom: 40px;
    }
    
    .subheading {
        font-size: 20px;
    }
}

@media screen and (max-width: 620px) {
    #terms-of-service-section {
        padding: 40px 0;
    }
    
    .subheading {
        font-size: 18px;
    }
    
    .paragraph {
        font-size: 15px;
    }
}
</style>
