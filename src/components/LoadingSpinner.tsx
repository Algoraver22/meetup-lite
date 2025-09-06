import React from 'react';
import { EuiLoadingSpinner, EuiText, EuiSpacer } from '@elastic/eui';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px'
    }}>
      <EuiLoadingSpinner size="xl" />
      <EuiSpacer size="m" />
      <EuiText size="s" color="subdued">
        {message}
      </EuiText>
    </div>
  );
};

export default LoadingSpinner;
