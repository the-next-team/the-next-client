import logo from "../../assets/images/logo/logo-gray-scale.png";

function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between px-6 py-3 bg-white">
        <img
          className="w-[87px] h-[19px] grayscale select-none"
          src={logo}
          alt=""
        />
        <p className="text-xs text-custom-gray-200">
          Copyright 2024
          <a
            href="#"
            target="_blank"
            className="font-medium text-custom-gray-300"
          >
            &nbsp;THE NEXT&nbsp;
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
