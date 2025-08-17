import { Marquee } from './ui/marquee'
import TextAnimate from './ui/text-animate'
import { Star, Quote } from 'lucide-react'

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "TechFlow Solutions",
      content: "Cold AI transformed our outreach. We're seeing 3x more responses and closing deals faster than ever.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Rodriguez",
      role: "Business Development Manager",
      company: "GrowthLab",
      content: "The personalisation is incredible. It's like having a team of copywriters working 24/7.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "StartupBoost",
      content: "I was skeptical at first, but the results speak for themselves. Our pipeline has never been fuller.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "David Kim",
      role: "VP Sales",
      company: "Enterprise Co",
      content: "Cold AI saves our team 20+ hours per week while delivering better results. It's a game-changer.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=4"
    },
    {
      name: "Lisa Thompson",
      role: "Account Executive",
      company: "SaaS Platform",
      content: "The AI understands context so well. Messages feel genuine, not robotic. Prospects actually respond!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "James Wilson",
      role: "Head of Growth",
      company: "Digital Agency",
      content: "We've tried every outreach tool. Cold AI is the only one that delivers consistent, quality results.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=6"
    },
  ]

  const ReviewCard = ({ review }: { review: typeof testimonials[0] }) => (
    <div className="relative w-[400px] mx-4">
      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-500/20 group-hover:text-purple-500/40 transition-colors" />
        
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          "{review.content}"
        </p>
        
        <div className="flex items-center gap-3">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full border-2 border-purple-500/20"
          />
          <div>
            <p className="font-semibold text-white">{review.name}</p>
            <p className="text-sm text-gray-400">
              {review.role} at {review.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            <TextAnimate
              text="Loved by Sales Teams Everywhere"
              type="word"
              animation="slideUp"
            />
          </h2>
          <p className="text-xl text-gray-400">
            <TextAnimate
              text="Join thousands of professionals who've transformed their LinkedIn outreach"
              type="word"
              animation="fadeIn"
              delay={0.2}
            />
          </p>
        </div>
      </div>

      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 text-gray-400">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
            ))}
          </div>
          <p className="text-sm">
            <span className="font-semibold text-white">10,000+</span> sales professionals trust Cold AI
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
