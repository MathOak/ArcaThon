"use client";
import { useContext, useState } from "react";
import { createToken } from "@/services/crypto.config";
import { UserContext } from "@/context/UserContext";
import api from "@/services/axios/config";

export default function Home() {
  "use client";
  const { wallet } = useContext(UserContext);
  const [label, setLabel] = useState("");

  const onClick = async (): Promise<string> => {
    console.log("click");

    try {
      console.log(wallet);
      
      const body = {
        wallet,
      };
      const { data } = await api.post("createToken", body);
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);

      return "Error";
    }
  };

  return (
    <div>
      <button
        onClick={async () => {
          let a = "";
          a = await onClick();
          setLabel(a);
        }}
      >
        TEST{" "}
      </button>
    </div>
  );
}
