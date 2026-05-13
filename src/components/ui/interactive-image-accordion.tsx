'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface AccordionItemProps {
  project: Project;
  isActive: boolean;
  onMouseEnter: () => void;
}

function AccordionItem({ project, isActive, onMouseEnter }: AccordionItemProps) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out"
      style={{
        height: '480px',
        flex: isActive ? '1 1 0%' : '0 0 64px',
        minWidth: '64px',
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Screenshot */}
      <Image
        src={`/portfolio/${project.slug}/desktop.jpg`}
        alt={project.name}
        fill
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        sizes="(max-width: 768px) 100vw, 60vw"
        quality={90}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
        }}
      />

      {/* Project type badge — solo cuando activo */}
      {isActive && (
        <span
          className="font-body absolute top-4 left-4"
          style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#ffffff',
            padding: '4px 10px',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '999px',
            backdropFilter: 'blur(6px)',
            background: 'rgba(0,0,0,0.35)',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s ease 0.2s',
          }}
        >
          {project.type}
        </span>
      )}

      {/* Text — horizontal cuando activo, vertical cuando inactivo */}
      <div
        style={{
          position: 'absolute',
          bottom: isActive ? '1.5rem' : '6rem',
          left: '50%',
          transform: isActive ? 'translateX(-50%) rotate(0deg)' : 'translateX(-50%) rotate(90deg)',
          transition: 'all 0.4s ease',
          whiteSpace: 'nowrap',
          width: isActive ? 'calc(100% - 3rem)' : 'auto',
          textAlign: isActive ? 'left' : 'center',
        }}
      >
        <p
          className="font-display"
          style={{
            fontSize: isActive ? '1.4rem' : '0.85rem',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            transition: 'font-size 0.3s ease',
          }}
        >
          {project.name}
        </p>
        {isActive && (
          <p
            className="font-body"
            style={{
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.75)',
              marginTop: '0.35rem',
              lineHeight: 1.4,
            }}
          >
            {project.tagline}
          </p>
        )}
      </div>
    </div>
  );
}

interface ImageAccordionProps {
  projects: Project[];
}

export function ImageAccordion({ projects }: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Mobile: grid 2×2 */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <Link key={project.slug} href="/portfolio" style={{ textDecoration: 'none' }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={`/portfolio/${project.slug}/desktop.jpg`}
                alt={project.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                sizes="50vw"
                quality={85}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                }}
              />
              <p
                className="font-display absolute bottom-3 left-3 right-3"
                style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}
              >
                {project.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: accordion */}
      <div className="hidden md:flex flex-row items-stretch gap-3 w-full">
        {projects.map((project, index) => (
          <AccordionItem
            key={project.slug}
            project={project}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
