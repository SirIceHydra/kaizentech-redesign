<template>
    <footer>
        <div id="navigations">
            <picture id="icon">
                <Logo :dark="false" />
            </picture>
            <ul id="links">
                <li class="link">
                    <NavLinkButton :text="'About'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Services'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Use Cases'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Pricing'" :type="2" />
                </li>
                <li class="link">
                    <NavLinkButton :text="'Blog'" :type="2" />
                </li>
            </ul>
            <div id="socials" v-if="!WidthMobile()">
                <a href="https://www.linkedin.com/company/kaizen-tech-za/" target="_blank" rel="noopener noreferrer">
                    <picture class="component logo">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#191A23" />
                            <path
                                d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                                fill="#191A23" />
                            <path
                                d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                                fill="#191A23" />
                        </svg>
                    </picture>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579457152761" target="_blank" rel="noopener noreferrer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                            fill="white" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/kaizentechnologyza/" target="_blank" rel="noopener noreferrer">
                    <picture class="component logo">
                        <img src="/logo/IG.svg" alt="Instagram" width="18" height="18" />
                    </picture>
                </a>
            </div>
        </div>
        <div id="contacts">
            <div id="contact-columns">
                <div id="address-column">
                    <h4 id="contact-title">Address:</h4>
                    <p id="address-info">
                        <span id="message">57 Sunnyside Road, Crawford, Cape Town, 7780</span>
                    </p>
                </div>
                <div id="phone-column">
                    <h4 id="contact-title">Phone:</h4>
                    <p id="phone-info">
                        <span id="message">+27 81 554 1536</span>
                    </p>
                </div>
                <div id="email-column">
                    <h4 id="contact-title">Email:</h4>
                    <p id="email-info">
                        <span id="message">info@kaizentech.com</span>
                    </p>
                </div>
            </div>
        </div>
        <div id="socials" class="alt" v-if="WidthMobile()">
            <a href="https://www.linkedin.com/company/kaizen-tech-za/" target="_blank" rel="noopener noreferrer">
                <picture class="component logo">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#191A23" />
                        <path
                            d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z"
                            fill="#191A23" />
                        <path
                            d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z"
                            fill="#191A23" />
                    </svg>
                </picture>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579457152761" target="_blank" rel="noopener noreferrer">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                        fill="white" />
                </svg>
            </a>
            <a href="https://www.instagram.com/kaizentechnologyza/" target="_blank" rel="noopener noreferrer">
                <picture class="component logo">
                    <img src="/logo/IG.svg" alt="Instagram" width="18" height="18" />
                </picture>
            </a>
        </div>
        <div id="rights">
            <div id="footer-bottom">
                <p id="copyright">
                    © 2025 Kaizen Technology. All rights reserved.
                </p>
                <div id="policy-links">
                    <RouterLink to="/privacy-policy">
                        <NavLinkButton :text="'Privacy Policy'" :type="2" />
                    </RouterLink>
                    <RouterLink to="/terms-of-service">
                        <NavLinkButton :text="'Terms of Service'" :type="2" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Logo from '../Logo/Logo.vue';
import NavLinkButton from '../Buttons/NavLinkButton/NavLinkButton.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const width = ref(0);

width.value = window.innerWidth;

window.addEventListener('resize', (e) => {
    WidthMobile();
});

function WidthMobile() {
    width.value = window.innerWidth;

    if (width.value < 1040) return true;
    return false;
};
</script>

<style scoped>
footer {
    background-color: var(--secondary-color);
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    margin-top: 70px;
    padding: 55px 60px;
    display: flex;
    flex-direction: column;
    gap: 55px;
}

#navigations {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#links {
    padding-left: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
}

#socials {
    display: flex;
    gap: 10px;
    align-items: center;
}

#socials.alt {
    gap: 30px;
}

#socials .logo {
    aspect-ratio: 1;
    background-color: transparent;
    border-radius: 50%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
}

#socials .logo svg {
    height: 16px;
    width: auto;
}

#socials .logo svg path {
    fill: var(--white);
}

#socials .logo img {
    filter: brightness(0) invert(1);
}

#socials a>svg>path {
    transition: 0.2s;
}

#contacts {
    display: flex;
    align-items: center;
    justify-content: center;
}

#contact-columns {
    display: flex;
    gap: 80px;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
}

#address-column,
#phone-column,
#email-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    text-align: center;
}

#contact-title {
    background-color: var(--primary-color);
    border-radius: 7px;
    width: max-content;
    padding: 0 7px;
    margin-bottom: 7px;
    color: var(--white);
    margin: 0 auto 7px auto;
}

#address-column p,
#phone-column p,
#email-column p {
    color: var(--white);
}

#virtual-info {
    flex-grow: 1;
    flex-shrink: 1;

    min-width: 440px;
}

#virtual-info .wrapper {
    background-color: #292A32;
    border-radius: 14px;
    padding: 58px 40px;
    display: flex;
    gap: 20px;
}

#virtual-info #email-input {
    flex-grow: 1;
    flex-shrink: 1;

    border: 2px solid var(--white);
    border-radius: 14px;
    padding: 0 35px;
    display: flex;
    align-items: center;
}

#virtual-info input {
    background-color: transparent;
    border: 0;
    color: var(--white);
    width: 100%;
    outline: none;
}

#virtual-info input::placeholder {
    color: var(--white)
}

#rights {
    border-top: 2px solid var(--white);
    color: var(--white);
    padding-top: 50px;
}

#footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}

#policy-links {
    display: flex;
    gap: 20px;
    align-items: center;
}

#policy-links a {
    text-decoration: none;
}

/* LISTENERS */
#socials .logo:hover {
    background-color: var(--primary-color);
}

#socials a:hover>svg>path {
    fill: var(--primary-color);
}

/* RESPONSIVE */
@media screen and (max-width: 999px) {
    #contacts {
        flex-direction: column;
        align-items: initial;
        gap: 50px;
    }
    
    #contact-columns {
        flex-direction: column;
        gap: 40px;
        align-items: center;
    }
    
    #address-column,
    #phone-column,
    #email-column {
        text-align: center;
        max-width: 300px;
    }
}

@media screen and (max-width: 919px) {
    #navigations {
        flex-direction: column;
        gap: 30px;
        align-items: initial;
        justify-content: initial;
    }
}

@media screen and (max-width: 720px) {
    #virtual-info {
        min-width: initial;
    }
}

@media screen and (max-width: 620px) {
    footer {
        padding: 55px 40px;
    }

    #links {
        flex-wrap: wrap;
    }

    #virtual-info .wrapper {
        flex-direction: column;
    }

    #virtual-info #email-input {
        height: 68px;
    }

    #virtual-info input {
        background-color: transparent;
        border: 0;
        color: var(--white);
        width: 100%;
        outline: none;
    }
}

@media screen and (max-width: 520px) {
    footer {
        padding: 55px 20px;
        align-items: center;
    }

    #navigations {
        align-items: center;
    }

    #links {
        flex-direction: column;
    }

    #physical-info {
        max-width: initial;
        align-items: center;
        text-align: center;
    }

    #physical-info #address-info {
        max-width: 320px;
    }

    #rights {
        flex-direction: column;
    }
    
    #footer-bottom {
        flex-direction: column;
        gap: 20px;
    }
    
    #policy-links {
        flex-direction: column;
        gap: 10px;
    }
}
</style>