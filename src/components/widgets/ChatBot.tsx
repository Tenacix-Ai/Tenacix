'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
}

const responses: Record<string, string> = {
    services:
        'We offer three main services:\n\n🎨 **Digital Product** - Scalable design systems & high-fidelity interfaces\n\n✨ **Brand Identity** - Visual narratives that make your brand inevitable\n\n🤖 **AI Agents** - Autonomous workflows that scale your operations 24/7',
    pricing:
        'Our pricing depends on project scope. For web development, projects typically start at $5,000. For AI agents, we offer both fixed-price and retainer models. Book a call to discuss your specific needs!',
    contact:
        'You can reach us at vrtxbuisness@gmail.com or click the "Book a Call" button on our website!',
    ai: 'We build custom AI agents that automate complex workflows, handle decision-making, and scale your operations around the clock. They can be integrated with your existing tools and processes.',
    website:
        'We design high-performance websites with premium animations, modern design patterns, and optimized performance. Every site we build is crafted to convert visitors into customers.',
    appointment:
        'Great! To schedule a call with our team, click the "Book a Call" button in the hero section or send us an email at vrtxbuisness@gmail.com. We\'ll get back to you within 24 hours!',
    schedule:
        'To schedule a consultation, you can either click the "Book a Call" button on our website or email us at vrtxbuisness@gmail.com. We\'d love to discuss your project!',
    book:
        'Ready to book a call? Click the "Book a Call" button in the header or hero section, or reach out to us at vrtxbuisness@gmail.com!',
    call:
        'Want to schedule a call? Use the "Book a Call" button on our website or email us at vrtxbuisness@gmail.com. We respond within 24 hours!',
    hello: 'Hello! Welcome to VRTXZ. How can I assist you today?',
    hey: 'Hey there! 👋 What would you like to know about VRTXZ?',
    default:
        'Thanks for your message! I can help you with:\n\n• Our services (web, branding, AI)\n• Pricing information\n• Scheduling a call\n• How to get started\n\nOr feel free to book a call with our team!',
};

function getResponse(msg: string): string {
    const lower = msg.toLowerCase();
    // Check each keyword - longer keywords first to avoid partial matches
    const keywords = Object.keys(responses).filter(k => k !== 'default').sort((a, b) => b.length - a.length);
    for (const key of keywords) {
        // Use word boundary check to avoid partial matches like "hi" in "this"
        const regex = new RegExp(`\\b${key}\\b`, 'i');
        if (regex.test(lower)) return responses[key];
    }
    return responses.default;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            text: "Hi! 👋 I'm the VRTXZ AI assistant. How can I help you today? I can tell you about our services, pricing, or help you get started!",
            isUser: false,
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
        }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [...prev, {
                id: prev.length,
                text: getResponse(userText),
                isUser: false,
            }]);
        }, 1000 + Math.random() * 500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-zinc-900 dark:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white dark:text-black border border-white/10 dark:border-black/10"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-zinc-900 dark:bg-white p-4 text-white dark:text-black border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 dark:bg-black/10 rounded-full flex items-center justify-center font-bold text-sm">
                                    V
                                </div>
                                <div>
                                    <h3 className="font-semibold">VRTXZ Assistant</h3>
                                    <p className="text-xs opacity-70">Always here to help</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-zinc-900/50">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`p-3 rounded-2xl max-w-[85%] ${message.isUser
                                            ? 'bg-zinc-900 dark:bg-white text-white dark:text-black rounded-tr-sm'
                                            : 'bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-white/5 rounded-tl-sm'
                                            }`}
                                    >
                                        <p
                                            className={`text-sm ${message.isUser ? '' : 'text-gray-700 dark:text-gray-300'}`}
                                            dangerouslySetInnerHTML={{
                                                __html: message.text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 dark:border-white/5">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-full text-sm focus:outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-500/20 dark:bg-zinc-900 dark:text-white transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 bg-zinc-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-200 rounded-full flex items-center justify-center text-white dark:text-black transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
