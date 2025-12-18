// ==========================================
// config.js - 2025 跨年親子遊行程資料 (修正版)
// ==========================================

// 1. APP 基本設定
window.APP_LOGO = "logo.jpg";

window.CURRENCY_OPTIONS = [
  { code: "TWD", symbol: "NT$", label: "台幣" },
  { code: "JPY", symbol: "¥", label: "日幣" },
  { code: "USD", symbol: "$", label: "美金" },
];

window.STAY_OPTIONS = [
  "30 min",
  "1 hr",
  "1.5 hr",
  "2 hr",
  "2.5 hr",
  "3 hr",
  "4 hr",
  "5 hr",
  "Overnight",
  "-",
];

// 2. 行程詳細資料 (由 KML 轉換)
window.RAW_KML_DATA = [
  {
    dayId: "day1",
    date: "12/31 (三)",
    title: "跨年出發與渡假",
    themeColor: "bg-[#E4C2C1]",
    spots: [
      {
        name: "溫暖的家",
        lat: 25.0665561,
        lon: 121.5105023,
        desc: "旅程起點。",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "統一渡假村馬武督渡假會議中心",
        lat: 24.7671155,
        lon: 121.2177233,
        desc: "入住與活動。",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
  {
    dayId: "day2",
    date: "1/1 (四)",
    title: "元旦親子時光",
    themeColor: "bg-[#A9BFA8]",
    spots: [
      {
        name: "統一渡假村馬武督渡假會議中心",
        lat: 24.7671155,
        lon: 121.2177233,
        desc: "早晨活動與退房。",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "1895乙未保台紀念公園",
        lat: 24.948274,
        lon: 121.2054549,
        desc: "歷史文化巡禮與散步。",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
];

// 3. 航班與交通資訊
window.FLIGHT_INFO = {
  outbound: {
    flight: "自駕/高鐵",
    airline: "交通",
    from: "台北",
    to: "新竹",
    dep: "09:00",
    arr: "10:30",
    date: "12/31 (三)",
    duration: "1h 30m",
  },
  inbound: {
    flight: "自駕/高鐵",
    airline: "交通",
    from: "新竹",
    to: "台北",
    dep: "15:00",
    arr: "16:30",
    date: "1/1 (四)",
    duration: "1h 30m",
  },
};

// 4. 住宿資訊
window.HOTEL_INFO = [
  {
    day: "12/31",
    name: "統一渡假村馬武督渡假會議中心",
    location: "新竹關西",
    desc: "親子度假飯店",
    link: "http://googleusercontent.com/maps.google.com/search?q=統一渡假村馬武督渡假會議中心",
    lat: 24.7671155,
    lon: 121.2177233,
  },
];

// 5. 圖標庫 (Icons) - 修正語法錯誤
const e = React.createElement;
window.Icons = {
  Plane: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M2 12h5" }),
      e("path", { d: "M13 12h3" }),
      e("path", {
        d: "M19.74 7.33a2.3 2.3 0 0 1 2.93 2.93l-3.33 3.33a2.3 2.3 0 0 1-3.25 0l-7.34-7.34a2.3 2.3 0 0 1 0-3.25l3.33-3.33z",
      }),
      e("path", { d: "M14.66 14.66 9 22H2l2.5-9" }),
      e("path", { d: "M7 17l-5 5" })
    ),
  Smile: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 12, cy: 12, r: 10 }),
      e("path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }),
      e("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      e("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })
    ),
  List: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("line", { x1: 8, x2: 21, y1: 6, y2: 6 }),
      e("line", { x1: 8, x2: 21, y1: 12, y2: 12 }),
      e("line", { x1: 8, x2: 21, y1: 18, y2: 18 }),
      e("line", { x1: 3, x2: 3.01, y1: 6, y2: 6 }),
      e("line", { x1: 3, x2: 3.01, y1: 12, y2: 12 }),
      e("line", { x1: 3, x2: 3.01, y1: 18, y2: 18 })
    ),
  LayoutGrid: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 7, height: 7, x: 3, y: 3, rx: 1 }),
      e("rect", { width: 7, height: 7, x: 14, y: 3, rx: 1 }),
      e("rect", { width: 7, height: 7, x: 14, y: 14, rx: 1 }),
      e("rect", { width: 7, height: 7, x: 3, y: 14, rx: 1 })
    ),
  Calculator: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 16, height: 20, x: 4, y: 2, rx: 2 }),
      e("line", { x1: 8, x2: 16, y1: 6, y2: 6 }),
      e("line", { x1: 16, x2: 16, y1: 14, y2: 18 }),
      e("path", { d: "M16 10h.01" }),
      e("path", { d: "M12 10h.01" }),
      e("path", { d: "M8 10h.01" }),
      e("path", { d: "M12 14h.01" }),
      e("path", { d: "M8 14h.01" }),
      e("path", { d: "M12 18h.01" }),
      e("path", { d: "M8 18h.01" })
    ),
  Clock: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 12, cy: 12, r: 10 }),
      e("polyline", { points: "12 6 12 12 16 14" })
    ),
  Wallet: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }),
      e("path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }),
      e("path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" })
    ),
  MapPin: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
      e("circle", { cx: 12, cy: 10, r: 3 })
    ),
  Ticket: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      }),
      e("path", { d: "M13 5v2" }),
      e("path", { d: "M13 17v2" }),
      e("path", { d: "M13 11v2" })
    ),
  Navigation2: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", { points: "12 2 19 21 12 17 5 21 12 2" })
    ),
  Settings: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      }),
      e("circle", { cx: 12, cy: 12, r: 3 })
    ),
  Sparkles: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      }),
      e("path", { d: "M5 3v4" }),
      e("path", { d: "M9 3v4" }),
      e("path", { d: "M3 5h4" }),
      e("path", { d: "M3 9h4" })
    ),
  Check: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polyline", { points: "20 6 9 17 4 12" })
    ),
  X: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M18 6 6 18" }),
      e("path", { d: "m6 6 12 12" })
    ),
  Sun: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 12, cy: 12, r: 4 }),
      e("path", { d: "M12 2v2" }),
      e("path", { d: "M12 20v2" }),
      e("path", { d: "m4.93 4.93 1.41 1.41" }),
      e("path", { d: "m17.66 17.66 1.41 1.41" }),
      e("path", { d: "M2 12h2" }),
      e("path", { d: "M20 12h2" }),
      e("path", { d: "m6.34 17.66-1.41 1.41" }),
      e("path", { d: "m19.07 4.93-1.41 1.41" })
    ),
  CloudSnow: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
      }),
      e("path", { d: "M8 15h.01" }),
      e("path", { d: "M8 19h.01" }),
      e("path", { d: "M12 17h.01" }),
      e("path", { d: "M12 21h.01" }),
      e("path", { d: "M16 15h.01" }),
      e("path", { d: "M16 19h.01" })
    ),
  Cloud: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3.1-6-6.5-6-3.7 0-6.6 2.8-6.9 6.4h-.1C2.1 16.4 0 18.5 0 21c0 2.2 1.8 4 4 4h13.5c2.2 0 4-1.8 4-4",
      })
    ),
  Car: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7.7c-.7 0-1.3.3-1.8.7-.9.9-2.2 2.3-2.2 2.3S1 10.6 1 11.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2",
      }),
      e("path", { d: "M2.5 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }),
      e("path", { d: "M16.5 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }),
      e("path", { d: "M12 9V6" })
    ),
  Footprints: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 1.25-.38 2-1.28 2.55-.4.25-.72.82-.72 1.25V16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 2 13 3.8 13 8c0 1.25.38 2 1.28 2.55.4.25.72.82.72 1.25V16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z",
      })
    ),
  Navigation: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", { points: "3 11 22 2 13 21 11 13 3 11" })
    ),
  ExternalLink: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
      e("polyline", { points: "15 3 21 3 21 9" }),
      e("line", { x1: 10, x2: 21, y1: 14, y2: 3 })
    ),
  Mail: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }),
      e("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
    ),
  ArrowDown: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M12 5v14" }),
      e("path", { d: "m19 12-7 7-7-7" })
    ),
  ArrowRightLeft: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "m16 3 4 4-4 4" }),
      e("path", { d: "M20 7H4" }),
      e("path", { d: "m8 21-4-4 4-4" }),
      e("path", { d: "M4 17h16" })
    ),
  Search: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 11, cy: 11, r: 8 }),
      e("path", { d: "m21 21-4.3-4.3" })
    ),
  Hotel: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
      }),
      e("path", { d: "M7 2v18" }),
      e("path", { d: "M17 2v18" }),
      e("path", { d: "M2 12h20" }),
      e("path", { d: "M2 17h20" })
    ),
  Fuel: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("line", { x1: 3, x2: 15, y1: 22, y2: 22 }),
      e("line", { x1: 4, x2: 14, y1: 9, y2: 9 }),
      e("path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }),
      e("path", {
        d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      })
    ),
  Store: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
      }),
      e("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
      e("path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }),
      e("path", { d: "M2 7h20" }),
      e("path", {
        d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      })
    ),
  Bot: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M12 8V4H8" }),
      e("rect", { width: 16, height: 12, x: 4, y: 8, rx: 2 }),
      e("path", { d: "M2 14h2" }),
      e("path", { d: "M20 14h2" }),
      e("path", { d: "M15 13v2" }),
      e("path", { d: "M9 13v2" })
    ),
  Camera: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      }),
      e("circle", { cx: 12, cy: 13, r: 3 })
    ),
  Image: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
      e("circle", { cx: 9, cy: 9, r: 2 }),
      e("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ),
  Utensils: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }),
      e("path", { d: "M7 2v20" }),
      e("path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })
    ),
  LocateFixed: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("line", { x1: 2, x2: 5, y1: 12, y2: 12 }),
      e("line", { x1: 19, x2: 22, y1: 12, y2: 12 }),
      e("line", { x1: 12, x2: 12, y1: 2, y2: 5 }),
      e("line", { x1: 12, x2: 12, y1: 19, y2: 22 }),
      e("circle", { cx: 12, cy: 12, r: 7 }),
      e("circle", { cx: 12, cy: 12, r: 3 })
    ),
  Shield: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
    ),
  ShoppingBasket: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "m5 11 4-7" }),
      e("path", { d: "m19 11-4-7" }),
      e("path", { d: "M2 11h20" }),
      e("path", {
        d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",
      }),
      e("path", { d: "m9 11 1 9" }),
      e("path", { d: "m4.5 11 .1 8.1" }),
      e("path", { d: "m19.5 11-.1 8.1" }),
      e("path", { d: "m15 11-1 9" })
    ),
  Star: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      })
    ),
  ShoppingBag: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
      e("path", { d: "M3 6h18" }),
      e("path", { d: "M16 10a4 4 0 0 1-8 0" })
    ),
  Coffee: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M10 2v2" }),
      e("path", { d: "M14 2v2" }),
      e("path", { d: "M6 2v2" }),
      e("path", {
        d: "M18 8a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2.95a1 1 0 0 0-.768.369l-.254.332a4 4 0 0 1-3.26 1.623 4 4 0 0 1-3.296-1.402l-.125-.153A1 1 0 0 0 4.35 14H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14z",
      }),
      e("path", { d: "M18 14v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" })
    ),
  Gift: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { x: 3, y: 8, width: 18, height: 4, rx: 1 }),
      e("path", { d: "M12 8v13" }),
      e("path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }),
      e("path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.9 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      })
    ),
  Loader2: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    ),
  Map: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" }),
      e("line", { x1: 9, x2: 9, y1: 3, y2: 18 }),
      e("line", { x1: 15, x2: 15, y1: 6, y2: 21 })
    ),
  AlertTriangle: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      }),
      e("path", { d: "M12 9v4" }),
      e("path", { d: "M12 17h.01" })
    ),
};
