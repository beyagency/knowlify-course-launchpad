
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]); // First one open by default

  const faqs = [
    {
      question: "How long does it take to create a course on Knowlify?",
      answer: "With Knowlify's intuitive course builder, you can create and launch your first course in as little as a weekend. Our templates and step-by-step guidance make it easy to organize your content, create engaging lessons, and publish your course. Many creators go from concept to first sale within a week!"
    },
    {
      question: "Do I need technical skills to use Knowlify?",
      answer: "Absolutely not! Knowlify was designed specifically for non-technical creators. Our platform handles all the complicated stuff like hosting, payments, student management, and content delivery. You focus on sharing your knowledge, and we'll take care of the tech. If you can use social media, you can use Knowlify."
    },
    {
      question: "How do students pay for my courses?",
      answer: "Knowlify handles all payment processing seamlessly. Students can pay via credit card, PayPal, or Apple Pay. We support one-time payments, subscriptions, payment plans, and even bundle pricing. You can also offer discount codes and special promotions. The money is automatically deposited into your connected bank account or PayPal account, minus our small transaction fee."
    },
    {
      question: "Can I migrate my existing course to Knowlify?",
      answer: "Yes! We make migration easy with our import tools. You can transfer your existing content, student data, and even sales history from platforms like Teachable, Thinkific, or Kajabi. Our migration specialists can assist you with the process to ensure a smooth transition without disrupting your students' learning experience."
    },
    {
      question: "What kind of support does Knowlify offer?",
      answer: "All Knowlify plans include access to our extensive knowledge base, community forums, and email support. Our Starter and Pro plans include priority support with faster response times. Pro plan users also get access to live chat support and a dedicated success manager to help optimize your course strategy and grow your business."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  return (
    <div className="pb-20"> {/* Extra padding for the sticky CTA */}
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-knowlify-main to-white">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h1 className="heading-xl">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Find answers to common questions about creating and selling courses with Knowlify.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding -mt-8">
        <div className="container-custom max-w-3xl mx-auto fade-up">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`card transition-all duration-300 ${
                  openFaqs.includes(index) ? 'shadow-md' : ''
                }`}
              >
                <button 
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <span className="ml-4 shrink-0">
                    {openFaqs.includes(index) ? (
                      <ChevronUp size={20} className="text-knowlify-accent" />
                    ) : (
                      <ChevronDown size={20} className="text-knowlify-text" />
                    )}
                  </span>
                </button>
                
                {openFaqs.includes(index) && (
                  <div className="mt-4 text-gray-700 animate-accordion-down">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <h2 className="heading-lg">Browse by Category</h2>
            <p className="text-gray-700">
              Find more detailed answers organized by topic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up-group">
            <div className="card text-center fade-up hover:border-knowlify-accent hover:border transition-all">
              <h3 className="font-bold text-xl mb-4">Getting Started</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>Account Setup</li>
                <li>Course Creation Basics</li>
                <li>Uploading Content</li>
                <li>Course Structure</li>
              </ul>
              <Button variant="outline" className="w-full">View Guides</Button>
            </div>
            
            <div className="card text-center fade-up hover:border-knowlify-accent hover:border transition-all">
              <h3 className="font-bold text-xl mb-4">Selling & Marketing</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>Setting Prices</li>
                <li>Promotion Strategies</li>
                <li>Student Engagement</li>
                <li>Analytics & Tracking</li>
              </ul>
              <Button variant="outline" className="w-full">View Guides</Button>
            </div>
            
            <div className="card text-center fade-up hover:border-knowlify-accent hover:border transition-all">
              <h3 className="font-bold text-xl mb-4">Technical Support</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>Troubleshooting</li>
                <li>Platform Updates</li>
                <li>Integrations</li>
                <li>Security & Privacy</li>
              </ul>
              <Button variant="outline" className="w-full">View Guides</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto fade-up">
          <div className="text-center mb-8">
            <h2 className="heading-lg">Still Have Questions?</h2>
            <p className="text-gray-700 mb-8">
              Our support team is here to help you with any questions you may have.
            </p>
            <Button className="btn-cta">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-knowlify-accent bg-opacity-10">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h2 className="heading-lg">Ready to Start Creating?</h2>
          <p className="text-lg mb-8 text-gray-700">
            Join thousands of creators who are sharing their knowledge and making an impact with Knowlify.
          </p>
          <Link to="/get-started">
            <Button className="btn-cta text-lg px-8 py-4">Create Your First Course</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
