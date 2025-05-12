
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for those just getting started",
      features: [
        "1 course",
        "Up to 10 students",
        "Basic analytics",
        "Standard course player",
        "Email support"
      ],
      buttonText: "Start For Free",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Starter",
      price: { monthly: 29, annual: 19 },
      description: "Everything you need for a growing course business",
      features: [
        "5 courses",
        "Up to 500 students",
        "Advanced analytics",
        "Custom branding",
        "Priority support",
        "Student discussions",
        "Email integrations",
        "Payment processing"
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Pro",
      price: { monthly: 79, annual: 59 },
      description: "For established educators with multiple courses",
      features: [
        "Unlimited courses",
        "Unlimited students",
        "Complete analytics suite",
        "Custom domain",
        "Priority support",
        "Student community",
        "Marketing automation",
        "Advanced integrations",
        "Membership areas",
        "Affiliate management"
      ],
      buttonText: "Go Pro",
      buttonVariant: "default",
      popular: false
    }
  ];

  return (
    <div className="pb-20"> {/* Extra padding for the sticky CTA */}
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-knowlify-main to-white">
        <div className="container-custom text-center max-w-3xl mx-auto fade-up">
          <h1 className="heading-xl">Simple, Transparent Pricing</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Choose the plan that works best for your course creation journey.
            All plans include our core course building tools.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className={`font-medium ${isAnnual ? "text-knowlify-accent" : "text-gray-500"}`}>
              Annual (Save 30%)
            </span>
            <div 
              className="w-14 h-7 bg-gray-200 rounded-full p-1 cursor-pointer"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div 
                className={`w-5 h-5 rounded-full bg-knowlify-accent transition-transform duration-300 transform ${
                  isAnnual ? "translate-x-0" : "translate-x-7"
                }`} 
              />
            </div>
            <span className={`font-medium ${!isAnnual ? "text-knowlify-accent" : "text-gray-500"}`}>
              Monthly
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding -mt-16">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up-group">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name} 
                className={`card relative fade-up transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? "border-2 border-knowlify-accent" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-knowlify-accent text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-knowlify-accent mt-1 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.buttonVariant === "outline" 
                      ? "btn-outline" 
                      : "btn-cta"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-600 fade-up">
            <p>All plans include a 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <h2 className="heading-lg">Compare Features</h2>
            <p className="text-gray-700">
              Find the plan that has everything you need to create and sell your courses.
            </p>
          </div>
          
          <div className="overflow-x-auto fade-up">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Free</th>
                  <th className="text-center py-4 px-4 bg-knowlify-accent bg-opacity-10">Starter</th>
                  <th className="text-center py-4 px-4">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Courses</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">5</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Students</td>
                  <td className="text-center py-3 px-4">10</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">500</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Storage</td>
                  <td className="text-center py-3 px-4">1 GB</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">20 GB</td>
                  <td className="text-center py-3 px-4">100 GB</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 flex items-center">
                    <span>Custom Domain</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="ml-1 text-gray-400 cursor-help">ⓘ</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-48">Use your own domain name for your course website</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">—</td>
                  <td className="text-center py-3 px-4">
                    <Check size={18} className="text-knowlify-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Analytics</td>
                  <td className="text-center py-3 px-4">Basic</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">Advanced</td>
                  <td className="text-center py-3 px-4">Complete</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Payments</td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">
                    <Check size={18} className="text-knowlify-accent mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <Check size={18} className="text-knowlify-accent mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Affiliate Management</td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-knowlify-accent bg-opacity-5">—</td>
                  <td className="text-center py-3 px-4">
                    <Check size={18} className="text-knowlify-accent mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto fade-up">
          <div className="text-center mb-10">
            <h2 className="heading-lg">Common Pricing Questions</h2>
          </div>
          
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold text-lg mb-2">Can I upgrade or downgrade my plan later?</h3>
              <p className="text-gray-700">
                Yes, you can change your plan at any time. When you upgrade, you'll be prorated for the
                remaining time on your billing cycle. When downgrading, the new rate will apply at your next billing date.
              </p>
            </div>
            
            <div className="card">
              <h3 className="font-bold text-lg mb-2">Are there any transaction fees?</h3>
              <p className="text-gray-700">
                We don't charge any additional transaction fees on course sales. You'll only pay the standard
                payment processing fees from our payment providers (typically 2.9% + $0.30 per transaction).
              </p>
            </div>
            
            <div className="card">
              <h3 className="font-bold text-lg mb-2">Do you offer discounts for educators or non-profits?</h3>
              <p className="text-gray-700">
                Yes! We offer special pricing for educational institutions and registered non-profit organizations.
                Please contact our support team with verification of your status to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
