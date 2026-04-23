'use client';

import { useRef } from 'react';
import { Download } from 'lucide-react';
import { Crosshair } from '@/components/animations';

export function FooterSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative w-full overflow-hidden border-t border-zinc-800 bg-black"
    >
      <Crosshair color="rgba(103,232,249,0.4)" containerRef={containerRef} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center md:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Available for opportunities</p>

        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Let&apos;s build something{' '}
          <span className="text-cyan-300">together</span>.
        </h2>

        <p className="max-w-md text-base leading-relaxed text-zinc-400">
          Download my resume to get the full picture — experience, projects, and skills in one place.
        </p>

        <a
          href="/MUHAMMAD IKMAL BIN BADROL HISHAM - RESUME.pdf"
          download="Muhammad_Ikmal_Resume.pdf"
          className="group relative inline-flex items-center gap-3 overflow-hidden text-4xl font-extrabold tracking-tight text-white transition-colors duration-300 hover:text-cyan-300 sm:text-5xl"
        >
          <span className="inline-flex flex-col overflow-hidden h-[1.2em] leading-[1.2em]">
            <span className="whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">Know me more</span>
            <span className="inline-flex items-center gap-3 whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
              Download CV
              <Download className="h-8 w-8 sm:h-10 sm:w-10" />
            </span>
          </span>
        </a>

        <p className="mt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} Muhammad Ikmal Bin Badrol Hisham..
        </p>
      </div>
    </footer>
  );
}
