"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  return (
    <header className="flex flex-wrap items-center justify-between bg-white p-6 dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src="/lupleg.svg" alt="Lupleg" width={150} height={100} />
        </Link>
      </div>
      <div className="hidden md:block">
        <nav className="flex space-x-6">
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="about-us"
          >
            About
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="challenge"
          >
            Challenge
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="mentorships"
          >
            Mentorships
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="academy"
          >
            Academy
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="podcasts"
          >
            Podcasts
          </Link>
        </nav>
      </div>
      {/* <div className="hidden items-center justify-start  space-x-4 text-m font-semibold text-white md:flex">
        <Link
          href="premium"
          className="rounded bg-green-950 border-2 border-green-950 p-3"
        >
          Premium
        </Link>
      </div> */}

      <div className="md:flex hidden items-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          <h1>user is authenticated</h1>
        ) : (
          <div className="flex items-center gap-x-2">
            <Button className="bg-green-950 hover:bg-green-950">
              <LoginLink>Login</LoginLink>{" "}
            </Button>
            <Button variant="secondary">
              <RegisterLink>Register</RegisterLink>{" "}
            </Button>
          </div>
        )}
      </div>

      {/* mobile view */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="about-us"
              >
                About
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="challenge"
              >
                Challenge
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="mentorships"
              >
                Mentorships
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="academy"
              >
                Academy
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="podcasts"
              >
                Podcasts
              </Link>
            </SheetTrigger>
            <div className="w-30 flex   items-center rounded-full">
              <Button className="text-md text-white">
                <SheetTrigger asChild>
                  {/* <Link href="premium">Sign In</Link> */}
                  <Button>Sign In</Button>
                </SheetTrigger>
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

