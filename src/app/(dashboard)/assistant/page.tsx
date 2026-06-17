import { Suspense } from "react";
import { AIChatProvider } from "@/components/AIChatProvider";
import AIAssistantContent from "@/components/AIAssistantContent";
import PageContainer from "@/components/layout/PageContainer";

export default function AIAssistantPage() {
  return (
    <PageContainer>
      <AIChatProvider>
        <Suspense fallback={<div className="text-sm text-muted">Loading assistant...</div>}>
          <AIAssistantContent />
        </Suspense>
      </AIChatProvider>
    </PageContainer>
  );
}
