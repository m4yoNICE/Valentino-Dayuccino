import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTeleport } from "../contexts/TeleportContext";

export const WillValentine = () => {
  const navigate = useNavigate();
  const { incrementTeleports } = useTeleport();
  const [teleCount, setTeleCount] = useState(0);
  const [noPos, setNoPos] = useState(null);
  const [yesScale, setYesScale] = useState(1);
  const containerRef = useRef(null);
  const noButtonRef = useRef(null);
  const noMessages = [
    { at: 4, text: "b-b-b-bai???? :((((((" },
    { at: 10, text: "🥺🥺what are you doing?🥺" },
    { at: 15, text: "Do you really wanna press no that badly?😞😞😞😞😞" },
    { at: 21, text: "baii..😭..😭..😭.😭😭😭" },
  ];

  const handleNo = () => {
    const newCount = teleCount + 1;
    setTeleCount(newCount);
    incrementTeleports();

    const container = containerRef.current;
    const button = noButtonRef.current;
    if (!container || !button) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    setNoPos({ top: `${randomY}px`, left: `${randomX}px` });

    if (newCount > 26) {
      setYesScale((prev) => prev + 0.15);
    }
  };

  const handleYes = () => {
    navigate("/message"); // or wherever you want to send them
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4 relative overflow-hidden">
      <p className="text-3xl mb-6">Do you love me?</p>

      {noMessages.map(
        (msg, idx) =>
          teleCount >= msg.at && (
            <div
              key={idx}
              className="fixed text-black text-2xl p-5 rounded-lg z-50"
              style={{
                top: idx % 2 === 0 ? "20%" : "auto",
                bottom: idx % 2 === 1 ? "10%" : "auto",
                left: idx % 3 === 0 ? "5%" : "auto",
                right: idx % 3 === 1 ? "10%" : "auto",
              }}
            >
              <p>{msg.text}</p>
            </div>
          ),
      )}

      <div
        ref={containerRef}
        className="button-container relative w-full max-w-2xl h-64"
      >
        <div className="absolute inset-0 flex justify-center items-center gap-4">
          <button
            id="yes"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:scale-110 transition-transform z-10"
            onClick={handleYes}
            style={{
              transform: `scale(${yesScale})`,
            }}
          >
            Yes
          </button>

          {!noPos && (
            <div className="bg-transparent px-6 py-3 text-xl invisible">No</div>
          )}
        </div>

        <button
          ref={noButtonRef}
          id="no"
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl absolute transition-all duration-100"
          onMouseEnter={handleNo}
          onClick={handleNo}
          style={
            noPos
              ? { top: noPos.top, left: noPos.left }
              : { top: "50%", left: "50%", transform: "translate(20px, -50%)" }
          }
        >
          No
        </button>
      </div>
    </div>
  );
};
