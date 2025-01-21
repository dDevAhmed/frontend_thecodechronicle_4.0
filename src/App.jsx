import './App.css'
import router from './routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './contexts/AppContext';
import { StoryProvider } from './contexts/StoryContext';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <StoryProvider>
          <RouterProvider router={router} />
        </StoryProvider>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
