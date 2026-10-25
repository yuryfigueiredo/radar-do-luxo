import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2, Move, Sparkles } from 'lucide-react';

/**
 * ==============================================================================
 * 💎 RADAR DO LUXO — IMAGE LIGHTBOX COM PINCH-TO-ZOOM & PAN
 * ==============================================================================
 * Recursos de Alta Precisão:
 * 1. Pinch-to-zoom nativo em mobile (dois dedos para abrir/fechar o zoom).
 * 2. Duplo toque / duplo clique (alterna entre 1x e 2.5x instantaneamente).
 * 3. Drag / Pan quando ampliado (arrastar com o dedo ou mouse).
 * 4. Scroll do mouse (zoom contínuo no desktop).
 * 5. Barra de controle com botões táteis (+ / - / Reset / Fechar).
 * 6. Light Dismiss (clique fora fecha) e tecla Escape.
 * 7. Prevenção de rolagem de fundo (bloqueia o body).
 * ==============================================================================
 */

export default function ImageLightboxModal({ isOpen, src, alt, title, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Referências para rastreamento de gestos
  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const touchDistanceRef = useRef(null);
  const initialTouchScaleRef = useRef(1);
  const lastTapRef = useRef(0);

  // Reseta estado ao abrir/fechar
  const resetTransform = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      resetTransform();
      // Trava scroll da página de fundo
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === '+' || e.key === '=') {
          setScale(s => Math.min(s + 0.5, 4));
        } else if (e.key === '-' || e.key === '_') {
          setScale(s => Math.max(s - 0.5, 1));
        } else if (e.key === '0') {
          resetTransform();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose, resetTransform]);

  // Se scale voltar a 1, centraliza a posição
  useEffect(() => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  if (!isOpen || !src) return null;

  // ============================================================================
  // ZOOM CONTROLS
  // ============================================================================
  const handleZoomIn = (e) => {
    e?.stopPropagation();
    setScale(s => Math.min(s + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e?.stopPropagation();
    setScale(s => Math.max(s - 0.5, 1));
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    resetTransform();
  };

  // ============================================================================
  // DOUBLE TAP / DOUBLE CLICK (Alterna entre 1x e 2.5x)
  // ============================================================================
  const handleDoubleTap = (e) => {
    e.stopPropagation();
    if (scale > 1) {
      resetTransform();
    } else {
      setScale(2.5);
    }
  };

  // ============================================================================
  // MOUSE WHEEL ZOOM (Desktop)
  // ============================================================================
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setScale(s => Math.min(Math.max(s + delta, 1), 4));
  };

  // ============================================================================
  // MOUSE DRAG & PAN (Desktop)
  // ============================================================================
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ============================================================================
  // TOUCH GESTURES: PINCH-TO-ZOOM & DRAG (Mobile)
  // ============================================================================
  const handleTouchStart = (e) => {
    // 1. PINCH COM 2 DEDOS
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
      initialTouchScaleRef.current = scale;
      return;
    }

    // 2. DUPLO TOQUE RÁPIDO (< 300ms)
    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        handleDoubleTap(e);
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      // 3. ARRASTO COM 1 DEDO QUANDO AMPLIADO
      if (scale > 1) {
        setIsDragging(true);
        dragStartRef.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y
        };
      }
    }
  };

  const handleTouchMove = (e) => {
    // 1. Gesto de PINCH ativo (dois dedos)
    if (e.touches.length === 2 && touchDistanceRef.current) {
      e.preventDefault();
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / touchDistanceRef.current;
      const newScale = Math.min(Math.max(initialTouchScaleRef.current * ratio, 1), 4);
      setScale(newScale);
      return;
    }

    // 2. Gesto de ARRASTAR (um dedo quando ampliado)
    if (e.touches.length === 1 && isDragging && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y
      });
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-2xl select-none transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de Fotografia em Alta Resolução"
    >
      {/* ==================================================================== */}
      {/* TOP BAR: Título e Controles */}
      {/* ==================================================================== */}
      <div 
        className="relative z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 pr-4 max-w-[60%] sm:max-w-md">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lux-gold/20 border border-lux-gold/40 text-[9px] font-bold uppercase tracking-wider text-lux-gold">
            <Sparkles className="w-3 h-3 text-lux-gold" />
            <span>RADAR GALLERY 4K</span>
          </div>
          <span className="text-white text-xs sm:text-sm font-serif font-medium truncate">
            {title || alt || 'Fotografia Homologada'}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
            title="Diminuir Zoom (-)"
            aria-label="Diminuir Zoom"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Indicator */}
          <span className="text-[11px] font-mono font-semibold px-2 text-lux-gold min-w-[45px] text-center">
            {Math.round(scale * 100)}%
          </span>

          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            disabled={scale >= 4}
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
            title="Aumentar Zoom (+)"
            aria-label="Aumentar Zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Reset */}
          {scale > 1 && (
            <button
              onClick={handleReset}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Redefinir (100%)"
              aria-label="Redefinir Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 ml-1 sm:ml-2 rounded-full bg-lux-gold hover:bg-lux-gold-light text-black font-bold transition-transform active:scale-95"
            title="Fechar (Esc)"
            aria-label="Fechar galeria"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* CANVAS CENTRAL DA IMAGEM (com gestos de pinch & drag) */}
      {/* ==================================================================== */}
      <div 
        ref={containerRef}
        className="relative flex-1 flex items-center justify-center overflow-hidden touch-none"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
        }}
        onClick={(e) => {
          if (scale === 1 && e.target === containerRef.current) {
            onClose();
          }
        }}
      >
        {/* Imagem com transform de escala e deslocamento */}
        <img
          src={src}
          alt={alt || 'Fotografia em Alta Resolução'}
          draggable={false}
          onDoubleClick={handleDoubleTap}
          className="max-h-[88vh] max-w-[92vw] w-auto h-auto object-contain transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transformOrigin: 'center center'
          }}
        />
      </div>

      {/* ==================================================================== */}
      {/* BOTTOM HINT BAR: Dicas táteis */}
      {/* ==================================================================== */}
      <div 
        className="relative z-20 flex items-center justify-center gap-4 py-3 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-[11px] text-white/70"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-1.5">
          <Move className="w-3.5 h-3.5 text-lux-gold" />
          <span>
            {scale > 1 
              ? 'Arraste para navegar pelos detalhes mecânicos' 
              : 'Pince com os dedos para dar zoom ou dê dois toques rápidos'}
          </span>
        </div>
        {scale > 1 && (
          <button 
            onClick={handleReset}
            className="text-lux-gold underline hover:text-white transition-colors text-[10px] uppercase tracking-wider font-semibold"
          >
            Ajustar à tela
          </button>
        )}
      </div>
    </div>
  );
}
