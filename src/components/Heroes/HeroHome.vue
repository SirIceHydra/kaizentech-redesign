<template>
    <div class="component home-hero" ref="heroRef">
        <div id="left">
            <h1 id="title">
                <span class="line line-1">{{ line1 }}</span>
                <span class="line line-2">
                    in <span class="typewriter-container">
                        <span class="typewriter-text" ref="typewriterRef"></span>
                        <span class="cursor">|</span>
                    </span>
                </span>
            </h1>
            <p id="sub-title" v-if="width > 1049">{{ subTitle }}</p>
            <BasicButton :text="'Sign up for free'" :type="2" v-if="width > 1049" />
        </div>
        <div id="right">
            <picture class="icon">
                <img src="/assets/Screen No 2.svg" alt="Hero Illustration" />
            </picture>
            <p id="sub-title" v-if="width <= 1049">{{ subTitle }}</p>
            <BasicButton id="action" :text="'Sign up for free'" :type="2" v-if="width <= 1049" />

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const width = ref(window.innerWidth);
const heroRef = ref(null);
const typewriterRef = ref(null);
const line1 = 'Driving Digital Innovation';
const subTitle = 'At Kaizen Technology, we\'ve grown from healthcare SaaS specialists into a full-service digital partner. We design websites, apps, booking systems, and provide SEO, social media, and branding — delivering end-to-end solutions that drive growth.';

// Words to cycle through in the typewriter effect
const words = ['Healthcare', 'E-Commerce', 'Mobile Apps', 'Software Dev', 'Social Media'];
let currentWordIndex = 0;
let typewriterTimeline = null;

window.addEventListener('resize', (e) => {
    width.value = window.innerWidth;
});

const startTypewriterEffect = () => {
    if (!typewriterRef.value) return;
    
    const typewriterElement = typewriterRef.value;
    
    const animateWord = (word) => {
        return new Promise((resolve) => {
            // Clear the element
            typewriterElement.textContent = '';
            
            // Type out the word character by character
            const chars = word.split('');
            let currentText = '';
            
            const typeInterval = setInterval(() => {
                if (chars.length === 0) {
                    clearInterval(typeInterval);
                    // Wait a bit before starting to delete
                    setTimeout(() => {
                        // Delete the word character by character
                        const deleteInterval = setInterval(() => {
                            if (currentText.length === 0) {
                                clearInterval(deleteInterval);
                                resolve();
                            } else {
                                currentText = currentText.slice(0, -1);
                                typewriterElement.textContent = currentText;
                            }
                        }, 50); // Delete speed
                    }, 2000); // Wait time before deleting
                } else {
                    currentText += chars.shift();
                    typewriterElement.textContent = currentText;
                }
            }, 100); // Type speed
        });
    };
    
    const cycleWords = async () => {
        while (true) {
            await animateWord(words[currentWordIndex]);
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
    };
    
    cycleWords();
};

onMounted(() => {
    startTypewriterEffect();
});

onUnmounted(() => {
    if (typewriterTimeline) {
        typewriterTimeline.kill();
    }
});
</script>

<style scoped>
.home-hero {
    margin: 40px 0 70px;
    display: flex;
    justify-content: space-between;
}

#left {
    max-width: 50%;
    width: 100%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: start;
}

#title {
    position: relative;
    display: inline-block;
    font-size: clamp(36px, 9.5vw, 86px);
    line-height: 1.08;
    max-width: 100%;
    overflow-wrap: anywhere;
}

.line { display: block; }

.typewriter-container {
    display: inline-block;
    min-width: 300px; /* Adjust this value based on your longest word */
    color: #4682b4;
    font-weight: bold;
}

.typewriter-text {
    color: #4682b4;
    font-weight: bold;
}

.cursor {
    color: #000;
    font-weight: bold;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* remove sweep layers */

#right {
    flex-shrink: 1;
}

.icon img {
    width: 750px;
    height: auto;
}

/* RESPONSIVE */
@media screen and (max-width: 1049px) {
    .home-hero {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #left {
        max-width: 100%;
        min-width: 0;
        display: flex;
        flex-direction: column;
    }

    #left #title {
        text-align: center;
    }

    .typewriter-container {
        min-width: 180px; /* Reduced min-width for mobile to fix spacing */
    }

    #right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #right .icon {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    #right .icon img {
        width: 100%;
        max-width: 520px;
        height: auto;
    }

    #right #sub-title {
        text-align: center;
        margin-bottom: 35px;
    }

    #right #sub-title #action {
        max-width: max-content;
    }
}

@media screen and (max-width: 620px) {
    #right {
        align-items: initial;
    }

    .home-hero {
        margin: 24px 0 50px;
    }

    .typewriter-container {
        min-width: 140px; /* Further reduced for very small screens */
    }

    #right .icon img {
        max-width: 100%;
    }

    #right #sub-title #action {
        max-width: none;
        width: 100%;
    }
}
</style>