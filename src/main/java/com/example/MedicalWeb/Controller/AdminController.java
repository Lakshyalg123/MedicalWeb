package com.example.MedicalWeb.Controller;

import com.example.MedicalWeb.Model.Medicine;
import com.example.MedicalWeb.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping ("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/medicines")
    public Medicine addMedicine(@RequestBody Medicine medicine){
        return adminService.addMedicine(medicine);
    }

    @PutMapping("/medicines/{id}")
    public Medicine updateMedicine(@PathVariable int id, @RequestBody Medicine medicine){
        medicine.setId(id);
        return adminService.updateMedicine(medicine);
    }

    @DeleteMapping("/Medicines/expired/delete")
    public String deleteExpiredMedicines(){
        adminService.deleteExpiredMedicine();
        return "Expired medicines deleted.";
    }

//    @GetMapping("/admin/expiredMedicines/list")
//    public List<Medicine> getExpiredMedicines() {
//        return adminService.getExpiredMedicines();
//    }

}
