import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p id="clock">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
