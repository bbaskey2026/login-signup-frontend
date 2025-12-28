Login & Signup Frontend Demo
A simple authentication demo application using HTML, CSS, and JavaScript with localStorage for data persistence.

Features

User Registration: Create new accounts with email and password
User Login: Authenticate existing users
Dashboard: Protected page displaying welcome message after successful login
Local Storage: User data is stored locally in the browser
Dark Mode Design: Modern dark theme with white text and borders
Responsive Forms: Clean, centered form layouts with hover effects

Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)
No server or installation required

Installation & Setup

Clone or download the project to your local machine
Open in a browser:

Navigate to the project folder
Open home.html in your web browser
Or right-click → "Open with" → Select your browser


No build process needed - it runs directly in the browser!

How to Use
Signing Up

Navigate to the signup page
Enter your email and password
Click "Sign Up"
Your account is saved to browser localStorage
You'll be redirected to login

Logging In

Go to the login page
Enter your registered email and password
Click "Login"
Access the dashboard with a personalized welcome message

Dashboard

After successful login, you're redirected to the dashboard
Your name/email is displayed
Click "Logout" to return to the login page

Technical Details
localStorage Implementation

User credentials are stored in localStorage as JSON
Key: users (stores all registered users)
Session key: loggedInUser (tracks current logged-in user)

File Descriptions
html/home.html

Landing page with navigation to login/signup

html/login.html

Login form with email and password fields
Validates against stored user data

html/signup.html

Registration form with email and password input
Stores new user to localStorage

html/dashboard.html

Protected page showing personalized welcome message
Displays user information
Logout functionality

script/script.js

Handles login/signup logic
localStorage management
Form validation
Page redirects

script/dashboard.js

Retrieves logged-in user information
Displays welcome message
Handles logout functionality

style/style.css

Dark mode styling (black background, white text/borders)
Responsive form design
Hover effects and transitions
Shadow and border styling

Important Notes
⚠️ Security Notice: This is a demo application for educational purposes only. In production:

Never store passwords in plain text
Use proper authentication (OAuth, JWT, etc.)
Implement server-side validation
Use HTTPS for data transmission
Hash and salt passwords

Testing the Demo
Test Case 1: New User

Signup with email: user@example.com, password: password123
Login with the same credentials
View personalized dashboard

Test Case 2: Existing User

Logout and login again with the same credentials
Should see the same user information

Test Case 3: Invalid Credentials

Try logging in with wrong password
Error message appears, stay on login page

Browser Storage
Open Developer Tools to view stored data:

Chrome/Firefox/Edge: Press F12 → Application/Storage → LocalStorage
Safari: Develop → Show Storage Inspector

You'll see the users array with all registered accounts.
