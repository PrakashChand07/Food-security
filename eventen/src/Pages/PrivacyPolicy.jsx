import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import PageHelmet from "../Components/Pagehelmet";

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHelmet pageTitle="Privacy Policy" />
      <Breadcrumb
        title="Privacy Policy"
        bgImage="assets/images/apply/Pitch.jpg"
      />

      <section className="py-8 speak-page-margin">
        <div className="container">
          <div className="bg-white rounded-4 p-5 shadow-sm border">
            <h2 className="fw-bold mb-4 text-center">Privacy Policy</h2>

            <p className="mb-4">
              This Privacy Policy describes how the <strong>Food Security Summit X</strong> 
              ("The Organizer," "we," "us," or "our") collects, uses, protects, and 
              discloses your Personal Information when you visit our website, register 
              for the Summit, or purchase sponsorship packages (the <b>"Service"</b>).
            </p>

            <p className="mb-4">
              This Website is managed by <strong>VERTALISX VENTURES LLP</strong>.  
            </p>

                        <p className="mb-4">
              By using our Service, you agree to the collection and use of information in accordance with this policy.
            </p>

            {/* Section 1 */}
            <h4 className="mt-5 mb-3 fw-semibold">1. Information We Collect</h4>
            <p>We collect information necessary for event registration, communication, and networking purposes.</p>

            <h6 className="fw-semibold mt-3">A. Personal Information You Provide Voluntarily (Registration Data)</h6>
            <p>We collect the following PII when you register, buy tickets, or apply for sponsorship:</p>
            <ul>
              <li>
                <b>Identity & Contact Data:</b>Your full name, job title, company/organization name, professional email address, and phone number.
              </li>
              <li>
                <b>Payment Data:</b>  Transaction details required to process ticket or sponsorship fees. Note: Sensitive financial details (like full credit card numbers) are processed securely by third-party payment gateways and are not stored directly on our servers.
              </li>
              <li>
                <b>Preferences:</b> Dietary requirements, accessibility needs, or specific session/networking interests.
              </li>
              <li>
                <b>Speaker/Exhibitor Data:</b> Biographical information, headshots, and presentation abstracts (used for public event promotion).
              </li>
            </ul>

            <h6 className="fw-semibold mt-3">B. Usage Data and Tracking Technologies</h6>
            <p>When you access the Service, we automatically collect non-personal data related to your visit ("Usage Data"):</p>
            <ul>
              <li><b>Log Data:</b> Your IP address, device type, browser information, pages viewed, and registration path.</li>
              <li><b>Cookies:</b>We use cookies to maintain your session (e.g., during the ticketing process) and analyze site traffic and marketing effectiveness.</li>
            </ul>

            {/* Section 2 */}
            <h4 className="mt-5 mb-3 fw-semibold">2. How We Use Your Information</h4>
            <p>We use the collected information exclusively for purposes related to organizing and facilitating the Summit:
</p>

            <ul>
              <li>
                <b>Event Access:</b>To confirm your registration, issue official tickets/badges, and facilitate your entry to the event (physical or virtual).
              </li>
              <li>
                <b>Communication:</b> To send you critical event updates, agenda changes, logistics information, and invoicing.
              </li>
              <li>
                <b>Networking:</b> Your name, company, and job title may be shared with other attendees, sponsors, or speakers through event networking apps or official attendee lists unless you explicitly opt-out during registration.
              </li>
              <li>
                <b>Promotional Use:</b>Speaker bios, photos, and company logos provided by sponsors are used for public promotion of the event (website, program guide, social media).
              </li>
              <li>
                <b>Analytics:</b>To analyze attendance trends, track the success of marketing campaigns, and improve the format and content of future summits.
              </li>
              <li>
                <b>Legal & Financial:</b>To process payments/refunds, maintain financial records, and comply with all applicable tax and regulatory requirements.
              </li>
            </ul>

            {/* Section 3 */}
            <h4 className="mt-5 mb-3 fw-semibold">3. Sharing and Disclosure of Information</h4>
<p>We share your information only as necessary to execute the event or comply with legal obligations:
</p>
            <ul>
              <li>
                <b>Sponsors & Partners:</b> We may share basic contact information (Name, Company, Job Title) with our official sponsors and partners for relevant business and networking purposes.
              </li>
              <li>
                <b>Service Providers:</b> We share necessary data with trusted third parties who perform essential functions on our behalf (e.g., event registration software, mobile app providers, payment gateways, venue security). These parties are bound by strict confidentiality agreements.
              </li>
              <li>
                <b>Public Display (Speakers/Sponsors):</b> Biographical and company information provided for promotional purposes is displayed publicly.
              </li>
              <li>
                <b>Legal Compliance:</b> We may disclose your information if required by law, court order, or governmental authority.

              </li>
            </ul>

            {/* Section 4 */}
            <h4 className="mt-5 mb-3 fw-semibold">4. Data Security and Retention</h4>

            <h6 className="fw-semibold mt-3">Security</h6>
            <p>
              We implement commercially reasonable administrative, technical, and physical safeguards to protect the Personal Information we collect.
            </p>

            <h6 className="fw-semibold mt-3">Retention</h6>
            <p>
             We retain registration and financial data for as long as necessary to fulfill the purposes outlined in this policy, manage post-event communications, and comply with legal and audit requirements (typically several years).
            </p>

            {/* Section 5 */}
            <h4 className="mt-5 mb-3 fw-semibold">5. Media and Likeness</h4>
            <p>
              By registering, you acknowledge that the Summit is a public event, and you consent to the use of your image, voice, and likeness in photographs, videos, and recordings captured by The Organizer during the event for future promotional and archival purposes.
            </p>

            <h4 className="mt-5 mb-3 fw-semibold">6. Contact Us</h4>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>

            <p>
              <b>Email:</b>{" "}
              <a href="mailto:contact@foodsecuritysummitx.com" className="footer-link fw-semibold">
                contact@foodsecuritysummitx.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
