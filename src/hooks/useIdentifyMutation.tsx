import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/PersonData";
import axios from "axios";

const postData = (data: PersonData) => {
  return axios.post("http://localhost:8080/send-data", data)
}

export function useIdentifyMutation() {
  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: (data: PersonData) => postData(data)
  })

  return {
    mutate,
    isError,
    isSuccess
  }
}