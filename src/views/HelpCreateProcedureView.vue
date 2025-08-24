<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/administration" class="back-link">← Back to Administration</router-link>
            </div>
            
            <SectionTitle 
                :title="'Create a procedure'"
                :desc="'Complete guide to creating procedures with pricing, duration, and availability settings'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Procedures need to be created to show your patients what you offer. This guide will walk you through the process of adding new procedures to your practice.
                    </p>
                    
                    <!-- Creating a New Procedure Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Creating a New Procedure for Your Practice</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Procedures" tab in the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c8d4732e-a6ce-4657-ac7f-53d6b4127212/steps/f141932f-477c-4b7f-8c68-85121f230144/110e2100-3b93-4c56-8a97-ec737c39fdd7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1437&fp-y=0.4829&fp-z=3.1402&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=10&mark-y=260&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01OTEmaD0xMzAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Click the Procedures tab in the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">Click on "Create Procedure"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c8d4732e-a6ce-4657-ac7f-53d6b4127212/steps/da55673b-8d2c-4ba2-8277-cca3f7c291d2/7940b38f-1dff-4403-8394-983441438024.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8929&fp-y=0.1738&fp-z=2.9093&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=570&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MTEmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Create Procedure"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Give your procedure a name, description, assign it to a doctor, set the procedure duration, and give it a price.</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c8d4732e-a6ce-4657-ac7f-53d6b4127212/steps/b46708ef-395d-4d13-a129-de73db9750a7/70ecd022-25b1-46d1-98d6-07b0f4a158ca.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=533&mark-y=542&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MiZoPTMyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="Give your procedure a name, description, assign it to a doctor, set the procedure duration, and give it a price."
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Click "Create"</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c8d4732e-a6ce-4657-ac7f-53d6b4127212/steps/b46708ef-395d-4d13-a129-de73db9750a7/70ecd022-25b1-46d1-98d6-07b0f4a158ca.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4703&fp-y=0.7733&fp-z=2.8423&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=512&mark-y=316&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzcmaD05MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click Create"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">Your procedure has now been created</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c8d4732e-a6ce-4657-ac7f-53d6b4127212/steps/57751142-7756-4b80-ac2b-7c8175caea46/41e2fead-a63b-4674-b85c-bcc61a65517e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=215&mark-y=252&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05NzAmaD00NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Your procedure has now been created"
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
