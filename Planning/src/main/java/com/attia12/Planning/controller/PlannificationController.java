package com.attia12.Planning.controller;

import com.attia12.Planning.model.Planification;
import com.attia12.Planning.service.PlannificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/planification")

public class PlannificationController {
    @Autowired
    private PlannificationService plannificationService;
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Planification> createPlanification(@RequestBody Planification planification) {
        return new ResponseEntity<>(plannificationService.addPlanification(planification), HttpStatus.OK);
    }
    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Planification> updatePlanification(@PathVariable(value = "id") Long id,
                                                   @RequestBody Planification planification){
        return new ResponseEntity<>(plannificationService.updatePlanification(id, planification),
                HttpStatus.OK);
    }
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deletePlanification(@PathVariable(value = "id")Long id){
        return new ResponseEntity<>(plannificationService.deletePlanification(id), HttpStatus.OK);
    }
}
