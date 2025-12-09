 var result = document.getElementById("input");

        // --- CORE FUNCTIONS ---
        function num(n) {
            result.value += n;
        }

        function createPre() {
            var expression = result.value;
            var mainResult = "";

            if (expression.includes("+")) {
                let parts = expression.split("+");
                if (parts.length === 2 && parts[1] !== "") {
                    let a = parseFloat(parts[0]);
                    let b = parseFloat(parts[1]);
                    if (!isNaN(a) && !isNaN(b)) {
                        mainResult = a + a * (b / 100);
                    }
                }
            }
            else if (expression.includes("-")) {
                let parts = expression.split("-");
                if (parts.length === 2 && parts[1] !== "") {
                    let a = parseFloat(parts[0]);
                    let b = parseFloat(parts[1]);
                    if (!isNaN(a) && !isNaN(b)) {
                        mainResult = a - a * (b / 100);
                    }
                }
            }
            else if (!isNaN(parseFloat(expression)) && expression !== "") {
                let num = parseFloat(expression);
                mainResult = num / 100;
            }

            if (mainResult !== "") {
                result.value = mainResult;
            } else {
                result.value = "Error";
            }
        }

        function Equal() {
            try {
                var res = eval(result.value);
                result.value = res;
            } catch (e) {
                result.value = "Error";
            }
        }

        function clearFun() {
            result.value = "";
        }

        function backSpace() {
            result.value = result.value.slice(0, result.value.length - 1);
        }

        function Square() {
            var num = parseFloat(result.value);
            if (!isNaN(num)) {
                result.value = num * num;
            }
        }

        function CubeData() {
            var num = parseFloat(result.value);
            if (!isNaN(num)) {
                result.value = num * num * num;
            }
        }

        function Sqrtfunc() {
            var num = parseFloat(result.value);
            if (!isNaN(num) && num >= 0) {
                result.value = Math.sqrt(num);
            }
        }

        function Cbrtfunc() {
            var num = parseFloat(result.value);
            if (!isNaN(num)) {
                result.value = Math.cbrt(num);
            }
        }

        function Pi() {
            result.value += "3.14";
        }

        // --- KEYBOARD FUNCTIONALITY ---

        function handleKeyPress(key) {
            if (/[0-9\.\+\-\*\/]/.test(key)) {
                num(key);
            }
            else if (key === 'Enter' || key === '=') {
                Equal();
            }
            else if (key === 'Escape' || key === 'c' || key === 'C') {
                clearFun();
            }
            else if (key === 'Backspace' || key === 'Delete') {
                backSpace();
            }
            else if (key === '%') {
                createPre();
            }
        }

        document.addEventListener('keydown', function (event) {
            event.preventDefault();
            handleKeyPress(event.key);
        });