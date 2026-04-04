import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import PageHelmet from "../Components/Pagehelmet";

const TermsConditions = () => {
  return (
    <div>
      <PageHelmet pageTitle="Terms and Conditions" />
      <Breadcrumb
        title="Terms and Conditions"
        bgImage="assets/images/apply/Pitch.jpg"
      />

      <section className="py-8 speak-page-margin">
        <div className="container">
          <div className="bg-white rounded-4 p-5 shadow-sm border">
            <h2 className="fw-bold mb-4 text-center">Terms and Conditions</h2>

            <p className="mb-4">
              Welcome to the <strong>Food Security Summit X</strong> website!
              These Terms and Conditions govern your access to and use of our
              website, event registration, ticket purchases, sponsorships, and
              all associated content and services (collectively, the{" "}
              <b>"Service"</b>).
            </p>

            <p className="mb-4">
              By accessing, registering, booking, or using the Service, you
              confirm that you have read, understood, and agree to be bound by
              these Terms and our Privacy Policy. If you do not agree with any
              part of these Terms, you must not use the Service or attend the
              event.
            </p>

            {/* Section 1 */}
            <h4 className="mt-5 mb-3 fw-semibold">
              1. General Conditions and Event Scope
            </h4>

            <h6 className="fw-semibold mt-3">1.1 Purpose of the Service</h6>
            <p>
              The Service is provided to manage the Food Security Summit X event,
              including providing information, speaker profiles, agenda details,
              and facilitating ticket and sponsorship registrations.
            </p>

            <h6 className="fw-semibold mt-3">1.2 Eligibility</h6>
            <p>
              By using the Service, you represent that you are at least 18 years
              of age or the age of legal majority in your jurisdiction and are
              legally capable of entering into this agreement. If registering on
              behalf of an organization, you warrant that you have the authority
              to bind that entity.
            </p>

            <h6 className="fw-semibold mt-3">1.3 Event Changes and Cancellation</h6>
            <p>
              The Organizer reserves the right to change the date, time, venue,
              speakers, agenda, or format (e.g., converting to virtual) of the
              Summit due to unforeseen circumstances, health guidelines,
              government mandates, or logistical requirements without prior
              notice. The Organizer is not liable for any costs incurred by
              attendees/sponsors due to such changes.
            </p>

            {/* Section 2 */}
            <h4 className="mt-5 mb-3 fw-semibold">
              2. Registration, Tickets, and Payment
            </h4>

            <h6 className="fw-semibold mt-3">2.1 Ticket Purchase</h6>
            <p>
              All sales are final upon confirmation. You must provide accurate
              and complete registration information. You are responsible for
              ensuring your ticket is valid and secured against unauthorized
              duplication.
            </p>

            <h6 className="fw-semibold mt-3">2.2 Payment</h6>
            <p>
              Payment for tickets, sponsorships, or exhibition space must be made
              in full by the specified deadlines. Failure to submit payment may
              result in the cancellation of your registration or reserved space
              without recourse.
            </p>

            <h6 className="fw-semibold mt-3">2.3 Ticket Cancellation and Refunds</h6>
            <p>
              <b>General Rule:</b> Unless otherwise explicitly stated at the time
              of purchase, all ticket and registration fees are non-refundable.
            </p>
            <p>
              <b>Organizer Cancellation:</b> If the Summit is canceled entirely
              by The Organizer (and not merely postponed or moved online),
              liability will be limited to a full refund of the ticket price paid
              by you. The Organizer is not responsible for any travel,
              accommodation, or other related expenses.
            </p>

            <h6 className="fw-semibold mt-3">2.4 Code of Conduct</h6>
            <p>
              All attendees and participants must adhere to a professional and
              respectful code of conduct. The Organizer reserves the right to
              deny admission or remove any participant engaging in disorderly,
              harassing, or unethical behavior without refund.
            </p>

            {/* Section 3 */}
            <h4 className="mt-5 mb-3 fw-semibold">
              3. Intellectual Property and Content Use
            </h4>

            <h6 className="fw-semibold mt-3">3.1 Content Ownership</h6>
            <p>
              The website, its content, the Summit materials, presentations,
              trademarks, and logos are the exclusive property of The Organizer
              or its licensors.
            </p>

            <h6 className="fw-semibold mt-3">3.2 Recording and Reproduction</h6>
            <p>
              Attendees may not record, reproduce, transmit, or distribute any
              session content, presentations, or speaker materials (audio, video,
              or photo) without the express written permission of The Organizer
              and the speaker/presenter involved.
            </p>

            <h6 className="fw-semibold mt-3">3.3 Likeness Release</h6>
            <p>
              By attending the Summit (physically or virtually), you grant The
              Organizer the irrevocable right to use your image, voice, and
              likeness in photographs, videos, and recordings captured during the
              event for promotional and marketing purposes, without compensation.
            </p>

            {/* Section 4 */}
            <h4 className="mt-5 mb-3 fw-semibold">
              4. Disclaimers and Limitation of Liability
            </h4>

            <h6 className="fw-semibold mt-3">4.1 No Professional Advice</h6>
            <p>
              Any views, opinions, or recommendations expressed by speakers,
              sponsors, or other participants at the Summit are solely those of
              the individual participant and do not necessarily represent the
              views of The Organizer. Content is for informational purposes only
              and does not constitute professional advice.
            </p>

            <h6 className="fw-semibold mt-3">4.2 Limitation of Liability</h6>
            <p>
              In no event shall The Organizer, its employees, or agents be liable
              for any direct, indirect, incidental, punitive, special, or
              consequential damages (including loss of business, data, or
              profits) arising from:
            </p>
            <ul>
              <li>Your attendance or participation in the Summit.</li>
              <li>Reliance on any information presented at the Summit.</li>
              <li>
                The actions of any third-party vendor, speaker, or other
                participant.
              </li>
            </ul>
            <p>
              The Organizer's maximum aggregate liability shall be strictly
              limited to the total fees paid by you to The Organizer for the
              specific ticket or sponsorship package in dispute.
            </p>

            {/* Section 5 */}
            <h4 className="mt-5 mb-3 fw-semibold">
              5. Governing Law and Contact
            </h4>

            <h6 className="fw-semibold mt-3">5.1 Governing Law</h6>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of <b>India.</b>
            </p>

            <h6 className="fw-semibold mt-3">5.2 Refunds</h6>
            <p>
              We do not provide any kind of refund due to the nature of the
              business.
            </p>

            <h6 className="fw-semibold mt-3">5.3 Contact Information</h6>
            <p>
              Questions about these Terms and Conditions should be directed to us
              at:
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

export default TermsConditions;
