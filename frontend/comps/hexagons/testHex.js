import React from "react";
import { render } from "react-dom";
import { line, curveLinearClosed } from "d3-shape";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const a = 30;
const b = (a * 1.732) / 2;
const clickThreshold = 5;

function passedClickThreshold(lastMouse, event) {
  if (!lastMouse || !event) return false;
  return (
    Math.abs(lastMouse.x - event.screenX) > clickThreshold ||
    Math.abs(lastMouse.y - event.screenY) > clickThreshold
  );
}

function generateHexPoints(centreX, centreY) {
  const offsets = [
    [0, a],
    [b, a / 2],
    [b, -a / 2],
    [0, -a],
    [-b, -a / 2],
    [-b, a / 2]
  ];
  return offsets.map(([offsetX, offsetY]) => [
    centreX + offsetX,
    centreY + offsetY
  ]);
}

function generateGrid(numX, numY) {
  const result = [];
  const startX = b;
  const startY = a;
  let counter = 0;
  for (let x = 0; x < numX; x += 1) {
    for (let y = 0; y < numY; y += 1) {
      result.push({
        id: `#${++counter} (${x},${y})`,
        x,
        y,
        coords: generateHexPoints(
          startX + x * b * 2 + (y % 2) * b,
          startY + (y * a * 3) / 2
        ),
        ref: React.createRef()
      });
    }
  }
  return result;
}

class GridCell extends React.Component {
  state = {
    isSelected: false
  };
  mouseDown = (event) => {
    this.didMove = false;
    this.lastMouse = { x: event.screenX, y: event.screenY };
  };
  mouseUp = (event) => {
    if (!this.didMove && this.lastMouse) this.props.onClick(this.props.cell);
    this.lastMouse = null;
  };
  mouseLeave = () => {
    this.didMove = true;
    this.lastMouse = null;
  };
  move = (event) => {
    if (this.lastMouse) {
      this.didMove =
        this.didMove || passedClickThreshold(this.lastMouse, event);
    }
  };
  render() {
    const { x, y, coords, id } = this.props.cell;
    const { isSelected } = this.props;
    return (
      <path
        onMouseDown={this.mouseDown}
        onMouseMove={this.move}
        onMouseUp={this.mouseUp}
        onMouseLeave={this.mouseLeave}
        d={line().curve(curveLinearClosed)(coords)}
        fill="blue"
        stroke={isSelected ? "red" : "black"}
      />
    );
  }
}

class Map extends React.Component {
  state = {
    x: 0,
    y: 0,
    lastMouse: null,
    isDragging: false,
    didMove: false,
    selected: null
  };

  mouseDown = (event) =>
    this.setState({
      isDragging: true,
      didMove: false,
      lastMouse: { x: event.screenX, y: event.screenY }
    });
  mouseUp = (event) => {
    this.setState({ isDragging: false });
  };
  move = (event) => {
    const { screenX, screenY } = event;
    if (
      this.state.isDragging &&
      (this.state.didMove || passedClickThreshold(this.state.lastMouse, event))
    ) {
      this.setState(({ didMove, x, y, lastMouse }) => {
        return {
          didMove: true,
          lastMouse: { x: screenX, y: screenY },
          x: Math.max(
            Math.min(0, x + screenX - lastMouse.x),
            document.body.getBoundingClientRect().width -
              (this.props.x + 0.5) * 2 * b
          ),
          y: Math.max(
            Math.min(0, y + screenY - lastMouse.y),
            document.body.getBoundingClientRect().height -
              (a / 2 + ((this.props.y + 0.5) * 3 * a) / 2)
          )
        };
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mouseup", this.mouseUp);
    document.addEventListener("mousemove", this.move);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.mouseUp);
    document.removeEventListener("mousemove", this.move);
  }

  clickCell = (cell) => {
    console.log(this.state.selected, cell);
    if (this.state.selected && this.state.selected.ref.current) {
      this.state.selected.ref.current.setState({ isSelected: false });
    }
    cell.ref.current.setState({ isSelected: true });
    this.setState({ selected: cell });
  };

  render() {
    return [
      <g key="grid" onMouseDown={this.mouseDown}
        transform={`translate(${this.state.x},${this.state.y})`}
      >
        {generateGrid(this.props.x, this.props.y).map((cell) => (
          <GridCell
            key={cell.id}
            ref={cell.ref}
            cell={cell}
            onClick={this.clickCell}
          />
        ))}
      </g>,
      <g key="overlay" transform="translate(20,20)" textAnchor="start">
        <rect fill="white"stroke="black"
          x="0" y="0"
          width="300" height="200"
        />
        <g transform="translate(10,24)">
          <text fill="black"> Selected:{" "}
            {this.state.selected ? this.state.selected.id : "Not Selected"}
          </text>
        </g>
      </g>
    ];
  }
}

const App = () => (
  <div style={styles}>
    <svg width="50vw" height="auto">
      <Map x={10} y={5} />
    </svg>
  </div>
);

// render(<App />, document.getElementById("root"));

export default App