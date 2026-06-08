import LegalPage from "@/components/LegalPage";
import { legalH2, legalH3, legalLink, legalMuted, legalUl } from "@/lib/legalStyles";

const h2 = legalH2;
const h3 = legalH3;
const ul = legalUl;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className={legalMuted}>Last updated: January 2025</p>

      <p>
        At EstateLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website estatelabs.io and use our services.
      </p>

      <h2 className={h2}>1. Information We Collect</h2>

      <h3 className={h3}>1.1 Personal Information</h3>
      <p>We may collect personal information that you voluntarily provide to us when you:</p>
      <ul className={ul}>
        <li>Fill out consultation forms or contact us</li>
        <li>Subscribe to our newsletter</li>
        <li>Request information about our services</li>
        <li>Communicate with us via email, phone, or WhatsApp</li>
        <li>Provide your contact details for customer support</li>
      </ul>
      <p>
        This information may include your name, email address, phone number, company name,
        messages, and any other information you choose to provide.
      </p>

      <h3 className={h3}>1.2 Automatically Collected Information</h3>
      <p>
        When you visit our website, we automatically collect certain information about your
        device, including:
      </p>
      <ul className={ul}>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages you visit and time spent on pages</li>
        <li>Referring website addresses</li>
      </ul>

      <h2 className={h2}>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul className={ul}>
        <li>Provide, maintain, and improve our services</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send you transactional messages, order updates, and service notifications</li>
        <li>
          Send you marketing and promotional communications via WhatsApp, email, or SMS (with
          your consent)
        </li>
        <li>Process your service requests and manage your account</li>
        <li>Analyze website usage and trends</li>
        <li>Prevent fraud and ensure security</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h3 className={h3}>WhatsApp Communication</h3>
      <p>
        By providing your phone number and consenting to receive WhatsApp messages, you agree to
        receive transactional messages (such as order confirmations, service updates) and
        promotional messages from EstateLabs. You can opt-out at any time by following the
        instructions provided in our messages or by contacting us directly.
      </p>

      <h2 className={h2}>3. Information Sharing and Disclosure</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share
        your information only in the following circumstances:
      </p>
      <ul className={ul}>
        <li>
          With service providers who assist us in operating our website and conducting our
          business, including:
          <ul className={`${ul} mt-2`}>
            <li>CRM tools and customer management platforms</li>
            <li>Analytics and data analysis services</li>
            <li>WhatsApp API providers and messaging service platforms</li>
            <li>Email marketing and communication services</li>
            <li>Cloud storage and hosting providers</li>
          </ul>
        </li>
        <li>
          With Meta (WhatsApp) in accordance with their data handling requirements and terms of
          service
        </li>
        <li>When required by law or to protect our rights</li>
        <li>In connection with a business transfer or merger</li>
        <li>With your explicit consent</li>
      </ul>

      <h3 className={h3}>Third-Party Service Providers</h3>
      <p>
        We work with trusted third-party service providers who are contractually obligated to
        protect your data and use it only for the purposes we specify. These providers help us
        deliver services such as customer support, analytics, and communication platforms.
      </p>

      <h2 className={h2}>4. Data Security and Retention</h2>

      <h3 className={h3}>4.1 Data Security</h3>
      <p>
        We implement appropriate technical and organizational security measures to protect your
        personal information against unauthorized access, alteration, disclosure, or
        destruction. These measures include:
      </p>
      <ul className={ul}>
        <li>Encryption of data in transit and at rest</li>
        <li>Secure access controls and authentication</li>
        <li>Regular security assessments and updates</li>
        <li>Employee training on data protection</li>
        <li>Compliance with industry security standards</li>
      </ul>
      <p>
        However, no method of transmission over the Internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h3 className={h3}>4.2 Data Retention</h3>
      <p>
        We retain your personal information only for as long as necessary to fulfill the purposes
        outlined in this Privacy Policy, unless a longer retention period is required or
        permitted by law. Generally:
      </p>
      <ul className={ul}>
        <li>
          Customer contact information and communication records are retained for up to 3 years
          after the last interaction
        </li>
        <li>
          Service-related data is retained for the duration of the service relationship and up to
          7 years for legal and accounting purposes
        </li>
        <li>
          Marketing consent records are retained until you withdraw consent or request deletion
        </li>
        <li>We may retain anonymized or aggregated data for analytical purposes indefinitely</li>
      </ul>

      <h2 className={h2}>5. Your Rights and Opt-Out Mechanisms</h2>

      <h3 className={h3}>5.1 Your Rights</h3>
      <p>
        Depending on your location, you may have the following rights regarding your personal
        information:
      </p>
      <ul className={ul}>
        <li>Right to access your personal information</li>
        <li>Right to correct inaccurate information</li>
        <li>Right to request deletion of your information</li>
        <li>Right to object to processing of your information</li>
        <li>Right to data portability</li>
        <li>Right to withdraw consent</li>
      </ul>

      <h3 className={h3}>5.2 Opt-Out/Unsubscribe from WhatsApp Messages</h3>
      <p>
        You have the right to opt-out of receiving WhatsApp messages from us at any time. You can
        unsubscribe by:
      </p>
      <ul className={ul}>
        <li>Replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to any WhatsApp message you receive from us</li>
        <li>
          Contacting us directly at{" "}
          <a href="mailto:info@estatelabs.io" className={legalLink}>
            info@estatelabs.io
          </a>{" "}
          and requesting to be removed from our WhatsApp communication list
        </li>
        <li>Calling us at +91 701 753 8193 or +971 50 287 6260</li>
      </ul>
      <p>
        Once you opt-out, we will stop sending you promotional messages. However, you may still
        receive essential transactional messages related to active services or orders, as these
        are necessary for service delivery.
      </p>

      <h2 className={h2}>6. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our website and
        store certain information. You can instruct your browser to refuse all cookies or to
        indicate when a cookie is being sent. However, if you do not accept cookies, you may not
        be able to use some portions of our website.
      </p>

      <h2 className={h2}>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices of these external sites. We encourage you to review the privacy policies
        of any third-party sites you visit.
      </p>

      <h2 className={h2}>8. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 18. We do not knowingly
        collect personal information from children. If you become aware that a child has provided
        us with personal information, please contact us, and we will take steps to delete such
        information.
      </p>

      <h2 className={h2}>9. Compliance with Legal Obligations</h2>
      <p>
        We are committed to complying with all applicable data protection laws and regulations,
        including:
      </p>
      <ul className={ul}>
        <li>Local data protection laws in the United Arab Emirates</li>
        <li>Meta&apos;s (WhatsApp) data handling requirements and terms of service</li>
        <li>International data protection standards where applicable</li>
        <li>Industry-specific regulations related to our services</li>
      </ul>
      <p>
        We regularly review and update our practices to ensure ongoing compliance with evolving
        legal requirements and best practices.
      </p>

      <h2 className={h2}>10. International Data Transfers</h2>
      <p>
        Your information may be transferred to and maintained on computers located outside of your
        state, province, country, or other governmental jurisdiction where data protection laws
        may differ. By using our services, you consent to the transfer of your information to our
        facilities in the United Arab Emirates and to third-party service providers who may
        process data in other jurisdictions, in accordance with applicable data protection laws.
      </p>

      <h2 className={h2}>11. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make material changes, we will:</p>
      <ul className={ul}>
        <li>Post the updated Privacy Policy on this page</li>
        <li>Update the &quot;Last updated&quot; date at the top of this policy</li>
        <li>
          Notify you via email or WhatsApp if the changes significantly affect your rights
        </li>
        <li>Provide a summary of key changes when appropriate</li>
      </ul>
      <p>
        Your continued use of our services after such changes constitutes acceptance of the updated
        Privacy Policy. We encourage you to review this Privacy Policy periodically to stay
        informed about how we protect your information.
      </p>

      <h2 className={h2}>12. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or wish to exercise your rights,
        please contact us:
      </p>
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
