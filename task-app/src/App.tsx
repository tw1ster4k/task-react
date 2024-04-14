import './App.css';
import { cn } from '@bem-react/classname';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Upload from './components/Upload/Upload';
import Result from './components/Result/Result';

function App() {
  const cnApp =  cn("App")
  return (
    <div className={cnApp()}>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Upload />} path='/upload' />
            <Route element={<Result />} path='/result' />
        </Routes>
    </div>
  );
}

export default App;
