<template>
    <section id="action-contact">
        <SectionTitle :title="'Healthcare Software'"
            :desc="'Simplified Patient Booking and Management System for Doctors'"
            class="title" />
        <HealthcareShowcase>
            <HealthcareCard :id="'left'"
                :title="'Seamless Booking Experience for Patients'"
                :text="'Improve sales and patient experience with online 24/7 bookings, and after-hour appointment bookings. Kaizen AMS allows patients to view available slots, select a preferred doctor, book the slot, and provide information prior to the consultation, saving their time and energy.'"
                :image="'/assets/booking.svg'" />
            <HealthcareCard :id="'center'"
                :title="'Efficient Patient Management for Doctors'"
                :text="'Streamline your practice with Kaizen AMS, our intuitive patient booking and management system. Reduce admin by easily managing appointments and gaining analytical insights into your practice.'"
                :image="'/assets/solutions-dashboard.svg'" />
            <HealthcareCard :id="'right'"
                :title="'Automated Appointment Reminders and Easy Patient Communication'"
                :text="'Stay connected with your patients through automated appointment reminders and seamless communication. Enhance patient experience and reduce no-shows.'"
                :image="'/assets/sms.svg'" />
        </HealthcareShowcase>
    </section>
</template>

<script setup>
import HealthcareShowcase from '@/components/Articles/HealthcareShowcase/HealthcareShowcase.vue';
import HealthcareCard from '@/components/Cards/HealthcareCard.vue';
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue';
</script>

<style scoped>
.title {
    margin-bottom: 70px;
}
</style>