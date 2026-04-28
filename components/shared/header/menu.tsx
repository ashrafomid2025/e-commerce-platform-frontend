import React from "react";
import ToggleTheme from "./toggle-mode";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  EllipsisVertical,
  MenuIcon,
  ShoppingCart,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";
import SearchInput from "./search-input";

function Menu() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full items-center  max-w-lg gap-1">
        <SearchInput />
        <ToggleTheme />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-8 items-start pl-3">
            <SheetTitle>Menu</SheetTitle>
            <SearchInput />
            <ToggleTheme />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Menu;
