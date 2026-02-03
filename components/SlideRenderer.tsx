import React, { useState, useEffect, useRef } from 'react';
import { SlideData, SlideType } from '../types';
import mermaid from 'mermaid';
import { 
  Database, 
  Users, 
  Bot, 
  TrendingUp, 
  CheckCircle,
  Truck,
  Phone,
  Building2,
  FileText,
  ArrowRight,
  Search,
  LayoutTemplate,
  Network,
  Rocket,
  Zap,
  X,
  AlertCircle,
  ZoomIn,
  Maximize2,
  List,
  Target,
  ShieldAlert,
  PackageCheck,
  Image as ImageIcon,
  Workflow
} from 'lucide-react';

interface SlideRendererProps {
  data: SlideData;
  isActive: boolean;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ data, isActive }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [showArchModal, setShowArchModal] = useState(false);
  const mermaidRef = useRef<HTMLDivElement>(null);

  // Initialize mermaid configuration
  useEffect(() => {
    mermaid.initialize({ 
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'Inter, sans-serif'
    });
  }, []);

  // Render mermaid diagram when modal opens
  useEffect(() => {
    if (showArchModal && data.mermaidDefinition && mermaidRef.current) {
        // Clear previous content
        mermaidRef.current.innerHTML = '';
        
        // Use a unique ID for the diagram
        const id = `mermaid-${Date.now()}`;
        
        // Attempt to render
        mermaid.render(id, data.mermaidDefinition).then(({ svg }) => {
            if (mermaidRef.current) {
                mermaidRef.current.innerHTML = svg;
            }
        }).catch(err => {
            console.error("Mermaid rendering failed", err);
            if (mermaidRef.current) {
                mermaidRef.current.innerHTML = '<p class="text-red-500">Error rendering diagram</p>';
            }
        });
    }
  }, [showArchModal, data.mermaidDefinition]);

  // Close lightbox/modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setLightboxImg(null);
            setShowArchModal(false);
        }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const isDark = data.theme === 'dark';

  // Lightbox Modal Component
  const Lightbox = () => {
      if (!lightboxImg) return null;
      return (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setLightboxImg(null)}
          >
              <button 
                onClick={() => setLightboxImg(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                  <X size={48} />
              </button>
              <img 
                src={lightboxImg} 
                alt="Full view" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              />
          </div>
      );
  };

  // Architecture Modal Component
  const ArchitectureModal = () => {
      if (!showArchModal) return null;
      return (
          <div 
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
            onClick={() => setShowArchModal(false)}
          >
             <div 
                className="bg-white w-full max-w-6xl h-[80vh] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
             >
                 {/* Header */}
                 <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="text-2xl font-brand text-black">Arquitectura del Sistema</h3>
                        <p className="text-sm text-gray-500">Flujo de datos y componentes</p>
                    </div>
                    <button 
                        onClick={() => setShowArchModal(false)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <X size={24} className="text-gray-500" />
                    </button>
                 </div>

                 {/* Content */}
                 <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-white relative">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                     <div ref={mermaidRef} className="w-full flex justify-center mermaid-container">
                         {/* Mermaid SVG will be injected here */}
                         <div className="flex items-center gap-2 text-gray-400 animate-pulse">
                             <List size={20} /> Generando diagrama...
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      );
  }

  if (data.type === SlideType.HERO) {
    // Check if title is long (e.g. for Roadmap) to adjust font size
    const isLongTitle = data.title.length > 15;

    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10 w-full max-w-[90%] mx-auto">
         {/* Main Typography */}
         <div className="relative flex flex-col items-center justify-center">
            {/* Dynamic Title with responsive sizing */}
            <h1 className={`${isLongTitle ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-[6rem] md:text-[10rem]'} leading-[1] md:leading-[0.9] font-brand tracking-tighter text-white transition-all duration-300`}>
              {data.title}
            </h1>
            
            {/* Subtitle adjusted for longer text */}
            <h2 className={`mt-6 ${isLongTitle ? 'text-2xl md:text-3xl' : 'max-w-5xl text-2xl md:text-5xl'} font-brand text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-gray-400 leading-tight`}>
              {data.subtitle}
            </h2>

            {/* Lightning Bolt Decoration (CSS shape) */}
            <div className={`absolute top-0 ${isLongTitle ? 'right-[-20px] -translate-y-4 text-4xl md:text-6xl' : 'right-[-20px] md:right-[-40px] text-5xl md:text-7xl'} animate-pulse`}>
                ⚡
            </div>
         </div>
         
         <div className="mt-12 space-y-3 flex flex-col items-center">
            {data.content?.map((line, idx) => (
                <p key={idx} className="text-xl md:text-2xl font-light tracking-wide text-gray-300 max-w-4xl">
                    {line}
                </p>
            ))}
         </div>
      </div>
    );
  }

  if (data.type === SlideType.PROBLEM) {
    return (
      <div className="flex flex-col h-full px-8 md:px-24 pt-24 pb-12 max-w-7xl mx-auto justify-center">
        <div className="relative mb-16">
            <h2 className="text-6xl md:text-8xl font-brand tracking-tight text-black relative z-10">
            {data.title}
            </h2>
            {/* Decorative colored underline/highlight */}
            <div className="absolute bottom-2 left-0 w-1/3 h-6 bg-purple-200/50 -skew-x-12 -z-0"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: List */}
            <div className="space-y-8">
                {data.content?.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-5 group">
                        {/* Custom Colored Bullet */}
                        <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300">
                             <div className="w-2.5 h-2.5 rounded-full bg-purple-600 group-hover:bg-white transition-colors duration-300"></div>
                        </div>
                        <p className="text-2xl md:text-3xl font-light leading-snug text-gray-800 group-hover:text-black transition-colors">
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right Column: Interactive Visual */}
            <div className="hidden md:flex items-center justify-center perspective-1000">
                <div className="relative w-96 h-96 group cursor-pointer">
                    
                    {/* Circle Container */}
                    <div className="absolute inset-0 rounded-full bg-white border-2 border-gray-100 shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-transparent group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.4)] transform group-hover:scale-105">
                        
                        {/* STATE 1: SIN ESTRATEGIA (Default) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-90 group-hover:blur-sm bg-gray-50/50">
                             {/* Scattered Elements Animation */}
                             <div className="absolute w-full h-full">
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gray-400 rounded-full animate-pulse"></div>
                                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-300 rounded-full animate-ping"></div>
                                <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                             </div>

                             <div className="relative z-10 bg-white p-6 rounded-full shadow-lg border border-gray-100">
                                <AlertCircle size={48} className="text-gray-400" />
                             </div>
                             
                             <p className="mt-6 text-xl font-brand text-gray-400 uppercase tracking-widest">Problema</p>
                             <p className="text-sm text-gray-400 mt-2 font-medium">Caos & Desconexión</p>
                        </div>

                        {/* STATE 2: CON ESTRATEGIA (Hover) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-600 via-violet-600 to-blue-500">
                             {/* Glowing Background Effect */}
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                             
                             {/* Orbit Rings */}
                             <div className="absolute w-64 h-64 border border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                             <div className="absolute w-52 h-52 border border-white/10 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>

                             <div className="relative z-10 bg-white/20 backdrop-blur-md p-6 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] mb-4 border border-white/30">
                                <Zap size={48} className="text-white fill-white" />
                             </div>
                             
                             <p className="text-2xl font-brand text-white uppercase tracking-widest drop-shadow-md">Solución</p>
                             <div className="flex gap-2 mt-3">
                                <span className="px-2 py-0.5 bg-white/20 rounded text-[10px] text-white font-bold uppercase backdrop-blur-sm">Orden</span>
                                <span className="px-2 py-0.5 bg-white/20 rounded text-[10px] text-white font-bold uppercase backdrop-blur-sm">Control</span>
                                <span className="px-2 py-0.5 bg-white/20 rounded text-[10px] text-white font-bold uppercase backdrop-blur-sm">Escala</span>
                             </div>
                        </div>

                    </div>
                    
                    {/* Interaction Hint */}
                    <div className="absolute -bottom-10 w-full text-center transition-opacity duration-300 group-hover:opacity-0">
                        <span className="text-xs uppercase tracking-widest text-gray-400 animate-pulse">Pasa el mouse</span>
                    </div>

                </div>
            </div>
        </div>
      </div>
    );
  }

  // UPDATED INFO TYPE SLIDE
  if (data.type === SlideType.INFO) {
    const hasDeliverables = data.deliverables && data.deliverables.length > 0;
    const hasImages = data.images && data.images.length > 0;
    const isSplitLayout = hasDeliverables || hasImages;

    return (
        <div className="flex flex-col h-full px-8 md:px-16 pt-20 pb-12 max-w-[1400px] mx-auto justify-center w-full relative">
            <Lightbox />
            <ArchitectureModal />
            
            <div className="mb-10 border-l-4 border-purple-600 pl-8 flex justify-between items-end">
                <div>
                    <h2 className={`text-5xl md:text-6xl font-brand leading-none mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        {data.title}
                    </h2>
                    {data.subtitle && (
                        <p className={`text-2xl font-light tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {data.subtitle}
                        </p>
                    )}
                </div>
                
                {/* Visual Architecture Button if Diagram exists */}
                {data.mermaidDefinition && (
                    <button 
                        onClick={() => setShowArchModal(true)}
                        className="hidden md:flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
                    >
                        <Workflow size={20} />
                        Previsualizar Arquitectura
                    </button>
                )}
            </div>

            <div className={`grid gap-12 ${isSplitLayout ? 'grid-cols-1 md:grid-cols-2 items-center' : 'grid-cols-1'}`}>
                
                {/* Left Column: Main Content */}
                <div className="space-y-6">
                    {data.content?.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className={`mt-1.5 p-1 rounded-full flex-shrink-0 ${isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
                                <CheckCircle size={20} />
                            </div>
                            <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                {item}
                            </p>
                        </div>
                    ))}
                    
                    {/* Mobile Button */}
                    {data.mermaidDefinition && (
                         <button 
                            onClick={() => setShowArchModal(true)}
                            className="md:hidden w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-lg font-bold mt-4"
                        >
                            <Workflow size={20} />
                            Ver Arquitectura
                        </button>
                    )}
                </div>

                {/* Right Column: Deliverables & Images */}
                {isSplitLayout && (
                    <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 fade-in">
                        
                        {/* Deliverables Box */}
                        {hasDeliverables && (
                            <div className={`p-8 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200 shadow-sm'}`}>
                                <div className="flex items-center gap-2 mb-6 border-b pb-4 border-dashed border-gray-300">
                                    <PackageCheck className="text-purple-600" />
                                    <h3 className={`text-xl font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        Entregables
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {data.deliverables?.map((del, idx) => (
                                        <li key={idx} className={`flex items-center gap-3 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                            {del}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Images Grid */}
                        {hasImages && (
                            <div>
                                <h3 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <ImageIcon size={16} /> Previsualización
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {data.images?.map((img, idx) => (
                                        <div 
                                            key={idx}
                                            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-purple-500 transition-all shadow-md group bg-gray-200"
                                            onClick={() => setLightboxImg(img)}
                                        >
                                            <img src={img} alt={`Visual ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                            <div className="absolute bottom-2 right-2 bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Maximize2 size={14} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
  }

  if (data.type === SlideType.SOLUTION) {
    // Flowchart Diagram Style
    const icons = [Search, LayoutTemplate, Network, Rocket];

    return (
      <div className="flex flex-col h-full px-8 justify-center items-center w-full max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-brand mb-4 text-center">
          {data.title}
        </h2>
        <p className="text-xl text-gray-500 mb-16 max-w-2xl text-center">
            {data.subtitle}
        </p>
        
        {/* Flow Diagram Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-4 md:gap-0 relative">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

            {data.process?.map((step, idx) => {
                const Icon = icons[idx] || Search;
                return (
                    <React.Fragment key={idx}>
                        <div className="flex-1 flex flex-col items-center text-center group">
                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-100 shadow-xl flex items-center justify-center mb-6 z-10 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300">
                                <Icon size={32} className="text-gray-800 group-hover:text-purple-600 transition-colors" />
                            </div>
                            
                            {/* Step Number */}
                            <span className="text-sm font-bold text-purple-600 mb-2 tracking-widest uppercase">
                                {step.step}
                            </span>

                            {/* Title */}
                            <h3 className="text-2xl font-brand mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed px-4 max-w-[250px]">
                                {step.description}
                            </p>
                        </div>
                        
                        {/* Mobile Arrow (between items, not after last) */}
                        {idx < (data.process?.length || 0) - 1 && (
                            <div className="md:hidden flex justify-center py-4">
                                <ArrowRight className="text-gray-300 rotate-90" />
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
      </div>
    );
  }

  if (data.type === SlideType.METRICS) {
    // Dynamic Grid logic: 3 items = 3 columns, 4 items = 4 columns (or 2x2)
    const gridColsClass = data.metrics?.length === 3 
        ? "grid-cols-1 md:grid-cols-3" 
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

    return (
      <div className="flex flex-col h-full px-8 md:px-24 justify-center max-w-7xl mx-auto w-full">
         <div className="mb-12 border-b border-black pb-8">
            <h2 className="text-5xl md:text-7xl font-brand mb-2">
                {data.title}
            </h2>
            <p className="text-xl text-gray-600">{data.subtitle}</p>
         </div>
        
        <div className={`grid ${gridColsClass} gap-8`}>
            {data.metrics?.map((metric, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-black transition-colors">
                    <div className="text-4xl md:text-5xl font-brand text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 mb-4 break-words">
                        {metric.value}
                    </div>
                    <div className="text-lg font-bold uppercase tracking-wider mb-2 border-l-2 border-black pl-3">
                        {metric.label}
                    </div>
                    <p className="text-sm text-gray-500 pl-3.5">
                        {metric.subLabel}
                    </p>
                </div>
            ))}
        </div>
      </div>
    );
  }

  if (data.type === SlideType.CASES) {
    const isSingle = data.cases?.length === 1;

    return (
        <div className="flex flex-col h-full px-8 md:px-16 justify-center w-full max-w-[1400px] mx-auto">
             <Lightbox />
             
             <div className="mb-8 flex items-end gap-6">
                <h2 className="text-5xl md:text-7xl font-brand leading-none">
                    {data.title}
                </h2>
                <span className="text-xl pb-2 font-medium text-gray-500 border-b border-gray-300 flex-grow">
                    {data.subtitle}
                </span>
             </div>
            
            <div className={`grid gap-8 w-full ${isSingle ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
                {data.cases?.map((item, idx) => (
                    <div key={idx} className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-6 ${isSingle ? 'md:flex-row items-stretch' : ''}`}>
                        
                        {/* Header Part of Card */}
                        <div className={`${isSingle ? 'md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 pr-6' : 'border-b border-gray-100 pb-6'}`}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-3 rounded-lg bg-gray-50 ${item.logoColor}`}>
                                    {item.client === 'NVO' ? <Truck size={24} /> : 
                                     item.client === 'Cruz Verde' ? <Phone size={24} /> :
                                     item.client === 'Farma Colombia' ? <FileText size={24} /> :
                                     <Building2 size={24} />}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-brand">{item.client}</h3>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{item.industry}</p>
                                </div>
                            </div>
                            
                            {/* Reto */}
                            <div className="mt-4">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">El Reto</p>
                                <p className="text-lg leading-snug font-medium text-gray-800">
                                    {item.challenge}
                                </p>
                            </div>
                        </div>
                        
                        {/* Content Part of Card */}
                        <div className={`flex flex-col gap-6 flex-1 ${isSingle ? 'justify-center pl-6' : ''}`}>
                             <div>
                                <p className="text-xs font-bold text-blue-600 uppercase mb-1 flex items-center gap-1">
                                    <CheckCircle size={12} /> Solución
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.solution}
                                </p>
                             </div>

                             {/* IMAGES BEFORE / AFTER (Only for NVO or if images exist) */}
                             {item.images && (
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    {/* Before Image */}
                                    <div 
                                        className="group relative h-32 rounded-lg overflow-hidden cursor-pointer border border-gray-200"
                                        onClick={() => item.images && setLightboxImg(item.images.before)}
                                    >
                                        <img src={item.images.before} alt="Antes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ZoomIn className="text-white" size={24} />
                                        </div>
                                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                            ANTES
                                        </div>
                                    </div>

                                    {/* After Image */}
                                    <div 
                                        className="group relative h-32 rounded-lg overflow-hidden cursor-pointer border border-gray-200"
                                        onClick={() => item.images && setLightboxImg(item.images.after)}
                                    >
                                        <img src={item.images.after} alt="Después" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Maximize2 className="text-white" size={24} />
                                        </div>
                                        <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                                            DESPUÉS
                                        </div>
                                    </div>
                                </div>
                             )}

                             <div className="mt-auto bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                                <p className="text-green-800 font-bold text-lg flex items-start gap-2">
                                    <TrendingUp size={20} className="mt-1" />
                                    {item.result}
                                </p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }

  if (data.type === SlideType.CONTACT) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10">
        <h2 className="text-8xl md:text-[10rem] font-brand text-white leading-none mb-4">
            GoBig.
        </h2>
        <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-[0.2em] uppercase mb-12">
            AGENCY
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl max-w-3xl w-full">
            <p className="text-2xl md:text-4xl font-brand text-white mb-8 leading-tight">
                {data.content?.[0]}
            </p>
            
            <button className="bg-white text-black text-xl font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
                {data.content?.[1]} <ArrowRight size={24} />
            </button>
            
            <div className="mt-12 pt-8 border-t border-white/10 grid md:grid-cols-2 gap-4 text-left">
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Director</p>
                    <p className="text-lg text-white font-medium">Michelle Mendez Carroz</p>
                </div>
                <div className="md:text-right">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Contacto</p>
                    <p className="text-lg text-white font-medium">michelle.mendez@gobigagency.co</p>
                    <p className="text-white">+57 3245034912</p>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SlideRenderer;