import { getServiceMetadata, ServiceRoute } from "@/lib/service-page";

export const metadata = getServiceMetadata("workflow-automation");

export default function Page() {
  return <ServiceRoute slug="workflow-automation" />;
}
