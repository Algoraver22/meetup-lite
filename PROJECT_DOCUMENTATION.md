# 📘 Meetup Lite - Project Documentation

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