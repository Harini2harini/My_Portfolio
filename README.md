# M Harini — Data Analyst Portfolio

A responsive portfolio website built with HTML, Tailwind CSS, and JavaScript, showcasing data analysis projects, Power BI dashboards, and experience.

## Structure
- `index.html` — main page
- `styles.css` — custom styles
- `script.js` — dynamic rendering logic
- `data.js` — all editable content (skills, experience, projects, certifications, achievements)
- `Resume.pdf` — downloadable resume
- `profile.jpg` / `profile.svg` — profile photo
- `assets/dashboards/` — dashboard screenshots, grouped in one folder per project:
  - `coffee-sales/` — Coffee Sales Analysis Dashboard
  - `amazon-sales/` — Amazon Sales Dashboard (Executive + Product Analytics pages)
  - `netflix/` — Netflix Content Dashboard
  - `hr-attrition/` — HR Employee Attrition Analysis Dashboard (Attrition + Worklife pages)
  - `hospital-management/` — Hospital Management Dashboard (Overview + Revenue + Doctors/Patients pages)
  - `customer-churn/` — Customer Churn Analysis Dashboard

> **Note:** The HR Attrition dashboard's "Overview" page screenshot is still missing. It and the Hospital dashboard's Overview page were both originally uploaded as `Page_1_-_Overview.jpg`, and the second one overwrote the first before it could be saved. The HR project currently shows only its Attrition and Worklife pages. Re-upload that missing image (any unique filename works) and I'll drop it into `assets/dashboards/hr-attrition/` and add it to the project's image list.

## Run locally
```
npx serve .
```
