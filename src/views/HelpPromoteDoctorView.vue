<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/administration" class="back-link">← Back to Administration</router-link>
            </div>
            
            <SectionTitle 
                :title="'Promote a doctor'"
                :desc="'Learn how to promote doctors to administrative roles and manage practice permissions'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Only administrators can promote doctors to admin roles. This guide will walk you through the process of promoting doctors to administrative positions in your practice.
                    </p>
                    
                    <!-- Promoting a Doctor Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Promoting a Doctor to Administrative Role</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Doctors Settings" tab from the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c503145f-b093-4dea-ab5e-9e909bf28acc/steps/3cb34f6b-f67e-4605-b7c9-73a31b430032/dbf88f02-8d9e-4a9b-a518-8aa0b497295c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=3&mark-y=250&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTEmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click the Doctors Settings tab from the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">This is your list of doctors</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c503145f-b093-4dea-ab5e-9e909bf28acc/steps/fee42e3a-afa8-4050-846f-91bfca3e76b5/9da70cf7-7366-467c-939e-4879a4eff90e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                    alt="This is your list of doctors"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click on the "promote" icon next to any existing doctor</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c503145f-b093-4dea-ab5e-9e909bf28acc/steps/fee42e3a-afa8-4050-846f-91bfca3e76b5/f151a8ce-61e3-49a9-bfac-2a26a48a7fdf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5057&fp-y=0.5048&fp-z=1.0113&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=954&mark-y=477&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNiZoPTIzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="Click on the promote icon next to any existing doctor"
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
                                    src="https://images.tango.us/workflows/c503145f-b093-4dea-ab5e-9e909bf28acc/steps/d5b2b106-bc3f-4552-a446-50ae52aa75f4/cb86e01c-90f7-4474-8df8-964294787dd5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4967&fp-y=0.5728&fp-z=2.7452&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=218&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTImaD05OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
                                    alt="Click on Confirm"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">Doctor is now an admin and can access admin features</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/c503145f-b093-4dea-ab5e-9e909bf28acc/steps/ec70f324-7bf5-4a3c-8da0-3192a1a567e9/52ba972b-b660-437d-a3c9-b117c5bea59d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5719&fp-y=0.4298&fp-z=1.1959&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=14&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTcxJmg9NjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Doctor is now an admin and can access admin features"
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
