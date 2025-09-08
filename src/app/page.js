"use client";
import { useEffect, useState } from "react";
import { BasicForm, ContactForm, FinalForm, DoneForm } from "../Form";

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

  useEffect(() => {
    const localFormData = localStorage.getItem("formData");
    localFormData ? JSON.parse(localFormData) : null;
  }, []);



  return (
    <div
      animate={{ rotate: 360 }}
      className="flex justify-center items-center bg-gray-200 w-screen h-screen "
    >
      {formPage === "BasicForm" && (
        <BasicForm setFormPage={setFormPage} setForm={setForm} form={form} />
      )}
      {formPage === "ContactForm" && (
        <ContactForm setFormPage={setFormPage} setForm={setForm} form={form} />
      )}
      {formPage === "FinalForm" && (
        <FinalForm
          formPage={formPage}
          setFormPage={setFormPage}
          setForm={setForm}
          form={form}
        />
      )}
      {formPage === "DoneForm" && <DoneForm />}
    </div>
  );
}
