import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.tsx';
import { WrapperComponent } from './components/WrapperComponent.tsx';
import { NotFound } from './components/NotFound.tsx';

function App() {
  return (
    <WrapperComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </WrapperComponent>
  );
}

export default App;
