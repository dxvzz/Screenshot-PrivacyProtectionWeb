import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ICECI Bank - Secure Internal Systems",
  description: "ICECI Bank - Protected Internal System",
    generator: 'v0.dev'
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    instantProtectionActivate?: (tool: string) => void
    instantProtectionDeactivate?: () => void
    ultraFastBlock?: (toolName: string) => void
    snippingToolDetected?: boolean
    clearBlock?: () => void
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Maximum aggression Win+Shift+S prevention */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Maximum aggression screenshot prevention - prevent Win+Shift+S from reaching Windows
            (function() {
              let overlay = null;
              let isBlocked = false;
              
              // Pre-create overlay
              const createOverlay = () => {
                if (overlay) return overlay;
                
                overlay = document.createElement('div');
                overlay.style.cssText = 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background: black !important; color: red !important; z-index: 2147483647 !important; display: none !important; align-items: center !important; justify-content: center !important; font-family: Arial, sans-serif !important; font-size: 32px !important; font-weight: bold !important; text-align: center !important;';
                overlay.innerHTML = '<div><div style="font-size: 80px; margin-bottom: 30px;">🚫</div><div>SCREENSHOT ATTEMPT BLOCKED</div><div style="font-size: 20px; margin-top: 20px; color: yellow;">Win+Shift+S Prevented</div><div style="font-size: 16px; margin-top: 25px; color: #ccc;">This activity was recorded and will be reported</div><div style="font-size: 14px; margin-top: 15px; color: #888;">Click to acknowledge</div></div>';
                
                overlay.addEventListener('click', () => {
                  overlay.style.display = 'none';
                  isBlocked = false;
                });
                
                return overlay;
              };

              // Instant block
              const instantBlock = () => {
                if (isBlocked) return;
                isBlocked = true;
                
                const overlayEl = createOverlay();
                if (!overlayEl.parentNode) {
                  document.body.appendChild(overlayEl);
                }
                overlayEl.style.display = 'flex';
                
                console.error('WIN+SHIFT+S PREVENTED FROM REACHING WINDOWS');
                
                setTimeout(() => {
                  if (isBlocked) {
                    overlayEl.style.display = 'none';
                    isBlocked = false;
                  }
                }, 8000);
              };

              // Ultra-aggressive key interception - prevent ANY possibility of Win+Shift+S
              const preventWinShiftS = (e) => {
                // Check for Win+Shift+S in every possible way
                const isWinShiftS = (
                  (e.metaKey && e.shiftKey && (e.key === 's' || e.key === 'S' || e.code === 'KeyS')) ||
                  (e.getModifierState && e.getModifierState('Meta') && e.getModifierState('Shift') && (e.key === 's' || e.key === 'S')) ||
                  (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) || // Some systems might map differently
                  (e.keyCode === 83 && e.metaKey && e.shiftKey) ||
                  (e.which === 83 && e.metaKey && e.shiftKey)
                );
                
                if (isWinShiftS) {
                  // MAXIMUM PREVENTION
                  e.preventDefault();
                  e.stopPropagation();
                  e.stopImmediatePropagation();
                  
                  // Try to cancel the event in every possible way
                  if (e.returnValue !== undefined) e.returnValue = false;
                  if (e.cancel !== undefined) e.cancel = true;
                  if (e.cancelBubble !== undefined) e.cancelBubble = true;
                  
                  instantBlock();
                  return false;
                }
                
                // Also prevent Print Screen and other screenshot keys
                if (e.key === 'PrintScreen' || e.code === 'PrintScreen' || e.keyCode === 44) {
                  e.preventDefault();
                  e.stopPropagation();
                  e.stopImmediatePropagation();
                  instantBlock();
                  return false;
                }
              };

              // Attach to EVERY possible event and phase
              const attachMaximumHandlers = () => {
                // Document level - capture and bubble phases
                document.addEventListener('keydown', preventWinShiftS, { capture: true, passive: false });
                document.addEventListener('keydown', preventWinShiftS, { capture: false, passive: false });
                document.addEventListener('keyup', preventWinShiftS, { capture: true, passive: false });
                document.addEventListener('keypress', preventWinShiftS, { capture: true, passive: false });
                
                // Window level
                window.addEventListener('keydown', preventWinShiftS, { capture: true, passive: false });
                window.addEventListener('keydown', preventWinShiftS, { capture: false, passive: false });
                window.addEventListener('keyup', preventWinShiftS, { capture: true, passive: false });
                window.addEventListener('keypress', preventWinShiftS, { capture: true, passive: false });
                
                // Document element level
                if (document.documentElement) {
                  document.documentElement.addEventListener('keydown', preventWinShiftS, { capture: true, passive: false });
                  document.documentElement.addEventListener('keyup', preventWinShiftS, { capture: true, passive: false });
                }
                
                // Body level (when available)
                if (document.body) {
                  document.body.addEventListener('keydown', preventWinShiftS, { capture: true, passive: false });
                  document.body.addEventListener('keyup', preventWinShiftS, { capture: true, passive: false });
                }
                
                // Try to override the onkeydown property
                const originalOnKeyDown = window.onkeydown;
                window.onkeydown = function(e) {
                  if (preventWinShiftS(e) === false) return false;
                  if (originalOnKeyDown) return originalOnKeyDown.call(this, e);
                };
                
                // Try to override document onkeydown
                const originalDocOnKeyDown = document.onkeydown;
                document.onkeydown = function(e) {
                  if (preventWinShiftS(e) === false) return false;
                  if (originalDocOnKeyDown) return originalDocOnKeyDown.call(this, e);
                };
              };

              // Monitor for focus changes that might indicate Snipping Tool
              let lastFocusTime = Date.now();
              const monitorFocus = () => {
                const now = Date.now();
                if (!document.hasFocus() && now - lastFocusTime < 50) {
                  // Very quick focus loss might be Snipping Tool launching
                  instantBlock();
                }
                lastFocusTime = now;
              };

              // High-frequency monitoring
              const startUltraMonitoring = () => {
                // Check focus every 1ms for maximum responsiveness
                setInterval(monitorFocus, 1);
                
                // Re-attach handlers frequently in case something removes them
                setInterval(attachMaximumHandlers, 100);
                
                // Monitor for any signs of screenshot activity
                setInterval(() => {
                  // Check if window has lost focus recently
                  if (!document.hasFocus() && Date.now() - lastFocusTime < 200) {
                    instantBlock();
                  }
                  
                  // Check for visibility changes
                  if (document.hidden) {
                    instantBlock();
                  }
                }, 10);
              };

              // Initialize with maximum aggression
              const initMaxAggression = () => {
                createOverlay();
                attachMaximumHandlers();
                startUltraMonitoring();
                
                // Also monitor visibility changes
                document.addEventListener('visibilitychange', () => {
                  if (document.hidden) instantBlock();
                });
                
                // Monitor window blur
                window.addEventListener('blur', () => {
                  instantBlock();
                });
                
                // Block context menu
                document.addEventListener('contextmenu', (e) => {
                  e.preventDefault();
                  instantBlock();
                });
                
                // Block print
                window.addEventListener('beforeprint', (e) => {
                  e.preventDefault();
                  instantBlock();
                });
              };

              // Multiple initialization attempts
              initMaxAggression();
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initMaxAggression);
              }
              
              // Try again when body is available
              const observer = new MutationObserver(() => {
                if (document.body) {
                  initMaxAggression();
                }
              });
              
              if (document.documentElement) {
                observer.observe(document.documentElement, { childList: true, subtree: true });
              }
              
              // Keep trying to initialize
              setTimeout(initMaxAggression, 10);
              setTimeout(initMaxAggression, 50);
              setTimeout(initMaxAggression, 100);
              
              window.ultraFastBlock = instantBlock;
            })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div style={{ userSelect: "none", WebkitUserSelect: "none" }}>{children}</div>
      </body>
    </html>
  )
}
