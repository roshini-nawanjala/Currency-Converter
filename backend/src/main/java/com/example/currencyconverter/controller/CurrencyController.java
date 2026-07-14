package com.example.currencyconverter.controller;

import com.example.currencyconverter.dto.CurrencyRequest;
import com.example.currencyconverter.model.CurrencyLog;
import com.example.currencyconverter.service.CurrencyService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/currency")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
@RequiredArgsConstructor
public class CurrencyController {

    private final CurrencyService currencyService;

    @PostMapping("/convert")
    public CurrencyLog convertCurrency(
            @RequestHeader("X-API-KEY") String apiKey,
            @Valid @RequestBody CurrencyRequest request) {

        return currencyService.convertAndSave(
                request.getAmount(),
                request.getFrom(),
                request.getTo());
    }

    @GetMapping("/history")
    public List<CurrencyLog> getHistory(
            @RequestHeader("X-API-KEY") String apiKey) {
        return currencyService.getAllLogs();
    }

    @GetMapping("/history/from/{fromCurrency}")
    public List<CurrencyLog> getHistoryByFromCurrency(
            @RequestHeader("X-API-KEY") String apiKey,
            @PathVariable String fromCurrency) {

        return currencyService.getHistoryByFromCurrency(fromCurrency);
    }

    @GetMapping("/history/to/{toCurrency}")
    public List<CurrencyLog> getHistoryByToCurrency(
            @RequestHeader("X-API-KEY") String apiKey,
            @PathVariable String toCurrency) {

        return currencyService.getHistoryByToCurrency(toCurrency);
    }

    @DeleteMapping("/history/{id}")
    public String deleteHistory(
            @RequestHeader("X-API-KEY") String apiKey,
            @PathVariable String id) {

        currencyService.deleteById(id);

        return "History deleted successfully.";
    }

    @DeleteMapping("/history")
    public String deleteAllHistory(
            @RequestHeader("X-API-KEY") String apiKey) {

        currencyService.deleteAllHistory();

        return "All history deleted successfully.";
    }

    @GetMapping("/rate")
    public double getRate(
            @RequestHeader("X-API-KEY") String apiKey,
            @RequestParam String from,
            @RequestParam String to) {

        return currencyService.getExchangeRate(from, to);

    }

}
