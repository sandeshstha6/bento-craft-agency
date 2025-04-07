
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-primary mb-2 tracking-wider">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Let's start a <span className="gradient-text">conversation</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mb-10">
            Have a project in mind or want to learn more about our services? 
            We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">Your Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Tell us about your project or inquiry..."
                    className="resize-none"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="text-primary mr-4 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-foreground/60 mb-1">For general inquiries:</p>
                    <a href="mailto:info@prospire.com" className="text-primary hover:underline">info@prospire.com</a>
                    <p className="text-foreground/60 mt-2 mb-1">For support:</p>
                    <a href="mailto:support@prospire.com" className="text-primary hover:underline">support@prospire.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary mr-4 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-foreground/60 mb-1">Main Office:</p>
                    <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                    <p className="text-foreground/60 mt-2 mb-1">Sales Team:</p>
                    <a href="tel:+15557654321" className="text-primary hover:underline">+1 (555) 765-4321</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-foreground/60">
                      123 Creative Ave, Suite 500<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-4">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764015460033!3d37.75781499657919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1617997335189!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Prospire office location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
