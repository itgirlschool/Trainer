import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import Greeting from "../Pages/Greeting/Greeting";
import Authorisation from '../Pages/Auth/Auth';
import Home from '../Pages/Home/Home';
import TaskPage from '../Pages/TaskPage/TaskPage';
import Profile from '../Pages/Profile/Profile';
import ErrorPage from '../Pages/Error/Error';
import Header from '../Components/Header/Header';
import SubjectList from "../Pages/SubjectList/SubjectList.jsx";

function App() {
  return (
    <div className="app">
      <header className="header"><Header /></header>
      <main className="main">
        <Routes>
          <Route path="/auth" element={<Authorisation />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/" element={<Home />} />
          <Route path="/subjectlist" element={<SubjectList />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
