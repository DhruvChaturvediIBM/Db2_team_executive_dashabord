import React, { useState, useRef } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltEffect?: boolean;
  onClick?: () => void;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  tiltEffect = true,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tiltEffect && isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
      }}
      className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer ${className}`}
    >
      {/* Glare effect overlay */}
      {tiltEffect && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};
