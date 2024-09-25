package com.semicolon.africa.arahasubcriptionapp.services;

import com.semicolon.africa.arahasubcriptionapp.data.models.Subscription;
import com.semicolon.africa.arahasubcriptionapp.dtos.requests.*;
import com.semicolon.africa.arahasubcriptionapp.dtos.responses.SubscriptionResponse;

import static com.semicolon.africa.arahasubcriptionapp.mapper.mapSubscriptions.mapSubscriptions;
import static com.semicolon.africa.arahasubcriptionapp.validations.validateSubscription.validateSubscription;

public class SubscriptionServiceImpl implements SubscriptionServices {


    @Override
    public SubscriptionResponse createSubscription(SubscriptionRequest request) {
        SubscriptionResponse response = new SubscriptionResponse();
        validateSubscription(request);
        Subscription subscription = mapSubscriptions(request);
        response.setMessage(subscription);
        return response;
    }

    @Override
    public void changeSubscription(changeSubRequest request) {

    }

    @Override
    public void pausingSubscription(pauseSubRequest request) {

    }

    @Override
    public void resumingSubscription(ResumeSubRequest request) {

    }

    @Override
    public void cancellingSubscription(cancelSubRequest request) {

    }

    @Override
    public void getAllSubscription(getAllSubRequest request) {

    }
}
