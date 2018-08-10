package com.moon.springboot.service.impl;

import org.springframework.stereotype.Service;

import com.moon.springboot.entity.Hello;
import com.moon.springboot.service.HelloService;

@Service("helloService")
public class HelloServiceImpl implements HelloService {

	@Override
	public String getHelloWorld(Hello params, String flag) {
		System.out.println("flag : "+ flag);
		return params.getAddress() + " --- "+ params.getEmail();
	}

}
