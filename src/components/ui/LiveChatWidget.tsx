import React, { useState, useEffect, useRef } from "react"
import {
  MessageSquare,
  X,
  Send,
  Paperclip,
  Image as ImageIcon,
  User,
  Wrench,
  ShieldCheck,
  Minimize2,
  Maximize2
} from "lucide-react"

export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  senderRole: "automobiliste" | "garagiste" | "admin"
  avatar?: string
  text: string
  timestamp: string
  isRead?: boolean
  image?: string
}

export interface ChatContact {
  id: string
  name: string
  role: "automobiliste" | "garagiste" | "admin"
  avatar?: string
  status: "online" | "offline"
  lastMessage?: string
  unreadCount?: number
  breakdownTopic?: string
}

interface LiveChatProps {
  currentUserId: string
  currentUserName: string
  currentUserRole: "automobiliste" | "garagiste" | "admin"
  initialContact?: ChatContact
  isOpenDefault?: boolean
  onClose?: () => void
}

export const defaultContacts: ChatContact[] = [
  {
    id: "gar-1",
    name: "Garage Auto Express (Marc)",
    role: "garagiste",
    status: "online",
    lastMessage: "J'arrive avec la dépanneuse dans 10min !",
    unreadCount: 2,
    breakdownTopic: "Panne Moteur - Toyota Yaris"
  },
  {
    id: "auto-1",
    name: "Sophie Martin",
    role: "automobiliste",
    status: "online",
    lastMessage: "Pouvez-vous vérifier mes freins aussi ?",
    unreadCount: 1,
    breakdownTopic: "Crevaison autoroute A6"
  },
  {
    id: "adm-1",
    name: "Support Technique Autoguide",
    role: "admin",
    status: "online",
    lastMessage: "Comment pouvons-nous vous aider aujourd'hui ?",
    unreadCount: 0
  }
]

export const initialChatMessages: Record<string, ChatMessage[]> = {
  "gar-1": [
    {
      id: "m1",
      senderId: "auto-1",
      senderName: "Vous",
      senderRole: "automobiliste",
      text: "Bonjour, mon véhicule s'est arrêté d'un coup sur la N104.",
      timestamp: "14:20",
      isRead: true
    },
    {
      id: "m2",
      senderId: "gar-1",
      senderName: "Garage Auto Express",
      senderRole: "garagiste",
      text: "Bonjour ! Pas d'inquiétude. Avez-vous mis vos feux de détresse ?",
      timestamp: "14:21",
      isRead: true
    },
    {
      id: "m3",
      senderId: "gar-1",
      senderName: "Garage Auto Express",
      senderRole: "garagiste",
      text: "J'arrive avec la dépanneuse dans 10min !",
      timestamp: "14:25",
      isRead: false
    }
  ],
  "auto-1": [
    {
      id: "m4",
      senderId: "auto-1",
      senderName: "Sophie Martin",
      senderRole: "automobiliste",
      text: "Bonjour, mon véhicule fait un bruit étrange au freinage.",
      timestamp: "11:05",
      isRead: true
    },
    {
      id: "m5",
      senderId: "gar-1",
      senderName: "Vous",
      senderRole: "garagiste",
      text: "Bonjour Sophie, nous pouvons l'inspecter cet après-midi.",
      timestamp: "11:10",
      isRead: true
    },
    {
      id: "m6",
      senderId: "auto-1",
      senderName: "Sophie Martin",
      senderRole: "automobiliste",
      text: "Pouvez-vous vérifier mes freins aussi ?",
      timestamp: "11:12",
      isRead: false
    }
  ],
  "adm-1": [
    {
      id: "m7",
      senderId: "adm-1",
      senderName: "Support Autoguide",
      senderRole: "admin",
      text: "Bienvenue sur le Support Autoguide 🛠️. Comment pouvons-nous vous aider aujourd'hui ?",
      timestamp: "09:00",
      isRead: true
    }
  ]
}

export function LiveChatWidget({
  currentUserId,
  currentUserName,
  currentUserRole,
  initialContact,
  isOpenDefault = false,
  onClose
}: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault)
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeContact, setActiveContact] = useState<ChatContact>(
    initialContact || (currentUserRole === "garagiste" ? defaultContacts[1] : defaultContacts[0])
  )
  const [contacts, setContacts] = useState<ChatContact[]>(defaultContacts)
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(initialChatMessages)
  const [inputText, setInputText] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const activeMessages = messages[activeContact.id] || []
  const totalUnread = contacts.reduce((sum, c) => sum + (c.unreadCount || 0), 0)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [activeMessages, isOpen])

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!inputText.trim() && !selectedImage) return

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      senderId: currentUserId,
      senderName: currentUserName,
      senderRole: currentUserRole,
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isRead: true,
      image: selectedImage || undefined
    }

    setMessages((prev) => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMsg]
    }))

    setContacts((prev) =>
      prev.map((c) =>
        c.id === activeContact.id
          ? { ...c, lastMessage: inputText || "Photo envoyée", unreadCount: 0 }
          : c
      )
    )

    setInputText("")
    setSelectedImage(null)

    // Simulation de réponse automatique
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        senderId: activeContact.id,
        senderName: activeContact.name,
        senderRole: activeContact.role,
        text: "Bien reçu ! Je mets à jour l'intervention tout de suite. 👍",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isRead: false
      }

      setMessages((prev) => ({
        ...prev,
        [activeContact.id]: [...(prev[activeContact.id] || []), replyMsg]
      }))
    }, 1500)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "garagiste":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
            <Wrench className="h-3 w-3" /> Garagiste
          </span>
        )
      case "admin":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
            <ShieldCheck className="h-3 w-3" /> Support
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            <User className="h-3 w-3" /> Automobiliste
          </span>
        )
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-4 font-medium text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25 active:scale-95"
        >
          <div className="relative">
            <MessageSquare className="h-6 w-6 transition-transform group-hover:rotate-12" />
            {totalUnread > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white ring-2 ring-white animate-pulse">
                {totalUnread}
              </span>
            )}
          </div>
          <span className="hidden pr-2 font-semibold text-sm sm:inline">
            Direct Chat {totalUnread > 0 && `(${totalUnread})`}
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-300 ${
            isExpanded ? "h-[650px] w-[90vw] max-w-4xl" : "h-[540px] w-[380px] sm:w-[420px]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 font-bold text-white shadow-md">
                  {activeContact.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-slate-100 leading-tight">{activeContact.name}</h3>
                  {getRoleBadge(activeContact.role)}
                </div>
                {activeContact.breakdownTopic && (
                  <p className="text-[11px] text-indigo-200/80 truncate max-w-[180px]">
                    📍 {activeContact.breakdownTopic}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-300">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-lg p-1.5 hover:bg-white/10 hover:text-white transition-colors"
                title={isExpanded ? "Réduire" : "Agrandir"}
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>

              <button
                onClick={() => {
                  setIsOpen(false)
                  if (onClose) onClose()
                }}
                className="rounded-lg p-1.5 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Contact Bar if Expanded */}
          {isExpanded && (
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs overflow-x-auto">
              <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">Conversations:</span>
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setActiveContact(contact)
                    setContacts((prev) =>
                      prev.map((c) => (c.id === contact.id ? { ...c, unreadCount: 0 } : c))
                    )
                  }}
                  className={`flex items-center gap-2 rounded-xl px-3 py-1.5 font-medium transition-all ${
                    activeContact.id === contact.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span>{contact.name}</span>
                  {contact.unreadCount ? (
                    <span className="rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] text-white">
                      {contact.unreadCount}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          )}

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50/50 to-white">
            {activeMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 p-6">
                <MessageSquare className="h-10 w-10 text-slate-300 mb-2 stroke-[1.5]" />
                <p className="text-sm font-medium">Démarrez une conversation en direct</p>
                <p className="text-xs text-slate-400 mt-1">Posez une question ou envoyez les détails de votre véhicule</p>
              </div>
            ) : (
              activeMessages.map((msg) => {
                const isMe = msg.senderId === currentUserId
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"} space-y-1`}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 px-1">
                      <span className="font-medium text-slate-600">{msg.senderName}</span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div
                      className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm shadow-sm transition-all ${
                        isMe
                          ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-br-none"
                          : "bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/60"
                      }`}
                    >
                      {msg.image && (
                        <img
                          src={msg.image}
                          alt="Pièce jointe"
                          className="mb-2 max-h-48 rounded-xl border border-white/20 object-cover"
                        />
                      )}
                      {msg.text && <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>}
                    </div>
                  </div>
                )
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Image Preview before sending */}
          {selectedImage && (
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ImageIcon className="h-4 w-4 text-indigo-500" />
                <span className="font-medium">Image prête à envoyer</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-slate-400 hover:text-rose-500 text-xs"
              >
                Annuler
              </button>
            </div>
          )}

          {/* Footer Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
          >
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl p-2.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              title="Ajouter une photo de la panne"
            >
              <Paperclip className="h-5 w-5" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 rounded-xl bg-slate-100 px-4 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/30 border border-transparent focus:border-indigo-500"
            />

            <button
              type="submit"
              disabled={!inputText.trim() && !selectedImage}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
