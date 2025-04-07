
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next project?</h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Get in touch with us to discuss how we can help bring your ideas to life and create a digital experience that stands out.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};
