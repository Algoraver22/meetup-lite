import React, { useEffect, useCallback } from 'react';
import { EuiButton, EuiPanel, EuiText, EuiSpacer } from '@elastic/eui';

interface HMSMeetingProps {
  roomCode: string;
  userName: string;
  userId: string;
}

const HMSMeeting: React.FC<HMSMeetingProps> = ({ roomCode, userName, userId }) => {
  const joinMeeting = useCallback(() => {
    // Use 100ms room from environment variables
    const roomId = process.env.REACT_APP_HMS_ROOM_ID;
    
    if (!roomId) {
      return;
    }
    
    const displayName = userName || "Guest";
    const meetingUrl = `https://dashboard.100ms.live/room/${roomId}?name=${encodeURIComponent(displayName)}`;
    
    window.location.href = meetingUrl;
  }, [userName]);

  useEffect(() => {
    // Auto-redirect to meeting
    joinMeeting();
  }, [joinMeeting]);

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#1a1a1a'
    }}>
      <EuiPanel style={{ maxWidth: '500px', textAlign: 'center' }}>
        <EuiText>
          <h2>Joining Meeting...</h2>
          <p>Meeting ID: {roomCode}</p>
          <p>User: {userName}</p>
          <p>Room: {process.env.REACT_APP_HMS_ROOM_NAME || 'Default Room'}</p>
          <p>100ms Room ID: {process.env.REACT_APP_HMS_ROOM_ID || 'Not configured'}</p>
        </EuiText>
        <EuiSpacer />
        <EuiButton fill onClick={joinMeeting}>
          Open Meeting in New Tab
        </EuiButton>
        <EuiSpacer />
        <EuiText size="s" color="subdued">
          If the meeting doesn't open automatically, click the button above.
        </EuiText>
      </EuiPanel>
    </div>
  );
};

export default HMSMeeting;
