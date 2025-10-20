
import './experience.css'
import { useState, useEffect, useRef } from 'react';
// import './experience.css';
import Markdown from 'react-markdown'
import expData from '../../assets/experience/expData.json';

interface ExperienceItem {
  year: string;
  title: string;
  role: string;
  'short-desc': string;
  'full-desc': string;
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const descBoxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences: ExperienceItem[] = expData.items;

  const loadMarkdownContent = async (filePath: string) => {
    try {
      const response = await fetch(`/assets/experience/${filePath}`);
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

  const updateDotPosition = (index: number) => {
    if (!dotRef.current || !containerRef.current || !descBoxRefs.current[index]) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = descBoxRefs.current[index]!.getBoundingClientRect();
    
    const relativeTop = targetRect.top - containerRect.top;
    const boxHeight = targetRect.height;
    const centerPosition = relativeTop + (boxHeight / 2) - (dotRef.current.offsetHeight / 2);
    
    dotRef.current.style.top = `${centerPosition}px`;
  };

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
    updateDotPosition(index);

    // For mobile - open modal
    if (window.innerWidth <= 768) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  useEffect(() => {
    // Initialize dot position
    updateDotPosition(activeIndex);

    // Load markdown content for the active experience
    if (experiences[activeIndex]) {
      loadMarkdownContent(experiences[activeIndex]['full-desc']);
    }

    // Handle window resize
    const handleResize = () => {
      updateDotPosition(activeIndex);

      // Close modal if switching to desktop view
      if (window.innerWidth > 768 && showModal) {
        setShowModal(false);
      }
    };

    let resizeTimer: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [activeIndex, showModal]);

    return(

        <div id="experience" className="exp-container">
           <div className='exp-heading'>Experience</div>
           <div className='exp-internal-container'>
            <div className="exp-timeline-container">
                <div className="exp-vertical-timeline">
                    <div className="timeline-line"></div>
                    <div className="timeline-dot" ref={dotRef}></div>
                </div>
                <div className="exp-timeline-desc" ref={containerRef}>
                    {experiences.map((exp, index) => (
                    <div
                        key={index}
                        ref={el => { descBoxRefs.current[index] = el; }}
                        className={`exp-desc ${activeIndex === index ? 'active' : ''}`}
                        id={`exp-desc-${index+1}`}
                        onClick={() => handleBoxClick(index)}
                    >
                        <span className="exp-title">{exp.title}</span>
                        <span className="exp-role">{exp.role}</span>
                        <span className="exp-year">{exp.year}</span>
                    </div>
                    ))}
                </div>
                </div>
                <div className={`exp-main-desc-container ${showModal ? 'modal-active' : ''}`}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={handleCloseModal}>
                            ×
                        </button>
                        <Markdown>{markdownContent}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    )
}