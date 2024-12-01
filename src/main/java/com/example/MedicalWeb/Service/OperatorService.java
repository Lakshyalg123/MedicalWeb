package com.example.MedicalWeb.Service;

import com.example.MedicalWeb.Model.Medicine;
import com.example.MedicalWeb.Model.Sales;
import com.example.MedicalWeb.Repository.MedicineRepository;
import com.example.MedicalWeb.Repository.SaleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class OperatorService {

    @Autowired
    private SaleRepo saleRepo;
    @Autowired
    private MedicineRepository medicineRepository;

    public List<Sales> getDailySales(LocalDate date){
        List<Sales> dailySales = saleRepo.findBySaleDate(date);
        Double totalDailyPrice = dailySales.stream()
                .mapToDouble(Sales::getTotalPrice)
                .sum();

        // You can now return both the sales list and the total price if needed
        System.out.println("Total Daily Sales Price: " + totalDailyPrice);
        return dailySales;

    }

    public List<Sales> getMonthlySales(LocalDate startdate , LocalDate endDate){
        return saleRepo.findBySaleDateBetween(startdate,endDate);

    }
    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public Sales addMedicineToSales(String name,Long medicine_Id, Integer quantity, LocalDate saleDate){
        Medicine medicine=medicineRepository.findByName(name)
                .orElseThrow(()-> new RuntimeException("Medicine With ID" +medicine_Id+"Not found"));
        if (name != null && !name.equals(medicine.getName())) {
            throw new RuntimeException("Provided name does not match the medicine name.");
        }

        Double totalPrice=medicine.getPricePerQty()*quantity;

        Sales sale= new Sales();
        sale.setMedicine(medicine);
        sale.setQuantity(quantity);
        sale.setSaleDate(saleDate);
        sale.setMedicineName(name);
        sale.setTotalPrice(totalPrice);

        return saleRepo.save(sale);

    }

}
