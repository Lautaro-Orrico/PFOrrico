function FlexContainer(props) {
  const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "40px" ,
    gap: "15px",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default FlexContainer;
