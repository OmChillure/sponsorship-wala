"use client"
import * as React from "react";
import { Eye, EyeOffIcon } from "lucide-react"; // Assuming appropriate icons
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PrivacyModeToggle() {
  const [isPrivate, setIsPrivate] = useState(false); // Initial state

  const handleToggle = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {isPrivate ? (
            <EyeOffIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-100 dark:scale-100" />
          ) : (
            <Eye className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-100 dark:scale-100" />
          )}
          <span className="sr-only">Toggle privacy mode</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleToggle}>
          {isPrivate ? "Public" : "Private"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
