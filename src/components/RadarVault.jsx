import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film, Sparkles, Clock, Eye } from 'lucide-react';
import { RADAR_VAULT_VIDEOS } from '../data/mockData';

export default function RadarVault() {
  const [activeVideo, setActiveVideo] = useState(RADAR_VAULT_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="vault" className="py-14 lg:py-20 bg-[#0F0F12] text-white border-y border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lux-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-lux-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-lux-gold font-semibold text-xs tracking-[0.25em] uppercase mb-1">
              <Film className="w-4 h-4" />
              <span>SALA DE CINEMA & BASTIDORES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Radar Vault
            </h2>
          </div>
          <span className="text-xs text-white/50 font-light">
            Mini-documentários exclusivos com acesso aos ateliês e pistas de teste
          </span>
        </div>

        {/* Video Theatre Layout: Big Player (8 Cols) + Playlist (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Cinematic Video Player (8 Cols) */}
          <div className="lg:col-span-8 bg-black/60 rounded border border-white/10 overflow-hidden shadow-2xl">
            <div className="relative aspect-video w-full bg-black overflow-hidden group">
              
              {/* Actual Video or Fallback Thumbnail */}
              {activeVideo.videoUrl && isPlaying ? (
                <video
                  src={activeVideo.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Top Category Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-lux-gold text-black font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">
                  {activeVideo.category}
                </span>
                <span className="bg-black/60 text-white backdrop-blur-md text-[10px] px-2.5 py-1 rounded-sm flex items-center gap-1">
                  <Eye className="w-3 h-3 text-lux-emerald" />
                  {activeVideo.views}
                </span>
              </div>

              {/* Big Center Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-panel border border-white/30 flex items-center justify-center text-white hover:text-lux-gold hover:scale-110 transition-all duration-300 shadow-2xl group/btn"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-white group-hover/btn:fill-lux-gold transition-colors" />
                )}
              </button>

              {/* Video Bottom Floating Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 hover:bg-white/20 backdrop-blur-md transition-colors"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-lux-gold" />}
                  </button>
                  <span className="text-[11px] font-mono text-white/80">
                    {isPlaying ? 'REPRODUZINDO' : 'PAUSADO'} • {activeVideo.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="p-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                {activeVideo.subtitle}
              </p>
            </div>
          </div>

          {/* Right Playlist Selector (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/60 mb-1">
              Catálogo de Documentários ({RADAR_VAULT_VIDEOS.length})
            </h4>

            {RADAR_VAULT_VIDEOS.map((item) => {
              const isSelected = activeVideo.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveVideo(item);
                    setIsPlaying(true);
                  }}
                  className={`group cursor-pointer p-3.5 rounded border transition-all duration-300 flex gap-3.5 items-center ${
                    isSelected 
                      ? 'bg-white/10 border-lux-gold/60 shadow-lg' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="relative w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-black">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white/80" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase tracking-wider text-lux-gold font-bold block mb-0.5">
                      {item.category}
                    </span>
                    <h5 className="font-serif text-xs font-semibold text-white line-clamp-2 leading-tight group-hover:text-lux-gold transition-colors">
                      {item.title}
                    </h5>
                    <div className="mt-1 flex items-center gap-2 text-[10px] text-white/50">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
