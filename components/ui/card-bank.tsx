import * as React from "react"

import { cn } from "@/lib/utils"

const CardBank = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm", className)}
      {...props}
    />
  ),
)
CardBank.displayName = "CardBank"

const CardHeaderBank = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeaderBank.displayName = "CardHeaderBank"

const CardTitleBank = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight text-orange-600", className)}
      {...props}
    />
  ),
)
CardTitleBank.displayName = "CardTitleBank"

const CardDescriptionBank = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />,
)
CardDescriptionBank.displayName = "CardDescriptionBank"

const CardContentBank = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CardContentBank.displayName = "CardContentBank"

const CardFooterBank = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooterBank.displayName = "CardFooterBank"

export { CardBank, CardHeaderBank, CardTitleBank, CardDescriptionBank, CardContentBank, CardFooterBank }
