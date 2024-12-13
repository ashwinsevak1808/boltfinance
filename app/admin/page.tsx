"use client";
import { StatsCards } from "@/components/admin/stats-card";
import { UserTable } from "@/components/admin/user-table";
import { useState } from "react";

export default function AdminPage() {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Inactive" },
  ]);

  return (
    <div className=" container-fluid space-y-6 m-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Manage your users and monitor system activity.
        </p>
      </div>
      <StatsCards users={users} />
      <UserTable users={users} />
    </div>
  );
}