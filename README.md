# Medical Chatbot Web App

This project is a web-based frontend for a medical chatbot, similar to ChatGPT but customized for providing medical advice and information. The application offers users an intuitive interface to interact with the chatbot, enabling them to ask health-related questions and receive accurate and timely responses.
Youtube: https://youtu.be/rUG12GPnO-w
## Features

- **Chat Interface**: A clean, user-friendly interface for seamless interaction with the chatbot.
- **Medical Query Handling**: Tailored to understand and respond to medical-related queries.
- **Conversation History**: Allows users to view past interactions.
- **Responsive Design**: Fully responsive for a smooth experience on desktops, tablets, and smartphones.
- **Dark Mode**: Switch between light and dark themes for better user comfort.

## Technologies Used

### Frontend
- **React.js**: The core framework for building the user interface.
- **React Hooks**: Used extensively for managing state and side effects.
  - **useState**: For managing component state.
  - **useEffect**: For fetching chatbot responses and handling side effects.
  - **useContext**: For global state management such as theme toggling.
  - **useReducer**: For managing complex state logic in the chat interface.
  - **Custom Hooks**: Created for reusable logic such as API requests and form handling.

### State Management
- **Context API**: For managing global state like user authentication, theme, and language preferences.
- **useReducer**: To handle complex state changes efficiently.

### Styling
- **CSS Modules**: For component-scoped CSS.
- **Styled Components**: For dynamic styling and theme management.

### API Handling
- **Axios**: For making HTTP requests to the chatbot API.
- **React Query**: For managing server state, fetching, caching, and updating data efficiently.

### Routing
- **React Router**: For managing client-side routing and navigation between pages like Chat, About, and Contact.

### Form Handling
- **React Hook Form**: For handling user input and managing form state in a performant way.
- **Yup**: For form validation.

### Performance Optimization
- **React.memo**: To prevent unnecessary re-renders of pure functional components.
- **useCallback**: To memoize functions and avoid re-creation on each render.
- **useMemo**: To optimize computation-heavy operations.


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/medical-chatbot.git
2. Install dependencies:
   npm install
3. Run the development server:
   npm start 
