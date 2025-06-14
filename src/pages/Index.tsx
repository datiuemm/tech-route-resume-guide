
import { useState } from "react";
import { RoadSignNav } from "@/components/RoadSignNav";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("contact");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "contact":
        return <ContactSection />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "certifications":
        return <CertificationsSection />;
      default:
        return <ContactSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-sm rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-yellow-400 rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-400 rounded-full opacity-50"></div>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 H 100 M 50 0 V 100" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
              <circle cx="25" cy="25" r="2" fill="rgba(34, 197, 94, 0.2)"/>
              <circle cx="75" cy="75" r="2" fill="rgba(239, 68, 68, 0.2)"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Đinh Trọng Đạt
          </h1>
          <p className="text-xl text-blue-200">Automation Engineer & Technology Specialist</p>
        </header>

        {/* Main Layout with RoadSign Left and Career Objective Right */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Road Sign Navigation - Left */}
          <div className="lg:w-1/3">
            <RoadSignNav activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          {/* Career Objective - Right */}
          <div className="lg:w-2/3">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-3xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-blue-300">Mục Tiêu Nghề Nghiệp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-200">
                  Là sinh viên năm 4 ngành Kỹ thuật Điều khiển và Tự động hoá. Với có đam mê trong lĩnh vực tự động hoá cùng với sự ham học hỏi em rất mong muốn được làm việc với những người có kinh nghiệm. Với những năm học qua trong nhà trường, em có hiểu biết nhất định về các lĩnh vực tự động hoá như PLC, MCU, AI, Bán dẫn. Em có có ngoại ngữ: Tiếng Nhật, tiếng Anh, tiếng Trung. Trong đó có khả năng đọc hiểu tài liệu bằng tiếng anh. Cũng đã từng tham gia viết báo khoa học. Em rất mong tìm được một vị trí phù hợp với mình.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-16 animate-fade-in">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default Index;
