<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/administration" class="back-link">← Back to Administration</router-link>
            </div>
            
            <SectionTitle 
                :title="'Transfer practice ownership'"
                :desc="'Comprehensive guide to transferring practice ownership and administrative control to another user'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Only administrators can transfer practice ownership. This guide will walk you through the process of transferring ownership to another admin in your practice.
                    </p>
                    
                    <!-- Transferring Ownership Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Transferring Practice Ownership to Another Admin</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Doctors Settings" tab from the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c6b7e22c-615a-48a0-9fee-0522c80e7a86/steps/5987701f-5724-4554-aa6e-d0348e83d839/124ba1dd-82bb-4064-9ec1-c65a87c0f4e1.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1461&fp-y=0.3749&fp-z=3.1402&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=10&mark-y=285&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01OTQmaD0xMzAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Click the Doctors Settings tab from the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">Here are all your doctors and admins</h3>
                            </div>
                            <div class="step-description">
                                <p>Only admins can obtain ownership of the practice, to transfer ownership to a doctor, please see how to <router-link to="/help/administration/promote-doctor" class="inline-link">promote a doctor to admin</router-link> first</p>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c6b7e22c-615a-48a0-9fee-0522c80e7a86/steps/4a048b36-254b-4e7e-879a-7932d7a85fb5/eba9dfc9-4dfe-4bf5-a956-e8e9a926ff5f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                    alt="Here are all your doctors and admins"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click on the "Transfer Ownership" icon for the admin you wish to transfer to</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c6b7e22c-615a-48a0-9fee-0522c80e7a86/steps/cbb4a8d3-e05d-40cd-a872-ac00aed53d2a/6b4dcc45-7adc-4501-a3ef-776c403f8766.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7989&fp-y=0.4304&fp-z=3.0100&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=568&mark-y=325&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NSZoPTcwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="Click on the Transfer Ownership icon for the admin you wish to transfer to"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Click on "Confirm"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c6b7e22c-615a-48a0-9fee-0522c80e7a86/steps/f1900086-9822-4b0f-bc76-04e443fe5cc5/881f3dfb-52a0-4091-9285-00bd56142200.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4962&fp-y=0.5932&fp-z=2.7452&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=220&mark-y=307&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTImaD05OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Confirm"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">You will be logged out after ownership transfer, please log back in</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c6b7e22c-615a-48a0-9fee-0522c80e7a86/steps/bb95d89e-d39b-437d-abc5-e0f29196f126/5fadf5a1-b5b0-4843-ad8c-ebed7646da3f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                    alt="You will be logged out after ownership transfer, please log back in"
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

.step-description {
    margin-bottom: 20px;
}

.step-description p {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

.inline-link {
    color: var(--primary-color);
    text-decoration: underline;
}

.inline-link:hover {
    text-decoration: none;
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
}
</style>
