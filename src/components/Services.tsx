
import { 
  Code, 
  Shield, 
  Cloud, 
  LineChart, 
  Smartphone, 
  Server 
} from "lucide-react";
import { Motion, RevealOnScroll } from "./ui/motion";

const services = [
  {
    icon: <Code size={24} />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your specific business needs and challenges."
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure setup, migration, and management services."
  },
  {
    icon: <Shield size={24} />,
    title: "Cybersecurity",
    description: "Comprehensive security assessments and solutions to protect your business from threats."
  },
  {
    icon: <LineChart size={24} />,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our analytics solutions."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications designed with user experience at the forefront."
  },
  {
    icon: <Server size={24} />,
    title: "IT Infrastructure",
    description: "Design, implementation, and management of robust IT infrastructure tailored to your needs."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container-custom">
        <Motion animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full mb-4">
              Our Services
            </p>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">
              Comprehensive IT Services for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 text-balance">
              We offer a wide range of IT solutions tailored to help your business navigate the digital landscape efficiently and securely.
            </p>
          </div>
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all hover-lift h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-900 transition-colors"
          >
            Discuss Your Project
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Services;
