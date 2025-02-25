const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// Objet contenant les traductions
const translations = {
    fr: {
        home: "Accueil",
        about: "A propos",
        resume: "CV",
        portfolio: "Portfolio",
        contact: "Contact",
        hello: "Bonjour, je suis",
        downloadCV: "Télécharger CV",
        aboutMe: "A propos de moi",
        experience: "Expérience",
        skills: "Compétences",
        formation: "Formation",
        myWork: "Mes Projets",
        myService: "Mes Services",
        letsWork: "Travaillons ensemble !",
        fullName: "Nom complet",
        emailAddress: "Adresse email",
        phoneNumber: "Numéro de téléphone",
        emailSubject: "Sujet du message",
        message: "Votre message",
        sendMessage: "Envoyer",
        frontendDev: "Développeur Frontend",
        present: "Présent",
        personalPortfolio: "Portfolio personnel",
        techUsed: "Technologies utilisées",
        portfolioExp: [
            "Création de mon propre portfolio mettant en avant mes compétences en développement frontend.",
            "Réalisation d'une interface utilisateur responsive et moderne.",
            "Optimisation du site pour la performance et l'accessibilité."
        ],
        wordpressExp: [
            "Conception et développement d'un site vitrine pour un studio de tatouage.",
            "Intégration des besoins du client pour refléter l'identité visuelle du studio.",
            "Mise en place d'un formulaire de contact et d'une galerie photo dynamique."
        ],
        internExp: [
            "Création d'un site vitrine pour une entreprise de vente de cravates.",
            "Gestion de contenu et intégration de plugins pour optimiser l'expérience utilisateur.",
            "Participation à l'optimisation SEO du site pour améliorer sa visibilité en ligne."
        ],
        mediatorExp: [
            "Aide et accompagnement des citoyens dans l'utilisation des outils numériques.",
            "Formation des utilisateurs aux plateformes en ligne et aux services publics numériques.",
            "Sensibilisation à la sécurité informatique et à l'utilisation responsable des outils digitaux."
        ],
        inProgress: "en cours...",
        aboutDesc: "Après avoir récemment terminé une formation en développement web, je me spécialise dans la création d'interfaces utilisateur réactives et modernes. J'ai découvert ma passion pour le développement web en explorant comment le code peut donner vie à des idées et des concepts. J'ai acquis des compétences en HTML, CSS, JavaScript, et des bases dans des frameworks comme React. Je suis constamment en quête de nouveaux défis pour améliorer mes compétences et apporter des solutions innovantes aux projets auxquels je participe.\n\nJe suis également intéressé par l'apprentissage continu dans des domaines comme le design UX/UI, et je m'efforce de rester à jour sur les tendances du web pour offrir des solutions de pointe. Mon objectif est de collaborer avec des équipes passionnées et de contribuer à la création d'expériences utilisateur optimales.",
        homeDesc: "Jeune développeur web, je suis passionné par le développement web et la création d'interfaces élégantes et réactives. Bien que débutant, j'ai acquis de solides bases en HTML, CSS, JavaScript, et je suis constamment en train d'apprendre de nouvelles technologies pour améliorer mes compétences. Curieux et déterminé, je suis prêt à contribuer à des projets dynamiques et innovants.",
        viewMore: "Voir plus",
        webDev: "Développement Web",
        webDevDesc: "Création de sites web modernes et responsifs, en utilisant les dernières technologies front-end. Je m'assure que chaque site soit optimisé pour tous les appareils et offre une expérience utilisateur exceptionnelle.",
        creativeDesign: "Design Créatif",
        creativeDesignDesc: "Conception d'interfaces visuellement attrayantes et intuitives. Je combine créativité et fonctionnalité pour créer des designs uniques qui reflètent l'identité de votre marque.",
        uiuxDesign: "UI/UX Design",
        uiuxDesignDesc: "Création d'expériences utilisateur fluides et agréables. Je me concentre sur l'ergonomie et l'accessibilité pour garantir que vos utilisateurs trouvent facilement ce qu'ils cherchent.",
        seo: "Optimisation SEO",
        seoDesc: "Amélioration de la visibilité de votre site sur les moteurs de recherche. Mise en place des meilleures pratiques SEO pour augmenter votre présence en ligne et attirer plus de visiteurs.",
        education: {
            dev1: {
                title: "Developpeur Web / Web mobile",
                school: "Afpa Niveau bac+2 (Distanciel)",
                desc: [
                    "Développer la partie front-end d'une application web ou web mobile sécurisée",
                    "Développer la partie back-end d'une application web ou web mobile sécurisée"
                ]
            },
            dev2: {
                title: "Developpeur Web / Web mobile",
                school: "Webforce 3 Niveau bac+2 (Présentiel)",
                desc: [
                    "Développer la partie front-end d'une application web ou web mobile sécurisée",
                    "Développer la partie back-end d'une application web ou web mobile sécurisée"
                ]
            },
            mediateur: {
                title: "Conseiller médiateur numérique",
                school: "Afpa Niveau bac+2",
                desc: [
                    "Accompagner différents publics vers l'autonomie dans les usages des technologies, services et médias numériques",
                    "Contribuer au développement d'un espace de médiation numérique et de ses projets",
                    "Contribuer à la gestion d'un espace de médiation numérique et animer ses projets collaboratifs"
                ]
            }
        }
    },
    en: {
        home: "Home",
        about: "About",
        resume: "Resume",
        portfolio: "Portfolio",
        contact: "Contact",
        hello: "Hello, I'm",
        downloadCV: "Download CV",
        aboutMe: "About Me",
        experience: "Experience",
        skills: "Skills",
        formation: "Education",
        myWork: "My Work",
        myService: "My Service",
        letsWork: "Let's work together!",
        fullName: "Full name",
        emailAddress: "Email Address",
        phoneNumber: "Phone Number",
        emailSubject: "Email subject",
        message: "Your Message",
        sendMessage: "Send Message",
        frontendDev: "Frontend Developer",
        present: "Present",
        personalPortfolio: "Personal Portfolio",
        techUsed: "Technologies used",
        portfolioExp: [
            "Creation of my personal portfolio showcasing my frontend development skills.",
            "Implementation of a responsive and modern user interface.",
            "Optimization of the site for performance and accessibility."
        ],
        wordpressExp: [
            "Design and development of a showcase website for a tattoo studio.",
            "Integration of client needs to reflect the studio's visual identity.",
            "Implementation of a contact form and dynamic photo gallery."
        ],
        internExp: [
            "Creation of a showcase website for a tie selling company.",
            "Content management and plugin integration to optimize user experience.",
            "Participation in SEO optimization to improve online visibility."
        ],
        mediatorExp: [
            "Help and support for citizens in using digital tools.",
            "Training users on online platforms and digital public services.",
            "Raising awareness about computer security and responsible use of digital tools."
        ],
        inProgress: "in progress...",
        aboutDesc: "Having recently completed my web development training, I specialize in creating responsive and modern user interfaces. I discovered my passion for web development by exploring how code can bring ideas and concepts to life. I have gained skills in HTML, CSS, JavaScript, and foundations in frameworks like React. I am constantly seeking new challenges to improve my skills and bring innovative solutions to the projects I work on.\n\nI am also interested in continuous learning in areas such as UX/UI design, and I strive to stay up-to-date with web trends to deliver cutting-edge solutions. My goal is to collaborate with passionate teams and contribute to creating optimal user experiences.",
        homeDesc: "As a young web developer, I am passionate about web development and creating elegant and responsive interfaces. Although a beginner, I have acquired solid foundations in HTML, CSS, JavaScript, and I am constantly learning new technologies to improve my skills. Curious and determined, I am ready to contribute to dynamic and innovative projects.",
        viewMore: "View more",
        webDev: "Web Development",
        webDevDesc: "Creation of modern and responsive websites using the latest front-end technologies. I ensure that each site is optimized for all devices and provides an exceptional user experience.",
        creativeDesign: "Creative Design",
        creativeDesignDesc: "Design of visually appealing and intuitive interfaces. I combine creativity and functionality to create unique designs that reflect your brand identity.",
        uiuxDesign: "UI/UX Design",
        uiuxDesignDesc: "Creation of smooth and enjoyable user experiences. I focus on ergonomics and accessibility to ensure your users easily find what they're looking for.",
        seo: "SEO Optimization",
        seoDesc: "Improvement of your website's visibility on search engines. Implementation of SEO best practices to increase your online presence and attract more visitors.",
        education: {
            dev1: {
                title: "Web / Mobile Web Developer",
                school: "Afpa Level bac+2 (Remote)",
                desc: [
                    "Develop the front-end of secure web or mobile web applications",
                    "Develop the back-end of secure web or mobile web applications"
                ]
            },
            dev2: {
                title: "Web / Mobile Web Developer",
                school: "Webforce 3 Level bac+2 (On-site)",
                desc: [
                    "Develop the front-end of secure web or mobile web applications",
                    "Develop the back-end of secure web or mobile web applications"
                ]
            },
            mediateur: {
                title: "Digital Mediation Counselor",
                school: "Afpa Level bac+2",
                desc: [
                    "Guide different audiences towards autonomy in the use of digital technologies, services and media",
                    "Contribute to the development of a digital mediation space and its projects",
                    "Contribute to the management of a digital mediation space and lead its collaborative projects"
                ]
            }
        }
    }
};

// Fonction pour changer la langue
const languageToggle = document.getElementById('languageToggle');
let currentLang = 'fr';

languageToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    const langText = languageToggle.querySelector('.lang-text');
    langText.textContent = currentLang.toUpperCase();
    updateContent(currentLang);
});

function updateContent(lang) {
    // Mise à jour des tooltips de navigation
    document.querySelectorAll('.nav-list .tooltip').forEach((tooltip, index) => {
        const keys = ['home', 'about', 'resume', 'portfolio', 'contact'];
        tooltip.textContent = translations[lang][keys[index]];
    });

    // Mise à jour des titres de section
    document.querySelectorAll('.title').forEach(title => {
        if (title.textContent.toLowerCase().includes('about')) {
            title.textContent = translations[lang].aboutMe;
        } else if (title.textContent.toLowerCase().includes('resume')) {
            title.textContent = translations[lang].resume;
        } else if (title.textContent.toLowerCase().includes('portfolio')) {
            title.textContent = translations[lang].portfolio;
        } else if (title.textContent.toLowerCase().includes('contact')) {
            title.textContent = translations[lang].contact;
        }
    });

    // Mise à jour des titres de la section CV
    const cvTitles = document.querySelectorAll('.resume-list h3');
    cvTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase();
        if (titleText.includes('expérience') || titleText.includes('experience')) {
            title.textContent = translations[lang].experience;
        } else if (titleText.includes('compétences') || titleText.includes('skills')) {
            title.textContent = translations[lang].skills;
        } else if (titleText.includes('formation') || titleText.includes('education')) {
            title.textContent = translations[lang].formation;
        }
    });

    // Mise à jour des onglets du CV
    document.querySelectorAll('.resume-list h3').forEach(tab => {
        if (tab.textContent.toLowerCase().includes('experience')) {
            tab.textContent = translations[lang].experience;
        } else if (tab.textContent.toLowerCase().includes('skills')) {
            tab.textContent = translations[lang].skills;
        } else if (tab.textContent.toLowerCase().includes('education')) {
            tab.textContent = translations[lang].formation;
        }
    });

    // Mise à jour des onglets du portfolio
    document.querySelectorAll('.portfolio-list h3').forEach(tab => {
        if (tab.textContent.toLowerCase().includes('work')) {
            tab.textContent = translations[lang].myWork;
        } else if (tab.textContent.toLowerCase().includes('service')) {
            tab.textContent = translations[lang].myService;
        }
    });

    // Mise à jour du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.querySelector('h3').textContent = translations[lang].letsWork;
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs[0].placeholder = translations[lang].fullName;
        inputs[1].placeholder = translations[lang].emailAddress;
        inputs[2].placeholder = translations[lang].phoneNumber;
        inputs[3].placeholder = translations[lang].emailSubject;
        inputs[4].placeholder = translations[lang].message;
        contactForm.querySelector('button').textContent = translations[lang].sendMessage;
    }

    // Mise à jour des descriptions de la page d'accueil et à propos
    const homeDesc = document.querySelector('.home .desc');
    const aboutDesc = document.querySelector('.about .desc');
    const viewMoreBtn = document.querySelector('.about .btn');

    if (homeDesc) {
        homeDesc.textContent = translations[lang].homeDesc;
    }
    if (aboutDesc) {
        aboutDesc.innerHTML = translations[lang].aboutDesc.replace('\n\n', '<br><br>');
    }
    if (viewMoreBtn) {
        viewMoreBtn.textContent = translations[lang].viewMore;
    }

    // Mise à jour du bouton de téléchargement CV
    const downloadButton = document.querySelector('.home .btn');
    if (downloadButton) {
        downloadButton.textContent = translations[lang].downloadCV;
    }

    // Mise à jour du contenu de la section CV
    const resumeItems = document.querySelectorAll('.resume-item');
    resumeItems.forEach(item => {
        const description = item.querySelector('p');
        if (!description) return;

        const descText = description.textContent.trim();

        // Portfolio personnel
        if (descText.includes("Création de mon propre portfolio") || 
            descText.includes("Creation of my personal portfolio")) {
            description.innerHTML = translations[lang].portfolioExp.join("<br>");
        }
        // Hikutini Tattoo
        else if (descText.includes("Conception et développement") || 
                 descText.includes("Design and development")) {
            description.innerHTML = translations[lang].wordpressExp.join("<br>");
        }
        // Stage Marcarine
        else if (descText.includes("Création d'un site vitrine pour une entreprise") || 
                 descText.includes("Creation of a showcase website for a tie")) {
            description.innerHTML = translations[lang].internExp.join("<br>");
        }
        // Médiateur numérique
        else if (descText.includes("Aide et accompagnement") || 
                 descText.includes("Help and support")) {
            description.innerHTML = translations[lang].mediatorExp.join("<br>");
        }

        // Mise à jour du texte "en cours..."
        const progressText = item.querySelector('p:last-child');
        if (progressText && (progressText.textContent.includes("cours") || 
                           progressText.textContent.includes("progress"))) {
            progressText.textContent = translations[lang].inProgress;
        }
    });

    // Mise à jour des services
    const services = document.querySelectorAll('.portfolio-box.service .portfolio-item');
    services.forEach(service => {
        const title = service.querySelector('h4');
        const desc = service.querySelector('p');
        
        if (title.textContent.includes('Développement') || title.textContent.includes('Development')) {
            title.textContent = translations[lang].webDev;
            desc.textContent = translations[lang].webDevDesc;
        } else if (title.textContent.includes('Design Créatif') || title.textContent.includes('Creative Design')) {
            title.textContent = translations[lang].creativeDesign;
            desc.textContent = translations[lang].creativeDesignDesc;
        } else if (title.textContent.includes('UI/UX')) {
            title.textContent = translations[lang].uiuxDesign;
            desc.textContent = translations[lang].uiuxDesignDesc;
        } else if (title.textContent.includes('SEO') || title.textContent.includes('Optimisation')) {
            title.textContent = translations[lang].seo;
            desc.textContent = translations[lang].seoDesc;
        }
    });

    // Mise à jour de la section formation
    const educationItems = document.querySelectorAll('.resume-box.education .resume-item');
    educationItems.forEach((item, index) => {
        const title = item.querySelector('h4:nth-child(2)');
        const school = item.querySelector('h4:nth-child(3)');
        const desc = item.querySelector('p');

        if (index === 0) {
            title.textContent = translations[lang].education.dev1.title;
            school.textContent = translations[lang].education.dev1.school;
            desc.innerHTML = translations[lang].education.dev1.desc.map(d => `- ${d}`).join('<br>');
        } else if (index === 1) {
            title.textContent = translations[lang].education.dev2.title;
            school.textContent = translations[lang].education.dev2.school;
            desc.innerHTML = translations[lang].education.dev2.desc.map(d => `- ${d}`).join('<br>');
        } else if (index === 2) {
            title.textContent = translations[lang].education.mediateur.title;
            school.textContent = translations[lang].education.mediateur.school;
            desc.innerHTML = translations[lang].education.mediateur.desc.map(d => `- ${d}`).join('<br>');
        }
    });
}

// actions de la barre de navigation et des sections avec rotation du cube lors du clic
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () =>{
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSec =>{
            if(arrSec.classList.contains('active')){
                sections[4].classList.add('action-contact');
            }
        });
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }
    });
});

// section CV lors du clic sur la liste d'onglets
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () =>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// section portfolio lors du clic sur la liste d'onglets
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () =>{
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});

// visibilité de la section contact lors du rechargement (animation de rechargement du cube)

setTimeout(() =>{
    sections[4].classList.remove('active');
}, 1500);

// formulaire de contact

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(this);
    fetch('/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Affiche le message de succès ou d'erreur
    })
    .catch(error => {
        console.error('Error:', error);
    });
});