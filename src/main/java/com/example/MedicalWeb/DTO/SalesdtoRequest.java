package com.example.MedicalWeb.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Getter
@Setter

public class SalesdtoRequest {
    private String name;
    private Long medicine_Id;
    private Integer quantity;
    private LocalDate saleDate;
}
