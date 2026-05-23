package id.lua.absensikerja;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig implements WebMvcConfigurer {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Foto profil
        registry.addResourceHandler("/uploads/foto-profil/**")
                .addResourceLocations("file:uploads/foto-profil/");
        // File identitas tambahan
        registry.addResourceHandler("/uploads/identitas/**")
                .addResourceLocations("file:uploads/identitas/");
    }
}
