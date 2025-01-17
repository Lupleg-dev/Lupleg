import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Nav() {
  return (
    <div className="bg-[#2D1537] ">
      <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/xlogo.svg"
                alt="Lupleg Logo"
                width={150}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/programs" className="text-white/80 hover:text-white">
                Programs
              </Link>
              <Link
                href="/challenges/frontend"
                className="text-white/80 hover:text-white"
              >
                Challenges
              </Link>
              <Link
                href="/resources"
                className="text-white/80 hover:text-white"
              >
                Resources
              </Link>
              <Link
                href="/contributing"
                className="text-white/80 hover:text-white"
              >
                Contributing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/premium"
              className="text-white/80 hover:text-white hidden md:block"
            >
              Premium
            </Link>
            <Link
              href="https://wa.me/+260776578583"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-white  px-4 text-sm text-white"
            >
              Talk to us
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-[#2D1537] hover:bg-white/90"
            >
               Mentorship
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
