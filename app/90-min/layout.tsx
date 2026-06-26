import ChatbotWidget from '@/components/ChatbotWidget';
import GlobalRegisterPopup from '@/components/GlobalRegisterPopup';

export default function NinetyMinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <GlobalRegisterPopup />
      <ChatbotWidget />
    </>
  );
}
