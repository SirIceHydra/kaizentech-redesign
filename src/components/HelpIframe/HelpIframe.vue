<template>
    <div class="help-iframe-container">
        <iframe
            ref="iframeRef"
            :src="src"
            :title="title"
            :style="{ 
                width: '100%', 
                height: height + 'px', 
                border: '0', 
                background: '#fff', 
                display: 'block',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }"
            :sandbox="sandbox"
            :loading="loading"
            @load="handleLoad"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: 'Help Tutorial'
    },
    minHeight: {
        type: Number,
        default: 1200
    },
    extraHeight: {
        type: Number,
        default: 24
    },
    sandbox: {
        type: String,
        default: 'allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation'
    },
    loading: {
        type: String,
        default: 'lazy'
    }
});

const iframeRef = ref(null);
const height = ref(props.minHeight);

const handleLoad = () => {
    try {
        // Set a reasonable height for the iframe
        height.value = Math.max(props.minHeight, 1600);
    } catch (error) {
        height.value = props.minHeight;
    }
};

onMounted(() => {
    handleLoad();
});
</script>

<style scoped>
.help-iframe-container {
    margin: 20px 0;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e1e5e9;
}
</style>
