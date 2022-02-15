import {
  Input,
  Button,
  Title,
  Label,
  Btns,
  Card,
  Field,
} from "../styles/reusable";

export const CardBusiness = () => {
  return (
    <Card>
      <Title>Create Business</Title>
      <form>
        <Field>
          <Label>Bussines Name</Label>
          <Input type="text" placeholder="Google" />
        </Field>
        <Btns>
          <Button type="submit" mode="secondary">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </Btns>
      </form>
    </Card>
  );
};
