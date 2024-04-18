import axios from "axios";
import { LANGUAGES } from "./languages";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, code) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGES[language],
    files: [
      {
        content: code,
      },
    ],
  });

  return response.data;
};
