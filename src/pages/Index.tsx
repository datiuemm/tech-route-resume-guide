
import { useState } from "react";
import { RoadSignNav } from "@/components/RoadSignNav";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "certifications":
        return <CertificationsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
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
            Dinh Trong Dat
          </h1>
          <p className="text-xl text-blue-200">Automation Engineer & Technology Specialist</p>
        </header>

        {/* Road Sign Navigation */}
        <RoadSignNav activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Content Section */}
        <div className="mt-16 animate-fade-in">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
};

export default Index;
