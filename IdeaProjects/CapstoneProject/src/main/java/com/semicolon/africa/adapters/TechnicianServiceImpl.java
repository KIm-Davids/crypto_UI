package com.semicolon.africa.adapters;

import com.semicolon.africa.adapters.Exceptions.CannotFIndTechnicianException;
import com.semicolon.africa.adapters.Exceptions.SubscriptionDoesNotExistException;
import com.semicolon.africa.adapters.Exceptions.TechnicianNotPaidException;
import com.semicolon.africa.domain.Subscription;
import com.semicolon.africa.domain.Technician;
import com.semicolon.africa.domain.constants.Availability;
import com.semicolon.africa.domain.constants.LoginStatus;
import com.semicolon.africa.domain.constants.SubscriptionStatus;
import com.semicolon.africa.domain.constants.UserType;
import com.semicolon.africa.ports.in.TechnicianServiceInterface;
import com.semicolon.africa.ports.in.dtos.request.*;
import com.semicolon.africa.ports.out.SubscriptionRepository;
import com.semicolon.africa.ports.out.TechnicianRepositoryInterface;
import com.semicolon.africa.ports.out.dtos.response.*;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


@Service
@AllArgsConstructor
public class TechnicianServiceImpl implements TechnicianServiceInterface {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private TechnicianRepositoryInterface technicianRepository;
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Override
    public RegisterTechnicianResponse registerTechnician(RegisterTechnicianRequest request) {
        Technician technician = new Technician();
        technician.setFirstName(request.getFirstName());
        technician.setLastName(request.getLastName());
        technician.setEmail(request.getEmail());
        technician.setPassword(request.getPassword());
        technician.setPhoneNumber(request.getPhoneNumber());
        technician.setNin(request.getNin());
        technician.setLocation(request.getLocation());
        technician.setUserType(UserType.valueOf(UserType.TECHNICIAN.toString()));
        technician.setIsLoggedIn(LoginStatus.valueOf(LoginStatus.OFFLINE.toString()));
        technician.setIsAvailable(Availability.valueOf(Availability.NOT_AVAILABLE.toString()));
        System.out.println(technician);
        technicianRepository.save(technician);
        RegisterTechnicianResponse response = new RegisterTechnicianResponse();
        response.setMessage("Technician Registered Successfully !!!");
        return response;
    }

    @Override
    public LoginTechnicianResponse loginTechnician(LoginTechnicianRequest loginTechnician) {
        Technician technician = technicianRepository.findByTechnicianId(loginTechnician.getTechnicianId()).orElseThrow(() -> new CannotFIndTechnicianException("Technician Not Found !!!"));
        technician.setIsLoggedIn(LoginStatus.valueOf(LoginStatus.ONLINE.toString()));
        technicianRepository.save(technician);
        LoginTechnicianResponse response = new LoginTechnicianResponse();
        response.setMessage("Logged In Successfully !!!");
        return response;
    }

    @Override
    public LogoutTechnicianResponse logoutTechnician(LogoutTechnicianRequest logoutTechnician) {
        Technician technician = technicianRepository.findByTechnicianId(logoutTechnician.getTechnicianId()).orElseThrow(() -> new CannotFIndTechnicianException("Technician Not Found !!!"));
        technician.setIsLoggedIn(LoginStatus.valueOf(LoginStatus.OFFLINE.toString()));
        technicianRepository.save(technician);
        LogoutTechnicianResponse response = new LogoutTechnicianResponse();
        response.setMessage("Logged out Successfully !!!");
        return response;
    }

    @Override
    public AvailabilityStatusResponse changeAvailability(AvailabilityStatusRequest availabilityStatus) {
        Technician technician = technicianRepository.findByTechnicianId(availabilityStatus.getTechnicianId()).orElseThrow(() -> new CannotFIndTechnicianException("Technician Not Found !!!"));
        if(availabilityStatus.getIsAvailable().toString().equalsIgnoreCase(Availability.AVAILABLE.toString())) {
            technician.setIsAvailable(Availability.valueOf(Availability.AVAILABLE.toString()));
            technicianRepository.save(technician);
        }else {
            technician.setIsAvailable(Availability.valueOf(Availability.NOT_AVAILABLE.toString()));
            technicianRepository.save(technician);
        }
        AvailabilityStatusResponse response = new AvailabilityStatusResponse();
        response.setMessage("Logged out Successfully !!!");
        return response;
    }

    @Override
    public SubscriptionResponse subscribe(SubscriptionRequest technicianSubscriptionRequest) {
        SubscriptionResponse response = new SubscriptionResponse();
        if(technicianSubscriptionRequest.isPaid()){
            Subscription subscription = new Subscription();
            subscription.setTechnicianId(technicianSubscriptionRequest.getTechnicianId());
            subscription.setStartDate(technicianSubscriptionRequest.getStartDate());
            subscription.setEndDate(technicianSubscriptionRequest.getEndDate());
            subscription.setSubscriptionStatus(technicianSubscriptionRequest.getSubscriptionStatus());
            subscription.setSubscriptionType(technicianSubscriptionRequest.getSubscriptionType());
            subscriptionRepository.save(subscription);
            response.setMessage("User Subscribed Successfully !!!");
            return response;
        }

        Subscription subscription = subscriptionRepository.findSubscriptionByTechnicianId(technicianSubscriptionRequest.getTechnicianId()).orElseThrow(() -> new SubscriptionDoesNotExistException("Please ensure you have subscribed !!!"));
        if(subscription.getEndDate().equals(LocalDate.now())){
            response.setMessage("Subscription has expired\nWould you like to continue your subscription ?");
            return response;
        }

        throw new TechnicianNotPaidException("Invalid Command !!!");
    }

    @Override
    public SubscriptionResponse updateSubscription(UpdateSubscriptionRequest request){
        Subscription subscription = subscriptionRepository.findSubscriptionByTechnicianId(request.getTechnicianId()).orElseThrow(() ->  new SubscriptionDoesNotExistException("Please ensure you have subscribed !!!"));
        SubscriptionResponse response = new SubscriptionResponse();
        if(subscription.getSubscriptionStatus().equals(SubscriptionStatus.PREMIUM) && request.isPaid()){
            Subscription updatedSubscription = new Subscription();
            updatedSubscription.setTechnicianId(subscription.getTechnicianId());
            updatedSubscription.setSubscriptionType(subscription.getSubscriptionType());
            updatedSubscription.setSubscriptionId(subscription.getSubscriptionId());
            updatedSubscription.setStartDate(LocalDate.now());
            updatedSubscription.setEndDate(subscription.getEndDate().plusDays(30));
            updatedSubscription.setSubscriptionStatus(subscription.getSubscriptionStatus());
            subscriptionRepository.save(updatedSubscription);
            response.setMessage("User Subscribed Successfully !!!");
            return response;
        }
        throw new TechnicianNotPaidException("Invalid Command !!!");
    }
}
