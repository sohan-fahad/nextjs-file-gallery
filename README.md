# Document Upload and Editing App

This is a document upload and editing application built with Tailwind, TypeScript, and React.js. It allows users to upload PDF files, add elements (text and/or images) to specific positions within the document, view the edited document, and even dictate the position (coordinates) for element placement. Plus, we've added a sprinkle of humor to make your experience enjoyable!

## Table of Contents
- [Requirements](#requirements)
- [Technology Stack](#technology-stack)

## Requirements

### Document Upload
- **Upload PDF Files:** Users can easily upload PDF files from their devices.
- **Progress Indicator:** A progress indicator is displayed during the upload process.
- **Local Storage:** The uploaded files are stored locally with a maximum file size of 1 MB.
- **Multiple File Upload:** Users can upload multiple files simultaneously.

### Uploaded Document Editing
- **Drag-and-Drop Elements:** Users can add elements (text and/or images) to specific positions within the document using drag-and-drop functionality.
- **Local Storage/State:** Necessary information is saved in the user's local storage or state to ensure that if the page reloads, all elements remain in their original positions.
- **User-Friendly UI:** The user interface is designed to be user-friendly, and validations are handled appropriately.

### Document Coordination Dictation
- **Coordinate Dictation:** Users can specify the position (coordinates) where they want to place an element on the document, e.g., x=34, y=200.

### Document Viewing
- **View Edited Document:** Users can view the document after adding elements.
- **Zoom-In and Zoom-Out:** Zoom-in and zoom-out functionality is implemented at any specific position within the document.

## Technology Stack

This application is built using the following technologies:

- **Tailwind CSS:** For fast and responsive UI development.
- **TypeScript:** For static typing and improved developer experience.
- **React.js:** For building the user interface.
- **Custom Hooks:** Custom hooks are extensively used to manage state and functionality.

