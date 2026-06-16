import LandingPage from "@/components/LandingPage";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return <LandingPage config={siteConfig} />;
}
