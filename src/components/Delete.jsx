import { Button, Title, Btns, Card } from "../styles/reusable";

const Delete = () => {
  return (
    <Card>
      <Title>Are you sure to delete MasterdCard ?</Title>
      <Btns>
        <Button mode="secondary">Cancel</Button>
        <Button mode="danger">Remove</Button>
      </Btns>
    </Card>
  );
};
export default Delete;
