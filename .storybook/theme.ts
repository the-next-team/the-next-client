import { create } from "@storybook/theming/create";
import logo from "../src/assets/images/logo/smart-SFIS-logo@2x.png";

export default create({
  base: "light",
  brandUrl: "/",
  brandImage: logo,
  brandTarget: "_self",
});
