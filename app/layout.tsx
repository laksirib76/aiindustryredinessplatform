import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Industry Readiness Platform',
  description: 'Student dashboard starter for the university learning and industry readiness platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
