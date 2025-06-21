"use client"

import { useState, useEffect } from "react"

interface RobustProtectionState {
  violations: number
  lastDetection: Date | null
  detectedTools: string[]
  highConfidenceBlocks: number
  mediumConfidenceBlocks: number
}

export function useRobustProtection() {
  const [state, setState] = useState<RobustProtectionState>({
    violations: 0,
    lastDetection: null,
    detectedTools: [],
    highConfidenceBlocks: 0,
    mediumConfidenceBlocks: 0,
  })

  // Listen for blocks from the robust system
  useEffect(() => {
    const handleRobustBlock = (event: CustomEvent) => {
      const { tool, confidence } = event.detail
      setState((prev) => ({
        violations: prev.violations + 1,
        lastDetection: new Date(),
        detectedTools: [...prev.detectedTools.slice(-9), tool], // Keep last 10 tools
        highConfidenceBlocks:
          confidence === "high" || confidence === "very high"
            ? prev.highConfidenceBlocks + 1
            : prev.highConfidenceBlocks,
        mediumConfidenceBlocks: confidence === "medium" ? prev.mediumConfidenceBlocks + 1 : prev.mediumConfidenceBlocks,
      }))
    }

    // Listen for custom events from the robust system
    window.addEventListener("robustBlock", handleRobustBlock as EventListener)

    return () => {
      window.removeEventListener("robustBlock", handleRobustBlock as EventListener)
    }
  }, [])

  // Additional clipboard monitoring
  useEffect(() => {
    const monitorClipboard = async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.read) {
          const clipboardItems = await navigator.clipboard.read()
          for (const item of clipboardItems) {
            if (item.types.includes("image/png") || item.types.includes("image/jpeg")) {
              setState((prev) => ({
                violations: prev.violations + 1,
                lastDetection: new Date(),
                detectedTools: [...prev.detectedTools.slice(-9), "Clipboard Screenshot"],
                highConfidenceBlocks: prev.highConfidenceBlocks + 1,
                mediumConfidenceBlocks: prev.mediumConfidenceBlocks,
              }))

              if (window.ultraFastBlock) {
                window.ultraFastBlock("Clipboard Screenshot", "Image detected in clipboard")
              }
              break
            }
          }
        }
      } catch (error) {
        // Clipboard access denied - normal behavior
      }
    }

    // Check clipboard every 2 seconds
    const clipboardInterval = setInterval(monitorClipboard, 2000)

    return () => {
      clearInterval(clipboardInterval)
    }
  }, [])

  return state
}

declare global {
  interface Window {
    ultraFastBlock?: (tool: string, reason: string) => void
  }
}
