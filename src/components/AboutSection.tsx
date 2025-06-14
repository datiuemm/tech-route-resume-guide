
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="bg-white/10 backdrop-blur-md border-blue-300/30 text-white">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-blue-300">Mục Tiêu Nghề Nghiệp</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-gray-200">
            Là sinh viên năm 4 ngành Kỹ thuật Điều khiển và Tự động hoá. Với có đam mê trong lĩnh vực tự động hoá cùng với sự ham học hỏi em rất mong muốn được làm việc với những người có kinh nghiệm. Với những năm học qua trong nhà trường, em có hiểu biết nhất định về các lĩnh vực tự động hoá như PLC, MCU, AI, Bán dẫn. Em có có ngoại ngữ: Tiếng Nhật, tiếng Anh, tiếng Trung. Trong đó có khả năng đọc hiểu tài liệu bằng tiếng anh. Cũng đã từng tham gia viết báo khoa học. Em rất mong tìm được một vị trí phù hợp với mình.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-green-300/30 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-green-300">Học Vấn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">Trường Đại học Điện Lực</h3>
                <p className="text-blue-200">2021 - Nay</p>
                <p className="text-gray-300">Ngành Công nghệ kỹ thuật điều khiển và tự động hoá</p>
                <p className="text-sm text-gray-400">
                  Học bổng khuyến khích học tập kì 6/9 - Loại khá - GPA 2.8<br/>
                  Học bổng khuyến khích học tập kì 7/9 - Loại xuất sắc - GPA 3.71
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-purple-300/30 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300">Kinh Nghiệm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">Viện Công nghệ thông tin - Đại học Quốc Gia Hà Nội (ITI - VNU)</h3>
                <p className="text-blue-200">05/2025 - Nay</p>
                <p className="text-gray-300">Thành viên trong dự án tapeout chip</p>
                <p className="text-sm text-gray-400">Team leader thiết kế khối DLDO</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border-orange-300/30 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-orange-300">Ngôn Ngữ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-bold">Tiếng Nhật</h4>
              <p className="text-sm text-gray-300">Tương đương N3</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold">Tiếng Anh</h4>
              <p className="text-sm text-gray-300">Tương đương 700 TOEIC</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold">Tiếng Trung</h4>
              <p className="text-sm text-gray-300">Đã hoàn thành chương trình học dành cho HSK 2</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
