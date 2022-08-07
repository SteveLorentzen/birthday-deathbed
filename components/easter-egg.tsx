import * as React from "react";
import { keyframes } from "@emotion/react";
import Image from "next/image";

const slideup = keyframes`
0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0)
  }
`;

function EasterEgg() {
  const [count, setCount] = React.useState(0);
  const [showEasterEgg, setShowEasterEgg] = React.useState(false);

  return (
    <div
      css={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "80px",
        height: "80px",
      }}
      onClick={() => {
        setCount((prevCount) => {
          if (prevCount === 14) {
            setShowEasterEgg(true);
            setTimeout(() => setShowEasterEgg(false), 2000);
            return 0;
          }
          return prevCount + 1;
        });
      }}
    >
      {showEasterEgg ? (
        <div
          css={{
            width: "240px",
            height: "160px",
            position: "fixed",
            bottom: 0,
            right: "5%",
            animation: `${slideup} 1s ease`,
          }}
        >
          <Image
            src="/images/steve_p_birthday_deathbed.jpg"
            alt="Steve P Easter Egg"
            width={240}
            height={160}
          ></Image>
        </div>
      ) : null}
    </div>
  );
}

export { EasterEgg };
