'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import projects, { Project } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

// ─── Device frames ────────────────────────────────────────────────────────────

function LaptopFrame({ src, slug }: { src: string; slug: string }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Lid / screen */}
      <div
        style={{
          background: 'linear-gradient(180deg, #2e2e30 0%, #1c1c1e 100%)',
          borderRadius: '12px 12px 4px 4px',
          padding: '1.2% 1.2% 1%',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.7)',
        }}
      >
        {/* Camera */}
        <div style={{ textAlign: 'center', marginBottom: '3px' }}>
          <div
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#3a3a3c',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
            }}
          />
        </div>
        {/* Screen */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/10',
            borderRadius: '4px',
            overflow: 'hidden',
            background: '#000',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 80vw, 45vw"
          />
        </div>
      </div>
      {/* Hinge */}
      <div
        style={{
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)',
          height: '3px',
          width: '104%',
          marginLeft: '-2%',
          boxShadow: '0 1px 0 rgba(0,0,0,0.9)',
        }}
      />
      {/* Base / keyboard */}
      <div
        style={{
          background: 'linear-gradient(180deg, #2c2c2e 0%, #1e1e20 100%)',
          height: '14px',
          width: '110%',
          marginLeft: '-5%',
          borderRadius: '0 0 6px 6px',
          boxShadow:
            '0 6px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          position: 'relative',
        }}
      >
        {/* Trackpad hint */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '18%',
            height: '2px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '2px 2px 0 0',
          }}
        />
      </div>
    </div>
  );
}

function PhoneFrame({ src, slug }: { src: string; slug: string }) {
  return (
    <div
      style={{
        background: 'linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)',
        borderRadius: '44px',
        padding: '10px',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.12), 0 20px 60px rgba(0,0,0,0.6)',
        position: 'relative',
      }}
    >
      {/* Volume buttons */}
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '20%',
          width: '3px',
          height: '8%',
          background: '#3a3a3c',
          borderRadius: '2px 0 0 2px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '31%',
          width: '3px',
          height: '13%',
          background: '#3a3a3c',
          borderRadius: '2px 0 0 2px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '47%',
          width: '3px',
          height: '13%',
          background: '#3a3a3c',
          borderRadius: '2px 0 0 2px',
        }}
      />
      {/* Power button */}
      <div
        style={{
          position: 'absolute',
          right: '-3px',
          top: '28%',
          width: '3px',
          height: '18%',
          background: '#3a3a3c',
          borderRadius: '0 2px 2px 0',
        }}
      />
      {/* Screen */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '9/19.5',
          borderRadius: '36px',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '20%',
            height: '12px',
            background: '#000',
            borderRadius: '20px',
            zIndex: 10,
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
          }}
        />
        <Image
          src={src}
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 30vw, 15vw"
        />
        {/* Home indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '35%',
            height: '4px',
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '2px',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}

function TabletFrame({ src, slug, objectPosition = 'center' }: { src: string; slug: string; objectPosition?: string }) {
  return (
    <div
      style={{
        background: 'linear-gradient(160deg, #2e2e30 0%, #1c1c1e 100%)',
        borderRadius: '22px',
        padding: '10px',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.6)',
        position: 'relative',
      }}
    >
      {/* Screen */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3/4',
          borderRadius: '14px',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        {/* Camera */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#2a2a2c',
            zIndex: 10,
            boxShadow: '0 0 0 1px rgba(255,255,255,0.08)',
          }}
        />
        <Image
          src={src}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition }}
          sizes="(max-width: 768px) 40vw, 20vw"
        />
        {/* Home indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30%',
            height: '4px',
            background: 'rgba(255,255,255,0.4)',
            borderRadius: '2px',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}

// ─── Screenshot stack ─────────────────────────────────────────────────────────

function ScreenshotStack({ project }: { project: Project }) {
  const { slug } = project;
  const isLaBotanica = slug === 'la-botanica';

  return (
    <>
      {/* Mobile: laptop (todos) + phone superpuesto (solo la-botanica) */}
      <div className="md:hidden" style={{ position: 'relative', padding: '0.5rem 0 1rem' }}>
        <div
          style={{
            width: isLaBotanica ? '74%' : '100%',
            transform: 'rotate(-1.5deg)',
            filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.6))',
          }}
        >
          <LaptopFrame src={`/portfolio/${slug}/desktop.jpg`} slug={slug} />
        </div>
        {isLaBotanica && (
          <div
            style={{
              position: 'absolute',
              right: '0%',
              top: '8%',
              width: '32%',
              transform: 'rotate(5deg)',
              filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.6))',
            }}
          >
            <TabletFrame src={`/portfolio/${slug}/mobile.jpg`} slug={slug} objectPosition="top" />
          </div>
        )}
      </div>

      {/* Desktop: composición con absolute positioning */}
      <div
        className="hidden md:block"
        style={{
          position: 'relative',
          height: 'clamp(400px, 76vh, 950px)',
          width: '100%',
        }}
      >
        {/* Laptop — back layer */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%) rotate(-2deg)',
            width: '82%',
            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))',
          }}
        >
          <LaptopFrame src={`/portfolio/${slug}/desktop.jpg`} slug={slug} />
        </div>

        {isLaBotanica ? (
          <>
            {/* iPad — mid layer */}
            <div
              style={{
                position: 'absolute',
                right: '8%',
                top: '4%',
                width: '36%',
                transform: 'rotate(5deg)',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              }}
            >
              <TabletFrame src={`/portfolio/${slug}/tablet.jpg`} slug={slug} />
            </div>
            {/* iPhone — front layer */}
            <div
              style={{
                position: 'absolute',
                right: '2%',
                top: '14%',
                width: '22%',
                transform: 'rotate(-6deg)',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              }}
            >
              <PhoneFrame src={`/portfolio/${slug}/mobile.jpg`} slug={slug} />
            </div>
          </>
        ) : (
          /* iPhone — front layer */
          <div
            style={{
              position: 'absolute',
              right: '2%',
              top: '10%',
              width: '24%',
              transform: 'rotate(7deg)',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
            }}
          >
            <PhoneFrame src={`/portfolio/${slug}/mobile.jpg`} slug={slug} />
          </div>
        )}
      </div>
    </>
  );
}

// ─── Project panel ────────────────────────────────────────────────────────────

function ProjectPanel({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const [ctaHovered, setCtaHovered] = useState(false);

  const stepLabel = String(index + 1).padStart(2, '0');
  const totalLabel = String(total).padStart(2, '0');

  return (
    <div className="flex h-full w-full flex-col gap-8 md:flex-row md:gap-12">
      {/* LEFT COLUMN */}
      <div
        className="flex flex-1 flex-col justify-between"
        style={{ gap: 'clamp(1rem, 2.5vw, 2rem)' }}
      >
        {/* Step + type badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            className="font-body"
            style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {stepLabel} / {totalLabel}
          </span>
          <span
            className="font-body"
            style={{
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#ffffff',
              padding: '5px 14px',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '999px',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            {project.type}
          </span>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: 0 }} />

        {/* Project name */}
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(3rem,8vw,7rem)',
            lineHeight: '0.95',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            fontWeight: 700,
            margin: 0,
          }}
        >
          {project.name}
        </h2>

        {/* Tagline */}
        <p
          className="font-body"
          style={{
            fontSize: 'clamp(1rem,2vw,1.5rem)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.4',
            margin: 0,
          }}
        >
          {project.tagline}
        </p>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: 0 }} />

        {/* Metrics */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {project.metrics.slice(0, 3).map((m) => (
            <div key={m.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem,3.5vw,2.8rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                {m.value}
              </span>
              <span
                className="font-body"
                style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: '0.25rem',
                }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: 0 }} />

        {/* La Botánica — role badges */}
        {project.slug === 'la-botanica' && (
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {['Cliente', 'Admin', 'Staff'].map((role) => (
              <span
                key={role}
                className="font-body"
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#ffffff',
                  padding: '4px 12px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.1)',
                }}
              >
                {role}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => { if (window.matchMedia('(hover: hover)').matches) setCtaHovered(true); }}
          onMouseLeave={() => { if (window.matchMedia('(hover: hover)').matches) setCtaHovered(false); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: ctaHovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 0.2s ease',
            width: 'fit-content',
          }}
        >
          Ver proyecto →
        </a>
      </div>

      {/* RIGHT COLUMN */}
      <div
        className="relative"
        style={{ flex: '1.2' }}
      >
        <ScreenshotStack project={project} />
      </div>
    </div>
  );
}

// ─── PortfolioScroll ──────────────────────────────────────────────────────────

export default function PortfolioScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
    // Recalculate ScrollTrigger positions now that Lenis is connected
    ScrollTrigger.refresh();
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, [lenis]);

  return (
    <FlowArt aria-label="Portfolio de proyectos">
      {projects.map((project, index) => (
        <FlowSection
          key={project.slug}
          aria-label={project.name}
          style={{
            background: project.gradient,
            paddingBottom: '2vw',
            ...(index === 0 ? { paddingTop: '4rem' } : {}),
          }}
        >
          <ProjectPanel project={project} index={index} total={projects.length} />
        </FlowSection>
      ))}
    </FlowArt>
  );
}
