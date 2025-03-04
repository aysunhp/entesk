import { useEffect, useState } from "react";

const Message = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTime(new Date().toLocaleTimeString());
  //     }, 1000);
  //   }, []);

  return (
    <>
      {/* <>{props.count}</> */}
      <p>{time}</p>
    </>
  );
};

export default Message;
