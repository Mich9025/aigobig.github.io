import React, { useState, useEffect } from 'react';
import { slides } from './data/slides';
import SlideRenderer from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1 && !isTransitioning) {
      triggerTransition(() => setCurrentSlideIndex(prev => prev + 1));
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0 && !isTransitioning) {
      triggerTransition(() => setCurrentSlideIndex(prev => prev - 1));
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlideIndex && !isTransitioning) {
      triggerTransition(() => setCurrentSlideIndex(index));
    }
  };

  const triggerTransition = (callback: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPdf(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = document.getElementById('pdf-export-container');
    if (!element) {
        setIsGeneratingPdf(false);
        return;
    }

    // @ts-ignore
    const worker = window.html2pdf();
    
    const opt = {
      margin: 0,
      filename: 'GoBigAgency_Presentation.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'px', format: [1280, 720], orientation: 'landscape' }
    };

    worker.set(opt).from(element).save().then(() => {
        setIsGeneratingPdf(false);
    }).catch((err: any) => {
        console.error("PDF Generation failed", err);
        setIsGeneratingPdf(false);
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isTransitioning]);

  const currentSlide = slides[currentSlideIndex];
  const isDark = currentSlide.theme === 'dark';

  return (
    <div className={`h-screen w-full relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Backgrounds */}
      {isDark ? (
         <div className="absolute inset-0 z-0">
             {/* Dark Texture */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
             {/* Iridescent Glows */}
             <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/30 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[100px]"></div>
         </div>
      ) : (
         <div className="absolute inset-0 z-0 bg-white">
             {/* Fluid Header Graphic */}
             <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-20 blur-3xl transform -translate-y-24 scale-y-150"></div>
             <div className="absolute top-0 w-full h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         </div>
      )}

      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
        {/* On dark slides, logo is white. On light slides, logo is colorful or black? PDF shows header on light slides has white text on the dark graphical part, or black text. Let's stick to theme color. */}
        <div 
            className={`text-2xl font-brand tracking-wide cursor-pointer select-none ${isDark ? 'text-white' : 'text-black'}`} 
            onClick={() => goToSlide(0)}
        >
          GoBig.
        </div>
        
        <div className="flex items-center gap-4">
            <button 
                onClick={handleDownloadPDF}
                disabled={isGeneratingPdf}
                className={`p-2 rounded-full border transition-all flex items-center justify-center gap-2 px-4 ${isDark ? 'border-white hover:bg-white/10' : 'border-black hover:bg-black/5'}`}
            >
                {isGeneratingPdf ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                <span className="hidden md:inline text-xs font-bold uppercase tracking-widest">PDF</span>
            </button>

            <div className="hidden md:flex gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentSlideIndex 
                            ? (isDark ? 'w-8 bg-white' : 'w-8 bg-black') 
                            : (isDark ? 'w-2 bg-white/30 hover:bg-white/50' : 'w-2 bg-black/20 hover:bg-black/40')
                        }`}
                    />
                ))}
            </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={`h-full w-full relative z-10 transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <SlideRenderer data={currentSlide} isActive={!isTransitioning} />
      </main>

      {/* Footer / Controls */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-50 flex justify-between items-end">
        <div className={`font-brand text-xl opacity-50 ${isDark ? 'text-white' : 'text-black'}`}>
            {currentSlideIndex + 1} <span className="text-xs align-top">/ {slides.length}</span>
        </div>

        <div className="flex gap-4">
            <button 
                onClick={prevSlide}
                disabled={currentSlideIndex === 0}
                className={`p-3 rounded-full border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${isDark ? 'border-white hover:bg-white text-black hover:text-black bg-transparent text-white' : 'border-black hover:bg-black hover:text-white bg-transparent text-black'}`}
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                disabled={currentSlideIndex === slides.length - 1}
                className={`p-3 rounded-full border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${isDark ? 'border-white bg-white text-black hover:bg-gray-200' : 'border-black bg-black text-white hover:bg-gray-800'}`}
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </div>

      {/* PDF Export Container */}
      <div 
        id="pdf-export-container" 
        className="fixed top-0 left-0 -z-50 pointer-events-none opacity-0"
        style={{ transform: 'translateX(-10000px)' }}
      >
        {slides.map((slide, idx) => (
            <div key={idx} className={`w-[1280px] h-[720px] relative overflow-hidden page-break-after-always ${slide.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {/* Backgrounds */}
                {slide.theme === 'dark' ? (
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
                         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
                    </div>
                ) : (
                    <div className="absolute inset-0 z-0 bg-white">
                        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-20 blur-3xl transform -translate-y-24 scale-y-150"></div>
                    </div>
                )}
                
                <div className="absolute top-0 left-0 w-full p-12 z-50">
                    <div className={`text-3xl font-brand ${slide.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        GoBig.
                    </div>
                </div>

                <div className="h-full w-full pt-16 pb-16">
                     <SlideRenderer data={slide} isActive={true} />
                </div>

                <div className={`absolute bottom-12 left-12 font-brand text-2xl opacity-50 z-50 ${slide.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {idx + 1} / {slides.length}
                </div>
            </div>
        ))}
      </div>

    </div>
  );
};

export default App;