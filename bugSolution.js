```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to use useEffect
    // Perform side effects here, like API calls or subscriptions
    // Avoid unnecessary state updates
    console.log('Effect ran!');
  }, []); // Empty dependency array means it only runs once after the initial render

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```