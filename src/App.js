import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Instructor from "./components/Instructor/Instructor";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound"
import { createContext, useEffect, useState } from "react";
export const userContext = createContext();

function App() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
      fetch('./courseDB.json')
          .then(res => res.json())
          .then(data => setCourses(data))
  }, [])
  return (
    <div>
      <userContext.Provider value={[courses,setCourses]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </userContext.Provider>
    </div >
  );
}

export default App;
