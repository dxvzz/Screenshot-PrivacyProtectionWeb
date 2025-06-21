"use client"

import { useState } from "react"
import { BankHeader } from "@/components/bank-header"
import { BankDocumentGrid } from "@/components/bank-document-grid"
import { BankDocumentViewer } from "@/components/bank-document-viewer"
import { RobustProtectionStatus } from "@/components/robust-protection-status"

export default function BankInternalPage() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <div id="main-content-wrapper">
        <BankHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          <RobustProtectionStatus />

          {selectedDocument ? (
            <BankDocumentViewer documentId={selectedDocument} onClose={() => setSelectedDocument(null)} />
          ) : (
            <BankDocumentGrid onSelectDocument={setSelectedDocument} />
          )}
        </main>
        <footer className="bg-orange-600 text-white text-center p-6 text-sm border-t-4 border-orange-700">
          <div className="container mx-auto">
            <div className="mb-3">
              <p className="font-medium tracking-wide">
                &copy; {new Date().getFullYear()} ICECI Bank. All rights reserved. For authorized personnel only.
              </p>
            </div>
            <div className="signature-container">
              <p className="text-white text-base font-medium">Made with compliments from Devdatta Mudliar</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
