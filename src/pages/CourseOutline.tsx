
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const CourseOutline = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Define Your Niche",
      description: "Learn how to identify your unique expertise and find the perfect audience for your course.",
      lessons: [
        "Understanding your unique value proposition",
        "Market research for course creators",
        "Defining your ideal student"
      ]
    },
    {
      id: 2,
      title: "Write Your Curriculum",
      description: "Structure your knowledge into a clear, engaging learning path that delivers results.",
      lessons: [
        "From expertise to curriculum",
        "Creating achievable learning outcomes",
        "Organizing content for maximum engagement"
      ]
    },
    {
      id: 3,
      title: "Create Engaging Content",
      description: "Develop multimedia lessons that keep students engaged and help them achieve their goals.",
      lessons: [
        "Video production essentials",
        "Creating downloadable resources",
        "Interactive elements to boost engagement"
      ]
    },
    {
      id: 4,
      title: "Build Your Sales System",
      description: "Set up the pages, pricing, and promotion to start selling your course immediately.",
      lessons: [
        "Crafting your sales page",
        "Setting the right price point",
        "Email marketing for course creators"
      ]
    },
    {
      id: 5,
      title: "Launch and Grow",
      description: "Successfully launch your course and develop strategies for sustainable growth.",
      lessons: [
        "Building anticipation pre-launch",
        "Student onboarding best practices",
        "Gathering and implementing feedback"
      ]
    }
  ]);

  return (
    <div className="pb-20"> {/* Extra padding for the sticky CTA */}
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-knowlify-main to-white">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h1 className="heading-xl">Course Outline Template</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Follow this proven 5-module structure to create a course that delivers real value
            and keeps students engaged from start to finish.
          </p>
        </div>
      </section>

      {/* Course Structure Guide */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <h2 className="heading-lg">Sample 5-Module Course Structure</h2>
            <p className="text-gray-700">
              Use this framework as a starting point and customize it to fit your unique topic.
              Each module should build on the previous one, creating a logical learning journey.
            </p>
          </div>

          <div className="space-y-8 fade-up-group">
            {modules.map((module, index) => (
              <div key={module.id} className="fade-up">
                <div className="card border-l-4 border-knowlify-accent hover:border-knowlify-cta transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-16 h-16 bg-knowlify-accent bg-opacity-20 rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                      <Book size={24} className="text-knowlify-accent" />
                      <span className="absolute font-bold">{module.id}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="heading-md text-center md:text-left">{module.title}</h3>
                      <p className="text-gray-700 mb-4 text-center md:text-left">{module.description}</p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-center md:text-left">Sample Lessons:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {module.lessons.map((lesson, i) => (
                            <li key={i}>{lesson}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-4 text-sm text-gray-500 italic text-center md:text-left">
                        <span>💡 Tip: {index === 0 ? "Start with foundational concepts that build confidence." : 
                              index === 1 ? "Break complex topics into digestible lessons with clear outcomes." :
                              index === 2 ? "Include a mix of theory and practical exercises for better retention." :
                              index === 3 ? "Add case studies or examples to illustrate real-world application." :
                              "End with next steps to help students continue their journey."}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center fade-up">
            <h3 className="heading-md">Ready to Create Your Own Course Outline?</h3>
            <p className="mb-6 text-gray-700">
              Use our intuitive course builder to customize this template or create your own structure from scratch.
            </p>
            <Button className="btn-cta">Get Started With This Template</Button>
          </div>
        </div>
      </section>

      {/* Implementation Tips */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10 fade-up">
            <h2 className="heading-lg">How To Adapt This For Your Topic</h2>
            <p className="text-gray-700">
              Every subject is different, but these principles will help you create an effective course structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up-group">
            <div className="card fade-up">
              <h3 className="font-bold text-lg mb-3">Start With The End In Mind</h3>
              <p className="text-gray-600">
                Define what specific transformation your students will experience.
                What will they be able to do after completing your course?
              </p>
            </div>
            
            <div className="card fade-up">
              <h3 className="font-bold text-lg mb-3">Create A Logical Progression</h3>
              <p className="text-gray-600">
                Each module should build on previous knowledge, moving from fundamentals
                to more advanced concepts in a natural flow.
              </p>
            </div>
            
            <div className="card fade-up">
              <h3 className="font-bold text-lg mb-3">Balance Theory And Practice</h3>
              <p className="text-gray-600">
                Include both conceptual knowledge and hands-on activities to
                reinforce learning and keep students engaged.
              </p>
            </div>
            
            <div className="card fade-up">
              <h3 className="font-bold text-lg mb-3">Include Quick Wins</h3>
              <p className="text-gray-600">
                Give students early successes to build momentum and confidence,
                which increases completion rates and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseOutline;
