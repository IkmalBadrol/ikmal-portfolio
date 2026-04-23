'use client';

import { useState, useRef, useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

export interface BubbleMenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: { bgColor?: string; textColor?: string };
}

export interface BubbleMenuProps {
  logo?: React.ReactNode;
  items?: BubbleMenuItem[];
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  menuAriaLabel?: string;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
  onMenuClick?: (isOpen: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function BubbleMenu({
  logo,
  items,
  menuBg = '#0f0f0f',
  menuContentColor = '#ffffff',
  useFixedPosition = true,
  menuAriaLabel = 'Toggle menu',
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12,
  onMenuClick,
  className = '',
  style,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const menuItems = items ?? [];
  const posClass = useFixedPosition ? 'fixed' : 'absolute';

  const handleToggle = () => {
    const next = !isMenuOpen;
    if (next) setShowOverlay(true);
    setIsMenuOpen(next);
    onMenuClick?.(next);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean) as HTMLElement[];
    const labels = labelRefs.current.filter(Boolean) as HTMLElement[];
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 24, autoAlpha: 0 });
      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, { scale: 1, duration: animationDuration, ease: animationEase });
        if (labels[i]) {
          tl.to(labels[i], { y: 0, autoAlpha: 1, duration: animationDuration, ease: 'power3.out' }, `-=${animationDuration * 0.9}`);
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, { y: 24, autoAlpha: 0, duration: 0.2, ease: 'power3.in' });
      gsap.to(bubbles, {
        scale: 0, duration: 0.2, ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);
        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (!isMenuOpen) return;
      const isDesktop = window.innerWidth >= 900;
      bubblesRef.current.forEach((bubble, i) => {
        if (bubble && menuItems[i]) {
          gsap.set(bubble, { rotation: isDesktop ? (menuItems[i].rotation ?? 0) : 0 });
        }
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      <nav className={`bubble-menu ${posClass} ${className}`} style={{ ...style, zIndex: 999, justifyContent: 'flex-end' }} aria-label="Main navigation">
        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}
        >
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span className="menu-line short" style={{ background: menuContentColor }} />
        </button>
      </nav>

      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${posClass}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="pill-list" role="menu" aria-label="Menu links">
            {menuItems.map((item, idx) => (
              <li key={idx} role="none" className="pill-col">
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel ?? item.label}
                  className="pill-link"
                  style={{
                    '--item-rot': `${item.rotation ?? 0}deg`,
                    '--pill-bg': menuBg,
                    '--pill-color': menuContentColor,
                    '--hover-bg': item.hoverStyles?.bgColor ?? '#1a1a1a',
                    '--hover-color': item.hoverStyles?.textColor ?? menuContentColor,
                  } as React.CSSProperties}
                  ref={el => { bubblesRef.current[idx] = el; }}
                  onClick={e => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  <span className="pill-label" ref={el => { labelRefs.current[idx] = el; }}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
