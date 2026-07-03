# 🏏 Crickty – Ultimate Cricket Player Cards

> Transforming cricket statistics into **EA FC/FIFA Ultimate Team–style player cards** using Machine Learning.

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Python](https://img.shields.io/badge/Python-FastAPI-yellow)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

Crickty is a full-stack cricket analytics platform that transforms real cricket statistics into beautiful **EA FC/FIFA-inspired player cards**.

Instead of displaying raw numbers, Crickty uses a Machine Learning pipeline to generate player ratings, classify player archetypes, and visualize strengths through collectible-style cards.

The project combines modern backend development, frontend design, data science, and sports analytics into one application.

---

## ✨ Features

### 🎴 FIFA-Style Player Cards

Generate collectible player cards featuring:

- Overall Rating (0–99)
- Batting
- Bowling
- Fielding
- Power
- Consistency
- Experience

---

### 📊 Cricket Analytics

Analyze players using real cricket statistics:

- Runs
- Batting Average
- Strike Rate
- Boundary Percentage
- Wickets
- Economy Rate
- Bowling Average
- Dot Ball Percentage
- Matches Played
- Catches

---

### 🤖 Machine Learning Rating Engine

The ML engine analyzes historical player performance to generate:

- Overall Rating
- Individual Attributes
- Player Strengths
- Weaknesses
- Performance Tier

---

### 🧠 Player Archetypes

Automatically classify players into categories such as:

- Aggressive Opener
- Anchor
- Finisher
- Strike Bowler
- Death Overs Specialist
- All-Rounder
- Spin Wizard
- Pace Spearhead

using **K-Means Clustering**.

---

### 🔍 Smart Search

Search players by:

- Name
- Team
- Country
- Role
- Rating
- Batting Style
- Bowling Style

---

### ⚖️ Player Comparison

Compare any two players side-by-side.

Example:

- Virat Kohli vs Joe Root
- Jasprit Bumrah vs Mitchell Starc

Compare:

- Overall Rating
- Batting
- Bowling
- Fielding
- Experience
- Impact Score

---

### 🎯 Similar Players

Discover players with similar playing styles using similarity scoring.

Example

```
Virat Kohli
      ↓
Babar Azam
      ↓
Joe Root
      ↓
Kane Williamson
```

---

### 📈 Performance Dashboard

Interactive charts showing:

- Rating Progress
- Run Distribution
- Wicket Trends
- Strike Rate Analysis
- Economy Analysis

---

### 📥 Export Player Cards

Download player cards as high-quality PNG images for sharing.

---

## 🛠 Tech Stack

### Frontend

- React
- Tailwind CSS
- Axios

### Backend

- Java 21
- Spring Boot
- Spring MVC
- Spring Data JPA

### Machine Learning

- Python
- FastAPI
- Pandas
- NumPy
- Scikit-learn

### Database

- PostgreSQL

### Version Control

- Git
- GitHub

---

## 🧠 Machine Learning Pipeline

```text
Raw Cricket Dataset
        │
        ▼
 Data Cleaning
        │
        ▼
Feature Engineering
        │
        ▼
 Feature Scaling
        │
        ▼
 K-Means Clustering
        │
        ▼
 Rating Generation
        │
        ▼
 FIFA-style Player Card
```

---

## 📂 Dataset

This project uses publicly available cricket datasets, including:

- IPL Match Dataset
- Ball-by-Ball Dataset
- Historical International Cricket Statistics

---

## 📁 Project Structure

```text
Crickty
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
├── ml-service/
│   ├── main.py
│   ├── model.py
│   ├── preprocessing.py
│   └── requirements.txt
│
├── datasets/
│
├── database/
│
└── README.md
```

---

## 🚀 Future Enhancements

- Live match integration
- Fantasy XI recommendation
- AI-generated player insights
- Team strength prediction
- Match win probability prediction
- Player value estimation
- Card animations
- Dark mode
- Authentication & user collections

---

## 📸 Screenshots

Coming Soon

- Home Page
- Player Card
- Comparison Dashboard
- Analytics Dashboard
- Rating Visualization

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full Stack Development
- REST API Design
- Spring Boot Development
- React Frontend Development
- Machine Learning Integration
- Feature Engineering
- Sports Analytics
- Data Visualization
- Microservice Architecture

---

## 🌟 Why This Project?

Unlike traditional CRUD sports applications, Crickty transforms raw cricket statistics into meaningful, visually engaging FIFA-style player cards using Machine Learning and modern web technologies.

The project showcases how software engineering and data science can work together to build an interactive sports analytics platform.

---

## 👨‍💻 Author

**Aryan Dev Tyagi**

GitHub: https://github.com/aryandevtyagi10

---

## ⭐ Support

If you found this project interesting, consider giving it a ⭐ on GitHub!