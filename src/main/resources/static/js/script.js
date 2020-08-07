$(document).ready(function () {

    $("#update").hide();
    $.get("http://localhost:8080/students",function (result) {
        var tr = [];
        for(var i=0;i<result.length;i++){

            tr.push('<tr>');
            tr.push('<td>' + result[i].id + '</td>');
            tr.push('<td>' + result[i].firstName + '</td>');
            tr.push('<td>' + result[i].lastName + '</td>');
            tr.push('<td>' + result[i].age + '</td>');
            tr.push('<td><button class="btn btn-primary edit" id='+result[i].id+'>Edit</button><button class="btn btn-danger delete" id='+result[i].id+'>Delete</button></td>');
            tr.push('</tr>');
        }
        $('table').append($(tr.join('')));
    });

    //for deleting a record
    $(document).delegate('.delete','click',function () {
        if(confirm("Do you want to delete this?")){
            var idInInt = parseInt($(this).attr('id'));
            $.ajax({

                type:"DELETE",
                url:"http://localhost:8080/student/delete/"+idInInt,
                success:function () {
                    location.reload(true);
                }

            });
        }
    });

    //for editing a record
    $('table').delegate('.edit','click',function () {

        var id = $(this).closest('tr').children('td:first').text();
        var first_name = $(this).closest('tr').children('td:nth-child(2)').text();
        var last_name = $(this).closest('tr').children('td:nth-child(3)').text();
        var age = $(this).closest('tr').children('td:nth-child(4)').text();

        $("#student_id").val(id);
        $("#firstname").val(first_name);
        $("#lastname").val(last_name);
        $("#age").val(age);
        $("#save").hide();

        $("#update").show().on('click',function () {

            $.ajax({
                type:"PUT",
                contentType:"application/json",
                url:"http://localhost:8080/student/"+parseInt(id),
                data:JSON.stringify({
                    'firstName':$("#firstname").val(),
                    'lastName':$("#lastname").val(),
                    'age':parseInt($("#age").val())
                }),
                success:function (result) {

                    var tr = [];
                    tr.push('<tr>');
                    tr.push('<td>'+ result.id +'</td>');
                    tr.push('<td>'+ result.firstName +'</td>');
                    tr.push('<td>'+ result.lastName +'</td>');
                    tr.push('<td>'+ result.age +'</td>');
                    tr.push('<td><button class="btn btn-primary edit" id='+result.id+'>Edit</button><button class="btn btn-danger delete" id='+result.id+'>Delete</button></td>');
                    tr.push('</tr>');
                    $('table').append($(tr.join('')));
                    location.reload(true);
                }
            });
        })

    });

    var firstNameError = false;
    var lastNameError = false;
    var ageError = false;

    var firstName;
    var lastName;
    var ageInInt;

    $("#firstname").focusout(function () {
        firstName = $(this).val();
        if(firstName === ""){
            $("#firstnameerror").show().text("*First Name is required").css('color','red');
            firstNameError = true;
        }else{
            $("#firstnameerror").hide();
            firstNameError = false;
        }
    });


    $("#lastname").focusout(function () {
        lastName = $(this).val();
        if(lastName === ""){
            // $("#firstnameerror").show();
            $("#lastnameerror").show().text("*Last Name is required").css('color','red');
            lastNameError = true;
        }else{
            $("#lastnameerror").hide();
            lastNameError = false;
        }
    });


    $("#age").focusout(function () {
        var age = $(this).val();
        ageInInt = parseInt(age);
        if(age === ""){
            $("#ageerror").show().text("*Age is required").css('color','red');
            ageError = true;
        }else{
            $("#ageerror").hide();
            ageError = false;
        }
    });

    //for saving a record in the database
    $("#save").on('click',function () {

       if (firstNameError === true || lastNameError === true || ageError === true){

           return false;
       }
           $.ajax({

               type:"POST",
               contentType:"application/json",
               url:"http://localhost:8080/student/save",
               data:JSON.stringify({
                   'firstName':firstName,
                   'lastName':lastName,
                   'age':ageInInt
               }),

               success:function (result) {
                   var tr = [];
                   tr.push('<tr>');
                   tr.push('<td>'+ result.id +'</td>');
                   tr.push('<td>'+ result.firstName +'</td>');
                   tr.push('<td>'+ result.lastName +'</td>');
                   tr.push('<td>'+ result.age +'</td>');
                   tr.push('<td><button class="btn btn-primary edit" id='+result.id+'>Edit</button><button class="btn btn-danger delete" id='+result.id+'>Delete</button></td>');
                   tr.push('</tr>');
                   $('table').append($(tr.join('')));
                   location.reload(true);
               },

               error:function () {
                   console.log("Error to persist student");
               }
           });
    });


});