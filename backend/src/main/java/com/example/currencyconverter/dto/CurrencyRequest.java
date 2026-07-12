package com.example.currencyconverter.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CurrencyRequest {

    @Min(value = 1, message = "Amount must be greater than 0")
    private double amount;

    @NotBlank(message = "From currency is required")
    private String from;

    @NotBlank(message = "To currency is required")
    private String to;
}