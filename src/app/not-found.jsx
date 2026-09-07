import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Zyra Documents Clearance',
  description: 'The page you are looking for could not be found. Return to our services page.',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-[#0F172A] mb-4">404 - Page Not Found</h1>
      <p className="text-slate-500 mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        href="/services" 
        className="inline-flex justify-center items-center px-8 py-3.5 rounded-full font-bold text-white bg-[#99692e] hover:bg-[#b57d38] transition-all"
      >
        View Our Services
      </Link>
    </div>
  );
}
