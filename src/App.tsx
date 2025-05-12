
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import CourseOutline from "./pages/CourseOutline";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="course-outline" element={<CourseOutline />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="get-started" element={<GetStarted />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
