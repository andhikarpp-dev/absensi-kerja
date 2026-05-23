package id.lua.absensikerja.model.entity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;
@Entity
@Table(name = "payroll_rekening_bank")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PayrollRekeningBank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "karyawan_id", nullable = false, unique = true)
    private Karyawan karyawan;
    @Column(name = "nama_bank", length = 100)
    private String namaBank;
    @Column(name = "nomor_rekening", length = 50)
    private String nomorRekening;
    @Column(name = "atas_nama", length = 150)
    private String atasNama;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
