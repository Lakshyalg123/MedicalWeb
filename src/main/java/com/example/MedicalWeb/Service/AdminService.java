package com.example.MedicalWeb.Service;

import com.example.MedicalWeb.Model.Medicine;
import com.example.MedicalWeb.Repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private MedicineRepository medicineRepository;


    public Medicine addMedicine(Medicine medicine){
        return medicineRepository.save(medicine);
    }

//    public modifyMedicineDetails(Long id,Double newPrice,Double gst,Double Discount)

    public Medicine updateMedicine(Medicine updatedMedicine) {
        Medicine existingMedicine = medicineRepository.findById(updatedMedicine.getId())
                .orElseThrow(() -> new RuntimeException("Medicine with ID " + updatedMedicine.getId() + " not found"));

        existingMedicine.setName(updatedMedicine.getName());
        existingMedicine.setPricePerQty(updatedMedicine.getPricePerQty());
        existingMedicine.setPrice(updatedMedicine.getPrice());
        existingMedicine.setGst(updatedMedicine.getGst());
        existingMedicine.setDiscount(updatedMedicine.getDiscount());
        existingMedicine.setExpiryDate(updatedMedicine.getExpiryDate());

        return medicineRepository.save(existingMedicine);
    }

    public void deleteExpiredMedicine(){
        LocalDate currentDate = LocalDate.now();
        List<Medicine>expiredMedicines = medicineRepository.findByExpiryDateBefore(currentDate);
        if(!expiredMedicines.isEmpty()) {
            medicineRepository.deleteAll(expiredMedicines);
        }
    }


//    public List<Medicine> getExpiredMedicines() {
//        return medicineRepository.findExpiredMedicinesNative(LocalDate.now());
//    }


}
