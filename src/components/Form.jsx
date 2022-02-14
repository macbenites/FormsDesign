import {
  Card,
  Field,
  Title,
  Label,
  Input,
  Btns,
  Button,
} from "../styles/reusable";

const Form = () => {
  return (
    <Card>
      <Title>Create Person</Title>
      <Field>
        <Label>Name</Label>
        <Input type="text" placeholder="Ronald Richards" />
      </Field>
      <Field>
        <Label>Role</Label>
        <Input type="text" placeholder="Web Designer" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="text" placeholder="ronal.richard@example.com" />
      </Field>
      <Field>
        <Label>Phone</Label>
        <Input type="text" placeholder="(307) 555-0133" />
      </Field>
      <Field>
        <Label>Join Date</Label>
        <Input type="datetime-local" placeholder="10/6/13" />
      </Field>
      <Btns>
        <Button mode="secondary">Cancel</Button>
        <Button>Create</Button>
      </Btns>
    </Card>
  );
};

export default Form;
