async function askGemini(otazka) {
  const apiKey = "AIzaSyA7tFfDlgXFpydbrxLW0sNh7C9DE6tmsJQ"; // NOT safe in production
  
  console.log((await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=" + apiKey)).json())

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" +
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