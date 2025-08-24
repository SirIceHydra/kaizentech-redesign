<template>
    <MainLayout>
        <section id="help-detail-section">
            <div class="back-link-container">
                <router-link to="/help/staff-management" class="back-link">← Back to Staff Management</router-link>
            </div>
            
            <SectionTitle 
                :title="'Adding a profile'"
                :desc="'Learn how to create and manage staff profiles with photos and information'"
                class="title" 
            />
            
            <div class="help-content">
                <!-- Main Guide Section -->
                <div class="main-guide-section">
                    <p class="section-description">
                        Creating a comprehensive staff profile helps patients get to know your team better. This guide will walk you through the process of adding profile pictures and information.
                    </p>
                    
                    <!-- Creating Your Doctor Profile Section -->
                    <div class="tutorial-section">
                        <h2 class="section-title">Creating Your Doctor Profile</h2>
                        
                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">1</span>
                                <h3 class="step-title">Click the "Doctors Profile" tab in the sidebar</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/4eb49fe5-5bde-4192-87b7-ecef273e4104/steps/13a5d6c1-93e9-476a-889a-6611a3dc4872/56fb3664-36f5-4089-a18b-a1a28bc88633.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1461&fp-y=0.3811&fp-z=3.1402&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=10&mark-y=381&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02MDImaD0xMzAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Click the Doctors Profile tab in the sidebar"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">2</span>
                                <h3 class="step-title">This is a doctors profile, it is currently empty</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/4eb49fe5-5bde-4192-87b7-ecef273e4104/steps/1f93dccd-8f8e-4738-beb2-9e9318ebd961/5c36d029-b232-4763-a7d5-039fae6736df.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5805&fp-y=0.2883&fp-z=1.2078&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=8&mark-y=171&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTg0Jmg9MTU5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="This is a doctors profile, it is currently empty"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">3</span>
                                <h3 class="step-title">Click the "edit" icon</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/4eb49fe5-5bde-4192-87b7-ecef273e4104/steps/c6fbf369-0f09-4dea-af80-54695abce4e5/226b90f1-3279-4928-8360-51229ba45bad.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9675&fp-y=0.3199&fp-z=2.8899&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1039&mark-y=312&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NiZoPTk2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
                                    alt="Click the edit icon"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">4</span>
                                <h3 class="step-title">Add a profile picture</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/4eb49fe5-5bde-4192-87b7-ecef273e4104/steps/20ad706e-ab07-4377-bae8-827b33ec6650/f08d7bd6-1aa7-4cb8-b9c4-e33db06cb743.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
                                    alt="Add a profile picture"
                                />
                            </div>
                        </div>

                        <div class="step">
                            <div class="step-header">
                                <span class="step-number">5</span>
                                <h3 class="step-title">Add an about section</h3>
                            </div>
                            <div class="step-image">
                                <img 
                                    src="https://images.tango.us/workflows/4eb49fe5-5bde-4192-87b7-ecef273e4104/steps/5c045d87-e02a-4b41-9e68-161b8c2c5021/92dcdae8-6bb6-4920-aee4-baece6f4a189.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5750&fp-y=0.4793&fp-z=1.6651&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=249&mark-y=291&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03MDEmaD0xMzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
                                    alt="Add an about section"
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
