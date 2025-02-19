import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Go to Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
