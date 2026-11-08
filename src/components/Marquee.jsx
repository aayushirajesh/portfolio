const items = [
  "Thoughtful Details",
  "Built with React",
  "Soft Motion",
  "Desktop Applications",
  "Minimal by Choice",
  "Always Iterating",
  "Cats & Coffee",
  "Interface Design",
  "Creative Systems",
  "Slowly Refined",
  "React & JavaScript",
  "Pixel-Level Details",
  "UI Experiments",
  "Ocean & Cat Enthusiast",
  "Design Meets Code",
  "Open Source Contributions",
  "Motion with Purpose",
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