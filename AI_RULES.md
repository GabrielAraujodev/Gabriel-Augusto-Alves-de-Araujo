# AI Development Rules

This document outlines the technology stack and specific rules for AI-assisted development of this application. Following these guidelines ensures consistency, maintainability, and adherence to the project's architecture.

## Tech Stack

This is an Angular application built with the following core technologies:

- **Angular 17:** The primary framework for building the application.
- **TypeScript:** The language used for all application code.
- **Angular Material:** The UI component library for creating a consistent and modern user interface.
- **Angular Router:** For handling all client-side navigation and routing.
- **RxJS:** Used extensively for managing asynchronous operations and data streams.
- **Express.js:** Powers the server-side rendering (SSR) capabilities of the application.
- **CSS:** For styling components, with global styles located in `src/styles.css`.

## Library Usage Rules

To maintain code quality and consistency, please adhere to the following rules when adding or modifying features:

- **UI Components:** Always use components from the **Angular Material** library (`@angular/material`) for UI elements like buttons, cards, form fields, and navigation. Do not introduce other UI component libraries without discussion.
- **Routing:** All routing and navigation must be handled by **Angular Router** (`@angular/router`). Define routes in `src/app/app-routing.module.ts`.
- **Forms:** For creating and managing forms, use **Angular's ReactiveFormsModule**. It provides a robust and scalable way to handle user input and validation.
- **Asynchronous Operations:** Leverage **RxJS** and its operators (e.g., `map`, `filter`, `switchMap`) for handling asynchronous events, such as HTTP requests.
- **Styling:** Write component-specific styles in their respective `.css` files. Global styles should be placed in `src/styles.css`.
- **State Management:** For simple cases, rely on Angular services and RxJS `BehaviorSubject` to manage state. Avoid adding complex state management libraries like NgRx unless absolutely necessary.
- **Dependencies:** Before adding any new third-party dependency, verify that its functionality is not already provided by Angular or another existing library.