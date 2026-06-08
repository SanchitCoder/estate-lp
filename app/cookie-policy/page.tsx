import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legalH2, legalH3, legalLink, legalMuted, legalUl } from "@/lib/legalStyles";

const h2 = legalH2;
const h3 = legalH3;
const ul = legalUl;

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p className={legalMuted}>Last updated: January 2025</p>

      <p>
        This Cookie Policy explains how EstateLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies
        and similar tracking technologies on our website estatelabs.io. This policy should be read
        alongside our{" "}
        <Link href="/privacy-policy" className={legalLink}>
          Privacy Policy
        </Link>
        , which provides additional information about how we collect, use, and protect your
        personal information.
      </p>

      <h2 className={h2}>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device (computer, tablet, or mobile)
        when you visit a website. Cookies are widely used to make websites work more efficiently
        and provide information to website owners. Cookies allow a website to recognize your device
        and store some information about your preferences or past actions.
      </p>

      <h2 className={h2}>2. Types of Cookies We Use</h2>

      <h3 className={h3}>2.1 Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly. They enable core
        functionality such as security, network management, and accessibility. You cannot opt-out
        of these cookies as they are essential for the website to work.
      </p>

      <h3 className={h3}>2.2 Performance and Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting and
        reporting information anonymously. This helps us improve the way our website works, for
        example, by ensuring that users find what they are looking for easily.
      </p>

      <h3 className={h3}>2.3 Functionality Cookies</h3>
      <p>
        These cookies allow the website to remember choices you make (such as your username,
        language, or region) and provide enhanced, more personalized features. They may also be
        used to provide services you have requested.
      </p>

      <h3 className={h3}>2.4 Targeting/Advertising Cookies</h3>
      <p>
        These cookies may be set through our site by our advertising partners. They may be used to
        build a profile of your interests and show you relevant content on other sites. They do
        not store directly personal information but are based on uniquely identifying your browser
        and internet device.
      </p>

      <h2 className={h2}>3. Specific Cookies We Use</h2>

      <h3 className={h3}>Session Cookies</h3>
      <p>
        These are temporary cookies that are deleted when you close your browser. They help maintain
        your session while you navigate through our website.
      </p>
      <p>
        <strong>Duration:</strong> Session only
      </p>

      <h3 className={h3}>Persistent Cookies</h3>
      <p>
        These cookies remain on your device for a set period or until you delete them. They help us
        remember your preferences and improve your experience on future visits.
      </p>
      <p>
        <strong>Duration:</strong> Up to 12 months
      </p>

      <h2 className={h2}>4. Third-Party Cookies</h2>
      <p>
        In addition to our own cookies, we may also use various third-party cookies to report usage
        statistics of the website and deliver advertisements on and through the website. These third
        parties may include:
      </p>
      <ul className={ul}>
        <li>Analytics providers (e.g., Google Analytics) to help us understand website usage</li>
        <li>Social media platforms for content sharing functionality</li>
        <li>Advertising networks to deliver relevant advertisements</li>
      </ul>

      <h2 className={h2}>5. How to Control Cookies</h2>

      <h3 className={h3}>5.1 Browser Settings</h3>
      <p>
        Most web browsers allow you to control cookies through their settings preferences. You can
        set your browser to refuse cookies or delete certain cookies. However, if you choose to
        block or delete cookies, some features of our website may not function properly.
      </p>
      <p>Instructions for managing cookies in popular browsers:</p>
      <ul className={ul}>
        <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
        <li>Firefox: Options → Privacy &amp; Security → Cookies and Site Data</li>
        <li>Safari: Preferences → Privacy → Cookies and website data</li>
        <li>Edge: Settings → Privacy, search, and services → Cookies and site permissions</li>
      </ul>

      <h3 className={h3}>5.2 Cookie Consent</h3>
      <p>
        When you first visit our website, you may be presented with a cookie consent banner. You can
        choose to accept or reject non-essential cookies. Your preferences will be remembered for
        future visits.
      </p>

      <h3 className={h3}>5.3 Opt-Out Links</h3>
      <p>For third-party cookies, you can opt-out through the following:</p>
      <ul className={ul}>
        <li>
          Google Analytics:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className={legalLink}
          >
            Google Analytics Opt-out
          </a>
        </li>
        <li>
          Network Advertising Initiative:{" "}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={legalLink}
          >
            NAI Opt-out
          </a>
        </li>
      </ul>

      <h2 className={h2}>6. Do Not Track Signals</h2>
      <p>
        Some browsers incorporate a &quot;Do Not Track&quot; (DNT) feature that signals to websites you
        visit that you do not want to have your online activity tracked. Currently, there is no
        standard for how DNT signals should be interpreted. As a result, our website does not
        currently respond to DNT browser signals or mechanisms.
      </p>

      <h2 className={h2}>7. Updates to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or
        for other operational, legal, or regulatory reasons. We will notify you of any material
        changes by posting the updated Cookie Policy on this page and updating the &quot;Last updated&quot;
        date. We encourage you to review this Cookie Policy periodically.
      </p>

      <h2 className={h2}>8. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies or this Cookie Policy, please contact
        us:
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
