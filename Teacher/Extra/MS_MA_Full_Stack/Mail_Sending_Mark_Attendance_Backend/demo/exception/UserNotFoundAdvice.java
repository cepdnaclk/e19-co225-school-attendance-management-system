package com.FullStackApplication.demo.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {

    public Map<String,String> exceptionHandler(UserNotFoundException exception){
        Map<String,String> errorMap = new HashMap<>();

        return errorMap;
    }
}
