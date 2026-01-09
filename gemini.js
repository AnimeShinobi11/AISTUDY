async function askGemini(otazka) {
  const apiKey = "YOUR_API_KEY"; // NOT safe in production
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
    apiKey;

  const body = {
    contents: [{
      parts: [{ text: otazka }]
    }]
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  console.log(data.candidates[0].content.parts[0].text);
  
  return res;
}

askGemini();