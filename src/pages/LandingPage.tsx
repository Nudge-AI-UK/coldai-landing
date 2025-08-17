import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EmailCapture from '@/components/EmailCapture';
import { 
  Play, 
  TrendingUp, 
  Zap, 
  Target, 
  Bot, 
  Linkedin, 
  Settings, 
  MessageSquare,
  CheckCircle,
  Star,
  Users,
  Shield,
  Award,
  Sparkles
} from 'lucide-react';

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      title: "Higher Response Rates",
      description: "AI-personalised messages get real responses from prospects who want to connect",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Faster Than Manual Writing",
      description: "Generate perfect outreach messages in seconds, not hours of research",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Perfect ICP Matching",
      description: "AI identifies and scores prospects against your ideal customer profiles",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "Learns Your Voice & Style",
      description: "Adapts to your communication style for authentic, personal messages",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const steps = [
    {
      number: "01", 
      title: "Complete Setup",
      description: "Cold AI learns your business profile and ideal customer personas",
      icon: Settings,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      number: "02",
      title: "Connect LinkedIn",
      description: "Secure OAuth integration for seamless message sending and tracking",
      icon: Linkedin,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "Generate Messages",
      description: "Paste a prospect's LinkedIn URL and get a personalised message ready to send",
      icon: MessageSquare,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const individualPlans = [
    {
      name: "FREE",
      price: "£0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "25 AI-generated messages/month",
        "1 Customer Profile (ICP)",
        "Basic LinkedIn profile analysis",
        "Standard communication templates",
        "Community support"
      ],
      cta: "Coming Soon",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "BASIC",
      price: "£35",
      period: "/month",
      description: "For growing sales professionals",
      features: [
        "100 AI-generated messages/month",
        "3 custom ICPs with regeneration",
        "Advanced communication preferences",
        "Message personalisation elements",
        "Calendar integration",
        "Email support"
      ],
      cta: "Coming Soon",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "STANDARD",
      price: "£89",
      period: "/month",
      description: "Most popular for sales teams",
      features: [
        "300 AI-generated messages/month",
        "5 custom ICPs",
        "Advanced LinkedIn profile enrichment",
        "Message performance analytics",
        "A/B testing for templates",
        "CRM integration capabilities",
        "Priority support"
      ],
      cta: "Coming Soon",
      popular: true,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      name: "PRO",
      price: "£169",
      period: "/month",
      description: "For power users and agencies",
      features: [
        "750 AI-generated messages/month",
        "Unlimited ICPs and advanced targeting",
        "Voice profile analysis and tone matching",
        "Advanced automation workflows",
        "Lead scoring and qualification",
        "Salesforce, HubSpot integration",
        "White-label options",
        "Dedicated account manager"
      ],
      cta: "Coming Soon",
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const teamPlans = [
    {
      name: "TEAM BASIC",
      price: "£229",
      period: "/month",
      description: "Perfect for small teams (2-5 members)",
      features: [
        "1,000 shared messages/month",
        "Everything in Standard per member",
        "Shared ICP library and templates",
        "Team performance dashboard",
        "Message approval workflows",
        "Centralised billing and user management",
        "Team training resources"
      ],
      addOn: "Additional seats: £39/month",
      cta: "Coming Soon",
      popular: false,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "TEAM XL",
      price: "£599",
      period: "/month", 
      description: "For larger teams (6-25 members)",
      features: [
        "3,000 shared messages/month",
        "Everything in Team Basic +",
        "Advanced team analytics and reporting",
        "Role-based permissions and access control",
        "Custom integration development",
        "Advanced automation and workflow builder",
        "Dedicated customer success manager",
        "API access for custom integrations"
      ],
      addOn: "Additional seats: £29/month",
      cta: "Coming Soon",
      popular: true,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: "pricing",
      description: "For large organisations",
      features: [
        "Custom messaging volume",
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated infrastructure",
        "SLA guarantees",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [-100, 100, -100],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/20">
              <Sparkles className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Cold AI
            </span>
          </motion.div>
          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-orange-400 transition-colors">Pricing</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-orange-400 transition-colors">How It Works</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered LinkedIn Outreach
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Stop Sending
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> 
                Generic LinkedIn Messages
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Cold AI generates personalised outreach messages that get more responses. 
              Connect with prospects who actually want to hear from you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Dialog open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="px-8 py-3 text-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Demo Video</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center py-8">
                    <Play className="w-16 h-16 text-gray-400 mb-4" />
                    <p className="text-center text-gray-400">
                      Demo video coming soon! We're putting the finishing touches on an awesome walkthrough of Cold AI's features.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <EmailCapture />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI That Actually Understands Sales
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Generic templates get ignored. Manual personalisation takes hours.
              Cold AI gives you the best of both worlds.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <Card className="relative bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2 text-lg">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Start Generating Messages in Minutes
            </h2>
            <p className="text-xl text-gray-400">
              Get started in 3 simple steps
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <Card className="relative text-center p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <step.icon className={`w-12 h-12 mx-auto mb-4 mt-4 text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`} />
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              Scale your outreach with the perfect plan for your needs
            </p>
          </motion.div>
          
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-800/50 border-gray-700">
              <TabsTrigger value="individual" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">
                Individual Plans
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white">
                Team Plans
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual">
              <div className="grid lg:grid-cols-4 gap-6">
                {individualPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    <Card className={`relative h-full bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all ${plan.popular ? 'border-orange-500/50' : ''}`}>
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                          <div className="flex items-baseline justify-center">
                            <span className="text-3xl font-bold text-white">{plan.price}</span>
                            <span className="text-gray-400 ml-1">{plan.period}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                          disabled={plan.cta === 'Coming Soon'}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="team">
              <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {teamPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    <Card className={`relative h-full bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all ${plan.popular ? 'border-orange-500/50' : ''}`}>
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                          <div className="flex items-baseline justify-center">
                            <span className="text-3xl font-bold text-white">{plan.price}</span>
                            <span className="text-gray-400 ml-1">{plan.period}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {plan.addOn && (
                          <p className="text-xs text-gray-500 mb-6 text-center italic">
                            {plan.addOn}
                          </p>
                        )}
                        <Button 
                          className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                          disabled={plan.cta === 'Coming Soon'}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-400">
              Your data is protected with industry-leading security standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, title: "SOC 2 Compliant", description: "Industry-standard security controls" },
              { icon: Award, title: "GDPR Ready", description: "Full compliance with privacy regulations" },
              { icon: Users, title: "24/7 Support", description: "Always here when you need us" },
              { icon: CheckCircle, title: "99.9% Uptime", description: "Reliable service you can count on" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-4">
                  <item.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Outreach?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Be the first to know when Cold AI launches. Join our waiting list today.
              </p>
              <EmailCapture />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/30 backdrop-blur-sm border-t border-gray-700 py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/20">
                  <Sparkles className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Cold AI
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered LinkedIn outreach that actually gets responses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-orange-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Centre</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Cold AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
