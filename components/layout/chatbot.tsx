"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { X, PaperPlaneRight, Robot, User } from "@phosphor-icons/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sendMessageToChatbot } from "@/actions/chatbot";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  isError?: boolean;
}

const suggestions = [
  "Bagaimana cara daftar WiFi JMCNET?",
  "Apakah ada batasan kuota (FUP)?",
  "Berapa harga paket internet WiFi?",
  "Bagaimana jika terjadi gangguan internet?",
  "Apakah sewa modem gratis?",
];

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Halo! 👋 Saya asisten virtual JMCNET. Ada yang bisa saya bantu mengenai paket internet cepat fiber optic, cakupan wilayah, pendaftaran, atau bantuan teknis?",
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdCounterRef = useRef(2);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  // Sembunyikan chatbot di halaman admin
  if (pathname && pathname.startsWith("/admin")) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;
    
    setInput("");
    const userMsgId = `msg-${messageIdCounterRef.current++}`;
    setMessages((prev) => [...prev, { id: userMsgId, role: "user", content: text }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToChatbot(text);
      const botMsgId = `msg-${messageIdCounterRef.current++}`;
      setMessages((prev) => [
        ...prev,
        { id: botMsgId, role: "bot", content: response.answer },
      ]);
    } catch (error: unknown) {
      console.error("Chatbot Error:", error);
      const errorMsgId = `msg-${messageIdCounterRef.current++}`;
      setMessages((prev) => [
        ...prev,
        { 
          id: errorMsgId, 
          role: "bot", 
          content: "Mohon maaf, terjadi kendala koneksi ke server asisten virtual kami. Silakan coba sesaat lagi, atau hubungi customer service kami melalui WhatsApp.",
          isError: true 
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* Floating Tag (Sleek tech tag on the right side) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            whileHover={{ x: -6 }}
            className="fixed top-1/2 right-0 -translate-y-1/2 bg-slate-900 border-y border-l border-slate-700/50 text-slate-100 py-6 px-3 rounded-l-2xl shadow-2xl flex flex-col items-center gap-3 cursor-pointer z-50 group hover:bg-slate-800 transition-all duration-300"
            aria-label="Tanya Asisten JMCNET"
          >
            {/* pulse glow indicator */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-brand-light rounded-l-2xl pointer-events-none"
            />
            <Robot size={20} weight="fill" className="text-brand-light relative z-10 animate-pulse" />
            <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.25em] font-black uppercase select-none pb-1 relative z-10 text-slate-300 group-hover:text-white transition-colors">
              Tanya JMCNET
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop for Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Virtual Assistant Chatbot Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-white border-l border-slate-200 shadow-2xl z-50 flex flex-col"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            {/* Header Panel */}
            <div className="p-6 pt-8 border-b border-slate-100 bg-slate-50 relative overflow-hidden shrink-0">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-light/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-8 right-6 w-3 h-3 bg-brand-dark/20 rounded-full blur-xs pointer-events-none" />

              <div className="flex items-start justify-between relative z-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs shrink-0 text-brand-dark">
                    <Robot size={24} weight="fill" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] font-extrabold text-brand-light uppercase block mb-1">
                      Asisten Virtual AI
                    </span>
                    <h3 className="font-extrabold text-lg tracking-tight text-slate-900 leading-none">
                      CS Virtual JMCNET
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <p className="text-[11px] text-slate-500 font-semibold">Aktif &amp; Siap membantu Anda</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-slate-200 border border-transparent rounded-full transition-all text-slate-500 hover:text-slate-800 cursor-pointer duration-300"
                  title="Tutup Chat"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 space-y-6 bg-slate-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "ml-auto flex-row-reverse max-w-[85%]" : "max-w-[92%]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-xs border
                    ${msg.role === "user" 
                      ? "bg-brand-dark border-brand-dark text-white" 
                      : "bg-white border-slate-200 text-brand-dark"}
                  `}>
                    {msg.role === "user" ? <User size={14} weight="fill" /> : <Robot size={14} weight="fill" />}
                  </div>

                  <div className={`flex flex-col gap-1 min-w-0 ${msg.role === "user" ? "items-end" : "items-start flex-1"}`}>
                    <div className={`px-4 py-3 rounded-2xl leading-relaxed relative w-full overflow-hidden shadow-xs text-sm
                      ${msg.role === "user"
                        ? "bg-brand-dark text-white rounded-tr-none"
                        : msg.isError
                          ? "bg-red-50 text-red-600 border border-red-100 rounded-tl-none"
                          : "bg-white border border-slate-200 text-slate-800 rounded-tl-none"
                      }
                    `}>
                      {msg.role === "user" ? (
                        <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                      ) : (
                        <div className="markdown-prose wrap-break-word space-y-3 text-slate-800">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({node, ...props}) => { void node; return <p className="mb-3 last:mb-0 leading-relaxed text-slate-700" {...props} />; },
                              a: ({node, ...props}) => { void node; return <a className="text-brand-light underline hover:text-brand-dark font-semibold transition-colors duration-200" target="_blank" rel="noopener noreferrer" {...props} />; },
                              ul: ({node, ...props}) => { void node; return <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />; },
                              ol: ({node, ...props}) => { void node; return <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />; },
                              li: ({node, ...props}) => { void node; return <li className="mb-0.5 leading-relaxed" {...props} />; },
                              h3: ({node, ...props}) => { void node; return <h3 className="font-bold text-slate-900 text-base mb-2 mt-3 border-b border-slate-100 pb-1" {...props} />; },
                              h4: ({node, ...props}) => { void node; return <h4 className="font-bold text-slate-900 text-sm mb-1 mt-2" {...props} />; },
                              strong: ({node, ...props}) => { void node; return <strong className="font-bold text-slate-900" {...props} />; },
                              table: ({node, ...props}) => { void node; return <div className="overflow-x-auto my-3 rounded-xl border border-slate-200 shadow-xs"><table className="w-full text-left border-collapse text-xs" {...props} /></div>; },
                              thead: ({node, ...props}) => { void node; return <thead className="bg-slate-50 text-slate-700 font-semibold" {...props} />; },
                              tbody: ({node, ...props}) => { void node; return <tbody className="divide-y divide-slate-100" {...props} />; },
                              tr: ({node, ...props}) => { void node; return <tr className="hover:bg-slate-50/50 transition-colors" {...props} />; },
                              th: ({node, ...props}) => { void node; return <th className="p-2.5 border-b border-slate-200 font-bold" {...props} />; },
                              td: ({node, ...props}) => { void node; return <td className="p-2.5 border-b border-slate-100 align-top leading-relaxed" {...props} />; }
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-slate-400 px-1 font-semibold uppercase tracking-wider">
                      {msg.role === "user" ? "Anda" : "Asisten JMCNET"}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-brand-dark flex items-center justify-center shrink-0 mt-1 shadow-xs">
                    <Robot size={14} weight="fill" />
                  </div>
                  <div className="bg-white border border-slate-200 shadow-xs px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-brand-light rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-brand-light rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-brand-light rounded-full animate-bounce" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium ml-1">Menulis jawaban...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Suggestions Panel */}
            {messages.length === 1 && !isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="px-5 pb-5 bg-slate-50 border-t border-slate-100 pt-4"
              >
                <p className="text-[10px] font-bold text-slate-400 mb-2.5 uppercase tracking-wider ml-1">Pertanyaan Populer:</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(suggestion)}
                      className="text-xs text-left bg-white border border-slate-200 text-slate-700 hover:border-brand-light hover:text-brand-dark hover:bg-sky-50/30 px-3.5 py-2 rounded-full transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer font-medium"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Form Input Control */}
            <div className="p-4 bg-white border-t border-slate-100 mt-auto shrink-0 shadow-lg">
              <div className="flex items-center gap-2 bg-slate-50 rounded-full p-1.5 pl-4.5 border border-slate-200 focus-within:border-brand-light focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-light/10 transition-all duration-300">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ketik pertanyaan Anda di sini..."
                  className="flex-1 bg-transparent text-sm text-slate-800 focus:outline-none placeholder:text-slate-400 py-1.5 min-w-0"
                  disabled={isLoading}
                  autoComplete="off"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isLoading}
                  className="w-8.5 h-8.5 bg-brand-dark hover:bg-brand-dark/95 text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-20 disabled:scale-95 transition-all shadow-sm active:scale-95 cursor-pointer"
                  title="Kirim Pesan"
                >
                  <PaperPlaneRight size={14} weight="bold" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-400 mt-3.5 tracking-wider uppercase font-bold select-none">
                <span className="w-1 h-1 rounded-full bg-brand-light" />
                <span>PT Jaringan Multimedia Cirebon</span>
                <span className="w-1 h-1 rounded-full bg-brand-light" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
