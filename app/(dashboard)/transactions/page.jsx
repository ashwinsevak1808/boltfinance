"use client"

import { useState, useEffect, useLayoutEffect } from "react"
import { Plus, Upload, Filter, Eye, Download, MoreHorizontal, Copy, TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { toast } from "sonner";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label as UILabel } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import TransactionTile from "@/components/transactions/transaction-tile"
import { AddTransactionAction } from "@/components/transactions/add-transactions"
import { get, post, put, del } from "@/utils/api/apiService"
import { API_ENDPOINTS } from "@/utils/api/apiConstants"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
}

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalBalance, setTotalBalance] = useState(0)
    const transactionsPerPage = 5



    const fetchTransactions = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await get(`${API_ENDPOINTS.GET_TRANSACTIONS}/transactions?page=${currentPage}&limit=${transactionsPerPage}`, token)
            setTransactions(response.transactions)
            setTotalPages(response.totalPages)
            setTotalBalance(response.totalBalance)
        } catch (error) {
            toast.error("Failed to fetch transactions", {
                description: error.message || "An error occurred while fetching transactions.",
            })
        }
    }

    const handleTransactions = {
        duplicate: async (transaction) => {
            try {
                const token = localStorage.getItem('token')
                const newTransactionData = {
                    ...transaction,
                    date: new Intl.DateTimeFormat("en-GB").format(new Date()),
                    time: new Date().toLocaleTimeString()
                }
                await post(API_ENDPOINTS.CREATE_TRANSACTION, newTransactionData, token)
                fetchTransactions()
                toast.success("Transaction duplicated successfully")
            } catch (error) {
                toast.error("Failed to duplicate transaction", {
                    description: error.message || "An error occurred while duplicating transaction.",
                })
            }
        },
        delete: async (id) => {
            try {
                const token = localStorage.getItem('token')
                await del(API_ENDPOINTS.DELETE_TRANSACTION.replace(':id', id), token)
                fetchTransactions()
                toast.success("Transaction deleted successfully")
            } catch (error) {
                toast.error("Failed to delete transaction", {
                    description: error.message || "An error occurred while deleting transaction.",
                })
            }
        },
        add: async (newTransaction) => {
            try {
                const token = localStorage.getItem('token')
                await post(API_ENDPOINTS.CREATE_TRANSACTION, newTransaction, token)
                fetchTransactions()
                toast.success("Transaction added successfully")
            } catch (error) {
                toast.error("Failed to add transaction", {
                    description: error.message || "An error occurred while adding transaction.",
                })
            }
        },
        edit: async (updatedTransaction) => {
            try {
                const token = localStorage.getItem('token')
                await put(API_ENDPOINTS.UPDATE_TRANSACTION.replace(':id', updatedTransaction.id), updatedTransaction, token)
                fetchTransactions()
                toast.success("Transaction updated successfully")
            } catch (error) {
                toast.error("Failed to update transaction", {
                    description: error.message || "An error occurred while updating transaction.",
                })
            }
        }
    }
    const todayTransactions = transactions.filter(t =>
        t.date === new Intl.DateTimeFormat("en-GB").format(new Date())
    )

    const otherTransactions = transactions.filter(t =>
        t.date !== new Intl.DateTimeFormat("en-GB").format(new Date())
    )

    const todayTotal = todayTransactions.reduce((acc, curr) => acc + curr.amount, 0)

    return (
        <div className="mx-auto">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Recent Transactions</CardTitle>
                            <div className="flex space-x-2">
                                <AddTransactionAction onAdd={handleTransactions.add} />
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
                                        {todayTransactions.map(transaction =>
                                            TransactionTile([transaction], handleTransactions)
                                        )}
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold mb-3">Previous Transactions</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Time</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead>Category</TableHead>
                                            <TableHead className="text-right">Amount</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {otherTransactions.map(transaction =>
                                            TransactionTile([transaction], handleTransactions)
                                        )}
                                    </TableBody>
                                </Table>
                                <div className="mt-4 flex justify-center">
                                    <Button
                                        variant="outline"
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                    >
                                        Previous
                                    </Button>
                                    <span className="mx-4 py-2">Page {currentPage}</span>
                                    <Button
                                        variant="outline"
                                        disabled={currentPage >= totalPages}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Bar Chart - Horizontal</CardTitle>
                            <CardDescription>January - June 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart
                                    accessibilityLayer
                                    data={chartData}
                                    layout="vertical"
                                    margin={{
                                        left: -20,
                                    }}
                                >
                                    <XAxis type="number" dataKey="desktop" hide />
                                    <YAxis
                                        dataKey="month"
                                        type="category"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                        <CardFooter className="flex-col items-start gap-2 text-sm">
                            <div className="flex gap-2 font-medium leading-none">
                                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                            </div>
                            <div className="leading-none text-muted-foreground">
                                Showing total visitors for the last 6 months
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
