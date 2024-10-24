'use client'; // This ensures the layout is treated as a client component

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import localFont from 'next/font/local';
import './globals.css'; // Ensure Tailwind styles are imported
import 'remixicon/fonts/remixicon.css';

// Define your local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Metadata


// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Provide Redux store to the entire app */}
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
