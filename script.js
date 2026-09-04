/* =========================================
   EDA DATA DETECTIVE
========================================= */


/* =========================================
   SAMPLE DATASET
========================================= */

const students = [

    {
        id: 1,
        study: 2,
        attendance: 72,
        assignments: 65,
        math: 58,
        python: 62
    },

    {
        id: 2,
        study: 3,
        attendance: 78,
        assignments: 70,
        math: 65,
        python: 68
    },

    {
        id: 3,
        study: 4,
        attendance: 82,
        assignments: 76,
        math: 72,
        python: 75
    },

    {
        id: 4,
        study: 5,
        attendance: 85,
        assignments: 82,
        math: 78,
        python: 80
    },

    {
        id: 5,
        study: 6,
        attendance: 88,
        assignments: 86,
        math: 84,
        python: 87
    },

    {
        id: 6,
        study: 7,
        attendance: 91,
        assignments: 90,
        math: 89,
        python: 91
    },

    {
        id: 7,
        study: 8,
        attendance: 94,
        assignments: 93,
        math: 94,
        python: 95
    },

    {
        id: 8,
        study: 3,
        attendance: 75,
        assignments: 68,
        math: 61,
        python: 65
    },

    {
        id: 9,
        study: 5,
        attendance: 84,
        assignments: 80,
        math: 76,
        python: 79
    },

    {
        id: 10,
        study: 7,
        attendance: 90,
        assignments: 88,
        math: 87,
        python: 89
    }

];


/* =========================================
   BASIC FUNCTIONS
========================================= */

function getValues(column) {

    return students.map(function(student) {

        return student[column];

    });

}


function mean(values) {

    return values.reduce(
        function(total, value) {

            return total + value;

        },
        0
    ) / values.length;

}


function median(values) {

    const sorted = [...values].sort(
        function(a, b) {

            return a - b;

        }
    );


    const middle =
        Math.floor(sorted.length / 2);


    if (sorted.length % 2 === 0) {

        return (
            sorted[middle - 1] +
            sorted[middle]
        ) / 2;

    }


    return sorted[middle];

}


function minimum(values) {

    return Math.min(...values);

}


function maximum(values) {

    return Math.max(...values);

}


/* =========================================
   DATASET TABLE
========================================= */

function renderTable(data) {

    const table =
        document.getElementById("dataTable");


    table.innerHTML = "";


    if (data.length === 0) {

        table.innerHTML = `

            <tr>

                <td colspan="6">

                    No students found 🔎

                </td>

            </tr>

        `;

        return;

    }


    data.forEach(function(student) {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${student.id}</td>

            <td>${student.study} hrs</td>

            <td>${student.attendance}%</td>

            <td>${student.assignments}%</td>

            <td>${student.math}%</td>

            <td>${student.python}%</td>

        `;


        table.appendChild(row);

    });

}


function loadTable() {

    renderTable(students);

}


/* =========================================
   DATASET OVERVIEW
========================================= */

function datasetOverview() {

    document.getElementById(
        "totalRows"
    ).innerText = students.length;


    document.getElementById(
        "totalColumns"
    ).innerText = 6;


    document.getElementById(
        "missingValues"
    ).innerText = 0;


    document.getElementById(
        "duplicates"
    ).innerText = 0;

}


/* =========================================
   DATA CLEANING
========================================= */

function cleaningCheck() {

    document.getElementById(
        "cleanMissing"
    ).innerText = 0;


    document.getElementById(
        "cleanDuplicates"
    ).innerText = 0;

}


/* =========================================
   STATISTICAL ANALYSIS
========================================= */

function displayStatistics() {

    const study =
        getValues("study");

    const math =
        getValues("math");

    const python =
        getValues("python");


    /* STUDY */

    document.getElementById(
        "studyMean"
    ).innerText =
        mean(study).toFixed(1) + " hrs";


    document.getElementById(
        "studyMedian"
    ).innerText =
        median(study) + " hrs";


    document.getElementById(
        "studyMin"
    ).innerText =
        minimum(study) + " hrs";


    document.getElementById(
        "studyMax"
    ).innerText =
        maximum(study) + " hrs";


    /* MATH */

    document.getElementById(
        "mathMean"
    ).innerText =
        mean(math).toFixed(1) + "%";


    document.getElementById(
        "mathMedian"
    ).innerText =
        median(math) + "%";


    document.getElementById(
        "mathMin"
    ).innerText =
        minimum(math) + "%";


    document.getElementById(
        "mathMax"
    ).innerText =
        maximum(math) + "%";


    /* PYTHON */

    document.getElementById(
        "pythonMean"
    ).innerText =
        mean(python).toFixed(1) + "%";


    document.getElementById(
        "pythonMedian"
    ).innerText =
        median(python) + "%";


    document.getElementById(
        "pythonMin"
    ).innerText =
        minimum(python) + "%";


    document.getElementById(
        "pythonMax"
    ).innerText =
        maximum(python) + "%";

}


/* =========================================
   KEY FINDINGS
========================================= */

function displayKeyFindings() {

    const math =
        getValues("math");

    const python =
        getValues("python");

    const study =
        getValues("study");

    const attendance =
        getValues("attendance");


    document.getElementById(
        "highestMath"
    ).innerText =
        Math.max(...math) + "%";


    document.getElementById(
        "highestPython"
    ).innerText =
        Math.max(...python) + "%";


    document.getElementById(
        "averageStudy"
    ).innerText =
        mean(study).toFixed(1) + " hrs";


    document.getElementById(
        "averageAttendance"
    ).innerText =
        mean(attendance).toFixed(1) + "%";

}


/* =========================================
   PERFORMANCE CALCULATION
========================================= */

function getPerformance(student) {

    return (

        student.attendance +
        student.assignments +
        student.math +
        student.python

    ) / 4;

}


/* =========================================
   SEARCH + FILTER + SORT
========================================= */

function applyExplorer() {

    const search =
        document.getElementById(
            "studentSearch"
        ).value
        .toLowerCase();


    const filter =
        document.getElementById(
            "performanceFilter"
        ).value;


    const sortOption =
        document.getElementById(
            "sortOption"
        ).value;


    let result =
        [...students];


    /* SEARCH */

    result =
        result.filter(function(student) {

            return String(student.id)
                .includes(search);

        });


    /* PERFORMANCE FILTER */

    if (filter !== "all") {

        result =
            result.filter(function(student) {

                const average =
                    getPerformance(student);


                if (filter === "high") {

                    return average >= 80;

                }


                if (filter === "medium") {

                    return (
                        average >= 65 &&
                        average < 80
                    );

                }


                if (filter === "low") {

                    return average < 65;

                }

            });

    }


    /* SORT */

    if (sortOption !== "default") {

        result.sort(
            function(a, b) {

                return (
                    b[sortOption] -
                    a[sortOption]
                );

            }
        );

    }


    renderTable(result);

}


/* =========================================
   BAR CHART
========================================= */

function createBarChart(
    elementId,
    values
) {

    const chart =
        document.getElementById(elementId);


    chart.innerHTML = "";


    const max =
        Math.max(...values);


    values.forEach(function(value) {

        const bar =
            document.createElement("div");


        bar.className = "bar";


        const height =
            (value / max) * 100;


        bar.style.height =
            height + "%";


        bar.title =
            value;


        chart.appendChild(bar);

    });

}


/* =========================================
   CREATE ALL CHARTS
========================================= */

function createCharts() {

    createBarChart(
        "studyChart",
        getValues("study")
    );


    createBarChart(
        "mathChart",
        getValues("math")
    );


    createBarChart(
        "pythonChart",
        getValues("python")
    );

}


/* =========================================
   CORRELATION
========================================= */

function calculateCorrelation(
    x,
    y
) {

    const xMean =
        mean(x);

    const yMean =
        mean(y);


    let numerator = 0;

    let xSquare = 0;

    let ySquare = 0;


    for (
        let i = 0;
        i < x.length;
        i++
    ) {

        const xDiff =
            x[i] - xMean;

        const yDiff =
            y[i] - yMean;


        numerator +=
            xDiff * yDiff;


        xSquare +=
            xDiff * xDiff;


        ySquare +=
            yDiff * yDiff;

    }


    return (
        numerator /
        Math.sqrt(
            xSquare * ySquare
        )
    );

}


function displayCorrelation() {

    const study =
        getValues("study");


    const math =
        getValues("math");


    const correlation =
        calculateCorrelation(
            study,
            math
        );


    document.getElementById(
        "correlationValue"
    ).innerText =
        correlation.toFixed(2);


    let text = "";


    if (correlation >= 0.7) {

        text =
            "Strong positive relationship detected. Students who study more hours generally tend to achieve higher Math scores.";

    }

    else if (correlation >= 0.4) {

        text =
            "Moderate positive relationship detected between study hours and Math scores.";

    }

    else if (correlation >= 0) {

        text =
            "Weak positive relationship detected.";

    }

    else {

        text =
            "A negative relationship was detected.";

    }


    document.getElementById(
        "correlationText"
    ).innerText = text;

}


/* =========================================
   IQR OUTLIER DETECTION
========================================= */

function getOutliers(values) {

    const sorted =
        [...values].sort(
            function(a, b) {

                return a - b;

            }
        );


    const q1Index =
        Math.floor(
            sorted.length / 4
        );


    const q3Index =
        Math.floor(
            sorted.length * 3 / 4
        );


    const q1 =
        sorted[q1Index];


    const q3 =
        sorted[q3Index];


    const iqr =
        q3 - q1;


    const lower =
        q1 - 1.5 * iqr;


    const upper =
        q3 + 1.5 * iqr;


    return values.filter(
        function(value) {

            return (
                value < lower ||
                value > upper
            );

        }
    );

}


function displayOutliers() {

    const metrics = [

        {
            name: "Study Hours",
            key: "study"
        },

        {
            name: "Math Score",
            key: "math"
        },

        {
            name: "Python Score",
            key: "python"
        }

    ];


    const container =
        document.getElementById(
            "outlierResults"
        );


    container.innerHTML = "";


    metrics.forEach(function(metric) {

        const values =
            getValues(metric.key);


        const outliers =
            getOutliers(values);


        const card =
            document.createElement("div");


        card.className =
            "outlier-card";


        card.innerHTML = `

            <h4>${metric.name}</h4>

            <strong>
                ${
                    outliers.length === 0
                    ? "No Outliers"
                    : outliers.join(", ")
                }
            </strong>

            <p>
                ${
                    outliers.length === 0
                    ? "All values are within the expected range."
                    : "Unusual values detected using IQR."
                }
            </p>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   AUTOMATIC INSIGHTS
========================================= */

function displayInsights() {

    const container =
        document.getElementById(
            "insightsList"
        );


    container.innerHTML = "";


    const study =
        getValues("study");


    const math =
        getValues("math");


    const python =
        getValues("python");


    const attendance =
        getValues("attendance");


    const correlation =
        calculateCorrelation(
            study,
            math
        );


    const insights = [

        `
        📚 Average study time is
        <strong>${mean(study).toFixed(1)} hours</strong>
        per student.
        `,

        `
        🧮 The highest Math score is
        <strong>${maximum(math)}%</strong>.
        `,

        `
        🐍 The highest Python score is
        <strong>${maximum(python)}%</strong>.
        `,

        `
        🎓 Average attendance is
        <strong>${mean(attendance).toFixed(1)}%</strong>.
        `,

        `
        🔗 Study Hours and Math Score have a
        <strong>${correlation.toFixed(2)}</strong>
        correlation.
        `

    ];


    insights.forEach(function(text) {

        const item =
            document.createElement("div");


        item.className =
            "insight";


        item.innerHTML = text;


        container.appendChild(item);

    });

}


/* =========================================
   QUIZ
========================================= */

function checkQuiz() {

    const answers = {

        q1: "b",
        q2: "a",
        q3: "b"

    };


    let score = 0;


    Object.keys(answers).forEach(
        function(question) {

            const selected =
                document.querySelector(
                    `input[name="${question}"]:checked`
                );


            if (
                selected &&
                selected.value ===
                answers[question]
            ) {

                score++;

            }

        }
    );


    const result =
        document.getElementById(
            "quizResult"
        );


    if (score === 3) {

        result.innerText =
            "🎉 Excellent! 3/3 Correct!";

    }

    else if (score === 2) {

        result.innerText =
            "👏 Good job! 2/3 Correct!";

    }

    else if (score === 1) {

        result.innerText =
            "🙂 1/3 Correct. Keep learning!";

    }

    else {

        result.innerText =
            "📚 0/3. Don't worry — try again!";

    }

}


/* =========================================
   INITIALIZE
========================================= */

function initializeDashboard() {

    loadTable();

    datasetOverview();

    cleaningCheck();

    displayStatistics();

    displayKeyFindings();

    createCharts();

    displayCorrelation();

    displayOutliers();

    displayInsights();

}

// CSV Upload
document.getElementById("csvFile").addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.trim().split("\n");

        if (rows.length < 2) {
            document.getElementById("uploadStatus").textContent =
                "❌ CSV file has no data.";
            return;
        }

        const headers = rows[0].split(",").map(h => h.trim());

        const uploadedData = rows.slice(1).map(row => {
            const values = row.split(",").map(v => v.trim());

            const obj = {};

            headers.forEach((header, index) => {
                obj[header] = values[index];
            });

            return obj;
        });

        console.log("Uploaded CSV Data:", uploadedData);

        document.getElementById("uploadStatus").textContent =
            `✅ ${file.name} uploaded successfully! ${uploadedData.length} rows detected.`;
    };

    reader.readAsText(file);
});
function generateReport() {
    const report = document.getElementById("edaReport");

    const avgStudy = mean(getValues(students, "study")).toFixed(1);
    const avgAttendance = mean(getValues(students, "attendance")).toFixed(1);

    const mathCorrelation = calculateCorrelation(
        getValues(students, "study"),
        getValues(students, "math")
    ).toFixed(2);

    const highest = students.reduce((a, b) =>
        b.math > a.math ? b : a
    );

    report.innerHTML = `
        <div class="report-item">
            <span>📊 Dataset Size</span>
            <strong>${students.length} Students</strong>
        </div>

        <div class="report-item">
            <span>⏱️ Average Study Hours</span>
            <strong>${avgStudy} Hours</strong>
        </div>

        <div class="report-item">
            <span>🎯 Average Attendance</span>
            <strong>${avgAttendance}%</strong>
        </div>

        <div class="report-item">
            <span>🏆 Highest Math Score</span>
            <strong>${highest.math}/100</strong>
        </div>

        <div class="report-item">
            <span>🔗 Study Hours vs Math</span>
            <strong>${mathCorrelation}</strong>
        </div>

        <div class="report-conclusion">
            💡 <strong>Conclusion:</strong>
            Students who spend more time studying generally show
            better academic performance in this dataset.
        </div>
    `;
}
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeToggle");

    button.textContent = document.body.classList.contains("light-mode")
        ? "☀️"
        : "🌙";
}
function resetDashboard() {
    document.getElementById("studentSearch").value = "";
    document.getElementById("performanceFilter").value = "all";
    document.getElementById("sortOption").value = "default";

    applyExplorer();

    document.getElementById("edaReport").innerHTML =
        "<p>Click <b>Generate EDA Report</b> to investigate the dataset.</p>";
}
function downloadReport() {
    alert("Report Download Started!");
}
function predictPerformance() {
    const study = Number(document.getElementById("predictStudy").value);
    const attendance = Number(document.getElementById("predictAttendance").value);
    const assignment = Number(document.getElementById("predictAssignment").value);

    if (
        isNaN(study) ||
        isNaN(attendance) ||
        isNaN(assignment) ||
        study === 0 ||
        attendance === 0 ||
        assignment === 0
    ) {
        document.getElementById("predictionResult").innerHTML =
            "⚠️ Please enter all student details.";
        return;
    }

    const predictedScore =
        
