import { ReactNode } from "react";

export interface ISelectData {
  value: string;
  label: string;
}

export interface IIconComponent {
  fill?: string;
  stroke?: string;
}

export interface IParams {
  pi?: number;
  ps?: number;
  s?: string;
  ot?: string;
}

export interface FormStateParams {
  queryKey?: string;
}

export interface FormParams {
  mode: "edit" | "view" | "create";
  formFooter: ReactNode;
  mutate?: (a: any) => void;
}
