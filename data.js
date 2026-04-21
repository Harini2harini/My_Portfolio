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
            items: ["MS Excel", "Power BI", "PowerPoint", "VS Code", "PyCharm", "Jupyter Notebook"]
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
            title: "SQL Customer Behaviour Analysis",
            subtitle: "Food Delivery Platform",
            description: "Built and queried a relational MySQL database modelling 18 months of food delivery transactions across 6 cities to uncover retention, revenue, and customer behavior insights.",
            category: "SQL / Data Analysis",
            technologies: ["MySQL", "SQL", "Window Functions", "CTEs", "RFM Segmentation"],
            features: [
                "Built and queried a relational MySQL database modelling 18 months of food delivery transactions across 6 cities",
                "Wrote 18 business-driven SQL queries covering revenue trends, customer churn, discount impact, and regional performance",
                "Performed customer cohort retention analysis and RFM segmentation using window functions (LAG, RANK, NTILE) and multi-level CTEs",
                "Identified repeat vs. one-time customer patterns and purchase cadence to support retention and marketing decisions"
            ],
            github: "https://github.com/Harini2harini",
            icon: "🍕",
            highlight: "18 Business-Driven Queries"
        },
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
            title: "PyBank – CLI Banking System",
            subtitle: "Python Terminal Application",
            description: "A Python-based terminal banking application supporting secure financial operations, account management, and persistent data storage using OOP.",
            category: "Python Development",
            technologies: ["Python", "JSON", "SHA-256", "OOP", "Modular Architecture"],
            features: [
                "Developed a Python CLI banking app supporting account creation, deposits, withdrawals, and fund transfers using OOP and modular architecture",
                "Secured authentication with SHA-256 PIN hashing and account lockout mechanism",
                "Implemented JSON-based data persistence with backup handling",
                "Robust input validation and error handling for system reliability"
            ],
            github: "https://github.com/Harini2harini",
            icon: "🏦",
            highlight: "SHA-256 Secure Auth"
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
    // HOW TO ADD A NEW CERTIFICATE:
    // 1. Add your certificate image to the repo (e.g. certificates/my-cert.jpg)
    // 2. Add a new object below following the same pattern
    // 3. For a PDF certificate, set type: "pdf" and use the .pdf file path
    // 4. For an external link (e.g. Credly/Coursera), set type: "link" and fill the "link" field
    certifications: [
        {
            title: "Virtual Internship 6.0 Completion",
            issuer: "Infosys Springboard",
            date: "Jan 2026",
            icon: "🏅",
            image: "certificates/infosys-internship.pdf",  // ← add your PDF/image file here
            // link: "https://...",
            type: "badge"  // badge | image | pdf | link
        },
        {
            title: "Pragathi: Path to Future – Cohort 5",
            issuer: "Infosys Springboard",
            date: "Sep 2025",
            icon: "🎓",
            image: "certificates/pragathi-cohort5.pdf",  // ← add your PDF/image file here
            type: "badge"
        },
        {
            title: "AWS Academy Graduate – Generative AI Foundations",
            issuer: "AWS Academy",
            date: "Sep 2025",
            icon: "☁️",
            image: "certificates/aws-genai.pdf",  // ← add your PDF/image file here
            link: "https://www.credly.com/badges/e793efe4-b2c5-4564-ad27-bf154d4c9a38",
            type: "badge"
        },
        {
            title: "SQL (Basic)",
            issuer: "HackerRank",
            date: "Apr 2026",
            icon: "🗄️",
            image: "certificates/sql-basic.pdf",  // ← add your PDF/image file here
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
    // HOW TO ADD A NEW ACHIEVEMENT:
    // Copy one of the objects below, fill in your details, and add it to the array.
    achievements: [
        {
            title: "Google Developer Group (GDG) On Campus – Swag Kit Recognition",
            description: "I was selected to receive an official swag kit from the Google Developer Group On Campus program, recognizing my active participation and engagement in the developer community. The kit included a branded t-shirt, travel tumbler, stickers, and a backpack, representing my association with a global network of developers.",
            icon: "🎁",
            category: "Community Recognition",
            year: "2026",
            image: "certificates/gdg-swag-kit.jpeg"  // ← swag kit photo
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
        cgpa: "9.14",
        college: "GRT Institute of Engineering and Technology",
        degree: "B.E. Computer Science and Engineering (2023–2027)"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
