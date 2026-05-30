// Portfolio Data - Update this file to modify your portfolio content

const portfolioData = {
    // Skills Section
    skills: [
        {
            category: "Programming & Query Languages",
            icon: "💻",
            items: ["Python", "SQL (MySQL)"]
        },
        {
            category: "Libraries / Frameworks",
            icon: "📚",
            items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
        },
        {
            category: "Tools & Platforms",
            icon: "🛠️",
            items: ["MS Excel", "Power BI", "PowerPoint", "VS Code", "PyCharm"]
        },
        {
            category: "Soft Skills",
            icon: "🌟",
            items: ["Quick Learner", "Critical Thinking", "Problem Solving", "Good Communication"]
        }
    ],

    // Experience Section
    experience: [
        {
            title: "Virtual Internship 6.0 – Batch 10",
            company: "Infosys Springboard",
            period: "Nov 2025 – Jan 2026",
            location: "Virtual",
            description: "Completed a virtual internship building a full-stack ML-powered web application (Edu2Job) that predicts job roles based on educational background.",
            achievements: [
                "Built a complete full-stack application using React.js (frontend) and Django REST Framework (backend) with role-based access control",
                "Implemented secure authentication using JWT and Google OAuth 2.0; developed REST APIs for user profiles, education, skills, job roles, and prediction endpoints",
                "Trained a Random Forest Classifier achieving 92%+ accuracy for job-role prediction and integrated the ML model into backend for real-time inference",
                "Designed responsive UI using React and Tailwind CSS; performed data preprocessing and feature engineering on educational background datasets"
            ],
            technologies: ["React.js", "Django REST", "JWT", "OAuth 2.0", "Random Forest", "Tailwind CSS"]
        }
    ],

    // Projects Section
    projects: [
        {
            title: "Sales Prediction using EDA",
            subtitle: "Retail Revenue Forecasting",
            description: "Sales forecasting system using exploratory data analysis and regression models on retail sales data to identify trends and predict revenue.",
            category: "Data Analysis / ML",
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Linear Regression"],
            features: [
                "Performed data cleaning, preprocessing, and exploratory analysis on retail sales data to identify revenue trends and customer behaviour",
                "Built a Linear Regression model for revenue prediction achieving R² = 0.94",
                "Conducted outlier detection, clustering, and time-series analysis",
                "Created visualizations using Matplotlib and Seaborn to derive and communicate key business insights"
            ],
            github: "https://github.com/Harini2harini",
            icon: "📊",
            highlight: "R² = 0.94 Accuracy"
        },
        {
            title: "Superstore Sales Analysis",
            subtitle: "MySQL Data Analysis",
            description: "Analyzed 9,994 sales records using MySQL to uncover profit margins, seasonal sales trends, and customer behaviour insights.",
            category: "SQL / Data Analysis",
            technologies: ["MySQL", "SQL", "Aggregate Functions", "GROUP BY", "Window Functions"],
            features: [
                "Analyzed 9,994 sales records using MySQL",
                "Performed sales, customer, profit and time-based analysis",
                "Used aggregate functions, GROUP BY, HAVING, date functions and window functions",
                "Identified insights such as 2.49% furniture profit margin and seasonal sales trends"
            ],
            github: "https://github.com/Harini2harini",
            icon: "🏪",
            highlight: "9,994 Records Analyzed"
        },
        {
            title: "Edu2Job – Job Role Predictor",
            subtitle: "Full-Stack ML Web App",
            description: "A full-stack web application that predicts suitable job roles based on educational background using a Random Forest ML model.",
            category: "Full-Stack + ML",
            technologies: ["React.js", "Tailwind CSS", "Django REST", "Random Forest", "JWT", "Google OAuth"],
            features: [
                "Responsive web application with React and Tailwind CSS frontend",
                "Secure authentication with JWT and Google OAuth 2.0",
                "Random Forest Classifier with 92%+ accuracy for job-role prediction integrated as a REST API",
                "RESTful API architecture with Django; data preprocessing and feature engineering on educational datasets"
            ],
            github: "https://github.com/Harini2harini",
            live: "https://edu2-job-kohl.vercel.app",
            icon: "🎓",
            highlight: "92%+ ML Accuracy"
        }
    ],

    // Certifications
    certifications: [
        {
            title: "Virtual Internship 6.0 Completion",
            issuer: "Infosys Springboard",
            date: "Jan 2026",
            icon: "🏅",
            image: "certificates/infosys-internship.pdf",
            type: "badge"
        },
        {
            title: "Pragathi: Path to Future – Cohort 5",
            issuer: "Infosys Springboard",
            date: "Sep 2025",
            icon: "🎓",
            image: "certificates/pragathi-cohort5.pdf",
            type: "badge"
        },
        {
            title: "AWS Academy Graduate – Generative AI Foundations",
            issuer: "AWS Academy",
            date: "Sep 2025",
            icon: "☁️",
            image: "certificates/aws-genai.pdf",
            link: "https://www.credly.com/badges/e793efe4-b2c5-4564-ad27-bf154d4c9a38",
            type: "badge"
        },
        {
            title: "SQL (Basic)",
            issuer: "HackerRank",
            date: "Apr 2026",
            icon: "🗄️",
            image: "certificates/sql-basic.pdf",
            type: "badge"
        },
        {
            title: "Data Analytics with Python",
            issuer: "NPTEL – IIT Roorkee",
            date: "Jan–Apr 2025",
            icon: "📊",
            image: "certificates/nptel-data-analytics.pdf",
            type: "pdf"
        },
        {
            title: "Introduction to Internet of Things",
            issuer: "NPTEL – IIT Kharagpur",
            date: "Jul–Oct 2025",
            icon: "🌐",
            image: "certificates/nptel-iot.pdf",
            type: "pdf"
        }
        // ── TEMPLATE FOR NEW CERTIFICATE ──────────────────────────────
        // {
        //     title: "Certificate Name",
        //     issuer: "Issuing Organization",
        //     date: "Month Year",
        //     icon: "🏆",
        //     image: "certificates/filename.jpg",   // relative path from index.html
        //     link: "https://verify-url.com",       // optional: verification / credential URL
        //     type: "image"                         // badge | image | pdf | link
        // },
        // ─────────────────────────────────────────────────────────────
    ],

    // Achievements
    achievements: [
        {
            title: "Google Developer Group (GDG) On Campus – Swag Kit Recognition",
            description: "I was selected to receive an official swag kit from the Google Developer Group On Campus program, recognizing my active participation and engagement in the developer community. The kit included a branded t-shirt, travel tumbler, stickers, and a backpack, representing my association with a global network of developers.",
            icon: "🎁",
            category: "Community Recognition",
            year: "2026",
            image: "certificates/gdg-swag-kit.jpeg"
        }
        // ── TEMPLATE FOR NEW ACHIEVEMENT ──────────────────────────────
        // {
        //     title: "Achievement Title",
        //     description: "What you did and the impact it had.",
        //     icon: "🏆",
        //     category: "Category",
        //     year: "Year",
        //     image: "certificates/filename.jpg"  // optional photo
        // },
        // ─────────────────────────────────────────────────────────────
    ],

    // Social Links
    social: {
        github: "https://github.com/Harini2harini",
        linkedin: "https://www.linkedin.com/in/harini-m-3b4455325",
        email: "harini2510m@gmail.com",
        phone: "6380166344"
    },

    // Personal Information
    personal: {
        name: "M Harini",
        title: "Aspiring Data Analyst",
        location: "India",
        availability: "Seeking Data Analyst Internship",
        cgpa: "9.1",
        college: "GRT Institute of Engineering and Technology",
        degree: "B.E. Computer Science and Engineering (2023–2027)"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
