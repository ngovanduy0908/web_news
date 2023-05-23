import React from "react";

import Category from "../../components/list/Category";
import RightBar from "../../components/list/RightBar";

import Breadcrumbs from "../../components/Breadcrumb";
import { CgCalendarDates } from "react-icons/cg";
import ShareFaceBook from "../../components/ShareSocial/ShareFaceBook";
import ShareTwitter from "../../components/ShareSocial/Twitter";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const ContentDetail = () => {
  // TODO fetch data ở đây
  return (
    <div className="bg-white pt-6">
      <Breadcrumbs
        title={"Điểm Tin"}
        // sau khi fetch data thì sẽ lấy theo title ở đây
        subtitle={"Tên bài"}
        link={"/news"}
        // link sẽ theo thằng category
      />

      <div className="grid grid-cols-4 gap-3 p-7">
        <div className="px-3 py-4 laptop:col-span-3 desktop:col-span-3 tablet:col-span-4 phone:col-span-4 ">
          <h3 className="font-bold text-lg mb-4">
            TRUNG TÂM NGHIÊN CỨU KHOA HỌC VÀ XÉT NGHIỆM CÔNG NGHỆ CAO HSTC
          </h3>
          <p className="flex items-center gap-2 mb-5 border-t-[1px] border-b-[1px] border-[#ccc] py-2">
            <CgCalendarDates />
            <span className="text-[13px] italic">21/05/2021</span>
          </p>
          <div className="mb-5">
            <img
              src="http://dntpthanhhoa.vn/wp-content/uploads/2021/05/13.jpg"
              alt=""
            />
          </div>
          <div>
            ✨✨✨Công ty Thăng Long Instruments là doanh nghiệp uy tín trong
            nước và quốc tế về thiết bị Khoa học Công nghệ cao Với lịch sử 16
            năm hình thành và phát triển, Thăng Long Instruments được tin tưởng
            lựa chọn là đại diện phân phối chính thức tại Việt Nam bởi các hãng
            thiết bị Khoa học công nghệ cao hàng đầu thế giới: Kính hiển vi Carl
            Zeiss của Đức, Thiết bị phân tích nhiệt TA của hãng Waters – Mỹ,
            Thiết bị y tế Hillrom của Mỹ, Thiết bị Y tế Charmant của Nhật,
            …Thăng Long Instruments tự hào là doanh nghiệp có đội ngũ nhân sự
            giàu kinh nghiệm, được đào tạo bài bản trong nước và quốc tế, làm
            việc chuyên nghiệp với trình độ chuyên môn cao.
            <br />
            ✨✨✨Năng lực về khoa học công nghệ cao, cập nhật liên tục những
            thành tựu khoa học công nghệ tiên tiến nhất trên thế giới cả về
            thiết bị và phương pháp, cùng đội ngũ nhân sự tuyệt vời sẽ mang lại
            những đóng góp giá trị cho sự hình thành và phát triển của Trung tâm
            HSTC ???Năng lực của trung tâm HSTC: Trung tâm HSTC được đầu tư và
            phát triển trở thành Trung tâm Nghiên cứu Khoa học – Xét nghiệm Công
            nghệ cao hiện đại và tiên tiến bậc nhất theo các tiêu chuẩn Quốc tế,
            bao gồm các chuyên khoa: Xét nghiệm sàng lọc sơ sinh, Xét nghiệm
            sàng lọc trước sinh, Xét nghiệm sinh học phân tử ….nhằm hỗ trợ tối
            đa cho quá trình chẩn đoán và điều trị bệnh. Hiện nay, Trung tâm
            HSTC có năng lực thực hiện các xét nghiệm từ đơn giản đến chuyên sâu
            với mục tiêu trở thành trung tâm chẩn đoán và tham chiếu kết quả xét
            nghiệm hàng đầu tại khu vực Bắc Miền Trung. Bằng năng lực hiện tại,
            Trung tâm HSTC là đối tác tin cậy của những bệnh viện và phòng khám
            lớn, đáp ứng nhu cầu chăm sóc sức khỏe toàn diện của nhân dân, góp
            phần thúc đẩy sự phát triển của xã hội. Trung tâm HSTC với chức năng
            và nhiệm vụ chính là thực hiện các xét nghiệm sàng lọc – chẩn đoán
            trước sinh và sơ sinh, giúp điều trị sớm các trường hợp thai dị tật
            bẩm sinh và các trẻ sơ sinh có bệnh lý di truyền nhằm giảm thiểu số
            người tàn tật, thiểu năng trí tuệ để đáp ứng kịp thời nhu cầu ngày
            càng tăng của nhân dân các tỉnh trong khu vực Bắc Miền Trung, với
            mong muốn trẻ sinh ra được khỏe mạnh, không dị tật, góp phần nâng
            cao chất lượng dân số và sức khỏe cộng đồng.
            <br />
            ✨✨✨Trang thiết bị: Trung tâm HSTC được chúng tôi đầu tư trang
            thiết bị hiện đại và đồng bộ đến từ những thương hiệu uy tín hàng
            đầu thế giới. Toàn bộ trang thiết bị được tư vấn, lắp đặt và vận
            hành bởi đội ngũ cán bộ kỹ thuật chuyên môn cao, dày dặn kinh nghiệm
            của Công ty Thăng Long Instruments. Hệ thống thiết bị phục vụ các
            xét nghiệm công nghệ cao thường xuyên được bảo dưỡng bảo trì theo
            đúng quy chuẩn của hãng đưa ra. ???Quy trình xét nghiệm Quy trình
            thực hiện xét nghiệm khép kín và chuyên nghiệp, đảm bảo các tiêu
            chuẩn y tế và quốc tế, đảm bảo kết quả xét nghiệm kịp thời và chính
            xác. Để đảm bảo độ tin cậy và nâng cao chất lượng xét nghiệm trong
            chẩn đoán và chăm sóc sức khỏe của nhân dân, Trung tâm HSTC luôn coi
            trọng công tác quản lý chất lượng phòng thí nghiệm. Toàn bộ quy
            trình và chỉ số xét nghiệm được kiểm định và giảm sát một các nghiêm
            ngặt để đảm bảo tính chính xác tuyệt đối theo quy định của Bộ Y tế
            và Quốc tế.
            <br />
            ✨✨✨Đội ngũ nhân sự: Trung tâm HSTC là nơi hội tụ các chuyên gia
            uy tín hàng đầu cả nước để góp phần thúc đẩy sự phát triển của trung
            tâm. Đội ngũ Y Bác Sỹ và kỹ thuật viên được tuyển chọn từ hàng trăm
            Y Bác Sỹ và kỹ thuật viên đã làm việc và cống hiến nhiều năm tại các
            Bệnh viện của Tổng Công ty CP Hợp Lực. Kinh nghiệm quý báu được tích
            lũy trong nhiều năm cộng với trình độ chuyên môn y tế cao và tâm
            huyết của các Y bác sỹ chính là những giá trị tuyệt vời của Trung
            tâm HSTC, đưa HSTC trở thành đơn vị uy tín hàng đầu cả nước về các
            dịch vụ xét nhiệm công nghệ cao, đặc biệt là các xét nghiệm sàng lọc
            sơ sinh và sàng lọc trước sinh. Bên cạnh đó là đội ngũ các chuyên
            gia về thiết bị công nghệ cao của Thăng Long Instruments. Hàng chục
            kỹ sư hàng đầu cả nước về các thiết bị phòng thí nghiệm, phòng xét
            nghiệm đồng hành với trung tâm HSTC từ khâu tư vấn, lắp đặt, chuyển
            giao công nghệ phương pháp, bảo dưỡng bảo trì và cập nhật những công
            nghệ trong tương lai.
            <br />
            ✨✨✨Liên hệ với chúng tôi: Trung tâm HSTC – 595 Nguyễn Chí Thanh –
            Phường Đông Thọ – TP. Thanh Hóa Đăng trong Điểm tin, Hoạt động, Hợp
            tác, Kênh giao thương, Phương hướng hoạt động, Tin tức
          </div>

          <div className="flex justify-end items-center gap-3 mt-5 border-t-[1px] border-b-[1px] border-[#ccc] py-4">
            Chia sẻ:
            <ShareFaceBook
              url={
                "http://dntpthanhhoa.vn/trung-tam-nghien-cuu-khoa-hoc-va-xet-nghiem-cong-nghe-cao-hstc.html"
              }
              icon={<BsFacebook className="text-[20px] text-blue-500" />}
            />
            <ShareTwitter
              url={
                "http://dntpthanhhoa.vn/trung-tam-nghien-cuu-khoa-hoc-va-xet-nghiem-cong-nghe-cao-hstc.html"
              }
              icon={
                <AiFillTwitterCircle className="text-[23px] text-blue-500" />
              }
            />
          </div>
        </div>
        <div className="phone:hidden laptop:block desktop:block tablet:hidden">
          <Category />
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
