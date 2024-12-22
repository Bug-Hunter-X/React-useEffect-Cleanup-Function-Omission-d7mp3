```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing return statement for cleanup function
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      setCount(count + 1);
    }
  };

  return (
    <div>Count: {count}</div>
  );
}
```