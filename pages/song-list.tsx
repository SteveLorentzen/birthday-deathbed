import { PageTitle } from "components/page-title";

const songList = [
  "Interstate Love Song",
  "Plush",
  "Vasoline",
  "Wicked Garden",
  "Creep",
  "Crackerman",
  "Big empty",
  "Sex Type Thing",
  "Lady Picture Show",
  "Dead And Bloated",
  "Unglued",
  "Big Bang Baby",
  "All In The Suit That You Wear",
  "Down",
  "Tripping On a Hole in a Paper Heart",
  "Sour Girl",
  "Silvergun Superman",
  "Art School Girl",
  "I Got You",
  "Dumb Love",
  "Hazy Daze",
  "Sin",
  "Piece of Pie",
  "Meatplow",
];

function SongList() {
  return (
    <div>
      <PageTitle title="Song List" />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          // "p:not(:last-child)": {
          //   marginBottom: "3rem",
          // },
          marginBottom: "12rem",
        }}
      >
        {songList.map((song, index) => {
          return (
            <p
              css={{
                fontSize: "var(--font-medium)",
                textAlign: "center",
                backgroundColor:
                  index % 2 === 0 ? "var(--color-grey-light)" : "",
                padding: "2rem",
              }}
              key={song}
            >
              {song}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default SongList;
