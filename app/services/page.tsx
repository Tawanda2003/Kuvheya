"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navigation />

      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8 md:mb-12">Services I Offer</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="hover:shadow-xl transition-shadow border-blue-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">SEO Strategy & Implementation</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Comprehensive SEO audits and optimization strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Keyword research & analysis</li>
                    <li>• On-page optimization</li>
                    <li>• Technical SEO improvements</li>
                    <li>• Performance tracking</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-blue-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">Content Marketing</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Engaging content that drives results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Blog writing & optimization</li>
                    <li>• Social media content</li>
                    <li>• Email marketing campaigns</li>
                    <li>• Visual content creation</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-blue-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">Social Media Management</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Complete social media strategy and execution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Platform strategy development</li>
                    <li>• Content planning & scheduling</li>
                    <li>• Community management</li>
                    <li>• Performance analytics</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-blue-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">Digital Campaign Management</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    End-to-end campaign planning and execution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Campaign strategy development</li>
                    <li>• Multi-platform execution</li>
                    <li>• Performance monitoring</li>
                    <li>• ROI optimization</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-blue-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">Brand Strategy</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Building strong brand presence online
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Brand voice development</li>
                    <li>• Visual identity guidelines</li>
                    <li>• Brand messaging strategy</li>
                    <li>• Competitive analysis</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-blue-200 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-base md:text-lg">Analytics & Reporting</CardTitle>
                  <CardDescription className="text-blue-500 text-sm">
                    Data-driven insights and performance tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 md:space-y-2 text-blue-600 mb-4 md:mb-6 text-sm md:text-base">
                    <li>• Google Analytics setup</li>
                    <li>• Custom dashboard creation</li>
                    <li>• Monthly performance reports</li>
                    <li>• Actionable recommendations</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Quote
                    </Link>
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
