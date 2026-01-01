'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const responses: Record<string, string> = {
    services:
        'We offer three core services:\n\n• **Web Development** - High-performance, scalable websites\n• **Brand Identity** - Visual systems that define your presence\n• **AI Agents** - Autonomous workflows for 24/7 operations',
    pricing:
        'Pricing varies by scope. Web projects start at $5,000, with AI solutions on fixed-price or retainer models. Let\'s discuss your specific needs.',
    contact:
        'Reach us at vrtxbuisness@gmail.com or use the "Book a Call" button above.',
    ai: 'We build AI agents that automate workflows, handle decisions, and integrate with your existing systems seamlessly.',
    website:
        'We craft high-performance websites with premium animations and optimized conversions.',
    appointment:
        'Click "Book a Call" in the header or email vrtxbuisness@gmail.com. We respond within 24 hours.',
    schedule:
        'Use the "Book a Call" button or email us at vrtxbuisness@gmail.com to schedule a consultation.',
    book:
        'Ready to start? Click "Book a Call" or email vrtxbuisness@gmail.com.',
    call:
        'Schedule a call via the "Book a Call" button or email vrtxbuisness@gmail.com.',
    hello: 'Hello! How can I assist you today?',
    hey: 'Hey! What would you like to know about TENACIX?',
    default:
        'I can help with:\n\n• Services & capabilities\n• Pricing information\n• Scheduling a consultation\n\nWhat interests you?',
};

function getResponse(msg: string): string {
    const lower = msg.toLowerCase();
    const keywords = Object.keys(responses).filter(k => k !== 'default').sort((a, b) => b.length - a.length);
    for (const key of keywords) {
        const regex = new RegExp(`\\b${key}\\b`, 'i');
        if (regex.test(lower)) return responses[key];
    }
    return responses.default;
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            text: "Welcome to TENACIX. How can I help you today?",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userText = input.trim();

        setMessages((prev) => [...prev, {
            id: prev.length,
            text: userText,
            isUser: true,
            timestamp: new Date(),
        }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [...prev, {
                id: prev.length,
                text: getResponse(userText),
                isUser: false,
                timestamp: new Date(),
            }]);
        }, 800 + Math.random() * 400);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-neutral-800 dark:bg-neutral-200'
                    : 'bg-neutral-900 dark:bg-white'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={22} className="text-white dark:text-black" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageCircle size={22} className="text-white dark:text-black" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden"
                        style={{ height: '520px' }}
                    >
                        {/* Header */}
                        <div className="px-5 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
                                        <Sparkles size={16} className="text-white dark:text-black" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">TENACIX</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                            <span className="text-xs text-neutral-500">Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white dark:bg-neutral-950">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`px-4 py-2.5 rounded-2xl max-w-[85%] ${message.isUser
                                            ? 'bg-neutral-900 dark:bg-white text-white dark:text-black rounded-br-md'
                                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-md'
                                            }`}
                                    >
                                        <p
                                            className="text-[13px] leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: message.text
                                                    .replace(/\n/g, '<br>')
                                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                            }}
                                        />
                                    </div>
                                    <span className="text-[10px] text-neutral-400 mt-1 px-1">
                                        {formatTime(message.timestamp)}
                                    </span>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-start"
                                >
                                    <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-2xl rounded-bl-md">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white/20 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="w-10 h-10 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all"
                                >
                                    <Send size={16} className="text-white dark:text-black" />
                                </button>
                            </div>
                            <p className="text-[10px] text-neutral-400 text-center mt-2">
                                Powered by TENACIX
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
