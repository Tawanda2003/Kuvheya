"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navigation />

      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">My Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">

              {/* Prodairy Project */}
              <Card className="hover:shadow-xl transition-shadow overflow-hidden border-blue-200 bg-white">
                <img
                  src="/images/project1.png"
                  alt="Prodairy Digital Marketing Audit"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">
                    Prodairy Digital Marketing Audit
                  </CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Comprehensive digital marketing audit and strategy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 mb-4 text-sm md:text-base">
                    Complete digital marketing audit for Prodairy, focusing on growth strategies and family business
                    expansion. Created professional branding materials with engaging visual design.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                  >
                    <a
                      href="https://www.canva.com/design/DAGqr5iQPqE/n4iwbR_R6QHVz5ZWJzlygQ/edit?utm_content=DAGqr5iQPqE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Details
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Rose Hair Castle Project */}
              <Card className="hover:shadow-xl transition-shadow overflow-hidden border-blue-200 bg-white">
                <img
                  src="/images/project2.png"
                  alt="Rose Hair Castle Social Media Strategy"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">
                    Rose Hair Castle Social Media Strategy
                  </CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Strategic social media campaign for beauty brand
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 mb-4 text-sm md:text-base">
                    Developed comprehensive social media strategy for Rose Hair Castle, featuring engaging visual
                    content and brand positioning for the beauty and hair care industry.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                  >
                    <a
                      href="https://www.canva.com/design/DAGmSDDiMzw/hD2mqHyeCygL_Se7L8OHVg/edit?utm_content=DAGmSDDiMzw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Details
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Google Ads Campaign */}
              <Card className="hover:shadow-xl transition-shadow overflow-hidden border-blue-200 bg-white">
                <img
                  src="/images/project3.png"
                  alt="Google Ads Campaign for Beauty Treatment"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">
                    Google Ads Campaign - Beauty Treatment
                  </CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Professional Google Ads campaign design and strategy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 mb-4 text-sm md:text-base">
                    Created compelling Google Ads campaign materials for beauty treatment services, featuring
                    professional photography and clean design aesthetics to maximize conversion rates.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                  >
                    <a
                      href="https://www.canva.com/design/DAGnOa1wM7k/FmAT-dk1lgEleXH0Fn34LQ/edit?utm_content=DAGnOa1wM7k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Details
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* N1 Hotel Campaign */}
              <Card className="hover:shadow-xl transition-shadow overflow-hidden border-blue-200 bg-white">
                <img
                  src="/images/project4.png"
                  alt="N1 Hotel Campaign Strategy"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">N1 Hotel Campaign Strategy</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Digital revival campaign for hospitality brand
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 mb-4 text-sm md:text-base">
                    Comprehensive campaign strategy for N1 Hotel's digital revival, featuring "Presence Catalyst"
                    branding and professional hospitality marketing approach with striking visual design.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full sm:w-auto"
                  >
                    <a
                      href="https://www.canva.com/design/DAGtyX8dfHM/bx1spAIhudt34EXmoApqlw/edit?utm_content=DAGtyX8dfHM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Details
                    </a>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
