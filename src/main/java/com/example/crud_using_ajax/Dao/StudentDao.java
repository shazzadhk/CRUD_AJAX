package com.example.crud_using_ajax.Dao;

import com.example.crud_using_ajax.Model.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDao extends CrudRepository<Student,Integer>{
}
