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
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class CurrencyController {

    private final CurrencyService currencyService;

    @PostMapping("/convert")
public CurrencyLog convertCurrency(
        @Valid @RequestBody CurrencyRequest request) {

    return currencyService.convertAndSave(
            request.getAmount(),
            request.getFrom(),
            request.getTo());
}

    @GetMapping("/history")
    public List<CurrencyLog> getHistory() {
        return currencyService.getAllLogs();
    }

    @GetMapping("/history/from/{fromCurrency}")
public List<CurrencyLog> getHistoryByFromCurrency(
        @PathVariable String fromCurrency) {

    return currencyService.getHistoryByFromCurrency(fromCurrency);
}

@GetMapping("/history/to/{toCurrency}")
public List<CurrencyLog> getHistoryByToCurrency(
        @PathVariable String toCurrency) {

    return currencyService.getHistoryByToCurrency(toCurrency);
}

@DeleteMapping("/history/{id}")
public String deleteHistory(@PathVariable String id) {

    currencyService.deleteById(id);

    return "History deleted successfully.";
}

@DeleteMapping("/history")
public String deleteAllHistory() {

    currencyService.deleteAllHistory();

    return "All history deleted successfully.";
}

@GetMapping("/rate")
public double getRate(
        @RequestParam String from,
        @RequestParam String to) {

    return currencyService.getExchangeRate(from, to);

}

}