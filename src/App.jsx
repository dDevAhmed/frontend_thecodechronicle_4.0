import './App.css'
import router from './routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './contexts/AppContext';
import { StoryProvider } from './contexts/StoryContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          <StoryProvider>
            <RouterProvider router={router} />
          </StoryProvider>
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
