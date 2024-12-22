# UserCard App

UserCard is a React-based application that allows users to create personalized digital cards with customizable details, social media links, and theme colors. The app integrates Redux for state management and uses Tailwind CSS for styling.

## Features

### Home Page

- ✏️ **User Input:** Users can input personal details (name, surname, profession).
- 🌐 **Social Media Integration:** Add social media links (Facebook, Twitter, LinkedIn, Gmail).
- 🎨 **Customization:** Upload profile pictures and background images, and select theme colors.
- 💾 **Form Persistence:** User input is saved in local storage for persistence.
- 🔄 **Reset Form:** Users can reset the form to its initial state.

### User Page

- 👤 **Display Information:** Displays the user's information and profile picture.
- 🌍 **Social Media Links:** Links to user's social media profiles and other URLs (website, podcast, blog).
- 🖼️ **Background Customization:** Displays the selected background and theme colors.

## Tech Stack

- ⚛️ **Frontend:** React
- 🛠️ **State Management:** Redux Toolkit
- 🎨 **Styling:** Tailwind CSS
- 🚦 **Routing:** React Router DOM
- 🎭 **Icons:** React Icons

## Installation

1. Clone the repository:
   git clone <git@github.com:ananotopuria/user-card.git>

2. Navigate to the project directory:
   cd usercard

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

5. Open the app in your browser at http://localhost:5173.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase with ESLint.

## Customization Options

- **Theme Colors:** Choose from a range of pre-defined colors.
- **Social Links:** Add links to Facebook, Twitter, LinkedIn, Gmail, and more.
- **File Uploads:** Upload custom profile and background images.

## Dependencies

### Production

🛠️ @reduxjs/toolkit: State management library for Redux.
⚛️ react: Library for building user interfaces.
🖥️ react-dom: React DOM bindings.
🎭 react-icons: Icon library.
🔗 react-redux: React bindings for Redux.
🌍 react-router-dom: Declarative routing for React.

### Development

⚙️ @vitejs/plugin-react: React plugin for Vite.
🎨 tailwindcss: Utility-first CSS framework.
🧹 eslint: Code linting tool.

## Future Enhancements

🔍 Add dynamic validation for social media links.
🔐 Implement user authentication.
🎨 Enhance theme customization with more color options.
🖱️ Add drag-and-drop file upload functionality.

## License

This project is open-source and available under the MIT License.
