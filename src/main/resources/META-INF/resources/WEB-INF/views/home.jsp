<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="webjars/bootstrap/4.5.0/css/bootstrap.min.css"
          rel="stylesheet">

    <title>Student Information Page</title>
</head>
<body>

   <div class="container">

       <h1 style="text-align: center;color: blue">Student Information</h1><hr>
       <table class="table table-striped">
           <tr>
               <th>ID</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Age</th>
               <th>Actions</th>
           </tr>
       </table>

        <h2 style="text-align: center;color: green">Add New Student</h2><hr>

       <form id="student_form">
           <input type="hidden" id="student_id">
           <div class="form-group">
               <label for="firstname">First Name</label>
               <input type="text" id="firstname" class="form-control"/>
               <span id="firstnameerror"></span>
           </div>
           <div class="form-group">
               <label for="lastname">Last Name</label>
               <input type="text" id="lastname" class="form-control"/>
               <span id="lastnameerror"></span>
           </div>
           <div class="form-group">
               <label for="age">Age</label>
               <input type="text" id="age" class="form-control"/>
               <span id="ageerror"></span>
           </div>

           <button id="save" class="btn btn-primary">Save</button>
           <button id="update" class="btn btn-info">Update</button>
       </form>

   </div>



   <script src="webjars/jquery/3.5.1/jquery.min.js"></script>
   <script src="webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
   <script src="/js/script.js"></script>
</body>
</html>