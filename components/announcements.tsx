import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Separator } from "@/components/ui/separator";

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">Sponsorships at your Finger Tips!</span>
      <span className="hidden sm:inline">Sponsorships at your Finger Tips!</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}