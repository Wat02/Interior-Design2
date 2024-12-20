import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Transform",
    "Transformer",
    "変身",
    "转换",
    "Átalakítani",
    "Forvandle",
    "Verwandeln",
  ];

  return (
    <div>
      <div>
        <FlipWords words={words} />
      </div>
    </div>
  );
}
