import React, { useEffect, useState } from 'react';
import { 
  EuiPanel, 
  EuiText, 
  EuiSpacer, 
  EuiButton, 
  EuiCopy,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem
} from '@elastic/eui';

interface MeetingSuccessCardProps {
  meetingId: string;
  meetingName: string;
  onClose: () => void;
}

const MeetingSuccessCard: React.FC<MeetingSuccessCardProps> = ({ 
  meetingId, 
  meetingName, 
  onClose 
}) => {
  const [countdown, setCountdown] = useState(5);
  const meetingLink = `${window.location.origin}/join/${meetingId}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <EuiPanel style={{ maxWidth: '500px', padding: '30px' }}>
        <EuiText textAlign="center">
          <h2>✅ Meeting Created Successfully!</h2>
        </EuiText>
        <EuiSpacer />
        
        <EuiText>
          <p><strong>Meeting Name:</strong> {meetingName}</p>
          <p><strong>Meeting ID:</strong> {meetingId}</p>
          <p><strong>Meeting Link:</strong></p>
        </EuiText>
        
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem>
            <EuiText size="s" style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '8px', 
              borderRadius: '4px',
              wordBreak: 'break-all'
            }}>
              {meetingLink}
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiCopy textToCopy={meetingLink}>
              {(copy) => (
                <EuiButtonIcon
                  iconType="copy"
                  onClick={copy}
                  aria-label="Copy meeting link"
                  title="Copy meeting link"
                />
              )}
            </EuiCopy>
          </EuiFlexItem>
        </EuiFlexGroup>
        
        <EuiSpacer />
        <EuiText textAlign="center" size="s" color="subdued">
          Redirecting to dashboard in {countdown} seconds...
        </EuiText>
        
        <EuiSpacer />
        <EuiFlexGroup justifyContent="center">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={onClose} fill>
              Go to Dashboard Now
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </div>
  );
};

export default MeetingSuccessCard;
