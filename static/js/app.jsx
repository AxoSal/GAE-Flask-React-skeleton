var Component1 = require("./components/component1.jsx");
var Component2 = require("./components/component2.jsx");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Component1 />
        <Component2 />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
