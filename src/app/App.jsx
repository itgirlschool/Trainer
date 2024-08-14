import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import Greeting from "../Pages/Greeting/Greeting";
import Authorisation from '../Pages/Auth/Auth';
import Home from '../Pages/Home/Home';
import TaskList from '../Pages/TasksList/TaskList';
import TaskPage from '../Pages/TaskPage/TaskPage';
import Profile from '../Pages/Profile/Profile';
import ErrorPage from '../Pages/Error/Error';

function App() {
  return (
    <div className="app">
      <main className="main">
        <Routes>
          <Route path="/auth" element={<Authorisation />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
