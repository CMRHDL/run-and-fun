package net.inpercima.runandfun.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;

public interface RunAndFunService {

    String getAccessToken(String code, String clientId, String clientSecret, String redirectUri)
            throws UnsupportedEncodingException, MalformedURLException, IOException;

}
