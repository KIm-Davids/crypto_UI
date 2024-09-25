package com.semicolon.africa.dtos.request;

import com.semicolon.africa.constants.SubscriptionType;

import java.time.LocalDateTime;

public class SubscriptionRequest {

    private SubscriptionType subscriptionType;
    private String subscriptionDesc;
    private double amount;
    private LocalDateTime localDateTime;
}
