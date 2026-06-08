import Image from "next/image";

export default function BrandBar() {
  return (
    <div className="w-full section-gradient border-b border-[rgba(255,255,255,0.06)]">
      <div className="px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <Image
          src="/images/estate-labs-logo.png"
          alt="Estate Labs"
          width={180}
          height={48}
          className="h-6 sm:h-8 w-auto max-w-[150px] sm:max-w-none"
          priority
        />
      </div>
    </div>
  );
}
