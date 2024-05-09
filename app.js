const parrent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", { id: "heading" }, "h1 Child1 Updated..."),
        React.createElement("h2", { id: "heading" }, "h2 Child1 Updated..."),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", { id: "heading" }, "h1 Child2 Updated..."),
        React.createElement("h2", { id: "heading" }, "h2 Child2 Updated..."),
      ]
    ),
  ]
);

console.log(parrent);
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "heading",
  },
  "Hello React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parrent, heading);
