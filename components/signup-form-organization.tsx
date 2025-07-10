"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function SignupFormOrganization({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Sign up your organization</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Please enter your information to get started.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="orgName">Name</Label>
                    <Input id="orgName" name="orgName" type="text" placeholder="Your Organization" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="org@example.com" required />
                </div>
                <Button type="submit" className="w-full">
                    Sign Up
                </Button>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/auth/login" className="underline underline-offset-4">
                    Log in
                </a>
            </div>
        </form>
    )
}
