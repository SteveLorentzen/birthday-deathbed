import Image from "next/image";
import { mq } from "my-constants";
import { Performances } from "components/performances";

function Home() {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        padding: "3rem",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "var(--home-maxWidth)",
          "& > div": {
            marginBottom: "5rem",
          },
          [mq[0]]: {
            "& > div": {
              marginBottom: "10rem",
            },
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1>
              <Image
                src="/images/logo_birthday_deathbed.jpg"
                width="600"
                height="300"
                alt="Birthday Deathbed"
              ></Image>
            </h1>
          </div>
          <h2
            css={{
              fontSize: "var(--font-small)",
              textAlign: "center",
              [mq[2]]: { fontSize: "var(--font-medium)" },
            }}
          >
            A{" "}
            <span
              css={{
                fontSize: "var(--font-medium)",
                whiteSpace: "nowrap",
                fontStyle: "italic",
                [mq[0]]: { fontSize: "var(--font-large)" },
                [mq[1]]: { fontSize: "var(--font-xl)" },
                // color: "var(--color-red-dark)",
              }}
            >
              Stone Temple Pilots
            </span>{" "}
            tribute
          </h2>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <iframe
            css={{
              width: "var(--home-width)",
              height: "var(--home-height)",
              maxWidth: "var(--home-max-width)",
              maxHeight: "var(--home-max-height)",
            }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t2JWFUOQ3Xg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div css={{ maxWidth: "var(--home-max-width)", width: "100%" }}>
          <h3
            css={{
              fontSize: "var(--font-xl)",
            }}
          ></h3>
        </div>
        <Performances />
        <div
          css={{
            width: "100%",
            maxWidth: "var(--home-max-width)",
            display: "flex",
            flex: "1",
            flexDirection: "column",
          }}
        >
          <div>
            <Image
              src="/images/birthday_deathbed_1.jpg"
              width="1442"
              height="1030"
              alt="Birthday Deathbed holding their instruments"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
