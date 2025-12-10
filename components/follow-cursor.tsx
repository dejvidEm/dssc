'use client';

import React, { useEffect } from 'react';

interface FollowCursorProps {
  color?: string;
  size?: number;
  stiffness?: number;
  damping?: number;
}

const FollowCursor: React.FC<FollowCursorProps> = ({ 
  color = '#2c4a6b40', // Slight dark blue, more transparent
  size = 14, // Bigger size
  stiffness = 0.08, // Lower = more bouncy with more delay
  damping = 0.72 // Lower = less damping, more bounce
}) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    let lastTime = performance.now();
    let isOverNavbar = false;
    let isOverHeroImage = false;
    let isOverContactForm = false;
    let currentSize = size;
    let targetSize = size;
    const normalColor = color;
    const hoverColor = '#2c4a6bb0'; // Slight dark blue, less transparent (more opaque) when hovering - ~69% opacity
    let currentColor = normalColor;
    let targetColor = normalColor;
    let imageRect: DOMRect | null = null;
    const borderRadius = 8; // rounded-lg = 8px

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    class BouncingDot {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      width: number;
      stiffness: number;
      damping: number;

      constructor(x: number, y: number, width: number, stiffness: number, damping: number) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.width = width;
        this.stiffness = stiffness;
        this.damping = damping;
      }

      update(targetX: number, targetY: number, deltaTime: number, context: CanvasRenderingContext2D, shouldHide: boolean, showArrow: boolean, dotSize: number, dotColor: string) {
        // Calculate spring force (proportional to distance)
        const dx = targetX - this.position.x;
        const dy = targetY - this.position.y;
        
        // Apply spring force (stiffness controls how strong the spring is)
        // Lower stiffness = more delay and bouncy effect
        const forceX = dx * this.stiffness;
        const forceY = dy * this.stiffness;
        
        // Update velocity with force and damping
        // Lower damping = more oscillation/bounce
        this.velocity.x += forceX;
        this.velocity.y += forceY;
        this.velocity.x *= this.damping; // Damping reduces velocity over time
        this.velocity.y *= this.damping;
        
        // Update position based on velocity with normalized delta time
        const normalizedDelta = Math.min(deltaTime / 16, 2); // Cap to prevent large jumps
        this.position.x += this.velocity.x * normalizedDelta;
        this.position.y += this.velocity.y * normalizedDelta;
        
        // Update size smoothly
        this.width += (dotSize - this.width) * 0.15;
        
        // Don't draw if over navbar
        if (shouldHide) return;
        
        // Draw the dot
        context.fillStyle = dotColor;
        context.beginPath();
        context.arc(
          this.position.x,
          this.position.y,
          this.width,
          0,
          2 * Math.PI
        );
        context.fill();
        context.closePath();
        
        // Draw arrow icon if needed
        if (showArrow && this.width > 12) {
          context.strokeStyle = 'rgba(255, 255, 255, 0.9)';
          context.lineWidth = 2;
          context.lineCap = 'round';
          context.lineJoin = 'round';
          
          // Draw arrow pointing right
          const arrowSize = this.width * 0.4;
          context.beginPath();
          context.moveTo(this.position.x - arrowSize * 0.5, this.position.y);
          context.lineTo(this.position.x + arrowSize * 0.5, this.position.y);
          context.moveTo(this.position.x + arrowSize * 0.3, this.position.y - arrowSize * 0.3);
          context.lineTo(this.position.x + arrowSize * 0.5, this.position.y);
          context.lineTo(this.position.x + arrowSize * 0.3, this.position.y + arrowSize * 0.3);
          context.stroke();
        }
      }
    }

    const dot = new BouncingDot(width / 2, height / 2, size, stiffness, damping);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      
      // Check if cursor is over navbar (navbar is fixed at top with h-16 = 64px)
      const navbarHeight = 64; // h-16 = 4rem = 64px
      isOverNavbar = e.clientY <= navbarHeight;
      
      // Check if cursor is over any hero image (can be multiple)
      const heroImageElements = document.querySelectorAll('[data-hero-image="true"]');
      isOverHeroImage = false;
      imageRect = null;
      
      for (const heroImageElement of heroImageElements) {
        const rect = heroImageElement.getBoundingClientRect();
        const isOver = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        
        if (isOver) {
          isOverHeroImage = true;
          imageRect = rect;
          break;
        }
      }
      
      // Check if cursor is over contact form
      const contactFormElement = document.querySelector('[data-contact-form="true"]');
      if (contactFormElement) {
        const formRect = contactFormElement.getBoundingClientRect();
        isOverContactForm = (
          e.clientX >= formRect.left &&
          e.clientX <= formRect.right &&
          e.clientY >= formRect.top &&
          e.clientY <= formRect.bottom
        );
      } else {
        // Reset if element doesn't exist (e.g., on different page)
        isOverContactForm = false;
      }
      
      // Update target size and color based on hover state
      targetSize = isOverHeroImage ? size * 3 : size;
      targetColor = isOverHeroImage ? hoverColor : normalColor;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Check if device became mobile and hide cursor if so
      const isMobile = window.matchMedia('(pointer: coarse)').matches || 
                       window.matchMedia('(max-width: 1024px)').matches ||
                       'ontouchstart' in window ||
                       navigator.maxTouchPoints > 0;
      
      if (isMobile && canvas) {
        // Hide canvas on mobile without destroying listeners
        canvas.style.display = 'none';
        if (animationFrame) cancelAnimationFrame(animationFrame);
        return;
      }
      
      // Show canvas if it was hidden and we're back on desktop
      if (canvas && canvas.style.display === 'none') {
        canvas.style.display = 'block';
        if (!animationFrame) {
          lastTime = performance.now();
          animationFrame = requestAnimationFrame(loop);
        }
      }
      
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
      // Update image rect on resize (check all hero images)
      const heroImageElements = document.querySelectorAll('[data-hero-image="true"]');
      if (heroImageElements.length > 0 && isOverHeroImage) {
        // Find which one we're currently over
        for (const heroImageElement of heroImageElements) {
          const rect = heroImageElement.getBoundingClientRect();
          if (cursor.x >= rect.left && cursor.x <= rect.right &&
              cursor.y >= rect.top && cursor.y <= rect.bottom) {
            imageRect = rect;
            break;
          }
        }
      }
    };

    const loop = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Smoothly transition size
      currentSize += (targetSize - currentSize) * 0.15;
      
      // Smoothly transition color towards target
      if (currentColor !== targetColor) {
        // Simple approach: gradually change color
        const transitionSpeed = 0.15;
        const currentHex = currentColor.replace('#', '');
        const targetHex = targetColor.replace('#', '');
        
        // Interpolate alpha channel (last 2 hex digits)
        if (currentHex.length === 8 && targetHex.length === 8) {
          const currentAlpha = parseInt(currentHex.substring(6, 8), 16);
          const targetAlpha = parseInt(targetHex.substring(6, 8), 16);
          const newAlpha = Math.round(currentAlpha + (targetAlpha - currentAlpha) * transitionSpeed);
          currentColor = targetColor.substring(0, 7) + newAlpha.toString(16).padStart(2, '0');
        } else {
          currentColor = targetColor;
        }
      }

      if (context) {
        context.clearRect(0, 0, width, height);
        
        // Don't draw if over navbar or contact form, but continue animation loop
        if (!isOverNavbar && !isOverContactForm) {
          // Apply clipping when hovering over image
          if (isOverHeroImage && imageRect) {
            context.save();
            // Create rounded rectangle path for clipping
            const x = imageRect.left;
            const y = imageRect.top;
            const w = imageRect.width;
            const h = imageRect.height;
            const r = borderRadius;
            
            context.beginPath();
            context.moveTo(x + r, y);
            context.lineTo(x + w - r, y);
            context.quadraticCurveTo(x + w, y, x + w, y + r);
            context.lineTo(x + w, y + h - r);
            context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            context.lineTo(x + r, y + h);
            context.quadraticCurveTo(x, y + h, x, y + h - r);
            context.lineTo(x, y + r);
            context.quadraticCurveTo(x, y, x + r, y);
            context.closePath();
            context.clip();
          }
          
          dot.update(cursor.x, cursor.y, deltaTime, context, isOverNavbar, isOverHeroImage, currentSize, currentColor);
          
          // Restore context if clipping was applied
          if (isOverHeroImage && imageRect) {
            context.restore();
          }
        }
      }

      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log('Reduced motion enabled, cursor effect skipped.');
        return;
      }

      // Check if device is mobile/touch device
      const isMobile = window.matchMedia('(pointer: coarse)').matches || 
                       window.matchMedia('(max-width: 1024px)').matches ||
                       'ontouchstart' in window ||
                       navigator.maxTouchPoints > 0;
      
      if (isMobile) {
        console.log('Mobile device detected, cursor effect skipped.');
        return;
      }

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d', { alpha: true });
      
      if (!context) return;

      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      canvas.width = width;
      canvas.height = height;

      document.body.appendChild(canvas);

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('resize', onWindowResize, { passive: true });

      lastTime = performance.now();
      animationFrame = requestAnimationFrame(loop);
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [color, size, stiffness, damping]);

  return null;
};

export default FollowCursor;

