import React, { useRef, useState } from 'react';

/**
 * ZoomableImageWithPan component for zoom in/out and pan (scroll) while zoomed
 */
const ZoomableImageWithPan = ({ src, alt, maxZoom = 2, minZoom = 1, step = 0.2, ...props }) => {
  const [zoom, setZoom] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom(z => Math.min(z + step, maxZoom));
  };
  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom(z => Math.max(z - step, minZoom));
    setOffset({ x: 0, y: 0 });
  };
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setDragging(false);
  };
  const handleMouseDown = (e) => {
    if (zoom === 1) return;
    setDragging(true);
    setStartDrag({ x: e.clientX, y: e.clientY });
    setStartOffset(offset);
  };
  const handleMouseUp = () => setDragging(false);
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - startDrag.x;
    const dy = e.clientY - startDrag.y;
    setOffset({
      x: startOffset.x + dx,
      y: startOffset.y + dy
    });
  };
  // Prevent image drag ghost
  const handleDragStart = (e) => e.preventDefault();

  // Clamp offset so image doesn't go out of bounds
  const getClampedOffset = () => {
    if (!containerRef.current) return offset;
    const rect = containerRef.current.getBoundingClientRect();
    const imgW = rect.width;
    const imgH = rect.height;
    const maxX = ((zoom - 1) * imgW) / 2;
    const maxY = ((zoom - 1) * imgH) / 2;
    return {
      x: Math.max(-maxX, Math.min(offset.x, maxX)),
      y: Math.max(-maxY, Math.min(offset.y, maxY))
    };
  };
  const clampedOffset = getClampedOffset();

  return (
    <div
      className="relative w-full group select-none"
      style={{ cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      tabIndex={0}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        onDragStart={handleDragStart}
        style={{
          transition: dragging ? 'none' : 'transform 0.3s',
          transform: `scale(${zoom}) translate(${clampedOffset.x / zoom}px, ${clampedOffset.y / zoom}px)`,
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          width: '100%',
          objectFit: 'contain',
        }}
        className="w-full h-auto"
        {...props}
      />
      {hovered && (
        <div className="absolute bottom-2 right-2 flex gap-2 bg-white/80 rounded p-1 shadow z-10">
          <button
            onClick={handleZoomIn}
            className="px-2 py-1 text-lg font-bold rounded hover:bg-gray-200"
            aria-label="Zoom in"
            type="button"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="px-2 py-1 text-lg font-bold rounded hover:bg-gray-200"
            aria-label="Zoom out"
            type="button"
          >
            –
          </button>
        </div>
      )}
    </div>
  );
};

export default ZoomableImageWithPan;
