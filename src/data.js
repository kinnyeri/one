const MENUS = [
  {
    id: 49,
    name: "홈",
    description: "홈",
    path: "/",
    childMenus: [
      { id: 50, type: "MENU", name: "홈", description: "홈", path: "/" },
    ],
  },
  {
    id: 1,
    name: "미용사회소개",
    description: "미용사회소개",
    path: "/about/1",
    childMenus: [
      {
        id: 2,
        type: "MENU",
        name: "회장인사",
        description: "회장인사",
        path: "/about/1",
      },
      {
        id: 3,
        type: "MENU",
        name: "협회소개",
        description: "협회소개",
        path: "/about/2",
      },
    ],
  },
  {
    id: 5,
    name: "산하위원회",
    description: "산하위원회",
    path: "/committee/0",
    childMenus: [
      {
        id: 6,
        type: "MENU",
        name: "홍보위원회",
        description: "홍보 위원회",
        path: "/committee/0",
      },
      {
        id: 7,
        type: "MENU",
        name: "미용기술위원회",
        description: "미용기술위원회",
        path: "/committee/1",
      },
    ],
  },
];
export default MENUS;
