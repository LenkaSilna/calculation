import * as React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { Calculate } from '@mui/icons-material';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar position="static" className="bg-white text-gray-800 shadow-sm">
        <Toolbar>
          <Calculate className="mr-2 text-blue-600" />
          <Typography variant="h6" className="font-bold">
            Matematický trenažér
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="py-6">
        {children}
      </Container>
    </div>
  );
};
