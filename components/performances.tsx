import { mediaQueries } from "my-constants";

const performances = [
  {
    venue: "Rock and Brews at Yaamava",
    addressStreet: "Highland Ave.",
    addressCityState: "Highland, CA",
    date: "2022-10-04",
    startTime: "7:00pm",
    endTime: "10:00pm",
    description: "Come have a tasty dinner while we rock your faces off!",
  },
];

function Performance() {
  return <div></div>;
}

function Performances() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "var(--home-width)",
        maxWidth: "var(--home-max-width)",
        margin: "12rem 0",
      }}
    >
      <div>
        <h1
          css={{
            fontSize: "var(--font-xl)",
            padding: "2rem",
            fontWeight: "lighter",
          }}
        >
          Upcoming Performances
        </h1>
      </div>
      {performances.map((performance) => {
        return (
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid grey",
              [mediaQueries.medium]: {
                flexDirection: "row",
              },
            }}
            key={performance.date + performance.startTime}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                fontSize: "var(--font-small)",
              }}
            >
              {performance.venue}
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                fontSize: "var(--font-small)",
              }}
            >
              {performance.date}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Performances };
