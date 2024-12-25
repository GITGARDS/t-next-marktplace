"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navBarLinks } from "./NavBarLinks";

export function MobileMenu() {
  const location = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-5 flex px-2 space-y-1 flex-col">
            {navBarLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  location === item.href
                    ? "bg-muted"
                    : "hover:bg-muted hover:bg-opacity-75",
                  "group flex items-center px-2 py-2 font-medium rounded-md"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
