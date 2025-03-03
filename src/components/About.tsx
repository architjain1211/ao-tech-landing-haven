
import { Linkedin, Mail } from "lucide-react";
import { Motion, RevealOnScroll } from "./ui/motion";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Co-Founder / Technical Lead",
    bio: "With over 8 years of experience in software development and IT infrastructure, specializing in cloud solutions and enterprise architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Team Member 2",
    role: "Co-Founder / Business Lead",
    bio: "Over 10 years of experience in business consulting and project management, with expertise in digital transformation and IT strategy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container-custom">
        <Motion animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full mb-4">
              About Us
            </p>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">
              The Team Behind AO Tech
            </h2>
            <p className="text-xl text-gray-600 text-balance">
              We are a team of dedicated IT professionals with a passion for solving complex business challenges through technology.
            </p>
          </div>
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {teamMembers.map((member, index) => (
            <RevealOnScroll key={index}>
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-md border-2 border-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 mb-6 text-balance">{member.bio}</p>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a 
                      href="#" 
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-20">
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
                <p className="text-gray-700 mb-6">
                  We believe in a collaborative approach, working closely with our clients to understand their unique challenges and deliver tailored solutions that drive real business value.
                </p>
                <p className="text-gray-700">
                  Our focus is on building long-term partnerships, providing ongoing support and adapting our solutions as your business evolves.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <span className="text-gray-700">Excellence in every solution we deliver</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <span className="text-gray-700">Integrity and transparency in all interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <span className="text-gray-700">Innovation that drives meaningful results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                    <span className="text-gray-700">Client success as our ultimate measure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
