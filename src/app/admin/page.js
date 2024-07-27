"use client";
import { useState } from "react";

export default function UploadQuiz() {
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonInput,
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse({ success: false, error: error.message });
    }
  };

  return (
    <div>
      <h1>Upload Quiz</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          cols="50"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Enter quiz JSON here..."
        ></textarea>
        <br />
        <button type="submit">Upload</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
