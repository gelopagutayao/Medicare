import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  type: 'cross' | 'heart' | 'pill' | 'stethoscope' | 'caduceus';
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

const shapes: Omit<Shape, 'id'>[] = [
  { type: 'cross', x: 10, y: 20, size: 24, duration: 15, delay: 0, opacity: 0.15, rotation: 0 },
  { type: 'cross', x: 80, y: 15, size: 20, duration: 18, delay: 2, opacity: 0.12, rotation: 45 },
  { type: 'heart', x: 25, y: 60, size: 18, duration: 20, delay: 1, opacity: 0.1, rotation: 0 },
  { type: 'heart', x: 70, y: 75, size: 22, duration: 16, delay: 3, opacity: 0.12, rotation: 15 },
  { type: 'pill', x: 15, y: 40, size: 28, duration: 22, delay: 0.5, opacity: 0.1, rotation: 30 },
  { type: 'pill', x: 85, y: 50, size: 24, duration: 19, delay: 2.5, opacity: 0.08, rotation: -20 },
  { type: 'stethoscope', x: 60, y: 25, size: 30, duration: 24, delay: 1, opacity: 0.1, rotation: 10 },
  { type: 'stethoscope', x: 40, y: 80, size: 26, duration: 17, delay: 4, opacity: 0.12, rotation: -15 },
  { type: 'caduceus', x: 90, y: 35, size: 28, duration: 21, delay: 2, opacity: 0.08, rotation: 5 },
  { type: 'caduceus', x: 5, y: 70, size: 22, duration: 18, delay: 3.5, opacity: 0.1, rotation: -10 },
  { type: 'cross', x: 50, y: 10, size: 16, duration: 14, delay: 1.5, opacity: 0.1, rotation: 20 },
  { type: 'heart', x: 35, y: 45, size: 14, duration: 16, delay: 2.2, opacity: 0.08, rotation: -5 },
];

const MedicalShapesBackground = () => {
  const [shapesState, setShapesState] = useState<Shape[]>([]);

  useEffect(() => {
    setShapesState(shapes.map((shape, index) => ({ ...shape, id: index })));
  }, []);

  const renderShape = (type: string, size: number, rotation: number) => {
    const style = { width: size, height: size };
    
    switch (type) {
      case 'cross':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" transform={`rotate(${rotation} 12 12)`} />
          </svg>
        );
      case 'heart':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" transform={`rotate(${rotation} 12 12)`} />
          </svg>
        );
      case 'pill':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
            <path d="M4.22 11.29l2.12-2.12c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L1.39 8.46c-.78.78-.78 2.05 0 2.83l2.83 2.83c.79.78 2.05.78 2.83 0zm18.36-2.83l-2.12 2.12c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83l2.83-2.83c.78-.78 2.05-.78 2.83 0 .78.78.78 2.05.29 2.54zM8.5 15.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" transform={`rotate(${rotation} 12 12)`} />
          </svg>
        );
      case 'stethoscope':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
            <path d="M12 2C9.24 2 7 4.24 7 7v4h2V7c0-1.66 1.34-3 3-3s3 1.34 3 3v4h2V7c0-2.76-2.24-5-5-5zm-1 9h2v5c0 1.1-.9 2-2 2s-2-.9-2-2v-5zm4 7c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5zm0-10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" transform={`rotate(${rotation} 12 12)`} />
          </svg>
        );
      case 'caduceus':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
            <path d="M12 2C9.24 2 7 4.24 7 7c0 1.18.41 2.27 1.1 3.13L6 14v2h2v2h2v-2h2v-2h2v-2h-2.23C10.72 10.52 11 9.81 11 9c0-2.76-2.24-5-5-5zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1-4h-2v2h2v-2zm-2 4h2v2h-2v-2zM7 19v2h2v-2H7zm10 0v2h2v-2h-2zm1-6h-2v2h2v-2zm-1 3c0-2.76-2.24-5-5-5s-5 2.24-5 5h2c0-1.66 1.34-3 3-3s3 1.34 3 3z" transform={`rotate(${rotation} 12 12)`} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapesState.map((shape) => (
        <div
          key={shape.id}
          className="absolute text-[#09637E] animate-float"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            transform: `rotate(${shape.rotation}deg)`,
          }}
        >
          {renderShape(shape.type, shape.size, shape.rotation)}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(-15px) translateX(-15px) rotate(-3deg);
          }
          75% {
            transform: translateY(-40px) translateX(5px) rotate(2deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MedicalShapesBackground;
