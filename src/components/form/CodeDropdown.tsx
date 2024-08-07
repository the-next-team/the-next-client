import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";

// Option 인터페이스 정의
export interface Option {
  label: string;
  value: string | number;
}

// Props 타입 정의
type Props = {
  label?: string;
  placeholder?: any;
  options: Option[];
  classLabel?: string;
  onChange: (value: string | number) => void;
  defaultValue?: string | number;
  className?: string;
  maxVisibleOptions?: number;
  zIndex?: number;
  error?: any;
  name?: string;
  readonly?: any;
  disabled?: boolean;
  essential?: boolean;
  id?: string;
  horizontal?: boolean;
  validate?: string;
};

const CodeDropdown: React.FC<Props> = ({
  label,
  placeholder = "선택",
  options,
  classLabel = "form-label",
  onChange,
  defaultValue,
  className,
  id = uuidv4(),
  maxVisibleOptions = 5,
  readonly,
  disabled = false,
  essential = false,
  horizontal = false,
  validate,
  error,
  zIndex = 20,
}) => {
  // 토글 상태와 선택된 값을 관리하는 state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0].value
  );

  // 드롭다운 메뉴의 위치를 관리하는 state
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  // 컨테이너 요소의 참조
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 옵션 클릭 핸들러
  const handleOptionClick = (option: Option) => {
    setSelectedValue(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  // 외부 클릭을 감지하여 드롭다운을 닫는 이펙트
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        Array.from(document.querySelectorAll(".dropdown-option")).includes(
          event.target
        )
      ) {
        return;
      }
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // 드롭다운의 위치를 계산하는 이펙트
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  // 기본 값 설정 이펙트
  useEffect(() => {
    setSelectedValue(defaultValue || options[0].value);
  }, [defaultValue, options]);

  // 드롭다운 메뉴 렌더링
  const overflowY = options.length <= maxVisibleOptions ? "hidden" : "scroll";
  const dropdown = isOpen && (
    <div
      style={{
        position: "absolute",
        zIndex: zIndex,
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left}px`,
        width: `${menuPosition.width}px`,
        overflowY: overflowY,
        maxHeight: `200px`,
      }}
      className="w-full overflow-hidden border rounded shadow"
    >
      <div className="px-1 py-1 text-xs text-gray-400 bg-white cursor-pointer dropdown-option">
        {placeholder}
      </div>
      {options.map((option) => (
        <div
          key={option.value}
          className="px-1 py-1 text-xs bg-white cursor-pointer dropdown-option hover:bg-gray-200"
          onClick={() => handleOptionClick(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`fromGroup relative ${error ? "has-error" : ""}  ${
        horizontal ? "flex items-baseline" : ""
      }  ${validate ? "is-valid" : ""} `}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize break-keep ${classLabel}  ${
            horizontal
              ? "flex-0 ml-2 text-xs text-right mr-2 md:w-[100px] w-[60px] break-words"
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`relative ${horizontal ? "flex-1" : ""}`}
        onClick={toggleDropdown}
        ref={containerRef}
      >
        <div className="relative flex items-center">
          <span
            className={`${
              error ? " has-error" : " "
            } form-control cursor-pointer py-1 text-xs appearance-none border-slate-300 ${
              readonly
                ? "bg-slate-100"
                : essential
                ? "bg-warning-100"
                : "bg-primary-50"
            } ${className}`}
          >
            {options.find((option) => option.value === selectedValue)?.label}
          </span>
          {/* 아이콘 렌더링 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            className="absolute right-2"
          >
            <path
              d="M4.49041 6.72C4.27245 7.09333 3.72755 7.09333 3.50959 6.72L0.0767116 0.839999C-0.141249 0.466666 0.131202 -3.76869e-08 0.567123 0L7.43288 5.93569e-07C7.8688 6.31256e-07 8.14125 0.466667 7.92329 0.840001L4.49041 6.72Z"
              fill="#282828"
            />
          </svg>
        </div>
      </div>
      {/* 드롭다운 메뉴를 Portal을 사용하여 렌더링 */}
      {ReactDOM.createPortal(dropdown, document.body)}
    </div>
  );
};

export default CodeDropdown;
