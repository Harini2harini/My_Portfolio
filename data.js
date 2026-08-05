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
            items: ["Power BI (DAX, Power Query)", "MS Excel", "VS Code", "PyCharm"]
        },
        {
            category: "Analytics Skills",
            icon: "📈",
            items: ["Data Visualization", "Business Intelligence", "Dashboard Design", "Data Storytelling", "Data Cleaning", "EDA", "KPI Reporting"]
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
            github: "https://github.com/Harini2harini/Sales_Prediction",
            icon: "📊",
            highlight: "R² = 0.94 Accuracy"
        },
        {
            title: "Coffee Sales Analysis Dashboard",
            subtitle: "Power BI | 150K+ Transactions",
            description: "Interactive Power BI dashboard built on a coffee shop sales dataset covering revenue trends, product performance, and store-level insights.",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "Power Query", "Data Visualization"],
            features: [
                "Built an interactive Power BI dashboard on a coffee shop sales dataset (150K+ transactions) covering revenue trends, product performance, and store-level insights",
                "Created DAX measures including Total Revenue (SUMX), Average Order Value (DIVIDE), and calculated columns for day-of-week analysis with custom sort ordering",
                "Designed dynamic visuals: KPI cards, sales trend line chart, top 5 products bar chart, category revenue breakdown, and day-wise sales pattern",
                "Implemented interactive slicers (Month, Location, Category) and a Key Insights panel summarizing key business findings"
            ],
            github: "https://github.com/Harini2harini/Coffee_Sales_PowerBI_Dashboard",
            icon: "☕",
            image: "assets/dashboards/coffee-sales/Dashboard.jpg",
            highlight: "150K+ Transactions"
        },
        {
            title: "Amazon Sales Dashboard",
            subtitle: "Power BI | Executive & Product Analytics",
            description: "Two-page Power BI dashboard analyzing Amazon-style e-commerce sales data, tracking revenue, orders, and product performance across states and categories.",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "Power Query", "Data Visualization", "Geo Mapping"],
            features: [
                "Built an Executive Sales Dashboard tracking revenue (₹78.59M), total orders (120K), cancellation rate, and quantity sold across a 4-month period",
                "Designed a Product Analytics Dashboard highlighting best-selling category, revenue by size, and top 10 products by revenue and quantity",
                "Visualized revenue by category and order status with donut and bar charts for quick executive insight",
                "Mapped total revenue by state across India and built a Top 5 States by Revenue summary table",
                "Implemented Category, Status, State, and Month slicers for dynamic, drill-down analysis"
            ],
            github: "https://github.com/Harini2harini/Amazon_Sales_PowerBI_Dashboard",
            icon: "📦",
            image: "assets/dashboards/amazon-sales/Page_1_-_Executive_Sales_Dashboard.jpg",
            images: ["assets/dashboards/amazon-sales/Page_1_-_Executive_Sales_Dashboard.jpg", "assets/dashboards/amazon-sales/Page_2_-_Product_Analytics_Dashboard.jpg"],
            highlight: "₹78.59M Revenue Tracked"
        },
        {
            title: "Netflix Content Dashboard",
            subtitle: "Power BI | Content Catalog Analysis",
            description: "Power BI dashboard analyzing Netflix's content catalog of 8,800+ titles to surface trends across type, rating, genre, and release year.",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "Power Query", "Geo Mapping"],
            features: [
                "Analyzed a catalog of 8,809 titles (6,131 movies and 2,676 TV shows) across 74 genres",
                "Built visuals for total titles by type, rating, and release year to reveal content trends over time",
                "Created a country-level map visual to show where titles are produced globally",
                "Implemented Type, Rating, Release Year, Genre, and Month slicers for interactive filtering"
            ],
            github: "https://github.com/Harini2harini/Netflix_Content_Analysis_Dashboard",
            icon: "🎬",
            image: "assets/dashboards/netflix/Netflix_Dashboard.jpg",
            highlight: "8,809 Titles Analyzed"
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
            github: "https://github.com/Harini2harini/Superstore_Analysis",
            icon: "🏪",
            highlight: "9,994 Records Analyzed"
        },
        {
            title: "HR Employee Attrition Analysis Dashboard",
            subtitle: "Power BI | 1,470 Employees, 3-Page Analysis",
            description: "Interactive 3-page Power BI dashboard analyzing employee attrition patterns using the IBM HR Employee Attrition dataset, uncovering key drivers behind turnover for actionable HR insights.",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "Power Query", "Decomposition Tree", "Data Segmentation"],
            features: [
                "Built a 3-page dashboard (Overview, Attrition, Worklife) analyzing 1,470 employees across 35 attributes",
                "Created DAX measures (CALCULATE, DIVIDE, filtered aggregations) and calculated groups for Age Group and Income Band segmentation",
                "Built a decomposition tree for multi-level root-cause drill-down (Department → OverTime → BusinessTravel)",
                "Found employees working overtime leave at 3x the rate of others (30.5% vs 10.4%), the strongest single attrition driver",
                "Identified Sales Representatives have the highest attrition by role (~40%) despite comparable pay across departments"
            ],
            github: "https://github.com/Harini2harini/HR_Analysis_PowerBI_Dashboard",
            icon: "🧑‍💼",
            image: "assets/dashboards/hr-attrition/hr-attrition.jpg",
            images: ["assets/dashboards/hr-attrition/hr-overview.jpg","assets/dashboards/hr-attrition/hr-attrition.jpg", "assets/dashboards/hr-attrition/hr-worklife.jpg"],
            highlight: "1,470 Employees Analyzed"
        },
        {
            title: "Hospital Management Dashboard",
            subtitle: "Power BI | Star Schema, 3-Page Analysis",
            description: "3-page interactive Power BI dashboard analyzing hospital operations across appointments, revenue, and doctor performance, built on a 5-table star schema data model.",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "Power Query", "Star Schema Data Modeling"],
            features: [
                "Designed a star schema data model connecting 5 tables (appointments, billing, doctors, patients, treatments) with proper relationships",
                "Built DAX measures including Collection Rate, No-Show Rate, Failed Revenue, Pending Revenue, and Avg Doctor Experience",
                "Built 3 pages: Executive Overview, Revenue & Billing, and Doctor & Patient Performance, with page navigation and 6 interactive slicers",
                "Found only 31% of billed revenue is collected, with failed payments (193K) exceeding collected revenue (173K)",
                "Identified 49% of appointments result in no-show or cancellation, a significant operational gap"
            ],
            github: "https://github.com/Harini2harini/Hospital_Analysis_Dashboard",
            icon: "🏥",
            image: "assets/dashboards/hospital-management/hospital-overview.jpg",
            images: ["assets/dashboards/hospital-management/hospital-overview.jpg", "assets/dashboards/hospital-management/hospital-revenue.jpg", "assets/dashboards/hospital-management/hospital-doctors-patients.jpg"],
            highlight: "551.25K Revenue Tracked"
        },
        {
            title: "Customer Churn Analysis Dashboard",
            subtitle: "Power BI | 500K+ Records",
            description: "Interactive Power BI dashboard analyzing customer churn across 500K+ records from training and testing datasets to uncover key churn drivers.",
            category: "Power BI / Business Intelligence",
            technologies: ["Power BI", "DAX", "Power Query"],
            features: [
                "Loaded and merged training (~440K rows) and testing (~64K rows) datasets in Power Query",
                "Created custom columns (Churn Label, Age Group, Age Group Sort) and DAX measures for Churn Rate and Retained Customers",
                "Designed KPI cards, donut and bar charts, and slicers for Age Group, Subscription, Contract Length, and Gender",
                "Found churn rate stands at 55.52%, with monthly contract customers and customers with higher support calls churning the most",
                "Identified younger customers (under 30) show a higher churn tendency"
            ],
            github: "https://github.com/Harini2harini/Customer_Churn_Analysis_Dashboard",
            icon: "📉",
            image: "assets/dashboards/customer-churn/customer-churn.jpg",
            highlight: "500K+ Records Analyzed"
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
            github: "https://github.com/Harini2harini/Edu2Job",
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
        },
        {
            title: "70+ Problems Solved on LeetCode",
            description: "Solved 70+ problems on LeetCode with a focus on SQL and data manipulation, strengthening query-writing and data-handling skills relevant to analytics roles.",
            icon: "🧩",
            category: "Technical Practice",
            year: "2026",
            link: "https://leetcode.com/u/Harini2harini/"
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
        phone: "6380166344",
        leetcode: "https://leetcode.com/u/Harini2harini/"
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
