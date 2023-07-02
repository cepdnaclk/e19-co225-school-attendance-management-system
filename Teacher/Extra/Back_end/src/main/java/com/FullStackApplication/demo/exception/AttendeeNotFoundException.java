package com.FullStackApplication.demo.exception;

import com.FullStackApplication.demo.model.Attendee;

public class AttendeeNotFoundException extends RuntimeException{
    public AttendeeNotFoundException(Long id){
        super ("Could not found teh attendee with if "+ id);
    }
}
