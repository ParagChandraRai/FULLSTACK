import React, { useState, useEffect } from 'react';

const Alarm = () => {
  const [time, setTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);

  const handleAlarmChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleSetAlarm = (event) => {
    event.preventDefault();
    setIsAlarmTriggered(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);

      // Check if the alarm time matches the current time
      if (isAlarmTriggered && alarmTime === currentTime.toLocaleTimeString()) {
        alert('Alarm triggered!');
        setIsAlarmTriggered(false);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isAlarmTriggered, alarmTime]);

  return (
    <div>
      <h1>Alarm Clock</h1>
      <h1 style={{ fontSize: '50px', color: isAlarmTriggered ? 'red' : 'black' }}>
        {time.toLocaleTimeString()}
      </h1>
      <form onSubmit={handleSetAlarm}>
        <label>
          Set Alarm:
          <input type="time" value={alarmTime} onChange={handleAlarmChange} />
        </label>
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default Alarm;
