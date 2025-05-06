## Student Management System | Architectural Documentation 📂

- [File and Folders](#file-and-folders) 📌

---

### Project File and Folder Structure 🌳

<section id="file-and-folders">
This document outlines the file and folder structure of the Student Management System project, providing a clear understanding of the organization of the codebase. The project incorporates standard Next.js conventions alongside custom directories to ensure a well-structured and maintainable application.

The root directory contains essential Next.js configuration files and the following key directories:

- **/src**: This directory houses the core codebase of the application. It contains all the business logic 🧠, UI components 🧩, routing definitions 🗺️, state management ⚙️, and validation schemas ✅.
- **/public**: This directory stores all static assets such as images 🖼️, fonts 🖋️, and other publicly accessible files. These assets are served directly by Next.js.
- **/reference**: This directory contains reference images of the user interface designs 🎨, serving as a visual guide during development.
- **components.json**: This file holds the configuration settings for the `shadcn-ui` component library ⚙️, defining the style and behavior of the UI elements.

Within the **/src** directory, the codebase is further organized into the following key modules:

- **/components**: This directory contains all the reusable UI components 🧩 used throughout the application. These components are designed to be modular and maintainable.
- **/lib**: This directory houses utility functions 🛠️ and setup configurations for various libraries integrated into the project. This may include database connection setup 🔗, authentication helpers 🔑, or other utility modules.
- **/app**: This directory, following Next.js's App Router convention, defines the application's routes 🧭 and page structure. Each folder within `/app` corresponds to a specific route segment.
- **/stores**: This directory contains the state management implementation using Zustand ⚙️. It houses all the application-wide state providers and their associated logic.
- **/validations**: This directory contains all the Zod TypeScript schemas ✅ used for data validation and sanitization across the application's forms and data handling processes. These schemas ensure data integrity and type safety.

</section>