
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Bãi đỗ xe nội bộ thông minh",
      period: "12/2024 - 2/2025",
      description: "Gần nhận dữ liệu, huấn luyện YOLO, đọc biển số xe, gửi lên server, đọc từ server về và so sánh, gửi tín hiệu xuống Arduino",
      role: "Team leader",
      technologies: "Computer Vision, YOLOv8, PaddleOCR, XAMPP, MySQL, Django, Proteus",
      tasks: "Huấn luyện YOLOv8 để nhận diện biển số xe, sử dụng PaddleOCR để đọc biển số xe, lưu vào file JSON và tự động gửi lên Server. Web có chức năng ghi và xoá các biển số xe nội bộ. Nếu biển số xe đã lưu trữ khớp với biển số xe đọc được sẽ gửi tín hiệu về Arduino làm quay động cơ bước",
      githubUrl: "https://github.com/datiuemm",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Phân loại cá chua sử dụng xử lý ảnh",
      period: "Chưa hoàn thành",
      description: "Phân loại cá chua (đã chín, còn xanh, dư cần nâng hay thiếu)",
      role: "Team leader",
      technologies: "GX Work 2, MX OPC, LabVIEW, EB8000, Mitsubishi FX-3U, HMI Weintek",
      tasks: "Thiết kế chương trình cho PLC, HMI kết nối PLC với LabVIEW, xử lý ảnh trên các module Vision, đầu nối PLC, HMI",
      githubUrl: "https://github.com/datiuemm",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Thiết kế, mô phỏng thang máy 20 tầng sử dụng PLC Siemens S7-1200",
      period: "Chưa hoàn thành",
      description: "Thang máy 20 tầng sử dụng PLC, có ưu tiên",
      role: "Team leader",
      technologies: "WinCC, TIA PORTAL",
      tasks: "Thiết kế chương trình điều khiển và giao diện WinCC",
      githubUrl: "https://github.com/datiuemm",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Thiết kế, mô phỏng bồn nước; đếm tảo sử dụng PLC Siemens S7-1200",
      period: "Chưa hoàn thành",
      description: "Mô phỏng đếm tảo và bổ vào thùng; bồn nước",
      role: "Team leader",
      technologies: "WinCC, TIA PORTAL",
      tasks: "Thiết kế toàn bộ chương trình và giao diện WinCC",
      githubUrl: "https://github.com/datiuemm",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Thiết kế chương báo giờ học sử dụng Arduino",
      period: "Chưa hoàn thành",
      description: "Chương báo giờ học sử dụng Arduino, DS3231, Relay 1 kênh, LCD",
      role: "Team leader",
      technologies: "Proteus, UART",
      tasks: "Mô phỏng Proteus, code, nối mạch thật, UART",
      githubUrl: "https://github.com/datiuemm",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Dự Án Của Tôi</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-md border-blue-300/30 text-white hover:transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl text-blue-300 mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-gray-400">{project.period}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-300 mb-1">Mô tả dự án:</h4>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-300 mb-1">Vị trí:</h4>
                <p className="text-sm text-gray-300">{project.role}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-300 mb-1">Công nghệ sử dụng:</h4>
                <p className="text-sm text-gray-300">{project.technologies}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-300 mb-1">Nhiệm vụ trong dự án:</h4>
                <p className="text-sm text-gray-300">{project.tasks}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
