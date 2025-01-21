import './App.css'
import router from './routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AppProvider> */}
        <RouterProvider router={router} />
      {/* </AppProvider> */}
    </QueryClientProvider>
  )
}

export default App
