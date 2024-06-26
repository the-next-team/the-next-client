import { menuItems } from "../constants/data";

const TabMenuUtil = {
  findElement: (link: string) => {
    let element = null;
    menuItems.forEach((item) => {
      if (item.items) {
        item.items.forEach((i) => {
          if (i.items) {
            i.items.forEach((m) => {
              if (m.url === link) {
                element = m.element;
              }
            });
          } else if (i.url === link) {
            element = i.element;
          }
        });
      } else if (item.url === link) {
        element = item.element;
      }
    });
    return element;
  },
  findTitle: (link: string) => {
    let title: Array<string> = [];
    if (link) {
      menuItems.forEach((item) => {
        if (item.items) {
          item.items.forEach((i) => {
            if (i.items) {
              i.items.forEach((m) => {
                if (m.url === link) {
                  title.push(item.name);
                  title.push(i.name ?? "");
                  title.push(m.name);
                }
              });
            } else if (i.url === link) {
              title.push(item.name);
              title.push(i.name ?? "");
            }
          });
        } else if (item.url === link) {
          title.push(item.name);
        }
      });
    }
    return title;
  },
  // programId로 url 찾기
  findURLByProgramId: (programId: string) => {
    let url = null;
    menuItems.forEach((item) => {
      if (item.items) {
        item.items.forEach((i) => {
          if (i.items) {
            i.items.forEach((m) => {
              if (m.programId === programId) {
                url = m.url;
              }
            });
          } else if (i.programId === programId) {
            url = i.url;
          }
        });
      } else if (item.programId === programId) {
        url = item.url;
      }
    });
    return url;
  },
};

export default TabMenuUtil;
