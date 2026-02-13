import { getServiceMetadata, ServiceRoute } from "@/lib/service-page";

export const metadata = getServiceMetadata("website-chatbot");

export default function Page() {
  return <ServiceRoute slug="website-chatbot" />;
}
