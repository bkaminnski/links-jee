package com.hclc.description;

import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;
import javax.inject.Inject;

public class ServiceLoggerProducer {

    @Inject
    ServiceInfo serviceInfo;
    
    @Produces
    ServiceLogger produceServiceLogger(InjectionPoint injectionPoint) {
        return new ServiceLogger(injectionPoint.getMember().getDeclaringClass().getName(), serviceInfo);
    }
}
