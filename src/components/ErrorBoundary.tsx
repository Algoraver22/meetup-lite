import React, { Component, ErrorInfo, ReactNode } from 'react';
import { EuiPanel, EuiText, EuiButton, EuiSpacer } from '@elastic/eui';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <EuiPanel style={{ maxWidth: '500px', textAlign: 'center' }}>
            <EuiText>
              <h2>🚨 Something went wrong</h2>
              <p>We're sorry, but something unexpected happened.</p>
            </EuiText>
            <EuiSpacer />
            <EuiButton 
              fill 
              onClick={() => window.location.reload()}
            >
              Reload Page
            </EuiButton>
          </EuiPanel>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;