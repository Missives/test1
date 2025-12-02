import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'ai'>('form');
  
  // AI State
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: '你好！我是 Lumina AI。你可以问我关于设计流程、档期或技术栈的问题。' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));
    
    // Add current user message to history for the call
    history.push({ role: 'user', parts: [{ text: userMsg.text }]});

    const responseText = await sendMessageToGemini(userMsg.text, history);

    const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <section className="py-24 max-w-5xl mx-auto px-6" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">开启合作</h2>
        <p className="text-gray-400">有项目想法？使用表单或咨询我的 AI 助手。</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-neutral-900 p-1 rounded-full flex gap-2">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'form' ? 'bg-neon-purple text-white shadow-lg shadow-neon-purple/25' : 'text-gray-400 hover:text-white'
            }`}
          >
            传统表单
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'ai' ? 'bg-neon-cyan text-black shadow-lg shadow-neon-cyan/25' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles size={14} /> AI 对话
          </button>
        </div>
      </div>

      <div className="bg-neutral-900/50 border border-gray-800 rounded-3xl overflow-hidden min-h-[500px] relative">
        {/* Abstract shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />
        
        {activeTab === 'form' ? (
          <div className="p-8 md:p-12 relative z-10">
            {formStatus === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20">
                 <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                   <Send />
                 </div>
                 <h3 className="text-2xl text-white font-bold mb-2">消息已发送！</h3>
                 <p className="text-gray-400">我会在 24 小时内回复您。</p>
                 <button onClick={() => setFormStatus('idle')} className="mt-6 text-neon-cyan underline">发送另一条</button>
               </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }} className="space-y-6 max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase tracking-widest">姓名</label>
                    <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="张三" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase tracking-widest">邮箱</label>
                    <input type="email" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="zhangsan@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-widest">留言</label>
                  <textarea rows={5} className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="请告诉我关于您的项目..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neon-purple hover:text-white transition-colors uppercase tracking-widest text-sm">
                  发送咨询
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-[500px] relative z-10">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-neon-cyan text-black rounded-tr-none' 
                      : 'bg-gray-800 text-gray-200 rounded-tl-none'
                  }`}>
                    <div className="flex items-center gap-2 mb-1 opacity-50 text-xs font-bold uppercase">
                      {msg.role === 'user' ? <User size={12}/> : <Bot size={12}/>}
                      {msg.role === 'user' ? '您' : 'Lumina AI'}
                    </div>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-gray-800 text-gray-400 p-4 rounded-2xl rounded-tl-none text-xs animate-pulse">
                     AI 正在思考...
                   </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            
            <form onSubmit={handleAiSubmit} className="p-4 bg-black/40 border-t border-gray-800 flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="询问我的技能..."
                className="flex-1 bg-gray-900 border-none rounded-full px-6 py-3 text-white focus:ring-1 focus:ring-neon-cyan focus:outline-none"
              />
              <button 
                type="submit" 
                disabled={isTyping || !input.trim()}
                className="bg-neon-cyan text-black p-3 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;