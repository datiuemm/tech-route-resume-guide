
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Kỹ năng cơ bản",
      icon: "🔧",
      skills: [
        { name: "Đọc, tìm kiếm tài liệu bằng tiếng Anh", level: 85 },
        { name: "Đọc hiểu các tài liệu chuyên ngành", level: 80 }
      ]
    },
    {
      title: "VLSI & CMOS",
      icon: "💾",
      skills: [
        { name: "Thiết kế mạch nền VLSI, CMOS", level: 75 },
        { name: "Sử dụng cơ bản xschem, yosys, klayout, OpenROAD", level: 70 },
        { name: "Synthesis sử dụng yosys", level: 65 },
        { name: "Thiết kế và mô phỏng các mạch cơ bản", level: 70 }
      ]
    },
    {
      title: "Lập trình & Ngôn ngữ",
      icon: "💻",
      skills: [
        { name: "C, Assembly, VHDL, Python", level: 80 },
        { name: "XAMPP, Framework Django", level: 70 },
        { name: "Tin học văn phòng (Word, Excel)", level: 85 }
      ]
    },
    {
      title: "FPGA",
      icon: "⚡",
      skills: [
        { name: "Lập trình và mô phỏng FPGA cơ bản", level: 60 }
      ]
    },
    {
      title: "Matlab & Proteus",
      icon: "📊",
      skills: [
        { name: "PID Controller, Fuzzy Logic, FNN trong Matlab", level: 75 },
        { name: "Mô phỏng mạch trên Proteus", level: 80 },
        { name: "MS SQL SERVER cơ bản", level: 65 },
        { name: "Sử dụng SQL", level: 70 }
      ]
    },
    {
      title: "PLC Programming",
      icon: "🏭",
      skills: [
        { name: "GX Work 2, TIA Portal v17, LabVIEW", level: 85 },
        { name: "Các module Vision của LabVIEW", level: 70 },
        { name: "MX OPC - Biết cách truyền thông cơ bản RS232, RS485", level: 75 },
        { name: "HMI Weintek: Thiết kế HMI sử dụng EB8000", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Xử lý ảnh; Gán nhãn; Biết sử dụng một số công cụ như PaddleOCR, Tesseract OCR", level: 75 },
        { name: "Train YOLOv8 trên Google Colab", level: 70 },
        { name: "Làm việc với một số mạng MobileNet, ResNet", level: 60 }
      ]
    },
    {
      title: "Embedded Systems",
      icon: "🔌",
      skills: [
        { name: "Sử dụng, lập trình, đấu nối các VĐKK, VXL như 8051, STM32, Arduino (Atmega328p)", level: 85 },
        { name: "UART, LCD, Cảm biến đo động ACS712, động cơ bước", level: 80 }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Kỹ Năng Chuyên Môn</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-md border-green-300/30 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-green-300 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-700" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
