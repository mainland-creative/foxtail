<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'));


if ($data && $data->email && $data->name && $data->body) {

  function a_filter($string) {
    return str_ireplace(array("\r", "\n", '%0A', '%0D'), '', $string);
  }

  $name = a_filter($data->name);
  $from = filter_var($data->email, FILTER_VALIDATE_EMAIL);
  $subject = a_filter($data->subject);
  $message = str_replace("\n.", "\n..", $data->body);
  $output_message = <<<EOL
  Hello, this message has arrived from {$from}.
  
  Subject: {$subject}

  Message:

  {$message}

EOL;

  mail('sara@mainlandcreative.com', 'New message from the Foxtail website contact form', $output_message, "From: $from");

  echo json_encode(array('status' => 'ok'));
} else {
  echo json_encode(array('response' => 'no data'));
}
?>