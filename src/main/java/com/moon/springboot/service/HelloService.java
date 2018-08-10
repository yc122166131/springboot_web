package com.moon.springboot.service;

import com.moon.springboot.entity.Hello;


public interface HelloService {
	public String getHelloWorld(Hello params, String flag);
}
