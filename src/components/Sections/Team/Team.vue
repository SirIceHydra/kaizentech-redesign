<template>
    <section id="team">
        <SectionTitle :title="'The Team'"
            :desc="'Meet the skilled and experienced team behind Kaizen Technology\'s innovative software solutions'"
            class="title" />
        <div class="team-info">
            <TeamInfo v-for="profile in teamProfile" :name="profile.name" :title="profile.title" :desc="profile.desc"
                :img="profile.img" :linkedin-url="profile.linkedinUrl" />
        </div>
    </section>
</template>

<script setup>
import TeamInfo from '@/components/Cards/TeamInfo.vue';

import rashaadImage from '/assets/Rashaad.jpg';
import reshadImage from '/assets/Reshad.jpg';
import abrarImage from '/assets/Abrar.png';
import zakImage from '/assets/Zak.png';

const teamProfile = [
    {
        name: 'Rashaad Meyer',
        title: 'CEO',
        desc: 'Rashaad Meyer is a seasoned software engineer with a passion for cutting-edge technology. Graduating with Honors in Mechatronics Engineering and Masters in AI from UCT, he brings a solid academic foundation to Kaizen Technologies. With expertise in software design, Cloud Computing, and DevOps, he excels in developing robust solutions that drive business success and customer satisfaction. His commitment to innovation ensures Kaizen Technologies remains at the forefront of technological advancement.',
        img: rashaadImage,
        linkedinUrl: 'https://www.linkedin.com/in/rashaad-meyer/'
    },
    {
        name: 'Reshad Amin',
        title: 'COO',
        desc: 'Reshad Amin is a dynamic software engineer whose expertise extends beyond traditional coding. Armed with a degree in Mechatronics Engineering from UCT, Reshad combines technical prowess with project management and operations skills. With a rich background in industry-level software engineering, he excels at identifying and implementing efficiencies that enhance performance. His unique perspective in healthcare technology positions Kaizen Technologies as a leader in healthcare tech innovation.',
        img: reshadImage,
        linkedinUrl: 'https://www.linkedin.com/in/reshadamin101/'
    },
    {
        name: 'Abrar Hoque',
        title: 'Software Engineer',
        desc: 'Abrar Hoque is a newly graduated software engineer with an impressive portfolio in website development and UI design. Skilled in frontend development and client management, Abrar brings great potential and multifaceted skills to Kaizen Technologies. His expertise in creating intuitive user interfaces and seamless user experiences makes him a valuable asset in delivering cutting-edge software solutions across healthcare, retail, and enterprise sectors.',
        img: abrarImage,
        linkedinUrl: 'https://www.linkedin.com/in/mohammed-abrar-hoque-5059b4274/'
    },
    {
        name: 'Zak Meyer',
        title: 'Software Engineer',
        desc: 'Zak is an accomplished Data Scientist with a passion for building intelligent systems that solve real-world problems. Holding a Masters Degree in Engineering with Distinction from UCT, his research specialized in advanced computer vision. With experience in the banking industry, with expertise in Cloud Technologies, Zak is an expert in deploying scalable AI solutions. At Kaizen, he leads our technical vision, driving innovation through state-of-the-art AI and machine learning.',
        img: zakImage,
        linkedinUrl: 'https://www.linkedin.com/in/zak-meyer/'
    }
];
</script>

<style scoped>
.action {
    display: flex;
    justify-content: right;
}

.team-info {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
}

/* RESPONSIVE */
@media screen and (max-width: 420px) {
    .action {
        display: block;
    }



    .btn {
        width: 100%;
    }
}
</style>