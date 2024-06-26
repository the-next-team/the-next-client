export class AlertAction {
    title: string;
    type: string;
    handler?: () => void;

    constructor(
      title: string,
      type: "normal" | "success" | "error" | "cancel",
      handler?: () => void
    ) {
      this.title = title;
      this.handler = handler;
      this.type = type;
    }
  }

  export const alertStyle = (type: string) => {
    switch (type) {
      case "normal":
        return "bg-custom-grey-100";
      case "success":
        return "bg-primary text-white";
      case "cancel":
        return "bg-white text-primary border border-primary";
      default:
        return "bg-white";
    }
  };
