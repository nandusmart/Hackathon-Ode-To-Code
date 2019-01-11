package com.hex.hackathon.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hex.hackathon.dao.PersonalityRequest;
import com.hex.hackathon.services.PersonalityInsightService;

@RestController
@RequestMapping("/api")
public class CongitiveAPIControllers {
	@Autowired
	private Environment env;
	
	@CrossOrigin
	@PostMapping("/personalityinsight")
	public String getWatsonPersonalityInsights(@RequestBody PersonalityRequest value)
	{
		PersonalityInsightService service = new PersonalityInsightService();
		String str = service.getInsights(value.getUserMessages());
		return str;
	}
	
	@CrossOrigin
	@GetMapping("/moodstatus/{name}")
	public String getTwitterIntegration(@PathVariable String name) throws JsonParseException, JsonMappingException, IOException {
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper mapper = new ObjectMapper();
		PersonalityInsightService service = new PersonalityInsightService();
		
		String twitterUrl = env.getProperty("twitterurl");
		  //= "http://localhost:8090/getAllTweets/";
		//System.out.println(twitterUrl + "--------------");
		ResponseEntity<String> response
		  = restTemplate.getForEntity(twitterUrl + name, String.class);
		String result = response.getBody();
		
		PersonalityRequest obj = mapper.readValue(result, PersonalityRequest.class);
		
		String str = service.getInsights(obj.getUserMessages());
		return str;
	}

}
