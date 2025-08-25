"use client";

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";


export function SignupFormOrganization({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const [focusArea, setFocusArea] = useState<string>("")
    const [commitment, setCommitment] = useState<string>("")

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
                    <Label htmlFor="focusArea">Organization mission / primary focus area</Label>
                    <Select name="focusArea" value={focusArea} onValueChange={setFocusArea}>
                        <SelectTrigger className="w-full" id="focusArea">
                            <SelectValue placeholder="Select a focus area" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="food_security">Food Security</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="environment">Environment</SelectItem>
                            <SelectItem value="health">Health</SelectItem>
                            <SelectItem value="community">Community & Outreach</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="commitment">Preferred volunteer commitment</Label>
                    <Select name="commitment" value={commitment} onValueChange={setCommitment}>
                        <SelectTrigger className="w-full" id="commitment">
                            <SelectValue placeholder="Select a commitment" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="one_time">One-time event</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="flexible">Flexible / Ad hoc</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button
                    type="button"
                    className="w-full flex items-center justify-center gap-2"
                    variant="outline"
                    disabled={!focusArea || !commitment}
                    onClick={() => {
                        const url = `/onboarding?role=organization&focusArea=${encodeURIComponent(focusArea)}&commitment=${encodeURIComponent(commitment)}`
                        signIn("google", { callbackUrl: url })
                    }}
                >
                    <FcGoogle className="mr-1 h-5 w-5" />
                    Connect with Google
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
