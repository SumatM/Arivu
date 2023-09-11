# Arivu <img width='20%' src="https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/favicon.ico"/>



Arivu is an online platform connecting teachers and students, providing a dynamic learning environment.


## Table of Contents
- [About Arivu](#about-arivu)
- [Landing](#landing)
- [Footer](#footer)
- [Login](#login)
- [SignUp](#signup)
- [User Dashboard](#user-dashboard)
- [Admin Dashboard](#admin-dashboard)
- [Admin Navbar](#admin-navbar)
- [Teacher Navbar](#teacher-navbar)
- [Student Navbar](#student-navbar)
- [Payment](#payment)
- [Course](#course)
- [Tech Stack](#tech-stack)
- [Functionalities](#functionalities)
- [Challenges](#challenges)
- [Collaborators](#collaborators)
- [Getting Started](#getting-started)
- [Issues and Feedback](#issues-and-feedback)

## About Arivu

Arivu allows teachers to create personalized courses, while students can explore and purchase courses tailored to their needs, revolutionizing online education.

## Landing 

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/landingPage.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/landingPage.jpg) |


## Footer 

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/footer.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/footer.jpg) |


## Login 

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/loginPage.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/loginpage.jpg) |


## SignUp 

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/signuppage.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/signupPage.jpg) |


## User Dashboard 

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/userPage.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/userDashboard.jpg) |

## Admin Dashboard 

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/adminDashboard.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/adminDashboard.jpg) |


## Admin Navbar

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/adminDashboard.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/adminHamburger.jpg) |

## Teacher Navbar

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/teachernavbar.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/teacherHamburger.jpg) |

## Student Navbar

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View]() | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/studentHamburger.jpg) |

## Payment

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/paymentModal.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/UPI.jpg) |


## Course

| Desktop View | Mobile View |
| :---: | :---: |
| ![Deskstop View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/desktopScreen/coursePage.png) | ![Mobile View](https://raw.githubusercontent.com/SumatM/Arivu/main/frontend/public/mobileScreen/coursePage.jpg) |




## Tech Stack-

<p float="left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="120" height="100">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-redux-283024.png" width="100" height="100">
   <img src="https://img.icons8.com/color/512/chakra-ui.png" width="100" height="100">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="150" height="90">
   <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" width="100" height="100">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA972a1NXwGHTIpgjxpRdu1DD5te1evggDgjNvM_FcbtGxaPYrHbV27RNzJSA_ZhrY28&usqp=CAU" width="100" height="100">
   <img src="https://devkico.itexto.com.br/wp-content/uploads/2013/10/mongodb-leaf-300x300.png" width="100" height="100">
   
 </p>



 ## Functionalities associated with this website



**Authentication and Authorization:**

- **Frontend & Backend:** Implemented secure authentication and authorization mechanisms for both frontend and backend.
- **Roles:** Three main roles are defined: Students, Teachers, and Admin.
- **Permissions:**
  - **Students:** Can read and update their own data, purchase courses, and manage their subscription list.
  - **Teachers:** Have CRUD (Create, Read, Update, Delete) capabilities for courses and can add videos under their courses.
  - **Admin:** Has the authority to:
    - Read all user data, course data, and video data.
    - Delete users, courses, or videos if suspicious activity is detected.

**User-Friendly Interface:**

- **Responsive Design:** The web app is fully responsive, catering to users on various devices. It's recommended that teachers and administrators use large-screen devices for optimal functionality.

**Functionality by Role:**

- **Students:**
  - Can purchase courses.
  - Manage their subscription list.
  - Perform read and update operations on their own data.
- **Teachers:**
  - Create and manage courses.
  - Add videos under their courses.
  - Perform CRUD operations on their own courses.
- **Admin:**
  - Access and review all user data, course data, and video data.
  - Detect and address suspicious activity by deleting users, courses, or videos.


## Challenges

As the team lead of this project, I encountered some challenges when it came to gathering collaborators and addressing certain issues. However, I took the opportunity to refine my skills in effective communication, time management, and motivation, aiming to ensure precise and successful outcomes from the team.


## Demo Account

You can access the web app using a demo account to explore its features without the need to create your own account. Click the "Demo Login" button on the login page to access the following credentials:

- **Username:** atul@email.com
- **Password:** atul12345

Please note that this is a demo account for testing purposes only and may have limited functionality.


## Collaborators

Thanks to our team members for their contributions:

- [Sumat Mallick](https://github.com/SumatM) - Backend development, UI and Frontend integration .
- [Arun Saradgi](https://github.com/arunsaradgi) - Backend Authication & UserPage.
- [Animesh Kalita](https://github.com/Ak-nut-47) - Landing Page.
- [Mohd Asim](https://github.com/Asimji) - Complete Admin Routes.
- [Deepak Yadav](https://github.com/Deepak-25yadav) - Indivual Course Page.

## Getting Started

1. Clone the repository: `git clone https://github.com/SumatM/Arivu.git`
2. Install dependencies for frontend and backend.


## Issues and Feedback

Encounter issues or have feedback? [Create an issue](https://github.com/SumatM/Arivu/issues). We value your input and aim to improve the platform continuously.


