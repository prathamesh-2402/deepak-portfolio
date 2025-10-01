import PropTypes from "prop-types";
import { useState } from "react";
import FormField from "../components/ContactUs/FormField";

const ContactUs = ({ darkMode }) => {
  ContactUs.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  const [glowStyles, setGlowStyles] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlowStyles((prevGlowStyles) => ({
      ...prevGlowStyles,
      [index]: {
        background: `radial-gradient(600px circle at ${x}px ${y}px, ${darkMode
          ? "rgba(255, 255, 255, 0.14), transparent 40%"
          : "rgba(26, 69, 114, 0.12), transparent 40%"
          })`,
        opacity: 0.8,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setGlowStyles((prevGlowStyles) => ({
      ...prevGlowStyles,
      [index]: {},
    }));
  };

  return (
    <div>
      <div className="isolate text-light-foreground dark:text-dark-foreground px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Drop me a Line
          </h2>
          <p className="mt-2 text-lg/8 sm:w-[80%]">
            I&apos;d love to hear from you. So feel free to use the online form and I&apos;ll get back to you soon.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-8 sm:mt-12"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* <div className="sm:col-span-2">
              <h1
                className="block text-sm/6 font-semibold mb-4"
              >
                Services you&apos;re interested in
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                  allServices.map((item, index) => (
                    <div className="relative flex items-center gap-2 h-24 bg-light-hover-background dark:bg-dark-hover-background py-2 px-4 rounded-xl transition ease-in-out duration-300"
                      key={index}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={() => handleMouseLeave(index)}>
                      <div
                        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity ease-in-out duration-300"
                        style={glowStyles[index] || {}}
                      ></div>
                      <Checkbox label={item} id={item.toLowerCase().replace(/\s+/g, "-")} />
                    </div>
                  ))
                }
              </div>
            </div> */}
            {/* <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-light-background dark:bg-dark-background px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-light-foreground dark:outline-dark-foreground placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-light-foreground"
                />
              </div>
            </div> */}
            <FormField id={"first-name"} label={"First name"} type={"text"} autoComplete={"given-name"} />
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-light-background dark:bg-dark-background px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-light-foreground dark:outline-dark-foreground placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-light-foreground"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold "
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-light-background dark:bg-dark-background px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-light-foreground dark:outline-dark-foreground placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-light-foreground"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold "
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-light-background dark:bg-dark-background outline outline-1 -outline-offset-1 outline-light-foreground dark:outline-dark-foreground has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-light-foreground dark:has-[input:focus-within]:outline-dark-foreground">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <div
                      className="col-start-1 row-start-1 w-full bg-light-background dark:bg-dark-background appearance-none rounded-md py-2 px-3.5 text-base placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-light-foreground sm:text-sm/6"
                    >
                      +91
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    pattern="^[0-9]{1,10}$"
                    maxLength={10}
                    className="block min-w-0 grow bg-light-background dark:bg-dark-background rounded-r-md py-1.5 pl-1 pr-3 text-base placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    placeholder="12345 67890"
                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md bg-light-background dark:bg-dark-background px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-light-foreground dark:outline-dark-foreground placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-light-foreground"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10"
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => handleMouseLeave(0)}>
            <button
              className="block w-full rounded-md bg-light-hover-background dark:bg-dark-hover-background border-[1px] border-light-foreground dark:border-dark-foreground px-3.5 py-2.5 text-center text-sm font-semibold"
              style={glowStyles[0] || {}}
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="mx-auto max-w-2xl text-center mb-[100px]">
          <p className="mt-2 text-lg/8 px-2">
            Or you could reach out to me at
          </p>
          <a className="block text-balance text-3xl sm:text-5xl font-semibold tracking-tight my-4 group hover:text-foreground transition-all duration-150 ease-in-out break-all sm:break-normal" href="mailto:deepakjha3430@gmail.com">
            <span className="bg-left-bottom bg-gradient-to-r from-light-foreground to-light-foreground dark:from-dark-foreground dark:to-dark-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out break-all sm:break-normal">
              deepakjha3430@gmail.com
              {/* example@email.com */}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
