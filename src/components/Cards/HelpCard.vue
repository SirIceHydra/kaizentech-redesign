<template>
    <InfoCardTemplate class="help-card-template --_card-template">
        <div class="help-card-content">
            <div class="card-header">
                <h3 class="card-title">{{ title }}</h3>
            </div>
            <div class="card-body">
                <p class="card-description">{{ description }}</p>
                <div class="card-action" v-if="actionText">
                    <span class="action-text">{{ actionText }}</span>
                </div>
            </div>
        </div>
    </InfoCardTemplate>
</template>

<script setup>
import InfoCardTemplate from './InfoCardTemplate.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    actionText: {
        type: String,
        default: 'View articles →'
    }
});


</script>

<style>
.--_card-template {
    width: 100%;
    height: auto !important;
    min-height: 220px !important;
}

/* Override InfoCardTemplate fixed height constraints */
.--_card-template .wrapper {
    height: 100% !important;
    min-height: 220px !important;
}

.--_card-template .shadow {
    height: 100% !important;
    min-height: 220px !important;
}

.help-card-content {
    width: 100%;
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-header {
    margin-bottom: 16px;
}

.card-title {
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    line-height: 1.3;
}

.card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-description {
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    opacity: 0.8;
    flex: 1;
}

.card-action {
    margin-top: auto;
    padding-top: 16px;
    flex-shrink: 0;
}

.action-text {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
}

/* Hover effects are handled by InfoCardTemplate - Updated */

/* Mobile Responsive */
@media screen and (max-width: 920px) {
    .help-card-content {
        padding: 30px;
    }
    
    .card-title {
        font-size: 20px;
    }
    
    .card-description {
        font-size: 14px;
    }
}

@media screen and (max-width: 620px) {
    .help-card-content {
        padding: 25px;
    }
    
    .card-title {
        font-size: 18px;
    }
    
    .card-description {
        font-size: 14px;
    }
}
</style>
