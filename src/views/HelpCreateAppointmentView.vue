<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/managing-appointments" class="back-link">← Back to Managing Appointments</router-link>
            </div>
            
            <SectionTitle 
                :title="'Create an appointment'"
                :desc="'Complete guide to manually creating appointments from the Home, Manage Appointments, and Calendar tabs'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Creating an appointment can be done in multiple pages, this guide will show doctors how to manually create appointments.
                    </p>
                    
                    <!-- Home Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Creating appointment on the "Home" tab</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click on + Add Appointment</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/13e4baf8-e92d-4919-b89a-f2521007464e/68abbf2d-64dc-4b58-872a-74e4142217de.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2505&fp-y=0.3717&fp-z=2.5249&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=454&mark-y=318&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yOTEmaD04NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click on + Add Appointment" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">Enter the patient details, choose a procedure, along with a date and time</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/60bb9490-2eb5-47fd-954a-39e66b50f552/d7967587-d12d-4f81-985b-74978acaf6af.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                alt="Enter the patient details, choose a procedure, along with a date and time" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click on "Confirm Appointment"</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/f4f46b75-c921-46ca-a3cc-0d406e1d33bc/21afa229-412b-47d4-ae36-5318e9a695f4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4637&fp-y=0.9148&fp-z=2.4193&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=435&mark-y=534&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMjkmaD03NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click on 'Confirm Appointment'" 
                                class="step-image"
                            />
                        </div>
                    </div>

                    <!-- Manage Appointments Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Creating appointment on the "Manage Appointments" tab</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Click the "Manage Appointments" tab</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/9e76cb28-e75a-49ae-9c06-c47027251331/24e5b785-8a3d-4f6e-845a-2e7882133d8d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0826&fp-y=0.2773&fp-z=2.1756&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=315&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTcmaD05MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click the 'Manage Appointments' tab" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">This is the Manage Appointments table</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/96b2f7e5-96ae-4e33-93fb-582606712729/49c6007e-c958-49c8-bcdd-aeea87cc9806.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                alt="This is the Manage Appointments table" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">6</span>
                                <h3 class="step-title">Click on "Create Appointment" in the top right corner</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/40aaf22a-2ce4-4198-9f27-2c32b6cfcd4d/934e0db8-490d-4b67-93e9-84510f8fb8d3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=953&mark-y=134&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjcmaD0zMiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click on 'Create Appointment' in the top right corner" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">7</span>
                                <h3 class="step-title">Enter the patient details, choose a procedure, along with a date and time</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/cf4d4b44-b216-44a1-9996-3ee22446987b/cd453645-420e-4cca-8266-31178ed72df8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4938&fp-y=0.5270&fp-z=1.1028&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=456&mark-y=16&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yODgmaD02OTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                alt="Enter the patient details, choose a procedure, along with a date and time" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">8</span>
                                <h3 class="step-title">Click on "Confirm Appointment"</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/2e47c561-6564-41df-9fe2-2c18090d8fe5/ad02eda5-51a9-4f08-b4a6-c907feb952c6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4637&fp-y=0.9379&fp-z=2.4193&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=435&mark-y=574&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMjkmaD03NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click on 'Confirm Appointment'" 
                                class="step-image"
                            />
                        </div>
                    </div>

                    <!-- Calendar Tab Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Creating an appointment on the "Calendar" tab</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">9</span>
                                <h3 class="step-title">Click the "Calendar" tab</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/de7aa88d-1ac9-4309-8fe8-bb032e984506/c70b92d0-66d8-4aa2-a927-f9329a43c19c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0822&fp-y=0.2290&fp-z=2.1789&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTYmaD05MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click the 'Calendar' tab" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">10</span>
                                <h3 class="step-title">This is your appointments calendar</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/37965346-ceff-4082-857f-01a5666bc546/4d07510a-7eb3-44d3-b947-0a878f313ce6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5746&fp-y=0.5282&fp-z=1.0650&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=126&mark-y=2&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDYxJmg9NzE3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                alt="This is your appointments calendar" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">11</span>
                                <h3 class="step-title">Click on "Create Appointment" in the control module in the top right corner</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/cb7e928e-1407-48e5-913c-eea20db53a28/f8b66bba-1172-4dbe-abd1-769f54c2fb1c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=907&mark-y=95&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMzQmaD0yNyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click on 'Create Appointment' in the control module in the top right corner" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">12</span>
                                <h3 class="step-title">Enter the patient details, choose a procedure, along with a date and time</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/58eed977-37f6-4fb5-ab63-f6d1cf4e30b4/e8516653-caa3-4e0e-bd13-36770c38b45d.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                alt="Enter the patient details, choose a procedure, along with a date and time" 
                                class="step-image"
                            />
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">13</span>
                                <h3 class="step-title">Click on Confirm Appointment</h3>
                            </div>
                            <img 
                                src="https://images.tango.us/workflows/beee0804-da6a-4798-a209-5086af6035ab/steps/dbc1741a-a09e-4993-82a9-807f20ba6be9/724e6047-e4f3-4560-9e56-847f28cd6cca.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4637&fp-y=0.9148&fp-z=2.4193&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=435&mark-y=534&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMjkmaD03NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                alt="Click on Confirm Appointment" 
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
