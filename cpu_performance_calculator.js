<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CPU Performance Calculator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #76ff03;
            text-shadow: 2px 2px #00c853;
        }

        label, input, select, button {
            font-size: 1rem;
        }

        input[type="number"], input[type="text"], select {
            width: 100%;
            max-width: 300px;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            background-color: #1e1e1e;
            color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        button {
            padding: 10px 20px;
            background-color: #76ff03;
            color: #121212;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
        }

        button:hover {
            background-color: #00c853;
        }

        /* Table styling */
        table {
            width: 100%;
            max-width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
            overflow-x: auto;
            display: block;
        }

        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #3e3e3e;
        }

        th {
            background-color: #1e1e1e;
            color: #76ff03;
        }

        tr:nth-child(even) {
            background-color: #2e2e2e;
        }

        /* Ensure tables scroll horizontally on small screens */
        .table-wrapper {
            overflow-x: auto;
            width: 100%;
        }

        @media screen and (max-width: 600px) {
            h1 {
                font-size: 1.5rem;
            }

            label {
                font-size: 1rem;
            }

            button {
                font-size: 0.9rem;
                padding: 8px 16px;
            }
        }
    </style>
</head>
<body>
    <h1>CPU Performance Calculator</h1>
    <label for="numProcessors">Number of Processors:</label>
    <input type="number" id="numProcessors" name="numProcessors" min="1" required><br>

    <label for="numBenchmarks">Number of Benchmarks:</label>
    <input type="number" id="numBenchmarks" name="numBenchmarks" min="1" required><br>

    <button onclick="generateTable()">Generate Table</button>

    <div id="inputTable"></div>
    <div id="output"></div>

    <script>
        function generateTable() {
            var numProcessors = parseInt(document.getElementById("numProcessors").value);
            var numBenchmarks = parseInt(document.getElementById("numBenchmarks").value);
            var table = "<h3>Enter execution times for each processor and benchmark:</h3><div class='table-wrapper'><table border='1'><tr><th>Benchmark</th>";

            // Create the table header for processor names
            for (let i = 0; i < numProcessors; i++) {
                table += "<th><input type='text' id='processor" + i + "' placeholder='Processor " + (i + 1) + "'></th>";
            }
            table += "</tr>";

            // Create rows for benchmark names and execution times
            for (let j = 0; j < numBenchmarks; j++) {
                table += "<tr><td><input type='text' id='benchmark" + j + "' placeholder='Benchmark " + (j + 1) + "'></td>";
                for (let i = 0; i < numProcessors; i++) {
                    table += "<td><input type='number' id='time" + i + "_" + j + "' placeholder='Time (sec)'></td>";
                }
                table += "</tr>";
            }

            table += "</table></div><br><label for='referenceProcessor'>Reference Processor:</label> <select id='referenceProcessor'>";
            for (let i = 0; i < numProcessors; i++) {
                table += "<option value='" + i + "'>Processor " + (i + 1) + "</option>";
            }
            table += "</select><br><br><button onclick='calculateMeans()'>Calculate</button>";

            document.getElementById("inputTable").innerHTML = table;
        }

        // Rest of the JavaScript logic...
    </script>
</body>
</html>
