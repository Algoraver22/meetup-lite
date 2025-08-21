# 📘 Meetup Lite - Project Documentation

## 0. Technology Explanations

### What is React?
**React** is a JavaScript library created by Facebook for building user interfaces, especially for web applications. Think of it like building blocks for websites.

**Key Concepts:**
- **Components**: Reusable pieces of UI (like LEGO blocks)
- **Virtual DOM**: React creates a copy of the webpage in memory for faster updates
- **JSX**: Allows you to write HTML-like code inside JavaScript
- **State**: Data that can change and update the UI automatically

**Why Use React?**
- Makes complex websites easier to build and maintain
- Reusable components save development time
- Large community and job market
- Used by Facebook, Netflix, Instagram, Airbnb

**In Our Project**: React creates all the pages (Login, Dashboard, Meeting rooms) and handles user interactions.

---

### What is TypeScript?
**TypeScript** is JavaScript with superpowers. It adds "types" to JavaScript, which means you specify what kind of data each variable should hold.

**Key Concepts:**
- **Types**: Specify if a variable is text, number, boolean, etc.
- **Interfaces**: Define the structure of objects
- **Compile-time Checking**: Catches errors before the code runs
- **Better IDE Support**: Auto-completion and error detection

**Example:**
```javascript
// JavaScript (no types)
let name = "John";
let age = 25;

// TypeScript (with types)
let name: string = "John";
let age: number = 25;
```

**Why Use TypeScript?**
- Prevents common programming mistakes
- Makes code easier to understand and maintain
- Better development experience with auto-completion
- Scales well for large applications

**In Our Project**: TypeScript ensures our meeting data, user information, and component props are correctly structured.

---

### What is Firebase?
**Firebase** is Google's platform that provides backend services for web and mobile apps without needing to build your own server.

**Key Services:**
- **Authentication**: Login/signup with Google, Facebook, email
- **Firestore Database**: Store and sync data in real-time
- **Hosting**: Deploy your website
- **Storage**: Store files like images and videos

**Why Use Firebase?**
- No server setup required
- Real-time data synchronization
- Automatic scaling
- Google's infrastructure reliability
- Free tier available

**In Our Project**: Firebase handles user login with Google and stores all meeting information in the cloud.

---

### What is Redux?
**Redux** is a state management library that keeps all your app's data in one central place, making it easier to manage and debug.

**Key Concepts:**
- **Store**: Central place where all app data lives
- **Actions**: Events that describe what happened ("user logged in")
- **Reducers**: Functions that update the store based on actions
- **Unidirectional Flow**: Data flows in one direction only

**Think of it like a bank:**
- Store = Bank vault (holds all money/data)
- Actions = Deposit/withdrawal slips (describe transactions)
- Reducers = Bank tellers (process transactions)

**Why Use Redux?**
- Predictable state changes
- Easy debugging with time-travel
- Works well with React
- Handles complex app state

**In Our Project**: Redux manages user login status, theme preferences, and meeting data across all pages.

---

### What is 100ms?
**100ms** is a video calling platform that provides APIs and SDKs to add video/audio calling features to your app without building the complex infrastructure yourself.

**Key Features:**
- **Video/Audio Calling**: High-quality real-time communication
- **Screen Sharing**: Share your screen with other participants
- **Chat**: Text messaging during calls
- **Recording**: Record meetings for later viewing
- **Scalability**: Handles from 2 to thousands of participants

**Why Use 100ms?**
- Building video calling from scratch is extremely complex
- Handles network issues, different devices, and browsers
- Provides ready-made UI components
- Reliable infrastructure
- Cost-effective compared to building your own

**In Our Project**: 100ms powers all video meetings - when users click "Join Meeting", they enter a 100ms video room.

---

### What is Elastic UI (EUI)?
**Elastic UI** is a design system and React component library created by Elastic (makers of Elasticsearch). It provides pre-built, professional-looking UI components.

**Key Components:**
- **Buttons**: Various button styles and sizes
- **Forms**: Input fields, dropdowns, date pickers
- **Tables**: Data tables with sorting and filtering
- **Navigation**: Headers, breadcrumbs, side navigation
- **Layout**: Grids, panels, and spacing utilities

**Why Use Elastic UI?**
- Professional, consistent design
- Accessibility built-in
- Responsive (works on mobile and desktop)
- Well-documented and tested
- Saves design and development time

**In Our Project**: EUI provides all the buttons, forms, tables, and layout components you see in the interface.

---

### What is React Router?
**React Router** is a library that handles navigation in React applications. It allows you to create different "pages" in a single-page application.

**Key Concepts:**
- **Routes**: Define which component shows for each URL
- **Navigation**: Move between pages without full page reload
- **URL Parameters**: Pass data through the URL (like meeting IDs)
- **Protected Routes**: Restrict access to certain pages

**Example:**
- `/login` → Shows Login component
- `/dashboard` → Shows Dashboard component
- `/meeting/123` → Shows Meeting component with ID 123

**Why Use React Router?**
- Creates a multi-page feel in a single-page app
- Users can bookmark specific pages
- Browser back/forward buttons work
- SEO-friendly URLs

**In Our Project**: React Router handles navigation between Login, Dashboard, Create Meeting, and Join Meeting pages.

---

### What is GitHub Actions?
**GitHub Actions** is a CI/CD (Continuous Integration/Continuous Deployment) platform that automatically builds, tests, and deploys your code when you push changes to GitHub.

**Key Concepts:**
- **Workflows**: Automated processes triggered by events
- **Actions**: Individual tasks (build, test, deploy)
- **Runners**: Virtual machines that execute workflows
- **Triggers**: Events that start workflows (push, pull request)

**Why Use GitHub Actions?**
- Automatic deployment saves time
- Catches errors before they reach users
- Consistent deployment process
- Free for public repositories
- Integrates seamlessly with GitHub

**In Our Project**: GitHub Actions automatically builds and deploys the app to GitHub Pages whenever code is pushed to the main branch.

---

## 1. Tech Stack

### Frontend Technologies
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **React** | 17.0.2 | Core frontend framework for building the user interface and managing component state |
| **TypeScript** | 4.8.4 | Provides type safety and better development experience with static typing |
| **React Router DOM** | 6.4.3 | Handles client-side routing between different pages (Login, Dashboard, Meetings) |
| **Redux Toolkit** | 1.9.0 | Manages global application state (user authentication, theme preferences) |
| **Elastic UI (EUI)** | 70.2.0 | Provides pre-built UI components for consistent design (buttons, forms, tables) |

### Authentication & Database
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **Firebase** | 12.0.0 | Handles user authentication via Google OAuth and stores meeting data in Firestore |
| **Firebase Auth** | - | Manages user login/logout and session management |
| **Firebase Firestore** | - | NoSQL database storing user profiles and meeting information |

### Video Calling
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **100ms React SDK** | 0.10.35 | Provides video calling functionality for meetings (camera, microphone, screen sharing) |

### Styling & UI
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **Emotion CSS** | 11.10.5 | CSS-in-JS library for styling components with dynamic styles |
| **Emotion React** | 11.10.5 | React integration for Emotion CSS styling |

### Utilities & Tools
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **Moment.js** | 2.29.4 | Handles date/time formatting and manipulation for meeting scheduling |
| **React Scripts** | 5.0.1 | Build tool and development server for React applications |
| **Web Vitals** | 2.1.4 | Measures website performance metrics |

### Development & Deployment
| Technology | Version | Purpose in Project |
|------------|---------|-------------------|
| **GitHub Actions** | - | Automated CI/CD pipeline for building and deploying to GitHub Pages |
| **Netlify** | - | Alternative hosting platform with automatic deployments |
| **Vercel** | - | Primary hosting platform for the live application |

---

## 2. File-by-File Functionality

### Root Configuration Files
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `package.json` | Defines project dependencies, scripts, and metadata |
| `tsconfig.json` | TypeScript compiler configuration |
| `.env` | Environment variables template (placeholder values) |
| `.env.local` | Local development environment variables (actual credentials) |
| `.gitignore` | Specifies files to ignore in version control |
| `README.md` | Project documentation and setup instructions |
| `DEPLOYMENT.md` | Deployment instructions for various platforms |
| `CONTRIBUTING.md` | Guidelines for project contributors |
| `LICENSE` | MIT license for the project |

### Public Directory (`/public`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `index.html` | Main HTML template that loads the React application |
| `manifest.json` | Web app manifest for PWA functionality |
| `favicon.ico` | Website icon displayed in browser tabs |
| `robots.txt` | Instructions for web crawlers |
| `_redirects` | Netlify routing configuration for SPA |

### Source Code (`/src`)

#### Main Application Files
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `index.tsx` | Entry point that renders the React app into the DOM |
| `App.tsx` | Root component that sets up routing and global providers |
| `react-app-env.d.ts` | TypeScript declarations for React app |

#### Redux Store (`/src/app`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `store.ts` | Configures Redux store with slices and middleware |
| `hooks.ts` | Custom typed hooks for Redux (useAppDispatch, useAppSelector) |
| `slices/AuthSlice.ts` | Redux slice managing user authentication state and theme |

#### Components (`/src/components`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `Header.tsx` | Navigation header with logo, user info, and logout functionality |
| `HMSMeeting.tsx` | Video meeting component using 100ms SDK |
| `ErrorBoundary.tsx` | Catches and displays JavaScript errors gracefully |
| `LoadingSpinner.tsx` | Reusable loading indicator component |
| `MeetingSuccessCard.tsx` | Success message after creating meetings |
| `EditFlyout.tsx` | Modal for editing meeting details |
| `ThemeSelector.tsx` | Component for switching between light/dark themes |

#### Form Components (`/src/components/FormComponents`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `CreateMeetingButtons.tsx` | Buttons for different meeting types |
| `MeetingDateField.tsx` | Date picker for scheduling meetings |
| `MeetingMaximumUsersField.tsx` | Input field for maximum participants |
| `MeetingNameField.tsx` | Input field for meeting names |
| `MeetingUsersField.tsx` | Multi-select field for inviting users |

#### Pages (`/src/pages`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `Login.tsx` | Login page with Google OAuth authentication |
| `Dashboard.tsx` | Main dashboard with meeting options |
| `CreateMeeting.tsx` | Page for selecting meeting type |
| `OneOnOneMeeting.tsx` | Form for creating 1-on-1 meetings |
| `VideoConference.tsx` | Form for creating group video conferences |
| `MyMeetings.tsx` | Lists meetings created by the current user |
| `Meeting.tsx` | Lists all available meetings |
| `JoinMeeting.tsx` | Validates and joins meetings via URL |

#### Custom Hooks (`/src/hooks`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `useAuth.tsx` | Manages authentication state and redirects |
| `useFetchUsers.tsx` | Fetches user list from Firebase for invitations |
| `useToast.tsx` | Manages toast notifications throughout the app |

#### Utilities (`/src/utils`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `firebaseConfig.ts` | Firebase initialization and database references |
| `types.ts` | TypeScript type definitions for the entire project |
| `generateMeetingId.ts` | Generates unique meeting IDs |
| `breadcrumbs.ts` | Navigation breadcrumb configurations |

#### Assets (`/src/assets`)
| File Name | Purpose / Functionality |
|-----------|------------------------|
| `logo.png` | Meetup logo used in header and login page |
| `animation.gif` | Animated graphic on login page |
| `dashboard1.png`, `dashboard2.png`, `dashboard3.png` | Dashboard feature images |
| `meeting1.png`, `meeting2.png` | Meeting-related illustrations |

---

## 3. How the Project Works (Overall Functionality)

### Application Overview
Meetup Lite is a video conferencing web application that allows users to create, schedule, and join video meetings. It's built as a Single Page Application (SPA) using React and provides real-time video calling capabilities.

### User Journey Flow

#### 1. **Authentication Process**
- User visits the application
- If not logged in, they're redirected to the Login page
- User clicks "Login with Google" button
- Firebase handles Google OAuth authentication
- Upon successful login, user data is stored in Firestore database
- User is redirected to the Dashboard

#### 2. **Dashboard Navigation**
- Dashboard displays three main options:
  - **Create Meeting**: Start a new meeting
  - **My Meetings**: View meetings created by the user
  - **All Meetings**: View all available meetings
- Header shows user name, theme toggle, and logout button

#### 3. **Creating Meetings**
- User selects meeting type:
  - **1-on-1 Meeting**: Private meeting between two people
  - **Video Conference**: Group meeting with multiple participants
  - **Anyone-can-join**: Open meeting accessible to all users
- User fills out meeting details:
  - Meeting name
  - Date and time
  - Maximum participants (for group meetings)
  - Invited users (for private meetings)
- Meeting data is saved to Firestore with a unique meeting ID
- User receives a shareable meeting link

#### 4. **Joining Meetings**
- Users can join meetings via:
  - Direct link (`/join/{meetingId}`)
  - "Join Now" button from meeting lists
- System validates:
  - Meeting exists
  - User has permission to join
  - Meeting is active
- If valid, user is redirected to the video call interface

#### 5. **Video Calling**
- 100ms SDK handles video/audio streaming
- Users can:
  - Turn camera/microphone on/off
  - Share screen
  - Chat with participants
  - Leave the meeting

### Technical Architecture

#### **Frontend (React)**
- **Components**: Reusable UI elements (Header, Forms, Buttons)
- **Pages**: Full-screen views (Login, Dashboard, Meeting Forms)
- **State Management**: Redux manages global state (user info, theme)
- **Routing**: React Router handles navigation between pages
- **Styling**: Elastic UI provides consistent design system

#### **Backend Services**

**Firebase Authentication:**
- Handles Google OAuth login/logout
- Manages user sessions
- Provides user profile data

**Firebase Firestore Database:**
- Stores user profiles in `users` collection
- Stores meeting data in `meetings` collection
- Real-time updates when meetings are created/modified

**100ms Video Service:**
- Provides video calling infrastructure
- Handles peer-to-peer connections
- Manages audio/video streams
- Supports screen sharing and chat

#### **Data Flow**

1. **User Authentication:**
   ```
   User → Google OAuth → Firebase Auth → Firestore → Redux Store → UI Update
   ```

2. **Creating Meetings:**
   ```
   User Input → Form Validation → Firestore Write → Success Message → Redirect
   ```

3. **Joining Meetings:**
   ```
   Meeting URL → Validation → Permission Check → 100ms Room → Video Call
   ```

4. **Real-time Updates:**
   ```
   Firestore Changes → React Components → UI Re-render
   ```

### Key Features Explained

#### **Meeting Types**
- **1-on-1**: Only creator and one invited user can join
- **Video Conference**: Multiple invited users can join
- **Anyone-can-join**: Any authenticated user can join

#### **Security & Permissions**
- All users must be authenticated via Google
- Meeting access is controlled based on meeting type
- Private meetings check user permissions before allowing entry

#### **Responsive Design**
- Works on desktop and mobile devices
- Elastic UI components adapt to different screen sizes
- Touch-friendly interface for mobile users

#### **Theme Support**
- Light and dark theme options
- User preference saved in localStorage
- Consistent theming across all components

### Deployment Process

#### **Development**
1. Code changes pushed to GitHub
2. Local testing with `npm start`
3. Build verification with `npm run build`

#### **Production Deployment**
1. GitHub Actions automatically triggers on push to main branch
2. Installs dependencies and builds the project
3. Deploys to GitHub Pages at `https://algoraver22.github.io/meetup-lite`
4. Environment variables injected during build process

#### **Environment Configuration**
- **Development**: Uses `.env.local` with actual credentials
- **Production**: Uses GitHub Secrets for secure credential management
- **Firebase**: Domain authorization required for each deployment URL

This architecture ensures a scalable, secure, and user-friendly video conferencing platform with modern web technologies.

---

## 4. Advanced Theoretical Concepts

### Design Patterns Used

#### 1. **Observer Pattern**
**Theory**: Objects (observers) automatically get notified when another object (subject) changes state.

**Implementation**:
- Redux store notifies components when state changes
- Firebase real-time listeners update UI when database changes
- Event handlers respond to user interactions

#### 2. **Factory Pattern**
**Theory**: Creates objects without specifying exact classes, using a common interface.

**Implementation**:
- Meeting creation based on type (1-on-1, video conference, anyone-can-join)
- Component rendering based on route parameters
- Toast notifications with different types (success, error, warning)

#### 3. **Singleton Pattern**
**Theory**: Ensures only one instance of a class exists throughout the application.

**Implementation**:
- Redux store (single source of truth)
- Firebase configuration (one instance per app)
- Authentication state management

#### 4. **Higher-Order Component (HOC) Pattern**
**Theory**: Function that takes a component and returns a new component with additional functionality.

**Implementation**:
- `ErrorBoundary` wraps components to catch errors
- Authentication wrapper for protected routes
- Theme provider for consistent styling

### Software Engineering Principles

#### **SOLID Principles**

1. **Single Responsibility Principle (SRP)**
   - Each component has one reason to change
   - `Header.tsx` only handles navigation
   - `Login.tsx` only handles authentication

2. **Open/Closed Principle (OCP)**
   - Components open for extension, closed for modification
   - New meeting types can be added without changing existing code
   - Plugin architecture with 100ms SDK

3. **Liskov Substitution Principle (LSP)**
   - Components can be replaced with their subtypes
   - Different meeting components implement same interface
   - Consistent props structure across similar components

4. **Interface Segregation Principle (ISP)**
   - Components depend only on interfaces they use
   - TypeScript interfaces define specific contracts
   - Props interfaces tailored to component needs

5. **Dependency Inversion Principle (DIP)**
   - High-level modules don't depend on low-level modules
   - Components depend on abstractions (hooks, services)
   - Firebase abstracted through configuration layer

#### **DRY Principle (Don't Repeat Yourself)**
- Custom hooks eliminate code duplication
- Reusable components across different pages
- Utility functions for common operations
- Centralized type definitions

#### **KISS Principle (Keep It Simple, Stupid)**
- Simple, focused components
- Clear naming conventions
- Minimal complexity in each function
- Straightforward user interface

### Performance Optimization Concepts

#### **Code Splitting**
**Theory**: Breaking code into smaller chunks that load on demand.

**Implementation**:
- React.lazy() for component-level splitting
- Route-based code splitting
- Vendor libraries separated from app code

#### **Memoization**
**Theory**: Caching expensive function results to avoid recalculation.

**Implementation**:
- React.memo() for component memoization
- useMemo() for expensive calculations
- useCallback() for function memoization

#### **Virtual DOM**
**Theory**: In-memory representation of real DOM for efficient updates.

**Implementation**:
- React's reconciliation algorithm
- Minimal DOM manipulations
- Batch updates for better performance

### Testing Strategies

#### **Unit Testing**
**Theory**: Testing individual components/functions in isolation.

**Implementation**:
- Jest for test runner
- React Testing Library for component testing
- Mock external dependencies

#### **Integration Testing**
**Theory**: Testing interaction between multiple components/services.

**Implementation**:
- Testing user workflows
- API integration testing
- Database interaction testing

#### **End-to-End Testing**
**Theory**: Testing complete user scenarios from start to finish.

**Implementation**:
- Full authentication flow testing
- Meeting creation and joining workflow
- Cross-browser compatibility testing

### Scalability Considerations

#### **Horizontal Scaling**
**Theory**: Adding more servers to handle increased load.

**Implementation**:
- Stateless frontend (can run on multiple servers)
- CDN for static asset distribution
- Load balancing for high availability

#### **Vertical Scaling**
**Theory**: Adding more power to existing servers.

**Implementation**:
- Optimized bundle sizes
- Efficient memory usage
- Reduced CPU-intensive operations

#### **Database Scaling**
**Theory**: Handling increased data load and user base.

**Implementation**:
- Firestore's automatic scaling
- Efficient query patterns
- Data denormalization for read performance

### Security Architecture

#### **Defense in Depth**
**Theory**: Multiple layers of security controls.

**Implementation**:
- Client-side validation + server-side validation
- Authentication + authorization
- HTTPS + secure headers
- Input sanitization + output encoding

#### **Zero Trust Model**
**Theory**: Never trust, always verify every request.

**Implementation**:
- Every API call requires authentication
- Permission checks for every action
- Encrypted communication at all levels

### Modern Web Development Concepts

#### **Progressive Web App (PWA)**
**Theory**: Web apps that provide native app-like experience.

**Implementation**:
- Service worker for offline functionality
- Web app manifest for installability
- Responsive design for all devices

#### **Jamstack Architecture**
**Theory**: JavaScript, APIs, and Markup for fast, secure websites.

**Implementation**:
- Static site generation
- API-driven functionality
- CDN deployment
- Serverless functions

These theoretical concepts form the foundation of modern web application development and are essential for building scalable, maintainable, and secure applications like Meetup Lite.