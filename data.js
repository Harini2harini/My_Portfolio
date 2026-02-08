// Portfolio Data - Update this file to modify your portfolio content

const portfolioData = {
    // Skills Section
    skills: [
        {
            category: "Programming Languages",
            icon: "💻",
            items: ["Python", "Java", "JavaScript", "HTML", "CSS"]
        },
        
        {
            category: "Backend & Databases",
            icon: "🗄️",
            items: [ "MySQL"]
        },
        {
            category: "Tools & Platforms",
            icon: "🛠️",
            items: ["PyCharm", "Visual Studio Code", "GitHub"]
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
            title: "Virtual Internship 6.0 Batch 10",
            company: "Infosys Springboard",
            period: "November 2025",
            location: "Virutal",
            description: "Completed a comprehensive virtual internship focused on full-stack development and machine learning integration.",
            achievements: [
                "Built a complete full-stack application using React.js (frontend) and Django REST Framework (backend)",
                "Implemented secure authentication using JWT and Google OAuth 2.0, including role-based access control",
                "Developed REST APIs for user profiles, education, skills, job roles, and prediction endpoints",
                "Designed responsive UI screens using React and Tailwind CSS",
                "Trained a Random Forest Classifier achieving more than 92% accuracy for job-role prediction",
                "Integrated ML model into backend for real-time prediction"
            ],
            technologies: ["React.js", "Django", "JWT", "OAuth 2.0", "Machine Learning", "Tailwind CSS"]
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
            title: "Edu2Job - Job Role Predictor",
            description: "A full-stack web application that predicts suitable job roles based on educational background using machine learning.",
            category: "Full-Stack Development",
            technologies: ["React.js", "Django REST", "Machine Learning", "Tailwind CSS", "JWT"],
            features: [
                "Responsive web application built with React and Tailwind CSS",
                "Secure authentication with JWT and Google OAuth",
                "Random Forest ML model with 92%+ accuracy",
                "Real-time job role prediction",
                "Role-based access control",
                "RESTful API architecture"
            ],
            github: "https://github.com/Harini2harini",
            live: "https://edu2-job-kohl.vercel.app",
            icon: "🎓"
        },
        {
            title: "Sales Prediction System",
            description: "Data analysis and prediction system for sales forecasting using exploratory data analysis and regression models.",
            category: "Data Analysis",
            technologies: ["Python", "Pandas", "Machine Learning", "Data Visualization"],
            features: [
                "Cleaned and analyzed sales data using EDA techniques",
                "Built multiple regression models for prediction",
                "Visualized trends and patterns in sales data",
                "Generated actionable insights from data"
            ],
            github: "https://github.com/Harini2harini",
            icon: "📊"
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