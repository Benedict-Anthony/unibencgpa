import "./App.css";
import Home from "./screen/Home";
import Registration from "./screen/Registration";
import HomeProfile from "./screen/HomeProfile";
import RegisterCourses from "./screen/RegisterCourses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButtonNavigation } from "./components/shared/ButtonNavigation";
import Courses from "./screen/Courses";
import CGPACalculator from "./screen/CGPACalculator";
import Insights from "./screen/Insights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses" element={<RegisterCourses />} />
        <Route path="/profile" element={<HomeProfile />} />
        <Route path="/course-select" element={<Courses />} />
        <Route path="/calculator" element={<CGPACalculator />} />
        <Route path="/insight" element={<Insights />} />
      </Routes>
      <ButtonNavigation />
    </BrowserRouter>
  );
}

export default App;
