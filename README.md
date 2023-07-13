# React Portfolio

This project is a React-based portfolio that showcases your web development projects and provides an overview of your skills and experience. The portfolio is designed to help you stand out as a developer by utilizing the latest technologies and demonstrating your proficiency in React.

## Live Demo

A live demo of the portfolio can be accessed at [https://trengland.github.io/react-portfolio/](https://trengland.github.io/react-portfolio/).

## User Story

As an employer looking for candidates with experience building single-page applications, I want to view a potential employee's deployed React portfolio of work samples so that I can assess whether they're a good candidate for an open position.

## Acceptance Criteria

- The portfolio is a single-page application.
- The portfolio consists of a header, a section for content, and a footer.
- The header displays the developer's name and navigation with titles corresponding to different sections of the portfolio.
- The navigation titles include "About Me," "Portfolio," "Contact," and "Resume," with the currently selected section highlighted.
- Clicking on a navigation title updates the content section without the page reloading and highlights the selected title.
- By default, when the portfolio is loaded for the first time, the "About Me" section is selected.
- The "About Me" section includes a recent photo or avatar of the developer and a short bio.
- The "Portfolio" section displays titled images of six of the developer’s applications, along with links to both the deployed applications and the corresponding GitHub repositories.
- The "Contact" section includes a contact form with fields for a name, an email address, and a message.
- When moving the cursor out of a form field without entering text, a notification is displayed indicating that the field is required.
- When entering text into the email address field, a notification is displayed if an invalid email address is entered.
- The "Resume" section includes a link to a downloadable resume and a list of the developer’s proficiencies.
- The footer displays text or icon links to the developer’s GitHub and LinkedIn profiles, as well as their profile on a third platform (Stack Overflow, Twitter).

## Getting Started

To run the portfolio application locally, follow these steps:

1. Clone the GitHub repository:
```
git clone https://github.com/Trengland/react-portfolio.git
```

2. Navigate to the project directory:
```
cd react-portfolio
```

3. Install the dependencies:
```
npm install
```

4. Run the application:
```
npm start
```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

The portfolio application follows the Create React App structure with the following components:

- **Header**: A reusable component that appears on multiple pages and displays the developer's name and navigation.
- **Navigation**: A component within the header that conditionally renders different sections of the portfolio based on user selection.
- **Project**: A component that represents a single project and is used multiple times in the "Portfolio" section.
- **Footer**: A reusable component that appears on multiple pages and displays links to the developer's GitHub, LinkedIn, and a third platform.

## Design

The portfolio's design aims to be polished and visually appealing. It follows a mobile-first design approach and utilizes a carefully chosen color palette to create a unique and standout appearance. The font size is optimized for readability, ensuring a pleasant user experience.

To enhance the portfolio's visual appeal and showcase your skills, consider incorporating animations and utilizing React component libraries. While not affecting your grade, these additions may positively impact how potential employers perceive your knowledge and capabilities.

## Projects

Each project featured in the portfolio includes the following details:

- An image (either a GIF or a screenshot) showcasing the deployed application.
- The title of the project.
- A link to the deployed application.
- A link to the corresponding GitHub repository.

## Contact Information

While the portfolio does not currently connect to a backend or API, you can provide your contact information on the "Contact" page.
