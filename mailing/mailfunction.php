<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require('./vendor/autoload.php');
require 'mailingvariables.php';

function mailfunction($mail_reciever_email, $mail_reciever_name, $mail_msg, $attachment = false){

    $mail = new PHPMailer();
    $mail->isSMTP();

    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;

    $mail->Host = $GLOBALS['mail_host'];
    $mail->Port = $GLOBALS['mail_port'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth = true;
    $mail->Username = $GLOBALS['mail_sender_email'];
    $mail->Password = $GLOBALS['mail_sender_password'];
    $mail->setFrom($GLOBALS['mail_sender_email'], $GLOBALS['mail_sender_name']);
    $mail->addAddress($mail_reciever_email, $mail_reciever_name);
    $mail->Subject = 'Someone Contacted You!';
    $mail->isHTML(true);
    $mail->msgHTML($mail_msg);

    if ($attachment !== false) {
        $mail->AddAttachment($attachment);
    }

    $mail->AltBody = 'This is a plain-text message body';
 
    return $mail->send();
}

// 处理表单提交
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address!';
        exit;
    }

    $mail_reciever_email = 'michael@newlandtech.co.nz';
    $mail_reciever_name = 'Michael';
    $mail_msg = '<p>Dear Michael,</p>';
    $mail_msg .= '<p>You have a new message from the contact form:</p>';
    $mail_msg .= '<p><strong>Name:</strong> ' . $name . '</p>';
    $mail_msg .= '<p><strong>Email:</strong> ' . $email . '</p>';
    $mail_msg .= '<p><strong>Message:</strong> ' . $message . '</p>';

    $result = mailfunction($mail_reciever_email, $mail_reciever_name, $mail_msg);

    if ($result) {
        echo 'Message sent successfully!';
    } else {
        echo 'Message sending failed.';
    }
}

?>
