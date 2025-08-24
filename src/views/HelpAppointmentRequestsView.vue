<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/managing-appointments" class="back-link">← Back to Managing Appointments</router-link>
            </div>
            
            <SectionTitle 
                :title="'Appointment requests'"
                :desc="'Comprehensive guide to confirming and cancelling appointments from the Home, Calendar, and Manage Appointments tabs'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Appointments can be confirmed and cancelled from the home, calendar, and manage appointments tabs. This guide will show you how to manage appointment requests effectively.
                    </p>
                    
                    <!-- Home Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Using the Home tab</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Home" tab from the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/208a14fa-63ec-46f7-ad96-18316bc9bdf3/7cacfc51-a319-4d01-88e8-1f197e0c23c9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0864&fp-y=0.1801&fp-z=2.1402&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=234&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD04NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click the Home tab from the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">You can view your appointment requests at a quick glance from here</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/d32523c7-0b96-4120-9b13-f04b2a5a1b42/1150e99e-d3d1-49d9-9481-f8097f16051d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4330&fp-y=0.6772&fp-z=1.2549&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=226&mark-y=243&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03NDgmaD0zNzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="You can view your appointment requests at a quick glance from here"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click "Confirm" or "Reject"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/7815e663-e6fb-4f6c-bfb1-7b9ad382e4e4/f61d796e-3405-4070-ab23-8002a12dccb4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3449&fp-y=0.6243&fp-z=2.8146&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=507&mark-y=315&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODcmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click Confirm or Reject"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Manage Appointments Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Using the Manage Appointments tab</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Click the "Manage Appointments" tab from the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/79f3c34b-6460-4017-b5c5-95d109ad8968/4121b28e-9534-4233-9ea5-af9e46dfa4c9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0864&fp-y=0.2756&fp-z=2.1402&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=317&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD04NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click the Manage Appointments tab from the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">Here you can view your appointment requests in greater detail</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/7dcf4838-f8d6-47f5-8a16-cec6bb166b87/3a26d7ab-2f42-48b2-838d-b287badca6de.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                    alt="Here you can view your appointment requests in greater detail"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">6</span>
                                <h3 class="step-title">Click on "Confirm" to confirm an appointment</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/fba616a2-8190-4f3d-9a6d-bafe7bacbde3/978cfc9a-bbd2-4a62-82aa-7c731f2c562c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2073&fp-y=0.4879&fp-z=2.8256&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=509&mark-y=316&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODMmaD04OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Confirm to confirm an appointment"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">7</span>
                                <h3 class="step-title">Appointment requests can be bulk confirmed by checking the desired appointments.</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/e710843e-3db7-4f2d-be83-ed141f58c7bd/a6feb31b-5b6c-4ffc-91ad-9d0d5e5aaf0d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2509&fp-y=0.5662&fp-z=3.0958&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=574&mark-y=335&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MSZoPTUxJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="Appointment requests can be bulk confirmed by checking the desired appointments."
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">8</span>
                                <h3 class="step-title">Then click on "Confirm Multiple Appointments"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/bd7eb42b-63eb-4420-b1da-df8f210400f9/6f0f969f-54db-48db-a577-f7f30bebcb12.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5750&fp-y=0.2664&fp-z=2.2190&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=399&mark-y=323&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MDEmaD03NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Then click on Confirm Multiple Appointments"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Cancelling/Rejecting Appointments Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Cancelling/Rejecting appointments using the Manage Appointments tab</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">9</span>
                                <h3 class="step-title">Click the "Cancel" icon for the appointment you wish to cancel</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/80576620-a3b8-481f-b3cb-a6a9a3e28859/f8fd3a81-8f98-434c-b0ac-fba58120e14e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8772&fp-y=0.4640&fp-z=3.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=915&mark-y=211&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NmgaPTczJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="Click the Cancel icon for the appointment you wish to cancel"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">10</span>
                                <h3 class="step-title">Click on "Confirm"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/76fb1fdb-0b8a-48b0-9c15-69666e7fc375/f5f73776-81d3-4ace-80d1-6a4b614f3480.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4889&fp-y=0.5737&fp-z=2.7768&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=376&mark-y=313&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMDAmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Confirm"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Calendar Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Using the Calendar</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">11</span>
                                <h3 class="step-title">Click the "Calendar" tab from the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/b57efc10-e47f-46e4-949b-270a4c90f4ed/steps/446a6f6d-fb33-4d10-85f3-698f42cf722f/456e1714-7109-4229-a025-6e0cb564d5c2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0864&fp-y=0.2273&fp-z=2.1402&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=307&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD04NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click the Calendar tab from the sidebar"
                                />
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

.tutorial-section {
    margin-bottom: 60px;
}

.section-title {
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    line-height: 1.3;
}

.step {
    margin-bottom: 40px;
    padding: 30px;
    background: var(--gray);
    border-radius: 20px;
    border: 2px solid var(--secondary-color);
    position: relative;
}

.step::before {
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

.step-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.step-number {
    background: var(--primary-color);
    color: var(--white);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    margin-right: 15px;
    flex-shrink: 0;
}

.step-title {
    color: var(--secondary-color);
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
}

.step-image {
    text-align: center;
}

.step-image img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    border: 1px solid #ddd;
}



/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #help-detail-section {
        padding: 50px 0;
    }
    
    .title {
        margin-bottom: 40px;
    }
    
    .tutorial-section {
        margin-bottom: 40px;
    }
    
    .section-title {
        font-size: 20px;
    }
    
    .step-title {
        font-size: 16px;
    }
    
    .step-number {
        width: 25px;
        height: 25px;
        font-size: 12px;
        margin-right: 12px;
    }
    
    .related-articles {
        padding: 20px;
    }
}

@media screen and (max-width: 620px) {
    #help-detail-section {
        padding: 40px 0;
    }
    
    .section-title {
        font-size: 18px;
    }
    
    .step-title {
        font-size: 15px;
    }
    
    .step-number {
        width: 22px;
        height: 22px;
        font-size: 11px;
        margin-right: 10px;
    }
    
    .related-articles {
        padding: 15px;
    }
    
    .related-title {
        font-size: 18px;
    }
    
    .related-link {
        font-size: 14px;
    }
}
</style>
