import { useEffect, useState } from "react";

export default function useTypingEffect(words = [], speed = 100, delay = 2000) {
  const [index, setIndex] = useState(0); // current word index
  const [text, setText] = useState('');
  const [subIndex, setSubIndex] = useState(0); // letter index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    const currentWord = words[index];

    if (isDeleting) {
      if (subIndex > 0) {
        setTimeout(() => setSubIndex(subIndex - 1), speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (subIndex < currentWord.length) {
        setTimeout(() => setSubIndex(subIndex + 1), speed);
      } else {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }

    setText(currentWord.substring(0, subIndex));
  }, [subIndex, index, isDeleting, words, speed, delay]);

  return text;
}
