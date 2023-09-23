import React, { useEffect } from "react";
import { Formik, useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";

export default function BookingForm() {
  const { response, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      date: "select",
      time: "select",
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => submit("", values),
  });

  return <form onSubmit={formik.handleSubmit}>as</form>;
}
