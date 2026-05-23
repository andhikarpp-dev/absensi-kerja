package id.lua.absensikerja.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HealthController {

    /** Redirect root ke frontend */
    @GetMapping("/")
    public ResponseEntity<Void> root() {
        return ResponseEntity.status(302)
                .header("Location", "/ak/")
                .build();
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("app",       "Absensi Kerja API");
        data.put("version",   "1.0.0");
        data.put("status",    "UP");
        data.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));

        return ResponseEntity.ok(Map.of(
                "status", "success",
                "data", data
        ));
    }
}

