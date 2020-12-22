import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthContext);
  const handleSubmit = () => {
    handleLogin({ email, password }, props.history);
  };
  return (
    <>
      <Segment>
        <Header as="h1" textAlign="center">
          Login
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            required
            autoFocus
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Input>
          <Form.Input
            required
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Input>
          <Segment textAlign="center" basic>
            <Button type="submit">Login</Button>
          </Segment>
        </Form>
      </Segment>
    </>
  );
};