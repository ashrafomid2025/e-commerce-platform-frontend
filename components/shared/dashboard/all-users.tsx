"use client";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, getAllUsers } from "@/lib/actions/customer.action";
import { notFound } from "next/navigation";

import React, { useActionState, useEffect, useState } from "react";

function AllUsers() {
  const [data, action] = useActionState(deleteUser, {
    message: "",
    state: false,
  });
  const [users, setUsers] = useState<
    { id: number; name: string; email: string; role: string }[] | null
  >(null);
  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers();
      setUsers(data.data);
    }
    getUsers();
  }, []);

  if (!users) return;
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col">
      <h1 className="text-gray-500 text-sm my-2">All Customers</h1>
      <Table className="w-full ">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>role</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button variant="secondary">Update</Button>
                </TableCell>
                <TableCell>
                  <form action={action}>
                    <Input
                      type="text"
                      name="id"
                      defaultValue={user.id}
                      className="hidden"
                    />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Deleting items</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete {user.name}?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            formAction={action}
                            about="deleting items"
                            asChild
                          >
                            <Button type="submit">Continue</Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </form>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
