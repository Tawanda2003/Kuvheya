"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import {
  Mail,
  ExternalLink,
  Phone,
  Linkedin,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Palette,
  MessageSquare,
  Facebook,
  Instagram,
  Search,
  LayoutGrid,
} from "lucide-react"
import { CVDownload } from "@/components/cv-download"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 overflow-hidden min-h-screen flex items-center">
        <AnimatedBackground />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/natalie-hero.jpg"
                alt="Natalie Kuvheya"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 md:mb-6 object-cover border-4 border-white shadow-xl animate-float"
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 md:mb-6 animate-fade-in-up px-4">
              Natalie Kuvheya
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-500 mb-6 md:mb-8 animate-fade-in-up animation-delay-200 px-4">
              Digital Marketing Specialist & Creative Strategist
            </p>
            <p className="text-base md:text-lg text-blue-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-4">
              Passionate about helping businesses grow their online presence through strategic SEO, compelling content
              creation, and data-driven social media management.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up animation-delay-600 px-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                asChild
              >
                <Link href="/projects">
                  <ExternalLink className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  View My Work
                </Link>
              </Button>
              <CVDownload className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto" />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 animate-fade-in-up animation-delay-600 px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm md:text-base text-blue-500">Digital Marketing Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">30%</div>
                <div className="text-sm md:text-base text-blue-500">Average Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm md:text-base text-blue-500">On-Time Content Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-base md:text-lg text-blue-500 mb-4 md:mb-6 leading-relaxed">
                  I'm currently working as a Freelance Digital Marketer, having launched and managed 5+ digital
                  marketing projects across web and social platforms for startups and personal brand clients. I've
                  successfully increased client engagement by 30% on average through strategic content calendars,
                  hashtag optimization, and platform-specific content design.
                </p>
                <p className="text-base md:text-lg text-blue-500 mb-4 md:mb-6 leading-relaxed">
                  I hold certifications from HubSpot Academy in Social Media Marketing and Digital Marketing, and I'm
                  currently completing my Digital Marketing Certificate from Uncommon.org. I have hands-on experience
                  with Google Analytics, Canva, Mailchimp, Meta Business Suite, and WordPress.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Quick Learner
                  </Badge>
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Strong Communicator
                  </Badge>
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Creative Thinker
                  </Badge>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4 md:space-y-6">
                <div className="hover:shadow-lg transition-shadow p-4 rounded-lg bg-blue-50">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="mr-2 h-4 md:h-5 w-4 md:w-5 text-green-600" />
                    <span className="font-semibold text-sm md:text-base text-blue-600">Education</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-blue-600">Digital Marketing Certificate</p>
                    <p className="text-blue-500 text-xs md:text-sm">Uncommon.org</p>
                  </div>
                </div>
                <div className="hover:shadow-lg transition-shadow p-4 rounded-lg bg-blue-50">
                  <div className="flex items-center mb-2">
                    <Target className="mr-2 h-4 md:h-5 w-4 md:w-5 text-blue-600" />
                    <span className="font-semibold text-sm md:text-base text-blue-600">Focus Areas</span>
                  </div>
                  <div>
                    <ul className="space-y-1 text-blue-500 text-xs md:text-sm">
                      <li>• SEO Optimization</li>
                      <li>• Content Creation</li>
                      <li>• Social Media Management</li>
                      <li>• Campaign Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="hover:shadow-lg transition-shadow p-4 md:p-6 rounded-lg bg-white">
                <div className="flex items-center mb-3">
                  <Search className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-600" />
                  <span className="font-semibold text-sm md:text-base text-blue-600">SEO Optimization</span>
                </div>
                <p className="text-blue-500 text-xs md:text-sm">
                  Keyword research, on-page optimization, and technical SEO to improve search rankings and organic
                  traffic.
                </p>
              </div>

              <div className="hover:shadow-lg transition-shadow p-4 md:p-6 rounded-lg bg-white">
                <div className="flex items-center mb-3">
                  <Palette className="mr-2 h-5 md:h-6 w-5 md:w-6 text-purple-600" />
                  <span className="font-semibold text-sm md:text-base text-blue-600">Content Creation</span>
                </div>
                <p className="text-blue-500 text-xs md:text-sm">
                  Crafting engaging content that resonates with target audiences across various digital platforms.
                </p>
              </div>

              <div className="hover:shadow-lg transition-shadow p-4 md:p-6 rounded-lg bg-white">
                <div className="flex items-center mb-3">
                  <Users className="mr-2 h-5 md:h-6 w-5 md:w-6 text-green-600" />
                  <span className="font-semibold text-sm md:text-base text-blue-600">Social Media Management</span>
                </div>
                <p className="text-blue-500 text-xs md:text-sm">
                  Strategic planning and execution of social media campaigns across Facebook, Instagram, and other
                  platforms.
                </p>
              </div>

              <div className="hover:shadow-lg transition-shadow p-4 md:p-6 rounded-lg bg-white">
                <div className="flex items-center mb-3">
                  <BarChart3 className="mr-2 h-5 md:h-6 w-5 md:w-6 text-orange-600" />
                  <span className="font-semibold text-sm md:text-base text-blue-600">Analytics & Insights</span>
                </div>
                <p className="text-blue-500 text-xs md:text-sm">
                  Data analysis using Google Analytics and other tools to measure performance and optimize campaigns.
                </p>
              </div>

              <div className="hover:shadow-lg transition-shadow p-4 md:p-6 rounded-lg bg-white">
                <div className="flex items-center mb-3">
                  <Target className="mr-2 h-5 md:h-6 w-5 md:w-6 text-red-600" />
                  <span className="font-semibold text-sm md:text-base text-blue-600">Campaign Management</span>
                </div>
                <p className="text-blue-500 text-xs md:text-sm">
                  End-to-end campaign planning, execution, and optimization for maximum ROI and engagement.
                </p>
              </div>

              <div className="hover:shadow-lg transition-shadow p-4 md:p-6 rounded-lg bg-white">
                <div className="flex items-center mb-3">
                  <MessageSquare className="mr-2 h-5 md:h-6 w-5 md:w-6 text-teal-600" />
                  <span className="font-semibold text-sm md:text-base text-blue-600">Brand Communication</span>
                </div>
                <p className="text-blue-500 text-xs md:text-sm">
                  Developing consistent brand voice and messaging that strengthens brand visibility and recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 md:mb-12">Tools & Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Facebook className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-500" />
                <span className="font-semibold text-xs md:text-sm text-blue-600">Facebook</span>
              </div>
              <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Instagram className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-500" />
                <span className="font-semibold text-xs md:text-sm text-blue-600">Instagram</span>
              </div>
              <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Search className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-500" />
                <span className="font-semibold text-xs md:text-sm text-blue-600">Google Tools</span>
              </div>
              <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <LayoutGrid className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-500" />
                <span className="font-semibold text-xs md:text-sm text-blue-600">Canva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">Services I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="hover:shadow-xl transition-shadow border-0 shadow-lg p-4 md:p-6 rounded-lg bg-white">
                <div className="font-semibold text-base md:text-lg mb-2 text-blue-600">
                  SEO Strategy & Implementation
                </div>
                <div className="text-sm mb-3 text-blue-500">Comprehensive SEO audits and optimization strategies</div>
                <ul className="space-y-1 md:space-y-2 text-blue-500 text-xs md:text-sm">
                  <li>• Keyword research & analysis</li>
                  <li>• On-page optimization</li>
                  <li>• Technical SEO improvements</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>

              <div className="hover:shadow-xl transition-shadow border-0 shadow-lg p-4 md:p-6 rounded-lg bg-white">
                <div className="font-semibold text-base md:text-lg mb-2 text-blue-600">Content Marketing</div>
                <div className="text-sm mb-3 text-blue-500">Engaging content that drives results</div>
                <ul className="space-y-1 md:space-y-2 text-blue-500 text-xs md:text-sm">
                  <li>• Blog writing & optimization</li>
                  <li>• Social media content</li>
                  <li>• Email marketing campaigns</li>
                  <li>• Visual content creation</li>
                </ul>
              </div>

              <div className="hover:shadow-xl transition-shadow border-0 shadow-lg p-4 md:p-6 rounded-lg bg-white md:col-span-2 lg:col-span-1">
                <div className="font-semibold text-base md:text-lg mb-2 text-blue-600">Social Media Management</div>
                <div className="text-sm mb-3 text-blue-500">Complete social media strategy and execution</div>
                <ul className="space-y-1 md:space-y-2 text-blue-500 text-xs md:text-sm">
                  <li>• Platform strategy development</li>
                  <li>• Content planning & scheduling</li>
                  <li>• Community management</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="hover:shadow-xl transition-shadow overflow-hidden rounded-lg bg-white border border-blue-100">
                <img
                  src="/images/project1.png"
                  alt="Prodairy Digital Marketing Audit"
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <div className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                    Prodairy Digital Marketing Audit
                  </div>
                  <div className="text-blue-500 mb-3 md:mb-4 text-sm">Comprehensive digital marketing strategy</div>
                  <p className="text-blue-600 mb-3 md:mb-4 text-xs md:text-sm">
                    Complete digital marketing audit focusing on growth strategies and family business expansion.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent w-full sm:w-auto border-blue-300 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <Link href="/projects">
                      <ExternalLink className="mr-2 h-3 md:h-4 w-3 md:w-4" />
                      View All Projects
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hover:shadow-xl transition-shadow overflow-hidden rounded-lg bg-white border border-blue-100">
                <img
                  src="/images/project2.png"
                  alt="Rose Hair Castle Social Media Strategy"
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <div className="text-lg md:text-xl font-semibold text-blue-600 mb-2">Social Media Strategy</div>
                  <div className="text-blue-500 mb-3 md:mb-4 text-sm">Beauty brand social media campaign</div>
                  <p className="text-blue-600 mb-3 md:mb-4 text-xs md:text-sm">
                    Strategic social media campaign for Rose Hair Castle beauty brand with engaging visual content.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent w-full sm:w-auto border-blue-300 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <Link href="/projects">
                      <ExternalLink className="mr-2 h-3 md:h-4 w-3 md:w-4" />
                      View All Projects
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hover:shadow-xl transition-shadow overflow-hidden rounded-lg bg-white border border-blue-100 md:col-span-2 lg:col-span-1">
                <img
                  src="/images/project4.png"
                  alt="N1 Hotel Campaign Strategy"
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <div className="text-lg md:text-xl font-semibold text-blue-600 mb-2">N1 Hotel Campaign</div>
                  <div className="text-blue-500 mb-3 md:mb-4 text-sm">Digital revival campaign strategy</div>
                  <p className="text-blue-600 mb-3 md:mb-4 text-xs md:text-sm">
                    Comprehensive campaign strategy for N1 Hotel's digital revival with professional branding.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent w-full sm:w-auto border-blue-300 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <Link href="/projects">
                      <ExternalLink className="mr-2 h-3 md:h-4 w-3 md:w-4" />
                      View All Projects
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 bg-blue-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">Let's Work Together</h2>
            <p className="text-lg md:text-xl text-blue-300 mb-8 md:mb-12 px-4">
              Ready to grow your online presence? I'd love to help you achieve your digital marketing goals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              <Link
                href="/contact"
                className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer p-4"
              >
                <Mail className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-blue-400" />
                <h3 className="font-semibold mb-1 md:mb-2 text-white text-sm md:text-base">Email</h3>
                <p className="text-blue-300 text-xs md:text-sm">Send Message</p>
              </Link>
              <a
                href="tel:+263787511100"
                className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer p-4"
              >
                <Phone className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-green-400" />
                <h3 className="font-semibold mb-1 md:mb-2 text-white text-sm md:text-base">Phone</h3>
                <p className="text-blue-300 text-xs md:text-sm">Call Now</p>
              </a>
              <a
                href="https://linkedin.com/in/natalie-kuvheya-4739ab351"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer p-4"
              >
                <Linkedin className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-blue-500" />
                <h3 className="font-semibold mb-1 md:mb-2 text-white text-sm md:text-base">LinkedIn</h3>
                <p className="text-blue-300 text-xs md:text-sm">View Profile</p>
              </a>
              <a
                href="https://facebook.com/natalie.kuvheya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform cursor-pointer p-4"
              >
                <div className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">f</span>
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-white text-sm md:text-base">Facebook</h3>
                <p className="text-blue-300 text-xs md:text-sm">Follow Me</p>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  Send Message
                </Link>
              </Button>
              <CVDownload className="border-blue-600 text-white hover:bg-blue-700 bg-transparent w-full sm:w-auto">
                <ExternalLink className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Download Resume
              </CVDownload>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 bg-blue-950 text-blue-400">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">&copy; 2024 Natalie Kuvheya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
