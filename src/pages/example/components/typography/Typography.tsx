import { Link } from "react-router-dom";
import Card from "../../../../components/card/Card";
import Icon from "../../../../components/icons/Icon";
const lists = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];
const Typography = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="HTML headings Default">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            All HTML headings, are available. .h1 through .h7 classes are also
            available, for when you want to match the font styling of a heading.
          </div>
          <div className="flex items-center justify-between px-6 py-3 mt-6 mb-6 -mx-6 text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            <span>PREVIEW</span>
            <span>FONT SIZE</span>
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h1>Heading 1</h1>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              60px
            </span>
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h2>Heading 2</h2>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              48px
            </span>
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h3>Heading 3</h3>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              36px
            </span>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h4>Heading 4</h4>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              30px
            </span>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h5>Heading 5</h5>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              24px
            </span>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h6>Heading 6</h6>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              20px
            </span>
          </div>
        </Card>
        <Card title="Light / Bold Headings">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            All HTML headings are available with light and bold font-weight. Use
            .font-weight-normal for light heading and .
          </div>
          <div className="flex items-center justify-between px-6 py-3 mt-6 mb-6 -mx-6 text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            <span>LIGHT HEADINGS</span>
            <span>BOLD HEADINGS</span>
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h1 className="font-light">Heading</h1>
            <h1>Heading</h1>
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h2 className="font-light">Heading 2</h2>
            <h2>Heading 2</h2>
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h3 className="font-light">Heading 3</h3>
            <h3>Heading 3</h3>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h4 className="font-light">Heading 4</h4>
            <h4>Heading 4</h4>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h5 className="font-light">Heading 5</h5>
            <h5>Heading 5</h5>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h6 className="font-light">Heading 6</h6>
            <h6>Heading 6</h6>
          </div>
        </Card>
        <div className="col-span-1 lg:col-span-2">
          <Card title="Texts">
            <div className="-mx-6">
              <table className="w-full text-left border-collapse border-none">
                <thead>
                  <tr>
                    <th className="text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                      <span className="block px-6 py-5 text-slate-600 dark:text-slate-300">
                        Type
                      </span>
                    </th>
                    <th className="text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                      <span className="block px-6 py-5 text-slate-600 dark:text-slate-300">
                        Class
                      </span>
                    </th>
                    <th className="text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                      <span className="block px-6 py-5 text-slate-600 dark:text-slate-300">
                        Text
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="px-6 py-4 text-lg font-medium text-left text-slate-900 dark:text-slate-300">
                      Title
                    </td>
                    <td className="px-6 py-4 text-lg font-medium text-left text-slate-900 dark:text-slate-300 t">
                      text-lg
                    </td>
                    <td className="px-6 py-4 text-lg font-medium text-left text-slate-900 dark:text-slate-300">
                      <div>
                        Cupcake ipsum dolor sit amet fruitcake donut chocolate.
                      </div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        font-size: 18px / line-height: 28px / font-weight: 500
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="px-6 py-4 text-base font-normal text-left text-slate-700 dark:text-slate-300">
                      Sub Title
                    </td>
                    <td className="px-6 py-4 text-base text-slate-700 dark:text-slate-300 font-normaltext-left t">
                      text-base
                    </td>
                    <td className="px-6 py-4 text-base font-normal text-left text-slate-700 dark:text-slate-300">
                      <div>
                        Cupcake ipsum dolor sit amet fruitcake donut chocolate.
                      </div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        font-size: 16px / line-height: 24px / font-weight: 400
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="px-6 py-4 text-sm font-normal text-left text-slate-600 dark:text-slate-300">
                      Body Text
                    </td>
                    <td className="px-6 py-4 text-base font-normal text-left text-slate-600 dark:text-slate-300 font-sm t">
                      text-sm
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left text-slate-600 dark:text-slate-300">
                      <div>
                        Cupcake ipsum dolor sit amet fruitcake donut chocolate.
                      </div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        font-size: 14px / line-height: 20px / font-weight: 400
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-xs font-normal text-left text-slate-600 dark:text-slate-300">
                      Small Text
                    </td>
                    <td className="px-6 py-4 text-base font-normal text-left text-slate-600 dark:text-slate-300 font-xs t">
                      text-xs
                    </td>
                    <td className="px-6 py-4 text-xs font-normal text-left text-slate-600 dark:text-slate-300">
                      <div>
                        Cupcake ipsum dolor sit amet fruitcake donut chocolate.
                      </div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        font-size: 12px / line-height: 18px / font-weight: 400
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <Card title="Customizing headings  Default">
          <div className="mb-6 text-sm text-slate-600 dark:text-slate-300">
            Use the included utility classes to recreate the small secondary-500
            heading text.
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h1>Display heading</h1>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h2>Display heading</h2>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h3>Display heading</h3>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h4>Display heading</h4>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h5>Display heading</h5>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h6>Display heading</h6>
          </div>
        </Card>
        <Card title="Heading colors">
          <div className="mb-6 text-sm text-slate-600 dark:text-slate-300">
            Use the included utility classes to recreate the small secondary-500
            heading text.
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h1 className="text-primary-500">Display heading</h1>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h2 className="text-secondary-500">Display heading</h2>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h3 className="text-success-500">Display heading</h3>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h4 className="text-danger-500">Display heading</h4>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h5 className="text-warning-500">Display heading</h5>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h6 className="text-info-500">Display heading</h6>
          </div>
        </Card>

        <Card title="Display Headings">
          <div className="mb-6 text-sm text-slate-600 dark:text-slate-300">
            Traditional heading elements are designed to work best in the meat
            of your page content. When you need a heading to stand out, consider
            using a display heading—a larger, slightly more opinionated heading
            style.
          </div>

          <div className="items-center justify-between mb-6 md:flex">
            <h1 className="display-1">Display 1</h1>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h2 className="display-2">Display 2</h2>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h3 className="display-3">Display 3</h3>
          </div>
          <div className="items-center justify-between mb-6 md:flex">
            <h4 className="display-4">Display 4</h4>
          </div>
        </Card>

        <div className="space-y-5">
          <Card title="Inline Text Elements">
            <div className="space-y-4">
              <p className="text-sm font-light text-slate-600 dark:text-slate-300">
                Styling for common inline HTML5 elements.
              </p>
              <p className="text-sm font-light text-slate-900 dark:text-slate-300">
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
              <p className="text-sm font-light text-slate-900 dark:text-slate-300">
                <Link to="#" className="underline">
                  This line of text is meant to be treated as an addition to the
                  document.
                </Link>
              </p>
              <p className="text-sm font-light text-slate-900 dark:text-slate-300">
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
            </div>
          </Card>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Card title="Text Color">
            <div className="space-y-4">
              <p className="text-sm font-light text-slate-600 dark:text-slate-300">
                Styling for common inline HTML5 elements.
              </p>
              <p className="text-sm font-light text-primary-500">
                Styling for common inline HTML5 elements.
              </p>
              <p className="text-sm font-light text-success-500">
                Styling for common inline HTML5 elements.
              </p>
              <p className="text-sm font-light text-warning-500">
                This is warning-500 text You can archive this adding
                .text-warning-500 class
              </p>
              <p className="text-sm font-light text-danger-500">
                This is danger-500 text You can archive this adding
                .text-danger-500 class
              </p>
            </div>
          </Card>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <Card title="Listing Typography">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
              <div>
                <span className="block mb-6 text-base font-medium leading-8 text-slate-900 dark:text-slate-300">
                  Unorder list.
                </span>
                <ul className="p-6 space-y-3 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-900 dark:text-slate-300"
                    >
                      Lorem ipsum dolor sit amet.
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="block mb-6 text-base font-medium leading-8 text-slate-900 dark:text-slate-300">
                  list-decimal
                </span>
                <ol className="p-6 space-y-3 rounded-md bg-slate-50 dark:bg-slate-700 lits-by-numbaring custom-list">
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> Lorem ipsum dolor sit amet.</span>
                    <ol className="lits-by-numbaring">
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ol>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> Lorem ipsum dolor sit amet.</span>
                  </li>
                </ol>
              </div>

              <div>
                <span className="block mb-6 text-base font-medium leading-8 text-slate-900 dark:text-slate-300">
                  Dash list
                </span>
                <ul className="p-6 space-y-3 rounded-md bg-slate-50 dark:bg-slate-700 custom-list">
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span className="font-medium">
                      {" "}
                      Lorem ipsum dolor sit amet.
                    </span>
                    <ul className="lits-by-slash">
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span className="font-medium">
                      {" "}
                      Lorem ipsum dolor sit amet.
                    </span>
                    <ul className="lits-by-slash">
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span className="font-medium">
                      {" "}
                      Lorem ipsum dolor sit amet.
                    </span>
                    <ul className="lits-by-slash">
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span className="block mb-6 text-base font-medium leading-8 text-slate-900 dark:text-slate-300">
                  Icon List 1
                </span>
                <ul className="p-6 space-y-3 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-sm text-slate-900 dark:text-slate-300 rtl:space-x-reverse"
                    >
                      <span>
                        <Icon icon="heroicons:chevron-double-right" />
                      </span>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block mb-6 text-base font-medium leading-8 text-slate-900 dark:text-slate-300">
                  Icon List 2
                </span>
                <ul className="p-6 space-y-3 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-sm text-slate-900 dark:text-slate-300 rtl:space-x-reverse"
                    >
                      <span>
                        <Icon icon="heroicons:chevron-right" />
                      </span>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block mb-6 text-base font-medium leading-8 text-slate-900 dark:text-slate-300">
                  Icon List 3
                </span>
                <ul className="p-6 space-y-3 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-sm text-slate-900 dark:text-slate-300 rtl:space-x-reverse"
                    >
                      <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
                      <span>Lorem ipsum dolor sit amet.</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card title="Blockquotes">
            <div className="space-y-5">
              <blockquote className="text-slate-900 dark:text-slate-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus laudantium omnis fugit ducimus nulla libero temporibus
                corrupti non voluptatem harum?
                <span className="block mt-3 text-sm text-slate-400">
                  Dashcode Admin Template
                </span>
              </blockquote>
              <blockquote className="text-right border-primary-500 text-slate-900 dark:text-slate-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus laudantium omnis fugit ducimus nulla libero temporibus
                corrupti non voluptatem harum?
                <span className="block mt-3 text-sm text-slate-400">
                  Dashcode Admin Template
                </span>
              </blockquote>
              <blockquote className="text-center border-success-500 text-slate-900 dark:text-slate-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus laudantium omnis fugit ducimus nulla libero temporibus
                corrupti non voluptatem harum?
                <span className="block mt-3 text-sm text-slate-400">
                  Dashcode Admin Template
                </span>
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Typography;
