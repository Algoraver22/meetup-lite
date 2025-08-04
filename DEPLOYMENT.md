# 🚀 Deployment Guide

## Environment Variables Setup

### For Netlify Deployment:
1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add the following variables:

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_HMS_ROOM_ID=your_100ms_room_id
REACT_APP_HMS_TEMPLATE_ID=your_100ms_template_id
REACT_APP_HMS_ROOM_NAME=your_100ms_room_name
REACT_APP_HMS_TEMPLATE_NAME=your_100ms_template_name
REACT_APP_HOST=https://your-netlify-domain.netlify.app
```

### For Vercel Deployment:
1. Go to your Vercel dashboard
2. Navigate to Project Settings > Environment Variables
3. Add the same variables as above, but change:
```
REACT_APP_HOST=https://your-vercel-domain.vercel.app
```

## Quick Deploy Commands:

### Netlify:
```bash
npm run build
netlify deploy --prod --dir=build
```

### Vercel:
```bash
npm run build
vercel --prod
```

## Security Notes:
- Never commit real credentials to version control
- Use `.env.local` for local development
- Set environment variables in your deployment platform
- Update `REACT_APP_HOST` to your production domain