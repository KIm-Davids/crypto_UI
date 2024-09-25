package com.semicolon.africa.arahasubcriptionapp.services;

import com.semicolon.africa.constants.SubscriptionType;
import com.semicolon.africa.models.Subscription;
import com.semicolon.africa.services.SubscriptionServiceImpl;
import com.semicolon.africa.services.SubscriptionServices;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;


@SpringBootTest
public class subscriptionTest {

    @Autowired
    private SubscriptionServiceImpl service;

    @Test
    public static void testThatUserCanSubscribe(){
        Subscription subscription = new Subscription();
        subscription.setSubscriptionType(SubscriptionType.NETFLIX);
        subscription.setPaymentDate(LocalDateTime.now());
        subscription.setActive(true);
        subscription.setPaymentDesc("pay for Netflix");
        subscription.setPaymentAmount(1200);
        subscription.setUserToken("UserToken");
        service.createSubscription();
    }
}
