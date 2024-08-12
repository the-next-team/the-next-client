import { HashRouter } from "react-router-dom";
import Modal from "../../../components/modal/ExampleModal";
import { StoryObj } from "@storybook/react/*";
import Button from "../../../components/button/Button";
import TextInput from "../../../components/form/TextInput";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    componentSubtitle: "modal",
    docs: {
      description: {
        component:
          "기본 창과 겹쳐서 가장 상단에 표시되며 단일한 과업 또는 메시지에 집중할 수 있도록 사용합니다.",
      },
    },
  },
  argTypes: {},
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    title: "Modal",
    label: "Modal",
    labelClass: "btn-outline-dark",
    uncontrol: true,
  },
};

// Basic Modal
export const BasicModal: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Modal
      title="Basic Modal"
      label="Basic Modal"
      labelClass="btn-outline-dark"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Basic Modal </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Basic Modal
      </div>
    </Modal>
    <Modal
      title="Vertically center"
      label="Vertically center"
      labelClass="btn-outline-dark"
      uncontrol
      centered
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Vertically center
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Vertically center
      </div>
    </Modal>
    <Modal
      title="Disabled backdrop"
      label="Disabled backdrop"
      labelClass="btn-outline-dark"
      uncontrol
      disableBackdrop
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Disabled backdrop{" "}
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Disabled backdrop
      </div>
    </Modal>
    <Modal
      title="Disabled animation"
      label="Disabled animation"
      labelClass="btn-outline-dark"
      uncontrol
      noFade
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Disabled animation
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Disabled animation
      </div>
    </Modal>
  </div>
);
BasicModal.args = {
  ...BasicModal.args,
};

//Themes Modal
export const ThemesModal: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Modal
      title="Primary"
      label="Primary "
      labelClass="btn-outline-primary"
      themeClass="bg-primary-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-primary "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Primary Modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Primary Modal
      </div>
    </Modal>
    <Modal
      title="Secondary"
      label="Secondary "
      labelClass="btn-outline-secondary"
      themeClass="bg-secondary-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-secondary "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Secondary Modal
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Secondary Modal
      </div>
    </Modal>
    <Modal
      title="Success"
      label="Success "
      labelClass="btn-outline-success"
      themeClass="bg-success-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-success "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Success Modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Success Modal
      </div>
    </Modal>
    <Modal
      title="info"
      label="info "
      labelClass="btn-outline-info"
      themeClass="bg-info-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-info "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">info Modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        info Modal
      </div>
    </Modal>
    <Modal
      title="Warning"
      label="Warning "
      labelClass="btn-outline-warning"
      themeClass="bg-warning-500"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-warning "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Warning Modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        Warning Modal
      </div>
    </Modal>
    <Modal
      title="Light"
      label="Light "
      labelClass="btn-outline-light"
      themeClass="bg-slate-600 text-slate-900"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="text-white bg-slate-600"
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Light Modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Light Modal
      </div>
    </Modal>
  </div>
);
ThemesModal.args = {
  ...ThemesModal.args,
};

//Size Modal
export const SizeModal: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Modal
      title="Extra small"
      label="Extra small"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-xs"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Extra small Modal
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Extra small Modal
      </div>
    </Modal>
    <Modal
      title="Small modal"
      label="Small modal"
      labelClass="btn-outline-dark"
      className="max-w-md"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Small modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Small modal
      </div>
    </Modal>
    <Modal
      title="Default modal"
      label="Default modal"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-xs"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Default modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Default modal
      </div>
    </Modal>
    <Modal
      title="Large modal"
      label="Large modal"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-5xl"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">Large modal</h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Large modal
      </div>
    </Modal>
    <Modal
      title="Extra large modal"
      label="Extra large modal"
      labelClass="btn-outline-dark"
      uncontrol
      className="max-w-fit"
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Extra large modal
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Extra large modal
      </div>
    </Modal>
  </div>
);
SizeModal.args = {
  ...SizeModal.args,
};

// Form & Scrolling Modals
export const ScrollingModal: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Modal
      title="Login Form Modal"
      label="Login Form"
      labelClass="btn-outline-dark"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <div className="text-base text-slate-600 dark:text-slate-300">
        <TextInput label="Email" type="email" placeholder="Type your email" />
        <TextInput
          label="Password"
          type="password"
          placeholder="8+ characters, 1 capitat letter "
        />
      </div>
    </Modal>
    <Modal
      title="Scrolling Long Content Modal"
      label="Scrolling Long Content "
      labelClass="btn-outline-dark"
      uncontrol
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
    <Modal
      title="Scrollable Content Modal"
      label="Scrollable Content"
      labelClass="btn-outline-dark"
      uncontrol
      scrollContent
      footerContent={
        <Button
          text="Accept"
          className="btn-dark "
          onClick={() => {
            alert("use Control Modal");
          }}
        />
      }
    >
      <h4 className="mb-3 text-lg font-medium text-slate-900">
        Lorem ipsum dolor sit.
      </h4>
      <div className="text-base text-slate-600 dark:text-slate-300">
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
        <br />
        <br />
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy
        dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
        topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
        liquorice.
      </div>
    </Modal>
  </div>
);
ScrollingModal.args = {
  ...ScrollingModal.args,
};
