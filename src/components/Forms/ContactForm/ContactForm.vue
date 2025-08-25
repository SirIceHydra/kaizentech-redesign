<template>
    <div class="component contact-form">
        <div class="wrapper">
            <form @submit.prevent="sendEmail">
                <div class="form-row">
                    <BasicTextInput 
                        :label="'First Name'" 
                        :placeholder="'First name'" 
                        :is-required="true"
                        :id="'firstName'"
                        v-model="formData.firstName"
                        @validation="validateField('firstName', $event)" 
                    />
                    <BasicTextInput 
                        :label="'Last Name'" 
                        :placeholder="'Last name'" 
                        :is-required="true"
                        :id="'lastName'"
                        v-model="formData.lastName"
                        @validation="validateField('lastName', $event)" 
                    />
                </div>
                
                <div class="form-row">
                    <BasicTextInput 
                        :label="'Email'" 
                        :placeholder="'Email'" 
                        :is-required="true"
                        :id="'email'"
                        v-model="formData.email"
                        @validation="validateField('email', $event)" 
                    />
                    <BasicTextInput 
                        :label="'Phone'" 
                        :placeholder="'Phone number'" 
                        :is-required="true"
                        :id="'phone'"
                        v-model="formData.phone"
                        @validation="validateField('phone', $event)" 
                    />
                </div>
                
                <div class="form-row">
                    <div class="topic-select">
                        <label for="topic" class="select-label">
                            <span>Topic <span class="required">*</span></span>
                        </label>
                        <select 
                            id="topic" 
                            v-model="formData.topic" 
                            required
                            class="topic-dropdown"
                        >
                            <option value="">Choose a topic</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Healthcare SaaS Solutions">Healthcare SaaS Solutions</option>
                            <option value="Booking System Integration">Booking System Integration</option>
                            <option value="E-commerce Platform">E-commerce Platform</option>
                            <option value="Social Media Management">Social Media Management</option>
                            <option value="General Consultation">General Consultation</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-row message-row">
                    <BasicTextInput 
                        :label="'Message'" 
                        :placeholder="'Type your message...'" 
                        :is-required="true"
                        :is-text-area="true"
                        :id="'message'"
                        v-model="formData.message"
                        @validation="validateField('message', $event)" 
                    />
                </div>
                
                <div class="form-row">
                    <label class="terms-checkbox">
                        <input 
                            type="checkbox" 
                            v-model="formData.termsAccepted" 
                            required
                        />
                        <span>I accept the Terms and Conditions</span>
                    </label>
                </div>
                
                <div class="form-row">
                    <button 
                        type="submit" 
                        class="submit-button"
                        :disabled="isSubmitting"
                        @mouseenter="buttonHover = true"
                        @mouseleave="buttonHover = false"
                    >
                        <span class="button-text">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                        <span class="button-bg" :class="{ hover: buttonHover }"></span>
                    </button>
                </div>
                
                <div v-if="formStatus" class="form-status" :class="{ success: formStatus.includes('success'), error: formStatus.includes('Failed') }">
                    {{ formStatus }}
                </div>
            </form>
        </div>
        <picture id="icon">
            <svg width="692" height="649" viewBox="0 0 692 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_341_618" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="41" y="0" width="651"
                    height="649">
                    <mask id="path-1-outside-1_341_618" maskUnits="userSpaceOnUse" x="40.7109" y="-0.5" width="651"
                        height="650" fill="black">
                        <rect fill="white" x="40.7109" y="-0.5" width="651" height="650" />
                        <path
                            d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z" />
                    </mask>
                    <path
                        d="M366.641 162.061L387.068 0.5L386.909 163.337L427.445 5.60362L407.017 167.165L467.024 15.6514L426.488 173.545L505.007 30.6432L444.841 182.157L540.756 50.2603L462.077 193.162L573.632 74.343L477.876 206.08L603.475 102.253L491.761 220.913L629.489 133.673L503.73 237.499L651.353 168.122L513.625 255.362L668.749 204.964L521.126 274.341L681.356 243.719L526.233 294.118L689.017 283.751L528.786 314.213L691.57 324.42L528.786 334.628L689.017 365.09L526.233 354.883L681.356 405.121L521.126 374.659L668.749 444.036L513.625 393.638L651.353 480.878L503.73 411.501L629.489 515.328L491.761 427.928L603.475 546.747L477.876 442.76L573.632 574.657L462.077 455.838L540.756 598.58L444.841 466.684L505.007 618.197L426.488 475.455L467.024 633.189L407.017 481.676L427.445 643.396L386.909 485.503L387.068 648.5L366.641 486.779L346.213 648.5L346.213 485.503L305.676 643.396L326.264 481.676L266.257 633.189L306.794 475.455L228.274 618.197L288.44 466.684L192.526 598.58L271.205 455.838L159.49 574.657L255.405 442.76L129.806 546.747L241.52 427.928L103.792 515.328L229.551 411.501L81.9282 480.878L219.656 393.638L64.5326 444.036L212.155 374.659L51.9248 405.121L207.048 354.883L44.2644 365.09L204.495 334.628L41.7109 324.42L204.495 314.213L44.2644 283.751L207.048 294.118L51.9248 243.719L212.155 274.341L64.5326 204.964L219.656 255.362L81.9282 168.122L229.551 237.499L103.792 133.673L241.52 220.913L129.806 102.253L255.405 206.08L159.49 74.343L271.205 193.162L192.526 50.2603L288.44 182.157L228.274 30.6432L306.794 173.545L266.257 15.6514L326.264 167.165L305.676 5.60362L346.213 163.337V0.5L366.641 162.061Z"
                        stroke="black" stroke-width="2" stroke-miterlimit="10" mask="url(#path-1-outside-1_341_618)" />
                </mask>
                <g mask="url(#mask0_341_618)">
                    <rect x="-785.721" y="-37.6172" width="1152.83" height="702.852" rx="45" fill="black" />
                </g>
                <path
                    d="M95.7147 470.596L141.422 495.5L95.7147 520.604L70.7109 566.21L45.7072 520.604L0.000260592 495.5L45.7072 470.596L70.7109 424.789L95.7147 470.596Z"
                    fill="var(--primary-color)" />
                <path
                    d="M217.102 244.065L298.777 288.566L217.102 333.425L172.422 414.922L127.742 333.425L46.0666 288.566L127.742 244.065L172.422 162.211L217.102 244.065Z"
                    fill="#191A23" />
            </svg>
        </picture>
    </div>
</template>

<script setup>
import BasicTextInput from '@/components/Inputs/BasicTextInput/BasicTextInput.vue';
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

// Form data
const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    termsAccepted: false,
});

// Form state
const formStatus = ref('');
const isSubmitting = ref(false);
const buttonHover = ref(false);
const validationState = ref({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
});

// Initialize EmailJS
onMounted(() => {
    emailjs.init('6nwdacmpDmb-njsX9');
});

// Validate individual field
function validateField(fieldName, isValid) {
    validationState.value[fieldName] = isValid;
}

// Send email using EmailJS
const sendEmail = async (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!formData.value.termsAccepted) {
        formStatus.value = 'Please accept the terms to submit the form.';
        return;
    }
    
    // Check if all required fields are valid
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    const isValid = requiredFields.every(field => validationState.value[field]);
    
    if (!isValid) {
        formStatus.value = 'Please fill in all required fields correctly.';
        return;
    }
    
    isSubmitting.value = true;
    formStatus.value = '';
    
    // Prepare the data to be sent to EmailJS
    const templateParams = {
        first_name: formData.value.firstName,
        last_name: formData.value.lastName,
        email: formData.value.email,
        phone: formData.value.phone,
        topic: formData.value.topic,
        message: formData.value.message,
    };
    
    try {
        const result = await emailjs.send(
            'service_gnsgjd6',   // EmailJS service ID
            'template_bezchl8',   // EmailJS template ID
            templateParams,       // Form data
            '6nwdacmpDmb-njsX9'   // EmailJS user ID
        );
        
        formStatus.value = 'Form submitted successfully! We will get back to you soon.';
        
        // Reset form data
        formData.value = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            topic: '',
            message: '',
            termsAccepted: false,
        };
        
        // Reset validation state
        Object.keys(validationState.value).forEach(key => {
            validationState.value[key] = false;
        });
        
    } catch (error) {
        formStatus.value = 'Failed to submit the form. Please try again.';
        console.error('EmailJS Error:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.contact-form {
    --padding-v: 60px;
    --padding-h: 100px;

    background-color: var(--gray);
    border-radius: 45px;
    padding: var(--padding-v) var(--padding-h);
    position: relative;
    overflow: hidden;
}

.wrapper {
    width: 100%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    z-index: 2;
}

form {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.form-row {
    display: flex;
    gap: 20px;
}

.form-row:last-child {
    margin-top: 10px;
}

.message-row {
    flex-direction: column;
}

.message-row .basic-text-input {
    width: 100%;
}

/* Topic Select Styling */
.topic-select {
    flex: 1;
}

.select-label {
    display: block;
    margin-bottom: 5px;
    color: var(--secondary-color);
    font-weight: 500;
    font-size: 14px;
}

.required {
    color: var(--primary-color);
}

.topic-dropdown {
    width: 100%;
    background-color: var(--white);
    border: 2px solid var(--secondary-color);
    border-radius: 14px;
    padding: 18px 30px;
    font-size: 16px;
    color: var(--secondary-color);
    outline: none;
    transition: border-color 0.2s;
}

.topic-dropdown:focus {
    border-color: var(--primary-color);
}

.topic-dropdown option {
    background-color: var(--white);
    color: var(--secondary-color);
}

/* Terms Checkbox Styling */
.terms-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: var(--secondary-color);
    font-size: 14px;
}

.terms-checkbox input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: var(--primary-color);
    cursor: pointer;
}

/* Submit Button Styling */
.submit-button {
    background-color: var(--secondary-color);
    color: var(--white);
    border: 2px solid var(--secondary-color);
    border-radius: 14px;
    padding: 18px 34px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
    height: 68px;
    position: relative;
    overflow: hidden;
}

.submit-button .button-text {
    position: relative;
    z-index: 2;
}

.submit-button .button-bg {
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition-property: opacity, width;
    transition-duration: 0.2s, 0.2s;
    transition-delay: 0s, 0.065s;
    opacity: 0;
    z-index: 1;
}

.submit-button .button-bg.hover {
    opacity: 1;
    width: 100%;
}

.submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.submit-button:disabled .button-bg {
    display: none;
}

/* Form Status Styling */
.form-status {
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}

.form-status.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.form-status.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

#icon {
    position: absolute;
    top: var(--padding-v);
    right: 0%;
    transform: translateX(50%);
}

/* RESPONSIVE */
@media screen and (max-width: 800px) {
    .contact-form {
        --padding-v: 60px;
        --padding-h: 40px;
    }

    .form-row {
        flex-direction: column;
        gap: 15px;
    }

    #icon {
        position: absolute;
        top: 0;
        right: 0%;
        transform: translateX(50%);
    }

    #icon svg {
        height: 300px;
        width: auto;
    }
}

@media screen and (max-width: 420px) {
    .contact-form {
        --padding-h: 30px;
    }

    #icon {
        display: none;
    }
}
</style>