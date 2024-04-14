import './App.css';
import { cn } from '@bem-react/classname';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Upload from './components/Upload/Upload';

function App() {
  const cnApp =  cn("App")
  return (
    <div className={cnApp()}>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Upload />} path='/upload' />
        </Routes>
    </div>
  );
}

export default App;
