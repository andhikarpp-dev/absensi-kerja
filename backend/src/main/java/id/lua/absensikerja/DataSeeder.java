package id.lua.absensikerja;

import id.lua.absensikerja.model.entity.JenisPeringatan;
import id.lua.absensikerja.model.entity.PengaturanCutiKhusus;
import id.lua.absensikerja.model.entity.Role;
import id.lua.absensikerja.model.enums.RoleType;
import id.lua.absensikerja.repository.JenisPeringatanRepository;
import id.lua.absensikerja.repository.PengaturanCutiKhususRepository;
import id.lua.absensikerja.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final JenisPeringatanRepository jenisPeringatanRepository;
    private final PengaturanCutiKhususRepository cutiKhususRepository;
    private final ApplicationContext ctx;

    @Override
    public void run(String... args) {
        DataSeeder proxy = ctx.getBean(DataSeeder.class);
        for (RoleType type : RoleType.values()) {
            try {
                proxy.seedRole(type);
            } catch (Exception e) {
                log.warn("Tidak dapat menyimpan role '{}': {}. " +
                         "Jalankan SQL berikut di database:\n" +
                         "  ALTER TABLE roles DROP CONSTRAINT IF EXISTS roles_name_check;\n" +
                         "  ALTER TABLE roles ADD CONSTRAINT roles_name_check " +
                         "CHECK (name IN ('ADMIN','KARYAWAN','PEMILIK'));",
                         type, e.getMessage());
            }
        }
        try { proxy.seedJenisPeringatan(); }
        catch (Exception e) { log.warn("Gagal seed JenisPeringatan: {}", e.getMessage()); }
        try { proxy.seedCutiKhusus(); }
        catch (Exception e) { log.warn("Gagal seed CutiKhusus: {}", e.getMessage()); }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void seedRole(RoleType type) {
        if (roleRepository.findByName(type).isEmpty()) {
            roleRepository.saveAndFlush(Role.builder().name(type).build());
            log.info("Role '{}' berhasil dibuat.", type);
        }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void seedJenisPeringatan() {
        String[][] defaults = { {"SP1", "Surat Peringatan 1"},
                                {"SP2", "Surat Peringatan 2"},
                                {"SP3", "Surat Peringatan 3"} };
        for (String[] d : defaults) {
            if (!jenisPeringatanRepository.existsByKodeIgnoreCase(d[0])) {
                jenisPeringatanRepository.saveAndFlush(
                        JenisPeringatan.builder().kode(d[0]).nama(d[1]).aktif(true).build());
                log.info("Jenis Peringatan '{}' berhasil dibuat.", d[0]);
            }
        }
    }

    /**
     * Seed 9 jenis cuti khusus default (global / tanpa perusahaan) jika belum ada.
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void seedCutiKhusus() {
        // Jika sudah ada data global, skip
        if (!cutiKhususRepository.findByPerusahaanIsNullOrderByIdAsc().isEmpty()) return;

        Object[][] data = {
            { "Cuti Menikah",                                              3,  1,    3    },
            { "Cuti Menikahkan Anak",                                      2,  null, null },
            { "Cuti Mengkhitankan Anak",                                   2,  null, null },
            { "Cuti Membaptiskan Anak",                                    2,  null, null },
            { "Cuti Melahirkan",                                           90, null, null },
            { "Cuti Istri Melahirkan",                                     2,  null, null },
            { "Cuti Istri Keguguran Kandungan",                            1,  null, null },
            { "Cuti Duka (Suami/Istri, Orangtua/Mertua, Anak/Menantu)",   2,  null, null },
            { "Cuti Duka (Anggota Keluarga dalam Satu Rumah)",             1,  null, null },
        };

        for (Object[] d : data) {
            cutiKhususRepository.saveAndFlush(PengaturanCutiKhusus.builder()
                    .perusahaan(null)
                    .nama((String) d[0])
                    .maksHariPerRequest((Integer) d[1])
                    .maksRequestPerTahun((Integer) d[2])
                    .maksHariPerTahun((Integer) d[3])
                    .aktif(true)
                    .build());
        }
        log.info("Seed 9 jenis cuti khusus default selesai.");
    }
}
