import React, { Component, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload(); // Optional: Reload the page to reset state
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#0F172A',
            color: '#D1D5DB',
            textAlign: 'center',
            p: 3,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, color: '#A5B4FC' }}>
            Something went wrong
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: '600px' }}>
            An unexpected error occurred: {this.state.error?.message || 'Unknown error'}.
            Please try refreshing the page or contact support if the issue persists.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleReset}
            sx={{ backgroundColor: '#3B82F6', '&:hover': { backgroundColor: '#2563EB' } }}
          >
            Refresh Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;