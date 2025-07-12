# lendsqr-fe-test

![Lendsqr log](./public/logo.svg "Optional title text")

## Table of Contents

- [lendsqr-fe-test](#)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Live Demo](#live-demo)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
  - [API Integration](#api-integration)
  - [Data Persistence](#data-persistence)
  - [Responsiveness](#responsiveness)
  - [Design Reference](#design-reference)
  - [Acknowledgements](#acknowledgements)

---

## Project Description

This repository contains a frontend assessment project for Lendsqr, mirroring a snippet of their Admin console as per the provided Figma design. The primary goal was to demonstrate competence in building key application pages, consuming data from a mock API, ensuring responsiveness, and managing client-side data persistence.

The application is built using **Next.js** and **TypeScript**, with styles processed by **SCSS**.

## Routes

- **Sign In:** [/sign-in](https://emmanuel-ezema-lendsqr-fe-test.netlify.app/sign-in)
- **Dashboard:** [/dashboard](https://emmanuel-ezema-lendsqr-fe-test.netlify.app/dashboard)
- **Users:** [/sign-in](https://emmanuel-ezema-lendsqr-fe-test.netlify.app/users)
- **User Details:** /user

## Features

This project implements the following core features:

- **Login Page:** User authentication interface.
- **Dashboard Page:** Overview of key metrics.
- **Users Page:** Displays a list of 500 user records fetched from a mock API.
- **User Details Page:** Shows comprehensive details for a single user, with data persisted via IndexedDB.
- **Mobile Responsiveness:** The entire application adapts gracefully to various screen sizes (mobile, tablet, desktop).
- **Dynamic Page Titles & Favicon:** Each page features a unique and descriptive title for better UX and SEO, and a custom favicon is set.

## Live Demo

[Click here to view the live demo](https://emmanuel-ezema-lendsqr-fe-test.netlify.app)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [SCSS (Sass)](https://sass-lang.com/)
- **Client-side Database:** [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) (for user details persistence)
- **State Management:** React's built-in state management (e.g., `useState`, `useContext`)
- **Routing:** Next.js Router (App Router)

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- **Node.js:** v18.x or higher (recommended).
- **npm** or **Yarn**: npm v8.x+ or Yarn v1.x+.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/lendsqr-fe-test.git
    cd lendsqr-fe-test
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open **http://localhost:3000** in your browser to see the application. The page will reload automatically as you make edits.

## API Integration

The application pulls user data from a mock API.

- The API was created using [Mocky.io](https://mocky.io/) and [JSON-Generator.com](https://json-generator.com/) to simulate the required 500 user records, as specified in the assessment.
- The API endpoint for fetching users is configured within the application's environment variables or directly in the data fetching logic.

## Data Persistence

User details displayed on the "User Details" page are stored and retrieved using **IndexedDB**. This ensures that once a user's details are loaded, they can be quickly accessed on subsequent visits to the details page without re-fetching from the (mock) API, improving user experience.

## Responsiveness

The application is designed with a mobile-first approach and is fully responsive across different devices. SCSS was extensively used to manage media queries and modularize styles, ensuring a seamless user experience on mobile, tablet, and desktop screens.

## Design Reference

The design for this project was derived from the following Figma file:
[Figma Design Link](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0)

## Acknowledgements

- **Lendsqr:** For providing this assessment opportunity.
- **Next.js:** For the powerful React framework.
- **TypeScript:** For type safety and improved developer experience.
- **Sass:** For robust CSS pre-processing.
