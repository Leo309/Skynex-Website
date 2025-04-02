import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'SKYNEX GLOBAL COMMERCE & TECH INC.';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #0047AB, #000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: '64px', fontWeight: 'bold' }}>SKYNEX</div>
        <div style={{ fontSize: '36px', marginTop: '20px', textAlign: 'center' }}>
          GLOBAL COMMERCE & TECH INC.
        </div>
        <div style={{ fontSize: '24px', marginTop: '40px', color: '#00D4FF' }}>
          Bridging Technology & Commerce
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
