import { useState } from "react";
type KeyType = "products" | "category";

interface Params {
  key: KeyType;
}

export const useCustomMutation = ({ key }: Params) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);

  const mutationFn = (data: any) => {
    console.log(data);
  };

  return {
    submitData: data,
    isSuccess,
    mutationFn,
  };
};
