
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-knowlify-main to-white">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! We couldn't find the page you're looking for.</p>
        <div className="space-y-4">
          <Link to="/">
            <Button className="btn-cta">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
