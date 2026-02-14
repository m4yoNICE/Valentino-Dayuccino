import { createPortal } from "react-dom";
import { useTeleport } from "../contexts/TeleportContext";

export const GuiltTrippingModal = ({ onClose }) => {
  const { totalTeleports } = useTeleport();

  const messages = [
    `WOW! You pressed NO ${totalTeleports} Times!`,
    `halaaaaa.... ${totalTeleports} NOs already 😢`,
    `awts... ${totalTeleports} rejections na pala... haha sge`,
    `dam.. ${totalTeleports} no, huh?😳`,
    `I only need 1 yes pero bat may ${totalTeleports} no`,
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 p-8 bg-pink-50 border border-pink-200 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in duration-200">
        <p className="text-pink-800 text-lg font-medium mb-6 leading-relaxed">
          {randomMessage}
        </p>
        <div className="flex justify-center">
          <button
            className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 active:scale-95 transition-all shadow-md shadow-pink-200"
            onClick={onClose}
          >
            I understand...
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
