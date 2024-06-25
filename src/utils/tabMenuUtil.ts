import { menuItems } from "../constants/data";

const TabMenuUtil = {
  findElement: (link: string) => {
    let element = null;
    menuItems.forEach((item) => {
      if (item.child) {
        item.child.forEach((i) => {
          if (i.multi_menu) {
            i.multi_menu.forEach((m) => {
              if (m.multiLink === link) {
                element = m.multiElement;
              }
            });
          } else if (i.childlink === link) {
            element = i.childElement;
          }
        });
      } else if (item.link === link) {
        element = item.element;
      }
    });
    return element;
  },
  findTitle: (link: string) => {
    let title: Array<string> = [];
    if (link) {
      menuItems.forEach((item) => {
        if (item.child) {
          item.child.forEach((i) => {
            if (i.multi_menu) {
              i.multi_menu.forEach((m) => {
                if (m.multiLink === link) {
                  title.push(item.title);
                  title.push(i.childtitle ?? "");
                  title.push(m.multiTitle);
                }
              });
            } else if (i.childlink === link) {
              title.push(item.title);
              title.push(i.childtitle ?? "");
            }
          });
        } else if (item.link === link) {
          title.push(item.title);
        }
      });
    }
    return title;
  },
};

export default TabMenuUtil;
