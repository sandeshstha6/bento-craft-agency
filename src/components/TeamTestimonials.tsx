
export const TeamTestimonials = () => {
  const testimonials = [
    {
      name: "Jonathan Liem",
      role: "Creative Team Design",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "Working with Prospire has been a game-changer for me. Their creative approach and attention to detail never fails to impress. I've seen an increase in user engagement and conversion rates since implementing their designs."
    },
    {
      name: "Christina Donald",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      quote: "The team at Prospire is simply outstanding. They took our rough concept and transformed it into a stunning visual identity that perfectly represents our brand values."
    },
    {
      name: "Frances Summers",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "I've worked with many design agencies, but Prospire stands out with their innovative thinking and commitment to excellence. They don't just deliver what you ask for—they elevate it."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Testimonials</h2>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Inspiring collaboration<br />and amazing results.
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg relative ${
                index === 0 ? 'bg-primary/10 border-l-4 border-primary' : 'bg-muted'
              }`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 text-sm">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
