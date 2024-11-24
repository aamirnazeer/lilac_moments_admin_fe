import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.tsx';
import SignIn from './components/SignIn.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/login" Component={SignIn} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
