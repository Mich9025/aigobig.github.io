import React, { useState, useEffect } from 'react';
import { slides as mainSlides, roadmapSlides } from './data/slides';
import SlideRenderer from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Download, Loader2, Map, Layout } from 'lucide-react';
import { SlideType } from './types';

const App: React.FC = () => {
  // Helper to check URL state
  const getInitialDeck = (): 'main' | 'roadmap' => {
    if (typeof window !== 'undefined') {
        try {
            const params = new URLSearchParams(window.location.search);
            // Support both ?deck=roadmap and /roadmap path
            if (params.get('deck') === 'roadmap' || window.location.pathname.endsWith('/roadmap')) {
                return 'roadmap';
            }
        } catch (e) {
            console.warn("Could not read initial URL state:", e);
        }
    }
    return 'main';
  };

  const [activeDeck, setActiveDeck] = useState<'main' | 'roadmap'>(getInitialDeck);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
        const newDeck = getInitialDeck();
        if (newDeck !== activeDeck) {
            setActiveDeck(newDeck);
            setCurrentSlideIndex(0);
        }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeDeck]);

  // Determine which set of slides to use
  const slides = activeDeck === 'main' ? mainSlides : roadmapSlides;

  const heroBgImage = "https://gobigagency.vercel.app/_next/image?url=%2Fassets%2Fimgs%2Fshape%2Fimg-s-75.png&w=1920&q=75";

  // Function to toggle between decks
  const toggleDeck = () => {
    triggerTransition(() => {
        const nextDeck = activeDeck === 'main' ? 'roadmap' : 'main';
        
        // Update State
        setActiveDeck(nextDeck);
        setCurrentSlideIndex(0);

        // Update URL safely
        try {
            const url = new URL(window.location.href);
            if (nextDeck === 'roadmap') {
                url.searchParams.set('deck', 'roadmap');
            } else {
                url.searchParams.delete('deck');
            }
            window.history.pushState({}, '', url);
        } catch (e) {
            // Context likely prevents history manipulation (e.g. blob url or sandbox)
            console.debug('URL update skipped:', e);
        }
    });
  };

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
    // Give React a moment to render any pending state if needed
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
      filename: `GoBigAgency_${activeDeck === 'main' ? 'Presentation' : 'Roadmap'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        logging: false,
        scrollY: 0, // Important to prevent vertical offsets
        windowWidth: 1280, // Force the capture width
        windowHeight: 720,  // Force the capture height base
        x: 0,
        y: 0
      },
      jsPDF: { unit: 'px', format: [1280, 720], orientation: 'landscape' },
      pagebreak: { mode: 'avoid-all', after: '.page-break-after-always' }
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
  }, [currentSlideIndex, isTransitioning, activeDeck]);

  const currentSlide = slides[currentSlideIndex];
  const isDark = currentSlide.theme === 'dark';

  return (
    // Added z-10 here to ensure the main app sits ON TOP of the PDF container
    <div className={`h-screen w-full relative overflow-hidden transition-colors duration-500 z-10 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Backgrounds */}
      {isDark ? (
         <div className="absolute inset-0 z-0">
             {/* Dark Texture Base */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
             
             {/* Iridescent Glows - Rendered on ALL dark slides now (including Slide 1) to provide color */}
             <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/30 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[100px]"></div>

             {/* Specific Hero Background Image - Blended ON TOP of the glows */}
             {currentSlide.type === SlideType.HERO && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <img 
                        src={heroBgImage}
                        alt="" 
                        className="w-full h-full object-cover opacity-60 mix-blend-screen animate-ken-burns"
                    />
                </div>
             )}
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
        <div className="flex items-center gap-6">
            <div 
                className={`text-2xl font-brand tracking-wide cursor-pointer select-none transition-opacity duration-300 ${isDark ? 'text-white' : 'text-black'} ${currentSlideIndex === 0 && activeDeck === 'main' ? 'opacity-100' : 'opacity-100'}`} 
                onClick={() => goToSlide(0)}
            >
            GoBig.
            </div>

            {/* DECK SWITCHER BUTTON */}
            <button
                onClick={toggleDeck}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                    isDark 
                    ? 'border-white/30 hover:bg-white text-white hover:text-black' 
                    : 'border-black/30 hover:bg-black text-black hover:text-white'
                }`}
            >
                {activeDeck === 'main' ? (
                    <>
                        <Map size={14} /> Roadmap
                    </>
                ) : (
                    <>
                        <Layout size={14} /> GoBig AI
                    </>
                )}
            </button>
        </div>
        
        <div className="flex items-center gap-4">
            <button 
                onClick={handleDownloadPDF}
                disabled={isGeneratingPdf}
                className={`hidden p-2 rounded-full border transition-all flex items-center justify-center gap-2 px-4 ${isDark ? 'border-white hover:bg-white/10' : 'border-black hover:bg-black/5'}`}
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

      {/* PDF Export Container - DYNAMIC based on active Deck */}
      <div 
        id="pdf-export-container" 
        className="fixed top-0 left-[-15000px] -z-50 pointer-events-none"
        style={{ width: '1280px' }} 
      >
        {slides.map((slide, idx) => (
            <div key={idx} className={`w-[1280px] h-[720px] relative overflow-hidden page-break-after-always ${slide.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {/* Backgrounds - duplicated manually to ensure they capture correctly */}
                {slide.theme === 'dark' ? (
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
                        
                        {/* Always show glows in dark mode for PDF too */}
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>

                        {/* Show Image blended on top if Slide 1 */}
                        {slide.type === SlideType.HERO && (
                             <div className="absolute inset-0 flex items-center justify-center">
                                <img 
                                    src={heroBgImage}
                                    alt="" 
                                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="absolute inset-0 z-0 bg-white">
                        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 opacity-20 blur-3xl transform -translate-y-24 scale-y-150"></div>
                        <div className="absolute top-0 w-full h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    </div>
                )}
                
                {/* Header for PDF - Only show if NOT the Hero slide to avoid duplication */}
                {slide.type !== SlideType.HERO && (
                    <div className="absolute top-0 left-0 w-full p-12 z-50">
                        <div className={`text-3xl font-brand ${slide.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            GoBig.
                        </div>
                    </div>
                )}

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