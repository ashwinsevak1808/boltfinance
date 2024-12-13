"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { BarChart, Receipt, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";

const data = [
  { name: "Housing", value: 1200 },
  { name: "Food", value: 400 },
  { name: "Transportation", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Utilities", value: 250 },
];

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function InsightView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle>Tax Insights</CardTitle>
          <CardDescription>2024 Tax Estimation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            $4,500 Potential Refund
          </div>
          <p className="text-sm text-muted-foreground">
            Based on current income and deductions
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Receipt className="mr-2 h-4 w-4" /> View Tax Report
          </Button>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle>Budget Planning</CardTitle>
          <CardDescription>Smart Recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold">
            Recommended Savings: $1,200/month
          </div>
          <Badge variant="secondary" className="mt-2">
            Optimized Plan
          </Badge>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <BarChart className="mr-2 h-4 w-4" /> Customize Budget
          </Button>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle>Financial Goals</CardTitle>
          <CardDescription>Track Your Progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold">Emergency Fund</div>
              <div className="text-sm text-muted-foreground">
                $15,000 / $20,000
              </div>
            </div>
            <Badge variant="secondary">75% Complete</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <TrendingUp className="mr-2 h-4 w-4" /> Set New Goal
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
