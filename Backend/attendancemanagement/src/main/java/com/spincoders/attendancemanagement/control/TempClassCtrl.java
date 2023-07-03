package com.spincoders.attendancemanagement.control;

import com.spincoders.attendancemanagement.model.TempClass;
import com.spincoders.attendancemanagement.service.TempClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/tempClass")
public class TempClassCtrl {

    @Autowired
    private TempClassService tempClassService;

    @GetMapping("/{tempClassName}")
    public List<TempClass> getTempClassesByName(@PathVariable String tempClassName) {
        return tempClassService.findByName(tempClassName);
    }

}
