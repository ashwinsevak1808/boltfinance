import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Eye,
  Filter,
  MoreHorizontal,
  Plus,
  Upload,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const transactionData = [
  {
    id: 1,
    date: "03/12/2024",
    description: "Salary Deposit",
    amount: 8500.0,
    type: "Income",
    category: "Salary",
    status: "Completed",
    paymentMethod: "Direct Deposit",
    time: "09:00 AM",
    referenceId: "SAL-2024-001",
    recipient: "John Doe",
    notes: "Monthly salary payment",
  },
  {
    id: 2,
    date: "03/12/2024",
    description: "Grocery Shopping",
    amount: -450.75,
    type: "Expense",
    category: "Groceries",
    status: "Completed",
    paymentMethod: "Credit Card",
    time: "02:30 PM",
    referenceId: "TXN-2024-002",
    recipient: "Walmart",
    notes: "Weekly grocery shopping",
  },
  {
    id: 3,
    date: "02/12/2024",
    description: "Freelance Payment",
    amount: 2500.0,
    type: "Income",
    category: "Freelance",
    status: "Completed",
    paymentMethod: "PayPal",
    time: "11:15 AM",
    referenceId: "FRL-2024-003",
    recipient: "Jane Smith",
    notes: "Website development project",
  },
  {
    id: 4,
    date: "01/12/2024",
    description: "Utility Bills",
    amount: -180.5,
    type: "Expense",
    category: "Utilities",
    status: "Pending",
    paymentMethod: "Bank Transfer",
    time: "04:45 PM",
    referenceId: "UTL-2024-004",
    recipient: "Power Company",
    notes: "Monthly electricity bill",
  },
];

const TransactionsView = () => {
  const [transactions, setTransactions] = useState(transactionData);

  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
              </DialogHeader>
              {/* Add transaction form would go here */}
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" /> Import CSV
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Today&#39;s Transactions</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions
                .filter(
                  (t) =>
                    t.date ===
                    new Intl.DateTimeFormat("en-GB").format(new Date())
                )
                .map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.time}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {transaction.paymentMethod === "GPay" && (
                          <Image
                            src="/gpay-icon.png"
                            className="w-4 h-4 mr-2"
                            alt={""}
                          />
                        )}
                        {transaction.paymentMethod}
                      </div>
                    </TableCell>
                    <TableCell
                      className={`text-right ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === "Completed"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Transaction Details</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold">Basic Info</h4>
                              <div className="mt-2 space-y-2">
                                <div>Date: {transaction.date}</div>
                                <div>Time: {transaction.time}</div>
                                <div>
                                  Amount: $
                                  {Math.abs(transaction.amount).toFixed(2)}
                                </div>
                                <div>Status: {transaction.status}</div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold">Payment Details</h4>
                              <div className="mt-2 space-y-2">
                                <div>Method: {transaction.paymentMethod}</div>
                                <div>
                                  Reference ID: {transaction.referenceId}
                                </div>
                                <div>Recipient: {transaction.recipient}</div>
                                <div>Category: {transaction.category}</div>
                              </div>
                            </div>
                            <div className="col-span-2">
                              <h4 className="font-semibold">Notes</h4>
                              <p className="mt-2">{transaction.notes}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                          <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Earlier This Week</h3>
          {/* Similar table structure for earlier transactions */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Showing recent transactions from{" "}
          {new Intl.DateTimeFormat("en-GB").format(new Date())}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button variant="outline">View All Transactions</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TransactionsView;
