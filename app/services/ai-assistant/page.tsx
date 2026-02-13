import { getServiceMetadata, ServiceRoute } from "@/lib/service-page";

export const metadata = getServiceMetadata("ai-assistant");

export default function Page() {
  return <ServiceRoute slug="ai-assistant" />;
}
