import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestRouteComponent from './components/TestRouteComponent.tsx';
import HomeRouteComponent from './components/HomeRouteComponent.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomeRouteComponent} />
        <Route path="/abc" Component={TestRouteComponent} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
