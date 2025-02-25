import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 h-full">
      <h1 className="text-6xl font-bold text-[#343C6A]">404</h1>
      <p className="mt-4 text-lg text-gray-500">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800">
        Go to Home
      </Link>
    </div>
  );
}
