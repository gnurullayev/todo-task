import { ReactNode } from "react";

export interface ISelectData {
  value: string;
  label: string;
}

export interface FormParams {
  mode: "edit" | "view" | "create";
  formFooter: ReactNode;
  mutate?: (a: any) => void;
}
