import { getServiceMetadata, ServiceRoute } from "@/lib/service-page";

export const metadata = getServiceMetadata("website-redesign");

export default function Page() {
  return <ServiceRoute slug="website-redesign" />;
}
