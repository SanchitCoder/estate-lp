import LegalPage from "@/components/LegalPage";
import { legalH2, legalH3, legalLink, legalMuted, legalUl } from "@/lib/legalStyles";

const h2 = legalH2;
const h3 = legalH3;
const ul = legalUl;

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p className={legalMuted}>Last updated: January 2025</p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the EstateLabs
        website (estatelabs.io) and our services. By accessing or using our services, you agree to
        be bound by these Terms.
      </p>

      <h2 className={h2}>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our website and services, you acknowledge that you have read,
        understood, and agree to be bound by these Terms and our Privacy Policy. If you do not
        agree with these Terms, you must not use our services.
      </p>

      <h2 className={h2}>2. Services Description</h2>
      <p>EstateLabs provides AI-powered solutions including:</p>
      <ul className={ul}>
        <li>AI Consulting and Strategy</li>
        <li>AI Website Design &amp; Development</li>
        <li>AI Automation Services</li>
        <li>Custom AI Agents &amp; Assistants</li>
        <li>Content Generation Services</li>
        <li>Integration Services</li>
      </ul>

      <h2 className={h2}>3. Use of Services</h2>

      <h3 className={h3}>3.1 Permitted Use</h3>
      <p>
        You may use our services for lawful business purposes only. You agree not to use our
        services in any way that violates applicable laws or regulations.
      </p>

      <h3 className={h3}>3.2 Prohibited Activities</h3>
      <p>You agree not to:</p>
      <ul className={ul}>
        <li>Use our services for any illegal or unauthorized purpose</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with or disrupt our services or servers</li>
        <li>Transmit any viruses, malware, or harmful code</li>
        <li>Copy, modify, or create derivative works of our services</li>
        <li>Reverse engineer or attempt to extract source code</li>
      </ul>

      <h3 className={h3}>3.3 User Responsibilities</h3>
      <p>You are responsible for:</p>
      <ul className={ul}>
        <li>
          Providing accurate and complete contact details, including your phone number and email
          address
        </li>
        <li>Maintaining the security and confidentiality of your account information</li>
        <li>
          Not misusing the WhatsApp communication channel or any other communication platform we
          use
        </li>
        <li>
          Ensuring that any information you provide is truthful and does not infringe on the
          rights of others
        </li>
        <li>Complying with all applicable laws and regulations when using our services</li>
      </ul>

      <h2 className={h2}>4. Communication and WhatsApp Messages</h2>

      <h3 className={h3}>4.1 Communication Consent</h3>
      <p>By providing your phone number and using our services, you explicitly agree to receive:</p>
      <ul className={ul}>
        <li>
          Transactional messages via WhatsApp, including order confirmations, service updates,
          and delivery notifications
        </li>
        <li>
          Promotional and marketing messages via WhatsApp, email, or SMS (with your consent)
        </li>
        <li>Customer support communications via WhatsApp or other channels</li>
        <li>Important service-related announcements and updates</li>
      </ul>

      <h3 className={h3}>Your Consent</h3>
      <p>
        By providing your contact information and using our services, you consent to receive
        communications from EstateLabs via WhatsApp and other communication channels. This consent
        is voluntary, and you may withdraw it at any time.
      </p>

      <h3 className={h3}>4.2 Opt-Out and Grievance Redressal</h3>
      <p>
        You have the right to opt-out of receiving promotional communications at any time. You
        can do so by:
      </p>
      <ul className={ul}>
        <li>Replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to any WhatsApp message you receive from us</li>
        <li>
          Contacting us at{" "}
          <a href="mailto:info@estatelabs.io" className={legalLink}>
            info@estatelabs.io
          </a>{" "}
          and requesting to be removed from our communication list
        </li>
        <li>Calling us at +91 701 753 8193 or +971 50 287 6260</li>
      </ul>
      <p>
        <strong>Grievance Redressal:</strong> If you have any complaints or concerns regarding our
        communication practices, data handling, or services, please contact us at{" "}
        <a href="mailto:info@estatelabs.io" className={legalLink}>
          info@estatelabs.io
        </a>
        . We will acknowledge your complaint within 48 hours and work to resolve it within 30
        days. We are committed to addressing all grievances in a fair and timely manner.
      </p>

      <h2 className={h2}>5. Intellectual Property</h2>
      <p>
        All content, features, and functionality of our services, including but not limited to
        text, graphics, logos, and software, are owned by EstateLabs or its licensors and are
        protected by international copyright, trademark, and other intellectual property laws.
      </p>
      <p>
        You may not reproduce, distribute, modify, or create derivative works of our content
        without our express written permission.
      </p>

      <h2 className={h2}>6. Client Projects and Deliverables</h2>

      <h3 className={h3}>6.1 Ownership</h3>
      <p>
        Upon full payment, you will own the deliverables created specifically for your project. We
        retain the right to use general methodologies, techniques, and knowledge gained during the
        project.
      </p>

      <h3 className={h3}>6.2 Client Content</h3>
      <p>
        You retain ownership of any content, data, or materials you provide to us. By providing such
        content, you grant us a license to use it solely for the purpose of delivering our
        services.
      </p>

      <h2 className={h2}>7. Payment Terms</h2>
      <p>Payment terms will be specified in individual service agreements. Generally:</p>
      <ul className={ul}>
        <li>Projects require a deposit before work begins</li>
        <li>Final payment is due upon project completion</li>
        <li>All fees are non-refundable unless otherwise specified</li>
        <li>Late payments may incur additional charges</li>
      </ul>

      <h2 className={h2}>8. Warranties and Disclaimers</h2>
      <p>We strive to provide high-quality services, but we make no warranties, express or implied, regarding:</p>
      <ul className={ul}>
        <li>The uninterrupted or error-free operation of our services</li>
        <li>The accuracy or completeness of any information provided</li>
        <li>The results that may be obtained from using our services</li>
      </ul>
      <p>
        Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
      </p>

      <h2 className={h2}>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, EstateLabs shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits or
        revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
        other intangible losses resulting from your use of our services.
      </p>

      <h3 className={h3}>Third-Party Platform Disclaimer</h3>
      <p>
        We are not responsible for any issues, disruptions, or limitations arising from third-party
        platforms, including but not limited to WhatsApp, Meta&apos;s services, or other communication
        platforms. We do not control these platforms and are not liable for:
      </p>
      <ul className={ul}>
        <li>Service outages or technical issues with third-party platforms</li>
        <li>Changes to third-party platform policies or terms of service</li>
        <li>Unauthorized access or misuse of third-party platforms by external parties</li>
        <li>Data breaches or security incidents on third-party platforms beyond our control</li>
        <li>
          Any misuse of the WhatsApp channel or other communication platforms by users or external
          parties
        </li>
      </ul>
      <p>
        While we take reasonable measures to ensure secure communication, we cannot guarantee the
        absolute security of messages transmitted through third-party platforms.
      </p>

      <h2 className={h2}>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless EstateLabs, its officers, directors, employees,
        and agents from any claims, damages, losses, liabilities, and expenses (including legal
        fees) arising out of or relating to your use of our services, violation of these Terms,
        or infringement of any rights of another.
      </p>

      <h2 className={h2}>11. Termination</h2>
      <p>
        We may terminate or suspend your access to our services immediately, without prior notice,
        for any reason, including if you breach these Terms. Upon termination:
      </p>
      <ul className={ul}>
        <li>Your right to use our services will cease immediately</li>
        <li>You remain responsible for any outstanding payments</li>
        <li>Provisions that by their nature should survive termination will remain in effect</li>
      </ul>

      <h2 className={h2}>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the United
        Arab Emirates, without regard to its conflict of law provisions. Any disputes arising from
        these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, United
        Arab Emirates.
      </p>

      <h2 className={h2}>13. Changes to Terms and Privacy Policy</h2>
      <p>
        We reserve the right to modify these Terms of Service and our Privacy Policy at any time.
        When we make material changes, we will:
      </p>
      <ul className={ul}>
        <li>Post the updated Terms or Privacy Policy on this website</li>
        <li>Update the &quot;Last updated&quot; date at the top of the respective policy</li>
        <li>
          Notify you via email or WhatsApp if the changes significantly affect your rights or
          obligations
        </li>
        <li>Provide a summary of key changes when appropriate</li>
      </ul>
      <p>
        Your continued use of our services after such changes constitutes acceptance of the updated
        Terms and Privacy Policy. We encourage you to review these documents periodically to stay
        informed about any updates.
      </p>

      <h2 className={h2}>14. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us:</p>
      <ul className={ul}>
        <li>
          Email:{" "}
          <a href="mailto:info@estatelabs.io" className={legalLink}>
            info@estatelabs.io
          </a>
        </li>
        <li>Phone: +91 701 753 8193</li>
        <li>Phone: +971 50 287 6260</li>
      </ul>
    </LegalPage>
  );
}
