import { useState } from 'react';
import './stories.css';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  url: string;
}

export default function Stories(){
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items: CarouselItem[] = [
    {
      id: 1,
      image: 'assets/stories/manoranjan.png',
      title: 'Manoranjan',
      subtitle: 'A tale of modern cinema in Bollywood.',
      url: 'https://medium.com/@a.bharambe123/manoranjan-9ad2946e079f'
    },
    {
      id: 2,
      image: 'assets/stories/hijra.png',
      title: 'Hijra',
      subtitle: '',
      url: 'https://medium.com/@a.bharambe123/hijra-5cf7e2760f09'
    },
    {
      id: 3,
      image: 'assets/stories/yellow.png',
      title: 'Yellow',
      subtitle: 'An heartwarming story of a single mother. How far can love push you?',
      url: 'https://medium.com/@a.bharambe123/yellow-3a2234884551'
    },
    {
      id: 4,
      image: 'assets/stories/mehsoos.png',
      title: 'Mehsoos',
      subtitle: 'A tale of blurring aspirations and reality.',
      url: 'https://medium.com/@a.bharambe123/mehsoos-d196d28f06f4'
    },
    {
      id: 5,
      image: 'assets/stories/assignment.png',
      title: 'Assignment',
      subtitle: 'Do you change your principles in testing time or you stick to them?',
      url: 'https://medium.com/@a.bharambe123/the-assignment-87ca4ffedd1b'
    },
  ];

  return (
    <div id="stories" className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-header">
          <h1 className="carousel-main-title">Stories</h1>
          {/* <p className="carousel-main-subtitle">Stories written by me in free time.</p> */}
        </div>

        <div className="carousel-items-container">
          {items.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const handleClick = (isHovered: boolean, url: string) => {
                isHovered && window.open(url, '_blank', 'noopener,noreferrer');
            };
            return (
              <div
                key={item.id}
                className={`carousel-item ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={()=> handleClick(isHovered, item.url)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-image"
                />

                <div className="carousel-overlay">
                  <h2 className="carousel-item-title">{item.title}</h2>
                  <p className="carousel-item-subtitle">{item.subtitle}</p>
                </div>

                <div className="carousel-indicator" />
              </div>
            );
          })}
        </div>

        <div className="carousel-dots">
          {items.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${hoveredIndex === index ? 'active' : ''}`}
              onClick={() => setHoveredIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

