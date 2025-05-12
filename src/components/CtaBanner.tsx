
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  const location = useLocation();
  
  // Don't show banner on the Get Started page
  if (location.pathname === "/get-started") {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-knowlify-text p-4 shadow-lg z-40">
      <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white font-medium text-center sm:text-left">
          Ready to create your first course and start teaching?
        </p>
        <Link to="/get-started">
          <Button className="bg-knowlify-cta text-white hover:bg-opacity-90 whitespace-nowrap">
            Create Your First Lesson
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaBanner;
