import { getServiceMetadata, ServiceRoute } from "@/lib/service-page";

export const metadata = getServiceMetadata("ai-phone-agent");

export default function Page() {
  return <ServiceRoute slug="ai-phone-agent" />;
}
