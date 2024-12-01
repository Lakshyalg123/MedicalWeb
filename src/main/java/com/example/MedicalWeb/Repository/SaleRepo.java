package com.example.MedicalWeb.Repository;

import com.example.MedicalWeb.Model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SaleRepo extends JpaRepository<Sales,Long> {
    List<Sales> findBySaleDate(LocalDate date);


    List<Sales> findBySaleDateBetween(LocalDate startDate,LocalDate endDate);
}
