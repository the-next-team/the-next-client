import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { ICodeItem } from "../../api/services/codeService";
import { codeSelector, codeState } from "../../states/code/codeAtom";

// Option 인터페이스 정의
export interface Option {
  label: string;
  value: string | number;
}

// Props 타입 정의
type Props = {
  label?: string;
  placeholder?: any;
  classLabel?: string;
  onChange: (value: string | string[] | number) => void;
  className?: string;
  maxVisibleOptions?: number;
  zIndex?: number;
  error?: any;
  name?: string;
  readOnly?: any;
  disabled?: boolean;
  essential?: boolean;
  multiple?: boolean;
  id?: string;
  horizontal?: boolean;
  validate?: string;
  codeType: string;
};

const CodeDropdown: React.FC<Props> = ({
  label,
  placeholder = "선택",
  classLabel = "form-label",
  onChange,
  className,
  id = uuidv4(),
  maxVisibleOptions = 5,
  readOnly,
  disabled = false,
  essential = false,
  horizontal = false,
  multiple = false,
  validate,
  error,
  zIndex = 20,
  codeType,
}) => {
  const [options, setOptions] = useRecoilState(codeState(codeType));
  const codeLoadable = useRecoilValueLoadable(codeSelector(codeType));

  useEffect(() => {
    if (codeLoadable.state === "hasValue") {
      setOptions(codeLoadable.contents);
    }
  }, [codeLoadable, setOptions]);
  // 토글 상태와 선택된 값을 관리하는 state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | string[] | null>(
    multiple ? [] : null
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
  const handleOptionClick = (option: ICodeItem) => {
    if (multiple) {
      setSelectedValue((prevSelectedValue) => {
        const prev = prevSelectedValue as string[];
        console.log(prev);
        const updatedSelectedValue = prev.includes(option.code)
          ? prev.filter((code) => code !== option.code)
          : [...prev, option.code];

        onChange(updatedSelectedValue);
        return updatedSelectedValue;
      });
    } else {
      setSelectedValue(option.code);
      onChange(option.code);
      setIsOpen(false);
    }
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
    setSelectedValue(multiple ? [] : null);
  }, [options]);

  // 드롭다운 메뉴 렌더링
  const dropdown = isOpen && (
    <div
      style={{
        position: "absolute",
        zIndex: zIndex,
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left}px`,
        width: `${menuPosition.width}px`,
        overflowY: "auto",
        maxHeight: `200px`,
      }}
      className="w-full overflow-hidden border rounded shadow"
    >
      <div className="px-1 py-1 text-xs text-gray-400 bg-white cursor-pointer dropdown-option">
        {placeholder}
      </div>
      {options.map((option) => (
        <div
          key={option.code}
          className="flex items-center gap-2 px-1 py-1 text-xs bg-white cursor-pointer dropdown-option hover:bg-gray-200"
          onClick={() => handleOptionClick(option)}
        >
          {multiple && (
            <span className="flex items-center justify-center w-4 border rounded shrink-0 aspect-square dropdown-option">
              {(selectedValue as string[]).find((f) => f === option.code) && (
                <Icon icon="heroicons:check" width={12} />
              )}
            </span>
          )}
          <p className="dropdown-option">{option.name}</p>
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
          className={`block shrink-0 capitalize break-keep ${classLabel}  ${
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
          <p
            className={`${
              error ? " has-error" : " "
            } form-control text-clip overflow-hidden line-clamp-1 cursor-pointer py-1 text-xs appearance-none border-slate-300 ${
              readOnly
                ? "bg-white"
                : essential
                  ? "bg-warning-100"
                  : "bg-primary-50"
            } ${className}`}
          >
            {multiple
              ? Array.isArray(selectedValue) && selectedValue.length > 0
                ? selectedValue
                    .map(
                      (f) => options.find((option) => option.code === f)?.name
                    )
                    .join(",")
                : placeholder
              : selectedValue
                ? options.find((option) => option.code === selectedValue)?.name
                : placeholder}
          </p>
          {/* 아이콘 렌더링 */}
          <Icon
            icon="heroicons:chevron-down"
            width={16}
            className="absolute right-2"
          />
        </div>
      </div>
      {/* 드롭다운 메뉴를 Portal을 사용하여 렌더링 */}
      {ReactDOM.createPortal(dropdown, document.body)}
    </div>
  );
};

export default CodeDropdown;
