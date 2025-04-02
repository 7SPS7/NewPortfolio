import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Innovation from "./components/Innovation";
import Explore from "./components/Explore";
import ScrollToTop from "./components/ScrollToTop";
import ProjectPage from "./components/ProjectPage";
import PageLoader from "./components/PageLoader";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import ExploreSkills from "./components/ExploreSkills";
import ExploreProcess from "./components/ExploreProcess";
import InnovationFull from "./components/InnovationFull";
import ContactPage from "./components/ContactPage";

const LayoutWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(() => handleComplete(), 800);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    document.body.classList.add("dark-theme");
    return () => document.body.classList.remove("dark-theme");
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LayoutWrapper>
          <Navbar />
          <Hero />
          <Skills />
          <Innovation />
          <Project />
          <Explore />
          <Testimonial />
          <ContactForm />
          <ScrollToTop />
          <Footer />
        </LayoutWrapper>
      ),
    },
    {
      path: "/Projects",
      element: (
        <LayoutWrapper>
          <Navbar />
          <ProjectPage />
          <Footer />
        </LayoutWrapper>
      ),
    },
    {
      path: "/ExploreSkills",
      element:(
        <LayoutWrapper>
          <Navbar />
          <ExploreSkills/>
          <Footer />
        </LayoutWrapper>
      ),
    },
    {
      path: "/ExploreProcess",
      element:(
        <LayoutWrapper>
          <Navbar />
          <ExploreProcess/>
          <Footer />
        </LayoutWrapper>
      ),
    },
    {
      path: "/Innovation",
      element: (
        <LayoutWrapper>
          <Navbar />
          <InnovationFull/>
          <Footer />
        </LayoutWrapper>
      ),
    },
    {
      path: "/ContactMe",
      element: (
        <LayoutWrapper>
          <Navbar />
          <ContactPage/>
          <Footer />
        </LayoutWrapper>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;