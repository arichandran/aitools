import './globals.css';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
export const metadata = {
  title: "Vignan's Lara AI Tools Manual",
  description: "Comprehensive Teaching and Learning Material for AI Tools and Applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <aside className="sidebar">
            <Sidebar />
          </aside>
          <main className="main-content">
            <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '2px solid #f0f0f0' }}>
              <img src="/logo.png" alt="Vignan Lara Autonomous Logo" style={{ maxHeight: '120px', objectFit: 'contain', boxShadow: 'none' }} />
              <h1 style={{ marginTop: '1.5rem', color: '#006400', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
                AI Tools and Applications
              </h1>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
