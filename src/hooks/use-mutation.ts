import { useState } from "react";

interface Params {
  mutationFn: (data: any) => void;
}

export const useCustomMutation = ({ mutationFn }: Params) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);

  const mutate = (data: any) => {
    mutationFn(data);
    console.log(data);
  };

  return {
    submitData: data,
    isSuccess,
    mutate,
  };
};
