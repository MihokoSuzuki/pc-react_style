export const InlineStyle = () => {
  const containerStyle = {
    border: "1px solid #999",
    borderRadious: "5px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const titleStyle = {
    color: "orange",
    fontWeight: "bold"
  };

  const btnStyle = {
    background: "#ccc",
    border: "none",
    padding: "10px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Styles</p>
      <button style={btnStyle}>Fight</button>
    </div>
  );
};
