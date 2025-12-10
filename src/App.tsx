import { useEffect, useState } from "react";
import DashboardNeedsAttention from "./imports/DashboardNeedsAttention";

export default function App() {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Scale down if viewport is smaller than 1440px
      if (width < 1440) {
        setScale(width / 1440);
      } else {
        setScale(1);
      }
    };
    
    // Set initial scale
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#171719]">
      {/* Responsive wrapper that scales the design */}
      <div 
        className="origin-top-left"
        style={{
          transform: `scale(${scale})`,
          width: '1440px',
          transformOrigin: 'top left',
        }}
      >
        <DashboardNeedsAttention scale={scale} />
      </div>
    </div>
  );
}