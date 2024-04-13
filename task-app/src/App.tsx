import './App.css';
import { cn } from '@bem-react/classname';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  const cnApp =  cn("App")
  return (
    <div className={cnApp()}>
        <Routes>
            <Route element={<Home />} path='/' />
        </Routes>
    </div>
  );
}

export default App;
