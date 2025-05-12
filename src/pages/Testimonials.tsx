
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Coach",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "Knowlify transformed how I teach online. I was able to launch my first business coaching course in just one weekend, and I've already enrolled 50+ students. The platform is intuitive and makes me look incredibly professional.",
    course: "Business Breakthrough Blueprint",
    stars: 5,
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "As someone who's not design-savvy, Knowlify was a game-changer. I created my coding course using their templates and students constantly comment on how professional it looks. The analytics help me understand what's working and what needs improvement.",
    course: "React Mastery for Beginners",
    stars: 5,
    featured: false
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Fitness Instructor",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "I switched to Knowlify from another platform and my course completion rates immediately jumped by 35%. The interface is so user-friendly for both me and my students. Plus, the payment processing is seamless with no technical headaches.",
    course: "30-Day Full Body Transformation",
    stars: 4,
    featured: false
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Digital Marketing Consultant",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The best thing about Knowlify is how quickly you can go from idea to launched course. I created my SEO masterclass in days instead of months. The platform handles all the tech so I can focus on teaching. My revenue has doubled since switching.",
    course: "SEO Strategies That Convert",
    stars: 5,
    featured: true
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Language Teacher",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    quote: "Teaching languages online requires specific tools and Knowlify delivers everything I need. The interactive features keep my students engaged, and the community features help them practice together. It's been instrumental in scaling my teaching business.",
    course: "Conversational Spanish in 8 Weeks",
    stars: 5,
    featured: false
  },
  {
    id: 6,
    name: "Robert Thompson",
    role: "Photography Instructor",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "As a visual creator, I needed a platform that could showcase my photography courses beautifully. Knowlify's templates and visual customization options are perfect. I've launched three successful courses and have two more in development.",
    course: "Smartphone Photography Masterclass",
    stars: 4,
    featured: true
  }
];

const Testimonials = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredTestimonials = filter === "all" 
    ? testimonialData 
    : testimonialData.filter(t => t.featured);
  
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div className="pb-20"> {/* Extra padding for the sticky CTA */}
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-knowlify-main to-white">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h1 className="heading-xl">Success Stories</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            See how educators, coaches, and creators are transforming their knowledge 
            into successful online courses with Knowlify.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              className={filter === "all" ? "bg-knowlify-accent text-white" : "text-knowlify-text"}
              onClick={() => setFilter("all")}
            >
              All Stories
            </Button>
            <Button 
              variant={filter === "featured" ? "default" : "outline"}
              className={filter === "featured" ? "bg-knowlify-accent text-white" : "text-knowlify-text"}
              onClick={() => setFilter("featured")}
            >
              Featured Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding -mt-8">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up-group">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="card fade-up transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">Course Created:</p>
                  <p className="font-medium">{testimonial.course}</p>
                </div>
                
                {testimonial.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-knowlify-cta text-white text-xs px-2 py-1 rounded font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-knowlify-accent bg-opacity-10">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-10 fade-up">
            <h2 className="heading-lg">Our Creator Community</h2>
            <p className="text-gray-700">
              Join thousands of creators who have launched successful courses using Knowlify.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center fade-up-group">
            <div className="p-6 fade-up">
              <h3 className="text-3xl font-bold mb-2 text-knowlify-text">10,000+</h3>
              <p className="text-gray-600">Active Creators</p>
            </div>
            
            <div className="p-6 fade-up">
              <h3 className="text-3xl font-bold mb-2 text-knowlify-text">500,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            
            <div className="p-6 fade-up">
              <h3 className="text-3xl font-bold mb-2 text-knowlify-text">$15M+</h3>
              <p className="text-gray-600">Creator Earnings</p>
            </div>
            
            <div className="p-6 fade-up">
              <h3 className="text-3xl font-bold mb-2 text-knowlify-text">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h2 className="heading-lg">Ready To Join Our Creator Community?</h2>
          <p className="text-lg mb-8 text-gray-700">
            Create your course today and start your journey toward becoming our next success story.
          </p>
          <Button className="btn-cta text-lg px-8 py-4">Start Your Course Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
