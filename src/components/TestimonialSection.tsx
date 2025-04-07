
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bento Craft Agency helped us transform our brand identity. Their team is incredibly talented and easy to work with.",
    author: "Sarah Johnson",
    position: "CEO, GreenTech Solutions",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The website they designed for us has increased our conversions by 45%. Couldn't recommend them enough!",
    author: "Michael Chen",
    position: "Marketing Director, InnovateCorp",
    image: "https://randomuser.me/api/portraits/men/64.jpg"
  },
  {
    quote: "Their digital marketing strategy helped us reach new markets and grow our business exponentially.",
    author: "Jessica Smith",
    position: "Founder, Artisan Goods",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

export const TestimonialSection = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none">
              <CardContent className="p-6 text-center">
                <Quote className="h-10 w-10 mx-auto mb-4 text-blue-500 opacity-40" />
                <p className="text-lg md:text-xl italic mb-6">{testimonial.quote}</p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-16 h-16 rounded-full mb-3"
                  />
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2">
        <CarouselPrevious className="relative static" />
        <CarouselNext className="relative static" />
      </div>
    </Carousel>
  );
};
