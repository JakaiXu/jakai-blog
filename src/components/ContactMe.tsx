import React, { useRef,  } from "react";
import { MutableRefObject } from "react";
import Card from "./UI/Card";
import Profile from "./Profile";
import classNames from "classnames";
import { usePostContactByNameMutation } from "../store";
const ContactMe = () => {
  const inputClass = classNames("h-10 mb-3 rounded-lg pl-2");
  const [createContact, { isLoading, isSuccess }] =
    usePostContactByNameMutation();

  const nameInputText = useRef() as MutableRefObject<HTMLInputElement>;
  const emailInputText = useRef() as MutableRefObject<HTMLInputElement>;
  const messageInputText = useRef() as MutableRefObject<HTMLInputElement>;

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameInputText.current.value;
    const email = emailInputText.current.value;
    const message = messageInputText.current.value;
    createContact({ name, email, message });
  };

  return (
    <Card>
      <div className="flex justify-between text-left">
        <div className="sm:m-[4%] w-[35%] text-left">
          <h2 className="text-gray-500 pt-5 pl-5">C O N T A C T M E</h2>
          <div className="pt-40 pr-20">
            <Profile />
          </div>
        </div>
        <div className="text-gray-500 m-10 w-[65%] ">
          <h2 className="text-white sm:text-6xl my-5 font-bold">
            Let's Collaborate!
          </h2>
          <p className="mb-5 ">
            If you are interest with my experience, feel free to contact with
            me. I will message you back within 48 hours during business time. I
            am pleased to meet you here.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col pb-10">
            {!isLoading && !isSuccess && (
              <>
                <input
                  placeholder="Name"
                  ref={nameInputText}
                  type="text"
                  className={inputClass}
                  onChange={(e) => {
                    e.target.value;
                  }}
                />
                <input
                  onChange={(e) => {
                    e.target.value;
                  }}
                  placeholder="Email"
                  ref={emailInputText}
                  type="email"
                  className={inputClass}
                />
                <input
                  onChange={(e) => {
                    e.target.value;
                  }}
                  ref={messageInputText}
                  placeholder="Message"
                  type="text"
                  className={`${inputClass} h-20`}
                />
                <button className="bg-orange-500 h-10 rounded-lg text-white">
                  Submit
                </button>
              </>
            )}
            {isLoading && (
              <div className="border border-orange-500 rounded-xl p-5 mr-5">
                <p className="text-white font-bold">
                  Just a moment, I am sending your data to Jakai Xu now! 😄
                </p>
              </div>
            )}
            {isSuccess && (
              <div className="border border-orange-500 rounded-xl bg-orange-500 p-5 mr-5">
                <p className="text-white font-bold">
                  Thank you for your Contacting, I will message back soon, have
                  good day! 😄
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Card>
  );
};

export default ContactMe;
