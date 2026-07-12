package com.example.currencyconverter.service;

import com.example.currencyconverter.dto.ExchangeRateResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class ExchangeRateService {

    @Value("${exchange.api.key}")
    private String apiKey;

    @Value("${exchange.api.url}")
    private String apiUrl;

    private final RestClient restClient = RestClient.create();

    public double getExchangeRate(String fromCurrency, String toCurrency) {

        String url = apiUrl + "/" + apiKey + "/latest/" + fromCurrency.toUpperCase();

        ExchangeRateResponse response = restClient.get()
                .uri(url)
                .retrieve()
                .body(ExchangeRateResponse.class);

        if (response == null ||
                response.getConversion_rates() == null ||
                !response.getConversion_rates().containsKey(toCurrency.toUpperCase())) {

            throw new RuntimeException("Unable to retrieve exchange rate.");
        }

        return response.getConversion_rates().get(toCurrency.toUpperCase());
    }
}
