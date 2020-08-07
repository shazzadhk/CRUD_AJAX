package com.example.crud_using_ajax.Controller;

import com.example.crud_using_ajax.Dao.StudentDao;
import com.example.crud_using_ajax.Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentRestController {

    @Autowired
    private StudentDao studentDao;

    @PostMapping("/student/save")
    public Student save_student(@RequestBody Student student){
        studentDao.save(student);
        return student;
    }

    @RequestMapping("/students")
    public List<Student> getStudents(){
        return (List<Student>) studentDao.findAll();
    }

    @DeleteMapping("/student/delete/{id}")
    public void deleteStudent(@PathVariable Integer id){
        studentDao.deleteById(id);
    }

    @PutMapping("/student/{id}")
    public Student getStudent(@PathVariable Integer id,@RequestBody Student student){
        Student student1 = studentDao.findById(id).get();
        student1.setFirstName(student.getFirstName());
        student1.setLastName(student.getLastName());
        student1.setAge(student.getAge());
        studentDao.save(student1);
        return student1;
    }
}
