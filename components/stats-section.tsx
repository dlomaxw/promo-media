"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Award, TrendingUp } from "lucide-react"

export function StatsSection() {
  const [counts, setCounts] = useState({
    events: 0,
    attendees: 0,
    clients: 0,
    reach: 0,
  })

  const finalCounts = {
    events: 150,
    attendees: 275000,
    clients: 25,
    reach: 2500000,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounts((prev) => {
          const newValue = Math.min(prev[key as keyof typeof prev] + increment, finalValue)
          return { ...prev, [key]: Math.floor(newValue) }
        })
      }, stepDuration)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      value: counts.events,
      suffix: "+",
      label: "Events Executed",
      description: "Successful campaigns across Uganda",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      value: counts.attendees,
      suffix: "+",
      label: "Youth Engaged",
      description: "Direct event participation",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      value: counts.clients,
      suffix: "+",
      label: "Happy Clients",
      description: "Brands that trust us",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      value: counts.reach,
      suffix: "+",
      label: "Social Media Reach",
      description: "Total impressions generated",
    },
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See the measurable results we've achieved for our clients across Uganda.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {formatNumber(stat.value)}
                  {stat.suffix}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
