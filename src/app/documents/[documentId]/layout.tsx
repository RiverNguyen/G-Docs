import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

interface DocumentIdLayoutProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

export async function generateMetadata({ params }: DocumentIdLayoutProps) {
  const { documentId } = await params;

  const document = await convex.query(api.documents.getById, {
    id: documentId,
  });

  if (!document) {
    throw new Error("Document not found");
  }

  return {
    title: document.title || "Untitled Document",
  };
}

const DocumentIdLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default DocumentIdLayout;
