// Portfolio Data - Update this file to modify your portfolio content

const portfolioData = {
    // Skills Section
    skills: [
        {
            category: "Programming & Query Languages",
            icon: "💻",
            items: ["Python", "SQL"]
        },
        {
            category: "Libraries / Frameworks",
            icon: "📚",
            items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
        },
        {
            category: "Tools & Platforms",
            icon: "🛠️",
            items: ["MS Excel", "PowerPoint", "VS Code", "PyCharm", "GitHub"]
        },
        {
            category: "Web Technologies",
            icon: "🌐",
            items: ["HTML", "CSS", "JavaScript"]
        }
    ],

    // Experience Section
    experience: [
        {
            title: "Virtual Internship 6.0 Batch 10",
            company: "Infosys Springboard",
            period: "Nov 2025 - Jan 2026",
            location: "Virtual",
            description: "Completed a comprehensive virtual internship focused on full-stack development and machine learning integration.",
            achievements: [
                "Built a complete full-stack application (Edu2Job) using React.js and Django REST Framework",
                "Implemented secure authentication using JWT and Google OAuth 2.0 with RBAC",
                "Developed REST APIs for user profiles, education, skills, and prediction endpoints",
                "Designed responsive UI using React and Tailwind CSS",
                "Trained a Random Forest Classifier with >92% accuracy for job-role prediction",
                "Integrated ML model into backend for real-time prediction"
            ],
            technologies: ["React.js", "Django REST", "JWT", "OAuth 2.0", "Machine Learning", "Tailwind CSS"]
        }
        // Add more experiences here as you gain them
        // Example:
        // {
        //     title: "Frontend Developer Intern",
        //     company: "Company Name",
        //     period: "Month Year - Month Year",
        //     location: "City, Country",
        //     description: "Brief description of the role",
        //     achievements: [
        //         "Achievement 1",
        //         "Achievement 2"
        //     ],
        //     technologies: ["Tech1", "Tech2"]
        // }
    ],

    // Projects Section
    projects: [
        {
            title: "Sales Prediction using EDA",
            description: "Sales forecasting system using exploratory data analysis and regression models on retail sales data.",
            category: "Data Analysis",
            technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
            features: [
                "Cleaned and analyzed retail sales data using EDA techniques",
                "Applied statistical analysis to identify revenue trends and behavior",
                "Built a Linear Regression model achieving R² = 0.94",
                "Conducted outlier detection and time-series analysis"
            ],
            github: "https://github.com/Harini2harini",
            icon: "📊"
        },
        {
            title: "PyBank – CLI Banking System",
            description: "A Python-based terminal banking application supporting secure financial operations and data persistence.",
            category: "Python Development",
            technologies: ["Python", "JSON", "SHA-256", "OOP"],
            features: [
                "Modular architecture with OOPS concepts",
                "Secure authentication using SHA-256 PIN hashing",
                "JSON-based data persistence with backup handling",
                "Robust input validation for system reliability"
            ],
            github: "https://github.com/Harini2harini",
            icon: "🏦"
        },
        {
            title: "Edu2Job - Job Role Predictor",
            description: "A full-stack web application that predicts suitable job roles based on educational background.",
            category: "Full-Stack + ML",
            technologies: ["React.js", "Tailwind CSS", "Django REST", "Random Forest", "Google OAuth"],
            features: [
                "Responsive web application with React and Tailwind CSS",
                "Secure authentication with JWT and Google OAuth",
                "Integrated Random Forest Model for predictions",
                "RESTful API architecture with Django"
            ],
            github: "https://github.com/Harini2harini",
            live: "https://edu2-job-kohl.vercel.app",
            icon: "🎓"
        }
        // Add more projects here as you complete them
        // Example:
        // {
        //     title: "Project Name",
        //     description: "Project description",
        //     category: "Category (e.g., Frontend, Full-Stack, ML)",
        //     technologies: ["Tech1", "Tech2", "Tech3"],
        //     features: [
        //         "Feature 1",
        //         "Feature 2"
        //     ],
        //     github: "https://github.com/username/repo",
        //     live: "https://live-demo.com",
        //     icon: "🚀"
        // }
    ],

    // Social Links (already in HTML, but you can add more here)
    social: {
        github: "https://github.com/Harini2harini",
        linkedin: "https://www.linkedin.com/in/harini-m-3b4455325",
        email: "harini2510m@gmail.com",
        phone: "6380166344"
    },

    // Personal Information
    personal: {
        name: "M Harini",
        title: "Aspiring Frontend Developer",
        location: "India",
        availability: "Seeking Internship Opportunities"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}