import {
  LayoutComponent
} from "./chunk-CDCEZZUF.js";
import {
  AuthService
} from "./chunk-CR3SFDDN.js";
import {
  CommonModule,
  RouterLink
} from "./chunk-OEINA6XM.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QLIULQP5.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.nama;
var _forTrack2 = ($index, $item) => $item.hari;
function DashboardComponent_For_299_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 194)(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 195);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 196);
    \u0275\u0275element(7, "div", 197);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.jumlah, " orang");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r1.persen + "%")("background", item_r1.warna);
  }
}
function DashboardComponent_For_308_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 194)(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 195);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 196);
    \u0275\u0275element(7, "div", 197);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.jumlah, " orang");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r2.persen + "%")("background", item_r2.warna);
  }
}
function DashboardComponent_For_355_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 198)(2, "div", 59)(3, "div", 199);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 200);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 201);
    \u0275\u0275element(8, "div", 202);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 203)(10, "div", 204);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 90);
    \u0275\u0275text(13, "hadir");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r3.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r3.hadir, "/", d_r3.total, " hadir");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", d_r3.persen + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", d_r3.persen, "%");
  }
}
function DashboardComponent_For_368_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.nama);
  }
}
function DashboardComponent_For_389_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275element(1, "div", 205);
    \u0275\u0275elementStart(2, "div", 206);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", bar_r5.tinggi + "px")("background", bar_r5.warna);
    \u0275\u0275property("title", \u0275\u0275interpolate2("", bar_r5.jumlah, " orang \u2014 ", bar_r5.hari));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r5.hari);
  }
}
function DashboardComponent_For_418_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.nama);
  }
}
function DashboardComponent_For_434_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 52)(5, "div", 207);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 114)(13, "span", 208);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 209);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r7 = ctx.$implicit;
    const \u0275$index_790_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_790_r8 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", k_r7.nama.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r7.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r7.divisi);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", k_r7.jumlah, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r7.durasi);
  }
}
function DashboardComponent_For_443_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "div", 211);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 59)(6, "div", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 189)(11, "div", 213);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 214);
    \u0275\u0275text(14, "skor");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r9 = ctx.$implicit;
    const \u0275$index_832_r10 = ctx.$index;
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-bottom", \u0275$index_832_r10 < ctx_r10.top5Disiplin.length - 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", \u0275$index_832_r10 === 0 ? "#f59e0b" : \u0275$index_832_r10 === 1 ? "#94a3b8" : \u0275$index_832_r10 === 2 ? "#d97706" : "#6b7280");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275$index_832_r10 === 0 ? "\u{1F947}" : \u0275$index_832_r10 === 1 ? "\u{1F948}" : \u0275$index_832_r10 === 2 ? "\u{1F949}" : "#" + (\u0275$index_832_r10 + 1), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", k_r9.nama.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r9.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r9.divisi);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r9.skor);
  }
}
function DashboardComponent_For_508_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 52)(3, "div", 215);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 117);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 216);
    \u0275\u0275text(14, "Tepat Waktu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 117);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 217);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", k_r12.nama.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r12.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r12.divisi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r12.jadwal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(k_r12.deskripsi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r12.waktu);
  }
}
function DashboardComponent_For_525_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r13.nama);
  }
}
function DashboardComponent_For_580_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r14.nama);
  }
}
function DashboardComponent_For_587_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 218)(2, "div", 219);
    \u0275\u0275element(3, "i", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "div", 220);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 221);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 222);
    \u0275\u0275element(10, "div", 197);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 223);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lok_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", lok_r15.bg);
    \u0275\u0275advance();
    \u0275\u0275classMap(lok_r15.icon);
    \u0275\u0275styleProp("color", lok_r15.warna);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lok_r15.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lok_r15.jumlah);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", lok_r15.persen + "%")("background", lok_r15.warna);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", lok_r15.persen, "%");
  }
}
function DashboardComponent_For_608_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 52);
    \u0275\u0275element(3, "span", 224);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 225);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 189)(8, "div", 226)(9, "div", 227);
    \u0275\u0275element(10, "div", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 117);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r16 = ctx.$implicit;
    const \u0275$index_1187_r17 = ctx.$index;
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r10.warnaDivisi[\u0275$index_1187_r17 % ctx_r10.warnaDivisi.length]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r16.nama, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r16.total);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", d_r16.persen + "%")("background", ctx_r10.warnaDivisi[\u0275$index_1187_r17 % ctx_r10.warnaDivisi.length]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r16.persen, "%");
  }
}
function DashboardComponent_For_620_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193)(1, "div", 228);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59)(4, "div", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 229);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 230)(11, "div", 231);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 90);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 232);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r18.nama.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r18.nama);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r18.divisi);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", item_r18.jenis === "CUTI" ? "#ede9fe" : "#fef3c7")("color", item_r18.jenis === "CUTI" ? "#5b21b6" : "#92400e");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r18.jenis, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r18.tanggalMulai);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("s/d ", item_r18.tanggalSelesai);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r18.hari, " hari");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.filterTanggal = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.showAllDivisi = false;
    this.statsUmur = [
      { label: "< 25 tahun", jumlah: 12, persen: 12, warna: "#38bdf8" },
      { label: "25 \u2013 34 tahun", jumlah: 38, persen: 38, warna: "#4f46e5" },
      { label: "35 \u2013 44 tahun", jumlah: 31, persen: 31, warna: "#8b5cf6" },
      { label: "45 \u2013 54 tahun", jumlah: 14, persen: 14, warna: "#f59e0b" },
      { label: "\u2265 55 tahun", jumlah: 5, persen: 5, warna: "#f87171" }
    ];
    this.statsGenerasi = [
      { label: "Baby Boomers (1946\u20131964)", jumlah: 8, persen: 8, warna: "#f87171" },
      { label: "Generasi X (1965\u20131980)", jumlah: 22, persen: 22, warna: "#f59e0b" },
      { label: "Millennials (1981\u20131996)", jumlah: 45, persen: 45, warna: "#4f46e5" },
      { label: "Generasi Z (1997\u20132012)", jumlah: 25, persen: 25, warna: "#38bdf8" }
    ];
    this.kehadiranDivisi = [
      { nama: "Teknologi Informasi", hadir: 18, total: 20, persen: 90 },
      { nama: "Keuangan", hadir: 12, total: 13, persen: 92 },
      { nama: "Sumber Daya Manusia", hadir: 9, total: 10, persen: 90 },
      { nama: "Operasional", hadir: 22, total: 25, persen: 88 },
      { nama: "Pemasaran", hadir: 14, total: 15, persen: 93 },
      { nama: "Hukum & Kepatuhan", hadir: 7, total: 8, persen: 87 },
      { nama: "Pengadaan", hadir: 6, total: 6, persen: 100 },
      { nama: "Manajemen Umum", hadir: 4, total: 5, persen: 80 }
    ];
    this.chartPresensi = [
      { hari: "1", jumlah: 88, tinggi: 110, warna: "#4ade80" },
      { hari: "2", jumlah: 85, tinggi: 106, warna: "#4ade80" },
      { hari: "3", jumlah: 90, tinggi: 113, warna: "#4ade80" },
      { hari: "4", jumlah: 78, tinggi: 98, warna: "#facc15" },
      { hari: "5", jumlah: 70, tinggi: 88, warna: "#facc15" },
      { hari: "7", jumlah: 92, tinggi: 115, warna: "#4ade80" },
      { hari: "8", jumlah: 87, tinggi: 109, warna: "#4ade80" },
      { hari: "9", jumlah: 83, tinggi: 104, warna: "#4ade80" },
      { hari: "10", jumlah: 75, tinggi: 94, warna: "#f87171" },
      { hari: "11", jumlah: 91, tinggi: 114, warna: "#4ade80" },
      { hari: "14", jumlah: 89, tinggi: 111, warna: "#4ade80" },
      { hari: "15", jumlah: 86, tinggi: 108, warna: "#4ade80" },
      { hari: "16", jumlah: 82, tinggi: 103, warna: "#facc15" },
      { hari: "17", jumlah: 93, tinggi: 116, warna: "#4ade80" },
      { hari: "18", jumlah: 88, tinggi: 110, warna: "#4ade80" }
    ];
    this.top5Terlambat = [
      { nama: "Ahmad Fauzi", divisi: "Operasional", jumlah: 12, durasi: "3j 24m" },
      { nama: "Budi Santoso", divisi: "Pemasaran", jumlah: 10, durasi: "2j 50m" },
      { nama: "Citra Dewi", divisi: "Keuangan", jumlah: 9, durasi: "2j 15m" },
      { nama: "Dian Pratama", divisi: "TI", jumlah: 7, durasi: "1j 45m" },
      { nama: "Eko Setiawan", divisi: "Pengadaan", jumlah: 6, durasi: "1j 20m" }
    ];
    this.top5Disiplin = [
      { nama: "Sari Indah", divisi: "SDM", skor: 99.2 },
      { nama: "Rendra Wijaya", divisi: "TI", skor: 98.7 },
      { nama: "Nurul Hidayah", divisi: "Keuangan", skor: 98.1 },
      { nama: "Andi Kurniawan", divisi: "Manajemen", skor: 97.5 },
      { nama: "Maya Susanti", divisi: "Pemasaran", skor: 97 }
    ];
    this.performaHarian = [
      { nama: "Sari Indah", divisi: "SDM", jadwal: "08:00\u201317:00", deskripsi: "Shift Normal", waktu: "07:52" },
      { nama: "Rendra Wijaya", divisi: "TI", jadwal: "08:00\u201317:00", deskripsi: "Shift Normal", waktu: "07:58" },
      { nama: "Nurul Hidayah", divisi: "Keuangan", jadwal: "08:00\u201317:00", deskripsi: "Shift Normal", waktu: "07:55" },
      { nama: "Andi Kurniawan", divisi: "Manajemen", jadwal: "07:30\u201316:30", deskripsi: "Shift Pagi", waktu: "07:28" },
      { nama: "Maya Susanti", divisi: "Pemasaran", jadwal: "08:00\u201317:00", deskripsi: "Shift Normal", waktu: "07:50" }
    ];
    this.ringkasanLokasi = [
      { nama: "Hadir di Kantor", jumlah: 68, persen: 72, warna: "#22c55e", bg: "#dcfce7", icon: "bx-building" },
      { nama: "Work From Home", jumlah: 18, persen: 19, warna: "#4f46e5", bg: "#ede9fe", icon: "bx-home" },
      { nama: "Dinas Luar", jumlah: 8, persen: 9, warna: "#f59e0b", bg: "#fef3c7", icon: "bx-car" }
    ];
    this.karyawanPerDivisi = [
      { nama: "Teknologi Informasi", total: 20, persen: 20 },
      { nama: "Keuangan", total: 13, persen: 13 },
      { nama: "Sumber Daya Manusia", total: 10, persen: 10 },
      { nama: "Operasional", total: 25, persen: 25 },
      { nama: "Pemasaran", total: 15, persen: 15 },
      { nama: "Hukum & Kepatuhan", total: 8, persen: 8 },
      { nama: "Pengadaan", total: 6, persen: 6 },
      { nama: "Manajemen Umum", total: 5, persen: 5 }
    ];
    this.warnaDivisi = ["#4f46e5", "#22c55e", "#f59e0b", "#38bdf8", "#ec4899", "#8b5cf6", "#14b8a6", "#f87171"];
    this.cutiIzin7Hari = [
      { nama: "Dewi Anggraini", divisi: "SDM", jenis: "CUTI", tanggalMulai: "11 Apr", tanggalSelesai: "12 Apr", hari: 2 },
      { nama: "Fajar Nugroho", divisi: "TI", jenis: "IZIN", tanggalMulai: "11 Apr", tanggalSelesai: "11 Apr", hari: 1 },
      { nama: "Hana Pertiwi", divisi: "Keuangan", jenis: "CUTI", tanggalMulai: "13 Apr", tanggalSelesai: "17 Apr", hari: 5 },
      { nama: "Irwan Saputra", divisi: "Pemasaran", jenis: "IZIN", tanggalMulai: "14 Apr", tanggalSelesai: "14 Apr", hari: 1 },
      { nama: "Joko Widodo", divisi: "Operasional", jenis: "CUTI", tanggalMulai: "14 Apr", tanggalSelesai: "16 Apr", hari: 3 },
      { nama: "Kartini Dewi", divisi: "Pengadaan", jenis: "IZIN", tanggalMulai: "15 Apr", tanggalSelesai: "15 Apr", hari: 1 },
      { nama: "Lukman Hakim", divisi: "Hukum", jenis: "CUTI", tanggalMulai: "16 Apr", tanggalSelesai: "17 Apr", hari: 2 }
    ];
  }
  toggleShowAllDivisi() {
    this.showAllDivisi = !this.showAllDivisi;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 621, vars: 6, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-left", "4px solid #4f46e5!important"], [1, "card-body"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "bx", "bx-rocket", "fs-4", "text-primary"], [1, "mb-0", "fw-semibold"], [1, "row", "g-3"], [1, "col-6", "col-md-4", "col-xl-2"], ["routerLink", "/divisi", 1, "text-decoration-none"], ["onmouseover", "this.style.background='#f5f3ff'", "onmouseout", "this.style.background=''", 1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "rounded-3", "border", "h-100", 2, "transition", ".2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "44px", "height", "44px", "background", "#ede9fe"], [1, "bx", "bx-buildings", "text-primary", "fs-5"], [1, "badge", "bg-primary", "rounded-pill", "mb-1", 2, "font-size", ".68rem"], [1, "fw-semibold", 2, "font-size", ".82rem"], [1, "text-muted", 2, "font-size", ".73rem"], ["routerLink", "/jabatan", 1, "text-decoration-none"], ["onmouseover", "this.style.background='#f0fdf4'", "onmouseout", "this.style.background=''", 1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "rounded-3", "border", "h-100", 2, "transition", ".2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "44px", "height", "44px", "background", "#dcfce7"], [1, "bx", "bx-briefcase", "text-success", "fs-5"], [1, "badge", "bg-success", "rounded-pill", "mb-1", 2, "font-size", ".68rem"], ["routerLink", "/lokasi", 1, "text-decoration-none"], ["onmouseover", "this.style.background='#fff7ed'", "onmouseout", "this.style.background=''", 1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "rounded-3", "border", "h-100", 2, "transition", ".2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "44px", "height", "44px", "background", "#ffedd5"], [1, "bx", "bx-map", "text-warning", "fs-5"], [1, "badge", "bg-warning", "text-dark", "rounded-pill", "mb-1", 2, "font-size", ".68rem"], ["routerLink", "/jadwal-shift", 1, "text-decoration-none"], ["onmouseover", "this.style.background='#fef2f2'", "onmouseout", "this.style.background=''", 1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "rounded-3", "border", "h-100", 2, "transition", ".2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "44px", "height", "44px", "background", "#fee2e2"], [1, "bx", "bx-time-five", "text-danger", "fs-5"], [1, "badge", "bg-danger", "rounded-pill", "mb-1", 2, "font-size", ".68rem"], ["routerLink", "/karyawan", 1, "text-decoration-none"], ["onmouseover", "this.style.background='#eff6ff'", "onmouseout", "this.style.background=''", 1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "rounded-3", "border", "h-100", 2, "transition", ".2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "44px", "height", "44px", "background", "#dbeafe"], [1, "bx", "bx-user-plus", "text-info", "fs-5"], [1, "badge", "bg-info", "rounded-pill", "mb-1", 2, "font-size", ".68rem"], ["routerLink", "/absensi", 1, "text-decoration-none"], ["onmouseover", "this.style.background='#f8fafc'", "onmouseout", "this.style.background=''", 1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "rounded-3", "border", "h-100", 2, "transition", ".2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mb-2", 2, "width", "44px", "height", "44px", "background", "#e2e8f0"], [1, "bx", "bx-check-shield", "text-secondary", "fs-5"], [1, "badge", "bg-secondary", "rounded-pill", "mb-1", 2, "font-size", ".68rem"], [1, "row", "g-3", "mb-4"], [1, "col-12", "col-lg-4"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-header", "bg-transparent", "border-0", "pb-0", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-bell", "text-warning", "fs-5"], [1, "badge", "bg-warning", "text-dark", "rounded-pill"], [1, "card-body", "pt-2"], [1, "d-flex", "align-items-start", "gap-2", "py-2", "border-bottom"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", "mt-1", 2, "width", "36px", "height", "36px", "background", "#fff3cd"], [1, "bx", "bx-time", "text-warning"], [1, "flex-grow-1"], [1, "fw-semibold", 2, "font-size", ".83rem"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "btn", "btn-sm", "btn-outline-warning", "py-0", "px-2", 2, "font-size", ".72rem"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", "mt-1", 2, "width", "36px", "height", "36px", "background", "#fde8e8"], [1, "bx", "bx-error", "text-danger"], [1, "btn", "btn-sm", "btn-outline-danger", "py-0", "px-2", 2, "font-size", ".72rem"], [1, "d-flex", "align-items-start", "gap-2", "py-2"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", "mt-1", 2, "width", "36px", "height", "36px", "background", "#d1fae5"], [1, "bx", "bx-calendar-check", "text-success"], [1, "btn", "btn-sm", "btn-outline-success", "py-0", "px-2", 2, "font-size", ".72rem"], [1, "card-header", "bg-transparent", "border-0", "pb-0", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-calendar", "text-primary", "fs-5"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "btn", "btn-sm", "btn-light", "px-2", "py-0"], [1, "bx", "bx-chevron-left"], [1, "fw-semibold", 2, "font-size", ".88rem"], [1, "bx", "bx-chevron-right"], [1, "table", "table-sm", "text-center", "mb-0", 2, "font-size", ".8rem"], [1, "text-muted"], [1, "text-white", "rounded-circle", "fw-bold", 2, "background", "#4f46e5", "font-size", ".78rem"], ["colspan", "3"], [1, "d-flex", "gap-2", "mt-2", "flex-wrap"], [1, "badge", 2, "background", "#dcfce7", "color", "#166534", "font-size", ".7rem"], [1, "badge", 2, "background", "#fee2e2", "color", "#991b1b", "font-size", ".7rem"], [1, "badge", 2, "background", "#dbeafe", "color", "#1e40af", "font-size", ".7rem"], [1, "bx", "bx-task", "text-info", "fs-5"], [1, "ms-auto", "text-muted", 2, "font-size", ".78rem"], [1, "card-body", "pt-2", 2, "max-height", "270px", "overflow-y", "auto"], [1, "d-flex", "gap-2", "mb-3"], [1, "text-center", "flex-shrink-0", 2, "min-width", "46px"], [1, "text-muted", 2, "font-size", ".7rem"], [2, "width", "2px", "height", "100%", "background", "#e5e7eb", "margin", "2px auto"], [1, "rounded-3", "p-2", "flex-grow-1", 2, "background", "#ede9fe", "border-left", "3px solid #4f46e5"], [1, "fw-semibold", 2, "font-size", ".8rem"], [1, "rounded-3", "p-2", "flex-grow-1", 2, "background", "#dcfce7", "border-left", "3px solid #16a34a"], [1, "rounded-3", "p-2", "flex-grow-1", 2, "background", "#fef9c3", "border-left", "3px solid #ca8a04"], [1, "rounded-3", "p-2", "flex-grow-1", 2, "background", "#fee2e2", "border-left", "3px solid #dc2626"], [1, "d-flex", "gap-2"], [1, "rounded-3", "p-2", "flex-grow-1", 2, "background", "#e0f2fe", "border-left", "3px solid #0284c7"], [1, "col-12", "col-md-4"], [1, "bx", "bx-user-circle", "text-primary", "fs-5"], [1, "mb-3"], [1, "bx", "bx-group", "text-success", "fs-5"], [1, "bx", "bx-male-female", "text-info", "fs-5"], [1, "card-body", "d-flex", "flex-column", "align-items-center"], [1, "position-relative", "my-3", 2, "width", "140px", "height", "140px"], ["viewBox", "0 0 36 36", 2, "width", "100%", "height", "100%", "transform", "rotate(-90deg)"], ["cx", "18", "cy", "18", "r", "15.9", "fill", "none", "stroke", "#e5e7eb", "stroke-width", "3.8"], ["cx", "18", "cy", "18", "r", "15.9", "fill", "none", "stroke", "#4f46e5", "stroke-width", "3.8", "stroke-dasharray", "58 42", "stroke-linecap", "round"], ["cx", "18", "cy", "18", "r", "15.9", "fill", "none", "stroke", "#ec4899", "stroke-width", "3.8", "stroke-dasharray", "42 58", "stroke-dashoffset", "-58", "stroke-linecap", "round"], [1, "position-absolute", "top-50", "start-50", "translate-middle", "text-center"], [1, "fw-bold", 2, "font-size", "1.1rem"], [1, "text-muted", 2, "font-size", ".65rem"], [1, "d-flex", "gap-4", "mt-2"], [1, "text-center"], [1, "d-flex", "align-items-center", "gap-1", "mb-1"], [2, "width", "10px", "height", "10px", "border-radius", "50%", "background", "#4f46e5", "display", "inline-block"], [1, "text-muted", 2, "font-size", ".78rem"], [2, "width", "10px", "height", "10px", "border-radius", "50%", "background", "#ec4899", "display", "inline-block"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "bg-transparent", "border-0", "pb-0", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "bx", "bx-bar-chart-alt-2", "text-primary", "fs-5"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "150px", 3, "value"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bx"], [1, "col-12", "col-sm-6", "col-xl-3"], [1, "card-header", "bg-transparent", "border-0", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "bx", "bx-line-chart", "text-success", "fs-5"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], [1, "form-select", "form-select-sm", 2, "max-width", "160px"], [1, "form-select", "form-select-sm", 2, "max-width", "110px"], [1, "form-select", "form-select-sm", 2, "max-width", "90px"], [1, "btn", "btn-primary", "btn-sm", "px-3"], [1, "bx", "bx-filter-alt", "me-1"], [1, "rounded-3", "d-flex", "align-items-end", "justify-content-around", "gap-1", "px-2", 2, "background", "#f8fafc", "height", "180px", "padding-bottom", "8px"], [1, "d-flex", "flex-column", "align-items-center", "flex-grow-1", 2, "max-width", "40px"], [1, "d-flex", "gap-3", "mt-2", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-1", 2, "font-size", ".75rem"], [2, "width", "12px", "height", "12px", "border-radius", "3px", "background", "#4ade80", "display", "inline-block"], [2, "width", "12px", "height", "12px", "border-radius", "3px", "background", "#facc15", "display", "inline-block"], [2, "width", "12px", "height", "12px", "border-radius", "3px", "background", "#f87171", "display", "inline-block"], [1, "col-12", "col-lg-6"], [1, "bx", "bx-alarm-exclamation", "text-danger", "fs-5"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-secondary", "active"], [1, "btn", "btn-outline-secondary"], [1, "form-select", "form-select-sm", 2, "max-width", "150px"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0", 2, "font-size", ".83rem"], [1, "table-light"], [2, "width", "32px"], [1, "bx", "bx-trophy", "text-warning", "fs-5"], [1, "d-flex", "align-items-center", "gap-3", "py-2", 3, "border-bottom"], [1, "bx", "bx-stats", "text-primary", "fs-5"], [1, "badge", "bg-light", "text-muted", "border", 2, "font-size", ".72rem"], [1, "d-flex", "gap-3", "flex-wrap"], [1, "fw-bold", "text-success", 2, "font-size", "1.2rem"], [1, "fw-bold", "text-warning", 2, "font-size", "1.2rem"], [1, "fw-bold", "text-danger", 2, "font-size", "1.2rem"], [1, "fw-bold", "text-info", 2, "font-size", "1.2rem"], [1, "fw-bold", 2, "font-size", "1.2rem", "color", "#8b5cf6"], [1, "nav", "nav-tabs", "nav-tabs-bottom", "mb-3", 2, "border-bottom", "1px solid #e5e7eb"], [1, "nav-item"], [1, "nav-link", "active", 2, "font-size", ".83rem"], [1, "bx", "bx-check-circle", "text-success", "me-1"], [1, "nav-link", 2, "font-size", ".83rem"], [1, "bx", "bx-time-five", "text-warning", "me-1"], [1, "bx", "bx-x-circle", "text-danger", "me-1"], [1, "bx", "bx-time", "text-info", "fs-5"], ["type", "date", "placeholder", "Tanggal Awal", 1, "form-control", "form-control-sm", 2, "max-width", "145px"], [1, "text-muted", 2, "font-size", ".82rem"], ["type", "date", "placeholder", "Tanggal Akhir", 1, "form-control", "form-control-sm", 2, "max-width", "145px"], [1, "col-6", "col-md-3"], [1, "text-center", "p-3", "rounded-3", 2, "background", "#f0fdf4"], [1, "fw-bold", "text-success", 2, "font-size", "1.8rem"], [1, "text-center", "p-3", "rounded-3", 2, "background", "#fef3c7"], [1, "fw-bold", "text-warning", 2, "font-size", "1.8rem"], [1, "text-center", "p-3", "rounded-3", 2, "background", "#eff6ff"], [1, "fw-bold", "text-primary", 2, "font-size", "1.8rem"], [1, "text-center", "p-3", "rounded-3", 2, "background", "#fdf2f8"], [1, "fw-bold", 2, "font-size", "1.8rem", "color", "#db2777"], [1, "bx", "bx-map-pin", "text-danger", "fs-5"], ["type", "date", 1, "form-control", "form-control-sm", 2, "max-width", "145px"], [1, "col-12", "col-sm-4"], [1, "col-12", "col-lg-5"], [1, "bx", "bx-pie-chart-alt", "text-primary", "fs-5"], [1, "text-end"], [1, "col-12", "col-lg-7"], [1, "bx", "bx-calendar-event", "fs-5", 2, "color", "#8b5cf6"], [1, "card-body", "pt-2", 2, "max-height", "380px", "overflow-y", "auto"], [1, "d-flex", "align-items-center", "gap-3", "py-2", "border-bottom"], [1, "d-flex", "justify-content-between", "mb-1", 2, "font-size", ".8rem"], [1, "fw-semibold"], [1, "progress", 2, "height", "8px"], [1, "progress-bar"], [1, "d-flex", "align-items-center", "justify-content-between", "p-3", "rounded-3", "border", "h-100"], [1, "fw-semibold", "mb-1", 2, "font-size", ".85rem"], [1, "text-muted", "mb-2", 2, "font-size", ".75rem"], [1, "progress", 2, "height", "6px"], [1, "progress-bar", "bg-success"], [1, "ms-3", "text-center"], [1, "fw-bold", 2, "font-size", "1.3rem", "color", "#16a34a"], [1, "rounded-top", "w-100", 3, "title"], [1, "text-muted", "mt-1", 2, "font-size", ".65rem"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "32px", "height", "32px", "background", "#fee2e2", "color", "#dc2626", "font-size", ".75rem", "font-weight", "700"], [1, "badge", "bg-danger"], [1, "text-center", "text-muted", 2, "font-size", ".78rem"], [1, "d-flex", "align-items-center", "gap-3", "py-2"], [1, "fw-bold", "text-center", "flex-shrink-0", 2, "font-size", "1rem", "min-width", "24px"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px", "background", "linear-gradient(135deg,#4f46e5,#7c3aed)", "color", "#fff", "font-weight", "700", "font-size", ".9rem"], [1, "fw-bold", "text-success", 2, "font-size", ".9rem"], [1, "text-muted", 2, "font-size", ".68rem"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "36px", "height", "36px", "background", "linear-gradient(135deg,#4ade80,#22c55e)", "color", "#fff", "font-weight", "700", "font-size", ".82rem"], [1, "badge", "bg-success", 2, "font-size", ".72rem"], [1, "fw-semibold", "text-success", 2, "font-size", ".82rem"], [1, "d-flex", "align-items-center", "gap-3", "p-3", "rounded-3", "border"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "44px", "height", "44px"], [1, "fw-semibold", 2, "font-size", ".85rem"], [1, "fw-bold", 2, "font-size", "1.2rem"], [1, "progress", "mt-1", 2, "height", "5px"], [1, "text-muted", 2, "font-size", ".85rem"], [1, "rounded-circle", "d-inline-block", "flex-shrink-0", 2, "width", "10px", "height", "10px"], [1, "text-center", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-2"], [1, "progress", "flex-grow-1", 2, "height", "6px", "max-width", "80px"], [1, "rounded-circle", "flex-shrink-0", "d-flex", "align-items-center", "justify-content-center", 2, "width", "38px", "height", "38px", "background", "linear-gradient(135deg,#8b5cf6,#6d28d9)", "color", "#fff", "font-weight", "700", "font-size", ".85rem"], [1, "badge", "rounded-pill", 2, "font-size", ".72rem"], [1, "text-end", 2, "min-width", "90px"], [1, "fw-semibold", 2, "font-size", ".78rem"], [1, "badge", "bg-light", "text-muted", "border", 2, "font-size", ".7rem"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-layout")(1, "div", 0)(2, "div", 1);
        \u0275\u0275text(3, "Beranda");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "nav", 3)(6, "ol", 4)(7, "li", 5)(8, "a", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li", 8);
        \u0275\u0275text(11, "Dashboard");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
        \u0275\u0275element(15, "i", 12);
        \u0275\u0275elementStart(16, "h6", 13);
        \u0275\u0275text(17, "Langkah Awal \u2014 Pengisian Data Dasar Aplikasi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "a", 16)(21, "div", 17)(22, "div", 18);
        \u0275\u0275element(23, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 20);
        \u0275\u0275text(25, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 21);
        \u0275\u0275text(27, "Buat Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 22);
        \u0275\u0275text(29, "Organisasi / Departemen");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 15)(31, "a", 23)(32, "div", 24)(33, "div", 25);
        \u0275\u0275element(34, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 27);
        \u0275\u0275text(36, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 21);
        \u0275\u0275text(38, "Buat Jabatan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 22);
        \u0275\u0275text(40, "Posisi & Hirarki");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 15)(42, "a", 28)(43, "div", 29)(44, "div", 30);
        \u0275\u0275element(45, "i", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 32);
        \u0275\u0275text(47, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 21);
        \u0275\u0275text(49, "Buat Lokasi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 22);
        \u0275\u0275text(51, "Titik Kehadiran");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div", 15)(53, "a", 33)(54, "div", 34)(55, "div", 35);
        \u0275\u0275element(56, "i", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 37);
        \u0275\u0275text(58, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 21);
        \u0275\u0275text(60, "Jadwal Shift");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 22);
        \u0275\u0275text(62, "Jam Kerja");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 15)(64, "a", 38)(65, "div", 39)(66, "div", 40);
        \u0275\u0275element(67, "i", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 42);
        \u0275\u0275text(69, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 21);
        \u0275\u0275text(71, "Tambah Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 22);
        \u0275\u0275text(73, "Data Pegawai");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "div", 15)(75, "a", 43)(76, "div", 44)(77, "div", 45);
        \u0275\u0275element(78, "i", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span", 47);
        \u0275\u0275text(80, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 21);
        \u0275\u0275text(82, "Mulai Absensi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 22);
        \u0275\u0275text(84, "Rekam Kehadiran");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(85, "div", 48)(86, "div", 49)(87, "div", 50)(88, "div", 51)(89, "div", 52);
        \u0275\u0275element(90, "i", 53);
        \u0275\u0275elementStart(91, "h6", 13);
        \u0275\u0275text(92, "Notifikasi Review Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "span", 54);
        \u0275\u0275text(94, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 55)(96, "div", 56)(97, "div", 57);
        \u0275\u0275element(98, "i", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 59)(100, "div", 60);
        \u0275\u0275text(101, "5 Karyawan belum absen masuk");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 61);
        \u0275\u0275text(103, "Hari ini \xB7 08:30");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "button", 62);
        \u0275\u0275text(105, "Review");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 56)(107, "div", 63);
        \u0275\u0275element(108, "i", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 59)(110, "div", 60);
        \u0275\u0275text(111, "2 Izin menunggu persetujuan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "div", 61);
        \u0275\u0275text(113, "Kemarin \xB7 17:45");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "button", 65);
        \u0275\u0275text(115, "Lihat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 66)(117, "div", 67);
        \u0275\u0275element(118, "i", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 59)(120, "div", 60);
        \u0275\u0275text(121, "Pengajuan cuti baru");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 61);
        \u0275\u0275text(123, "10 Apr 2026 \xB7 Dewi Anggraini");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "button", 69);
        \u0275\u0275text(125, "Proses");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(126, "div", 49)(127, "div", 50)(128, "div", 70);
        \u0275\u0275element(129, "i", 71);
        \u0275\u0275elementStart(130, "h6", 13);
        \u0275\u0275text(131, "Kalender");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 55)(133, "div", 72)(134, "button", 73);
        \u0275\u0275element(135, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "span", 75);
        \u0275\u0275text(137, "April 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "button", 73);
        \u0275\u0275element(139, "i", 76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "table", 77)(141, "thead")(142, "tr", 78)(143, "th");
        \u0275\u0275text(144, "Min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "th");
        \u0275\u0275text(146, "Sen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "th");
        \u0275\u0275text(148, "Sel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "th");
        \u0275\u0275text(150, "Rab");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "th");
        \u0275\u0275text(152, "Kam");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "th");
        \u0275\u0275text(154, "Jum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "th");
        \u0275\u0275text(156, "Sab");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(157, "tbody")(158, "tr")(159, "td", 78);
        \u0275\u0275text(160, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "td");
        \u0275\u0275text(162, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "td");
        \u0275\u0275text(164, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "td");
        \u0275\u0275text(166, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "td");
        \u0275\u0275text(168, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "td");
        \u0275\u0275text(170, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "td", 78);
        \u0275\u0275text(172, "5");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "tr")(174, "td", 78);
        \u0275\u0275text(175, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "td");
        \u0275\u0275text(177, "7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "td");
        \u0275\u0275text(179, "8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "td");
        \u0275\u0275text(181, "9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "td", 79);
        \u0275\u0275text(183, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "td");
        \u0275\u0275text(185, "11");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "td", 78);
        \u0275\u0275text(187, "12");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "tr")(189, "td", 78);
        \u0275\u0275text(190, "13");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "td");
        \u0275\u0275text(192, "14");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "td");
        \u0275\u0275text(194, "15");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "td");
        \u0275\u0275text(196, "16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "td");
        \u0275\u0275text(198, "17");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "td");
        \u0275\u0275text(200, "18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "td", 78);
        \u0275\u0275text(202, "19");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "tr")(204, "td", 78);
        \u0275\u0275text(205, "20");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "td");
        \u0275\u0275text(207, "21");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "td");
        \u0275\u0275text(209, "22");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "td");
        \u0275\u0275text(211, "23");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "td");
        \u0275\u0275text(213, "24");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "td");
        \u0275\u0275text(215, "25");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "td", 78);
        \u0275\u0275text(217, "26");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(218, "tr")(219, "td", 78);
        \u0275\u0275text(220, "27");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "td");
        \u0275\u0275text(222, "28");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "td");
        \u0275\u0275text(224, "29");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "td");
        \u0275\u0275text(226, "30");
        \u0275\u0275elementEnd();
        \u0275\u0275element(227, "td", 80);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(228, "div", 81)(229, "span", 82);
        \u0275\u0275text(230, "\u25CF Hari Kerja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "span", 83);
        \u0275\u0275text(232, "\u25CF Libur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "span", 84);
        \u0275\u0275text(234, "\u25CF Cuti");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(235, "div", 49)(236, "div", 50)(237, "div", 70);
        \u0275\u0275element(238, "i", 85);
        \u0275\u0275elementStart(239, "h6", 13);
        \u0275\u0275text(240, "Agenda Harian");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "span", 86);
        \u0275\u0275text(242, "Jum, 10 Apr 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "div", 87)(244, "div", 88)(245, "div", 89)(246, "div", 90);
        \u0275\u0275text(247, "07:00");
        \u0275\u0275elementEnd();
        \u0275\u0275element(248, "div", 91);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 92)(250, "div", 93);
        \u0275\u0275text(251, "Check-in Masuk Dibuka");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "div", 22);
        \u0275\u0275text(253, "Sistem otomatis aktif");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(254, "div", 88)(255, "div", 89)(256, "div", 90);
        \u0275\u0275text(257, "08:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(258, "div", 94)(259, "div", 93);
        \u0275\u0275text(260, "Jam Kerja Mulai");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "div", 22);
        \u0275\u0275text(262, "Semua divisi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(263, "div", 88)(264, "div", 89)(265, "div", 90);
        \u0275\u0275text(266, "12:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "div", 95)(268, "div", 93);
        \u0275\u0275text(269, "Istirahat Siang");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "div", 22);
        \u0275\u0275text(271, "60 menit");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(272, "div", 88)(273, "div", 89)(274, "div", 90);
        \u0275\u0275text(275, "17:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(276, "div", 96)(277, "div", 93);
        \u0275\u0275text(278, "Jam Kerja Berakhir");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "div", 22);
        \u0275\u0275text(280, "Rekap harian diproses");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(281, "div", 97)(282, "div", 89)(283, "div", 90);
        \u0275\u0275text(284, "18:00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "div", 98)(286, "div", 93);
        \u0275\u0275text(287, "Pengajuan Cuti \u2014 Dewi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "div", 22);
        \u0275\u0275text(289, "Menunggu approval");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(290, "div", 48)(291, "div", 99)(292, "div", 50)(293, "div", 70);
        \u0275\u0275element(294, "i", 100);
        \u0275\u0275elementStart(295, "h6", 13);
        \u0275\u0275text(296, "Karyawan per Umur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(297, "div", 10);
        \u0275\u0275repeaterCreate(298, DashboardComponent_For_299_Template, 8, 6, "div", 101, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(300, "div", 99)(301, "div", 50)(302, "div", 70);
        \u0275\u0275element(303, "i", 102);
        \u0275\u0275elementStart(304, "h6", 13);
        \u0275\u0275text(305, "Karyawan per Generasi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(306, "div", 10);
        \u0275\u0275repeaterCreate(307, DashboardComponent_For_308_Template, 8, 6, "div", 101, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(309, "div", 99)(310, "div", 50)(311, "div", 70);
        \u0275\u0275element(312, "i", 103);
        \u0275\u0275elementStart(313, "h6", 13);
        \u0275\u0275text(314, "Karyawan per Jenis Kelamin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(315, "div", 104)(316, "div", 105);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(317, "svg", 106);
        \u0275\u0275element(318, "circle", 107)(319, "circle", 108)(320, "circle", 109);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(321, "div", 110)(322, "div", 111);
        \u0275\u0275text(323, "100");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(324, "div", 112);
        \u0275\u0275text(325, "Total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(326, "div", 113)(327, "div", 114)(328, "div", 115);
        \u0275\u0275element(329, "span", 116);
        \u0275\u0275elementStart(330, "span", 117);
        \u0275\u0275text(331, "Laki-laki");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(332, "div", 111);
        \u0275\u0275text(333, "58");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(334, "div", 114)(335, "div", 115);
        \u0275\u0275element(336, "span", 118);
        \u0275\u0275elementStart(337, "span", 117);
        \u0275\u0275text(338, "Perempuan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(339, "div", 111);
        \u0275\u0275text(340, "42");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(341, "div", 119)(342, "div", 120)(343, "div", 52);
        \u0275\u0275element(344, "i", 121);
        \u0275\u0275elementStart(345, "h6", 13);
        \u0275\u0275text(346, "Data Kehadiran per Divisi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(347, "div", 122);
        \u0275\u0275element(348, "input", 123);
        \u0275\u0275elementStart(349, "button", 124);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_349_listener() {
          return ctx.toggleShowAllDivisi();
        });
        \u0275\u0275element(350, "i", 125);
        \u0275\u0275text(351);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(352, "div", 10)(353, "div", 14);
        \u0275\u0275repeaterCreate(354, DashboardComponent_For_355_Template, 14, 6, "div", 126, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(356, "div", 119)(357, "div", 127)(358, "div", 128)(359, "div", 52);
        \u0275\u0275element(360, "i", 129);
        \u0275\u0275elementStart(361, "h6", 13);
        \u0275\u0275text(362, "Data Presensi Masuk Per Hari");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(363, "div", 130)(364, "select", 131)(365, "option");
        \u0275\u0275text(366, "Semua Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(367, DashboardComponent_For_368_Template, 2, 1, "option", null, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "select", 132)(370, "option");
        \u0275\u0275text(371, "April");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(372, "option");
        \u0275\u0275text(373, "Maret");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(374, "option");
        \u0275\u0275text(375, "Februari");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(376, "option");
        \u0275\u0275text(377, "Januari");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(378, "select", 133)(379, "option");
        \u0275\u0275text(380, "2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "option");
        \u0275\u0275text(382, "2025");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(383, "button", 134);
        \u0275\u0275element(384, "i", 135);
        \u0275\u0275text(385, "Filter ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(386, "div", 10)(387, "div", 136);
        \u0275\u0275repeaterCreate(388, DashboardComponent_For_389_Template, 4, 8, "div", 137, _forTrack2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(390, "div", 138)(391, "span", 139);
        \u0275\u0275element(392, "span", 140);
        \u0275\u0275text(393, "Hadir ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(394, "span", 139);
        \u0275\u0275element(395, "span", 141);
        \u0275\u0275text(396, "Terlambat ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "span", 139);
        \u0275\u0275element(398, "span", 142);
        \u0275\u0275text(399, "Tidak Hadir ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(400, "div", 48)(401, "div", 143)(402, "div", 50)(403, "div", 120)(404, "div", 52);
        \u0275\u0275element(405, "i", 144);
        \u0275\u0275elementStart(406, "h6", 13);
        \u0275\u0275text(407, "Top 5 Paling Sering Terlambat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(408, "div", 145)(409, "div", 146)(410, "button", 147);
        \u0275\u0275text(411, "Bulan Ini");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(412, "button", 148);
        \u0275\u0275text(413, "Bulan Lalu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(414, "select", 149)(415, "option");
        \u0275\u0275text(416, "Semua Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(417, DashboardComponent_For_418_Template, 2, 1, "option", null, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(419, "div", 55)(420, "div", 150)(421, "table", 151)(422, "thead", 152)(423, "tr")(424, "th", 153);
        \u0275\u0275text(425, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(426, "th");
        \u0275\u0275text(427, "Nama Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(428, "th", 114);
        \u0275\u0275text(429, "Terlambat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(430, "th", 114);
        \u0275\u0275text(431, "Total Durasi");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(432, "tbody");
        \u0275\u0275repeaterCreate(433, DashboardComponent_For_434_Template, 17, 6, "tr", null, _forTrack1);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(435, "div", 143)(436, "div", 50)(437, "div", 70);
        \u0275\u0275element(438, "i", 154);
        \u0275\u0275elementStart(439, "h6", 13);
        \u0275\u0275text(440, "Top 5 Karyawan Paling Disiplin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(441, "div", 55);
        \u0275\u0275repeaterCreate(442, DashboardComponent_For_443_Template, 15, 9, "div", 155, _forTrack1);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(444, "div", 119)(445, "div", 120)(446, "div", 52);
        \u0275\u0275element(447, "i", 156);
        \u0275\u0275elementStart(448, "h6", 13);
        \u0275\u0275text(449, "Performa Kehadiran Harian");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(450, "span", 157);
        \u0275\u0275text(451, "Jum, 10 Apr 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(452, "div", 158)(453, "div", 114)(454, "div", 159);
        \u0275\u0275text(455, "62");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(456, "div", 90);
        \u0275\u0275text(457, "Tepat Waktu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(458, "div", 114)(459, "div", 160);
        \u0275\u0275text(460, "13");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(461, "div", 90);
        \u0275\u0275text(462, "Terlambat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(463, "div", 114)(464, "div", 161);
        \u0275\u0275text(465, "8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(466, "div", 90);
        \u0275\u0275text(467, "Belum Hadir");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(468, "div", 114)(469, "div", 162);
        \u0275\u0275text(470, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(471, "div", 90);
        \u0275\u0275text(472, "Presensi Otomatis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(473, "div", 114)(474, "div", 163);
        \u0275\u0275text(475, "7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(476, "div", 90);
        \u0275\u0275text(477, "Cuti / Izin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(478, "div", 55)(479, "ul", 164)(480, "li", 165)(481, "button", 166);
        \u0275\u0275element(482, "i", 167);
        \u0275\u0275text(483, "Tepat Waktu (62) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(484, "li", 165)(485, "button", 168);
        \u0275\u0275element(486, "i", 169);
        \u0275\u0275text(487, "Terlambat (13) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(488, "li", 165)(489, "button", 168);
        \u0275\u0275element(490, "i", 170);
        \u0275\u0275text(491, "Belum Hadir (8) ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(492, "div", 150)(493, "table", 151)(494, "thead", 152)(495, "tr")(496, "th");
        \u0275\u0275text(497, "Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(498, "th");
        \u0275\u0275text(499, "Jadwal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(500, "th");
        \u0275\u0275text(501, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(502, "th");
        \u0275\u0275text(503, "Deskripsi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(504, "th");
        \u0275\u0275text(505, "Waktu Masuk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(506, "tbody");
        \u0275\u0275repeaterCreate(507, DashboardComponent_For_508_Template, 19, 6, "tr", null, _forTrack1);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(509, "div", 119)(510, "div", 127)(511, "div", 128)(512, "div", 52);
        \u0275\u0275element(513, "i", 171);
        \u0275\u0275elementStart(514, "h6", 13);
        \u0275\u0275text(515, "Ringkasan Waktu Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(516, "div", 130);
        \u0275\u0275element(517, "input", 172);
        \u0275\u0275elementStart(518, "span", 173);
        \u0275\u0275text(519, "s/d");
        \u0275\u0275elementEnd();
        \u0275\u0275element(520, "input", 174);
        \u0275\u0275elementStart(521, "select", 149)(522, "option");
        \u0275\u0275text(523, "Semua Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(524, DashboardComponent_For_525_Template, 2, 1, "option", null, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(526, "button", 134);
        \u0275\u0275element(527, "i", 135);
        \u0275\u0275text(528, "Filter ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(529, "div", 10)(530, "div", 14)(531, "div", 175)(532, "div", 176)(533, "div", 177);
        \u0275\u0275text(534, "94%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(535, "div", 117);
        \u0275\u0275text(536, "Rata-rata Kehadiran");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(537, "div", 175)(538, "div", 178)(539, "div", 179);
        \u0275\u0275text(540, "8m");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(541, "div", 117);
        \u0275\u0275text(542, "Rata-rata Keterlambatan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(543, "div", 175)(544, "div", 180)(545, "div", 181);
        \u0275\u0275text(546, "7j 52m");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(547, "div", 117);
        \u0275\u0275text(548, "Rata-rata Jam Kerja");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(549, "div", 175)(550, "div", 182)(551, "div", 183);
        \u0275\u0275text(552, "12");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(553, "div", 117);
        \u0275\u0275text(554, "Total Ketidakhadiran");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(555, "div", 119)(556, "div", 127)(557, "div", 128)(558, "div", 52);
        \u0275\u0275element(559, "i", 184);
        \u0275\u0275elementStart(560, "h6", 13);
        \u0275\u0275text(561, "Ringkasan Lokasi Kehadiran");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(562, "div", 130);
        \u0275\u0275element(563, "input", 185);
        \u0275\u0275elementStart(564, "span", 173);
        \u0275\u0275text(565, "s/d");
        \u0275\u0275elementEnd();
        \u0275\u0275element(566, "input", 185);
        \u0275\u0275elementStart(567, "select", 131)(568, "option");
        \u0275\u0275text(569, "Semua Jenis Kehadiran");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(570, "option");
        \u0275\u0275text(571, "Hadir di Kantor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(572, "option");
        \u0275\u0275text(573, "Work From Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(574, "option");
        \u0275\u0275text(575, "Dinas Luar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(576, "select", 149)(577, "option");
        \u0275\u0275text(578, "Semua Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(579, DashboardComponent_For_580_Template, 2, 1, "option", null, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(581, "button", 134);
        \u0275\u0275element(582, "i", 135);
        \u0275\u0275text(583, "Filter ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(584, "div", 10)(585, "div", 14);
        \u0275\u0275repeaterCreate(586, DashboardComponent_For_587_Template, 13, 13, "div", 186, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(588, "div", 48)(589, "div", 187)(590, "div", 50)(591, "div", 70);
        \u0275\u0275element(592, "i", 188);
        \u0275\u0275elementStart(593, "h6", 13);
        \u0275\u0275text(594, "Karyawan per Divisi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(595, "div", 55)(596, "div", 150)(597, "table", 151)(598, "thead", 152)(599, "tr")(600, "th");
        \u0275\u0275text(601, "Nama Divisi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(602, "th", 114);
        \u0275\u0275text(603, "Total Karyawan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(604, "th", 189);
        \u0275\u0275text(605, "Persentase");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(606, "tbody");
        \u0275\u0275repeaterCreate(607, DashboardComponent_For_608_Template, 13, 9, "tr", null, _forTrack1);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(609, "div", 190)(610, "div", 50)(611, "div", 51)(612, "div", 52);
        \u0275\u0275element(613, "i", 191);
        \u0275\u0275elementStart(614, "h6", 13);
        \u0275\u0275text(615, "Cuti & Izin \u2014 7 Hari Ke Depan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(616, "span", 157);
        \u0275\u0275text(617, "10 \u2013 17 Apr 2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(618, "div", 192);
        \u0275\u0275repeaterCreate(619, DashboardComponent_For_620_Template, 17, 11, "div", 193, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(298);
        \u0275\u0275repeater(ctx.statsUmur);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.statsGenerasi);
        \u0275\u0275advance(41);
        \u0275\u0275property("value", ctx.filterTanggal);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bx-expand", !ctx.showAllDivisi)("bx-collapse", ctx.showAllDivisi);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.showAllDivisi ? "Lihat Sedikit" : "Lihat Semua", " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.showAllDivisi ? ctx.kehadiranDivisi : ctx.kehadiranDivisi.slice(0, 4));
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.kehadiranDivisi);
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.chartPresensi);
        \u0275\u0275advance(29);
        \u0275\u0275repeater(ctx.kehadiranDivisi);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.top5Terlambat);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.top5Disiplin);
        \u0275\u0275advance(65);
        \u0275\u0275repeater(ctx.performaHarian);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.kehadiranDivisi);
        \u0275\u0275advance(55);
        \u0275\u0275repeater(ctx.kehadiranDivisi);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.ringkasanLokasi);
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.karyawanPerDivisi);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.cutiIzin7Hari);
      }
    }, dependencies: [RouterLink, CommonModule, LayoutComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink, CommonModule, LayoutComponent], template: `<app-layout>\r
\r
  <!-- Breadcrumb -->\r
  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">\r
    <div class="breadcrumb-title pe-3">Beranda</div>\r
    <div class="ps-3">\r
      <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb mb-0 p-0">\r
          <li class="breadcrumb-item"><a routerLink="/dashboard"><i class="bx bx-home-alt"></i></a></li>\r
          <li class="breadcrumb-item active" aria-current="page">Dashboard</li>\r
        </ol>\r
      </nav>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 1 : Langkah Awal Pengisian Data Dasar\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm mb-4" style="border-left:4px solid #4f46e5!important">\r
    <div class="card-body">\r
      <div class="d-flex align-items-center gap-2 mb-3">\r
        <i class="bx bx-rocket fs-4 text-primary"></i>\r
        <h6 class="mb-0 fw-semibold">Langkah Awal \u2014 Pengisian Data Dasar Aplikasi</h6>\r
      </div>\r
      <div class="row g-3">\r
\r
        <!-- Step 1 -->\r
        <div class="col-6 col-md-4 col-xl-2">\r
          <a routerLink="/divisi" class="text-decoration-none">\r
            <div class="d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100"\r
                 style="transition:.2s" onmouseover="this.style.background='#f5f3ff'" onmouseout="this.style.background=''">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center mb-2"\r
                   style="width:44px;height:44px;background:#ede9fe">\r
                <i class="bx bx-buildings text-primary fs-5"></i>\r
              </div>\r
              <span class="badge bg-primary rounded-pill mb-1" style="font-size:.68rem">1</span>\r
              <div class="fw-semibold" style="font-size:.82rem">Buat Divisi</div>\r
              <div class="text-muted" style="font-size:.73rem">Organisasi / Departemen</div>\r
            </div>\r
          </a>\r
        </div>\r
\r
        <!-- Step 2 -->\r
        <div class="col-6 col-md-4 col-xl-2">\r
          <a routerLink="/jabatan" class="text-decoration-none">\r
            <div class="d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100"\r
                 style="transition:.2s" onmouseover="this.style.background='#f0fdf4'" onmouseout="this.style.background=''">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center mb-2"\r
                   style="width:44px;height:44px;background:#dcfce7">\r
                <i class="bx bx-briefcase text-success fs-5"></i>\r
              </div>\r
              <span class="badge bg-success rounded-pill mb-1" style="font-size:.68rem">2</span>\r
              <div class="fw-semibold" style="font-size:.82rem">Buat Jabatan</div>\r
              <div class="text-muted" style="font-size:.73rem">Posisi &amp; Hirarki</div>\r
            </div>\r
          </a>\r
        </div>\r
\r
        <!-- Step 3 -->\r
        <div class="col-6 col-md-4 col-xl-2">\r
          <a routerLink="/lokasi" class="text-decoration-none">\r
            <div class="d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100"\r
                 style="transition:.2s" onmouseover="this.style.background='#fff7ed'" onmouseout="this.style.background=''">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center mb-2"\r
                   style="width:44px;height:44px;background:#ffedd5">\r
                <i class="bx bx-map text-warning fs-5"></i>\r
              </div>\r
              <span class="badge bg-warning text-dark rounded-pill mb-1" style="font-size:.68rem">3</span>\r
              <div class="fw-semibold" style="font-size:.82rem">Buat Lokasi</div>\r
              <div class="text-muted" style="font-size:.73rem">Titik Kehadiran</div>\r
            </div>\r
          </a>\r
        </div>\r
\r
        <!-- Step 4 -->\r
        <div class="col-6 col-md-4 col-xl-2">\r
          <a routerLink="/jadwal-shift" class="text-decoration-none">\r
            <div class="d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100"\r
                 style="transition:.2s" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background=''">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center mb-2"\r
                   style="width:44px;height:44px;background:#fee2e2">\r
                <i class="bx bx-time-five text-danger fs-5"></i>\r
              </div>\r
              <span class="badge bg-danger rounded-pill mb-1" style="font-size:.68rem">4</span>\r
              <div class="fw-semibold" style="font-size:.82rem">Jadwal Shift</div>\r
              <div class="text-muted" style="font-size:.73rem">Jam Kerja</div>\r
            </div>\r
          </a>\r
        </div>\r
\r
        <!-- Step 5 -->\r
        <div class="col-6 col-md-4 col-xl-2">\r
          <a routerLink="/karyawan" class="text-decoration-none">\r
            <div class="d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100"\r
                 style="transition:.2s" onmouseover="this.style.background='#eff6ff'" onmouseout="this.style.background=''">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center mb-2"\r
                   style="width:44px;height:44px;background:#dbeafe">\r
                <i class="bx bx-user-plus text-info fs-5"></i>\r
              </div>\r
              <span class="badge bg-info rounded-pill mb-1" style="font-size:.68rem">5</span>\r
              <div class="fw-semibold" style="font-size:.82rem">Tambah Karyawan</div>\r
              <div class="text-muted" style="font-size:.73rem">Data Pegawai</div>\r
            </div>\r
          </a>\r
        </div>\r
\r
        <!-- Step 6 -->\r
        <div class="col-6 col-md-4 col-xl-2">\r
          <a routerLink="/absensi" class="text-decoration-none">\r
            <div class="d-flex flex-column align-items-center text-center p-3 rounded-3 border h-100"\r
                 style="transition:.2s" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center mb-2"\r
                   style="width:44px;height:44px;background:#e2e8f0">\r
                <i class="bx bx-check-shield text-secondary fs-5"></i>\r
              </div>\r
              <span class="badge bg-secondary rounded-pill mb-1" style="font-size:.68rem">6</span>\r
              <div class="fw-semibold" style="font-size:.82rem">Mulai Absensi</div>\r
              <div class="text-muted" style="font-size:.73rem">Rekam Kehadiran</div>\r
            </div>\r
          </a>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 2 : Notifikasi + Kalender + Agenda\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Notifikasi Review Kehadiran -->\r
    <div class="col-12 col-lg-4">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center justify-content-between">\r
          <div class="d-flex align-items-center gap-2">\r
            <i class="bx bx-bell text-warning fs-5"></i>\r
            <h6 class="mb-0 fw-semibold">Notifikasi Review Kehadiran</h6>\r
          </div>\r
          <span class="badge bg-warning text-dark rounded-pill">3</span>\r
        </div>\r
        <div class="card-body pt-2">\r
          <!-- Item notifikasi -->\r
          <div class="d-flex align-items-start gap-2 py-2 border-bottom">\r
            <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1"\r
                 style="width:36px;height:36px;background:#fff3cd">\r
              <i class="bx bx-time text-warning"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <div class="fw-semibold" style="font-size:.83rem">5 Karyawan belum absen masuk</div>\r
              <div class="text-muted" style="font-size:.75rem">Hari ini \xB7 08:30</div>\r
            </div>\r
            <button class="btn btn-sm btn-outline-warning py-0 px-2" style="font-size:.72rem">Review</button>\r
          </div>\r
          <div class="d-flex align-items-start gap-2 py-2 border-bottom">\r
            <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1"\r
                 style="width:36px;height:36px;background:#fde8e8">\r
              <i class="bx bx-error text-danger"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <div class="fw-semibold" style="font-size:.83rem">2 Izin menunggu persetujuan</div>\r
              <div class="text-muted" style="font-size:.75rem">Kemarin \xB7 17:45</div>\r
            </div>\r
            <button class="btn btn-sm btn-outline-danger py-0 px-2" style="font-size:.72rem">Lihat</button>\r
          </div>\r
          <div class="d-flex align-items-start gap-2 py-2">\r
            <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center mt-1"\r
                 style="width:36px;height:36px;background:#d1fae5">\r
              <i class="bx bx-calendar-check text-success"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <div class="fw-semibold" style="font-size:.83rem">Pengajuan cuti baru</div>\r
              <div class="text-muted" style="font-size:.75rem">10 Apr 2026 \xB7 Dewi Anggraini</div>\r
            </div>\r
            <button class="btn btn-sm btn-outline-success py-0 px-2" style="font-size:.72rem">Proses</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Kalender -->\r
    <div class="col-12 col-lg-4">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-calendar text-primary fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Kalender</h6>\r
        </div>\r
        <div class="card-body pt-2">\r
          <!-- Mini calendar header -->\r
          <div class="d-flex align-items-center justify-content-between mb-2">\r
            <button class="btn btn-sm btn-light px-2 py-0"><i class="bx bx-chevron-left"></i></button>\r
            <span class="fw-semibold" style="font-size:.88rem">April 2026</span>\r
            <button class="btn btn-sm btn-light px-2 py-0"><i class="bx bx-chevron-right"></i></button>\r
          </div>\r
          <table class="table table-sm text-center mb-0" style="font-size:.8rem">\r
            <thead>\r
              <tr class="text-muted">\r
                <th>Min</th><th>Sen</th><th>Sel</th><th>Rab</th><th>Kam</th><th>Jum</th><th>Sab</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr>\r
                <td class="text-muted">\u2014</td>\r
                <td>\u2014</td>\r
                <td>1</td><td>2</td><td>3</td><td>4</td>\r
                <td class="text-muted">5</td>\r
              </tr>\r
              <tr>\r
                <td class="text-muted">6</td>\r
                <td>7</td><td>8</td><td>9</td>\r
                <td class="text-white rounded-circle fw-bold"\r
                    style="background:#4f46e5;font-size:.78rem">10</td>\r
                <td>11</td>\r
                <td class="text-muted">12</td>\r
              </tr>\r
              <tr>\r
                <td class="text-muted">13</td>\r
                <td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>\r
                <td class="text-muted">19</td>\r
              </tr>\r
              <tr>\r
                <td class="text-muted">20</td>\r
                <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td>\r
                <td class="text-muted">26</td>\r
              </tr>\r
              <tr>\r
                <td class="text-muted">27</td>\r
                <td>28</td><td>29</td><td>30</td>\r
                <td colspan="3"></td>\r
              </tr>\r
            </tbody>\r
          </table>\r
          <div class="d-flex gap-2 mt-2 flex-wrap">\r
            <span class="badge" style="background:#dcfce7;color:#166534;font-size:.7rem">\u25CF Hari Kerja</span>\r
            <span class="badge" style="background:#fee2e2;color:#991b1b;font-size:.7rem">\u25CF Libur</span>\r
            <span class="badge" style="background:#dbeafe;color:#1e40af;font-size:.7rem">\u25CF Cuti</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Agenda Harian -->\r
    <div class="col-12 col-lg-4">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-task text-info fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Agenda Harian</h6>\r
          <span class="ms-auto text-muted" style="font-size:.78rem">Jum, 10 Apr 2026</span>\r
        </div>\r
        <div class="card-body pt-2" style="max-height:270px;overflow-y:auto">\r
\r
          <div class="d-flex gap-2 mb-3">\r
            <div class="text-center flex-shrink-0" style="min-width:46px">\r
              <div class="text-muted" style="font-size:.7rem">07:00</div>\r
              <div style="width:2px;height:100%;background:#e5e7eb;margin:2px auto"></div>\r
            </div>\r
            <div class="rounded-3 p-2 flex-grow-1" style="background:#ede9fe;border-left:3px solid #4f46e5">\r
              <div class="fw-semibold" style="font-size:.8rem">Check-in Masuk Dibuka</div>\r
              <div class="text-muted" style="font-size:.73rem">Sistem otomatis aktif</div>\r
            </div>\r
          </div>\r
\r
          <div class="d-flex gap-2 mb-3">\r
            <div class="text-center flex-shrink-0" style="min-width:46px">\r
              <div class="text-muted" style="font-size:.7rem">08:00</div>\r
            </div>\r
            <div class="rounded-3 p-2 flex-grow-1" style="background:#dcfce7;border-left:3px solid #16a34a">\r
              <div class="fw-semibold" style="font-size:.8rem">Jam Kerja Mulai</div>\r
              <div class="text-muted" style="font-size:.73rem">Semua divisi</div>\r
            </div>\r
          </div>\r
\r
          <div class="d-flex gap-2 mb-3">\r
            <div class="text-center flex-shrink-0" style="min-width:46px">\r
              <div class="text-muted" style="font-size:.7rem">12:00</div>\r
            </div>\r
            <div class="rounded-3 p-2 flex-grow-1" style="background:#fef9c3;border-left:3px solid #ca8a04">\r
              <div class="fw-semibold" style="font-size:.8rem">Istirahat Siang</div>\r
              <div class="text-muted" style="font-size:.73rem">60 menit</div>\r
            </div>\r
          </div>\r
\r
          <div class="d-flex gap-2 mb-3">\r
            <div class="text-center flex-shrink-0" style="min-width:46px">\r
              <div class="text-muted" style="font-size:.7rem">17:00</div>\r
            </div>\r
            <div class="rounded-3 p-2 flex-grow-1" style="background:#fee2e2;border-left:3px solid #dc2626">\r
              <div class="fw-semibold" style="font-size:.8rem">Jam Kerja Berakhir</div>\r
              <div class="text-muted" style="font-size:.73rem">Rekap harian diproses</div>\r
            </div>\r
          </div>\r
\r
          <div class="d-flex gap-2">\r
            <div class="text-center flex-shrink-0" style="min-width:46px">\r
              <div class="text-muted" style="font-size:.7rem">18:00</div>\r
            </div>\r
            <div class="rounded-3 p-2 flex-grow-1" style="background:#e0f2fe;border-left:3px solid #0284c7">\r
              <div class="fw-semibold" style="font-size:.8rem">Pengajuan Cuti \u2014 Dewi</div>\r
              <div class="text-muted" style="font-size:.73rem">Menunggu approval</div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 3 : Statistik Karyawan (Umur / Generasi / Kelamin)\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Data Karyawan berdasarkan Umur -->\r
    <div class="col-12 col-md-4">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-user-circle text-primary fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Karyawan per Umur</h6>\r
        </div>\r
        <div class="card-body">\r
          @for (item of statsUmur; track item.label) {\r
            <div class="mb-3">\r
              <div class="d-flex justify-content-between mb-1" style="font-size:.8rem">\r
                <span class="text-muted">{{ item.label }}</span>\r
                <span class="fw-semibold">{{ item.jumlah }} orang</span>\r
              </div>\r
              <div class="progress" style="height:8px">\r
                <div class="progress-bar" [style.width]="item.persen + '%'" [style.background]="item.warna"></div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Data Karyawan berdasarkan Generasi -->\r
    <div class="col-12 col-md-4">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-group text-success fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Karyawan per Generasi</h6>\r
        </div>\r
        <div class="card-body">\r
          @for (item of statsGenerasi; track item.label) {\r
            <div class="mb-3">\r
              <div class="d-flex justify-content-between mb-1" style="font-size:.8rem">\r
                <span class="text-muted">{{ item.label }}</span>\r
                <span class="fw-semibold">{{ item.jumlah }} orang</span>\r
              </div>\r
              <div class="progress" style="height:8px">\r
                <div class="progress-bar" [style.width]="item.persen + '%'" [style.background]="item.warna"></div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Data Karyawan berdasarkan Jenis Kelamin -->\r
    <div class="col-12 col-md-4">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-male-female text-info fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Karyawan per Jenis Kelamin</h6>\r
        </div>\r
        <div class="card-body d-flex flex-column align-items-center">\r
          <!-- Donut chart placeholder -->\r
          <div class="position-relative my-3" style="width:140px;height:140px">\r
            <svg viewBox="0 0 36 36" style="width:100%;height:100%;transform:rotate(-90deg)">\r
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" stroke-width="3.8"/>\r
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#4f46e5" stroke-width="3.8"\r
                      stroke-dasharray="58 42" stroke-linecap="round"/>\r
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ec4899" stroke-width="3.8"\r
                      stroke-dasharray="42 58" stroke-dashoffset="-58" stroke-linecap="round"/>\r
            </svg>\r
            <div class="position-absolute top-50 start-50 translate-middle text-center">\r
              <div class="fw-bold" style="font-size:1.1rem">100</div>\r
              <div class="text-muted" style="font-size:.65rem">Total</div>\r
            </div>\r
          </div>\r
          <div class="d-flex gap-4 mt-2">\r
            <div class="text-center">\r
              <div class="d-flex align-items-center gap-1 mb-1">\r
                <span style="width:10px;height:10px;border-radius:50%;background:#4f46e5;display:inline-block"></span>\r
                <span class="text-muted" style="font-size:.78rem">Laki-laki</span>\r
              </div>\r
              <div class="fw-bold" style="font-size:1.1rem">58</div>\r
            </div>\r
            <div class="text-center">\r
              <div class="d-flex align-items-center gap-1 mb-1">\r
                <span style="width:10px;height:10px;border-radius:50%;background:#ec4899;display:inline-block"></span>\r
                <span class="text-muted" style="font-size:.78rem">Perempuan</span>\r
              </div>\r
              <div class="fw-bold" style="font-size:1.1rem">42</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 4 : Data Kehadiran per Divisi\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm mb-4">\r
    <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center justify-content-between flex-wrap gap-2">\r
      <div class="d-flex align-items-center gap-2">\r
        <i class="bx bx-bar-chart-alt-2 text-primary fs-5"></i>\r
        <h6 class="mb-0 fw-semibold">Data Kehadiran per Divisi</h6>\r
      </div>\r
      <div class="d-flex align-items-center gap-2 flex-wrap">\r
        <input type="date" class="form-control form-control-sm" style="max-width:150px" [value]="filterTanggal">\r
        <button class="btn btn-sm btn-outline-secondary" (click)="toggleShowAllDivisi()">\r
          <i class="bx" [class.bx-expand]="!showAllDivisi" [class.bx-collapse]="showAllDivisi"></i>\r
          {{ showAllDivisi ? 'Lihat Sedikit' : 'Lihat Semua' }}\r
        </button>\r
      </div>\r
    </div>\r
    <div class="card-body">\r
      <div class="row g-3">\r
        @for (d of (showAllDivisi ? kehadiranDivisi : kehadiranDivisi.slice(0, 4)); track d.nama) {\r
          <div class="col-12 col-sm-6 col-xl-3">\r
            <div class="d-flex align-items-center justify-content-between p-3 rounded-3 border h-100">\r
              <div class="flex-grow-1">\r
                <div class="fw-semibold mb-1" style="font-size:.85rem">{{ d.nama }}</div>\r
                <div class="text-muted mb-2" style="font-size:.75rem">{{ d.hadir }}/{{ d.total }} hadir</div>\r
                <div class="progress" style="height:6px">\r
                  <div class="progress-bar bg-success" [style.width]="d.persen + '%'"></div>\r
                </div>\r
              </div>\r
              <div class="ms-3 text-center">\r
                <div class="fw-bold" style="font-size:1.3rem;color:#16a34a">{{ d.persen }}%</div>\r
                <div class="text-muted" style="font-size:.7rem">hadir</div>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 5 : Data Presensi Masuk Per Hari\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm mb-4">\r
    <div class="card-header bg-transparent border-0 pb-0">\r
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <i class="bx bx-line-chart text-success fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Data Presensi Masuk Per Hari</h6>\r
        </div>\r
        <div class="d-flex gap-2 flex-wrap align-items-center">\r
          <select class="form-select form-select-sm" style="max-width:160px">\r
            <option>Semua Divisi</option>\r
            @for (d of kehadiranDivisi; track d.nama) {\r
              <option>{{ d.nama }}</option>\r
            }\r
          </select>\r
          <select class="form-select form-select-sm" style="max-width:110px">\r
            <option>April</option><option>Maret</option><option>Februari</option><option>Januari</option>\r
          </select>\r
          <select class="form-select form-select-sm" style="max-width:90px">\r
            <option>2026</option><option>2025</option>\r
          </select>\r
          <button class="btn btn-primary btn-sm px-3">\r
            <i class="bx bx-filter-alt me-1"></i>Filter\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="card-body">\r
      <!-- Chart placeholder (bar chart area) -->\r
      <div class="rounded-3 d-flex align-items-end justify-content-around gap-1 px-2"\r
           style="background:#f8fafc;height:180px;padding-bottom:8px">\r
        @for (bar of chartPresensi; track bar.hari) {\r
          <div class="d-flex flex-column align-items-center flex-grow-1" style="max-width:40px">\r
            <div class="rounded-top w-100"\r
                 [style.height]="bar.tinggi + 'px'"\r
                 [style.background]="bar.warna"\r
                 title="{{ bar.jumlah }} orang \u2014 {{ bar.hari }}"></div>\r
            <div class="text-muted mt-1" style="font-size:.65rem">{{ bar.hari }}</div>\r
          </div>\r
        }\r
      </div>\r
      <div class="d-flex gap-3 mt-2 flex-wrap">\r
        <span class="d-flex align-items-center gap-1" style="font-size:.75rem">\r
          <span style="width:12px;height:12px;border-radius:3px;background:#4ade80;display:inline-block"></span>Hadir\r
        </span>\r
        <span class="d-flex align-items-center gap-1" style="font-size:.75rem">\r
          <span style="width:12px;height:12px;border-radius:3px;background:#facc15;display:inline-block"></span>Terlambat\r
        </span>\r
        <span class="d-flex align-items-center gap-1" style="font-size:.75rem">\r
          <span style="width:12px;height:12px;border-radius:3px;background:#f87171;display:inline-block"></span>Tidak Hadir\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 6 : Top 5 Terlambat & Top 5 Disiplin\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Top 5 Paling Sering Terlambat -->\r
    <div class="col-12 col-lg-6">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center justify-content-between flex-wrap gap-2">\r
          <div class="d-flex align-items-center gap-2">\r
            <i class="bx bx-alarm-exclamation text-danger fs-5"></i>\r
            <h6 class="mb-0 fw-semibold">Top 5 Paling Sering Terlambat</h6>\r
          </div>\r
          <div class="d-flex gap-2 flex-wrap">\r
            <div class="btn-group btn-group-sm">\r
              <button class="btn btn-outline-secondary active">Bulan Ini</button>\r
              <button class="btn btn-outline-secondary">Bulan Lalu</button>\r
            </div>\r
            <select class="form-select form-select-sm" style="max-width:150px">\r
              <option>Semua Divisi</option>\r
              @for (d of kehadiranDivisi; track d.nama) {\r
                <option>{{ d.nama }}</option>\r
              }\r
            </select>\r
          </div>\r
        </div>\r
        <div class="card-body pt-2">\r
          <div class="table-responsive">\r
            <table class="table table-hover align-middle mb-0" style="font-size:.83rem">\r
              <thead class="table-light">\r
                <tr>\r
                  <th style="width:32px">#</th>\r
                  <th>Nama Karyawan</th>\r
                  <th class="text-center">Terlambat</th>\r
                  <th class="text-center">Total Durasi</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (k of top5Terlambat; track k.nama; let i = $index) {\r
                  <tr>\r
                    <td class="text-muted">{{ i + 1 }}</td>\r
                    <td>\r
                      <div class="d-flex align-items-center gap-2">\r
                        <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                             style="width:32px;height:32px;background:#fee2e2;color:#dc2626;font-size:.75rem;font-weight:700">\r
                          {{ k.nama.charAt(0) }}\r
                        </div>\r
                        <div>\r
                          <div class="fw-semibold" style="font-size:.82rem">{{ k.nama }}</div>\r
                          <div class="text-muted" style="font-size:.73rem">{{ k.divisi }}</div>\r
                        </div>\r
                      </div>\r
                    </td>\r
                    <td class="text-center">\r
                      <span class="badge bg-danger">{{ k.jumlah }}x</span>\r
                    </td>\r
                    <td class="text-center text-muted" style="font-size:.78rem">{{ k.durasi }}</td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Top 5 Paling Disiplin -->\r
    <div class="col-12 col-lg-6">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-trophy text-warning fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Top 5 Karyawan Paling Disiplin</h6>\r
        </div>\r
        <div class="card-body pt-2">\r
          @for (k of top5Disiplin; track k.nama; let i = $index) {\r
            <div class="d-flex align-items-center gap-3 py-2"\r
                 [class.border-bottom]="i < top5Disiplin.length - 1">\r
              <!-- Ranking badge -->\r
              <div class="fw-bold text-center flex-shrink-0"\r
                   [style.color]="i === 0 ? '#f59e0b' : i === 1 ? '#94a3b8' : i === 2 ? '#d97706' : '#6b7280'"\r
                   style="font-size:1rem;min-width:24px">\r
                {{ i === 0 ? '\u{1F947}' : i === 1 ? '\u{1F948}' : i === 2 ? '\u{1F949}' : '#' + (i + 1) }}\r
              </div>\r
              <!-- Avatar -->\r
              <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"\r
                   style="width:40px;height:40px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;font-weight:700;font-size:.9rem">\r
                {{ k.nama.charAt(0) }}\r
              </div>\r
              <!-- Info -->\r
              <div class="flex-grow-1">\r
                <div class="fw-semibold" style="font-size:.83rem">{{ k.nama }}</div>\r
                <div class="text-muted" style="font-size:.73rem">{{ k.divisi }}</div>\r
              </div>\r
              <!-- Skor -->\r
              <div class="text-end">\r
                <div class="fw-bold text-success" style="font-size:.9rem">{{ k.skor }}</div>\r
                <div class="text-muted" style="font-size:.68rem">skor</div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 7 : Performa Kehadiran Harian\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm mb-4">\r
    <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center justify-content-between flex-wrap gap-2">\r
      <div class="d-flex align-items-center gap-2">\r
        <i class="bx bx-stats text-primary fs-5"></i>\r
        <h6 class="mb-0 fw-semibold">Performa Kehadiran Harian</h6>\r
        <span class="badge bg-light text-muted border" style="font-size:.72rem">Jum, 10 Apr 2026</span>\r
      </div>\r
      <!-- Ringkasan angka harian -->\r
      <div class="d-flex gap-3 flex-wrap">\r
        <div class="text-center">\r
          <div class="fw-bold text-success" style="font-size:1.2rem">62</div>\r
          <div class="text-muted" style="font-size:.7rem">Tepat Waktu</div>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold text-warning" style="font-size:1.2rem">13</div>\r
          <div class="text-muted" style="font-size:.7rem">Terlambat</div>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold text-danger" style="font-size:1.2rem">8</div>\r
          <div class="text-muted" style="font-size:.7rem">Belum Hadir</div>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold text-info" style="font-size:1.2rem">5</div>\r
          <div class="text-muted" style="font-size:.7rem">Presensi Otomatis</div>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold" style="font-size:1.2rem;color:#8b5cf6">7</div>\r
          <div class="text-muted" style="font-size:.7rem">Cuti / Izin</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Tab kehadiran harian -->\r
    <div class="card-body pt-2">\r
      <ul class="nav nav-tabs nav-tabs-bottom mb-3" style="border-bottom:1px solid #e5e7eb">\r
        <li class="nav-item">\r
          <button class="nav-link active" style="font-size:.83rem">\r
            <i class="bx bx-check-circle text-success me-1"></i>Tepat Waktu (62)\r
          </button>\r
        </li>\r
        <li class="nav-item">\r
          <button class="nav-link" style="font-size:.83rem">\r
            <i class="bx bx-time-five text-warning me-1"></i>Terlambat (13)\r
          </button>\r
        </li>\r
        <li class="nav-item">\r
          <button class="nav-link" style="font-size:.83rem">\r
            <i class="bx bx-x-circle text-danger me-1"></i>Belum Hadir (8)\r
          </button>\r
        </li>\r
      </ul>\r
\r
      <!-- Tab: Tepat Waktu -->\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0" style="font-size:.83rem">\r
          <thead class="table-light">\r
            <tr>\r
              <th>Karyawan</th>\r
              <th>Jadwal</th>\r
              <th>Status</th>\r
              <th>Deskripsi</th>\r
              <th>Waktu Masuk</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (k of performaHarian; track k.nama) {\r
              <tr>\r
                <td>\r
                  <div class="d-flex align-items-center gap-2">\r
                    <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"\r
                         style="width:36px;height:36px;background:linear-gradient(135deg,#4ade80,#22c55e);color:#fff;font-weight:700;font-size:.82rem">\r
                      {{ k.nama.charAt(0) }}\r
                    </div>\r
                    <div>\r
                      <div class="fw-semibold" style="font-size:.82rem">{{ k.nama }}</div>\r
                      <div class="text-muted" style="font-size:.73rem">{{ k.divisi }}</div>\r
                    </div>\r
                  </div>\r
                </td>\r
                <td class="text-muted" style="font-size:.78rem">{{ k.jadwal }}</td>\r
                <td>\r
                  <span class="badge bg-success" style="font-size:.72rem">Tepat Waktu</span>\r
                </td>\r
                <td class="text-muted" style="font-size:.78rem">{{ k.deskripsi }}</td>\r
                <td class="fw-semibold text-success" style="font-size:.82rem">{{ k.waktu }}</td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 8 : Ringkasan Waktu Kehadiran\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm mb-4">\r
    <div class="card-header bg-transparent border-0 pb-0">\r
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <i class="bx bx-time text-info fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Ringkasan Waktu Kehadiran</h6>\r
        </div>\r
        <div class="d-flex gap-2 flex-wrap align-items-center">\r
          <input type="date" class="form-control form-control-sm" style="max-width:145px" placeholder="Tanggal Awal">\r
          <span class="text-muted" style="font-size:.82rem">s/d</span>\r
          <input type="date" class="form-control form-control-sm" style="max-width:145px" placeholder="Tanggal Akhir">\r
          <select class="form-select form-select-sm" style="max-width:150px">\r
            <option>Semua Divisi</option>\r
            @for (d of kehadiranDivisi; track d.nama) {\r
              <option>{{ d.nama }}</option>\r
            }\r
          </select>\r
          <button class="btn btn-primary btn-sm px-3">\r
            <i class="bx bx-filter-alt me-1"></i>Filter\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="card-body">\r
      <div class="row g-3">\r
        <div class="col-6 col-md-3">\r
          <div class="text-center p-3 rounded-3" style="background:#f0fdf4">\r
            <div class="fw-bold text-success" style="font-size:1.8rem">94%</div>\r
            <div class="text-muted" style="font-size:.78rem">Rata-rata Kehadiran</div>\r
          </div>\r
        </div>\r
        <div class="col-6 col-md-3">\r
          <div class="text-center p-3 rounded-3" style="background:#fef3c7">\r
            <div class="fw-bold text-warning" style="font-size:1.8rem">8m</div>\r
            <div class="text-muted" style="font-size:.78rem">Rata-rata Keterlambatan</div>\r
          </div>\r
        </div>\r
        <div class="col-6 col-md-3">\r
          <div class="text-center p-3 rounded-3" style="background:#eff6ff">\r
            <div class="fw-bold text-primary" style="font-size:1.8rem">7j 52m</div>\r
            <div class="text-muted" style="font-size:.78rem">Rata-rata Jam Kerja</div>\r
          </div>\r
        </div>\r
        <div class="col-6 col-md-3">\r
          <div class="text-center p-3 rounded-3" style="background:#fdf2f8">\r
            <div class="fw-bold" style="font-size:1.8rem;color:#db2777">12</div>\r
            <div class="text-muted" style="font-size:.78rem">Total Ketidakhadiran</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 9 : Ringkasan Lokasi Kehadiran\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="card border-0 shadow-sm mb-4">\r
    <div class="card-header bg-transparent border-0 pb-0">\r
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\r
        <div class="d-flex align-items-center gap-2">\r
          <i class="bx bx-map-pin text-danger fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Ringkasan Lokasi Kehadiran</h6>\r
        </div>\r
        <div class="d-flex gap-2 flex-wrap align-items-center">\r
          <input type="date" class="form-control form-control-sm" style="max-width:145px">\r
          <span class="text-muted" style="font-size:.82rem">s/d</span>\r
          <input type="date" class="form-control form-control-sm" style="max-width:145px">\r
          <select class="form-select form-select-sm" style="max-width:160px">\r
            <option>Semua Jenis Kehadiran</option>\r
            <option>Hadir di Kantor</option>\r
            <option>Work From Home</option>\r
            <option>Dinas Luar</option>\r
          </select>\r
          <select class="form-select form-select-sm" style="max-width:150px">\r
            <option>Semua Divisi</option>\r
            @for (d of kehadiranDivisi; track d.nama) {\r
              <option>{{ d.nama }}</option>\r
            }\r
          </select>\r
          <button class="btn btn-primary btn-sm px-3">\r
            <i class="bx bx-filter-alt me-1"></i>Filter\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="card-body">\r
      <div class="row g-3">\r
        @for (lok of ringkasanLokasi; track lok.nama) {\r
          <div class="col-12 col-sm-4">\r
            <div class="d-flex align-items-center gap-3 p-3 rounded-3 border">\r
              <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"\r
                   style="width:44px;height:44px" [style.background]="lok.bg">\r
                <i class="bx" [class]="lok.icon" [style.color]="lok.warna"></i>\r
              </div>\r
              <div class="flex-grow-1">\r
                <div class="fw-semibold" style="font-size:.85rem">{{ lok.nama }}</div>\r
                <div class="fw-bold" style="font-size:1.2rem">{{ lok.jumlah }}</div>\r
                <div class="progress mt-1" style="height:5px">\r
                  <div class="progress-bar" [style.width]="lok.persen + '%'" [style.background]="lok.warna"></div>\r
                </div>\r
              </div>\r
              <div class="text-muted" style="font-size:.85rem">{{ lok.persen }}%</div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       SECTION 10 : Karyawan per Divisi + Cuti & Izin 7 Hari\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Karyawan per Divisi -->\r
    <div class="col-12 col-lg-5">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center gap-2">\r
          <i class="bx bx-pie-chart-alt text-primary fs-5"></i>\r
          <h6 class="mb-0 fw-semibold">Karyawan per Divisi</h6>\r
        </div>\r
        <div class="card-body pt-2">\r
          <div class="table-responsive">\r
            <table class="table table-hover align-middle mb-0" style="font-size:.83rem">\r
              <thead class="table-light">\r
                <tr>\r
                  <th>Nama Divisi</th>\r
                  <th class="text-center">Total Karyawan</th>\r
                  <th class="text-end">Persentase</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (d of karyawanPerDivisi; track d.nama; let i = $index) {\r
                  <tr>\r
                    <td>\r
                      <div class="d-flex align-items-center gap-2">\r
                        <span class="rounded-circle d-inline-block flex-shrink-0"\r
                              style="width:10px;height:10px"\r
                              [style.background]="warnaDivisi[i % warnaDivisi.length]"></span>\r
                        {{ d.nama }}\r
                      </div>\r
                    </td>\r
                    <td class="text-center fw-semibold">{{ d.total }}</td>\r
                    <td class="text-end">\r
                      <div class="d-flex align-items-center justify-content-end gap-2">\r
                        <div class="progress flex-grow-1" style="height:6px;max-width:80px">\r
                          <div class="progress-bar"\r
                               [style.width]="d.persen + '%'"\r
                               [style.background]="warnaDivisi[i % warnaDivisi.length]"></div>\r
                        </div>\r
                        <span class="text-muted" style="font-size:.78rem">{{ d.persen }}%</span>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Cuti & Izin 7 Hari Ke Depan -->\r
    <div class="col-12 col-lg-7">\r
      <div class="card border-0 shadow-sm h-100">\r
        <div class="card-header bg-transparent border-0 pb-0 d-flex align-items-center justify-content-between">\r
          <div class="d-flex align-items-center gap-2">\r
            <i class="bx bx-calendar-event fs-5" style="color:#8b5cf6"></i>\r
            <h6 class="mb-0 fw-semibold">Cuti &amp; Izin \u2014 7 Hari Ke Depan</h6>\r
          </div>\r
          <span class="badge bg-light text-muted border" style="font-size:.72rem">10 \u2013 17 Apr 2026</span>\r
        </div>\r
        <div class="card-body pt-2" style="max-height:380px;overflow-y:auto">\r
          @for (item of cutiIzin7Hari; track item.nama) {\r
            <div class="d-flex align-items-center gap-3 py-2 border-bottom">\r
              <!-- Avatar -->\r
              <div class="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"\r
                   style="width:38px;height:38px;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;font-weight:700;font-size:.85rem">\r
                {{ item.nama.charAt(0) }}\r
              </div>\r
              <!-- Info karyawan -->\r
              <div class="flex-grow-1">\r
                <div class="fw-semibold" style="font-size:.83rem">{{ item.nama }}</div>\r
                <div class="text-muted" style="font-size:.73rem">{{ item.divisi }}</div>\r
              </div>\r
              <!-- Jenis -->\r
              <span class="badge rounded-pill"\r
                    [style.background]="item.jenis === 'CUTI' ? '#ede9fe' : '#fef3c7'"\r
                    [style.color]="item.jenis === 'CUTI' ? '#5b21b6' : '#92400e'"\r
                    style="font-size:.72rem">\r
                {{ item.jenis }}\r
              </span>\r
              <!-- Tanggal -->\r
              <div class="text-end" style="min-width:90px">\r
                <div class="fw-semibold" style="font-size:.78rem">{{ item.tanggalMulai }}</div>\r
                <div class="text-muted" style="font-size:.7rem">s/d {{ item.tanggalSelesai }}</div>\r
              </div>\r
              <!-- Durasi -->\r
              <span class="badge bg-light text-muted border" style="font-size:.7rem">{{ item.hari }} hari</span>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
</app-layout>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-RJRGXPR6.js.map
