import { create } from "@storybook/theming/create";
import logo from "./logo.png";

export default create({
  base: "light",
  brandUrl: "/",
  brandImage: logo,
  brandTarget: "_self",
});
