package com.moon.springboot.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import com.moon.springboot.annotation.MyLog;

@Component
@Aspect
public class MyLogAspect {
	
	
	@Pointcut("@annotation(com.moon.springboot.annotation.Mylog)")
	private void myCut(){}
	
	@Pointcut("execution(* com.*.service..*ServiceImpl.*(..))")
	private void myRecord(){}
	
	
	@Before("cut()&&@annotation(myLog)")
	public void logBefore(JoinPoint joinPoint ,MyLog mylog){
		System.out.println("========== log before =========");
		System.out.println("mylog值为： "+ mylog.value());
	}
	
	
	public void logAround(ProceedingJoinPoint joinPoint){
		System.out.println("环绕通知开始了~");
	
		try {
			joinPoint.proceed();
		} catch (Throwable e) {
			e.printStackTrace();
		}
		System.out.println("环绕通知开始了~");
	}

	

	
	
}
