import React from "react";
import { useState } from "react";
import { db } from "../utils/firebase";
import { push, ref } from "firebase/database";
import { useModalContext } from "../context/ModalContextProvider";

const Noti = ({ email }) => {
  return (
    <div>
      <h3>Successfully Subscribe</h3>
      <p>Your Email: {email}</p>
    </div>
  );
};

function useSubsciption() {
  const [email, setEmail] = useState("");
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const invalid = (!emailReg.test(email) || email.length > 20) && email !== "";
  const onChange = ({ target }) => setEmail(target.value);
  const { setOpen, setIsShow, setContent } = useModalContext();
  const submit = async () => {
    if (email === "") return;
    try {
      const dbRef = ref(db, "/sub");
      await push(dbRef, email);
    } catch (err) {
      console.error(err);
    } finally {
      setOpen(
        "Congratulations",
        {
          label: "Ok",
          onClick: () => {},
        },
        Noti({ email })
      );
      setEmail("");
    }
  };
  return { email, invalid, onChange, submit };
}

export default useSubsciption;
