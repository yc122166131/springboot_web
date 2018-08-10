package com.moon.springboot.entity;

import java.io.Serializable;

/**
 * 作为 测试entity
 * @author yuanchen
 *
 */
public class Hello implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 9044619440008826311L;
	
	private Long userId;
	private String userName;
	private Integer sex;
	private String mobile;
	private String email;
	private String address;
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getSex() {
		return sex;
	}
	public void setSex(Integer sex) {
		this.sex = sex;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}
