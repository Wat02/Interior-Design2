import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Home Designer",
      h1: "Here's What Our Designer Is Saying About Our Mission.",
      src: "/LandingPage/designer.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      h1: "Here's What Our Designer Is Saying About Our Mission.",
      designation: "CTO at InnovateSphere",
      src: "/LandingPage/ux.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Uros Markovic",
      h1: "Here's What Our Designer Is Saying About Our Mission.",
      designation: "Operations Director at CloudScale",
      src: "/LandingPage/ui.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      h1: "Here's What Our Designer Is Saying About Our Mission.",
      designation: "Engineering Lead at DataPro",
      src: "/LandingPage/works.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      h1: "Here's What Our Designer Is Saying About Our Mission.",
      designation: "VP of Technology at FutureNet",
      src: "/LandingPage/profile1.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
