import { Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Zyra Documents Clearance Services | Visa & PRO Services in Deira, Dubai',
  description: 'Document clearance and PRO services in Al Muteena, Deira. UAE visa processing, Emirates ID, MOHRE labour approvals, trade licence and company formation. Written quote before any work begins.',
  metadataBase: new URL('https://www.zyrabusinesshub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zyra Documents Clearance Services',
    description: 'Document clearance and PRO services in Al Muteena, Deira. UAE visa processing, Emirates ID, MOHRE labour approvals, trade licence and company formation.',
    url: 'https://www.zyrabusinesshub.com',
    siteName: 'Zyra Documents Clearance Services',
    images: [
      {
        url: 'https://www.zyrabusinesshub.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zyra Documents Clearance Services',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyra Documents Clearance Services',
    description: 'Document clearance and PRO services in Al Muteena, Deira. UAE visa processing, Emirates ID, MOHRE labour approvals, trade licence and company formation.',
    images: ['https://www.zyrabusinesshub.com/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <div className="app-container flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
