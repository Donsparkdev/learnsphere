import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm";
import { login as loginUser} from "../../services/authService";

import useAuth from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fields = [
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

  console.log("Submitting...", formData);

  try {
    const res = await loginUser(formData);

    console.log("Response:", res.data);

    login(res.data.token, res.data.user);

    console.log("Context updated");

    alert("Login successful!");

    navigate("/dashboard");
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error.response);
    console.log("Data:", error.response?.data);

    alert(error.response?.data?.message || error.message);
  }
};

  return (
    <AuthForm
      title="Welcome Back"
      fields={fields}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="Login"
    />
  );
}

export default Login;
