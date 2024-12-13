import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { Copy, Eye, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function TransactionTile(
  transaction: {
    id: number;
    date: string;
    time: string;
    description: string;
    category: string;
    paymentMethod: string;
    amount: number;
    status: string;
    referenceId: string;
    recipient: string;
    notes: string;
  }[],
  handleTransactions: {
    handleTransactions?: {
      duplicate: (transaction: any) => void;
      delete: (id: any) => void;
      add: (newTransaction: any) => void;
      edit: (updatedTransaction: any) => void;
    };
    duplicate?: any;
    delete?: any;
  },
) {
  return (
    <TableRow key={transaction[0].id}>
      <TableCell>{transaction[0].time}</TableCell>
      <TableCell>{transaction[0].description}</TableCell>
      <TableCell>
        <Badge variant="outline">{transaction[0].category}</Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          {transaction[0].paymentMethod === "GPay" && (
            <Image src="/gpay-icon.png" alt="GPay" className="w-4 h-4 mr-2" />
          )}
          {transaction[0].paymentMethod}
        </div>
      </TableCell>
      <TableCell
        className={`text-right ${
          transaction[0].amount > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ${Math.abs(transaction[0].amount).toFixed(2)}
      </TableCell>
      <TableCell>
        <Badge
          variant={transaction[0].status === "Completed" ? "secondary" : "default"}
        >
          {transaction[0].status}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex space-x-1">
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
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => handleTransactions.duplicate && handleTransactions.duplicate(transaction[0])}
              >
                <Copy className="h-4 w-4 mr-2" /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleTransactions.delete && handleTransactions.delete(transaction[0].id)}
              >
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem>Download Receipt</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );}
