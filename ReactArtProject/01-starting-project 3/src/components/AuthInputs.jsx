import { useState } from "react";
import styled from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") setEnteredEmail(value);
    if (identifier === "password") setEnteredPassword(value);
  }

  function handleLogin() {
    setSubmitted(true);
    // demo only
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <section>
      <ControlContainer>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={`border rounded px-3 py-2 ${emailNotValid ? "border-red-500" : "border-gray-300"}`}
          value={enteredEmail}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {emailNotValid && <p className="text-sm text-red-600">Enter a valid email.</p>}
      </ControlContainer>

      <ControlContainer>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className={`border rounded px-3 py-2 ${passwordNotValid ? "border-red-500" : "border-gray-300"}`}
          value={enteredPassword}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        {passwordNotValid && <p className="text-sm text-red-600">Min 6 characters.</p>}
      </ControlContainer>

      <button onClick={handleLogin} className="bg-black text-white px-4 py-2 rounded">
        Log in
      </button>
    </section>
  );
}
