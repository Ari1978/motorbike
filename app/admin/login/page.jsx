"use client"

import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>
      <LoginForm />
    </div>
  );
}
