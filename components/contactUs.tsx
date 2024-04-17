"use client";

import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styles from "../styles/ContactUs.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendContactForm } from "@/lib/api";

const ContactUs = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const submitMessage = async () => {
    setSpinner(true);
    const data = {
      Name: formik.values.name,
      Email: formik.values.email,
      Message: formik.values.message,
    };

    await sendContactForm(data).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
      } else {
        setShowError(true);
        console.log(res);
      }
      setSpinner(false);
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
      message: yup.string().required("Message is required"),
    }),
    onSubmit: submitMessage,
    validateOnChange: false,
  });

  return (
    <div id="contact" className={styles.cardWrapper}>
      <Card variant="outlined" className={styles.card}>
        <CardContent>
          <Stack className={styles.outerFormStack} direction="row" spacing={2}>
            <form style={{ display: "flex" }} onSubmit={formik.handleSubmit}>
              <Stack
                direction="column"
                spacing={2}
                className={styles.innerFormStack}
              >
                {showError && (
                  <Alert severity="error">
                    Error sending feedback. Please try again!
                  </Alert>
                )}
                <TextField
                  label="Name"
                  id="name"
                  name="name"
                  disabled={success}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.name && formik.errors.name !== undefined
                  }
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  label="Email"
                  disabled={success}
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.email && formik.errors.email !== undefined
                  }
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  disabled={success}
                  label="Message"
                  id="message"
                  name="message"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message &&
                    formik.errors.message !== undefined
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
                <Stack
                  direction="row"
                  spacing={1}
                  className={styles.buttonStack}
                >
                  <Button
                    disabled={success || spinner}
                    variant="contained"
                    style={{ maxWidth: "40%" }}
                    type="submit"
                    data-testid="contactUsSubmitButton"
                  >
                    {success ? "Submitted" : "Submit"}
                  </Button>
                  {success && <CheckIcon color="disabled" />}
                  {spinner && <CircularProgress />}
                </Stack>
              </Stack>
            </form>
            <div className={styles.contactStatementWrapper}>
              {" "}
              <h2 className={styles.contactStatementText}>
                We strive to do the best for our users. If you have any
                comments, questions, or concerns, please don't hesitate to reach
                out to us.
              </h2>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
