import { MdOutlineVolunteerActivism } from "react-icons/md";
import { ModeToggle } from '@/components/ui/mode-toggle';

import { SignupFormOrganization } from "@/components/signup-form-organization"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <MdOutlineVolunteerActivism className="size-4" />
            </div>
            Campus Reach
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupFormOrganization />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <ModeToggle className="absolute top-2 right-2 z-10" />
        <Image
          src="/food-shelter.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
