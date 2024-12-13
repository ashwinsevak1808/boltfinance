"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Shield } from "lucide-react";

export function StatsCards({ users }: { users: Array<{ status: string; role: string }> }) {
  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      description: "Total registered users",
    },
    {
      title: "Active Users",
      value: users.filter((user) => user.status === "Active").length,
      icon: UserCheck,
      description: "Currently active users",
    },
    {
      title: "Admin Users",
      value: users.filter((user) => user.role === "Admin").length,
      icon: Shield,
      description: "Users with admin privileges",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}