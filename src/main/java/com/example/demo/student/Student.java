/**
 * 
 */
package com.example.demo.student;

import lombok.AllArgsConstructor;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import com.fasterxml.jackson.annotation.JsonProperty;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor

public class Student {

	private Long id;
	private String name;
	private String email;
	private Enum<Gender> gender;
	public Student(@JsonProperty("id") long id,
			@JsonProperty("name") String name,
			@JsonProperty("email") String email,
			@JsonProperty("gender")Enum<Gender> gender) {
		 	this.id = id;
	        this.name = name;
			this.email = email;
	        this.gender = gender;
		
	}
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	

	/**
	 * @return the gender
	 */
	public Enum<Gender> getGender() {
		return gender;
	}
	/**
	 * @param gender the gender to set
	 */
	
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	
	
	    enum Gender {
	        MALE, FEMALE
	    }
	
}



