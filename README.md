# Shellproject

# Project Overview

This project automates the testing of the "shellrecharge" website using Cypress. The test case focuses on handling cookie banners, selecting a country from a dropdown, verifying redirection, and interactions with the redirected page.

# Test Scenarios

1. Open the Shell Recharge website (`https://shellrecharge.com/en`).
2. Select "United Kingdom" for the select your country field.
3. Click on "My Account".
4. Click on the Location fields and search for "Wales"

# Tools Used

- *Cypress*: End-to-end testing framework.
- *JavaScript*: Scripting language for writing Cypress tests.
- *Excel file integration*: Data-driven testing using Excel.

# Test Case

The core test steps are as follows:

- *Step 1*: Visit the website.
- *Step 2*: Check for and accept any cookie banners.
- *Step 3*: Click on the international dropdown and select the country ("United Kingdom") from the Excel data.
- *Step 4*: Verify that the selection is successful.
- *Step 5*: Click the hamburger menu and follow the "My Account" link to verify redirection.
- *Step 6*: On the redirected page, interact with the input field to search for a location "Wales".

# Prerequisites

- Install **Cypress** globally or as a project dependency.
- Ensure you have an Excel file with the country data available.

# Cypress Installation

*Command Prompt*
npm install cypress --save-dev

# How to Run the Test
*Command Prompt*
npx cypress open

# Test Output
The test load the page (`https://shellrecharge.com/en`), will handle cookie banner, then clicks on dropdown, selects the crountry "United Kingdom", handles redirection upon clicking "My Account", and waits untill the page is loaded then "Wales" location is successfully entered into the search field.

Author
Prakash Anirudh