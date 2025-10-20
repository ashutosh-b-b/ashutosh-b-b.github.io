import React, { useState, useEffect } from 'react';
import './projects.css'; 
import Markdown from 'react-markdown'
import projectsData from '../../assets/projects/projectsData.json';

// --- TYPE DEFINITION ---
interface Project {
  id: number;
  title: string;
  shortDesc: string;
  displayImg: string;
  displayAsset: string;
  displayAssetType?: string;
  fullDesc: string;
  skills: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  // State to track the currently selected project for the modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');


  const projects: Project[] = projectsData.items;

  // Load markdown content function (similar to experience.tsx)
  const loadMarkdownContent = async (filePath: string) => {
    try {
      const response = await fetch(`/assets/projects/${filePath}`);
      if (response.ok) {
        const content = await response.text();
        setMarkdownContent(content);
      } else {
        setMarkdownContent('Unable to load content.');
      }
    } catch (error) {
      console.error('Error loading markdown:', error);
      setMarkdownContent('Error loading content.');
    }
  };

  // --- MODAL LOGIC ---

  // Function to open the modal
  const handleViewDetails = (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      setSelectedProject(project);
      // Load markdown content for the selected project
      loadMarkdownContent(project.fullDesc);
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Handle clicks on the modal overlay (to close)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Effect to handle Escape key press for closing the modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Effect to control body overflow when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);


  // --- CARD BUTTON LOGIC ---

  // Handle GitHub button click
  const handleGitHubClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation(); // Prevents the card click event
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle "View Details" button click
  const handleViewDetailsClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    handleViewDetails(id);
  };


  // --- RENDER ---
  return (
    <div id="projects" className="pr-main-container">
      <div className="pr-heading">Projects</div>
      <div className="pr-internal-container">
        
        {/* --- CARDS CONTAINER --- */}
        <div className="pr-cards-container">
          {projects.map(project => (
            <div className="pr-card" key={project.id}>
              <div className="pr-card-image">
                <img src={`/assets/projects/${project.displayImg}`}></img>
              </div>
              <div className="pr-card-content">
                <div className="pr-card-title">{project.title}</div>
                <div className="pr-card-text">{project.shortDesc}</div>
                <div className="pr-card-btn-container">
                  <button
                    className="pr-btn pr-btn-primary"
                    onClick={(e) => handleViewDetailsClick(e, project.id)}
                  >
                    View More 
                  </button>
                  <button
                    className="pr-btn pr-btn-secondary"
                    onClick={(e) => handleGitHubClick(e, project.github)}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODAL --- */}
        {selectedProject && (
          <div
            className={`pr-modal-overlay ${selectedProject ? 'active' : ''}`}
            onClick={handleOverlayClick}
          >
            <div className="pr-modal-container">
              <div className="pr-modal-header">
                <h2 className="pr-modal-title">{selectedProject.title}</h2>
                <button className="pr-modal-close" onClick={handleCloseModal}></button>
              </div>
              <div className="pr-modal-body">
                <div className="pr-modal-image">
                    {selectedProject.displayAssetType === "yt-video" ?
                      <iframe
                        src={`${selectedProject.displayAsset}?modestbranding=1&rel=0&showinfo=0&fs=1&controls=1&disablekb=1&iv_load_policy=3&cc_load_policy=0&playsinline=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                      </iframe>
                      : <img id={selectedProject.displayAssetType || "gif"} src={selectedProject.displayAsset} alt={selectedProject.title} />
                    } 
                    
                </div>

                <div className="pr-modal-section">
                 <Markdown>{markdownContent}</Markdown>
                </div>

                <div className="pr-modal-section">
                  <h3>Skills</h3>
                  <div className="pr-modal-tech">
                    {selectedProject.skills.map((skill, index) => (
                      <span key={index} className="pr-tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="pr-modal-links">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-modal-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-modal-link pr-modal-link-secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}