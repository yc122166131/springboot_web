package com.atguigu.springboot.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
	
	
	
	@Value("${coustomTest.role}")
	private String role;
	
    @GetMapping("/abc")
    public String hello(Model model){
        model.addAttribute("msg",role);
        return "success";
    }
    
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
