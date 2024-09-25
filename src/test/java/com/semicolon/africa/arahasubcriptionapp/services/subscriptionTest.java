package com.semicolon.africa.arahasubcriptionapp.services;

import com.semicolon.africa.arahasubcriptionapp.constants.SubscriptionType;
import com.semicolon.africa.arahasubcriptionapp.data.models.Subscription;
import com.semicolon.africa.arahasubcriptionapp.dtos.requests.SubscriptionRequest;
import com.semicolon.africa.arahasubcriptionapp.dtos.responses.SubscriptionResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
class subscriptionTest {

    @Autowired
    private static SubscriptionServiceImpl service;

    @Test
    void testThatUserCanSubscribe(){
        SubscriptionRequest request = mockRequest();
        SubscriptionResponse response = service.createSubscription(request);
        System.out.println(response);
        assertThat(response).isNotNull();
    }

    private static SubscriptionRequest mockRequest(){
        SubscriptionRequest request = new SubscriptionRequest();
        request.setAmount(1200);
        request.setSubscriptionType(SubscriptionType.NETFLIX);
        request.setUserToken("UserToken");
        request.setLocalDateTime(LocalDateTime.now());
        request.setSubscriptionDesc("Pay for netflix");
        return request;
    }
}
