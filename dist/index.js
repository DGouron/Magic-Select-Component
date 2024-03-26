function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function SelectComponent(_ref) {
  var optionsToDisplay = _ref.optionsToDisplay,
    triggerCurrentOption = _ref.triggerCurrentOption,
    label = _ref.label;
  var handleSelectOption = function handleSelectOption(e) {
    triggerCurrentOption(e.target.value);
  };
  return React.createElement("div", null, React.createElement("label", {
    style: {
      fontSize: "0.67",
      fontWeight: 500,
      color: "#222",
      textAlign: "center",
      marginBottom: "10px"
    }
  }, label), React.createElement("select", {
    style: {
      borderRadius: "4px",
      border: "1px solid #e0e0e0",
      height: "40px",
      width: "100%",
      color: "#000",
      fontSize: "0.87",
      fontWeight: 400,
      textAlign: "center",
      boxShadow: "2px 5px 8px -2px rgba(0,0,0,0.67)"
    },
    onChange: handleSelectOption
  }, optionsToDisplay === null || optionsToDisplay === void 0 ? void 0 : optionsToDisplay.map(function (option) {
    return React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.value);
  })));
}

module.exports = SelectComponent;
//# sourceMappingURL=index.js.map
