package com.example.backend.GeneralTech.service;

import com.example.backend.GeneralTech.model.report;
import com.example.backend.GeneralTech.model.task;
import com.example.backend.GeneralTech.repository.reportRepository;
import com.example.backend.GeneralTech.repository.taskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class reportService {
    @Autowired
    private reportRepository reportRep;

    @Autowired
    private taskRepository taskRep;

    public report createReport(Long id, String value1,String value2) {
        task task =taskRep.getReferenceById(id);
        report report = new report();
        report.setTitle(value1);
        report.setTask(task);
        report.setDescription(value2);
        return reportRep.save(report);
    }

    public report getReport(Long id) {
        return reportRep.findreportByFK(id);
    }
}
