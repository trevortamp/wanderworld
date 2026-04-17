const response = await fetch('https://tinkr.tech/sdb/a', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', age: 25 })
});
const data = await response.json();
console.log(data); // {"id": "...", "name": "John", "age": 25}