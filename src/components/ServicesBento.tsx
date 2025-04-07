
import { Code, Paintbrush, LineChart, Film, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Branding",
    description: "Create a unique and memorable brand identity that resonates with your audience.",
    icon: Paintbrush,
    className: "md:col-span-1 col-span-2 row-span-1 bg-purple-50"
  },
  {
    title: "UI/UX Design",
    description: "Build intuitive and engaging user experiences that convert visitors into customers.",
    icon: Smartphone,
    className: "col-span-1 row-span-2 bg-blue-50"
  },
  {
    title: "Web Development",
    description: "Develop fast, secure, and scalable websites and web applications.",
    icon: Code,
    className: "col-span-1 row-span-1 bg-green-50"
  },
  {
    title: "Motion Graphics",
    description: "Bring your brand to life with captivating animations and visual effects.",
    icon: Film,
    className: "col-span-1 row-span-1 bg-yellow-50"
  },
  {
    title: "Digital Marketing",
    description: "Grow your online presence and reach your target audience effectively.",
    icon: LineChart,
    className: "col-span-1 md:col-span-2 row-span-1 bg-red-50"
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    icon: Globe,
    className: "col-span-2 row-span-1 bg-indigo-50"
  }
];

export const ServicesBento = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {services.map((service, index) => (
        <Card key={index} className={cn("overflow-hidden transition-all hover:shadow-lg", service.className)}>
          <CardContent className="p-6 flex flex-col h-full">
            <service.icon className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
