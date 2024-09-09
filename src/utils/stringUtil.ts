/**
 * 문자열 Utility
 */
const StringUtil = {
  /**
   * 입력받은 문자를 전화번호, 핸드폰 번호에 맞게 변환하여 응답.
   * @param value 입력 데이터
   * @param separator 구분 기호 (option)
   * @returns
   */
  PhoneNumberFormat: (value: string, separator: string = "-") => {
    let s = separator;
    return value
      .replace(/\D/g, "") // 숫자만 남기기
      .slice(0, 11) // 최대 길이 제한 (11자리)
      .replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1${s}$2${s}$3`); // 포맷팅
  },
  /**
   * 입력받은 문자를 주민번호에 맞게 변환하여 응답.
   * @param value 입력 데이터
   * @param separator 구분 기호 (option)
   * @returns
   */
  ResidentNumberFormat: (value: string, separator: string = "-") => {
    let s = separator;
    return value
      .replace(/\D/g, "") // 숫자만 남기기
      .slice(0, 13) // 최대 길이 제한 (13자리)
      .replace(/(\d{6})(\d{7})/, `$1${s}$2`); // 포맷팅
  },
  /**
   * 입력받은 문자를 카드번호에 맞게 변환하여 응답.
   * @param value 입력 데이터
   * @param separator 구분 기호 (option)
   * @returns
   */
  CreditCardFormat: (value: string, separator: string = " ") => {
    let s = separator;
    return value
      .replace(/\D/g, "") // 숫자만 남기기
      .slice(0, 16) // 최대 길이 제한 (16자리)
      .replace(/(\d{4})(?=\d)/g, `$1${s}`); // 포맷팅
  },
};

export default StringUtil;
