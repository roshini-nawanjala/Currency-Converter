package com.example.currencyconverter.service;

import com.example.currencyconverter.model.CurrencyLog;
import com.example.currencyconverter.repository.CurrencyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CurrencyService {

    private final CurrencyRepository currencyRepository;
    private final ExchangeRateService exchangeRateService;

    public CurrencyLog convertAndSave(double amount,
                                      String fromCurrency,
                                      String toCurrency) {

        // Temporary exchange rate
        double exchangeRate = exchangeRateService.getExchangeRate(fromCurrency, toCurrency);

        double convertedAmount = amount * exchangeRate;

        CurrencyLog log = new CurrencyLog();

        log.setAmount(amount);
        log.setFromCurrency(fromCurrency.toUpperCase());
        log.setToCurrency(toCurrency.toUpperCase());
        log.setExchangeRate(exchangeRate);
        log.setConvertedAmount(convertedAmount);
        log.setTimestamp(LocalDateTime.now());

        return currencyRepository.save(log);
    }

    public List<CurrencyLog> getAllLogs() {
        return currencyRepository.findAll();
    }

    public List<CurrencyLog> getHistoryByFromCurrency(String fromCurrency) {
    return currencyRepository.findByFromCurrencyIgnoreCase(fromCurrency);
    }

    public List<CurrencyLog> getHistoryByToCurrency(String toCurrency) {
    return currencyRepository.findByToCurrencyIgnoreCase(toCurrency);
    }

    public void deleteById(String id) {
    currencyRepository.deleteById(id);
   }

    public void deleteAllHistory() {
    currencyRepository.deleteAll();
    }

    public double getExchangeRate(String fromCurrency, String toCurrency) {

    return exchangeRateService.getExchangeRate(fromCurrency, toCurrency);

}   
}