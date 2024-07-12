import React from "react";
import { atom } from "recoil";
import { AlertAction } from "../../components/alert/AlertAction";

export interface AlertState {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  actions?: AlertAction[];
}

export const alertState = atom<AlertState>({
  key: "alertState",
  default: {
    open: false,
    content: null,
    actions: [],
  },
});