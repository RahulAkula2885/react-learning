import React from "react";

function Terms() {

    const currentDate = new Date();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
});

    return (
        <div className="container my-5">
            <div className="card shadow p-4">

                <h2 className="text-center text-primary mb-4">
                    Terms & Conditions
                </h2>

                <p>
                    Welcome to <strong>React.js learning</strong>. By accessing or using this application,
                    you agree to the following Terms & Conditions. Please read them carefully before using the app.
                </p>

                <hr />

                <h5>1. App Purpose</h5>
                <p>
                    React.js learning is an educational platform designed to help users learn React.js,
                    JavaScript, and modern web development concepts through interactive examples, forms,
                    and practice-based learning.
                </p>

                <h5>2. Acceptance of Terms</h5>
                <p>
                    By using this application, you agree to be legally bound by these Terms & Conditions.
                    If you do not agree, you should discontinue using the application immediately.
                </p>

                <h5>3. User Information We Collect</h5>
                <p>
                    We may collect the following user information:
                </p>

                <ul>
                    <li>Name (e.g., Rahul)</li>
                    <li>Email (noreplyrahulrao@gmail.com)</li>
                    <li>Phone Number (e.g., 9963178796)</li>
                    <li>Location (Hyderabad)</li>
                </ul>

                <p>
                    This information is collected only to improve user experience, provide personalized learning,
                    and maintain application functionality.
                </p>

                <h5>4. Data Privacy</h5>
                <p>
                    We respect user privacy. Your data is not sold, rented, or shared with third-party services.
                    It is used strictly for application functionality and learning improvements.
                </p>

                <h5>5. User Responsibilities</h5>
                <ul>
                    <li>Users must provide accurate information while signing up.</li>
                    <li>Users must use the platform only for learning purposes.</li>
                    <li>Any misuse, abuse, or harmful activity is strictly prohibited.</li>
                </ul>

                <h5>6. Acceptable Use Policy</h5>
                <p>
                    You agree not to:
                </p>
                <ul>
                    <li>Copy or misuse application code or content</li>
                    <li>Attempt to damage or disrupt the application</li>
                    <li>Use the platform for illegal or harmful activities</li>
                </ul>

                <h5>7. Payments</h5>
                <p>
                    This application is completely free to use. We do not charge any fees or offer paid services.
                </p>

                <h5>8. Intellectual Property</h5>
                <p>
                    All content, including UI design, code structure, and learning material, belongs to
                    React.js learning unless otherwise stated. Unauthorized reproduction is prohibited.
                </p>

                <h5>9. Service Availability</h5>
                <p>
                    We do not guarantee uninterrupted or error-free operation of the application.
                    Features may change, update, or be removed without prior notice.
                </p>

                <h5>10. Limitation of Liability</h5>
                <p>
                    We are not responsible for any direct or indirect damages arising from the use of this application.
                </p>

                <h5>11. Changes to Terms</h5>
                <p>
                    We may update these Terms & Conditions at any time. Continued use of the application
                    indicates acceptance of the updated terms.
                </p>

                <h5>12. Contact Information</h5>
                <p>
                    For any questions regarding these Terms & Conditions, contact us at: +91-9963178796
                </p>

                <p>
                    📧 <strong>noreplyrahulrao@gmail.com</strong>
                </p>

                <hr />

                {/* <p className="text-muted text-center">
                    Last updated: June 2026
                </p> */}

                <p className="text-muted text-center">
                    Last updated: {lastUpdated}
                </p>

                {/* <p className="text-muted text-center">
                    Last updated: {month} {year}
                </p> */}

            </div>
        </div>
    );
}

export default Terms;