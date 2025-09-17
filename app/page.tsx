"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pause, Play } from "lucide-react"
import Image from "next/image"

export default function BirthdaySurprise() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showHearts, setShowHearts] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [giftBoxes, setGiftBoxes] = useState([false, false, false])

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleMusic = () => {
    if (!audioRef.current) return

    audioRef.current.volume = 0.5
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => {
        console.log("Autoplay blocked, user interaction required:", err)
      })
    }
    setIsPlaying(!isPlaying)
  }

  const storySteps = [
    {
      title: "Arre Panda! 🐼",
      subtitle: "Kya laga tha main bhool gaya? 😏",
      content: "Plot twist incoming... Taiyaar ho jao! 🎬",
      type: "welcome",
      action: "Chalo shuru karte hain",
      emoji: "🎭",
      meme: "Drake pointing meme style",
      giphy: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGN0enB0emMxdzdxc3BhZDF1ZHJmbHJjdjg5bXIxZXVlbW1xenltZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xdLH51eNWZAHrwy5mf/giphy.gif",
    },
    {
      title: "Meanwhile Me: 🧠",
      subtitle: "Itna socha maine ki offline toh ye mil nahi payegi abhi online kya de sakte hai ?",
      content: "Tumhe laga main bhool gaya? Arre main toh mastermind hun! 😎",
      type: "plot-twist",
      action: "Batao aur kya plan hai",
      emoji: "🧠",
      meme: "Big brain time meme",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjBmMWF5Yms1MmhhNDVvM21ndjZ3MThkY2ZuYnJnY20zNDllem1vbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xU9TT471DTGJq/giphy.gif"
    },
    {
      title: "Our Love Story in Memes 📱",
      subtitle: "April 2025 - When Panda met her Asad",
      content: "Me after meeting you: 'Yeh toh main character energy hai!' ✨",
      type: "love-meme",
      action: "Aur batao hamari story",
      emoji: "😍",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWE5bnp5MGNjYmRhZmhqNjFjNm9nYzh0bG9yNGJqOWE2NjV4bzNmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26FeVAPGfoLvJaFRC/giphy.gif"
    },
    {
      title: "June Gap Period: 😭",
      subtitle: "Jab humne achanak se alag hone ka socha",
      content: "Is Phase mai purra ek mahine ke baad mai neend se jagah aur apni paaro ke pass wapas aagaya 😭. Kyu uss time toh mai bada SIGMA ban rha tha na xD",
      type: "sad-meme",
      action: "Phir kya hua?",
      emoji: "😭",
      meme: "Crying while listening to sad songs",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHVhYjlhdXMxdHlsZGRoMHQ0eXZ4cWhwcGswNTN3MGFsemxrMGs4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IPHgtwOWk7xwta52n2/giphy.gif"
    },
    {
      title: "Our Dates: 🚗",
      subtitle: "Bangla Sahib, Sundar Nursery adventures",
      content: "Sundar nursery ka woh pasine se bhara din geele geele haath so romantic xD",
      type: "date-meme",
      action: "Aur memories dikhao",
      emoji: "📸",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGl6Zm9pbGN4NjBhZDRpYW95cWJmbG1vMTlkejFjajViMHlicnYwcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d47HFwAbGv3OmqfC/giphy.gif"
    },
    {
      title: "July 14 - First Kiss: 💋",
      subtitle: "Buddhu & Panda moment!",
      content: "Us din toh office se jaldi aane ka bhot faida hogya tha xD. Baarish + Tum + ghar waalo ke back to back call 😭 ",
      type: "romantic-meme",
      action: "Phir problem kya aayi?",
      emoji: "💋",
      meme: "Bollywood romantic scene vibes",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODR1Zng0Nm1wM201OXNvcjJtcjB1Z2I4MDl1cjV1bmlhOTVudTI0bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vB6GQ7Ogc6j4I/giphy.gif"
    },
    {
      title: "Jab Mummy Ko Pata Chala: 😱",
      subtitle: "Indian parents discovering relationship",
      content:
        "Mummy: 'Yeh kya chal raha hai?' 👀\nUs: 'Kuch nahi mummy, sirf friends hain' 😅\nClassic Indian household drama! 🏠",
      type: "family-drama",
      action: "Lekin ab dekho...",
      emoji: "😱",
      meme: "Indian parents finding out meme",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmh6ZWk1cGJkdXB5MnN4dmQ2bDlyYXJtcXkwOGxtMmVxMDgweWppMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6BZaFXBVPBtok/giphy.gif"
    },
    {
      title: "Judai Phase 💔😂",
      subtitle: "Mummy ko pata chal gaya... aur shaadi ki baat bhi shuru 😱",
      content:
        "Hamari filmy life ka asli twist! 📽️\nMujhe bhi pata tha yeh time aayega... aur maine bhi tujhe nahi roka 😔.\nLekin sach bolun toh andar se ro raha tha, Ahmad farz ki shayari aur upar se tumhare bheje gaye gaane sun sun ke din guzaar rha tha mai 🎤😭😂",
      type: "separation-drama",
      action: "Agla twist suno",
      emoji: "💔",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTFjZnZsNG95YnhtODVlZmVsa2hnanZjMmEyOXhzcnF4bzJ1Nmx4ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6Q3M4BIK0lX44/giphy.gif"
    },
    {
      title: "Hospital Phase 🏥",
      subtitle: "Marte marte bach gayi..",
      content:
        "Tumne bola tha ‘ab nahi bachungi mai’ 💔😔\nAnd phir message nahi kuch I was like gayi ye lag rha hai\nJab ovaries wala scene suna toh bas ek hi dua thi: 'Bas cancer/tumor wagairah na ho, kuch bhi ho par tu safe rahe' 🙏.\nPaaro, uss din realise hua tum mere liye kitni zyada important ho 💕.\nAur haan... mazaak mazaak mein main bolta rehta hoon, par andar se toh I was very worried 😬",
      type: "hospital-phase",
      action: "Chalo bach gayi ho toh aage badte hai 😛. Aur thoda jhel lo is naa chezz ko",
      emoji: "🏥",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXRiMGMwdmhwajNuMGY2cjB1MnNlZjl1amtsa2kyN283aTdoYjZncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zfRG5WaSnBPd6/giphy.gif"
    },
    {
      title: "Surprise Reveal Loading... ⏳",
      subtitle: "Drumroll please! 🥁",
      content: "Tumne socha tha main bhool gaya?\nAre you ready for the biggest plot twist? 🎬",
      type: "suspense",
      action: "REVEAL KARO! 🎉",
      emoji: "🎬",
      giphy: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3duZnltODRqZzhvZDZ1aTNxemR3ZXJyMXRlNHg2Yjl4ODI2ZXN3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/116seTvbXx07F6/giphy.gif"
    },
    {
      title: "🎉 HAPPY BIRTHDAY PANDA! 🎂",
      subtitle: "Surprise! Main kaise bhool sakta tha! 😘",
      content:
        "Tumhara Asad: Master planner since day 1! 🧠\nHappy Birthday my beautiful Paaro! 🎊\nDistance is just a number, love is infinite! ♾️",
      type: "birthday-reveal",
      action: "Aur bhi hai surprise",
      emoji: "🎂",
      meme: "Surprise reveal meme",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnV3M28zdnAxczZhYXdxcm1oeGE2bGVtNWh3OWVlNmw1Ym15dWNvNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FBB4EHll5vLAk/giphy.gif"
    },
    {
      title: "Forever toh nahi but saath hu tumhare, Asad 💕",
      subtitle: "Meme wala buddu, but dil se romantic! 😘",
      content:
        "Main tumhara meme-lord buddu hun, but tumhare liye main serious bhi ho jata hun! 🥰\nHappy Birthday once again, my Panda! 🐼\nLove you to the moon and back! 🌙",
      type: "final",
      action: "Message bhejo mujhe",
      emoji: "💝",
      meme: "Romantic but funny boyfriend",
      giphy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJ5cTV6dDhyYXc3djU1bWptOGE0Y2l0c3BvbDRpOGF1emZ0YnA5MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9AIzFvMX8cfRJBUzWc/giphy.gif"
    },
  ]

  useEffect(() => {
    if (currentStep >= 8) {
      setShowHearts(true)
    }
    if (currentStep === 11) {
      setShowConfetti(true)
      // Auto-play celebration music on birthday reveal
      setIsPlaying(true)
    }
  }, [currentStep])


  useEffect(() => {
    if(currentStep === 1){
      toggleMusic()
    }
  }, [currentStep])
  
  const nextStep = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const generateFloatingElements = () => {
    const hearts = Array.from({ length: 12 }, (_, i) => (
      <div
        key={`heart-${i}`}
        className="absolute text-pink-400 opacity-70 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 15 + 12}px`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      >
        💖
      </div>
    ))

    const sparkles = Array.from({ length: 15 }, (_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute text-yellow-300 animate-sparkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      >
        ✨
      </div>
    ))

    return [...hearts, ...sparkles]
  }

  const generateConfetti = () => {
    return Array.from({ length: 30 }, (_, i) => (
      <div
        key={`confetti-${i}`}
        className="absolute animate-confetti"
        style={{
          left: `${Math.random() * 100}%`,
          top: "-10px",
          animationDelay: `${Math.random() * 2}s`,
          fontSize: "20px",
        }}
      >
        {["🎉", "🎊", "💖", "🌟", "💕"][Math.floor(Math.random() * 5)]}
      </div>
    ))
  }

  const currentStepData = storySteps[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-peach-100 relative overflow-hidden">
      {showHearts && <div className="fixed inset-0 pointer-events-none z-0">{generateFloatingElements()}</div>}

      {showConfetti && <div className="fixed inset-0 pointer-events-none z-0">{generateConfetti()}</div>}

      <Button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 rounded-full w-12 h-12 p-0 bg-pink-500 hover:bg-pink-600"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </Button>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src="/audio.mp3" type="audio/mpeg" defaultValue={20}/>
      </audio>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-lg mx-auto bg-white/90 backdrop-blur-sm border-2 border-pink-200 shadow-2xl rounded-3xl">
          <CardContent className="p-8 text-center">
            <div className="fade-in-up">
              {/* Progress dots */}
              <div className="flex justify-center mb-6">
                {storySteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 transition-all duration-500 ${index <= currentStep ? "bg-pink-500 scale-125" : "bg-pink-200"
                      }`}
                  />
                ))}
              </div>

              <div className="text-7xl mb-6 animate-heartbeat relative">{currentStepData.emoji}</div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2 text-balance">{currentStepData.title}</h1>
              {currentStepData.subtitle && (
                <h2 className="text-xl font-semibold text-pink-600 mb-4 text-balance">{currentStepData.subtitle}</h2>
              )}

              <div className="mb-6">
                {currentStepData.giphy && (
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={currentStepData.giphy}
                      alt="funny gif"
                      className="rounded-xl shadow-lg w-full max-w-sm object-cover"
                      width={150}
                      height={150}
                      objectFit="cover"
                    />
                  </div>
                )}
                {currentStepData.type === "meme-setup" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4 border-l-4 border-pink-500">
                    <p className="text-sm text-gray-600 italic">*Disappointed girlfriend meme template*</p>
                  </div>
                )}

                {currentStepData.type === "plot-twist" && (
                  <div className="bg-blue-100 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <p className="text-sm text-blue-600 italic">*Big brain time activated* 🧠</p>
                  </div>
                )}

                {currentStepData.type === "family-drama" && (
                  <div className="bg-yellow-100 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
                    <p className="text-sm text-yellow-600 italic">*Classic Indian household drama intensifies*</p>
                  </div>
                )}

                {currentStepData.type === "ldr-meme" && (
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="text-2xl">📱</div>
                    <div className="text-2xl">💕</div>
                    <div className="text-2xl">📱</div>
                  </div>
                )}

                {currentStepData.type === "birthday-reveal" && (
                  <div className="mb-6">
                    <div className="text-6xl mb-4 animate-pulse">🎂🎉🎊</div>
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-green-600 italic">*Plot twist successful* ✅</p>
                    </div>
                  </div>
                )}

                <p className="text-gray-700 leading-relaxed text-pretty text-lg whitespace-pre-line">
                  {currentStepData.content}
                </p>
              </div>

              {currentStep < storySteps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
                  style={{ backgroundColor: "#db2777", color: "#ffffff" }}
                >
                  {currentStepData.action} 💕
                </button>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      window.open("https://wa.me/919310590940", "_blank")
                    }
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
                    style={{ backgroundColor: "#db2777", color: "#ffffff" }}
                  >
                    WhatsApp pe message kar! 💌
                  </button>

                  <button
                    onClick={() => {
                      setCurrentStep(0)
                      setShowHearts(false)
                      setShowConfetti(false)
                      setGiftBoxes([false, false, false])
                    }}
                    className="w-full border-2 border-pink-600 text-pink-700 bg-white hover:bg-pink-50 rounded-2xl py-3 font-semibold"
                    style={{ backgroundColor: "#ffffff", color: "#be185d", borderColor: "#db2777" }}
                  >
                    Dobara dekho! ✨
                  </button>
                </div>
              )}

              {currentStep >= 9 && (
                <div className="mt-8 pt-6 border-t border-pink-200">
                  <p className="text-sm text-gray-500 italic">Meme-lord boyfriend se pyaar ke saath 🐼💕</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {isPlaying && (
        <audio autoPlay loop className="hidden">
          <source src="/placeholder.mp3?query=soft romantic love song for birthday surprise" type="audio/mpeg" />
        </audio>
      )}
    </div>
  )
}
