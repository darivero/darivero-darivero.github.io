<?php
// Recoge los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Dirección de correo electrónico donde se enviará el mensaje
$to = "321beatme@gmail.com";

// Asunto del mensaje
$subject = "Mensaje de contacto de $name";

// Contenido del mensaje
$body = "Nombre: $name\nCorreo electrónico: $email\nMensaje:\n$message";

// Cabeceras adicionales
$headers = "From: $email";

// Enviar el correo electrónico
if (mail($to, $subject, $body, $headers)) {
    echo "<p>¡Gracias por contactarnos, $name! Tu mensaje ha sido enviado con éxito.</p>";
} else {
    echo "<p>Lo sentimos, hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.</p>";
}
?>
