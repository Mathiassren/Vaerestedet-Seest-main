<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $name = $_POST["ContactName"];
  $address = $_POST["ContactAddress"];
  $city = $_POST["ContactCity"];
  $birthday = $_POST["ContactBirthday"];
  $school = $_POST["ContactSchool"];
  $child_mobile = $_POST["ContactChildMobile"];
  $parent1 = $_POST["ContactParent1"];
  $parent2 = $_POST["ContactParent2"];
  $email1 = $_POST["ContactEmail1"];
  $email2 = $_POST["ContactEmail2"];
  $mobile1 = $_POST["ContactMobile1"];
  $mobile2 = $_POST["ContactMobile2"];

  // Construct the email message
  $to = "Mathiassrensen@yahoo.dk"; // Change this to your email address
  $subject = "Contact Form Submission"; 
  $message = "Name: $name\n"
           . "Address: $address\n"
           . "City: $city\n"
           . "Birthday: $birthday\n"
           . "School: $school\n"
           . "Child mobile: $child_mobile\n"
           . "Parent 1: $parent1\n"
           . "Parent 2: $parent2\n"
           . "Email 1: $email1\n"
           . "Email 2: $email2\n"
           . "Mobile 1: $mobile1\n"
           . "Mobile 2: $mobile2\n";

  // Send the email
  if (mail($to, $subject, $message)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email";
  }
}
?>