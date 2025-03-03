
import { ArrowDown } from "lucide-react";
import { Motion } from "./ui/motion";

const Hero = () => {
  const scrollToNextSection = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Motion animation="slide-up">
            <p className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full mb-6">
              IT Services & Consulting
            </p>
          </Motion>
          
          <Motion animation="slide-up" delay="100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance mb-6">
              We build <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">digital solutions</span> for your business
            </h1>
          </Motion>
          
          <Motion animation="slide-up" delay="200">
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
              AO Tech delivers tailored IT consulting and services to help your business thrive in the digital landscape.
            </p>
          </Motion>
          
          <Motion animation="slide-up" delay="300">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 text-white bg-black rounded-full hover:bg-gray-900 transition-all hover-lift shadow-sm w-full sm:w-auto"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="px-8 py-4 text-black bg-transparent border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover-lift w-full sm:w-auto"
              >
                Our Services
              </a>
            </div>
          </Motion>
        </div>
        
        <Motion animation="fade-in" delay="500" className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNextSection}
            aria-label="Scroll down"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-gray-50 transition-all animate-bounce"
          >
            <ArrowDown size={20} />
          </button>
        </Motion>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 blur-3xl top-1/4 right-0"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-gray-100 to-blue-50 blur-3xl bottom-0 left-1/3"></div>
      </div>
    </section>
  );
};

export default Hero;
