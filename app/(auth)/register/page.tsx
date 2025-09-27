import GoogleIcon from "@/components/common/GoogleIcon";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form action="" className="block max-w-sm mx-auto text-center">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <span>or login with</span>
        <button
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            background: "white",
            alignItems: "center",
          }}
        >
          <GoogleIcon />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
