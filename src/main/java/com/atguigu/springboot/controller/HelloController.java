package com.atguigu.springboot.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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
    
    @GetMapping("/test")
    @ResponseBody
    public String hello1(Model model){
        model.addAttribute("msg","你好");
        return "666";
    }
}
