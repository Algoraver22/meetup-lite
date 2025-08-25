import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { setToasts } from "./app/slices/MeetingSlice";
import ErrorBoundary from "./components/ErrorBoundary";
import CreateMeeting from "./pages/CreateMeeting";
import Dashboard from "./pages/Dashboard";
import JoinMeeting from "./pages/JoinMeeting";
import Login from "./pages/Login";
import Meeting from "./pages/Meeting";
import MyMeetings from "./pages/MyMeetings";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";
import VideoConference from "./pages/VideoConference";

export default function App() {
  const dispatch = useDispatch();
  const toasts = useAppSelector((zoom) => zoom.meetings.toasts);

  const removeToast = (removedToast: { id: string }) => {
    dispatch(
      setToasts(
        toasts.filter((toast: { id: string }) => toast.id !== removedToast.id)
      )
    );
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateMeeting />} />
          <Route path="/create1on1" element={<OneOnOneMeeting />} />
          <Route path="/videoconference" element={<VideoConference />} />
          <Route path="/mymeetings" element={<MyMeetings />} />
          <Route path="/join/:id" element={<JoinMeeting />} />
          <Route path="/meetings" element={<Meeting />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
        {toasts.length > 0 && (
          <div className="fixed top-4 right-4 z-50">
            {toasts.map((toast: any) => (
              <div key={toast.id} className="mb-2 p-4 bg-blue-500 text-white rounded shadow-lg">
                {toast.title}
                <button 
                  onClick={() => removeToast(toast)}
                  className="ml-2 text-white hover:text-gray-200"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
