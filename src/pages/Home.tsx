
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Users, Star } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <h1 className="heading-xl">
                Transform Your <span className="text-gradient">Knowledge</span> Into Profitable Online Courses
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Create, launch, and sell professional online courses without any technical skills. 
                The easiest way to monetize your expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-started">
                  <Button className="btn-cta w-full sm:w-auto">Start Your Course Today</Button>
                </Link>
                <Link to="/course-outline">
                  <Button variant="outline" className="btn-outline w-full sm:w-auto">See How It Works</Button>
                </Link>
              </div>
            </div>
            <div className="fade-up order-first lg:order-last">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Course Preview" 
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                  />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-xl">Web Development Basics</h3>
                      <span className="bg-knowlify-accent bg-opacity-20 text-knowlify-accent px-3 py-1 rounded-full text-sm font-medium">
                        5 Modules
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-knowlify-accent h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>65% Complete</span>
                      <span>3/5 Modules</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Next up: Module 4</h4>
                      <p className="text-sm text-gray-600">Creating Your First Interactive Website</p>
                      <Button className="mt-3 w-full bg-knowlify-cta text-white hover:bg-opacity-90">
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-knowlify-accent rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-xl z-0">
                  New!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="heading-lg">Why Create Your Course With Knowlify?</h2>
            <p className="text-gray-700">
              Our intuitive platform makes it simple to build professional-quality courses 
              that engage your students and generate consistent income.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 fade-up-group">
            {/* Benefit 1 */}
            <div className="card text-center fade-up">
              <div className="w-16 h-16 bg-knowlify-accent bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book size={32} className="text-knowlify-accent" />
              </div>
              <h3 className="heading-md">Plan Easily</h3>
              <p className="text-gray-600">
                Our intuitive course builder lets you organize your content, create lessons,
                and structure your modules without any technical skills.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="card text-center fade-up">
              <div className="w-16 h-16 bg-knowlify-cta bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} className="text-knowlify-cta" />
              </div>
              <h3 className="heading-md">Sell Fast</h3>
              <p className="text-gray-600">
                Launch your course with built-in payment processing, landing pages, 
                and marketing tools to start earning from your expertise immediately.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="card text-center fade-up">
              <div className="w-16 h-16 bg-knowlify-text bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-knowlify-text" />
              </div>
              <h3 className="heading-md">Grow Your Brand</h3>
              <p className="text-gray-600">
                Build your audience with our student management, email integration, 
                and analytics to understand what's working and scale your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                alt="Knowlify Dashboard" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-8 fade-up">
              <h2 className="heading-lg">Everything You Need To Succeed</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-knowlify-accent bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-knowlify-accent font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Beautiful Course Pages</h3>
                    <p className="text-gray-600">Professionally designed templates that make your content shine.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-knowlify-accent bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-knowlify-accent font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Secure Payments</h3>
                    <p className="text-gray-600">Easily collect payments and offer multiple pricing tiers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-knowlify-accent bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-knowlify-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Student Community</h3>
                    <p className="text-gray-600">Foster engagement with integrated discussion forums and comments.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/get-started">
                <Button className="btn-cta">Start Building Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto mb-12 fade-up">
            <h2 className="heading-lg">See How Quick It Is To Get Started</h2>
            <p className="text-gray-700">
              From idea to published course in minutes, not weeks.
              Our platform simplifies the entire process.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-4 max-w-4xl mx-auto fade-up">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-knowlify-text flex items-center justify-center">
              <div className="text-white text-center p-8">
                <h3 className="text-xl font-bold mb-4">Video Preview</h3>
                <p className="mb-6">Watch how to create your first course in under 10 minutes</p>
                <Button className="btn-cta">Play Demo Video</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-knowlify-accent bg-opacity-10">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h2 className="heading-lg">Ready to Share Your Knowledge?</h2>
          <p className="text-lg mb-8">
            Join thousands of creators who are building their audience and earning income
            by sharing what they know best.
          </p>
          <Link to="/get-started">
            <Button className="btn-cta text-lg px-8 py-4">Create Your First Course</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
