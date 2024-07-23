<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Example: Store feedback in a text file (for demonstration purposes)
$file = 'feedback.txt';
$current = file_get_contents($file);
$current .= "Name: $name\nEmail: $email\nFeedback: $message\n\n";
file_put_contents($file, $current);

// Redirect back to the feedback page or a thank you page
header('Location: feedback.html');
exit();
?>
