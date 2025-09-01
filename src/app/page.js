"use client";
import { useState } from "react";
import { BasicForm } from "../Form";

export default function Page() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });
  const [formPage, setFormPage] = useState("BasicForm");

  function continueForm() {
    console.log(form);
  }
  return (
    <div>
      {formPage === "BasicForm" && (
        <BasicForm setFormPage={setFormPage} setForm={setForm} form={form} />
      )}
    </div>
  );
}
