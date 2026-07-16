<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XR-Sim Radiology</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>🩻 XR-Sim Radiology</h1>
    <p>Simulador de Posicionamiento Radiográfico</p>
</header>

<main>

<section id="room">

    <div id="tube" class="item">
        ☢️
        <span>Tubo RX</span>
    </div>

    <div id="patient" class="item">
        👤
        <span>Paciente</span>
    </div>

    <div id="detector" class="item">
        🟦
        <span>Detector</span>
    </div>

</section>

<section id="panel">

<h2>Panel de Control</h2>

<label>
kVp
<input type="range" id="kvp" min="50" max="120" value="80">
<span id="kvValue">80</span>
</label>

<label>
mAs
<input type="range" id="mas" min="1" max="40" value="10">
<span id="masValue">10</span>
</label>

<label>
SID
<input type="range" id="sid" min="100" max="180" value="180">
<span id="sidValue">180</span>
</label>

<button id="shoot">
📸 Tomar Radiografía
</button>

<div id="feedback"></div>

</section>

</main>

<script src="script.js"></script>

</body>
</html>
