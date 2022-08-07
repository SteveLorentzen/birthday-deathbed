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
        width: "var(--main-content-width)",
        maxWidth: "var(--main-content-max-width)",
      }}
    >
      {performances.map((performance) => {
        return (
          <div
            key={performance.date + performance.startTime}
            css={{ display: "flex", flexDirection: "column" }}
          >
            {performance.venue}
          </div>
        );
      })}
    </div>
  );
}

export { Performances };
