```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ') {
        setCount(count + 1);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    // Correct: Return a cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```