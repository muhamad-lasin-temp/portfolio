import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Maktoum",
      role: "CTO",
      company: "BTC UAE",
      content:
        "Rishmina transformed our legacy ERP into a lightning-fast modern application. Her ability to seamlessly integrate AI features into our existing workflow saved us countless hours of manual data entry.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 2,
      name: "Fatima Zahra",
      role: "Founder",
      company: "Nanay's Luto",
      content:
        "Working with Rishmina was an absolute pleasure. She architected our entire backend system to scale beautifully while delivering a premium frontend experience that our users completely love.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 3,
      name: "David Anderson",
      role: "Managing Director",
      company: "Finprime Consulting",
      content:
        "Her expertise in full-stack engineering and cloud deployment is top-tier. She not only delivered the project ahead of schedule but also wrote immaculate code that the rest of the team learned from.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  return (
    <AnimatedTestimonials
      title="What My Clients Say"
      subtitle="Don't just take my word for it. Here is what leading professionals and organizations in the UAE and worldwide have to say about my engineering work."
      badgeText="Client Testimonials"
      testimonials={testimonials}
      trustedCompanies={["Afamia Soft", "Finprime Consulting", "BTC UAE", "Nanay's Luto", "Gulf Innovations"]}
      trustedCompaniesTitle="Trusted by businesses and startups across the UAE"
    />
  );
}
