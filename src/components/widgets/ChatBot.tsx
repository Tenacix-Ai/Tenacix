'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
}

const responses: Record<string, string> = {
    hello: 'Hello! Welcome to VRTX. How can I assist you today?',
    hi: 'Hi there! 👋 What would you like to know about VRTX?',
    services:
        'We offer three main services:\n\n🎨 **Digital Product** - Scalable design systems & high-fidelity interfaces\n\n✨ **Brand Identity** - Visual narratives that make your brand inevitable\n\n🤖 **AI Agents** - Autonomous workflows that scale your operations 24/7',
    pricing:
        'Our pricing depends on project scope. For web development, projects typically start at $5,000. For AI agents, we offer both fixed-price and retainer models. Book a call to discuss your specific needs!',
    contact:
        'You can reach us at vrtxbuisness@gmail.com or click the "Book a Call" button on our website!',
    ai: 'We build custom AI agents that automate complex workflows, handle decision-making, and scale your operations around the clock. They can be integrated with your existing tools and processes.',
    website:
        'We design high-performance websites with premium animations, modern design patterns, and optimized performance. Every site we build is crafted to convert visitors into customers.',
    default:
        'Thanks for your message! I can help you with:\n\n• Our services (web, branding, AI)\n• Pricing information\n• How to get started\n\nOr feel free to book a call with our team!',
};

function getResponse(msg: string): string {
    const lower = msg.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
        if (key !== 'default' && lower.includes(key)) return value;
    }
    return responses.default;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            text: "Hi! 👋 I'm the VRTX AI assistant. How can I help you today? I can tell you about our services, pricing, or help you get started!",
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

        const userMessage: Message = {
            id: messages.length,
            text: input.trim(),
            isUser: true,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botMessage: Message = {
                id: messages.length + 1,
                text: getResponse(input),
                isUser: false,
            };
            setIsTyping(false);
            setMessages((prev) => [...prev, botMessage]);
        }, 1000 + Math.random() * 500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white"
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
                        className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">VRTX AI Assistant</h3>
                                    <p className="text-xs text-white/70">Always here to help</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex gap-2 ${message.isUser ? 'justify-end' : ''}`}
                                >
                                    {!message.isUser && (
                                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex-shrink-0 flex items-center justify-center">
                                            <Bot size={14} className="text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                    )}
                                    <div
                                        className={`p-3 rounded-2xl max-w-[80%] ${message.isUser
                                                ? 'bg-indigo-600 text-white rounded-tr-none'
                                                : 'bg-white dark:bg-gray-700 shadow-sm rounded-tl-none'
                                            }`}
                                    >
                                        <p
                                            className={`text-sm ${message.isUser ? '' : 'text-gray-700 dark:text-gray-200'}`}
                                            dangerouslySetInnerHTML={{
                                                __html: message.text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex-shrink-0 flex items-center justify-center">
                                        <Bot size={14} className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm">
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
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    onClick={handleSend}
                                    className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white transition-colors"
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
