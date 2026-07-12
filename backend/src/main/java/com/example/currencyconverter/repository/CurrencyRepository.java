package com.example.currencyconverter.repository;

import com.example.currencyconverter.model.CurrencyLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CurrencyRepository extends MongoRepository<CurrencyLog, String> {

    List<CurrencyLog> findByFromCurrencyIgnoreCase(String fromCurrency);

    List<CurrencyLog> findByToCurrencyIgnoreCase(String toCurrency);

    void deleteById(String id);

    void deleteAll();

}
