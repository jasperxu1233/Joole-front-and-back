package com.itlize.joole.AOP;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class HttpAspect {

    //    Unified processing request log
//    Record every http request
    private final static Logger logger = LoggerFactory.getLogger((HttpAspect.class));

    @Pointcut("execution(public * com.itlize.joole.Controller.UserController.login(..))")
    public void log(){
    }

    @Before("log()")
    public void dobefore(JoinPoint joinPoint) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
//        logger.info("invoke addResource.");
//        url
        logger.info("url={}", request.getRequestURI());
//        method
        logger.info("method={}",request.getMethod());
//        ip
        logger.info("ip={}", request.getRemoteAddr());
//        method name
        logger.info("class_method={}", joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());
//
//        parameters
        logger.info("args={}", joinPoint.getArgs());
    }
    @After("log()")
    public void doAfter() {
        logger.info("finished addResource.");
    }
}