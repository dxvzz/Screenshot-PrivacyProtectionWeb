"use client"

import { Briefcase, UserCog, LogOut, ShieldCheck } from "lucide-react"
import { ButtonBank } from "./ui/button-bank"

export function BankHeader() {
  return (
    <header className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ShieldCheck size={32} className="text-orange-200" />
          <h1 className="text-xl font-semibold tracking-tight">ICECI Bank - Internal Systems</h1>
        </div>
        <nav className="flex items-center space-x-2">
          <span className="text-sm mr-4 hidden md:inline font-medium">User: J.Doe (Analyst)</span>
          <ButtonBank variant="ghost" size="sm" className="hover:bg-orange-600 font-medium">
            <Briefcase size={18} className="mr-1" /> Dashboard
          </ButtonBank>
          <ButtonBank variant="ghost" size="sm" className="hover:bg-orange-600 font-medium">
            <UserCog size={18} className="mr-1" /> Profile
          </ButtonBank>
          <ButtonBank
            variant="outline"
            size="sm"
            className="border-orange-200 text-orange-200 hover:bg-orange-600 hover:text-white font-medium"
          >
            <LogOut size={18} className="mr-1" /> Logout
          </ButtonBank>
        </nav>
      </div>
      <div className="bg-orange-600 text-orange-100 text-xs px-4 py-1 text-center font-medium tracking-wide">
        CONFIDENTIAL: Information contained herein is proprietary and strictly confidential.
      </div>
    </header>
  )
}
