import { getServiceMetadata, ServiceRoute } from "@/lib/service-page";

export const metadata = getServiceMetadata("business-intelligence");

export default function Page() {
  return <ServiceRoute slug="business-intelligence" />;
}
