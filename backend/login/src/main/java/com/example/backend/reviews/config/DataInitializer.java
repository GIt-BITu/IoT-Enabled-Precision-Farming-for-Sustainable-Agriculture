package com.example.backend.reviews.config;

import com.example.backend.reviews.model.Review;
import com.example.backend.reviews.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DataInitializer {

    private final ReviewRepository reviewRepository;

    @Value("${spring.datasource.url}")
    private String externalDbUrl;

    @Value("${spring.datasource.username}")
    private String externalDbUsername;

    @Value("${spring.datasource.password}")
    private String externalDbPassword;

    @Value("${spring.datasource.driver}")
    private String externalDbDriver;

    @Value("${spring.datasource.query:SELECT * FROM reviews}")
    private String externalDbQuery;

    @Bean
    @Profile("!prod") // Exclude in production
    public CommandLineRunner initData() {
        return args -> {
            log.info("Fetching reviews from external database...");

            try {
                JdbcTemplate externalJdbcTemplate = new JdbcTemplate(createExternalDataSource());
                List<Review> reviews = new ArrayList<>();

                externalJdbcTemplate.query(externalDbQuery, (ResultSet rs) -> {
                    while (rs.next()) {
                        Review review = Review.builder()
                                .name(rs.getString("name"))
                                .review(rs.getString("review"))
                                .stars(rs.getInt("stars"))
                                .image(rs.getString("image"))
                                .build();

                        try {
                            review.setCreatedAt(rs.getTimestamp("created_at") != null
                                    ? rs.getTimestamp("created_at").toLocalDateTime()
                                    : LocalDateTime.now());
                        } catch (Exception e) {
                            review.setCreatedAt(LocalDateTime.now());
                        }

                        reviews.add(review);
                    }
                });

                if (!reviews.isEmpty()) {
                    reviewRepository.saveAll(reviews);
                    log.info("Imported {} reviews from external DB", reviews.size());
                } else {
                    log.warn("No reviews found in external database.");
                }

            } catch (Exception e) {
                log.error("Error fetching reviews from external DB: {}", e.getMessage(), e);
            }
        };
    }

    private DataSource createExternalDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(externalDbDriver);
        dataSource.setUrl(externalDbUrl);
        dataSource.setUsername(externalDbUsername);
        dataSource.setPassword(externalDbPassword);
        return dataSource;
    }
}
