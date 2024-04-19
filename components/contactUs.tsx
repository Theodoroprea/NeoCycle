"use client";

import {
  Alert,
  Button,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
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
  const [focused, setFocused] = useState<String>("");

  const types = [
    {
      value: "None",
      label: "None",
    },
    {
      value: "Short",
      label: "Short Brew Suit",
    },
    {
      value: "Tall",
      label: "Tall Brew Suit",
    },
    {
      value: "Seltzer",
      label: "Seltzer Brew Suit (unavailable)",
    },
  ];

  const submitMessage = async () => {
    setSpinner(true);
    const data = {
      Name: formik.values.name,
      Email: formik.values.email,
      Type: formik.values.type,
      Quantity: formik.values.quantity,
      Message: formik.values.message,
    };

    console.log(data);

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
      type: "None",
      quantity: "0",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
      message: yup.string().required("Message is required"),
      type: yup.string(),
      quantity: yup.string().when("type", (type, schema) => {
        return type[0] === "None"
          ? schema
          : schema.required("Quantity is required");
      }),
    }),
    onSubmit: submitMessage,
    validateOnChange: false,
  });

  const handleFocus = (fieldName: string) => {
    setFocused(fieldName);
  };

  const handleBlur = () => {
    setFocused("");
  };

  const showSecondTextField = formik.values.type !== "None";

  return (
    <div id="contact" className={styles.cardWrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.contactStatementWrapper}>
          <p className={styles.description}>
            We strive to do the best for our users. If you have any comments,
            questions, or concerns, please don't hesitate to reach out to us.
          </p>
        </div>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
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
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              error={formik.touched.name && formik.errors.name !== undefined}
              helperText={formik.touched.name && formik.errors.name}
              InputProps={{
                style: {
                  color: "#282b30",
                  backgroundColor: success ? "#C4ECA6" : "#DBF2FA",
                },
              }}
              InputLabelProps={{
                style: {
                  color:
                    focused === "name" || formik.values.name !== ""
                      ? "rgb(234, 148, 42)"
                      : "#282b30",
                },
              }}
              sx={{
                width: "40%",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgb(234, 148, 42)",
                  },
                },
              }}
            />
            <TextField
              label="Email"
              disabled={success}
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              error={formik.touched.email && formik.errors.email !== undefined}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                style: {
                  color: "#282b30",
                  backgroundColor: success ? "#C4ECA6" : "#DBF2FA",
                },
              }}
              InputLabelProps={{
                style: {
                  color:
                    focused === "email" || formik.values.email !== ""
                      ? "rgb(234, 148, 42)"
                      : "#282b30",
                },
              }}
              sx={{
                width: "40%",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgb(234, 148, 42)",
                  },
                },
              }}
            />
            <TextField
              id="type"
              name="type"
              disabled={success}
              value={formik.values.type}
              onChange={formik.handleChange}
              onFocus={() => handleFocus("type")}
              onBlur={handleBlur}
              label=""
              helperText="Please select your Brew Suit type"
              select
              sx={{
                width: "40%",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgb(234, 148, 42)",
                  },
                },
              }}
              InputProps={{
                style: {
                  color: "#282b30",
                  backgroundColor: success ? "#C4ECA6" : "#DBF2FA",
                },
              }}
              FormHelperTextProps={{
                style: {
                  color: "rgb(234, 148, 42)",
                },
              }}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {showSecondTextField && (
              <TextField
                id="quantity"
                name="quantity"
                disabled={success}
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("quantity")}
                onBlur={handleBlur}
                error={
                  formik.touched.quantity &&
                  formik.errors.quantity !== undefined
                }
                helperText={formik.touched.quantity && formik.errors.quantity}
                label="Enter quantity"
                sx={{
                  width: "40%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(234, 148, 42)",
                    },
                  },
                }}
                InputProps={{
                  style: {
                    color: "#282b30",
                    backgroundColor: success ? "#C4ECA6" : "#DBF2FA",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color:
                      focused === "quantity" || formik.values.quantity !== ""
                        ? "rgb(234, 148, 42)"
                        : "#282b30",
                  },
                }}
              ></TextField>
            )}

            <TextField
              disabled={success}
              label="Message"
              id="message"
              name="message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              error={
                formik.touched.message && formik.errors.message !== undefined
              }
              helperText={formik.touched.message && formik.errors.message}
              InputProps={{
                style: {
                  color: "#282b30",
                  backgroundColor: success ? "#C4ECA6" : "#DBF2FA",
                },
              }}
              InputLabelProps={{
                style: {
                  color:
                    focused === "message" || formik.values.message !== ""
                      ? "rgb(234, 148, 42)"
                      : "#282b30",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgb(234, 148, 42)",
                  },
                },
              }}
            />
            <Stack direction="row" spacing={1} className={styles.buttonStack}>
              <Button
                disabled={success || spinner}
                variant="contained"
                style={{
                  width: "20%",
                }}
                sx={{
                  "&:hover": { backgroundColor: "#B87A00" },
                  backgroundColor: "#ffc145",
                  color: "black",
                  "&:disabled": {
                    // Styles for disabled state
                    backgroundColor: "#C4ECA6", // Example background color for disabled state
                  },
                }}
                type="submit"
                data-testid="contactUsSubmitButton"
              >
                {success ? "Submitted" : "Submit"}
              </Button>
              {success && <CheckIcon sx={{ color: "#C4ECA6" }} />}
              {spinner && <CircularProgress />}
            </Stack>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
