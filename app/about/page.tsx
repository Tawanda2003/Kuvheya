"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { TrendingUp, Target, Heart, Users } from "lucide-react"
import { CVDownload } from "@/components/cv-download"

export default function About() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navigation />

      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">About Me</h1>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="order-2 md:order-1">
                <img
                  src="/images/natalie-hero.jpg"
                  alt="Natalie Kuvheya"
                  className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-base md:text-lg text-blue-600 mb-4 md:mb-6 leading-relaxed">
                  I'm currently working as a Freelance Digital Marketer based in Harare, Zimbabwe, with hands-on
                  experience in social media marketing, SEO optimization, and content creation. I've successfully
                  launched and managed 5+ digital marketing projects across web and social platforms for startups and
                  personal brand clients.
                </p>
                <p className="text-base md:text-lg text-blue-600 mb-4 md:mb-6 leading-relaxed">
                  My recent achievements include increasing client engagement by 30% on average through strategic
                  content calendars and hashtag optimization, and redesigning a client website (PennyJuice) that
                  resulted in 20% longer average visit duration. I hold certifications from HubSpot Academy and am
                  completing my Digital Marketing Certificate from Uncommon.org.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600 text-xs md:text-sm">
                    Quick Learner
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600 text-xs md:text-sm">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600 text-xs md:text-sm">
                    Strong Communicator
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600 text-xs md:text-sm">
                    Creative Thinker
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <TrendingUp className="mr-2 h-4 md:h-5 w-4 md:w-5 text-blue-500" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-blue-600 text-sm md:text-base">Digital Marketing Certificate</p>
                  <p className="text-blue-500 text-xs md:text-sm">Uncommon.org (In Progress, 2025)</p>
                  <p className="font-semibold text-blue-600 mt-2 text-sm md:text-base">
                    HubSpot Academy Certifications
                  </p>
                  <p className="text-blue-500 text-xs md:text-sm">Social Media Marketing & Digital Marketing (2025)</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Target className="mr-2 h-4 md:h-5 w-4 md:w-5 text-blue-500" />
                    Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 text-sm md:text-base">
                    <li>• SEO Optimization</li>
                    <li>• Content Creation</li>
                    <li>• Social Media Management</li>
                    <li>• Campaign Analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Heart className="mr-2 h-4 md:h-5 w-4 md:w-5 text-blue-500" />
                    My Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    To help businesses thrive in the digital landscape by creating meaningful connections with their
                    audience through strategic marketing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 text-base md:text-lg">
                    <Users className="mr-2 h-4 md:h-5 w-4 md:w-5 text-blue-500" />
                    Work Style
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 text-sm md:text-base">
                    I thrive in dynamic, fast-paced environments and enjoy contributing creatively to collaborative
                    projects.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8 md:mt-12">
              <CVDownload className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
