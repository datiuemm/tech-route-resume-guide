
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Số điện thoại",
      value: "0362003951",
      href: "tel:0362003951"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "dinhtrongdat31@gmail.com",
      href: "mailto:dinhtrongdat31@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/datiuemm",
      href: "https://github.com/datiuemm"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "Portfolio Website",
      value: "https://datiuemm.github.io",
      href: "https://datiuemm.github.io"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Địa chỉ",
      value: "Quận Nam Từ Liêm, Hà Nội",
      href: null
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Liên Hệ Với Tôi</h2>
      
      <Card className="bg-white/10 backdrop-blur-md border-blue-300/30 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-blue-300">Thông Tin Liên Hệ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-blue-400">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">{contact.label}</p>
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-green-300/30 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-300">Thông Tin Thêm</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg text-gray-200">
            Một số dự án được upload tại GitHub.
          </p>
          <p className="text-lg text-gray-200">
            Đang hoàn thiện tiếng Nhật N2.
          </p>
          <p className="text-lg text-gray-200">
            Truy cập website "https://datiuemm.github.io" để biết thêm thông tin.
          </p>
          <div className="pt-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://datiuemm.github.io" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Xem Portfolio Website
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
