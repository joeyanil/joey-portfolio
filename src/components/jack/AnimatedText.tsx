import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const totalChars = text.length;
  // Split into word / whitespace tokens so each word wraps as one unit
  // (no mid-word line breaks) while spaces stay as valid break points.
  const tokens = text.match(/\S+|\s+/g) ?? [];
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((token, tokenIndex) => {
        const isWhitespace = /^\s+$/.test(token);
        const chars = token.split("").map((c) => {
          const i = charIndex;
          charIndex += 1;
          const start = i / totalChars;
          const end = (i + 1) / totalChars;
          return <Char key={i} char={c} progress={scrollYProgress} range={[start, end]} />;
        });

        return isWhitespace ? (
          <span key={tokenIndex}>{chars}</span>
        ) : (
          <span key={tokenIndex} className="inline-block">
            {chars}
          </span>
        );
      })}
    </p>
  );
}
