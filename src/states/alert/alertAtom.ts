import React from "react";
import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { AlertAction } from "../../components/alert/AlertAction";

export interface AlertState {
  open: boolean;
  title?: string;
  content?: React.ReactNode;
  actions?: AlertAction[];
}

export const alertState = atom<AlertState>({
  key: `alertState-${uuidv4()}`,
  default: {
    open: false,
    content: null,
    actions: [],
  },
});