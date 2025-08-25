"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import {
  Search,
  Palette,
  Users,
  BarChart3,
  Target,
  MessageSquare,
  Facebook,
  Mailbox,
  Globe,
  Zap,
  LayoutGrid,
} from "lucide-react"

export default function Skills() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navigation />

      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">
              Skills & Expertise
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Search className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                    SEO Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    Keyword research, on-page optimization, and technical SEO to improve search rankings and organic
                    traffic.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Palette className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                    Content Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    Crafting engaging content that resonates with target audiences across various digital platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Users className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                    Social Media Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    Strategic planning and execution of social media campaigns across Facebook, Instagram, and other
                    platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <BarChart3 className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                    Analytics & Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    Data analysis using Google Analytics and other tools to measure performance and optimize campaigns.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Target className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                    Campaign Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    End-to-end campaign planning, execution, and optimization for maximum ROI and engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <MessageSquare className="mr-2 h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                    Brand Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    Developing consistent brand voice and messaging that strengthens brand visibility and recognition.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tools & Platforms */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 md:mb-8">Tools & Platforms</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <Search className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-600" />
                  <span className="font-semibold text-blue-600 text-xs md:text-sm">Google Analytics</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <LayoutGrid className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-600" />
                  <span className="font-semibold text-blue-600 text-xs md:text-sm">Canva</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <Mailbox className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-600" />
                  <span className="font-semibold text-blue-600 text-xs md:text-sm">Mailchimp</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <Facebook className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-600" />
                  <span className="font-semibold text-blue-600 text-xs md:text-sm">Meta Business</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <Globe className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-600" />
                  <span className="font-semibold text-blue-600 text-xs md:text-sm">WordPress</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <Zap className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 text-blue-600" />
                  <span className="font-semibold text-blue-600 text-xs md:text-sm">HubSpot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
