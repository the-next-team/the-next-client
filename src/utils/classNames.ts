type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | { [key: string]: any };

/**
   * @exsample
    // 단일 클래스
    console.log(classNames('foo')); // "foo"

    // 여러 클래스
    console.log(classNames('foo', 'bar')); // "foo bar"

    // Falsy 값 무시
    console.log(classNames('foo', false, null, undefined, 0, NaN, 'bar')); // "foo bar"

    // 배열 처리
    console.log(classNames('foo', ['bar', 'baz'])); // "foo bar baz"

    // 객체 처리
    console.log(classNames({ foo: true, bar: false, baz: true })); // "foo baz"

    // 혼합된 입력
    console.log(classNames('foo', [false, 'bar'], { baz: true }, null, ['qux', ['quux']])); // "foo bar baz qux quux"

   * @param args
   * @returns
   */
function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return; // false, null, undefined, 0, NaN, ""는 무시

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg)); // 배열이면 재귀적으로 처리
    } else if (typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}

export default classNames;
