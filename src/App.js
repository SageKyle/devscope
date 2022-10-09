import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages and components
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Create } from './pages/create/Create';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';
import { Project } from './pages/project/Project';
import { Signup } from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Create />} path="/create" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Project />} path="/project/:id" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
