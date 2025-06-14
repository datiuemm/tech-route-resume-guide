
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "JLPT N5",
      year: "2024",
      organization: "Japan Foundation",
      type: "Language Certification",
      status: "Completed",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "JLPT N4", 
      year: "2025",
      organization: "Japan Foundation",
      type: "Language Certification",
      status: "Completed",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "TOEIC test tại Viettel High Tech - 715/990",
      year: "2025",
      organization: "Viettel High Tech",
      type: "Language Certification",
      status: "Completed",
      score: "715/990",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "Khoá Thiết kế vi mạch mật độ cao do ITI và NIC tổ chức",
      year: "2025",
      organization: "ITI & NIC",
      type: "Technical Course",
      status: "Completed",
      imageUrl: "/placeholder.svg"
    }
  ];

  const activities = [
    {
      name: "CLB Kỹ Năng EPU - ESC",
      period: "2022 - 2023",
      role: "Thành viên ban sự kiện",
      description: "Tham gia các hoạt động đội nhóm, hoạt động thiện nguyện",
      imageUrl: "/placeholder.svg"
    },
    {
      name: "Viết báo khoa học",
      period: "2025 - Nay",
      role: "Freelancer",
      description: "So sánh các phương pháp điều khiển nhiệt độ lò nhiệt: PID, mạng nơ-ron, Logic Mờ, Fuzzy-PID sử dụng Matlab/Simulink (đang hiểu chính)",
      imageUrl: "/placeholder.svg"
    }
  ];

  const interests = [
    "Đánh billiard", "Cầu lông", "Hiến máu", "Du lịch"
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Chứng Chỉ & Hoạt Động</h2>
      
      {/* Certifications */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-300">Chứng Chỉ</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-yellow-300/30 text-white hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-yellow-300">{cert.name}</CardTitle>
                    <p className="text-sm text-gray-400">{cert.organization} - {cert.year}</p>
                  </div>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Certificate Image</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Type: {cert.type}</span>
                  {cert.score && <span className="text-sm text-green-300">Score: {cert.score}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Hoạt Động</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-purple-300/30 text-white">
              <CardHeader>
                <CardTitle className="text-lg text-purple-300">{activity.name}</CardTitle>
                <p className="text-sm text-gray-400">{activity.period}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Activity Image</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-orange-300">Vai trò: {activity.role}</p>
                  <p className="text-sm text-gray-300 mt-2">{activity.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interests */}
      <Card className="bg-white/10 backdrop-blur-md border-green-300/30 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-green-300">Sở Thích</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <Badge key={index} variant="outline" className="border-green-400 text-green-400 text-sm py-1 px-3">
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
