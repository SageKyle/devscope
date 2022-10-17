import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages and components
import { Navbar } from './components/Navbar';
import { OnlineUsers } from './components/OnlineUsers';
import { Sidebar } from './components/Sidebar';
import { Create } from './pages/create/Create';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';
import { Project } from './pages/project/Project';
import { Signup } from './pages/signup/Signup';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        // TODO setup protected routes
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route element={<Dashboard />} path="/" />
              <Route element={<Create />} path="/create" />
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Project />} path="/projects/:id" />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
