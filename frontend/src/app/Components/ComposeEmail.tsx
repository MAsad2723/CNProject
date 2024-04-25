"use client";
import React, { useState } from "react";
import axios from "axios";

const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const url = "http://localhost:8000/email";

const ComposeEmail: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [recipient, setRecipient] = useState("");
  const [text, setText] = useState("");

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setRecipient(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can implement your logic to send the email
    const rec: any = recipient.split(",");
    rec.forEach((elem: string, i: number) => {
      elem = elem.replace(/\s/g, "");
      if (!elem.toLowerCase().match(regex)) {
        alert("Invalid Email");
        throw new Error("Invalid Email");
      }
      rec[i] = elem;
    });
    console.log("Subject:", subject);
    console.log("Recipient:", rec);
    console.log("Body:", text);

    // POST subject,rec and text here
    axios.post(url, { rec, subject, text }).then((response) => {
      console.log(response.status, response.data.token);
    });
    setSubject("");
    setRecipient("");
    setText("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-indigo-900/80">
      <div className=" min-w-[300px] md:min-w-[700px] mx-auto mt-10 sm:mt-[100px] p-10 text-white bg-indigo-400 rounded-2xl shadow-xl">
        <h1 className="text-2xl text-center font-semibold mb-4">New Message</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="recipient" className="block font-semibold">
              Receipents:
            </label>
            <input
              id="recipient"
              // type="email"
              value={recipient}
              onChange={handleRecipientChange}
              className="bg-indigo-900/40 p-3 mt-1 w-full rounded-full shadow-xl focus:ring-1 focus:ring-indigo-800 focus:outline-none"
            />
          </div>
          <div className="">
            <input
              placeholder="Subject:"
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              className=" bg-indigo-900/40 p-3 mt-1 w-full rounded-t-2xl shadow-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="body"
              value={text}
              placeholder="Body: "
              onChange={handleBodyChange}
              className="font-extralight bg-indigo-900/40 p-3 w-full rounded-b-3xl shadow-xl focus:outline-none"
              rows={15}
            />
          </div>
          <div className="relative h-10">
            <button
              type="submit"
              className="absolute bottom-0 right-0 w-full bg-indigo-900/80 text-white py-3  rounded-full hover:bg-indigo-900 focus:outline-none focus:bg-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComposeEmail;
