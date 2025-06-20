import React, { useState } from "react";

function Safari() {
  const [url, setUrl] = useState("https://en.wikipedia.org/wiki/Main_Page");
  const [inputUrl, setInputUrl] = useState(url);

  const handleGo = (e) => {
    e.preventDefault();
    let newUrl = inputUrl.trim();
    if (!newUrl.startsWith("http")) {
      newUrl = "https://" + newUrl;
    }
    setUrl(newUrl);
  };

  return (
    <div className="flex flex-col w-full h-[300px]">
      <form onSubmit={handleGo} className="p-2 bg-zinc-800 flex gap-2">
        <input
          type="text"
          className="flex-1 px-2 py-1 bg-zinc-700 text-white rounded outline-none"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Go
        </button>
      </form>

      <iframe
        src={url}
        className="flex-1 w-full"
        title="Safari"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
}

export default Safari;
