// SEO Management Utility for Kaizen Technology
export const updateMetaTags = (metaData) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonical,
    structuredData
  } = metaData;

  // Update title
  if (title) {
    document.title = title;
    updateMetaTag('title', title);
  }

  // Update meta description
  if (description) {
    updateMetaTag('description', description);
  }

  // Update keywords
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  // Update Open Graph tags
  if (ogTitle) {
    updateMetaTag('og:title', ogTitle);
  }
  if (ogDescription) {
    updateMetaTag('og:description', ogDescription);
  }
  if (ogImage) {
    updateMetaTag('og:image', ogImage);
  }

  // Update Twitter Card tags
  if (twitterTitle) {
    updateMetaTag('twitter:title', twitterTitle);
  }
  if (twitterDescription) {
    updateMetaTag('twitter:description', twitterDescription);
  }
  if (twitterImage) {
    updateMetaTag('twitter:image', twitterImage);
  }

  // Update canonical URL
  if (canonical) {
    updateCanonical(canonical);
  }

  // Update structured data
  if (structuredData) {
    updateStructuredData(structuredData);
  }
};

const updateMetaTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.querySelector(`meta[property="${name}"]`);
  }
  
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    // Create new meta tag if it doesn't exist
    meta = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
};

const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
};

const updateStructuredData = (data) => {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => {
    if (script.textContent.includes('"@type"')) {
      script.remove();
    }
  });

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Predefined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: 'Kaizen Technology | Full-Service Digital Agency - Web Development, Apps & Marketing South Africa',
    description: 'Leading digital agency in South Africa. We specialize in custom website development, mobile apps, e-commerce solutions, social media marketing, and healthcare software. From startups to enterprises, we deliver innovative digital solutions that drive growth.',
    keywords: 'digital agency South Africa, web development, mobile app development, e-commerce websites, social media marketing, custom software development, website design, digital marketing, healthcare software, business solutions, startup development, enterprise software, SEO services, branding, digital transformation',
    ogTitle: 'Kaizen Technology | Full-Service Digital Agency - Web Development, Apps & Marketing South Africa',
    ogDescription: 'Leading digital agency in South Africa. We specialize in custom website development, mobile apps, e-commerce solutions, social media marketing, and healthcare software.',
    ogImage: 'https://www.kaizentech.co.za/assets/kaizen-og-image.jpg',
    canonical: 'https://www.kaizentech.co.za/'
  },
  help: {
    title: 'Help Center | Kaizen Technology - Digital Solutions Support',
    description: 'Get help with Kaizen Technology\'s digital solutions including website development, mobile apps, e-commerce platforms, and healthcare software. Find guides, tutorials, and support.',
    keywords: 'Kaizen help, digital agency support, web development help, mobile app support, e-commerce help, healthcare software support, digital solutions tutorials',
    ogTitle: 'Help Center | Kaizen Technology',
    ogDescription: 'Get help with Kaizen Technology\'s comprehensive digital solutions and services.',
    canonical: 'https://www.kaizentech.co.za/help/'
  },
  privacy: {
    title: 'Privacy Policy | Kaizen Technology - Data Protection & Privacy',
    description: 'Read Kaizen Technology\'s Privacy Policy covering data collection, processing, and your rights regarding our digital services and solutions.',
    keywords: 'privacy policy, data protection, digital agency privacy, software privacy, website privacy',
    ogTitle: 'Privacy Policy | Kaizen Technology',
    ogDescription: 'How we collect and process data for our digital solutions and services.',
    canonical: 'https://www.kaizentech.co.za/privacy-policy/'
  },
  terms: {
    title: 'Terms of Service | Kaizen Technology - Service Terms & Conditions',
    description: 'Review the terms and conditions for using Kaizen Technology\'s digital solutions and services.',
    keywords: 'terms of service, service terms, digital agency terms, software terms, website terms',
    ogTitle: 'Terms of Service | Kaizen Technology',
    ogDescription: 'Terms and conditions for Kaizen Technology digital solutions and services.',
    canonical: 'https://www.kaizentech.co.za/terms-of-service/'
  }
};

// FAQ Schema for the FAQ section
export const getFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Service Schema for services section
export const getServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comprehensive Digital Solutions",
    "description": "Full-service digital agency offering website development, mobile apps, e-commerce, social media marketing, and healthcare software solutions",
    "provider": {
      "@type": "Organization",
      "name": "Kaizen Technology"
    },
    "serviceType": "Digital Agency Services",
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Solutions & Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Professional website design and development for businesses across all industries"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Complete online store development and e-commerce platform solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Comprehensive social media strategy, content creation, and digital marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Software",
            "description": "Specialized practice management and patient booking systems for healthcare"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing",
            "description": "Search engine optimization and comprehensive digital marketing services"
          }
        }
      ]
    }
  };
};
