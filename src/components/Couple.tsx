import { useEffect, useState } from "react";
import PWPhoto3 from "../assets/prewedding/IMG_3710.png"

const Couple = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  const [secondsUpdate, setSecondUpdate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setSecondUpdate(prev => !prev), 1000);

    return () => clearInterval(interval);
  })
  

  useEffect(() => {
    const targetDate = new Date('2026-09-19T00:00:00'); // 19/09/2026 meia-noite

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="couple overflow-hidden">
      <div className="wrapper flex flex-col max-w-270 w-full h-144 justify-center items-center gap-20.75">
        <img className="overflow-hidden w-43.5 h-56 object-bottom object-cover rounded-t-full" src={PWPhoto3} alt="Foto da galeria de Pré wedding"/>
        <h2 className="GreatVibes text-[32px] title-text text-center">{String(timeLeft.days).padStart(2, "0")} dia{timeLeft.days > 1 ? "s" : ""} <span className={`${secondsUpdate ? "opacity-0" : "opacity-100"}`}>:</span>
           {String(timeLeft.hours).padStart(2, "0")} hora{timeLeft.hours > 1 ? "s" : ""} <span className={`${secondsUpdate ? "opacity-0" : "opacity-100"}`}>:</span> {String(timeLeft.minutes).padStart(2, "0")} minuto{timeLeft.minutes > 1 ? "s" : ""}</h2>
      </div>
    </div>
  )
}

export default Couple