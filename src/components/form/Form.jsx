import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [submissionMessage, setSubmissionMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    
      .then(
        () => {
          setSubmissionMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          setSubmissionMessage(
            "Failed to send the message. Please try again later."
          );
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  text-primary  font-medium font-petrona">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8 text-2xl font-bold text-black/80">
                06 82 26 95 09
                <address className="mt-2 not-italic text-secondary">
                  Agadir, <span className="text-lightBrown">MAROC</span>
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-medium"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="user_name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-medium"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="user_email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-medium"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="user-number"
                      required
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Guest
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-medium"
                      placeholder="How many guest"
                      type="number"
                      id="guest"
                      name="user_guest"
                      min={1}
                      max={7}
                      defaultValue={1}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-medium"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                <div className="my-4">
                  <button
                    value="Send"
                    type="submit"
                    className="inline-block w-full rounded-lg bg-green-800 font-petrona px-5 py-3 font-medium text-white sm:w-auto hover:bg-green-700"
                  >
                    Send Enquiry
                  </button>
                </div>
                <p className="text-center text-green-700 font-semibold font-boogaloo text-xl md:text-2xl">
                  {submissionMessage}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
