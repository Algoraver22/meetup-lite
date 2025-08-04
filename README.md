# 🎥 React Zoom Clone - Video Meeting Platform

A full-featured video conferencing application built with React, TypeScript, Firebase, and 100ms for video calling capabilities.

## ✨ Features

- 🔐 **Google OAuth Authentication**
- 📅 **Meeting Management System**
- 👥 **Multiple Meeting Types**
  - One-on-One Meetings
  - Video Conferences
  - Anyone-can-join Meetings
- 🎯 **Invitation System**
- 📱 **Responsive Design**
- 🔗 **Meeting Link Sharing**
- 📊 **Meeting History & Dashboard**
- 🎨 **Modern UI with Elastic UI**

## 🛠️ Tech Stack

- **Frontend**: React 17, TypeScript
- **UI Framework**: Elastic UI
- **State Management**: Redux Toolkit
- **Authentication**: Firebase Auth (Google OAuth)
- **Database**: Firebase Firestore
- **Video Calling**: 100ms
- **Routing**: React Router v6
- **Date Handling**: Moment.js

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project
- 100ms account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Algoraver22/meetup-lite.git
   cd meetup-lite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory with your actual credentials:
   ```env
   # Firebase Configuration
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # 100ms Configuration
   REACT_APP_HMS_ROOM_ID=your_100ms_room_id
   REACT_APP_HMS_TEMPLATE_ID=your_100ms_template_id
   REACT_APP_HMS_ROOM_NAME=your_100ms_room_name
   REACT_APP_HMS_TEMPLATE_NAME=your_100ms_template_name

   # App Configuration
   REACT_APP_HOST=http://localhost:3000
   ```

4. **Firebase Setup**
   - Create a Firebase project
   - Enable Authentication (Google provider)
   - Create Firestore database
   - Add your domain to authorized domains

5. **100ms Setup**
   - Create a 100ms account
   - Create a room and template
   - Get your room credentials

6. **Start the development server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/                    # Redux store configuration
│   ├── hooks.ts
│   ├── store.ts
│   └── slices/
├── assets/                 # Images and static files
├── components/             # Reusable components
│   ├── FormComponents/
│   ├── Themes/
│   └── ...
├── hooks/                  # Custom React hooks
├── pages/                  # Page components
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── CreateMeeting.tsx
│   ├── JoinMeeting.tsx
│   └── ...
├── utils/                  # Utility functions
│   ├── firebaseConfig.ts
│   ├── types.ts
│   └── ...
├── App.tsx
└── index.tsx
```

## 🎯 Usage

1. **Login**: Sign in with your Google account
2. **Dashboard**: Access the main dashboard with three options:
   - Create Meeting
   - My Meetings
   - All Meetings
3. **Create Meeting**: Choose between One-on-One or Video Conference
4. **Join Meeting**: Click "Join Now" to enter the video call
5. **Meeting Management**: View, edit, and manage your meetings

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with production optimizations
- `npm test` - Run tests
- `npm run serve` - Serve production build locally
- `npm run analyze` - Analyze bundle size
- `npm eject` - Eject from Create React App

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy:

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect React app
3. Add environment variables in Vercel dashboard

## 🌟 Key Features Explained

### Authentication System
- Secure Google OAuth integration
- User session management
- Protected routes

### Meeting Types
- **1-on-1**: Private meetings between two users
- **Video Conference**: Group meetings with multiple participants
- **Anyone-can-join**: Open meetings accessible to all users

### Meeting Management
- Create scheduled meetings
- Invite specific users
- Copy meeting links
- View meeting history
- Edit meeting details

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [100ms](https://www.100ms.live/) for video calling infrastructure
- [Firebase](https://firebase.google.com/) for backend services
- [Elastic UI](https://elastic.github.io/eui/) for UI components
- [React](https://reactjs.org/) team for the amazing framework

## 📞 Support

If you have any questions or need help, please open an issue.

---

**Made with ❤️ by Anurag Chaturvedi**