import "./SeaBattle.css";

const SeaBattle = function () {
  const battlefield = [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  ];

  return (
    <section className="SeaBattle">
      <h2>Sea Battle board</h2>
      <div className="SeaBattle-board">
        {battlefield.map((row) => (
          <div className="SeaBattle-row">
            {row.map((cell) => (
              <div
                className={
                  cell
                    ? "SeaBattle-cell SeaBattle-cell--with-ship"
                    : "SeaBattle-cell"
                }
              ></div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeaBattle;
