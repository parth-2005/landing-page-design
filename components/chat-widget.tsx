'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, Sparkles, X } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  text: "Hi! I'm the Cobalt AI assistant. I can answer questions about our methodology, how a study works, or what you'd get from a pilot. What would you like to know?",
}

const QUICK_REPLIES = [
  'How does a study work?',
  'What is a Stickiness Score?',
  'How do I get started?',
]

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    setMessages((previousMessages) => [...previousMessages, { role: 'user', text }])
    setInput('')
    setLoading(true)

    await new Promise((resolve) => window.setTimeout(resolve, 900))

    setMessages((previousMessages) => [...previousMessages, { role: 'assistant', text: getStaticResponse(text) }])
    setLoading(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex w-80 flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 px-5 py-4" style={{ background: 'linear-gradient(135deg, #001081, #0A1A8F)' }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Cobalt AI</p>
                <p className="text-[11px] text-white/50">Cobalt Analytix assistant</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/50 transition-colors hover:text-white" aria-label="Close chat">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-72 flex-1 space-y-3 overflow-y-auto bg-[#FFFEFF] px-4 py-4">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${message.role === 'user' ? 'rounded-br-sm bg-[#2C6DF6] text-white' : 'rounded-bl-sm bg-[#F2F3F3] text-[#001081]'}`}>
                    {message.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-[#F2F3F3] px-4 py-3">
                    {[0, 200, 400].map((delay) => (
                      <span
                        key={delay}
                        className="h-2 w-2 rounded-full bg-[#001081]/30"
                        style={{ animation: `typing 1.2s ease-in-out ${delay}ms infinite` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {messages.length === 1 && (
              <div className="flex gap-2 overflow-x-auto px-4 pb-2">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="shrink-0 rounded-full border border-[#2C6DF6]/20 bg-[#2C6DF6]/5 px-3 py-1.5 text-xs font-medium text-[#2C6DF6] transition-colors hover:bg-[#2C6DF6]/10"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 border-t border-[#E5E7EB] bg-white px-3 py-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    void sendMessage(input)
                  }
                }}
                placeholder="Ask something..."
                className="flex-1 bg-transparent text-sm text-[#001081] placeholder-[#001081]/30 focus:outline-none"
              />
              <button
                onClick={() => {
                  void sendMessage(input)
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C6DF6] transition-colors hover:bg-[#1A5AE0]"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((previous) => !previous)}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors"
        style={{ background: open ? '#001081' : '#2C6DF6' }}
        aria-label="Open chat"
      >
        {open ? <X className="h-5 w-5 text-white" /> : <MessageCircle className="h-5 w-5 text-white" />}
      </motion.button>
    </div>
  )
}

function getStaticResponse(text: string): string {
  const lowerText = text.toLowerCase()

  if (lowerText.includes('stickiness') || lowerText.includes('score')) {
    return 'The Stickiness Score™ is a composite number that predicts commercial repeat purchase intent. It combines sensory performance, confidence-adjusted responses, and behavioral signals like price loyalty and walk-to-shop intent. Our pilot score for Sample 2 was 76.56.'
  }

  if (lowerText.includes('study') || lowerText.includes('work') || lowerText.includes('how')) {
    return 'Simple process: you send us your blind SKUs and a brief. We run a double-blind sensory panel, filter responses for integrity, score each sample, and deliver insights, an AI assistant over your data, and recommendations.'
  }

  if (lowerText.includes('start') || lowerText.includes('begin') || lowerText.includes('pilot')) {
    return 'Best way to start is to book an appointment - we will walk you through what a pilot study looks like for your category. You can reach us at the bottom of the page.'
  }

  if (lowerText.includes('price') || lowerText.includes('cost')) {
    return "We don't have public pricing yet - studies are scoped based on number of SKUs, category, and panel size. Book an appointment and we will give you a clear picture."
  }

  if (lowerText.includes('api') || lowerText.includes('data') || lowerText.includes('integration')) {
    return 'API access is on our roadmap. It will let you pipe stickiness scores and panel data directly into your product analytics stack. Get in touch if this is a priority for you.'
  }

  return 'That is a great question. Our team would be best placed to answer that specifically for your category. Would you like to book an appointment for a 20-minute walkthrough?'
}