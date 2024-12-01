package com.example.MedicalWeb.Controller;

import com.example.MedicalWeb.DTO.SalesdtoRequest;
import com.example.MedicalWeb.Model.Medicine;
import com.example.MedicalWeb.Model.Sales;
import com.example.MedicalWeb.Repository.SaleRepo;
import com.example.MedicalWeb.Service.OperatorService;
import org.hibernate.annotations.WhereJoinTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Locale;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/operator")
public class OperatorController {
    @Autowired
    private OperatorService operatorService;
    @Autowired
    private SaleRepo saleRepo;

    @GetMapping("/sales/monthly")
    public List<Sales>getMonthlySale(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate){
        return operatorService.getMonthlySales(startDate,endDate);
    }
    @GetMapping("/sales/daily")
    public List<Sales>dailySale(@RequestParam LocalDate date){
        List<Sales> dailySales = operatorService.getDailySales(date);

        Double totalDailyPrice = dailySales.stream()
                .mapToDouble(Sales::getTotalPrice)
                .sum();

        return dailySales;
    }
    @GetMapping("/all-medicines")
    public List<Medicine> getAllMedicines() {
        return operatorService.getAllMedicines();
    }
    @PostMapping("/sales/add")
    public Sales addMedicineToSales(@RequestBody SalesdtoRequest salesdtoRequest){
        return operatorService.addMedicineToSales(
                salesdtoRequest.getName(),
                salesdtoRequest.getMedicine_Id(),
                salesdtoRequest.getQuantity(),
                salesdtoRequest.getSaleDate());
    }


}
