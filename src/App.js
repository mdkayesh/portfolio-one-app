import Sidebar from "./components/Sidebar";
import "./style/style.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Resume from "./components/pages/Resume/Resume";
import Works from "./components/pages/Works/Works";
import { useEffect } from "react";
import Blog from "./components/pages/Blog/Blog";
import SingleBlog from "./components/pages/SIngleBlog/SingleBlog";
import Contact from "./components/pages/Contact/Contact";

function App() {
  const Location = useLocation();
  const { blogId } = useParams();

  document.documentElement.classList.add("theme-1");

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, [Location.pathname]);

  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="works" element={<Works />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:blogId" element={<SingleBlog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
