"use client";

import { Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function UserTableActions({ user, onSelect }) {
  return (
    <div className="flex justify-end gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>View user information</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div>
              <h4 className="font-medium">Name</h4>
              <p className="text-sm text-muted-foreground">{user.name}</p>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div>
              <h4 className="font-medium">Role</h4>
              <p className="text-sm text-muted-foreground">{user.role}</p>
            </div>
            <div>
              <h4 className="font-medium">Status</h4>
              <p className="text-sm text-muted-foreground">{user.status}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Button variant="ghost" size="icon" onClick={() => onSelect(user)}>
        <Edit className="h-4 w-4" />
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user
              account and remove their data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}