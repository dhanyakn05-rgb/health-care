
let isLoggedIn = true;          // after login
let role = "Doctor";          // Doctor / Clerk / Admin
let biometricVerified = false;

// simulate biometric success
function biometricAuthSuccess() {
    biometricVerified = true;

    if (isLoggedIn && role === "Doctor" && biometricVerified) {
        document.getElementById("aadhaarBtn").disabled = false;
        document.getElementById("qrBtn").disabled = false;
        alert("Biometric verified. Access granted.");
    }
}

// simulate scan
function aadhaarAccess() {
    alert("Accessing Aadhaar details (masked)");
}

function qrAccess() {
    alert("QR scan initiated");
}

document.getElementById("aadhaarBtn").onclick = aadhaarAccess;
document.getElementById("qrBtn").onclick = qrAccess;
// Functions first
function aadhaarAccess() {
    alert(
        "Aadhaar Details (Masked)\n\n" +
        "Name: ********\n" +
        "Aadhaar No: XXXX-XXXX-1234\n" +
        "Access Level: Doctor Only"
    );
}

function biometricAuthSuccess() {
    document.getElementById("aadhaarBtn").disabled = false;
    document.getElementById("qrBtn").disabled = false;
    alert("Biometric verified");
}
function qrAccess() {
    alert("QR scanned successfully. Redirecting to Patient Intake...");
    window.location.href = "care.html";
}


// 2️ EVENT BINDING COMES LAST (VERY IMPORTANT)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("aadhaarBtn").onclick = aadhaarAccess;
});
function aadhaarAccess() {
    alert("Aadhaar verified (masked). Redirecting to Patient Intake...");
    window.location.href = "care.html";   // 👈 ADD THIS LINE
}

function qrAccess() {
    alert("QR scanned successfully. Redirecting to Patient Intake...");
    window.location.href = "care.html";   // 👈 ADD THIS LINE
}

