package com.example.currencyconverter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "currency_logs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CurrencyLog {

    @Id
    private String id;

    private double amount;

    private String fromCurrency;

    private String toCurrency;

    private double exchangeRate;

    private double convertedAmount;

    private LocalDateTime timestamp;
}