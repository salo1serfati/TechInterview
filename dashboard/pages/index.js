import Head from "next/head";
import { useState } from "react";
import { saveResult } from "./api/saveResult";
import styles from "./index.module.css";

export default function Home() {
  const [formInput, setFormInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompL: formInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setFormInput("");
  }

  async function onSaveResult(result) {
    await saveResult(result);
  }

  /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
  function findNeedle(haystack, needle) {
  };

  return (
    <div>
      <Head>
        <title>Chariot OpenAI</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Ask me anything!</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Let's Dance?"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
          />
          <input type="submit" value="Generate Answer" />
        </form>
        {result ? (
          <div className={styles.result}>
            <div>{result}</div>
            <button className={styles.onSaveResult} onClick={() => onSaveResult(result)}> Save Result </button>
          </div>
        ) : <></>}
      </main>
    </div>
  );
}
