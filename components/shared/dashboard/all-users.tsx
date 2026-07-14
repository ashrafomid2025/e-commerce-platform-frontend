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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, Edit, getAllUsers } from "@/lib/actions/customer.action";
import Link from "next/link";
import { notFound } from "next/navigation";

import React, { useActionState, useEffect, useState } from "react";

function AllUsers() {
  const [data, action] = useActionState(deleteUser, {
    message: "",
    state: false,
  });
  const [id, setId] = useState(0);
  const [client, setClient] = useState<{
    name: string;
    email: string;
    phone_number: string;
  } | null>(null);
  const [users, setUsers] = useState<
    { id: number; name: string; email: string; role: string }[] | null
  >(null);
  const [links, setLinks] = useState<
    | {
        url: string;
        label: "string";
        page: number;
        active: boolean;
      }[]
    | null
  >(null);
  const [href, setHref] = useState(
    "http://localhost:8000/api/dashboard/all-users?page=1",
  );
  useEffect(() => {
    async function getSingleUser() {
      if (id != 0) {
        const data = await Edit(id);
        setClient(data.data);
      }
    }
    getSingleUser();
  }, [id, client]);
  useEffect(() => {
    async function getUsers() {
      const data = await getAllUsers(href);
      setUsers(data.data);
      setLinks(data.meta.links);
    }

    getUsers();
  }, [href]);

  if (!users) return;
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col">
      <div className="w-full flex my-4 justify-between">
        <h1 className="text-gray-500 text-sm my-2">All Customers</h1>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
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
                  <Dialog>
                    <form>
                      <DialogTrigger onClick={() => setId(user.id)} asChild>
                        <Button>Update</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-sm">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <FieldGroup>
                          <Field>
                            <Label htmlFor="name">Name</Label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              defaultValue={client?.name}
                              placeholder="Your name"
                            />
                          </Field>
                          <Field>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              type="email"
                              defaultValue={client?.email}
                              placeholder="Your email"
                              id="email"
                              name="email"
                            />
                          </Field>
                          <Field>
                            <Label htmlFor="phone_number">Phone Number</Label>
                            <Input
                              type="text"
                              defaultValue={client?.phone_number}
                              placeholder="Your phone #"
                              id="phone_number"
                              name="phone_number"
                            />
                          </Field>
                        </FieldGroup>
                        <DialogFooter>
                          <DialogClose>Close</DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger>Delete</AlertDialogTrigger>
                    <AlertDialogContent>
                      <form action={action}>
                        <Input
                          type="text"
                          name="id"
                          defaultValue={user.id}
                          className="hidden"
                        />

                        <AlertDialogHeader>
                          <AlertDialogTitle>Deleting items</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete {user.name}?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction type="submit">
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </form>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {links && (
        <div className="w-full my-4 max-w-5xl mx-auto flex justify-center gap-4">
          {links.map((link) => {
            return (
              <Button
                key={link.label}
                onClick={() =>
                  setHref(
                    link.url
                      ? link.url
                      : "http://localhost:8000/api/dashboard/all-users?page=1",
                  )
                }
                variant={link.active ? "default" : "outline"}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AllUsers;
