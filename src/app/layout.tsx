import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Checklist de Manuales de Marca',
  description: 'Aplicación para seguimiento de tareas de manuales de marca',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 