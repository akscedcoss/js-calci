<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Calci</title>
</head>

<body>
    <div class="container">

        <div class="screen">

            <div class="circle">
                <div></div>
                <div></div>
                <div></div>

            </div>
            <div id='lastvalue'></div>
            <input type="text" id="screen" value="">
        </div>
        <!-- First Row -->
        <div class="rows">
            <div class="cols" onclick="clr_scr()">AC</div>
            <div class="cols" onclick="">+/-</div>
            <div class="cols" onclick="operator_function ('%')">%</div>
            <div class="cols yellow" onclick="operator_function ('/')">/</div>
        </div>
        <!-- ?second Row -->
        <div class="rows">
            <div class="cols" onclick="display_screen('7')">7</div>
            <div class="cols" onclick="display_screen('8')">8</div>
            <div class="cols" onclick="display_screen('9')">9</div>
            <div class="cols yellow" onclick="operator_function ('*')">X</div>
        </div>
        <!-- third Row-->
        <div class="rows">
            <div class="cols" onclick="display_screen('4')">4</div>
            <div class="cols" onclick="display_screen('5')">5</div>
            <div class="cols" onclick="display_screen('6')">6</div>
            <div class="cols yellow" onclick="operator_function ('-')">-</div>
        </div>
        <!-- Forthj Row -->
        <div class="rows">
            <div class="cols" onclick="display_screen('1')">1</div>
            <div class="cols" onclick="display_screen('2')">2</div>
            <div class="cols" onclick="display_screen('3')">3</div>
            <div class="cols yellow" onclick="operator_function ('+')">+</div>
        </div>
        <!-- ?fifth Row -->
        <div class="rows">
            <div class="cols" id="zero"></div>

            <div class="cols" onclick="display_screen('.')">.</div>

            <div class="cols yellow" id="last-yellow" onclick="display_final()">=</div>
        </div>
    </div>
</body>
<script src="final_final.js"></script>

</html>