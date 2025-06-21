"use client"

import { Shield, AlertTriangle, CheckCircle, Eye, Zap, Target, Activity } from "lucide-react"
import { useRobustProtection } from "@/hooks/use-robust-protection"

export function RobustProtectionStatus() {
  const { violations, lastDetection, detectedTools, highConfidenceBlocks, mediumConfidenceBlocks } =
    useRobustProtection()

  return (
    <div className="mb-6 p-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 border-2 border-orange-600 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Shield className="w-7 h-7 text-white mr-3" />
          <h2 className="text-xl font-bold text-white tracking-tight">Robust Screenshot Protection</h2>
        </div>
        <div className="flex items-center">
          <CheckCircle className="w-5 h-5 text-white mr-2" />
          <span className="text-white text-sm font-bold tracking-wide">MAXIMUM SECURITY</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
          <div className="flex items-center mb-2">
            <Zap className="w-4 h-4 text-orange-500 mr-2" />
            <div className="text-sm text-gray-600 font-medium">Protection</div>
          </div>
          <div className="text-lg font-bold text-orange-500 tracking-tight">ROBUST</div>
          <div className="text-xs text-gray-500 font-medium">Pattern analysis</div>
        </div>

        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
            <div className="text-sm text-gray-600 font-medium">Total Blocks</div>
          </div>
          <div className="text-lg font-bold text-red-600">{violations}</div>
          <div className="text-xs text-gray-500 font-medium">All attempts</div>
        </div>

        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
          <div className="flex items-center mb-2">
            <Target className="w-4 h-4 text-orange-500 mr-2" />
            <div className="text-sm text-gray-600 font-medium">High Confidence</div>
          </div>
          <div className="text-lg font-bold text-orange-500">{highConfidenceBlocks}</div>
          <div className="text-xs text-gray-500 font-medium">Certain threats</div>
        </div>

        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
          <div className="flex items-center mb-2">
            <Activity className="w-4 h-4 text-yellow-600 mr-2" />
            <div className="text-sm text-gray-600 font-medium">Medium Confidence</div>
          </div>
          <div className="text-lg font-bold text-yellow-600">{mediumConfidenceBlocks}</div>
          <div className="text-xs text-gray-500 font-medium">Suspicious patterns</div>
        </div>

        <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
          <div className="flex items-center mb-2">
            <Eye className="w-4 h-4 text-orange-500 mr-2" />
            <div className="text-sm text-gray-600 font-medium">Last Detection</div>
          </div>
          <div className="text-sm font-bold text-orange-500">
            {lastDetection ? lastDetection.toLocaleTimeString() : "None"}
          </div>
          <div className="text-xs text-gray-500 font-medium font-mono">
            {lastDetection ? `${Math.round((Date.now() - lastDetection.getTime()) / 1000)}s ago` : "No attempts"}
          </div>
        </div>
      </div>

      <div className="bg-orange-600 border-2 border-orange-300 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center tracking-tight">
          <AlertTriangle className="w-5 h-5 mr-2" />⚡ Robust Protection Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-white mb-2 tracking-wide">🎯 Detection Methods:</h4>
            <ul className="text-white space-y-1 font-medium">
              <li>• Keyboard pattern analysis</li>
              <li>• Focus change monitoring</li>
              <li>• Visibility state tracking</li>
              <li>• Key sequence analysis</li>
              <li>• Timing-based detection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2 tracking-wide">🛡️ Blocked Tools:</h4>
            <ul className="text-white space-y-1 font-medium">
              <li>• Windows Snipping Tool</li>
              <li>• Print Screen variations</li>
              <li>• macOS Screenshots</li>
              <li>• Lightshot, Greenshot</li>
              <li>• Unknown screenshot tools</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-orange-300 border-2 border-orange-500 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-orange-900 mb-3 tracking-tight">🧪 Test Robust Protection</h3>
        <p className="text-orange-900 text-sm mb-3 font-medium">
          This system uses advanced pattern detection. Try these shortcuts - they should be blocked instantly:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <kbd className="px-3 py-2 bg-white border-2 border-orange-500 rounded text-sm font-mono text-center text-gray-700 font-semibold">
            Win + Shift + S
          </kbd>
          <kbd className="px-3 py-2 bg-white border-2 border-orange-500 rounded text-sm font-mono text-center text-gray-700 font-semibold">
            Print Screen
          </kbd>
          <kbd className="px-3 py-2 bg-white border-2 border-orange-500 rounded text-sm font-mono text-center text-gray-700 font-semibold">
            Alt + PrtSc
          </kbd>
          <kbd className="px-3 py-2 bg-white border-2 border-orange-500 rounded text-sm font-mono text-center text-gray-700 font-semibold">
            Ctrl + Alt + A
          </kbd>
        </div>
        <div className="mt-3 p-3 bg-orange-600 rounded border border-orange-500">
          <p className="text-white text-xs font-semibold tracking-wide">
            ⚡ This protection analyzes keyboard patterns, timing, and focus changes to detect screenshot tools before
            they can capture content.
          </p>
        </div>
      </div>

      {violations > 0 && (
        <div className="bg-red-200 border-2 border-red-400 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800 font-bold tracking-tight">Recent Violations ({violations} total)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {detectedTools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-red-300 text-red-800 text-sm rounded-full border border-red-500 font-semibold tracking-wide"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-3 text-red-700 text-xs font-medium">
            All violations logged with high precision timestamps and confidence levels.
          </div>
        </div>
      )}
    </div>
  )
}
