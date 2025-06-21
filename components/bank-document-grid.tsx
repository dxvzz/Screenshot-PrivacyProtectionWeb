"use client"

import { FileText, BarChart2, AlertTriangle, DollarSign } from "lucide-react"
import {
  CardBank,
  CardHeaderBank,
  CardTitleBank,
  CardDescriptionBank,
  CardContentBank,
} from "@/components/ui/card-bank"

interface BankDocumentGridProps {
  onSelectDocument: (documentId: string) => void
}

const mockDocuments = [
  {
    id: "doc1",
    title: "Q4 Financial Projections",
    category: "Finance",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    description: "Detailed financial forecast for the upcoming quarter.",
  },
  {
    id: "doc2",
    title: "Market Risk Analysis",
    category: "Risk Management",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    description: "Comprehensive assessment of current market risks.",
  },
  {
    id: "doc3",
    title: "Client Portfolio Summary - H2",
    category: "Client Relations",
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    description: "Overview of key client portfolio performance.",
  },
  {
    id: "doc4",
    title: "Compliance Audit Report",
    category: "Compliance",
    icon: <FileText className="w-6 h-6 text-yellow-600" />,
    description: "Findings from the latest internal compliance audit.",
  },
  {
    id: "doc5",
    title: "Investment Strategy FY2025",
    category: "Strategy",
    icon: <BarChart2 className="w-6 h-6 text-purple-500" />,
    description: "Proposed investment strategies for the next fiscal year.",
  },
  {
    id: "doc6",
    title: "Internal Memo: Security Update",
    category: "Internal Comms",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    description: "Important update regarding new security protocols.",
  },
]

export function BankDocumentGrid({ onSelectDocument }: BankDocumentGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 tracking-tight">Document Center</h2>
      <p className="text-sm text-gray-600 mb-6 font-medium">
        Access confidential reports and internal documents. All access is monitored.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDocuments.map((doc) => (
          <CardBank
            key={doc.id}
            className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            onClick={() => onSelectDocument(doc.id)}
          >
            <CardHeaderBank>
              <div className="flex items-center space-x-3 mb-2">
                {doc.icon}
                <CardTitleBank className="font-semibold tracking-tight">{doc.title}</CardTitleBank>
              </div>
              <CardDescriptionBank className="text-xs font-medium uppercase tracking-wider">
                {doc.category}
              </CardDescriptionBank>
            </CardHeaderBank>
            <CardContentBank>
              <p className="text-sm text-gray-600 leading-relaxed">{doc.description}</p>
            </CardContentBank>
          </CardBank>
        ))}
      </div>
    </div>
  )
}
