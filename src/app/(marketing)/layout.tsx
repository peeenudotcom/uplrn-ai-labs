import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AskTara } from '@/components/chatbot/ask-tara';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 bg-[#0A0F1C]">{children}</main>
      <Footer />
      <AskTara />
      <WhatsAppButton />
    </>
  );
}
