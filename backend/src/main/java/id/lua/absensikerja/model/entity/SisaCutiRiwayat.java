package id.lua.absensikerja.model.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

/**
 * Ledger (buku besar) perubahan sisa cuti karyawan.
 * Setiap kali sisa cuti berubah (manual, approval, pembatalan, pembaruan otomatis)
 * satu baris dicatat di sini.
 */
@Entity
@Table(name = "sisa_cuti_riwayat")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class SisaCutiRiwayat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false)
    private Karyawan karyawan;

    @Column(name = "tanggal", nullable = false)
    @Builder.Default
    private LocalDateTime tanggal = LocalDateTime.now();

    /** Deskripsi singkat perubahan, mis. "Cuti (testing) pada 2026-04-20". */
    @Column(name = "deskripsi", nullable = false, length = 255)
    private String deskripsi;

    /** Jumlah perubahan (+/-). Positif = tambah, negatif = kurang. */
    @Column(name = "jumlah", nullable = false)
    private int jumlah;

    /** Saldo sisa cuti setelah perubahan ini diterapkan. */
    @Column(name = "saldo", nullable = false)
    private int saldo;
}
