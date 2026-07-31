import Container from "../layout/Container";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

function AuthForm({
  title,
  fields,
  formData,
  onChange,
  onSubmit,
  buttonText,
}) {
  return (
    <Container>
      <div className="flex justify-center py-16">
        <Card className="w-full max-w-md">
          <h1 className="mb-6 text-center text-3xl font-bold">
            {title}
          </h1>

          <form onSubmit={onSubmit} className="space-y-4">
            {fields.map((field) => (
              <Input
                key={field.name}
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={onChange}
                required
              />
            ))}

            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          </form>
        </Card>
      </div>
    </Container>
  );
}

export default AuthForm;
