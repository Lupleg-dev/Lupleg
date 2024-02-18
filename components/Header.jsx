"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <PuzzleIcon className="h-6 w-6 text-orange-500 dark:text-white" />
        <Link
          className="text-2xl font-bold text-black dark:text-white"
          href="/"
        >
          Lupleg
        </Link>
      </div>
      <div className="hidden md:block">
        <nav className="flex space-x-6">
          <Link
            className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
            href="products"
          >
            Products
          </Link>
          <Link
            className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
            href="features"
          >
            Features
          </Link>
          <Link
            className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
            href="pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
            href="resources"
          >
            Resources
          </Link>
          <Link
            className="text-black dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
            href="events"
          >
            Events
          </Link>
        </nav>
      </div>
      <div className="hidden p-4 md:block  bg-black hover:bg-[#ED7133] rounded-full text-white text-md">
        <button>
          <Link href="contacts">Get Started</Link>
        </button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="products"
            >
              Products
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="features"
            >
              Features
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="pricing"
            >
              Pricing
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="resources"
            >
              Resources
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="events"
            >
              Events
            </Link>
            <div className="flex items-center  rounded-full">
              <Button className="text-white text-md">
                <Link href="contacts">Get Started</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}
