<?php
if(isset($_POST['enviar'])){
    if(!empty($_POST['nombre']) && !empty($_POST['rut']) && !empty($_POST['telefono']) && !empty($_POST['correo']) && !empty($_POST['mensaje'])){
        $nombre = $_POST['nombre'];
        $rut = $_POST['rut'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];
        $body = "Nombre: ". $nombre . "\n";
        $body.= "Telefono: " .$telefono . "\n";
        $body.= "Correo: ". $correo . "\n";
        $body.= "Rut: ".$rut . "\n";
        $body.= "Mensaje: ". $mensaje . "\n";
        // $to = "SEGconsultoriodental@gmail.com";
        $to = "c.santis91@gmail.com";
        
        $asunto = "[CONTACTO WEB] Solicitud de información desde la página";
        $header = "From: noreply@example.com" . "\r\n";
        $header.= "Reply-to: noreply@example.com" . "\r\n";
        $header.= "X-Mailer: PHP/". phpversion();
        $mail = mail($to,$asunto,$body,$header);
        if($mail){
            echo "<h4>!Mail enviado exitosamente!</h4>";
        }else{
            echo "<h4>!No fue posible enviar el email!</h4>";
        }
    }
}
?>