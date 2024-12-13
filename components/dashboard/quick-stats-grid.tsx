
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingUp, CreditCard, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";

const QuickStatsGrid = () => {
  const stats = [
    {
      icon: Wallet,
      title: "Total Balance",
      value: "$45,231.89",
      change: "+20.1%",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Monthly Income",
      value: "$8,891.00",
      change: "+4.3%",
      color: "text-green-500",
    },
    {
      icon: CreditCard,
      title: "Monthly Expenses",
      value: "$3,421.50",
      change: "-2.1%",
      color: "text-red-500",
    },
    {
      icon: PiggyBank,
      title: "Savings Rate",
      value: "61.5%",
      change: "+8.4%",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, title, value, change, color }) => (
        <motion.div
          key={title}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Icon className={`h-5 w-5 mr-2 ${color}`} />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p
                className={`text-xs ${
                  change.startsWith("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {change} from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStatsGrid;
