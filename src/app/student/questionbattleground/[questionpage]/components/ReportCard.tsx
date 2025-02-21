import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, BarChart2, Clock, HelpCircle, TrendingUp } from "lucide-react"
import React from "react"


export default function ReportCard() {
  return (
    <Card className="w-full max-w-4xl mx-auto border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">Performance stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          <StatItem
            icon={<CheckCircle className="w-6 h-6 text-green-500" />}
            label="Correct Answers"
            value={15}
            total={20}
            color="bg-green-100 dark:bg-green-900"
          />
          <StatItem
            icon={<XCircle className="w-6 h-6 text-red-500" />}
            label="Incorrect Answers"
            value={5}
            total={20}
            color="bg-red-100 dark:bg-red-900"
          />
          <StatItem
            icon={<BarChart2 className="w-6 h-6 text-blue-500" />}
            label="Accuracy Rate"
            value={75}
            unit="%"
            color="bg-blue-100 dark:bg-blue-900"
          />
          <StatItem
            icon={<Clock className="w-6 h-6 text-yellow-500" />}
            label="Time Spent"
            value={18}
            unit="min"
            color="bg-yellow-100 dark:bg-yellow-900"
          />
          <StatItem
            icon={<HelpCircle className="w-6 h-6 text-purple-500" />}
            label="Total Questions"
            value={20}
            color="bg-purple-100 dark:bg-purple-900"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function StatItem({ icon, label, value, total, unit, color, chart }: any  ) {
    return (
      <div className={`p-4 rounded-lg  transition-all duration-300 ease-in-out hover:scale-105 border-1`}>
        <div className="flex items-center justify-between mb-2">
          {icon}
          <Badge variant="secondary" className="text-xs font-semibold">
            {label}
          </Badge>
        </div>
        <div className="text-2xl font-bold mb-1">
          {value}
          {unit && <span className="text-sm font-normal ml-1">{unit}</span>}
        </div>
      </div>
    )
  }
  