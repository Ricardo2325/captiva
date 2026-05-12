'use client';

import { useState } from 'react';

function DeviceImage({ src, gradient }: { src: string; gradient: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="absolute inset-0" style={{ background: gradient }}>
      {!failed && (
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function DeviceMockup({ slug, gradient }: { slug: string; gradient: string }) {
  const base = `/portfolio/${slug}`;

  return (
    <div style={{ display: 'flex', gap: 20, height: 480, justifyContent: 'center', alignItems: 'flex-start' }}>

      {/* Tablet */}
      <div style={{
        border: '10px solid #1e1e2e',
        borderRadius: 20,
        overflow: 'hidden',
        background: '#0d0d14',
        display: 'flex',
        flexDirection: 'column',
        aspectRatio: '3/4',
        height: '100%',
        flexShrink: 0,
      }}>
        <div className="relative flex-1 overflow-hidden">
          <DeviceImage src={`${base}/tablet.jpg`} gradient={gradient} />
        </div>
        <div style={{
          height: 24,
          background: '#13131f',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ width: 56, height: 4, borderRadius: 2, background: '#1e1e2e' }} />
        </div>
      </div>

      {/* Mobile */}
      <div style={{
        border: '8px solid #1e1e2e',
        borderRadius: 36,
        overflow: 'hidden',
        background: '#0d0d14',
        display: 'flex',
        flexDirection: 'column',
        aspectRatio: '9/19.5',
        height: '100%',
        flexShrink: 0,
      }}>
        {/* Dynamic island */}
        <div style={{
          height: 30,
          background: '#13131f',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ width: 72, height: 18, borderRadius: 9, background: '#0d0d14' }} />
        </div>
        <div className="relative flex-1 overflow-hidden">
          <DeviceImage src={`${base}/mobile.jpg`} gradient={gradient} />
        </div>
        {/* Home indicator */}
        <div style={{
          height: 22,
          background: '#13131f',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ width: 48, height: 4, borderRadius: 2, background: '#1e1e2e' }} />
        </div>
      </div>

    </div>
  );
}
