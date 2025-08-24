<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/managing-appointments" class="back-link">← Back to Managing Appointments</router-link>
            </div>
            
            <SectionTitle 
                :title="'Update an appointment'"
                :desc="'Step-by-step guide to update appointments using both the Calendar and Manage Appointments tabs'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Updating an appointment can be done from the calendar and manage appointments tab. This guide will show you how to modify existing appointments.
                    </p>
                    
                    <!-- Calendar Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Using the Calendar tab to update an appointment</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Calendar" tab in the sidebar</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/96a2ad1f-7f88-4a29-951e-4ef41bd5a36d/steps/c568a729-11e4-4bae-9e55-1e3f0dada6ab/b8f41e00-8bb7-478a-a451-e8b7ca87b47a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0826&fp-y=0.2290&fp-z=2.1756&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTcmaD05MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click the Calendar tab in the sidebar" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">This is your appointment calendar</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/96a2ad1f-7f88-4a29-951e-4ef41bd5a36d/steps/87066359-b413-4ad1-8994-e3af9d9f3750/c9b95fc3-ee15-4109-9dba-d28d804cd8ef.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                alt="This is your appointment calendar" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click on an appointment slot</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/96a2ad1f-7f88-4a29-951e-4ef41bd5a36d/steps/9f4bd89e-1798-4e7c-8f8c-bb73a15889d7/64de630c-bebb-4025-af51-24eda41eb2f9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2816&fp-y=0.7595&fp-z=2.4731&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=445&mark-y=254&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTAmaD0yMTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                alt="Click on an appointment slot" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Click "Update Appointment" in the control module</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/96a2ad1f-7f88-4a29-951e-4ef41bd5a36d/steps/2c876580-b44b-4bc7-a869-1d580001cc4b/a2ae7c44-0b39-4fe4-a546-b242da3f950c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9140&fp-y=0.1473&fp-z=2.9689&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=698&mark-y=276&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zOTEmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click Update Appointment in the control module" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">Now you can change the assigned doctor, procedure, status, and date and time of the chosen appointment</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/96a2ad1f-7f88-4a29-951e-4ef41bd5a36d/steps/facf5982-d80c-4f97-a4d2-380417f2f5b8/8c5a9200-1bef-468e-ba44-f43a01da5bf3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5007&fp-y=0.5006&fp-z=1.0768&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=429&mark-y=27&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNDImaD02NjYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                alt="Now you can change the assigned doctor, procedure, status, and date and time of the chosen appointment" 
                                class="step-image"
                            />
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
