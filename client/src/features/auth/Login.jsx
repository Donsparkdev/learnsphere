import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../components/auth/AuthForm";
import { login } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

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

    try {
      const res = await login(formData);

      // Save JWT
      localStorage.setItem("token", res.data.token);

      // Optional: Save user
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login failed"
      );
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
