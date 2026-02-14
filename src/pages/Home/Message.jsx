import { useState } from "react";
import { GuiltTrippingModal } from "../../components/GuiltTrippingModal";
import { useTeleport } from "../../contexts/TeleportContext";
export const Message = () => {
  const [showModal, setShowModal] = useState(true);
  const { totalTeleports } = useTeleport(); // true = modal shows immediately
  return (
    <div
      className="min-h-screen bg-repeat bg-center text-white overflow-auto p-8 text-center"
      style={{
        backgroundImage:
          "url(https://c.tenor.com/i1rsgMyOFgcAAAAd/cat-cat-love.gif)",
      }}
    >
      {showModal && totalTeleports !== 0 && (
        <GuiltTrippingModal onClose={() => setShowModal(false)} />
      )}
      <img
        src="https://c.tenor.com/3RkBSAwE4xgAAAAj/quby-pentol.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="celebration"
      />
      <p className="text-xl">
        Hawwoooooooooooooooooooooooooo
        <br />
        Happy Monthsaryyy Babyyyyyyyy
      </p>
      <img
        src="https://c.tenor.com/ux7RPst0v1MAAAAj/quby-pentol.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="happy"
      />
      <p className="text-xl">
        I hope you are happy today
        <br />
        or happy that you are my girlfriend 🥹🥹🥹🥹🥹🥹
      </p>
      <img
        src="https://c.tenor.com/Fm3_oNnjUjYAAAAj/line.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="line"
      />
      <p className="text-xl">
        Im happy to tell you that i love you
        <br />
        so muchhhhhhhhhhhhh
      </p>
      <img
        src="https://c.tenor.com/1UoL-HJFGDAAAAAj/pentol-stiker-pentol.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="pentol"
      />
      <p className="text-xl">
        Your love is sooo sweeet
        <br />I really like the way you loveeeee
      </p>
      <img
        src="https://c.tenor.com/1bN1lZmbwWcAAAAj/line.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="line"
      />
      <p className="text-xl">
        You like to include me on everything, as you usually would
        <br />
        Which I find it very endearing
      </p>
      <img
        src="https://c.tenor.com/mJ7Tkj3KIn0AAAAj/peach-and.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="peach"
      />
      <p className="text-xl">
        I love you so much babyyyy
        <br />
        wala akong ma say nito so HAWK TUAH HAWK TUAH
      </p>
      <img
        src="https://c.tenor.com/CdliypdvLTEAAAAj/quby-pentol.gif"
        className="max-w-[80%] mx-auto my-5"
        alt="quby"
      />
      {Array(300)
        .fill("I love you")
        .map((text, i) => (
          <p key={i} className="text-base my-1">
            {text}
          </p>
        ))}
      <p className="text-xl">Commemorative na yun jin pic</p>
      <img
        src="https://media1.tenor.com/m/b9k5o8bhEFAAAAAC/genshin-impact.gif"
        alt="Genshin Impact"
        className="max-w-[80%] mx-auto my-5"
      />
    </div>
  );
};
