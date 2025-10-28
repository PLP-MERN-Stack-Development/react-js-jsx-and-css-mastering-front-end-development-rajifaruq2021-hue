# Week 3 Assignment: React Task Manager & User Directory

This is a responsive React application built with Vite, TypeScript, and styled with Tailwind CSS. The project demonstrates a component-based architecture, state management with React Hooks (`useState`, `useEffect`), and integration with a third-party API.

## Live Application URL

*My live application will be available here after deployment.*

## Application Screenshots

![Task Manager Screenshot](application-screenshot.png)

## Features

-   **Component Architecture:** The application is built with reusable components like `Button`, `Card`, `Navbar`, and `Footer`.
-   **State Management:**
    -   Uses a custom `useLocalStorage` hook to persist the task list, so tasks are not lost on page refresh.
    -   Manages the state for the new task input field.
-   **API Integration:**
    -   Fetches a list of users from the `jsonplaceholder.typicode.com` API.
    -   Handles loading and error states gracefully while fetching data.
-   **Styling:** Styled with the modern, utility-first CSS framework, Tailwind CSS.

## Setup and Installation

Follow these steps to run the project locally.

1.  **Prerequisites:**
    -   Node.js (v18 or higher)
    -   npm (comes with Node.js)

2.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```

3.  **Navigate to the project directory:**
    ```bash
    cd my-awesome-app
    ```

4.  **Install dependencies:**
    ```bash
    npm install
    ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```

6.  Open your browser and navigate to `http://localhost:5173` to see the application running.