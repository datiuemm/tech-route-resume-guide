
import { cn } from "@/lib/utils";

interface RoadSignNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const RoadSignNav = ({ activeSection, setActiveSection }: RoadSignNavProps) => {
  const sections = [
    { id: "contact", label: "Liên Hệ", icon: "📧" },
    { id: "about", label: "Giới Thiệu", icon: "👨‍💻" },
    { id: "projects", label: "Dự Án", icon: "🚀" },
    { id: "skills", label: "Kỹ Năng", icon: "⚡" },
    { id: "certifications", label: "Chứng Chỉ", icon: "🏆" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        {/* Main Pole with liquid glass effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-96 bg-gradient-to-b from-white/20 to-gray-300/40 backdrop-blur-xl rounded-full shadow-2xl z-0 border border-white/20"></div>
        
        {/* Road Signs */}
        <div className="relative z-10 space-y-6 py-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={cn(
                "relative transform transition-all duration-500 hover:scale-105 cursor-pointer",
                index % 2 === 0 ? "-translate-x-12" : "translate-x-12"
              )}
              onClick={() => setActiveSection(section.id)}
            >
              <div
                className={cn(
                  "relative backdrop-blur-xl shadow-2xl rounded-3xl p-6 min-w-52 border transition-all duration-300",
                  activeSection === section.id
                    ? "bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-yellow-300/30 transform scale-110 shadow-yellow-400/20"
                    : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"
                )}
              >
                {/* Arrow pointing with liquid glass effect */}
                <div
                  className={cn(
                    "absolute top-1/2 transform -translate-y-1/2 w-0 h-0 transition-all duration-300",
                    index % 2 === 0
                      ? "right-0 translate-x-full border-l-[24px] border-t-[18px] border-b-[18px] border-t-transparent border-b-transparent"
                      : "left-0 -translate-x-full border-r-[24px] border-t-[18px] border-b-[18px] border-t-transparent border-b-transparent",
                    activeSection === section.id 
                      ? "border-l-yellow-400/60 border-r-yellow-400/60 drop-shadow-lg" 
                      : "border-l-white/40 border-r-white/40"
                  )}
                ></div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-3xl drop-shadow-lg">{section.icon}</span>
                  <span
                    className={cn(
                      "font-bold text-xl transition-all duration-300",
                      activeSection === section.id ? "text-white drop-shadow-lg" : "text-gray-100"
                    )}
                  >
                    {section.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
