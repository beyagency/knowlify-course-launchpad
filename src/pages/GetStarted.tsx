
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, Upload, Plus, Book, MessageSquare, HelpCircle, Calendar, DollarSign } from "lucide-react";

const GetStarted = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(1);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [lessons, setLessons] = useState([
    { id: 1, title: "Introduction", completed: false },
    { id: 2, title: "Getting Started", completed: false }
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  const totalSteps = 5;
  const progress = (activeStep / totalSteps) * 100;
  
  const categories = [
    "Business", "Technology", "Health & Fitness", "Arts & Creativity", 
    "Personal Development", "Marketing", "Languages", "Lifestyle"
  ];

  const addNewLesson = () => {
    const newId = lessons.length > 0 ? Math.max(...lessons.map(l => l.id)) + 1 : 1;
    setLessons([...lessons, { id: newId, title: `New Lesson ${lessons.length + 1}`, completed: false }]);
  };
  
  const updateLessonTitle = (id: number, title: string) => {
    setLessons(lessons.map(lesson => 
      lesson.id === id ? { ...lesson, title } : lesson
    ));
  };

  const toggleLessonComplete = (id: number) => {
    setLessons(lessons.map(lesson => 
      lesson.id === id ? { ...lesson, completed: !lesson.completed } : lesson
    ));
  };

  const removeLesson = (id: number) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setIsUploading(true);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        toast({
          title: "Upload complete!",
          description: "Your course thumbnail has been uploaded successfully.",
        });
      }
    }, 100);
  };

  const simulateFileUpload = () => {
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        toast({
          title: "Upload complete!",
          description: "Your course thumbnail has been uploaded successfully.",
        });
      }
    }, 100);
  };

  const publishCourse = () => {
    toast({
      title: "Course published!",
      description: "Your course has been successfully published.",
    });
  };

  const nextStep = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="pb-20"> {/* Extra padding for the sticky CTA */}
      {/* Header */}
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-br from-knowlify-main to-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center fade-up">
            <h1 className="heading-xl">Create Your Course</h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Follow these simple steps to build your first online course.
            </p>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-white rounded-full h-4 mb-4 shadow-sm fade-up">
            <div 
              className="bg-knowlify-accent h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Steps */}
          <div className="flex justify-between mb-8 fade-up">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div 
                key={i}
                className={`flex flex-col items-center ${i + 1 <= activeStep ? 'text-knowlify-accent' : 'text-gray-400'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  i + 1 < activeStep ? 'bg-knowlify-accent text-white' :
                  i + 1 === activeStep ? 'border-2 border-knowlify-accent' : 'border-2 border-gray-300'
                }`}>
                  {i + 1 < activeStep ? <Check size={16} /> : i + 1}
                </div>
                <span className="text-xs hidden md:block">
                  {i === 0 ? "Course Info" :
                   i === 1 ? "Create Lessons" :
                   i === 2 ? "Upload Media" :
                   i === 3 ? "Set Price" : "Publish"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Step 1: Course Info */}
          {activeStep === 1 && (
            <div className="card fade-up">
              <h2 className="heading-md mb-6">Course Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Course Title</label>
                  <input
                    type="text"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    placeholder="e.g., Complete Guide to Digital Marketing"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-knowlify-accent focus:ring-opacity-50"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    A catchy, descriptive title helps attract students. Include keywords related to your topic.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Course Description</label>
                  <textarea
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    placeholder="Describe what students will learn and why they should take your course..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-knowlify-accent focus:ring-opacity-50"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Clearly explain the benefits and outcomes students will achieve from your course.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          selectedCategory === category 
                            ? 'bg-knowlify-accent text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Create Lessons */}
          {activeStep === 2 && (
            <div className="card fade-up">
              <h2 className="heading-md mb-6">Create Your Lessons</h2>
              <p className="text-gray-700 mb-6">
                Break your course into digestible lessons. You can add, edit or rearrange them later.
              </p>

              <div className="space-y-4 mb-6">
                {lessons.map((lesson, index) => (
                  <div 
                    key={lesson.id} 
                    className="bg-white border border-gray-200 rounded-lg p-4 flex items-center"
                  >
                    <div className="mr-3 text-gray-500">{index + 1}.</div>
                    <input
                      type="text"
                      value={lesson.title}
                      onChange={(e) => updateLessonTitle(lesson.id, e.target.value)}
                      className="flex-grow px-2 py-1 border-b border-transparent hover:border-gray-300 focus:border-knowlify-accent focus:outline-none transition-colors"
                    />
                    <button 
                      onClick={() => toggleLessonComplete(lesson.id)} 
                      className={`ml-2 p-1 rounded-full ${
                        lesson.completed 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      <Check size={16} />
                    </button>
                    <button 
                      onClick={() => removeLesson(lesson.id)}
                      className="ml-2 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                onClick={addNewLesson}
                className="w-full flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Add New Lesson
              </Button>

              <div className="mt-6 p-4 bg-knowlify-accent bg-opacity-10 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-knowlify-accent" /> Lesson Tips
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  <li>Keep lessons focused on a single concept or skill</li>
                  <li>Aim for 5-10 minutes of video content per lesson</li>
                  <li>Include practical exercises or assignments</li>
                  <li>End with a summary of key takeaways</li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 3: Upload Media */}
          {activeStep === 3 && (
            <div className="card fade-up">
              <h2 className="heading-md mb-6">Upload Course Media</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Course Thumbnail</label>
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? 'border-knowlify-accent bg-knowlify-accent bg-opacity-5' 
                        : 'border-gray-300 hover:border-knowlify-accent'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={simulateFileUpload}
                  >
                    {isUploading ? (
                      <div className="space-y-4">
                        <p className="text-gray-700">Uploading...</p>
                        <Progress value={uploadProgress} className="h-2 w-full" />
                        <p className="text-sm text-gray-500">{uploadProgress}% complete</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload size={36} className="mx-auto text-gray-400" />
                        <p className="text-gray-700">Drag and drop your thumbnail image here</p>
                        <p className="text-sm text-gray-500">or click to browse files (JPEG, PNG, 1280×720px recommended)</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <h3 className="font-semibold mb-2">Media Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                      <Book size={18} className="text-knowlify-accent" /> 
                      <span>Course Creation Guide</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                      <MessageSquare size={18} className="text-knowlify-accent" /> 
                      <span>Video Hosting Best Practices</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                      <Calendar size={18} className="text-knowlify-accent" /> 
                      <span>Book a Media Review Session</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Set Price */}
          {activeStep === 4 && (
            <div className="card fade-up">
              <h2 className="heading-md mb-6">Set Your Price</h2>
              <p className="text-gray-700 mb-6">
                Choose how much to charge for your course. You can change this later.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Pricing Model</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-knowlify-accent text-white p-4 rounded-lg text-center">
                      <DollarSign size={24} className="mx-auto mb-2" />
                      <h3 className="font-semibold">One-time Payment</h3>
                      <p className="text-sm text-white text-opacity-80">Students pay once for lifetime access</p>
                    </button>
                    
                    <button className="bg-white border border-gray-200 p-4 rounded-lg text-center hover:border-knowlify-accent transition-colors">
                      <Calendar size={24} className="mx-auto mb-2 text-gray-600" />
                      <h3 className="font-semibold">Subscription</h3>
                      <p className="text-sm text-gray-500">Recurring monthly or annual fee</p>
                    </button>
                    
                    <button className="bg-white border border-gray-200 p-4 rounded-lg text-center hover:border-knowlify-accent transition-colors">
                      <Users size={24} className="mx-auto mb-2 text-gray-600" />
                      <h3 className="font-semibold">Free</h3>
                      <p className="text-sm text-gray-500">No payment required</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Course Price ($USD)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      defaultValue={49.99}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-knowlify-accent focus:ring-opacity-50"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Most successful courses in this category are priced between $39-$79.
                  </p>
                </div>

                <div className="p-4 bg-knowlify-accent bg-opacity-10 rounded-lg">
                  <h3 className="font-semibold mb-2">Pricing Tips</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                    <li>Consider the depth and breadth of your content</li>
                    <li>Research competitor pricing for similar courses</li>
                    <li>Test different price points over time</li>
                    <li>Launch with a special offer to build momentum</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Publish */}
          {activeStep === 5 && (
            <div className="card fade-up">
              <h2 className="heading-md mb-6">Ready to Publish</h2>
              
              <div className="bg-white border border-green-200 rounded-lg p-6 text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Your Course Is Ready!</h3>
                <p className="text-gray-700 mb-4">
                  You've completed all the steps needed to launch your course.
                  Ready to share your knowledge with the world?
                </p>
                <Button className="btn-cta text-lg px-8" onClick={publishCourse}>
                  Publish Course
                </Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold mb-2">Course Summary</h3>
                
                <div className="flex items-center border-b border-gray-100 py-2">
                  <span className="w-1/3 text-gray-500">Title:</span>
                  <span className="w-2/3 font-medium">{courseTitle || "My Awesome Course"}</span>
                </div>
                
                <div className="flex items-center border-b border-gray-100 py-2">
                  <span className="w-1/3 text-gray-500">Category:</span>
                  <span className="w-2/3 font-medium">{selectedCategory || "Personal Development"}</span>
                </div>
                
                <div className="flex items-center border-b border-gray-100 py-2">
                  <span className="w-1/3 text-gray-500">Lessons:</span>
                  <span className="w-2/3 font-medium">{lessons.length} lessons</span>
                </div>
                
                <div className="flex items-center py-2">
                  <span className="w-1/3 text-gray-500">Price:</span>
                  <span className="w-2/3 font-medium">$49.99</span>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-yellow-500" /> Next Steps
                </h3>
                <p className="text-sm text-gray-700">
                  After publishing, promote your course on social media, email your audience, 
                  and consider offering a limited-time launch discount to attract your first students.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between fade-up">
            <Button 
              variant="outline"
              onClick={prevStep}
              disabled={activeStep === 1}
              className={activeStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Back
            </Button>
            <Button 
              onClick={nextStep}
              disabled={activeStep === totalSteps}
              className={activeStep === totalSteps ? 'opacity-50 cursor-not-allowed' : 'btn-cta'}
            >
              {activeStep === totalSteps - 1 ? "Finish" : "Continue"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
