<template>
  <!-- This component doesn't render anything visible -->
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { updateMetaTags, seoConfigs, getFAQSchema, getServiceSchema } from '@/utils/seo.js';

const props = defineProps({
  title: String,
  description: String,
  keywords: String,
  ogTitle: String,
  ogDescription: String,
  ogImage: String,
  twitterTitle: String,
  twitterDescription: String,
  twitterImage: String,
  canonical: String,
  structuredData: Object,
  pageType: {
    type: String,
    default: 'custom'
  }
});

const route = useRoute();

const updateSEO = () => {
  let config = {};

  // Use predefined configs based on page type
  if (props.pageType !== 'custom' && seoConfigs[props.pageType]) {
    config = { ...seoConfigs[props.pageType] };
  }

  // Override with custom props if provided
  if (props.title) config.title = props.title;
  if (props.description) config.description = props.description;
  if (props.keywords) config.keywords = props.keywords;
  if (props.ogTitle) config.ogTitle = props.ogTitle;
  if (props.ogDescription) config.ogDescription = props.ogDescription;
  if (props.ogImage) config.ogImage = props.ogImage;
  if (props.twitterTitle) config.twitterTitle = props.twitterTitle;
  if (props.twitterDescription) config.twitterDescription = props.twitterDescription;
  if (props.twitterImage) config.twitterImage = props.twitterImage;
  if (props.canonical) config.canonical = props.canonical;
  if (props.structuredData) config.structuredData = props.structuredData;

  // Add dynamic canonical URL if not provided
  if (!config.canonical) {
    config.canonical = `https://www.kaizentech.co.za${route.path}`;
  }

  // Update meta tags
  updateMetaTags(config);
};

// Update SEO when component mounts
onMounted(() => {
  updateSEO();
});

// Watch for route changes
watch(() => route.path, () => {
  updateSEO();
});

// Watch for prop changes
watch(() => props, () => {
  updateSEO();
}, { deep: true });
</script>

<style scoped>
/* This component doesn't have any visible styles */
</style>
