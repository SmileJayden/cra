import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border: 1px blue solid;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: pink;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => {
    return props.primary ? "palevioletred" : "white";
  }};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => {
  console.log("props", props);
  return <Button {...props} children={props.children.split("").reverse()} />;
};
function App() {
  const handleClick = (e) => {
    console.info("handleClick", e);
  };

  return (
    <Container>
      <Title>hello world</Title>
      <Button primary onClick={(e) => handleClick(e)}>
        Primary Button
      </Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button>Button</Button>
      <Button as={"a"} href={"https://www.naver.com"} target={"_blank"}>
        Anchor
      </Button>
      <Button as={ReversedButton} onClick={handleClick}>
        This is reversed button
      </Button>
    </Container>
  );
}

export default App;
