<template>
    <section id="services">
        <SectionTitle :title="'Services'"
            :desc="'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'"
            class="title" />
        <div class="info">
            <InfoCard 
                :title="'Custom Websites & Branding'" 
                :description="'Eye-catching, conversion-focused websites tailored to your brand—whether in healthcare or retail.'"
                src="/assets/WebDesign.gif" 
            />
            <InfoCard 
                :title="'Booking Systems'" 
                :description="'Efficient backend platforms that manage bookings, profiles, and histories for clinics and businesses.'"
                src="/assets/BookingSystem.gif" 
                :type="2" 
            />
            <InfoCard 
                :title="'Full Stack App Development'" 
                :description="'Web and Mobile apps engineered for your customers—patient access, retail engagement, enterprise workflows.'"
                src="/assets/AppDev.gif" 
                :type="3" 
            />
            <InfoCard 
                :title="'SEO & Digital Marketing'" 
                :description="'Local SEO, content strategy, and analytics to boost traffic and visibility for practices and businesses.'"
                src="/assets/SEO.gif" 
            />
            <InfoCard 
                :title="'Social Media Graphic Design'" 
                :description="'Social content that connects: posts and strategy that speak to your audience.'"
                src="/assets/GraphicDesign.gif" 
                :type="2" 
            />
            <InfoCard 
                :title="'Full-Service Digital Strategy'" 
                :description="'From concept to deployment: we assess needs, define digital roadmaps, and deliver turnkey solutions.'"
                src="/assets/DigitalDesign.gif" 
                :type="3" 
            />
        </div>
    </section>
</template>

<script setup>
import imgService1 from '/img/img-2.png';
import imgService2 from '/img/img-3.png';
import imgService3 from '/img/img-4.png';
import imgService4 from '/img/img-1.png';
import imgService5 from '/img/img-5.png';
import imgService6 from '/img/img-6.png';
</script>

<style setup>
.title {
    margin-bottom: 70px;
}

.info {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
}
</style>