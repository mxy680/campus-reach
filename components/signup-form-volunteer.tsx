"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [heardAbout, setHeardAbout] = useState("");
  const [motivation, setMotivation] = useState("");

  const isReady = heardAbout.trim() !== "" && motivation.trim() !== "";

  return (
    <>
      <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={e => e.preventDefault()}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Sign up for Campus Reach</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Before you join, please answer our quick survey.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="heardAbout">How did you hear about Campus Reach?</Label>
            <select
              id="heardAbout"
              name="heardAbout"
              value={heardAbout}
              onChange={e => setHeardAbout(e.target.value)}
              required
              className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>Select an option</option>
              <option value="Friend">Friend</option>
              <option value="School">School</option>
              <option value="Social Media">Social Media</option>
              <option value="Event">Event</option>
              <option value="Internet Search">Internet Search</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="motivation">What is your main motivation for joining?</Label>
            <select
              id="motivation"
              name="motivation"
              value={motivation}
              onChange={e => setMotivation(e.target.value)}
              required
              className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>Select an option</option>
              <option value="Volunteering">Volunteering</option>
              <option value="Networking">Networking</option>
              <option value="Resume Building">Resume Building</option>
              <option value="Community Service">Community Service</option>
              <option value="Skill Development">Skill Development</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Button
            type="button"
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
            disabled={!isReady}
            onClick={() => signIn("google")}
          >
            <FcGoogle className="mr-1 h-5 w-5" />
            Connect with Google
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-2">
          You must answer both questions to continue
        </div>
      </form>
      <div className="text-center text-sm mt-3">
        Already have an account?{" "}
        <a href="/auth/login" className="underline underline-offset-4">
          Log in
        </a>
      </div>
    </>
  );
}

