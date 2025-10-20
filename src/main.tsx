import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Lander from './pages/lander/lander.tsx'
import Header from './components/header/header.tsx';
import Experience from './pages/experience/experience.tsx'
import Projects from './pages/projects/projects.tsx';
import Blogs from './pages/blogs/blogs.tsx';

import Stories from './pages/stories/stories.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header></Header>
    <Lander />
    <Experience></Experience>
    <Projects></Projects>
    <Blogs></Blogs>
    <Stories></Stories>
  </StrictMode>,
)
