"use client"

import { ButtonBank } from "@/components/ui/button-bank"
import { X, Printer, Download } from "lucide-react"

interface BankDocumentViewerProps {
  documentId: string
  onClose: () => void
}

export function BankDocumentViewer({ documentId, onClose }: BankDocumentViewerProps) {
  const handleActionAttempt = (actionName: string) => {
    console.log(
      `${actionName} attempt detected on confidential document. This activity was recorded and will be reported.`,
    )
  }

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 border border-gray-300">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-orange-600">Viewing: Confidential Document #{documentId}</h2>
        <div className="flex items-center space-x-2">
          <ButtonBank variant="outline" size="sm" onClick={() => handleActionAttempt("Print")}>
            <Printer size={16} className="mr-1" /> Print (Restricted)
          </ButtonBank>
          <ButtonBank variant="outline" size="sm" onClick={() => handleActionAttempt("Download")}>
            <Download size={16} className="mr-1" /> Download (Restricted)
          </ButtonBank>
          <ButtonBank variant="ghost" size="icon" onClick={onClose} className="text-gray-600 hover:bg-gray-100">
            <X size={20} />
          </ButtonBank>
        </div>
      </div>

      <div className="bg-gray-50 p-8 h-[60vh] overflow-y-auto border border-gray-200 rounded">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Document Title Placeholder</h3>
        <p className="text-sm text-gray-600 mb-4">
          This is a placeholder for sensitive document content. In a real system, this area would display the actual
          document. All interactions with this document are logged for security and compliance purposes.
        </p>
        <div className="space-y-3 text-xs text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="font-semibold text-red-600 p-3 bg-red-100 border border-red-300 rounded">
            WARNING: This document contains highly sensitive information. Unauthorized distribution, copying, or screen
            capture is strictly prohibited and will result in disciplinary action and/or legal proceedings.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">
        Document ID: {documentId} - Access Time: {new Date().toLocaleString()}
      </p>
    </div>
  )
}
