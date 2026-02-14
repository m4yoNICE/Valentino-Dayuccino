import { useState, useMemo } from "react";
import { GuiltTrippingModal } from "../../components/GuiltTrippingModal";
import { useTeleport } from "../../contexts/TeleportContext";
// Utility: shuffle array
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function NotesContent() {
  // State
  const [showModal, setShowModal] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Letters data
  const rawLetters = [
    "I love you",
    "You matter",
    "You are strong",
    "You are brave",
    "You are beautiful",
    "I love your hair, I love how it curls in a good way",
    "You are very cute my cutiepatootie",

    [
      "You're just like an angel.",
      "Your skin makes me cry.",
      "You float like a feather in a beautiful world.",
      "I wish I was special.",
      "You're so fuckin' special.",
      "Creep - Radiohead",
    ],

    `"Ikaw ang kalawakan, ilang, di pakakawalan" – Kalawakan by Juan Karlos`,
    `"Gagawa ako ng kanta na ikaw ang pamagat" – Lia by Zild`,
    `"I want you to be mine again, baby" – Again by Fetty Wap`,
    `"I blinked and suddenly I had a valentine" – Valentine by Laufey`,
    `"I feel like with you, I'm going places" – Anything You Want by Reality Club`,
    `"How could such a creature survive in such a habitat?" – Secret Door by Arctic Monkeys`,

    [
      "If the world was ending, I'd wanna be next to you.",
      "If the party was over and our time on Earth was through.",
      "I'd wanna hold you just for a while and die with a smile.",
      "If the world was ending, I'd wanna be next to you.",
      "- Die With A Smile by Lady Gaga & Bruno Mars",
    ],

    "Rizz",
    ["Goodnight My Loveeee", "mwamwaaa", "I love youuuuuu"],
    "bai",
    "baaaaaaaaaaaiiiiiii",
    [
      "Love maliligo lng ako ng dagat ahh? 🏖️🐠",
      "Love nalunod ako!! 💀🌊",
      "Love kinain ako sa shark loveee 🦈💘",
      "hehe jk lng its a prank!! 😜🎣😂",
    ],

    // ... other text blocks omitted for brevity
  ];

  // Flatten and shuffle letters once
  const letters = useMemo(() => {
    const shuffled = shuffle(rawLetters);
    return shuffled.flatMap((note) => (Array.isArray(note) ? note : [note]));
  }, []);

  // Handlers for flipping notes
  const handlePrev = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipping(false);
    }, 100);
  };

  const handleNext = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipping(false);
    }, 100);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/melody.jpg')",
      }}
    >
      {/* Guilt tripping modal */}

      {/* Note card */}
      <div className="perspective-[1000px] w-[300px] min-h-[300px]">
        <div
          className={`flex flex-col justify-start rounded-2xl shadow-[4px_4px_10px_rgba(255,192,203,0.2)] p-5 m-2.5 w-[300px] min-h-[300px] bg-[#fff0f5] border border-[#ffc0cb] transition-transform duration-200`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transform: isFlipping ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div className="p-2.5">
            <h2 className="font-serif m-0 mb-2.5 text-[#d36c6c] text-xl">
              Note {currentIndex + 1}
            </h2>
            <p className="font-serif text-[#7a4e4e] text-[22px] whitespace-pre-wrap break-words">
              {letters[currentIndex]}
            </p>
          </div>

          <div className="flex justify-center gap-2.5 pt-2.5 mt-auto">
            <button
              className="text-white bg-[#ff69b4] py-2 px-4 rounded-lg font-serif hover:bg-[#ff85c1] disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
              onClick={handlePrev}
            >
              Back
            </button>
            <button
              className="text-white bg-[#ff69b4] py-2 px-4 rounded-lg font-serif hover:bg-[#ff85c1] disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentIndex === letters.length - 1}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Notes = () => {
  const { totalTeleports } = useTeleport();
  const [accept, setAccept] = useState(false);
  const [showModal, setShowModal] = useState(true); // modal shows immediately

  return (
    <div className="min-h-screen relative">
      {/* Show modal first */}
      {showModal && totalTeleports !== 0 && (
        <GuiltTrippingModal onClose={() => setShowModal(false)} />
      )}
      {!accept ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200 text-white text-center p-4 text-2xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)]">
          <h1 className="text-4xl font-bold mb-4">Helloooooo</h1>
          <h2 className="text-2xl mb-6">I wrote these for youuu</h2>
          <button
            onClick={() => setAccept(true)}
            className="bg-pink-500 text-white px-8 py-3 rounded-lg text-xl hover:bg-pink-600 transition-colors"
          >
            Accept Me !!
          </button>
        </div>
      ) : (
        <NotesContent />
      )}
    </div>
  );
};
