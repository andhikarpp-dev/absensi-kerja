// src/app/core/models/pola-kerja.model.ts
var HARI_LIST = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU", "MINGGU"];
function defaultHariList() {
  return HARI_LIST.map((hari) => ({
    hari,
    polaHari: "HARI_KERJA",
    jamMasuk: "",
    jamKeluar: "",
    mulaiIstirahat: "",
    selesaiIstirahat: "",
    maksMenitIstirahat: 60
  }));
}

export {
  HARI_LIST,
  defaultHariList
};
//# sourceMappingURL=chunk-APKBODS7.js.map
