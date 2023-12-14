package com.attia12.Planning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PlanningApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanningApplication.class, args);
	}

}
