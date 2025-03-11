export default function Button() {
  const handleClick = (event) => {
    console.log("Button clicked!", event); // Synthetic Event
    console.log("Native Event:", event.nativeEvent); // Native Event
  };

  return <button onClick={handleClick}>Click Me</button>;
}
