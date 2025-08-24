<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/managing-appointments" class="back-link">← Back to Managing Appointments</router-link>
            </div>
            
            <SectionTitle 
                :title="'Cancel an appointment'"
                :desc="'Learn how to cancel appointments using both the Calendar and Manage Appointments tabs'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Cancelling an appointment can be done from the calendar and the manage appointments tabs. This guide will show you how to cancel appointments effectively.
                    </p>
                    
                    <!-- Calendar Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Cancelling an appointment using the Calendar</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Calendar" tab in the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/45fc14e2-7388-4c32-9156-fb625fcb0fdb/steps/3b057f56-bb7f-498c-951c-ca3be0bf600e/c2342235-9ba1-46f1-be7e-ca7e560ac749.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1251&fp-y=0.2073&fp-z=4.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=13&mark-y=337&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz04MDMmaD0xNjMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Click the Calendar tab in the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">This is your appointments calendar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/45fc14e2-7388-4c32-9156-fb625fcb0fdb/steps/c3240b59-447a-4564-8101-b92173a92af3/b9f658de-e414-4ffc-b705-48a905787c2e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                    alt="This is your appointments calendar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click on an appointment slot you wish to cancel</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/45fc14e2-7388-4c32-9156-fb625fcb0fdb/steps/98d553db-133d-4f94-8e29-bad3c23065a7/89aa6a2b-3b2f-4b30-9475-d42c3042e4e6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2816&fp-y=0.8711&fp-z=2.4731&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=445&mark-y=384&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTAmaD0yMTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Click on an appointment slot you wish to cancel"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Click on "Cancel Appointment" in the control module in the top right corner</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/45fc14e2-7388-4c32-9156-fb625fcb0fdb/steps/e01fa0ba-556b-4de6-a5d7-eb034b0b30d2/066e40c7-fc67-4dbf-a1ce-57771219343d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9140&fp-y=0.1887&fp-z=2.9689&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=698&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zOTEmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Cancel Appointment in the control module in the top right corner"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">Click on "Confirm"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/45fc14e2-7388-4c32-9156-fb625fcb0fdb/steps/74822eb5-1a6e-4c92-91d8-b1813f0aa688/d01020cf-168c-4e91-9036-c60a91a6dc53.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4894&fp-y=0.5755&fp-z=2.7768&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=374&mark-y=309&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMDAmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Confirm"
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
