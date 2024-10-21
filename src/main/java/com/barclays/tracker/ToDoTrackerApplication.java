package com.barclays.tracker;

import com.barclays.tracker.entity.User;
import com.barclays.tracker.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ToDoTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToDoTrackerApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			repository.save(new User("John Doe"));
			repository.save(new User("Jane Smith"));
		};
	}
}
