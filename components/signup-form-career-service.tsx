"use client";

import { cn } from "@/lib/utils"


export function SignupFormCareerService({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (
        <div className={cn("flex flex-col items-center justify-center gap-3 text-center p-6 border rounded-md", className)} {...props}>
            <h1 className="text-2xl font-bold">Career Service signup</h1>
            <p className="text-muted-foreground">
                This flow isn't available yet. Please check back soon.
            </p>
            <p className="text-sm text-muted-foreground">
                If you need access now, contact support.
            </p>
        </div>
    )
}
