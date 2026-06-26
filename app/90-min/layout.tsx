import ChatbotWidget from '@/components/ChatbotWidget';

export default function NinetyMinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ChatbotWidget />
    </>
  );
}
