"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Clock, Mail } from "lucide-react"
import Link from "next/link"


export function SignupFormCareerService({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("mx-auto max-w-sm rounded-lg border border-muted/20 bg-card p-6 shadow-sm", className)} {...props}>
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Clock className="h-5 w-5" aria-hidden />
            </div>
            <h1 className="mb-1 text-center text-xl font-semibold tracking-tight">Career Service signup</h1>
            <p className="text-center text-sm text-muted-foreground">
                This flow is not available yet. Check back soon.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2">
                <Button asChild variant="outline" aria-label="Back to home">
                    <Link href="/">Back to home</Link>
                </Button>
                <Button asChild aria-label="Contact support">
                    <a href="mailto:support@campusreach.org">
                        <span className="inline-flex items-center"><Mail className="mr-2 h-4 w-4" /> Contact support</span>
                    </a>
                </Button>
            </div>
        </div>
    )
}
