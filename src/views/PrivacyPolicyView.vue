<template>
    <MainLayout>
        <section id="privacy-policy-section">
            <SectionTitle 
                :title="'Privacy Policy'"
                :desc="'How we collect and process data for our practice management platform'"
                class="title" 
            />
            
            <div class="policy-content">
                <p class="effective-date">Effective Date: 15/10/2024</p>

                <p class="paragraph">
                    At <strong>Kaizen Technology Pty (Ltd)</strong> ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services, including our websites, applications, and other services.
                </p>

                <h2 class="subheading">Information We Collect</h2>
                <p class="paragraph">
                    We collect personal information that you provide to us directly through user input, such as your name, email, phone number, and other relevant data. We also collect analytical data to improve our services and enhance customer support.
                </p>

                <h2 class="subheading">How We Use Your Information</h2>
                <p class="paragraph">
                    The personal information we collect is used for:
                </p>
                <ul class="list">
                    <li>Providing customer support and addressing your inquiries.</li>
                    <li>Improving our products and services based on user input and analytics.</li>
                    <li>Facilitating sales and operational processes to deliver the best solutions for you.</li>
                </ul>

                <h2 class="subheading">Data Sharing</h2>
                <p class="paragraph">
                    We do not share your personal information outside of <strong>Kaizen Technology Pty (Ltd)</strong>. Your data is used solely for the purposes mentioned above within our company.
                </p>

                <h2 class="subheading">User Rights</h2>
                <p class="paragraph">
                    You have the right to access, correct, or delete your personal data. You may also withdraw your consent to data collection and usage at any time by contacting us at <a href="mailto:info@kaizentech.co.za">info@kaizentech.co.za</a>.
                </p>

                <h2 class="subheading">Data Security</h2>
                <p class="paragraph">
                    We take your data security seriously. All personal data is encrypted to ensure that it is protected from unauthorized access. We utilize secure servers and advanced security measures to safeguard your information.
                </p>

                <h2 class="subheading">Third-Party Services</h2>
                <p class="paragraph">
                    We integrate with third-party services like <strong>PayFast</strong>, <strong>Vonage</strong>, and <strong>Google</strong> to enhance our platform. These services have their own privacy policies that you should review, as we are not responsible for their data handling practices.
                </p>

                <h2 class="subheading">Children's Privacy</h2>
                <p class="paragraph">
                    Our services are not intended for children under 13 years of age, and we do not knowingly collect personal data from children.
                </p>

                <h2 class="subheading">Changes to this Privacy Policy</h2>
                <p class="paragraph">
                    We may update this policy from time to time. Any changes will be communicated to you via email. Please review the policy periodically to stay informed about how we protect your information.
                </p>

                <h2 class="subheading">Contact Us</h2>
                <p class="paragraph">
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@kaizentech.co.za">info@kaizentech.co.za</a> or by mail at <strong>57 Sunnyside Road, Crawford, Cape Town, 7780</strong>.
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
#privacy-policy-section {
    padding: 70px 0;
    width: 100%;
}

.title {
    margin-bottom: 60px;
}

.policy-content {
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

.list {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin: 20px 0 25px 30px;
}

.list li {
    margin-bottom: 10px;
}

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #privacy-policy-section {
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
    #privacy-policy-section {
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
