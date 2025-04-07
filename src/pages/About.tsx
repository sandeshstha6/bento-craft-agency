
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TeamTestimonials } from "@/components/TeamTestimonials";
import { ArrowRight, Target, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-primary mb-2 tracking-wider">About Prospire</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            We turn <span className="text-primary">creative ideas</span><br />into reality
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mb-10">
            Founded with a passion for exceptional design and digital innovation, 
            Prospire has been transforming brands and businesses since 2015.
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="text-primary mr-4 h-8 w-8" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-foreground/60 mb-4">
                To provide unparalleled digital solutions that empower businesses to thrive
                in an ever-evolving digital landscape. We're committed to excellence, 
                innovation, and meaningful results.
              </p>
              <p className="text-foreground/60">
                Through collaborative partnerships, we create digital experiences that 
                resonate with audiences and drive business growth.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Heart className="text-primary mr-4 h-8 w-8" />
                <h2 className="text-3xl font-bold">Our Values</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <Award className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold mb-1">Excellence</h3>
                    <p className="text-foreground/60">We strive for excellence in everything we do.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold mb-1">Collaboration</h3>
                    <p className="text-foreground/60">We believe in the power of teamwork and partnership.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-bold mb-1">Innovation</h3>
                    <p className="text-foreground/60">We embrace creativity and forward-thinking solutions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-16">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & Creative Director",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "With over 15 years of experience in design and digital strategy, Alex leads our creative vision."
              },
              {
                name: "Sarah Chen",
                role: "Lead Designer",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "Sarah brings a unique blend of artistic talent and technical expertise to every project."
              },
              {
                name: "James Wilson",
                role: "Technical Director",
                image: "https://randomuser.me/api/portraits/men/51.jpg",
                bio: "James ensures that our creative vision is executed flawlessly through technical excellence."
              }
            ].map((member, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-foreground/60">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TeamTestimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
            Let's create something amazing together
          </h2>
          <p className="text-foreground/60 mb-10 max-w-xl mx-auto">
            Ready to start your next project? We're here to help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
