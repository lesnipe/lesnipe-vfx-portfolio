import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import  showToast from "../Toast/index.js"
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

// Consts from .env
const REACT_APP_SITE_KEY = process.env.REACT_APP_SITE_KEY;
const REACT_APP_EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const REACT_APP_EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const REACT_APP_EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Form = () => {

  const form = useRef();
  const recaptcha = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const intialValues = {
    fullName: "",
    email: "",
    message: "",
  };
  
  const onSubmit = () => {
    const recaptchaToken = recaptcha.current.getValue();
    console.log(recaptchaToken);
    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAILJS_PUBLIC_KEY,
        {
          'g-recaptcha-response': recaptchaToken
        }
      )
      .then(
        () => {    
          showToast('success', `Message was sent successfully!`);
          reset({ fullName: "", email: "", message: "" });
        },
        (error) => {
          showToast('error', `Failed to sent the message! (Check reCAPTCHA verification)`);
        }
      );
      recaptcha.current.reset();      
  };
  

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="portfolio-form"
    >
      <input
        placeholder="Full Name"
        name="fullName"
        {...register("fullName", {
          validate: (value) => value !== "",
        })}
      />
      {errors.fullName && <p>Please, fill in your full name!</p>}

      <input
        defaultValue={intialValues.email}
        placeholder="example@gmail.com"
        type="email"
        name="email"
        {...register("email", {
          validate: (value) => value !== "",
        })}
      />
      {errors.email && <p>Please, fill in your email correctly!</p>}
      <textarea
        defaultValue={intialValues.message}
        placeholder="Message"
        type="text"
        name="message"
        {...register("message", {
          validate: (value) => value !== "",
        })}
      />
      {errors.message && <p>Please, fill in your message!</p>}
      <ReCAPTCHA style={{paddingTop: '10px'}} ref={recaptcha} sitekey={REACT_APP_SITE_KEY} />
      <input type="submit" />
      <ToastContainer />
    </form>
  );
};

export default Form;
