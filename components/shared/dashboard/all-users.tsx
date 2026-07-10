"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/lib/actions/customer.action";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

function AllUsers() {
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
            <TableHead>Delete</TableHead>
            <TableHead>Update</TableHead>
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
                  <Button variant="destructive">Delete</Button>
                </TableCell>
                <TableCell>
                  <Button variant="secondary">Delete</Button>
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
