package com.moon.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.moon.springboot.annotation.MyLog;
import com.moon.springboot.entity.Hello;
import com.moon.springboot.service.HelloService;

@Controller
public class HelloController {
	
	
	
	
	@Value("${coustomTest.role}")
	private String role;
	
	@Autowired
	private HelloService helloService;
	
	@PostMapping("/abc")
    public String hello(Model model,String flag,@RequestBody Hello params){
		if(params!=null){
			helloService.getHelloWorld(params,flag);
		}
        model.addAttribute("msg",role);
        return "success";
    }
    

    @MyLog
    @PostMapping("/test")
    @ResponseBody
    public String hello1(Model model,String wordKey){
        System.out.println(wordKey);
        try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return "{\"oth\":[{\"name\":\"jack\",\"age\":\"20岁\"}]}";
    }
}
