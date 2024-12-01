package com.example.MedicalWeb.Repository;

import com.example.MedicalWeb.Model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Long> {
    List<Medicine> findByExpiryDateBefore(LocalDate currentDate);
    Optional<Medicine>findByName(String name);
    Optional<Medicine>findById(Integer id);



//    @Query(value = "SELECT  * FROM medicine WHERE expiry_date < :currentDate", nativeQuery = true)
//    List<Medicine> findExpiredMedicinesNative(LocalDate currentDate);
}
