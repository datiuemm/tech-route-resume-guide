
import { cn } from "@/lib/utils";

interface RoadSignNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const RoadSignNav = ({ activeSection, setActiveSection }: RoadSignNavProps) => {
  const sections = [
    { id: "about", label: "Giới Thiệu", icon: "👨‍💻" },
    { id: "projects", label: "Dự Án", icon: "🚀" },
    { id: "skills", label: "Kỹ Năng", icon: "⚡" },
    { id: "certifications", label: "Chứng Chỉ", icon: "🏆" },
    { id: "contact", label: "Liên Hệ", icon: "📧" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        {/* Main Pole */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-96 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-lg z-0"></div>
        
        {/* Road Signs */}
        <div className="relative z-10 space-y-4 py-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={cn(
                "relative transform transition-all duration-300 hover:scale-105 cursor-pointer",
                index % 2 === 0 ? "-translate-x-8" : "translate-x-8"
              )}
              onClick={() => setActiveSection(section.id)}
            >
              <div
                className={cn(
                  "relative bg-gradient-to-r shadow-2xl rounded-lg p-4 min-w-48 border-4",
                  activeSection === section.id
                    ? "from-yellow-400 to-orange-400 border-yellow-300 transform scale-110"
                    : "from-white to-gray-100 border-gray-300 hover:from-blue-50 hover:to-blue-100"
                )}
              >
                {/* Arrow pointing */}
                <div
                  className={cn(
                    "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
                    index % 2 === 0
                      ? "right-0 translate-x-full border-l-[20px] border-l-current border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent"
                      : "left-0 -translate-x-full border-r-[20px] border-r-current border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent",
                    activeSection === section.id ? "text-orange-400" : "text-gray-100"
                  )}
                ></div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{section.icon}</span>
                  <span
                    className={cn(
                      "font-bold text-lg",
                      activeSection === section.id ? "text-gray-800" : "text-gray-700"
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
