function policy(){
    var box = document.getElementById("privacyPolicyBox");
    var overlay = document.getElementById("overlay");
    box.style.display = "block";
    overlay.style.display = "block";
    box.innerHTML = `<h3>Privacy Policy</h3>
										<p style="color: black;">
											Effective Date: June 01, 2025<br><br>

											1. Introduction<br><br>

											Welcome to the website of SquareEx Studios. We are committed to respecting
											your
											privacy. This Privacy Policy explains how we handle any information you
											provide
											to us through our contact form. By using our website and submitting
											information
											through the contact form, you consent to the practices described in this
											policy.<br><br>

											Contact Information:<br>
											SquareEx Studios<br><br>

											Email: info@squareexstudios.com<br>
											Phone: +91 9058112210<br><br>

											2. Information We Collect<br><br>

											We collect the following information when you use our contact form:<br><br>

											Information You Provide Directly:<br>
											Name (as entered in the "Name" field).<br>
											Email address (as entered in the "Email" field).<br>
											Phone number (as entered in the "Phone" field).<br>
											The service you are interested in (selected from the dropdown).<br>
											Your message (as entered in the "Message" field).<br><br>

											3. How We Use Your Information<br><br>

											We use the information you provide through the contact form for the
											following
											purposes:<br><br>

											To respond to your inquiries and provide the information or services you
											request.<br>
											To follow up on your message and communicate with you regarding your
											interest in
											our services.<br>
											To understand the needs of our potential clients.<br><br>

											4. How We Handle Your Information<br><br>

											The information you submit through the contact form is typically sent to us
											via
											email. We will use this information to communicate with you directly. We may
											store this information securely for a reasonable period to manage inquiries
											and
											potential client relationships.<br><br>

											We do not:<br><br>

											Automatically collect any other personal information (like IP addresses,
											browsing history, cookies) as this is a static website with no user accounts
											or
											tracking mechanisms implemented.<br>
											Share your contact form information with third parties for marketing
											purposes
											without your explicit consent.<br><br>

											5. Data Security<br><br>

											We take reasonable precautions to protect the information you submit through
											the
											contact form during transmission and storage. However, please understand
											that
											email communication is not always secure, and we cannot guarantee the
											absolute
											security of information transmitted via email.<br><br>

											6. Your Rights<br><br>

											You have the right to request access to the information you have submitted
											through the contact form and to ask us to correct any inaccuracies. If you
											would
											like to exercise these rights, please contact us using the information
											provided
											above.<br><br>

											7. Links to Other Websites<br><br>

											Our website may contain links to other websites. We are not responsible for
											the
											privacy practices or content of these websites. We encourage you to review
											the
											privacy policies of those websites if you visit them.<br><br>

											8. Updates to this Privacy Policy<br><br>

											We may update this Privacy Policy from time to time. Any changes will be
											posted
											on this page with a revised effective date.<br><br>

											9. Governing Law and Jurisdiction<br><br>

											This Privacy Policy shall be governed by and construed in accordance with
											the
											laws of India. Any disputes arising under or in connection with this Privacy
											Policy shall be subject to the exclusive jurisdiction of the courts in
											Aligarh,
											Uttar Pradesh.<br><br>
										</p>
										<button type="button" class="btn btn-secondary btn-sm"
											id="closePrivacyPolicy">Close</button>`;
    document.getElementById("closePrivacyPolicy").addEventListener("click", function () {
        box.innerHTML = '';
        box.style.display = "none";
        overlay.style.display = "none";
    });
}

document.getElementById("privacyPolicyLink").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page jump
    policy();
});
