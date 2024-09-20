import { ReactNode } from "react";

export type AlertStatus =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "dark"
  | "hint";

export interface AlertProps {
  status: AlertStatus;
  children: ReactNode;
}
