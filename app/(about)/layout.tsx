import Header from "@/components/Header";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header activePage="about" />
      {children}
    </>
  );
}
