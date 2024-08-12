# Flashcard Learning Tool

This project is a simple flashcard learning tool built with React, designed to help users study and memorize information efficiently. It includes features for displaying, flipping, and navigating through flashcards, as well as an internal dashboard for managing flashcards.

## Features

- **Display Flashcards**: Present flashcards one at a time, with a question or term on the front and the answer or definition on the back.
- **Flip Card**: Click on a flashcard to flip it and reveal the answer.
- **Next/Previous Navigation**: Navigate through the set of flashcards using "Next" and "Previous" buttons.
- **Internal Dashboard**: Admin interface to add, edit, and delete flashcards.
- **Database Integration**: Use MySQL to store and retrieve flashcards.

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhideepkumar/tuf-flashcards
   cd tuf-flashcards
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MySQL database:
   - Create a database named `tuf-flashcards`.
   - Run the SQL script to create the necessary tables.

4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add your MySQL credentials.

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **User Interface**: Navigate through flashcards and flip them to see answers.
- **Admin Dashboard**: Add, edit, and delete flashcards.