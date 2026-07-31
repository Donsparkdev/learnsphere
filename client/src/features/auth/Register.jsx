import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { register } from "../../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const fields = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register(formData);
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <AuthForm
      title="Create an Account"
      fields={fields}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="Register"
    />
  );
}

export default Register;
 
