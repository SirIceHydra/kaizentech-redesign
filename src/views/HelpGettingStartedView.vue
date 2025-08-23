<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help" class="back-link">← Back to Help Center</router-link>
            </div>
            
            <SectionTitle 
                :title="'Get Started'"
                :desc="'How to start accepting appointments'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Complete step-by-step guide to set up your profile, working hours, procedures, and start accepting patient bookings. Before patients can book appointments with you, you need to set up your working hours and ensure your profile is active.
                    </p>
                    
                    <!-- Section 1: Profile Setup -->
                    <div class="tutorial-section">
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h4 class="step-title">Click the "Doctors Settings" tab</h4>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/6bbf2bfd-5650-4aca-8b5e-94333523ca71/steps/f8afca5d-9919-4ab1-8e3d-507137009e51/c4d4f357-99c0-40c3-bbac-dbedaae69720.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1398&fp-y=0.3593&fp-z=3.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=3&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01OTYmaD0xMjYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                                    alt="Click the Doctors Settings tab"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h4 class="step-title">Click on the "edit" icon for the doctor</h4>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/6bbf2bfd-5650-4aca-8b5e-94333523ca71/steps/4ab4fca2-1890-4db4-bea8-fede03917dcf/a52bc6ee-37c3-4d7a-a116-567abf23d1cc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=964&mark-y=228&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMiZoPTIzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
                                    alt="Click on the edit icon for the doctor"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h4 class="step-title">Click on the "+" icon to add working hours for the doctor</h4>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/6bbf2bfd-5650-4aca-8b5e-94333523ca71/steps/4ef98bc3-56c8-48fc-b0e2-1b959a9e63c2/20ced291-4d6f-4eca-be15-a884f2247ca4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5709&fp-y=0.5418&fp-z=1.9803&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=976&mark-y=244&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MSZoPTUxJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
                                    alt="Click on the + icon to add working hours for the doctor"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h4 class="step-title">Add your working hour range for each day of the week then press "add"</h4>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/6bbf2bfd-5650-4aca-8b5e-94333523ca71/steps/c0bfc5af-4626-400d-b0e0-f65ad8a08919/5f42aeb1-ef93-43d9-9100-4b9cb2f58073.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5691&fp-y=0.5594&fp-z=1.9702&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=944&mark-y=275&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz04NSZoPTUyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
                                    alt="Add your working hour range for each day of the week then press add"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h4 class="step-title">Click on "Save Changes"</h4>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/6bbf2bfd-5650-4aca-8b5e-94333523ca71/steps/3b022967-0029-4b12-a232-57aae18019e6/fa1ed055-7dd6-460e-8eff-1420b64f66df.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5745&fp-y=0.8240&fp-z=2.5743&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=59&mark-y=467&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzMmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                                    alt="Click on Save Changes"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">6</span>
                                <h4 class="step-title">Ensure that your acceptance status is set to "active"</h4>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/6bbf2bfd-5650-4aca-8b5e-94333523ca71/steps/bab2a762-6fc6-4298-9f17-cd3a0e3db200/008d01e9-a8b0-4cb7-a860-3169852ef5ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9288&fp-y=0.3343&fp-z=2.8996&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=794&mark-y=313&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTcmaD05NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                                    alt="Ensure that your acceptance status is set to active"
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

.main-guide-section, .additional-guides-section {
    margin-bottom: 60px;
}

.section-title {
    color: var(--secondary-color);
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 12px;
}

.section-description {
    color: var(--secondary-color);
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0.8;
    line-height: 1.6;
}

.tutorial-section {
    margin-bottom: 50px;
}

.section-subtitle {
    color: var(--primary-color);
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 16px;
    margin-top: 40px;
}

.section-text {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
    opacity: 0.8;
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
    gap: 16px;
}

.step-number {
    background: var(--primary-color);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    flex-shrink: 0;
}

.step-title {
    color: var(--secondary-color);
    font-size: 18px;
    font-weight: bold;
    margin: 0;
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

.additional-guides {
    width: 100%;
    text-align: center;
}

.note-callout {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 20px;
    margin-top: 30px;
}

.note-callout p {
    margin: 0;
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
}

.tutorial-title {
    color: var(--secondary-color);
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
}

.tutorial-description {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
    opacity: 0.8;
}



/* Mobile Responsive */
@media screen and (max-width: 920px) {
    #help-detail-section {
        padding: 50px 0;
    }
    
    .title {
        margin-bottom: 40px;
    }
    
    .step {
        padding: 20px;
    }
    
    .section-title {
        font-size: 24px;
        text-align: center;
    }
    
    .section-description {
        text-align: center;
    }
    
    .step-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    
    .step-number {
        width: 35px;
        height: 35px;
        font-size: 16px;
    }
    

}

@media screen and (max-width: 620px) {
    #help-detail-section {
        padding: 40px 0;
    }
    
    .step {
        padding: 15px;
    }
    
    .section-subtitle {
        font-size: 20px;
    }
    
    .step-title {
        font-size: 16px;
    }
    

}
</style>
