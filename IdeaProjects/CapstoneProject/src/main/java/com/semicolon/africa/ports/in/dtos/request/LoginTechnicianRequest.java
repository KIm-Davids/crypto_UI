package com.semicolon.africa.ports.in.dtos.request;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginTechnicianRequest {

    @Id
    private Long technicianId;

}
