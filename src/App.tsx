import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import { AuthWrapper } from './components/authWrapper/AuthWrapper.tsx';
import { NotFound } from './pages/notFound/NotFound.tsx';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
