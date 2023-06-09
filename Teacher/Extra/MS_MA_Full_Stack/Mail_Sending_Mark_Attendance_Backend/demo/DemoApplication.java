package com.FullStackApplication.demo;

import com.FullStackApplication.demo.service.Mailservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private Mailservice mailservice;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void sendMail(){
		mailservice.sendMailToAll();
	}

//	@Override
//	public void run(String... args) throws Exception{
//		mailservice.sendMailToAll();
//	}

}
