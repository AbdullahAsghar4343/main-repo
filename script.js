
  const fruits = ["apple", "banana", "lychee", "watermelon", "gova", "graps", "apple", "banana"];
  const input = document.getElementById("searchInput");
  const results = document.getElementById("results");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    results.innerHTML = ""; // Clear previous results

    // Get only the matching fruit names
    const matches = fruits.filter(fruit => fruit.toLowerCase().includes(query));

    // Display the matches
    matches.forEach(fruit => {
      const li = document.createElement("li");
      li.textContent = fruit;
      results.appendChild(li);
    });
  });

