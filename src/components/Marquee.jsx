const items = [
  "Minimal Interfaces",
  "Thoughtful Details",
  "Design Then Code",
  "Soft Motion",
  "Built with React",
  "Creative Systems",
  "Minimal by Choice",
  "Open Source Learning",
  "Pixel-Level Obsession",
  "Cats & Coffee",
  "Slowly Refined",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className=" py-6 font-cormorant flex w-max animate-marquee gap-12 bg-mainBg text-primaryText/80 text-xl">
        
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-12">
            {item}
            <span className="text-primaryText/90">✦</span>
          </span>
        ))}

      </div>
    </div>
  );
}