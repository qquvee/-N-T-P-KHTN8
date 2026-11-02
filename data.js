const LESSON_30 = {
  id: 30,
  chapter: 7,
  title: "Khái quát về cơ thể người",
  keywords: ["Cấu tạo cơ thể", "Các hệ cơ quan", "Phối hợp hoạt động", "Mô và tế bào"],
  theory: "<h3>1. Cấu tạo cơ thể người</h3><p>Cơ thể người gồm 3 phần chính: <b>Đầu, thân và các chi</b> (tay, chân). Toàn bộ cơ thể được bao bọc bởi da.</p><p>Khoang cơ thể được ngăn cách bởi <b>cơ hoành</b> thành hai khoang chính: <b>Khoang ngực</b> (tim, phổi, khí quản, thực quản,...) và <b>Khoang bụng</b> (dạ dày, ruột, gan, tụy, thận, bóng đái, cơ quan sinh dục,...).</p><h3>2. Các hệ cơ quan trong cơ thể</h3><p>Gồm hệ vận động, tiêu hóa, tuần hoàn, hô hấp, bài tiết, thần kinh, nội tiết, sinh dục,...</p><div class='theory-highlight'>Hệ thần kinh và hệ nội tiết phối hợp điều khiển, thống nhất mọi hoạt động sống của cơ thể.</div>",
  part1: [
    { q: "Cơ thể người được chia làm mấy phần chính?", opts: ["2 phần", "3 phần (đầu, thân, các chi)", "4 phần", "5 phần"], a: 1, exp: "Cơ thể người gồm 3 phần: đầu, thân và các chi (tay, chân)." },
    { q: "Khoang ngực và khoang bụng ngăn cách nhau bởi cơ quan nào?", opts: ["Cơ liên sườn", "Cơ lưng", "Cơ hoành", "Cơ bụng"], a: 2, exp: "Cơ hoành là vách ngăn phân chia lồng ngực và khoang bụng." },
    { q: "Cơ quan nào sau đây nằm trong khoang ngực?", opts: ["Dạ dày", "Gan", "Tim và phổi", "Thận"], a: 2, exp: "Tim và phổi nằm trong khoang ngực." },
    { q: "Cơ quan nào sau đây nằm trong khoang bụng?", opts: ["Phổi", "Khí quản", "Dạ dày và gan", "Thanh quản"], a: 2, exp: "Dạ dày, gan, ruột, thận,... nằm ở khoang bụng." },
    { q: "Hệ cơ quan nào điều khiển và phối hợp hoạt động của các hệ cơ quan khác?", opts: ["Hệ thần kinh và hệ nội tiết", "Hệ tuần hoàn và hô hấp", "Hệ tiêu hóa và bài tiết", "Hệ vận động"], a: 0, exp: "Hệ thần kinh và nội tiết giữ vai trò điều khiển, điều hòa mọi hoạt động." },
    { q: "Đơn vị cấu trúc và chức năng cơ bản của cơ thể người là:", opts: ["Mô", "Cơ quan", "Tế bào", "Hệ cơ quan"], a: 2, exp: "Tế bào là đơn vị cấu trúc và chức năng nhỏ nhất của cơ thể sống." },
    { q: "Tập hợp các tế bào chuyên hóa có cấu tạo giống nhau, cùng thực hiện một chức năng gọi là:", opts: ["Cơ quan", "Mô", "Hệ cơ quan", "Cơ thể"], a: 1, exp: "Định nghĩa mô trong sinh học." },
    { q: "Hệ cơ quan nào có chức năng vận chuyển chất dinh dưỡng và khí oxy đến các tế bào?", opts: ["Hệ hô hấp", "Hệ tiêu hóa", "Hệ tuần hoàn", "Hệ bài tiết"], a: 2, exp: "Máu thuộc hệ tuần hoàn vận chuyển dưỡng chất và dưỡng khí." },
    { q: "Hệ cơ quan nào giúp cơ thể lấy O2 và thải CO2?", opts: ["Hệ hô hấp", "Hệ tiêu hóa", "Hệ tuần hoàn", "Hệ bài tiết"], a: 0, exp: "Hệ hô hấp thực hiện thông khí và trao đổi khí." },
    { q: "Hệ cơ quan nào có chức năng lọc chất thải hòa tan trong máu để thải ra ngoài?", opts: ["Hệ tiêu hóa", "Hệ bài tiết", "Hệ tuần hoàn", "Hệ sinh dục"], a: 1, exp: "Hệ bài tiết (chủ yếu là thận) lọc máu thải nước tiểu." },
    { q: "Hiện tượng nào chứng minh các hệ cơ quan có sự phối hợp nhịp nhàng khi chạy nhanh?", opts: ["Tim đập nhanh hơn, thở gấp hơn", "Dạ dày tiết nhiều axit hơn", "Thận bài tiết ít nước hơn", "Tất cả đều sai"], a: 0, exp: "Khi vận động mạnh, tim và phổi đều tăng cường hoạt động để cấp O2 cho cơ." },
    { q: "Cơ quan nào sau đây đóng vai trò bao bọc, bảo vệ toàn bộ bề mặt cơ thể?", opts: ["Màng bụng", "Màng phổi", "Da", "Lớp mỡ"], a: 2, exp: "Da bao bọc toàn bộ cơ thể người." }
  ],
  part2: [
    {
      statement: "Khi xét về các khoang trong cơ thể người và các cơ quan bên trong:",
      sub: [
        { text: "Cơ hoành là ranh giới ngăn cách giữa khoang sọ và khoang ngực.", a: false },
        { text: "Khoang ngực chứa tim và hai lá phổi được bảo vệ bởi lồng ngực.", a: true },
        { text: "Toàn bộ hệ tiêu hóa từ miệng đến hậu môn đều nằm gọn trong khoang bụng.", a: false },
        { text: "Thận và bàng quang là hai cơ quan bài tiết nằm ở khoang bụng.", a: true }
      ],
      exp: "Ý a sai vì cơ hoành ngăn cách ngực và bụng; Ý c sai vì miệng và thực quản không nằm trong khoang bụng."
    },
    {
      statement: "Về vai trò phối hợp hoạt động của các hệ cơ quan trong cơ thể:",
      sub: [
        { text: "Khi ta vận động chạy nhanh, cơ thể chỉ cần hệ vận động hoạt động mà không cần các hệ khác.", a: false },
        { text: "Hệ tuần hoàn vận chuyển O2 từ phổi và chất dinh dưỡng từ ruột non đến cơ quan vận động.", a: true },
        { text: "Hệ hô hấp tăng nhịp thở giúp đào thải nhanh khí CO2 tích tụ trong máu.", a: true },
        { text: "Tuyến mồ hôi trên da tiết mồ hôi giúp cơ thể tăng nhiệt độ khi chạy.", a: false }
      ],
      exp: "Ý a sai vì cơ thể là thể thống nhất; Ý d sai vì tiết mồ hôi là để tỏa nhiệt, hạ nhiệt độ."
    },
    {
      statement: "Về các cấp độ tổ chức cấu tạo trong cơ thể người:",
      sub: [
        { text: "Tế bào là cấp độ tổ chức nhỏ nhất có đầy đủ đặc tính của sự sống.", a: true },
        { text: "Mô liên kết gồm các tế bào xếp xít nhau, không có chất nền ngoại bào.", a: false },
        { text: "Cơ quan được tạo thành từ nhiều loại mô khác nhau cùng phối hợp chức năng.", a: true },
        { text: "Hệ cơ quan là tập hợp các cơ quan cùng thực hiện một chức năng nhất định.", a: true }
      ],
      exp: "Ý b sai vì mô liên kết có nhiều chất nền ngoại bào (ngược lại mô biểu bì mới xếp sít nhau)."
    },
    {
      statement: "Về cơ chế điều hòa hoạt động của cơ thể:",
      sub: [
        { text: "Hệ thần kinh điều hòa hoạt động các cơ quan bằng các xung thần kinh nhanh và tức thì.", a: true },
        { text: "Hệ nội tiết điều hòa hoạt động bằng các hormone truyền qua dòng máu tác động chậm nhưng kéo dài.", a: true },
        { text: "Hệ nội tiết hoạt động hoàn toàn độc lập, không chịu sự điều khiển của hệ thần kinh.", a: false },
        { text: "Sự phối hợp giữa thần kinh và thể dịch giúp cơ thể thích nghi với thay đổi môi trường.", a: true }
      ],
      exp: "Ý c sai vì tuyến yên của hệ nội tiết chịu sự chỉ đạo trực tiếp của vùng dưới đồi thuộc hệ thần kinh."
    }
  ],
  part3: [
    { q: "Cơ ngăn cách giữa khoang ngực và khoang bụng có tên gọi là gì?", a: "Cơ hoành", accept: ["co hoanh", "hoành"], exp: "Cơ hoành là cơ dẹt ngăn giữa ngực và bụng." },
    { q: "Cơ thể người được chia thành mấy phần chính?", a: "3", accept: ["3 phần", "ba"], exp: "Gồm 3 phần: đầu, thân và các chi." },
    { q: "Đơn vị cấu trúc và chức năng cơ bản nhất của cơ thể sinh vật là gì?", a: "Tế bào", accept: ["te bao"], exp: "Mọi hoạt động sống của cơ thể đều diễn ra tại tế bào." },
    { q: "Hai hệ cơ quan nào đóng vai trò chỉ huy và điều hòa hoạt động của toàn bộ cơ thể?", a: "Hệ thần kinh và hệ nội tiết", accept: ["thần kinh và nội tiết", "he than kinh va noi tiet", "thần kinh, nội tiết"], exp: "Cơ chế thần kinh - thể dịch điều khiển mọi hoạt động." }
  ]
};


const LESSON_31 = {
  id: 31,
  chapter: 7,
  title: "Hệ vận động ở người",
  keywords: ["Bộ xương", "Hệ cơ", "Khớp xương", "Cong vẹo cột sống"],
  theory: "<h3>1. Cấu tạo hệ vận động</h3><p>Hệ vận động gồm <b>bộ xương</b> làm khung nâng đỡ, bảo vệ nội quan và <b>hệ cơ</b> có khả năng co giãn tạo cử động.</p><h3>2. Các loại khớp xương</h3><ul><li><b>Khớp động:</b> Cử động linh hoạt (khớp gối, khớp vai, khớp khuỷu tay).</li><li><b>Khớp bán động:</b> Cử động hạn chế (khớp các đốt sống).</li><li><b>Khớp bất động:</b> Cố định bảo vệ (khớp hộp sọ).</li></ul><h3>3. Bảo vệ hệ vận động</h3><p>Tập luyện thể thao, ngồi học đúng tư thế tránh cong vẹo cột sống, bổ sung canxi và vitamin D.</p>",
  part1: [
    { q: "Hệ vận động ở người bao gồm hai phần chính là:", opts: ["Bộ xương và hệ cơ", "Xương và mạch máu", "Cơ và dây chằng", "Xương và tủy sống"], a: 0, exp: "Bộ xương và hệ cơ tạo nên hệ vận động." },
    { q: "Chức năng nào sau đây KHÔNG phải của bộ xương?", opts: ["Tạo khung nâng đỡ cơ thể", "Bảo vệ các nội quan", "Co rút tạo lực kéo", "Là nơi bám của các cơ"], a: 2, exp: "Co rút tạo lực kéo là chức năng của hệ cơ." },
    { q: "Khớp khuỷu tay, khớp gối thuộc loại khớp nào?", opts: ["Khớp động", "Khớp bán động", "Khớp bất động", "Khớp sụn"], a: 0, exp: "Có bao hoạt dịch và cử động linh hoạt." },
    { q: "Khớp giữa các xương hộp sọ thuộc loại khớp nào?", opts: ["Khớp động", "Khớp bán động", "Khớp bất động", "Khớp màng"], a: 2, exp: "Các xương khớp răng cưa cố định bảo vệ não." },
    { q: "Khớp giữa các đốt sống là ví dụ của loại khớp nào?", opts: ["Khớp động", "Khớp bán động", "Khớp bất động", "Khớp lồi cầu"], a: 1, exp: "Khớp bán động có đĩa sụn giúp cử động hạn chế uốn cong." },
    { q: "Thành phần hóa học chính tạo nên tính mềm dẻo của xương là:", opts: ["Chất hữu cơ (cốt giao)", "Chất khoáng canxi", "Phốt pho", "Nước"], a: 0, exp: "Chất hữu cơ (protein cốt giao) giúp xương đàn hồi, dẻo dai." },
    { q: "Thành phần hóa học giúp xương có độ cứng rắn và chịu lực là:", opts: ["Chất hữu cơ", "Muối khoáng canxi và phốt pho", "Lipid", "Vitamin D"], a: 1, exp: "Khoáng chất canxi photphat tạo độ cứng chắc." },
    { q: "Hiện tượng mỏi cơ khi vận động quá sức chủ yếu là do:", opts: ["Thiếu nước", "Tích tụ axit lactic do cơ thiếu O2", "Thừa đường glucose", "Cơ bị lạnh"], a: 1, exp: "Hô hấp kị khí sinh ra axit lactic đầu độc gây mỏi cơ." },
    { q: "Ở tuổi già, xương dễ bị gãy và lâu lành vì nguyên nhân gì?", opts: ["Tỉ lệ chất hữu cơ giảm, chất khoáng tăng (xương giòn)", "Tỉ lệ chất hữu cơ tăng cao", "Hệ cơ quá khỏe", "Lượng canxi trong xương quá cao"], a: 0, exp: "Xương người già bị loãng, giòn và giảm cốt giao dẻo." },
    { q: "Cột sống người có hình dạng cong tự nhiên tại mấy vị trí?", opts: ["2 chỗ cong", "3 chỗ cong", "4 chỗ cong hình chữ S", "Không có chỗ cong nào"], a: 2, exp: "Cột sống người cong 4 chỗ chữ S giúp giảm chấn động khi đi đứng thẳng." },
    { q: "Để phòng tránh bệnh còi xương ở trẻ em, cần bổ sung chất nào?", opts: ["Canxi và Vitamin D", "Vitamin C", "Sắt", "Chất đạm"], a: 0, exp: "Vitamin D giúp hấp thu canxi vào xương chống còi xương." },
    { q: "Hành động nào sau đây dễ dẫn đến tật cong vẹo cột sống?", opts: ["Đeo cặp bằng cả hai vai", "Ngồi học cúi gập người hoặc nghiêng một bên", "Tập thể dục đều đặn", "Ngồi thẳng lưng khi đọc sách"], a: 1, exp: "Tư thế ngồi vẹo lệch làm cột sống bị biến dạng cong vẹo." }
  ],
  part2: [
    {
      statement: "Về cấu tạo và chức năng của các loại khớp xương:",
      sub: [
        { text: "Khớp động có bao hoạt dịch chứa dịch khớp giúp giảm ma sát khi cử động.", a: true },
        { text: "Khớp giữa các đốt sống là khớp bất động giúp cố định hoàn toàn thân mình.", a: false },
        { text: "Khớp bất động ở hộp sọ có các đường khớp răng cưa khít nhau.", a: true },
        { text: "Bong gân là hiện tượng tổn thương dây chằng ở khớp xương khi vận động sai tư thế.", a: true }
      ],
      exp: "Ý b sai vì khớp giữa các đốt sống là khớp bán động."
    },
    {
      statement: "Về tính chất và thành phần hóa học của xương:",
      sub: [
        { text: "Nếu đốt một mẩu xương trên ngọn lửa, phần còn lại sẽ giòn và dễ vỡ vụn.", a: true },
        { text: "Nếu ngâm xương vào dung dịch axit clohiđric (HCl), xương sẽ trở nên mềm dẻo uốn cong được.", a: true },
        { text: "Xương trẻ em có tỉ lệ chất khoáng cao hơn nhiều so với xương người già.", a: false },
        { text: "Sự kết hợp giữa chất hữu cơ và muối khoáng giúp xương vừa bền chắc vừa đàn hồi.", a: true }
      ],
      exp: "Ý c sai vì xương trẻ em có tỉ lệ chất hữu cơ cao hơn nên mềm dẻo hơn."
    },
    {
      statement: "Về hoạt động co cơ và hiện tượng mỏi cơ:",
      sub: [
        { text: "Khi cơ co, bắp cơ ngắn lại và phình to ra theo chiều ngang.", a: true },
        { text: "Năng lượng cung cấp cho co cơ lấy trực tiếp từ quá trình oxy hóa các chất dinh dưỡng.", a: true },
        { text: "Lượng axit lactic tích tụ nhiều trong cơ sẽ làm tăng hiệu quả co cơ.", a: false },
        { text: "Xoa bóp bắp cơ và hít thở sâu giúp mau chóng hồi phục khi bị mỏi cơ.", a: true }
      ],
      exp: "Ý c sai vì axit lactic gây mỏi cơ và ức chế khả năng co cơ."
    },
    {
      statement: "Về các biện pháp bảo vệ và vệ sinh hệ vận động:",
      sub: [
        { text: "Tắm nắng vào sáng sớm giúp cơ thể tổng hợp vitamin D kích thích hấp thu canxi.", a: true },
        { text: "Học sinh nên đeo ba lô nặng lệch sang một bên vai để tập cơ một bên khỏe hơn.", a: false },
        { text: "Bàn ghế ngồi học cần có kích thước phù hợp với chiều cao của học sinh.", a: true },
        { text: "Luyện tập thể dục thể thao đều đặn giúp xương phát triển dày và chắc khỏe hơn.", a: true }
      ],
      exp: "Ý b sai vì đeo lệch 1 bên vai gây lệch vai và vẹo cột sống."
    }
  ],
  part3: [
    { q: "Cột sống người trưởng thành có mấy chỗ cong tự nhiên hình chữ S?", a: "4", accept: ["4 chỗ", "bốn"], exp: "Cột sống cong ở cổ, ngực, thắt lưng và cùng cụt." },
    { q: "Chất hữu cơ tạo tính đàn hồi mềm dẻo cho xương có tên gọi là gì?", a: "Cốt giao", accept: ["cot giao", "chất cốt giao"], exp: "Chất cốt giao (protein ossein) tạo tính đàn hồi cho xương." },
    { q: "Chất độc hại sinh ra do cơ thiếu O2 gây mỏi cơ khi vận động nặng là gì?", a: "Axit lactic", accept: ["acid lactic", "axit lactic", "lactic acid"], exp: "Axit lactic tích tụ do hô hấp yếm khí gây mỏi cơ." },
    { q: "Loại khớp nào có bao khớp và dịch nhầy cử động rất linh hoạt?", a: "Khớp động", accept: ["khop dong"], exp: "Khớp động cho phép cử động với biên độ rộng." }
  ]
};


const LESSON_32 = {
  id: 32,
  chapter: 7,
  title: "Dinh dưỡng và tiêu hóa ở người",
  keywords: ["Ống tiêu hóa", "Tuyến tiêu hóa", "Enzyme tiêu hóa", "Hấp thụ dinh dưỡng"],
  theory: "<h3>1. Cấu tạo hệ tiêu hóa</h3><p>Gồm <b>ống tiêu hóa</b> (miệng, hầu, thực quản, dạ dày, ruột non, ruột già, hậu môn) và <b>tuyến tiêu hóa</b> (tuyến nước bọt, tuyến vị, gan, tụy, tuyến ruột).</p><h3>2. Quá trình tiêu hóa và hấp thụ</h3><ul><li>Miệng: Tiêu hóa cơ học và biến đổi tinh bột chín thành mantôzơ nhờ amylase.</li><li>Dạ dày: Biến đổi protein nhờ enzyme pepsin và HCl.</li><li>Ruột non: Tiêu hóa triệt để tất cả dưỡng chất và hấp thụ vào máu, bạch huyết.</li><li>Ruột già: Hấp thụ lại nước và thải bã phân.</li></ul>",
  part1: [
    { q: "Cơ quan nào sau đây KHÔNG thuộc ống tiêu hóa?", opts: ["Thực quản", "Tuyến tụy", "Dạ dày", "Ruột non"], a: 1, exp: "Tụy là tuyến tiêu hóa, không thuộc ống tiêu hóa." },
    { q: "Quá trình tiêu hóa thức ăn diễn ra nhờ sự phối hợp của:", opts: ["Chỉ có ống tiêu hóa", "Ống tiêu hóa và các tuyến tiêu hóa", "Chỉ các enzyme", "Chỉ răng và lưỡi"], a: 1, exp: "Ống tiêu hóa vận chuyển cơ học kết hợp dịch từ các tuyến tiêu hóa." },
    { q: "Ở khoang miệng, chất nào bị biến đổi về mặt hóa học?", opts: ["Protein", "Chất béo (lipid)", "Tinh bột chín", "Khoáng chất"], a: 2, exp: "Enzyme amylase biến đổi tinh bột chín thành đường mantôzơ." },
    { q: "Enzyme tiêu hóa protein chủ yếu trong dịch vị dạ dày là:", opts: ["Amylase", "Pepsin", "Lipase", "Trypsin"], a: 1, exp: "Pepsin hoạt động trong môi trường axit biến đổi chuỗi protein." },
    { q: "Cơ quan nào giữ vai trò tiêu hóa triệt để và hấp thụ hầu hết chất dinh dưỡng?", opts: ["Dạ dày", "Miệng", "Ruột non", "Ruột già"], a: 2, exp: "Ruột non có diện tích hấp thụ rất lớn và đầy đủ enzym tiêu hóa." },
    { q: "Tuyến tiêu hóa lớn nhất trong cơ thể người là:", opts: ["Tuyến nước bọt", "Tuyến tụy", "Gan", "Tuyến vị"], a: 2, exp: "Gan là tuyến tiêu hóa lớn nhất (nặng khoảng 1.5kg)." },
    { q: "Chất nào sau đây được hấp thụ thẳng vào máu mà không cần tiêu hóa hóa học?", opts: ["Protein", "Lipid", "Tinh bột", "Nước và muối khoáng"], a: 3, exp: "Nước, vitamin và khoáng chất được hấp thụ trực tiếp." },
    { q: "Dịch mật do gan tiết ra có vai trò gì quan trọng trong tiêu hóa?", opts: ["Phân giải tinh bột", "Nhũ tương hóa chất béo (lipid)", "Tiêu hóa protein", "Diệt khuẩn trong máu"], a: 1, exp: "Muối mật nhũ tương hóa lipid thành các hạt nhỏ li ti để lipase dễ tác dụng." },
    { q: "Chức năng chính của ruột già là gì?", opts: ["Tiêu hóa tinh bột", "Hấp thụ lại nước và cô đặc tạo bã phân", "Hấp thụ axit amin", "Tiết enzyme pepsin"], a: 1, exp: "Ruột già tái hấp thu nước và đóng khuôn chất bã." },
    { q: "Bệnh đau dạ dày, viêm loét dạ dày thường do vi khuẩn nào gây ra?", opts: ["E. coli", "Helicobacter pylori (HP)", "Trực khuẩn lao", "Phẩy khuẩn tả"], a: 1, exp: "Vi khuẩn HP gây viêm loét dạ dày - tá tràng phổ biến." },
    { q: "Biện pháp nào sau đây giúp hệ tiêu hóa hoạt động khỏe mạnh?", opts: ["Ăn quá nhanh, nhai dối", "Ăn chậm nhai kỹ, ăn đúng giờ", "Vừa ăn vừa xem điện thoại", "Vận động mạnh ngay sau khi ăn"], a: 1, exp: "Ăn chậm nhai kĩ giúp thức ăn ngấm đều men tiêu hóa và giảm tải cho dạ dày." },
    { q: "Dưỡng chất lipid sau khi tiêu hóa ở ruột non được hấp thụ theo con đường nào chủ yếu?", opts: ["Đường máu hoàn toàn", "Đường bạch huyết (khoảng 70%)", "Thải trực tiếp ra phân", "Qua đường hô hấp"], a: 1, exp: "Axit béo và glyxerin tái tổng hợp đi theo hệ bạch huyết về tuần hoàn chung." }
  ],
  part2: [
    {
      statement: "Về quá trình tiêu hóa thức ăn ở khoang miệng và dạ dày:",
      sub: [
        { text: "Ở khoang miệng, thức ăn chỉ chịu sự biến đổi cơ học mà không có biến đổi hóa học.", a: false },
        { text: "Enzyme amylase trong nước bọt hoạt động tốt nhất ở môi trường kiềm nhẹ hoặc trung tính.", a: true },
        { text: "Dịch vị dạ dày có chứa axit clohiđric (HCl) giúp tiêu diệt vi khuẩn và hoạt hóa pepsin.", a: true },
        { text: "Dạ dày là nơi hấp thụ phần lớn các chất dinh dưỡng của bữa ăn.", a: false }
      ],
      exp: "Ý a sai vì tinh bột chín bị biến đổi hóa học; Ý d sai vì ruột non mới là nơi hấp thụ chủ yếu."
    },
    {
      statement: "Về vai trò của gan và tuyến tụy trong hệ tiêu hóa:",
      sub: [
        { text: "Tuyến tụy tiết ra dịch tụy chứa đầy đủ các enzyme tiêu hóa protein, lipid và carbohydrate.", a: true },
        { text: "Gan sản xuất ra dịch mật và dự trữ tạm thời trong túi mật.", a: true },
        { text: "Trong dịch mật có chứa enzyme phân giải protein thành axit amin.", a: false },
        { text: "Tất cả các chất hấp thụ từ ruột non đều được đưa qua gan để khử độc trước khi vào tim.", a: true }
      ],
      exp: "Ý c sai vì dịch mật không chứa enzyme tiêu hóa mà chỉ có muối mật giúp nhũ tương hóa lipid."
    },
    {
      statement: "Về đặc điểm cấu tạo của ruột non thích nghi với chức năng hấp thụ:",
      sub: [
        { text: "Niêm mạc ruột non có các nếp gấp với vô số lông ruột và lông cực nhỏ làm tăng diện tích tiếp xúc.", a: true },
        { text: "Ruột non của người trưởng thành rất dài (từ 2,8 đến 3m) giúp thức ăn lưu lại đủ lâu.", a: true },
        { text: "Mạng mao mạch máu và mao mạch bạch huyết phân bố dày đặc bên trong mỗi lông ruột.", a: true },
        { text: "Ruột non chỉ vận chuyển các chất bằng hình thức khuếch tán thụ động mà không cần năng lượng.", a: false }
      ],
      exp: "Ý d sai vì ruột non có cơ chế vận chuyển tích cực (chủ động) tiêu tốn năng lượng ATP."
    },
    {
      statement: "Về vệ sinh an toàn thực phẩm và phòng chống bệnh tiêu hóa:",
      sub: [
        { text: "Thức ăn ôi thiu chứa nhiều độc tố nấm mốc và vi khuẩn gây ngộ độc đường ruột.", a: true },
        { text: "Uống rượu bia thường xuyên gây tổn thương tế bào gan và xơ gan.", a: true },
        { text: "Ăn đồ ăn quá mặn, quá chua kích thích dạ dày tiết nhiều axit bảo vệ niêm mạc.", a: false },
        { text: "Rửa tay bằng xà phòng trước khi ăn là biện pháp phòng tránh giun sán hiệu quả.", a: true }
      ],
      exp: "Ý c sai vì ăn quá cay mặn chua phá hủy lớp màng nhầy bảo vệ gây viêm loét dạ dày."
    }
  ],
  part3: [
    { q: "Tuyến tiêu hóa có kích thước và khối lượng lớn nhất trong cơ thể người là gì?", a: "Gan", accept: ["tuyến gan", "la gan"], exp: "Gan là cơ quan nội tạng kiêm tuyến tiêu hóa lớn nhất." },
    { q: "Chất nào được dịch mật nhũ tương hóa tạo điều kiện cho enzyme lipase phân giải?", a: "Lipid", accept: ["chat beo", "chất béo", "lipit"], exp: "Muối mật nhũ tương hóa lipid (chất béo)." },
    { q: "Enzyme chính trong nước bọt giúp biến đổi tinh bột chín là gì?", a: "Amylase", accept: ["amylaza", "men amylase"], exp: "Amylase thủy phân tinh bột thành mantôzơ." },
    { q: "Bộ phận nào của ống tiêu hóa diễn ra sự hấp thụ nước chủ yếu và tạo khuôn bã phân?", a: "Ruột già", accept: ["ruot gia", "đại tràng", "ruột kết"], exp: "Ruột già tái hấp thu phần lớn nước từ dưỡng chất thừa." }
  ]
};

const LESSON_33 = {
  id: 33,
  chapter: 7,
  title: "Máu và hệ tuần hoàn của cơ thể người",
  keywords: ["Huyết tương", "Tế bào máu", "Nhóm máu ABO", "Vòng tuần hoàn"],
  theory: "<h3>1. Thành phần của máu</h3><p>Gồm <b>huyết tương</b> (55%) và <b>tế bào máu</b> (45% gồm hồng cầu, bạch cầu, tiểu cầu).</p><h3>2. Nhóm máu ABO và truyền máu</h3><p>Có 4 nhóm máu: A, B, AB, O. Nguyên tắc: Không để kháng thể trong huyết tương người nhận làm ngưng kết hồng cầu người cho.</p><h3>3. Hệ tuần hoàn</h3><p>Gồm tim 4 ngăn và hệ mạch tạo 2 vòng tuần hoàn: Vòng tuần hoàn nhỏ (đến phổi trao đổi khí) và Vòng tuần hoàn lớn (mang máu nuôi toàn cơ thể).</p>",
  part1: [
    { q: "Máu gồm hai thành phần chính nào sau đây?", opts: ["Huyết tương và các tế bào máu", "Hồng cầu và bạch cầu", "Nước và chất khoáng", "Huyết thanh và sợi huyết"], a: 0, exp: "Máu gồm huyết tương (55%) và tế bào máu (45%)." },
    { q: "Loại tế bào máu nào có hình đĩa lõm hai mặt và không có nhân ở người trưởng thành?", opts: ["Bạch cầu", "Hồng cầu", "Tiểu cầu", "Tế bào lympho"], a: 1, exp: "Hồng cầu hình đĩa lõm 2 mặt không nhân giúp tăng diện tích tiếp xúc khí." },
    { q: "Chức năng bảo vệ cơ thể thông qua thực bào và sinh kháng thể là của:", opts: ["Hồng cầu", "Bạch cầu", "Tiểu cầu", "Huyết tương"], a: 1, exp: "Bạch cầu có vai trò miễn dịch bảo vệ cơ thể." },
    { q: "Thành phần tế bào máu nào tham gia trực tiếp vào quá trình đông máu?", opts: ["Hồng cầu", "Bạch cầu", "Tiểu cầu", "Huyết sắc tố"], a: 2, exp: "Tiểu cầu giải phóng enzyme biến chất sinh sợi huyết thành sợi tơ máu tạo cục máu đông." },
    { q: "Người có nhóm máu nào không có kháng nguyên A và B trên màng hồng cầu?", opts: ["Nhóm máu A", "Nhóm máu B", "Nhóm máu AB", "Nhóm máu O"], a: 3, exp: "Nhóm máu O không có kháng nguyên A và B." },
    { q: "Người có nhóm máu nào không có kháng thể alpha và beta trong huyết tương?", opts: ["Nhóm máu A", "Nhóm máu B", "Nhóm máu AB", "Nhóm máu O"], a: 2, exp: "Nhóm máu AB có cả 2 kháng nguyên nhưng không có kháng thể trong huyết tương." },
    { q: "Tim người được chia thành mấy ngăn?", opts: ["2 ngăn", "3 ngăn", "4 ngăn (2 tâm nhĩ, 2 tâm thất)", "5 ngăn"], a: 2, exp: "Tim có 4 ngăn: tâm nhĩ phải, tâm thất phải, tâm nhĩ trái, tâm thất trái." },
    { q: "Ngăn tim nào có thành cơ dày nhất để bơm máu đi nuôi toàn cơ thể?", opts: ["Tâm thất trái", "Tâm thất phải", "Tâm nhĩ trái", "Tâm nhĩ phải"], a: 0, exp: "Tâm thất trái tống máu vào động mạch chủ với áp lực rất lớn." },
    { q: "Vòng tuần hoàn nhỏ có chức năng chủ yếu là gì?", opts: ["Mang dưỡng chất đến tế bào", "Đưa máu lên phổi để lấy O2 và thải CO2", "Đưa máu đến các chi", "Đưa máu qua thận lọc"], a: 1, exp: "Vòng tuần hoàn nhỏ đưa máu đỏ thẫm lên phổi trao đổi khí thành máu đỏ tươi." },
    { q: "Loại mạch máu nào có vận tốc máu chảy chậm nhất tạo điều kiện cho trao đổi chất?", opts: ["Động mạch", "Mao mạch", "Tĩnh mạch", "Động mạch chủ"], a: 1, exp: "Mao mạch có lòng mạch hẹp, máu chảy rất chậm giúp trao đổi chất tối ưu." },
    { q: "Huyết áp là gì?", opts: ["Áp lực của máu tác động lên thành mạch", "Tốc độ đập của tim", "Số lượng tế bào máu", "Nồng độ đường trong máu"], a: 0, exp: "Huyết áp là áp lực của dòng máu tác động lên thành động mạch." },
    { q: "Biện pháp nào sau đây giúp rèn luyện và bảo vệ hệ tim mạch khỏe mạnh?", opts: ["Hút thuốc lá thường xuyên", "Ăn nhiều mỡ động vật và thức ăn mặn", "Tập thể dục thể thao điều độ vừa sức", "Thức khuya và uống nhiều cà phê"], a: 2, exp: "Thể dục thể thao đều đặn giúp cơ tim săn chắc, mạch máu thông thoáng." }
  ],
  part2: [
    {
      statement: "Về các thành phần cấu tạo của máu ở người:",
      sub: [
        { text: "Huyết tương chiếm khoảng 55% thể tích máu, trong đó nước chiếm khoảng 90%.", a: true },
        { text: "Hồng cầu người trưởng thành có nhân to để điều khiển quá trình vận chuyển khí O2.", a: false },
        { text: "Bạch cầu có khả năng tạo chân giả để chui qua thành mao mạch thực bào vi khuẩn.", a: true },
        { text: "Khi thành mạch bị rách, tiểu cầu vỡ ra giải phóng chất giúp hình thành khối máu đông cầm máu.", a: true }
      ],
      exp: "Ý b sai vì hồng cầu người trưởng thành không có nhân."
    },
    {
      statement: "Về nguyên tắc truyền máu và các nhóm máu hệ ABO:",
      sub: [
        { text: "Người có nhóm máu O có thể truyền máu cho người có nhóm máu A, B, AB hoặc O.", a: true },
        { text: "Người có nhóm máu AB được xem là nhóm máu chuyên cho vì có thể cho được mọi nhóm.", a: false },
        { text: "Trước khi truyền máu bắt buộc phải xét nghiệm nhóm máu và kiểm tra mầm bệnh lây truyền.", a: true },
        { text: "Nếu truyền nhầm nhóm máu không hòa hợp, hồng cầu người cho sẽ bị ngưng kết gây tắc mạch tử vong.", a: true }
      ],
      exp: "Ý b sai vì nhóm AB là nhóm chuyên nhận (không thể cho tự do vì có kháng nguyên A và B)."
    },
    {
      statement: "Về cấu tạo và hoạt động của tim và hệ mạch:",
      sub: [
        { text: "Giữa tâm nhĩ và tâm thất có van tim giúp máu chỉ chảy một chiều từ tâm nhĩ xuống tâm thất.", a: true },
        { text: "Máu chảy trong động mạch chủ luôn luôn là máu đỏ thẫm giàu khí CO2.", a: false },
        { text: "Động mạch có thành dày, nhiều sợi đàn hồi chịu được áp lực máu cao khi tim co bóp.", a: true },
        { text: "Tĩnh mạch có van một chiều giúp đưa máu từ các phần dưới cơ thể trở về tim thắng trọng lực.", a: true }
      ],
      exp: "Ý b sai vì máu trong động mạch chủ là máu đỏ tươi giàu O2."
    },
    {
      statement: "Về bệnh tim mạch và cách phòng chống:",
      sub: [
        { text: "Xơ vữa động mạch xảy ra khi cholesterol lắng đọng làm hẹp lòng mạch máu.", a: true },
        { text: "Tăng huyết áp là căn bệnh chỉ gặp ở người già, người trẻ không bao giờ mắc phải.", a: false },
        { text: "Ăn giảm muối và giảm mỡ động vật giúp hạn chế nguy cơ tăng huyết áp.", a: true },
        { text: "Cảm xúc giận dữ, căng thẳng kéo dài có thể làm nhịp tim và huyết áp tăng đột ngột.", a: true }
      ],
      exp: "Ý b sai vì người trẻ tuổi có lối sống lười vận động, béo phì vẫn có thể mắc cao huyết áp."
    }
  ],
  part3: [
    { q: "Chất màu đỏ trong hồng cầu có khả năng kết hợp lỏng lẻo với O2 và CO2 có tên là gì?", a: "Hemoglobin", accept: ["huyet sac to", "huyết sắc tố", "Hb"], exp: "Hemoglobin (huyết sắc tố) vận chuyển oxy tạo màu đỏ của máu." },
    { q: "Ngăn tim nào có nhiệm vụ co bóp đẩy máu đỏ tươi vào động mạch chủ đi nuôi toàn thân?", a: "Tâm thất trái", accept: ["that trai", "tam that trai"], exp: "Tâm thất trái có thành cơ dày nhất để bơm máu nuôi toàn thân." },
    { q: "Nhóm máu nào trong hệ ABO được mệnh danh là nhóm máu 'chuyên cho'?", a: "O", accept: ["nhóm O", "nhom mau O", "nhóm máu O"], exp: "Nhóm O không có kháng nguyên A, B trên màng hồng cầu." },
    { q: "Số ngăn trong tim của người là bao nhiêu?", a: "4", accept: ["4 ngăn", "bốn"], exp: "Tim người gồm 4 ngăn: 2 tâm nhĩ và 2 tâm thất." }
  ]
};

const LESSON_34 = {
  id: 34,
  chapter: 7,
  title: "Hệ hô hấp ở người",
  keywords: ["Đường dẫn khí", "Phổi", "Phế nang", "Trao đổi khí", "Vệ sinh hô hấp"],
  theory: "<h3>1. Cấu tạo hệ hô hấp</h3><p>Gồm <b>đường dẫn khí</b> (mũi, hầu, thanh quản, khí quản, phế quản) và <b>phổi</b> (hai lá phổi chứa hàng trăm triệu phế nang).</p><h3>2. Quá trình trao đổi khí</h3><p>Trao đổi khí ở phổi: O2 khuếch tán từ phế nang vào máu, CO2 từ máu vào phế nang. Trao đổi khí ở tế bào: O2 từ máu vào tế bào, CO2 từ tế bào vào máu.</p><div class='theory-highlight'>Hút thuốc lá làm tổn hại biểu mô phế quản và gây ung thư phổi.</div>",
  part1: [
    { q: "Hệ hô hấp ở người gồm có hai phần chính là:", opts: ["Mũi và miệng", "Đường dẫn khí và hai lá phổi", "Khí quản và phế quản", "Thanh quản và cơ hoành"], a: 1, exp: "Đường dẫn khí và hai lá phổi tạo nên hệ hô hấp." },
    { q: "Cơ quan nào có vai trò phát ra âm thanh và bảo vệ đường thở khi nuốt?", opts: ["Mũi", "Thanh quản", "Khí quản", "Phế nang"], a: 1, exp: "Thanh quản chứa dây thanh âm và nắp thanh quản đóng lại khi nuốt." },
    { q: "Lông mũi và lớp chất nhầy trong khoang mũi có tác dụng gì?", opts: ["Làm ấm không khí", "Làm sạch, lọc bụi và làm ẩm không khí", "Trao đổi khí oxy", "Diệt nấm mốc"], a: 1, exp: "Lọc bụi và làm ẩm bảo vệ phổi." },
    { q: "Cơ quan nào là đơn vị cấu trúc và chức năng trao đổi khí chính ở phổi?", opts: ["Khí quản", "Phế quản", "Phế nang", "Màng phổi"], a: 2, exp: "Phế nang có thành mỏng mao mạch bao quanh là nơi trao đổi khí." },
    { q: "Sự thông khí ở phổi diễn ra nhờ hoạt động của:", opts: ["Cơ liên sườn và cơ hoành", "Cơ tim", "Nhu động ruột", "Cơ quan tiêu hóa"], a: 0, exp: "Cử động hô hấp do cơ hoành và cơ liên sườn đảm nhiệm." },
    { q: "Khi ta hít vào sâu, thể tích lồng ngực thay đổi thế nào?", opts: ["Giảm xuống", "Tăng lên", "Không thay đổi", "Bị ép chặt"], a: 1, exp: "Cơ hoành co hạ xuống, xương sườn nâng lên làm tăng thể tích lồng ngực." },
    { q: "Quá trình trao đổi khí tại phế nang và tế bào diễn ra theo cơ chế:", opts: ["Chủ động tiêu tốn ATP", "Khuếch tán từ nơi phân áp cao đến nơi phân áp thấp", "Thẩm thấu qua kênh protein", "Thực bào"], a: 1, exp: "Khí O2 và CO2 khuếch tán thụ động theo gradien nồng độ." },
    { q: "Khí nào khuếch tán từ máu vào lòng phế nang để thở ra ngoài?", opts: ["Khí O2", "Khí CO2", "Khí N2", "Khí H2"], a: 1, exp: "Khí carbonic (CO2) đào thải từ máu vào phế nang." },
    { q: "Chất độc nào trong khói thuốc lá làm giảm khả năng vận chuyển O2 của hồng cầu?", opts: ["Nicotine", "Cacbon oxit (CO)", "Hắc ín", "Amoniac"], a: 1, exp: "Khí CO gắn chặt với hemoglobin cản trở vận chuyển O2." },
    { q: "Bệnh nào sau đây là bệnh truyền nhiễm nguy hiểm ở đường hô hấp?", opts: ["Bệnh đau dạ dày", "Bệnh lao phổi", "Bệnh còi xương", "Bệnh tiểu đường"], a: 1, exp: "Lao phổi do trực khuẩn lao lây truyền qua giọt bắn đường thở." },
    { q: "Tập thở sâu mỗi ngày mang lại lợi ích gì cho cơ thể?", opts: ["Tăng dung tích sống của phổi", "Giảm nhịp tim đột ngột", "Làm teo phế nang", "Tăng tích tụ CO2"], a: 0, exp: "Thở sâu tăng lượng khí lưu thông và dung tích sống của phổi." },
    { q: "Hành động nào sau đây giúp giữ sạch đường hô hấp?", opts: ["Hút thuốc lá thụ động", "Đeo khẩu trang ở nơi bụi bẩn, trồng nhiều cây xanh", "Quét nhà bụi mù mịt không che mũi", "Khạc nhổ bừa bãi nơi công cộng"], a: 1, exp: "Đeo khẩu trang và trồng cây xanh giúp lọc bụi bảo vệ đường thở." }
  ],
  part2: [
    {
      statement: "Về cấu tạo của đường dẫn khí và chức năng thích nghi:",
      sub: [
        { text: "Niêm mạc khí quản có nhiều tế bào tiết chất nhầy và các lông rung chuyển động liên tục.", a: true },
        { text: "Nắp thanh quản mở ra khi nuốt thức ăn để không khí lọt vào dạ dày.", a: false },
        { text: "Mạng mao mạch dày đặc ở niêm mạc mũi có tác dụng sưởi ấm luồng không khí hít vào.", a: true },
        { text: "Phế quản phân nhánh thành nhiều phế quản nhỏ dẫn khí đến từng phế nang.", a: true }
      ],
      exp: "Ý b sai vì nắp thanh quản phải đậy lại khi nuốt để thức ăn không lọt vào đường thở."
    },
    {
      statement: "Về cơ chế trao đổi khí ở người:",
      sub: [
        { text: "Nồng độ khí O2 trong phế nang luôn cao hơn nồng độ O2 trong máu tĩnh mạch đến phổi.", a: true },
        { text: "Tại tế bào, khí CO2 khuếch tán từ tế bào vào máu vì phân áp CO2 ở tế bào cao hơn trong máu.", a: true },
        { text: "Sự trao đổi khí ở phổi đòi hỏi phải tiêu hao một lượng lớn năng lượng ATP.", a: false },
        { text: "Máu sau khi rời khỏi phổi trở thành máu đỏ tươi giàu khí O2 theo tĩnh mạch phổi về tâm nhĩ trái.", a: true }
      ],
      exp: "Ý c sai vì trao đổi khí diễn ra hoàn toàn thụ động theo cơ chế khuếch tán."
    },
    {
      statement: "Về tác hại của khói thuốc lá và ô nhiễm không khí đối với hệ hô hấp:",
      sub: [
        { text: "Nicotine trong khói thuốc lá làm tê liệt chuyển động của các lông rung trong đường dẫn khí.", a: true },
        { text: "Chất hắc ín trong khói thuốc lá là tác nhân hàng đầu gây ung thư phổi và phế quản.", a: true },
        { text: "Hút thuốc lá thụ động (ngửi khói thuốc từ người khác) hoàn toàn không gây hại cho sức khỏe.", a: false },
        { text: "Bụi mịn PM2.5 có kích thước siêu nhỏ có thể đi sâu vào tận phế nang phổi gây viêm mạn tính.", a: true }
      ],
      exp: "Ý c sai vì hút thuốc thụ động cũng hít phải độc tố và nguy cơ bệnh tương đương."
    },
    {
      statement: "Về các biện pháp bảo vệ và vệ sinh đường hô hấp:",
      sub: [
        { text: "Thở bằng mũi tốt hơn thở bằng miệng vì mũi có khả năng lọc bụi, làm ẩm và làm ấm khí.", a: true },
        { text: "Trồng nhiều cây xanh xung quanh nhà giúp lọc bớt bụi và hấp thu khí CO2 nhả ra O2.", a: true },
        { text: "Nên thường xuyên ngoáy mũi bằng vật nhọn để làm thông thoáng đường thở.", a: false },
        { text: "Rèn luyện thể thao và tập hít thở sâu giúp lồng ngực nở rộng, tăng dung tích sống.", a: true }
      ],
      exp: "Ý c sai vì dùng vật nhọn ngoáy mũi làm rách niêm mạc gây chảy máu và nhiễm trùng."
    }
  ],
  part3: [
    { q: "Cơ quan nào có các túi nhỏ li ti là nơi diễn ra trao đổi khí trực tiếp ở phổi?", a: "Phế nang", accept: ["phe nang", "túi phế nang"], exp: "Phế nang là đơn vị trao đổi khí của phổi." },
    { q: "Khí độc nào trong khói thuốc liên kết chặt với hemoglobin cản trở vận chuyển oxy?", a: "CO", accept: ["cacbon monoxit", "carbon monoxide", "khí CO"], exp: "Khí CO (cacbon monoxit) chiếm vị trí gắn O2 của Hb." },
    { q: "Cơ hô hấp nào ngăn giữa khoang ngực và khoang bụng tham gia vào cử động thở?", a: "Cơ hoành", accept: ["co hoanh"], exp: "Cơ hoành co dãn điều hòa thể tích khoang ngực." },
    { q: "Tổng lượng không khí hít vào tối đa và thở ra tối đa được gọi là gì của phổi?", a: "Dung tích sống", accept: ["dung tich song"], exp: "Dung tích sống phản ánh thể tích khí tối đa phổi có thể trao đổi." }
  ]
};

const LESSON_35 = {
  id: 35,
  chapter: 7,
  title: "Hệ bài tiết ở người",
  keywords: ["Thận", "Nephron", "Cầu thận", "Tạo nước tiểu", "Bảo vệ thận"],
  theory: "<h3>1. Cấu tạo hệ bài tiết nước tiểu</h3><p>Gồm 2 quả thận, 2 ống dẫn nước tiểu, bóng đái và ống đái. Mỗi quả thận có khoảng 1 triệu <b>nephron</b>.</p><h3>2. Quá trình tạo nước tiểu</h3><ul><li>Lọc máu ở cầu thận tạo nước tiểu đầu.</li><li>Hấp thụ lại ở ống thận (giữ nước và chất có ích).</li><li>Bài tiết tiếp ở ống thận (đào thải chất độc, cặn bã) tạo nước tiểu chính thức.</li></ul>",
  part1: [
    { q: "Cơ quan giữ vai trò quan trọng nhất trong hệ bài tiết nước tiểu là:", opts: ["Bóng đái", "Thận", "Ống dẫn nước tiểu", "Ống đái"], a: 1, exp: "Thận lọc máu và tạo ra nước tiểu." },
    { q: "Hệ bài tiết nước tiểu gồm các cơ quan theo thứ tự là:", opts: ["Thận → Bóng đái → Ống dẫn nước tiểu → Ống đái", "Thận → Ống dẫn nước tiểu → Bóng đái → Ống đái", "Bóng đái → Thận → Ống đái → Ống dẫn nước tiểu", "Ống đái → Bóng đái → Ống dẫn nước tiểu → Thận"], a: 1, exp: "Thận tạo nước tiểu → ống dẫn → bóng đái tích trữ → ống đái thải ra ngoài." },
    { q: "Đơn vị chức năng của thận được gọi là gì?", opts: ["Nơron", "Nephron (đơn vị thận)", "Phế nang", "Tế bào gan"], a: 1, exp: "Nephron là đơn vị lọc và tạo nước tiểu của thận." },
    { q: "Một đơn vị chức năng của thận (nephron) gồm có các thành phần nào?", opts: ["Cầu thận, nang cầu thận và ống thận", "Ống dẫn nước tiểu và bóng đái", "Bể thận và tủy thận", "Động mạch thận và tĩnh mạch thận"], a: 0, exp: "Gồm cầu thận (chùm mao mạch), nang Bowman và ống thận." },
    { q: "Quá trình lọc máu tạo nước tiểu đầu diễn ra ở bộ phận nào?", opts: ["Ống thận", "Cầu thận", "Bể thận", "Bóng đái"], a: 1, exp: "Huyết tương lọc qua màng mao mạch cầu thận vào nang cầu thận tạo nước tiểu đầu." },
    { q: "Nước tiểu đầu KHÁC với máu ở chỗ không có thành phần nào?", opts: ["Glucose", "Muối khoáng", "Các tế bào máu và protein kích thước lớn", "Nước"], a: 2, exp: "Tế bào máu và protein lớn không qua được màng lọc cầu thận." },
    { q: "Tại ống thận diễn ra quá trình nào sau đây?", opts: ["Chỉ có quá trình lọc", "Hấp thụ lại và bài tiết tiếp", "Chỉ tạo sỏi", "Chỉ co bóp đẩy nước tiểu"], a: 1, exp: "Ống thận hấp thu lại chất cần thiết và bài tiết tiếp chất độc." },
    { q: "Mỗi ngày ở người trưởng thành, hai quả thận lọc tạo ra khoảng bao nhiêu lít nước tiểu đầu?", opts: ["1 - 2 lít", "170 - 180 lít", "50 lít", "10 lít"], a: 1, exp: "Thận lọc khoảng 170-180 lít nước tiểu đầu mỗi ngày." },
    { q: "Lượng nước tiểu chính thức thải ra môi trường ngoài mỗi ngày ở người trưởng thành khoảng:", opts: ["1.5 - 2 lít", "10 lít", "170 lít", "500 ml"], a: 0, exp: "Sau khi hấp thu lại 99% nước, còn khoảng 1.5 - 2 lít nước tiểu chính thức." },
    { q: "Nơi tích trữ tạm thời nước tiểu chính thức trước khi thải ra ngoài là:", opts: ["Bể thận", "Nang cầu thận", "Bóng đái (bàng quang)", "Ống thận"], a: 2, exp: "Bóng đái là túi cơ co giãn chứa nước tiểu." },
    { q: "Thói quen ăn mặn, uống ít nước và nhịn tiểu lâu dễ dẫn đến bệnh gì?", opts: ["Sỏi thận và sỏi đường tiết niệu", "Bệnh hen suyễn", "Viêm dạ dày", "Bệnh còi xương"], a: 0, exp: "Khoáng chất lắng đọng kết tinh tạo sỏi thận." },
    { q: "Người bị suy thận nặng phải duy trì sự sống bằng biện pháp y học nào?", opts: ["Uống nhiều thuốc kháng sinh", "Chạy thận nhân tạo (lọc máu ngoài) hoặc ghép thận", "Ăn nhiều muối hơn", "Nhịn uống nước"], a: 1, exp: "Chạy thận nhân tạo giúp lọc máu thay thế chức năng thận hỏng." }
  ],
  part2: [
    {
      statement: "Về quá trình tạo thành nước tiểu ở thận:",
      sub: [
        { text: "Quá trình lọc máu ở cầu thận diễn ra thụ động nhờ chênh lệch áp suất lọc.", a: true },
        { text: "Trong nước tiểu chính thức của người khỏe mạnh có chứa nhiều tế bào hồng cầu.", a: false },
        { text: "Khoảng 99% lượng nước trong nước tiểu đầu được tái hấp thụ lại vào máu ở ống thận.", a: true },
        { text: "Ống thận bài tiết tiếp các chất cặn bã như axit uric, creatinin và thuốc dư thừa.", a: true }
      ],
      exp: "Ý b sai vì có hồng cầu trong nước tiểu là biểu hiện tổn thương cầu thận."
    },
    {
      statement: "Về các nguyên nhân gây tổn hại cho hệ bài tiết nước tiểu:",
      sub: [
        { text: "Vi khuẩn xâm nhập ngược dòng từ đường niệu đạo có thể gây viêm bàng quang và viêm thận.", a: true },
        { text: "Ăn quá nhiều thức ăn chứa nhiều muối photphat, oxalat làm tăng nguy cơ tạo sỏi thận.", a: true },
        { text: "Khẩu phần ăn thừa protein hoàn toàn có lợi cho thận, giúp thận hoạt động nhẹ nhàng hơn.", a: false },
        { text: "Sử dụng thuốc kháng sinh bừa bãi có thể làm nhiễm độc tế bào ống thận.", a: true }
      ],
      exp: "Ý c sai vì thừa protein làm tăng sinh ure gây quá tải và hại thận."
    },
    {
      statement: "Về các biện pháp bảo vệ và vệ sinh hệ bài tiết nước tiểu:",
      sub: [
        { text: "Uống đủ từ 1.5 đến 2 lít nước mỗi ngày giúp thận lọc chất thải thuận lợi.", a: true },
        { text: "Nên nhịn tiểu để rèn luyện sức chịu đựng của cơ bàng quang.", a: false },
        { text: "Giữ vệ sinh vùng kín hàng ngày giúp ngăn chặn vi khuẩn xâm nhập đường tiết niệu.", a: true },
        { text: "Hạn chế ăn quá mặn, quá chua và các thực phẩm ôi thiu chứa độc chất.", a: true }
      ],
      exp: "Ý b sai vì nhịn tiểu gây ứ đọng nước tiểu, tăng nguy cơ nhiễm khuẩn và tạo sỏi."
    },
    {
      statement: "Về cấu tạo của thận và đơn vị thận (nephron):",
      sub: [
        { text: "Mỗi quả thận người có cấu tạo gồm phần vỏ ở ngoài và phần tủy ở trong.", a: true },
        { text: "Mỗi quả thận chỉ có một nephron duy nhất đảm nhiệm việc lọc toàn bộ máu.", a: false },
        { text: "Cầu thận thực chất là một búi mao mạch cuộn chặt trong nang cầu thận.", a: true },
        { text: "Các ống góp thu gom nước tiểu từ nhiều nephron đổ về bể thận.", a: true }
      ],
      exp: "Ý b sai vì mỗi quả thận chứa khoảng 1 triệu nephron."
    }
  ],
  part3: [
    { q: "Đơn vị chức năng tạo nước tiểu của thận có tên khoa học là gì?", a: "Nephron", accept: ["nefron", "đơn vị thận"], exp: "Nephron là đơn vị cấu tạo chức năng của thận." },
    { q: "Mỗi ngày hai quả thận người tạo ra khoảng bao nhiêu lít nước tiểu đầu?", a: "180", accept: ["170-180", "170", "khoảng 180 lít", "180 lít"], exp: "Thận lọc khoảng 170-180 lít nước tiểu đầu mỗi ngày." },
    { q: "Cơ quan dạng túi cơ đàn hồi chứa nước tiểu trước khi bài xuất ra ngoài là gì?", a: "Bóng đái", accept: ["bong dai", "bàng quang", "bang quang"], exp: "Bóng đái (bàng quang) lưu trữ nước tiểu." },
    { q: "Hiện tượng các chất khoáng lắng đọng kết tinh trong đường tiết niệu gây bệnh gì?", a: "Sỏi thận", accept: ["soi than", "bệnh sỏi thận", "sỏi tiết niệu"], exp: "Khoáng chất kết tinh tạo sỏi thận gây đau và tắc đường tiểu." }
  ]
};

const LESSON_36 = {
  id: 36,
  chapter: 7,
  title: "Điều hòa môi trường trong của cơ thể người",
  keywords: ["Môi trường trong", "Nội môi", "Cân bằng nội môi", "Gan và thận", "Áp suất thẩm thấu"],
  theory: "<h3>1. Khái niệm môi trường trong</h3><p>Môi trường trong gồm <b>máu, nước mô (dịch mô) và bạch huyết</b>.</p><h3>2. Cân bằng nội môi</h3><p>Sự ổn định về điều kiện lý hóa của môi trường trong (nhiệt độ, pH, đường huyết, áp suất thẩm thấu,...).</p><ul><li><b>Thận:</b> Duy trì áp suất thẩm thấu nhờ điều hòa nước và muối khoáng.</li><li><b>Gan:</b> Điều hòa đường huyết (chuyển đổi glucose và glycogen) và giải độc.</li></ul>",
  part1: [
    { q: "Môi trường trong của cơ thể người bao gồm các thành phần:", opts: ["Máu, nước tiểu và mồ hôi", "Máu, nước mô và bạch huyết", "Dịch vị, dịch mật và dịch tụy", "Tế bào chất và nhân tế bào"], a: 1, exp: "Máu, nước mô và bạch huyết tạo nên môi trường trong nuôi dưỡng tế bào." },
    { q: "Nơi diễn ra sự trao đổi chất trực tiếp giữa tế bào với môi trường trong là:", opts: ["Nước mô (dịch mô)", "Máu trong tim", "Nước bọt", "Nước tiểu"], a: 0, exp: "Tế bào ngập trong nước mô và trao đổi chất trực tiếp qua màng với nước mô." },
    { q: "Sự duy trì ổn định các điều kiện lý - hóa của môi trường trong được gọi là:", opts: ["Cân bằng tự nhiên", "Cân bằng nội môi", "Tuần hoàn máu", "Trao đổi khí"], a: 1, exp: "Cân bằng nội môi (homeostasis) giúp cơ thể hoạt động bình thường." },
    { q: "Cơ quan nào giữ vai trò chủ chốt trong việc điều hòa nồng độ glucose trong máu?", opts: ["Phổi và tim", "Gan và tuyến tụy", "Dạ dày và ruột già", "Bàng quang"], a: 1, exp: "Tụy tiết insulin/glucagon và gan biến đổi glucose thành glycogen dự trữ và ngược lại." },
    { q: "Khi nồng độ đường trong máu tăng cao (sau bữa ăn), tuyến tụy sẽ tiết hormone nào?", opts: ["Glucagon", "Insulin", "Adrenaline", "Thyroxine"], a: 1, exp: "Insulin kích thích gan chuyển glucose thành glycogen giúp hạ đường huyết." },
    { q: "Khi xa bữa ăn nồng độ đường trong máu giảm, hormone nào kích thích gan phân giải glycogen?", opts: ["Insulin", "Glucagon", "Estrogen", "Oxytocin"], a: 1, exp: "Glucagon biến glycogen thành glucose đưa vào máu." },
    { q: "Cơ quan nào giữ vai trò quan trọng trong việc điều hòa áp suất thẩm thấu của máu?", opts: ["Thận", "Dạ dày", "Phổi", "Tủy xương"], a: 0, exp: "Thận điều hòa lượng nước và muối khoáng bài xuất để giữ áp suất thẩm thấu." },
    { q: "Khi ta ăn quá mặn, áp suất thẩm thấu của máu sẽ:", opts: ["Giảm xuống", "Tăng lên", "Không đổi", "Bằng 0"], a: 1, exp: "Nhiều muối Na+ làm tăng áp suất thẩm thấu, kích thích cảm giác khát nước." },
    { q: "Khi áp suất thẩm thấu tăng do mất nước, thận sẽ phản ứng thế nào?", opts: ["Tăng đào thải nước", "Tăng cường tái hấp thụ nước vào máu", "Ngừng lọc hoàn toàn", "Tiết nhiều muối"], a: 1, exp: "Thận tái hấp thụ nước để đưa áp suất thẩm thấu về bình thường." },
    { q: "pH của máu người bình thường duy trì ổn định trong khoảng hẹp nào?", opts: ["5.0 - 5.5", "7.35 - 7.45", "8.5 - 9.0", "1.0 - 2.0"], a: 1, exp: "Máu hơi kiềm nhẹ, pH khoảng 7.35 - 7.45." },
    { q: "Hệ đệm trong máu có vai trò gì quan trọng nhất?", opts: ["Duy trì ổn định độ pH của môi trường trong", "Vận chuyển vitamin", "Tiêu diệt vi khuẩn", "Đông máu"], a: 0, exp: "Các hệ đệm (bicarbonate, phosphate, protein) giữ pH máu ổn định." },
    { q: "Nếu môi trường trong bị mất cân bằng nghiêm trọng và kéo dài sẽ dẫn tới:", opts: ["Cơ thể khỏe mạnh hơn", "Rối loạn chuyển hóa, bệnh tật hoặc tử vong", "Tăng tuổi thọ", "Các cơ quan tự teo lại"], a: 1, exp: "Mất cân bằng nội môi kéo dài gây suy tạng và tử vong." }
  ],
  part2: [
    {
      statement: "Về thành phần và mối liên hệ giữa các dịch trong môi trường trong:",
      sub: [
        { text: "Nước mô được hình thành từ máu thẩm thấu qua thành mao mạch vào khoảng gian bào.", a: true },
        { text: "Một phần nước mô thẩm thấu vào mạch bạch huyết tạo thành dịch bạch huyết.", a: true },
        { text: "Bạch huyết lưu thông tuần hoàn và cuối cùng đổ ngược trở lại vào hệ tuần hoàn máu.", a: true },
        { text: "Tế bào cơ thể người tiếp xúc và trao đổi chất trực tiếp với không khí của môi trường ngoài.", a: false }
      ],
      exp: "Ý d sai vì tế bào tiếp xúc trao đổi chất gián tiếp qua môi trường trong (nước mô)."
    },
    {
      statement: "Về vai trò của gan trong việc điều hòa môi trường trong:",
      sub: [
        { text: "Gan có khả năng biến đổi glucose dư thừa thành glycogen để dự trữ.", a: true },
        { text: "Khi đường huyết hạ, gan phân giải glycogen thành glucose giải phóng vào máu.", a: true },
        { text: "Gan tham gia khử độc các chất độc hại do tế bào sinh ra hoặc từ thức ăn đưa vào.", a: true },
        { text: "Gan là cơ quan trực tiếp bài xuất toàn bộ lượng nước thừa ra khỏi cơ thể.", a: false }
      ],
      exp: "Ý d sai vì thận và da (mồ hôi) mới là cơ quan bài xuất nước thừa chính."
    },
    {
      statement: "Về cơ chế điều hòa áp suất thẩm thấu và thể tích dịch cơ thể:",
      sub: [
        { text: "Ăn quá mặn làm nồng độ muối Na+ trong máu tăng, kích thích trung khu tạo cảm giác khát.", a: true },
        { text: "Uống nhiều nước làm tăng lượng nước tiểu bài xuất ở thận.", a: true },
        { text: "Khi cơ thể bị tiêu chảy mất nước, thận sẽ tăng đào thải nước để rửa sạch chất độc.", a: false },
        { text: "Sự điều hòa cân bằng muối nước ở thận có sự phối hợp của các hormone như ADH và aldosterone.", a: true }
      ],
      exp: "Ý c sai vì khi mất nước thận phải tăng tái hấp thụ nước để bù dịch cho cơ thể."
    },
    {
      statement: "Về ý nghĩa của cân bằng nội môi đối với cơ thể sống:",
      sub: [
        { text: "Độ pH và nhiệt độ ổn định giúp các enzyme trong cơ thể hoạt động ở hiệu suất tối ưu.", a: true },
        { text: "Đường huyết tăng cao kéo dài sẽ dẫn đến bệnh lý đái tháo đường (tiểu đường).", a: true },
        { text: "Các bệnh nhân suy thận bị mất cân bằng nội môi nghiêm trọng cần phải lọc máu chu kỳ.", a: true },
        { text: "Cân bằng nội môi là trạng thái bất biến tuyệt đối, các chỉ số không bao giờ dao động dù cơ thể hoạt động hay nghỉ ngơi.", a: false }
      ],
      exp: "Ý d sai vì cân bằng nội môi là cân bằng động, dao động quanh mức tối ưu."
    }
  ],
  part3: [
    { q: "Môi trường trong cơ thể bao gồm máu, bạch huyết và dịch gì?", a: "Nước mô", accept: ["nuoc mo", "dịch mô", "dich mo"], exp: "Gồm máu, nước mô và bạch huyết." },
    { q: "Hormone do tuyến tụy tiết ra giúp chuyển hóa glucose trong máu thành glycogen dự trữ là gì?", a: "Insulin", accept: ["in-su-lin"], exp: "Insulin giúp giảm đường huyết về mức ổn định." },
    { q: "Cơ quan nội tạng nào giữ vai trò dự trữ glycogen và khử độc lớn nhất cơ thể?", a: "Gan", accept: ["tuyến gan", "la gan"], exp: "Gan điều hòa đường huyết và lọc độc." },
    { q: "Khoảng pH sinh lý bình thường của máu người là khoảng bao nhiêu?", a: "7.4", accept: ["7.35-7.45", "7,4", "7.35 - 7.45"], exp: "Máu có tính kiềm nhẹ ổn định ở pH khoảng 7.35 - 7.45." }
  ]
};

const LESSON_37 = {
  id: 37,
  chapter: 7,
  title: "Hệ thần kinh và các giác quan ở người",
  keywords: ["Não bộ", "Tủy sống", "Phản xạ", "Cung phản xạ", "Thị giác", "Thính giác"],
  theory: "<h3>1. Cấu tạo hệ thần kinh</h3><p>Gồm <b>thần kinh trung ương</b> (não bộ, tủy sống) và <b>thần kinh ngoại biên</b> (dây và hạch thần kinh).</p><h3>2. Phản xạ và cung phản xạ</h3><p>Cung phản xạ gồm 5 khâu: Thụ cảm → Nơron hướng tâm → Trung khu → Nơron ly tâm → Cơ quan đáp ứng.</p><h3>3. Các giác quan</h3><p>Thị giác (màng lưới mắt) và thính giác (ốc tai tiếp nhận âm thanh).</p>",
  part1: [
    { q: "Đơn vị cấu tạo nên hệ thần kinh là:", opts: ["Tế bào biểu bì", "Nơron (tế bào thần kinh)", "Sợi cơ", "Hồng cầu"], a: 1, exp: "Nơron là đơn vị cấu tạo và chức năng của hệ thần kinh." },
    { q: "Hệ thần kinh về mặt cấu tạo được chia thành:", opts: ["Thần kinh vận động và thần kinh sinh dưỡng", "Thần kinh trung ương và thần kinh ngoại biên", "Đại não và tủy sống", "Mắt và tai"], a: 1, exp: "Chia thành trung ương (não, tủy) và ngoại biên (dây, hạch)." },
    { q: "Bộ phận nào của hệ thần kinh trung ương nằm trong ống xương sống?", opts: ["Đại não", "Tiểu não", "Tủy sống", "Trụ não"], a: 2, exp: "Tủy sống nằm trong ống xương sống kéo dài từ đốt sống cổ đến thắt lưng." },
    { q: "Tiểu não có chức năng quan trọng nào sau đây?", opts: ["Điều hòa thân nhiệt", "Điều hòa và phối hợp các cử động phức tạp, giữ thăng bằng", "Tạo ra phản xạ có điều kiện", "Cảm nhận vị giác"], a: 1, exp: "Tiểu não giúp giữ thăng bằng và định hướng không gian." },
    { q: "Phản ứng của cơ thể trả lời kích thích của môi trường thông qua hệ thần kinh gọi là:", opts: ["Cảm ứng", "Phản xạ", "Thích nghi", "Dinh dưỡng"], a: 1, exp: "Định nghĩa phản xạ." },
    { q: "Một cung phản xạ hoàn chỉnh gồm bao nhiêu thành phần?", opts: ["3", "4", "5 thành phần", "6"], a: 2, exp: "Gồm thụ cảm, nơron hướng tâm, trung khu, nơron ly tâm, cơ quan đáp ứng." },
    { q: "Cơ quan thụ cảm thị giác (tế bào que và tế bào nón) nằm ở lớp màng nào của mắt?", opts: ["Màng cứng", "Màng mạch", "Màng lưới (võng mạc)", "Giác mạc"], a: 2, exp: "Võng mạc (màng lưới) chứa các tế bào thụ cảm ánh sáng." },
    { q: "Ảnh của vật nhìn thấy hiện rõ nét nhất tại vị trí nào trên màng lưới của mắt?", opts: ["Điểm vàng", "Điểm mù", "Màng cứng", "Thể mi"], a: 0, exp: "Điểm vàng tập trung dày đặc tế bào nón giúp nhìn rõ chi tiết màu sắc." },
    { q: "Tật cận thị là tật mà mắt chỉ có khả năng nhìn rõ:", opts: ["Các vật ở xa", "Các vật ở gần mà không nhìn rõ vật ở xa", "Mọi vật ở cả xa và gần", "Chỉ nhìn rõ vào ban đêm"], a: 1, exp: "Cận thị nhìn rõ ở gần, nhìn xa bị nhòe." },
    { q: "Để khắc phục tật cận thị, người ta phải đeo kính gì?", opts: ["Kính hội tụ (kính lồi)", "Kính phân kì (kính lõm)", "Kính màu tối", "Kính râm"], a: 1, exp: "Kính phân kì giúp dời ảnh của vật từ phía trước màng lưới lùi về đúng màng lưới." },
    { q: "Cơ quan thụ cảm thính giác tiếp nhận sóng âm nằm ở bộ phận nào trong tai?", opts: ["Vành tai", "Màng nhĩ", "Ốc tai (cơ quan Corti)", "Chuỗi xương tai"], a: 2, exp: "Ốc tai chứa cơ quan thụ cảm âm thanh dẫn truyền xung thần kinh về não." },
    { q: "Nguyên nhân nào sau đây gây suy nhược hệ thần kinh?", opts: ["Ngủ đủ giấc 8 tiếng/ngày", "Làm việc căng thẳng quá sức, thức khuya, dùng chất kích thích", "Ăn nhiều rau quả tươi", "Tập thể dục buổi sáng"], a: 1, exp: "Căng thẳng kéo dài và thiếu ngủ làm tổn hại nơron thần kinh." }
  ],
  part2: [
    {
      statement: "Về cấu tạo của hệ thần kinh trung ương:",
      sub: [
        { text: "Đại não là phần phát triển nhất của não bộ ở người, bề mặt có nhiều nếp nhăn tăng diện tích.", a: true },
        { text: "Chất xám ở đại não nằm ở lớp vỏ ngoài, còn ở tủy sống chất xám nằm ở trong hình chữ H.", a: true },
        { text: "Tủy sống là trung khu điều khiển toàn bộ các hoạt động có ý thức phức tạp của con người.", a: false },
        { text: "Trụ não chứa các trung khu phản xạ không điều kiện quan trọng điều hòa hô hấp và tim mạch.", a: true }
      ],
      exp: "Ý c sai vì hoạt động có ý thức do vỏ não đại não điều khiển, tủy sống điều khiển phản xạ không điều kiện cấp thấp."
    },
    {
      statement: "Về cơ chế của cung phản xạ:",
      sub: [
        { text: "Khi tay chạm vào vật nóng rụt tay lại là ví dụ điển hình của phản xạ không điều kiện.", a: true },
        { text: "Nơron hướng tâm truyền xung thần kinh từ trung ương thần kinh ra cơ quan đáp ứng.", a: false },
        { text: "Nếu dây thần kinh ly tâm bị cắt đứt, cơ quan đáp ứng sẽ không thực hiện được cử động khi bị kích thích.", a: true },
        { text: "Cung phản xạ giúp cơ thể phản ứng mau lẹ và chính xác để tự bảo vệ trước nguy hiểm.", a: true }
      ],
      exp: "Ý b sai vì nơron hướng tâm truyền từ thụ cảm về trung ương, nơron ly tâm mới truyền ra cơ quan đáp ứng."
    },
    {
      statement: "Về cấu tạo mắt và các tật của mắt:",
      sub: [
        { text: "Thể thủy tinh có khả năng phồng lên hoặc xẹp xuống để điều tiết mắt nhìn rõ vật xa gần.", a: true },
        { text: "Người bị cận thị do cầu mắt quá ngắn hoặc thể thủy tinh quá xẹp không phồng được.", a: false },
        { text: "Đọc sách ở nơi thiếu ánh sáng hoặc cúi sát bàn là nguyên nhân phổ biến gây cận thị học đường.", a: true },
        { text: "Tật viễn thị được điều chỉnh bằng cách đeo kính có mắt kính hội tụ (thấu kính lồi).", a: true }
      ],
      exp: "Ý b sai vì cận thị do cầu mắt quá dài hoặc thể thủy tinh quá phồng."
    },
    {
      statement: "Về vệ sinh tai và bảo vệ thính giác:",
      sub: [
        { text: "Tiếng ồn kéo dài trên 85dB có thể làm tổn thương tế bào thụ cảm thính giác gây giảm thính lực.", a: true },
        { text: "Dùng vật cứng nhọn ngoáy tai dễ làm thủng màng nhĩ dẫn đến điếc.", a: true },
        { text: "Khi viêm họng nặng, vi khuẩn hoàn toàn không thể lây sang tai do hai bộ phận này không thông nhau.", a: false },
        { text: "Giữ tai sạch sẽ, khô ráo sau khi bơi giúp phòng ngừa viêm tai giữa.", a: true }
      ],
      exp: "Ý c sai vì tai và họng thông nhau qua vòi nhĩ (vòi Eustache)."
    }
  ],
  part3: [
    { q: "Bộ phận nào của não bộ giữ vai trò điều hòa thăng bằng và phối hợp cử động?", a: "Tiểu não", accept: ["tieu nao"], exp: "Tiểu não giữ thăng bằng cho cơ thể." },
    { q: "Một cung phản xạ hoàn chỉnh gồm bao nhiêu thành phần?", a: "5", accept: ["5 thành phần", "năm"], exp: "Gồm 5 khâu." },
    { q: "Tế bào thụ cảm ánh sáng nằm ở màng nào của mắt?", a: "Màng lưới", accept: ["võng mạc", "vong mac", "mang luoi"], exp: "Võng mạc (màng lưới) tiếp nhận ánh sáng." },
    { q: "Người bị tật cận thị cần đeo thấu kính loại gì để nhìn rõ?", a: "Kính phân kì", accept: ["thấu kính phân kì", "kinh phan ki", "kính lõm"], exp: "Kính phân kì giúp lùi ảnh về màng lưới." }
  ]
};

const LESSON_38 = {
  id: 38,
  chapter: 7,
  title: "Hệ nội tiết ở người",
  keywords: ["Tuyến nội tiết", "Hormone", "Tuyến yên", "Tuyến giáp", "Tuyến tụy", "Tuyến trên thận"],
  theory: "<h3>1. Đặc điểm hệ nội tiết</h3><p>Hệ nội tiết tiết chất hóa học gọi là <b>hormone</b> trực tiếp vào máu đến cơ quan đích.</p><h3>2. Các tuyến nội tiết chính</h3><ul><li><b>Tuyến yên:</b> Tuyến chỉ huy nhiều tuyến nội tiết khác.</li><li><b>Tuyến giáp:</b> Tiết thyroxine (chứa iod) điều hòa chuyển hóa.</li><li><b>Tuyến tụy:</b> Tiết insulin (hạ đường huyết) và glucagon (tăng đường huyết).</li><li><b>Tuyến trên thận:</b> Tiết adrenaline và noradrenaline.</li><li><b>Tuyến sinh dục:</b> Tinh hoàn và buồng trứng.</li></ul>",
  part1: [
    { q: "Đặc điểm nào sau đây là của tuyến nội tiết (phân biệt với tuyến ngoại tiết)?", opts: ["Có ống dẫn chất tiết đổ ra ngoài", "Sản phẩm tiết (hormone) ngấm trực tiếp vào máu", "Tiết ra enzyme tiêu hóa", "Chất tiết đổ vào khoang tiêu hóa"], a: 1, exp: "Tuyến nội tiết không có ống dẫn, tiết hormone thẳng vào máu." },
    { q: "Tuyến nội tiết nào được xem là tuyến giữ vai trò chỉ huy các tuyến nội tiết khác?", opts: ["Tuyến giáp", "Tuyến yên", "Tuyến tụy", "Tuyến trên thận"], a: 1, exp: "Tuyến yên tiết hormone kích thích các tuyến nội tiết khác hoạt động." },
    { q: "Hormone tăng trưởng (GH) giúp cơ thể phát triển chiều cao do tuyến nào tiết ra?", opts: ["Tuyến yên", "Tuyến giáp", "Tuyến tụy", "Tuyến sinh dục"], a: 0, exp: "Tuyến yên tiết GH điều hòa sự phát triển của xương và cơ." },
    { q: "Nguyên tố khoáng nào là thành phần không thể thiếu của hormone thyroxine ở tuyến giáp?", opts: ["Canxi", "Sắt", "Iod", "Kẽm"], a: 2, exp: "Iod là thành phần cấu tạo nên thyroxine." },
    { q: "Bệnh bướu cổ do tuyến giáp phì đại thường liên quan đến sự thiếu hụt chất nào trong chế độ ăn?", opts: ["Thiếu Canxi", "Thiếu Vitamin C", "Thiếu Iod", "Thiếu Protein"], a: 2, exp: "Thiếu iod làm tuyến giáp tăng sinh cố thu nhận iod gây bướu cổ." },
    { q: "Hormone insulin do tuyến tụy tiết ra có tác dụng gì?", opts: ["Làm tăng đường huyết", "Làm hạ đường huyết về mức ổn định", "Kích thích cơ co rút", "Gây buồn ngủ"], a: 1, exp: "Insulin chuyển glucose trong máu vào tế bào dự trữ thành glycogen." },
    { q: "Bệnh đái tháo đường (tiểu đường) xuất hiện chủ yếu do thiếu hoặc giảm độ nhạy của hormone nào?", opts: ["Thyroxine", "Insulin", "Adrenaline", "Estrogen"], a: 1, exp: "Thiếu insulin làm đường huyết tăng cao thải qua nước tiểu." },
    { q: "Khi gặp tình huống nguy hiểm hoặc sợ hãi đột ngột, cơ thể tiết hormone nào làm tim đập nhanh?", opts: ["Insulin", "Adrenaline", "Thyroxine", "Calcitonin"], a: 1, exp: "Tủy tuyến trên thận tiết adrenaline kích hoạt phản ứng chiến đấu hoặc bỏ chạy." },
    { q: "Tuyến nào trong cơ thể vừa là tuyến ngoại tiết vừa là tuyến nội tiết (tuyến pha)?", opts: ["Tuyến yên", "Tuyến tụy", "Tuyến giáp", "Tuyến trên thận"], a: 1, exp: "Tụy vừa tiết dịch tụy tiêu hóa (ngoại tiết) vừa tiết insulin/glucagon (nội tiết)." },
    { q: "Hormone sinh dục nam quyết định các đặc điểm sinh dục phụ thứ cấp ở nam giới là:", opts: ["Estrogen", "Progesterone", "Testosterone", "Insulin"], a: 2, exp: "Testosterone do tinh hoàn tiết ra kích thích phát triển giọng trầm, râu, cơ bắp." },
    { q: "Hormone sinh dục nữ chủ yếu do buồng trứng tiết ra là:", opts: ["Testosterone", "Estrogen và Progesterone", "Adrenaline", "Thyroxine"], a: 1, exp: "Estrogen và progesterone điều hòa chu kỳ kinh nguyệt và đặc tính nữ." },
    { q: "Thói quen ăn muối iod hàng ngày giúp phòng ngừa bệnh lý nào sau đây?", opts: ["Bệnh còi xương", "Bệnh bướu cổ đơn thuần", "Bệnh cận thị", "Bệnh loãng xương"], a: 1, exp: "Muối iod cung cấp đủ nguyên liệu cho tuyến giáp tổng hợp thyroxine." }
  ],
  part2: [
    {
      statement: "Về vai trò và đặc điểm của các hormone trong cơ thể:",
      sub: [
        { text: "Mỗi loại hormone chỉ tác động lên một hoặc một số cơ quan đích nhất định (tính đặc hiệu cao).", a: true },
        { text: "Hormone có hiệu lực sinh học rất cao, chỉ cần một lượng cực nhỏ đã gây biến đổi sinh lý lớn.", a: true },
        { text: "Hormone mang tính đặc trưng cho từng cá thể, không thể dùng hormone của động vật cho người.", a: false },
        { text: "Hormone được bài tiết với nồng độ không đổi trong suốt cả ngày bất kể hoàn cảnh sinh lý.", a: false }
      ],
      exp: "Ý c sai vì hormone không mang tính đặc trưng loài (ví dụ insulin bò/lợn chữa bệnh cho người); Ý d sai vì nồng độ hormone thay đổi theo nhịp ngày đêm và phản ứng cơ thể."
    },
    {
      statement: "Về tuyến tụy và cơ chế điều hòa đường huyết:",
      sub: [
        { text: "Tuyến tụy là tuyến pha vì có cả chức năng ngoại tiết (dịch tụy) và nội tiết (đảo tụy).", a: true },
        { text: "Tế bào beta của đảo tụy tiết ra hormone insulin giúp giảm nồng độ đường trong máu.", a: true },
        { text: "Tế bào alpha của đảo tụy tiết ra hormone glucagon giúp làm tăng đường huyết khi đói.", a: true },
        { text: "Ở bệnh nhân tiểu đường, lượng glucose trong nước tiểu luôn bằng không.", a: false }
      ],
      exp: "Ý d sai vì khi đường huyết vượt ngưỡng thận, glucose sẽ xuất hiện nhiều trong nước tiểu."
    },
    {
      statement: "Về chức năng của tuyến yên và tuyến giáp:",
      sub: [
        { text: "Nếu tuyến yên tiết quá nhiều hormone GH ở tuổi đang lớn sẽ dẫn đến bệnh khổng lồ.", a: true },
        { text: "Nếu tuyến yên tiết quá ít hormone GH ở tuổi đang lớn sẽ dẫn đến người lùn cân đối.", a: true },
        { text: "Tuyến giáp nằm ở vùng trước cổ, ngay phía dưới thanh quản.", a: true },
        { text: "Bệnh Bazơđô là bệnh do tuyến giáp hoạt động quá kém (thiểu năng tuyến giáp).", a: false }
      ],
      exp: "Ý d sai vì bệnh Bazơđô (Basedow) là bệnh do cường tuyến giáp (tiết quá nhiều thyroxine)."
    },
    {
      statement: "Về tuyến trên thận và tuyến sinh dục:",
      sub: [
        { text: "Tuyến trên thận nằm úp trên đầu mỗi quả thận gồm phần vỏ và phần tủy.", a: true },
        { text: "Phần tủy tuyến trên thận tiết adrenaline làm tăng nhịp tim và tăng huyết áp khi hưng phấn.", a: true },
        { text: "Tinh hoàn ở nam giới chỉ có chức năng sinh tinh trùng, hoàn toàn không tiết hormone.", a: false },
        { text: "Estrogen kích thích sự phát triển ngực, mở rộng xương chậu ở tuổi dậy thì của nữ giới.", a: true }
      ],
      exp: "Ý c sai vì tinh hoàn là tuyến pha, tế bào kẽ tiết testosterone vào máu."
    }
  ],
  part3: [
    { q: "Tuyến nội tiết nào giữ vai trò chỉ huy hoạt động của tuyến giáp và vỏ trên thận?", a: "Tuyến yên", accept: ["tuyen yen"], exp: "Tuyến yên tiết hormone chỉ đạo nhiều tuyến khác." },
    { q: "Nguyên tố hóa học nào cần thiết cho quá trình tổng hợp hormone thyroxine của tuyến giáp?", a: "Iod", accept: ["iot", "i-ốt", "iốt", "I"], exp: "Iod là thành phần thiết yếu của thyroxine." },
    { q: "Hormone nào từ đảo tụy giúp chuyển hóa glucose trong máu thành glycogen?", a: "Insulin", accept: ["in-su-lin"], exp: "Insulin làm giảm đường huyết." },
    { q: "Hormone sinh dục nam chủ yếu do tinh hoàn tiết ra có tên là gì?", a: "Testosterone", accept: ["testosteron"], exp: "Testosterone kích thích phát triển giới tính nam." }
  ]
};

const LESSON_39 = {
  id: 39,
  chapter: 7,
  title: "Da và điều hòa thân nhiệt ở người",
  keywords: ["Cấu tạo da", "Melamin", "Nhiệt độ cơ thể", "Cơ chế tỏa nhiệt", "Chống nóng và lạnh"],
  theory: "<h3>1. Cấu tạo và chức năng của da</h3><p>Da gồm 3 lớp: Lớp biểu bì, lớp bì và lớp mỡ dưới da. Giúp bảo vệ, bài tiết, cảm giác và điều hòa thân nhiệt.</p><h3>2. Điều hòa thân nhiệt</h3><p>Nhiệt độ cơ thể ổn định khoảng <b>37°C</b> nhờ cân bằng giữa sinh nhiệt và tỏa nhiệt.</p><ul><li>Khi trời nóng: Dãn mao mạch, tiết mồ hôi để tỏa nhiệt.</li><li>Khi trời lạnh: Co mao mạch, co cơ chân lông, run cơ tăng sinh nhiệt.</li></ul>",
  part1: [
    { q: "Cấu tạo của da gồm có mấy lớp chính từ ngoài vào trong?", opts: ["2 lớp", "3 lớp (Lớp biểu bì, lớp bì, lớp mỡ dưới da)", "4 lớp", "5 lớp"], a: 1, exp: "Gồm biểu bì, lớp bì và lớp mỡ dưới da." },
    { q: "Tầng tế bào nào của da có khả năng phân chia tạo ra các tế bào mới thay thế cho lớp sừng bong ra?", opts: ["Tầng sừng", "Tầng tế bào sống của lớp biểu bì", "Lớp bì", "Lớp mỡ"], a: 1, exp: "Tầng tế bào sống sinh sản liên tục bù đắp lớp tế bào sừng chết bong đi." },
    { q: "Sắc tố xác định màu da (trắng, vàng, đen) và chống tia cực tím là:", opts: ["Hemoglobin", "Melamin", "Bilirubin", "Carotenoid"], a: 1, exp: "Melamin hấp thụ tia cực tím bảo vệ da." },
    { q: "Các thụ quan tiếp nhận cảm giác nóng, lạnh, đau đớn nằm chủ yếu ở lớp nào của da?", opts: ["Lớp biểu bì", "Lớp bì", "Lớp mỡ dưới da", "Tầng sừng"], a: 1, exp: "Lớp bì chứa dày đặc đầu mút dây thần kinh cảm giác." },
    { q: "Chức năng nào sau đây KHÔNG phải là chức năng của da?", opts: ["Bảo vệ cơ thể khỏi vi khuẩn và va đập", "Điều hòa thân nhiệt", "Tiết enzyme tiêu hóa protein", "Cảm nhận kích thích môi trường"], a: 2, exp: "Tiết enzyme tiêu hóa là của hệ tiêu hóa." },
    { q: "Nhiệt độ cơ thể người khỏe mạnh bình thường ổn định ở khoảng bao nhiêu độ C?", opts: ["35°C", "36°C", "37°C", "39°C"], a: 2, exp: "Thân nhiệt trung bình duy trì ở 37°C." },
    { q: "Bộ phận nào trong não bộ giữ vai trò là trung khu điều hòa thân nhiệt của cơ thể?", opts: ["Tiểu não", "Vùng dưới đồi", "Tủy sống", "Trụ não"], a: 1, exp: "Vùng dưới đồi (não trung gian) là trung tâm điều hòa thân nhiệt." },
    { q: "Khi trời nóng, cơ thể người tăng cường tỏa nhiệt ra môi trường bằng cơ chế nào?", opts: ["Mao mạch dưới da dãn ra và tăng tiết mồ hôi", "Mao mạch dưới da co lại", "Run cơ liên tục", "Giảm thoát hơi nước"], a: 0, exp: "Dãn mạch và thoát mồ hôi bay hơi giúp mang nhiệt lượng ra ngoài." },
    { q: "Hiện tượng 'nổi da gà' (sởn gai ốc) khi gặp lạnh là do:", opts: ["Cơ co chân lông ở lớp bì co lại", "Mạch máu dãn to", "Lớp mỡ bị teo lại", "Tuyến mồ hôi tiết nhiều"], a: 0, exp: "Cơ co chân lông co kéo lỗ chân lông khép lại hạn chế thoát nhiệt." },
    { q: "Hiện tượng run rẩy của bắp thịt khi trời quá rét có tác dụng sinh lý gì?", opts: ["Tăng tỏa nhiệt", "Tăng sinh nhiệt cho cơ thể", "Giảm huyết áp", "Tăng tiết mồ hôi"], a: 1, exp: "Run cơ phân giải ATP sinh nhiệt làm ấm cơ thể." },
    { q: "Hành động nào sau đây giúp chăm sóc và bảo vệ làn da khỏe mạnh?", opts: ["Tắm rửa vệ sinh da sạch sẽ hàng ngày", "Nặn mụn khi tay bẩn", "Phơi nắng gắt buổi trưa không che chắn", "Lạm dụng kem tẩy trắng da không rõ nguồn gốc"], a: 0, exp: "Tắm rửa giữ da sạch sẽ chống viêm nhiễm nang lông." },
    { q: "Khi bị say nắng hoặc cảm nóng đột ngột, việc đầu tiên cần làm là gì?", opts: ["Đắp chăn thật dày", "Đưa nạn nhân vào chỗ râm mát, nới lỏng quần áo và chườm mát", "Cho uống nước đá thật lạnh ngay lập tức", "Để nạn nhân nằm ngoài trời tiếp tục"], a: 1, exp: "Đưa vào chỗ râm mát và chườm mát hạ nhiệt cơ thể." }
  ],
  part2: [
    {
      statement: "Về cấu tạo của da và các phần phụ của da:",
      sub: [
        { text: "Lớp biểu bì gồm tầng sừng ở ngoài cùng và tầng tế bào sống ở bên trong.", a: true },
        { text: "Lông và móng được sinh ra từ các tế bào của tầng tế bào sống của da.", a: true },
        { text: "Tuyến nhờn tiết chất nhờn giúp da mềm mại và có tính chất sát khuẩn nhẹ.", a: true },
        { text: "Lớp mỡ dưới da hoàn toàn vô dụng, chỉ làm cơ thể nặng nề hơn.", a: false }
      ],
      exp: "Ý d sai vì lớp mỡ dưới da là lớp đệm cơ học, cách nhiệt chống lạnh và dự trữ năng lượng."
    },
    {
      statement: "Về cơ chế điều hòa thân nhiệt khi nhiệt độ môi trường thay đổi:",
      sub: [
        { text: "Sinh nhiệt là quá trình các tế bào chuyển hóa năng lượng sinh ra nhiệt lượng.", a: true },
        { text: "Khi trời lạnh, mao mạch dưới da co lại giúp giảm bớt lượng máu đưa ra bề mặt để giữ nhiệt.", a: true },
        { text: "Mồ hôi khi thoát ra ngoài da chỉ làm ướt quần áo chứ không có tác dụng hạ nhiệt độ cơ thể.", a: false },
        { text: "Trung khu điều hòa thân nhiệt nhận tín hiệu từ các thụ quan nhiệt ở da và điều chỉnh thích hợp.", a: true }
      ],
      exp: "Ý c sai vì sự bay hơi của mồ hôi lấy đi một lượng nhiệt lớn làm mát cơ thể."
    },
    {
      statement: "Về các hiện tượng cảm lạnh, cảm nóng và phương pháp phòng chống:",
      sub: [
        { text: "Vừa đi ngoài trời nắng về đã tắm ngay nước lạnh dễ bị sốc nhiệt và cảm lạnh đột ngột.", a: true },
        { text: "Khi trời rét buốt, mặc ấm, giữ ấm cổ, ngực, bàn chân giúp phòng bệnh đường hô hấp.", a: true },
        { text: "Đội mũ nón khi đi dưới trời nắng to giúp bảo vệ não khỏi bị bức xạ nhiệt trực tiếp.", a: true },
        { text: "Khi bị sốt cao trên 39°C, cần đắp chăn kín mít để cơ thể toát mồ hôi hạ sốt nhanh.", a: false }
      ],
      exp: "Ý d sai vì sốt cao đắp chăn kín làm nhiệt không tỏa được gây co giật nguy hiểm; cần nới lỏng áo và chườm ấm."
    },
    {
      statement: "Về vệ sinh và rèn luyện da:",
      sub: [
        { text: "Da sạch có khả năng tiêu diệt tới 85% số vi khuẩn bám trên bề mặt nhờ chất nhờn tự nhiên.", a: true },
        { text: "Da bẩn làm tắc lỗ chân lông tạo điều kiện cho vi khuẩn xâm nhập gây mụn nhọt.", a: true },
        { text: "Tắm nắng vào khoảng thời gian sáng sớm giúp da khỏe mạnh và tăng tổng hợp vitamin D.", a: true },
        { text: "Rèn luyện thân thể chịu đựng nóng lạnh dần dần giúp hệ mạch dưới da phản xạ linh hoạt hơn.", a: true }
      ],
      exp: "Cả 4 ý đều đúng theo kiến thức vệ sinh da học đường."
    }
  ],
  part3: [
    { q: "Sắc tố nằm ở tầng tế bào sống giúp chống tia tử ngoại và quyết định màu da là gì?", a: "Melamin", accept: ["melanin", "hạt melamin"], exp: "Melamin chống tia UV bảo vệ cơ thể." },
    { q: "Nhiệt độ cơ thể người khỏe mạnh bình thường duy trì ổn định ở mức bao nhiêu độ C?", a: "37", accept: ["37 độ", "37°C", "khoảng 37"], exp: "Thân nhiệt trung bình là 37°C." },
    { q: "Trung khu điều hòa thân nhiệt của cơ thể người nằm ở bộ phận nào trong não bộ?", a: "Vùng dưới đồi", accept: ["vung duoi doi", "dưới đồi"], exp: "Vùng dưới đồi điều hòa thân nhiệt." },
    { q: "Hiện tượng cơ co lại nhanh và liên tục để tăng sinh nhiệt khi trời quá lạnh gọi là gì?", a: "Run cơ", accept: ["run", "run rẩy"], exp: "Run cơ giải phóng nhiệt giữ ấm thân thể." }
  ]
};

const LESSON_40 = {
  id: 40,
  chapter: 7,
  title: "Sinh sản ở người",
  keywords: ["Cơ quan sinh dục", "Thụ tinh", "Thụ thai", "Phòng tránh thai", "Bệnh lây truyền"],
  theory: "<h3>1. Cơ quan sinh dục</h3><p>Nam: Tinh hoàn (sản xuất tinh trùng và testosterone), mào tinh, ống dẫn tinh, tuyến tiền liệt, dương vật,... Nữ: Buồng trứng (sinh trứng và estrogen), ống dẫn trứng, tử cung, âm đạo,...</p><h3>2. Thụ tinh và thụ thai</h3><p>Thụ tinh diễn ra ở 1/3 ngoài ống dẫn trứng. Hợp tử di chuyển đến làm tổ tại niêm mạc tử cung gọi là thụ thai.</p><h3>3. Sức khỏe sinh sản</h3><p>Sử dụng biện pháp tránh thai an toàn phòng mang thai ngoài ý muốn và bệnh tình dục (HIV, lậu, giang mai,...).</p>",
  part1: [
    { q: "Cơ quan sản xuất tinh trùng và tiết hormone sinh dục nam là:", opts: ["Ống dẫn tinh", "Tinh hoàn", "Tuyến tiền liệt", "Bóng đái"], a: 1, exp: "Tinh hoàn sinh tinh và tiết testosterone." },
    { q: "Cơ quan sản xuất trứng và tiết hormone sinh dục nữ là:", opts: ["Tử cung", "Buồng trứng", "Ống dẫn trứng", "Âm đạo"], a: 1, exp: "Buồng trứng sinh trứng chín rụng và tiết estrogen, progesterone." },
    { q: "Vị trí diễn ra sự thụ tinh bình thường ở người là:", opts: ["Trong buồng trứng", "Ở 1/3 phía ngoài của ống dẫn trứng", "Trong lòng tử cung", "Tại âm đạo"], a: 1, exp: "Trứng gặp tinh trùng thụ tinh tại 1/3 ngoài ống dẫn trứng." },
    { q: "Nơi diễn ra sự làm tổ và phát triển của phôi thai trong suốt thời kỳ mang thai là:", opts: ["Ống dẫn trứng", "Buồng trứng", "Tử cung", "Bàng quang"], a: 2, exp: "Phôi làm tổ tại lớp niêm mạc tử cung giàu mạch máu." },
    { q: "Hiện tượng trứng chín rụng không được thụ tinh dẫn đến bong lớp niêm mạc tử cung gọi là:", opts: ["Thụ thai", "Hiện tượng kinh nguyệt", "Tiết sữa", "Dậy thì muộn"], a: 1, exp: "Hiện tượng kinh nguyệt diễn ra theo chu kỳ khoảng 28-30 ngày." },
    { q: "Độ tuổi dậy thì ở con người thường đi kèm với những biến đổi nào?", opts: ["Chỉ có chiều cao tăng", "Phát triển nhanh về chiều cao, thể lực và xuất hiện các dấu hiệu sinh dục phụ", "Trí nhớ suy giảm", "Không có thay đổi gì"], a: 1, exp: "Tuổi dậy thì cơ thể thay đổi mạnh mẽ cả thể chất và sinh lý." },
    { q: "Biện pháp tránh thai nào vừa phòng tránh mang thai ngoài ý muốn vừa ngăn ngừa lây nhiễm HIV?", opts: ["Uống thuốc tránh thai hàng ngày", "Đặt vòng tránh thai", "Sử dụng bao cao su", "Tính chu kỳ kinh nguyệt"], a: 2, exp: "Bao cao su là màng ngăn cơ học phòng bệnh tình dục và ngừa thai." },
    { q: "Bệnh nào sau đây lây truyền qua đường quan hệ tình dục không an toàn?", opts: ["Bệnh giang mai và bệnh lậu", "Bệnh còi xương", "Bệnh tiểu đường", "Bệnh đau mắt đỏ"], a: 0, exp: "Lậu và giang mai là bệnh truyền nhiễm qua đường sinh dục." },
    { q: "Virus HIV tấn công chủ yếu vào loại tế bào nào trong cơ thể người?", opts: ["Tế bào hồng cầu", "Tế bào lympho T (bạch cầu miễn dịch)", "Tế bào thần kinh", "Tế bào gan"], a: 1, exp: "HIV phá hủy lympho T làm suy giảm hệ miễn dịch." },
    { q: "Giai đoạn cuối của nhiễm HIV khi hệ miễn dịch bị phá hủy hoàn toàn gọi là:", opts: ["Giai đoạn cửa sổ", "Giai đoạn không triệu chứng", "Hội chứng suy giảm miễn dịch mắc phải (AIDS)", "Bệnh tự miễn"], a: 2, exp: "AIDS là giai đoạn cuối khi cơ thể mất khả năng đề kháng." },
    { q: "Mang thai ở lứa tuổi vị thành niên dễ dẫn đến hậu quả gì?", opts: ["Ảnh hưởng xấu tới sức khỏe của mẹ và bé, cản trở việc học hành", "Rất tốt cho phát triển xương", "Không gây tác động gì", "Tăng cường miễn dịch"], a: 0, exp: "Cơ thể chưa hoàn thiện, mang thai sớm nguy cơ đẻ non, tai biến cao." },
    { q: "Con đường nào sau đây KHÔNG làm lây truyền virus HIV?", opts: ["Quan hệ tình dục không an toàn", "Muỗi đốt hoặc ăn uống chung bát đũa", "Dùng chung kim tiêm dính máu", "Truyền từ mẹ sang con"], a: 1, exp: "HIV không lây qua tiếp xúc thông thường, ăn uống hay muỗi đốt." }
  ],
  part2: [
    {
      statement: "Về quá trình thụ tinh, thụ thai và phát triển của phôi thai:",
      sub: [
        { text: "Trong hàng triệu tinh trùng phóng vào âm đạo, thường chỉ có một tinh trùng thụ tinh với một trứng.", a: true },
        { text: "Hợp tử di chuyển xuống tử cung và làm tổ tại lớp niêm mạc tử cung.", a: true },
        { text: "Thai nhi lấy oxy và chất dinh dưỡng từ máu mẹ thông qua nhau thai và dây rốn.", a: true },
        { text: "Thời gian mang thai bình thường ở người kéo dài khoảng 12 tháng.", a: false }
      ],
      exp: "Ý d sai vì thời gian mang thai trung bình là 9 tháng 10 ngày (khoảng 38-40 tuần)."
    },
    {
      statement: "Về sức khỏe sinh sản tuổi vị thành niên:",
      sub: [
        { text: "Xuất tinh lần đầu ở nam và có kinh lần đầu ở nữ là dấu hiệu sinh lý bình thường của tuổi dậy thì.", a: true },
        { text: "Tuổi vị thành niên cơ quan sinh dục đã có khả năng thụ tinh nhưng tâm lý và cơ thể chưa hoàn thiện.", a: true },
        { text: "Học sinh nên tìm hiểu kiến thức giới tính qua các nguồn thông tin lành mạnh, khoa học.", a: true },
        { text: "Nạo phá thai ở tuổi vị thành niên hoàn toàn an toàn, không để lại bất kỳ di chứng nào.", a: false }
      ],
      exp: "Ý d sai vì nạo phá thai dễ gây thủng tử cung, dính buồng tử cung và vô sinh sau này."
    },
    {
      statement: "Về các biện pháp phòng tránh thai an toàn:",
      sub: [
        { text: "Nguyên tắc tránh thai là ngăn không cho trứng gặp tinh trùng hoặc ngăn trứng thụ tinh làm tổ.", a: true },
        { text: "Dùng bao cao su đúng cách giúp hiệu quả ngừa thai và phòng bệnh lây truyền qua đường tình dục đạt rất cao.", a: true },
        { text: "Phương pháp tính ngày rụng trứng có hiệu quả tránh thai 100% đối với mọi lứa tuổi.", a: false },
        { text: "Vòng tránh thai được đặt vào tử cung để ngăn cản sự làm tổ của hợp tử.", a: true }
      ],
      exp: "Ý c sai vì chu kỳ kinh nguyệt tuổi học sinh dao động không đều, tính ngày rụng trứng rất dễ có thai ngoài ý muốn."
    },
    {
      statement: "Về các bệnh lây truyền qua đường tình dục và HIV/AIDS:",
      sub: [
        { text: "Bệnh giang mai do xoắn khuẩn Treponema pallidum gây ra làm tổn thương da, nội tạng và thần kinh.", a: true },
        { text: "Bệnh lậu do song cầu khuẩn lậu gây viêm đường tiết niệu và chảy mủ.", a: true },
        { text: "HIV lây qua 3 con đường: đường máu, đường tình dục không an toàn và mẹ truyền sang con.", a: true },
        { text: "Bắt tay, ôm hôn xã giao và dùng chung nhà vệ sinh là các con đường lây nhiễm HIV phổ biến.", a: false }
      ],
      exp: "Ý d sai vì tiếp xúc thông thường không làm lây nhiễm HIV."
    }
  ],
  part3: [
    { q: "Quá trình tinh trùng kết hợp với trứng tạo thành hợp tử được gọi là gì?", a: "Thụ tinh", accept: ["thu tinh"], exp: "Thụ tinh tạo hợp tử mang bộ NST lưỡng bội." },
    { q: "Vị trí hợp tử bám vào để làm tổ và phát triển thành thai nhi là ở đâu?", a: "Tử cung", accept: ["lòng tử cung", "niêm mạc tử cung", "dạ con", "tu cung"], exp: "Tử cung (dạ con) nuôi dưỡng thai nhi." },
    { q: "Biện pháp tránh thai cơ học nào ngăn ngừa cả thai ngoài ý muốn lẫn bệnh tình dục?", a: "Bao cao su", accept: ["bao cao su", "bcs"], exp: "Bao cao su bảo vệ hữu hiệu nhất." },
    { q: "Thời gian chu kỳ kinh nguyệt trung bình của phụ nữ thường kéo dài khoảng bao nhiêu ngày?", a: "28", accept: ["28-30", "khoảng 28", "28 ngày", "30"], exp: "Chu kỳ bình thường từ 28 đến 30 ngày." }
  ]
};

const LESSON_41 = {
  id: 41,
  chapter: 8,
  title: "Môi trường và các nhân tố sinh thái",
  keywords: ["Môi trường sống", "Nhân tố vô sinh", "Nhân tố hữu sinh", "Giới hạn sinh thái"],
  theory: "<h3>1. Khái niệm môi trường sống</h3><p>Gồm 4 loại: Môi trường cạn, môi trường nước, môi trường trong đất và môi trường sinh vật.</p><h3>2. Các nhân tố sinh thái</h3><ul><li>Nhân tố vô sinh: Ánh sáng, nhiệt độ, độ ẩm, không khí,...</li><li>Nhân tố hữu sinh: Con người và các sinh vật khác.</li></ul><h3>3. Giới hạn sinh thái</h3><p>Khoảng giá trị của một nhân tố sinh thái mà ở đó sinh vật có thể tồn tại và phát triển ổn định.</p>",
  part1: [
    { q: "Môi trường sống của sinh vật bao gồm:", opts: ["Tất cả các yếu tố bao quanh sinh vật có tác động trực tiếp hoặc gián tiếp đến sinh vật", "Chỉ nguồn thức ăn của sinh vật", "Chỉ các điều kiện thời tiết", "Khoảng không gian sinh vật sinh sản"], a: 0, exp: "Định nghĩa môi trường sống của sinh vật." },
    { q: "Có mấy loại môi trường sống chủ yếu của sinh vật trên Trái Đất?", opts: ["2 loại", "3 loại", "4 loại (cạn, nước, trong đất, sinh vật)", "5 loại"], a: 2, exp: "Gồm 4 môi trường: trên cạn, nước, trong đất và cơ thể sinh vật." },
    { q: "Cá chép sống trong hồ nước thuộc loại môi trường sống nào?", opts: ["Môi trường nước", "Môi trường trên cạn", "Môi trường trong đất", "Môi trường sinh vật"], a: 0, exp: "Cá sống dưới nước thuộc môi trường nước ngọt." },
    { q: "Giun đất sống trong các kẽ đất xốp thuộc loại môi trường nào?", opts: ["Môi trường nước", "Môi trường trong đất", "Môi trường trên cạn", "Môi trường sinh vật"], a: 1, exp: "Đất là môi trường sống của giun đất, chuột chũi." },
    { q: "Chấy rận sống trên da đầu người thuộc môi trường nào?", opts: ["Môi trường sinh vật", "Môi trường trên cạn", "Môi trường nước", "Môi trường đất"], a: 0, exp: "Sinh vật ký sinh sống trong/trên cơ thể sinh vật khác." },
    { q: "Nhân tố nào sau đây là nhân tố sinh thái vô sinh?", opts: ["Cây bàng", "Nhiệt độ không khí và ánh sáng", "Vi khuẩn gây bệnh", "Đàn bò gặm cỏ"], a: 1, exp: "Nhiệt độ, ánh sáng, độ ẩm,... là nhân tố vô sinh (vật lý, hóa học)." },
    { q: "Nhân tố nào được tách thành một nhóm nhân tố sinh thái riêng biệt trong nhóm hữu sinh vì có tác động rất lớn?", opts: ["Thực vật", "Con người", "Động vật", "Vi sinh vật"], a: 1, exp: "Con người có hoạt động ý thức làm biến đổi môi trường trên quy mô toàn cầu." },
    { q: "Khoảng giá trị của một nhân tố sinh thái mà sinh vật có thể tồn tại và phát triển ổn định gọi là:", opts: ["Ổ sinh thái", "Giới hạn sinh thái", "Nơi cư trú", "Cân bằng tự nhiên"], a: 1, exp: "Giới hạn sinh thái là giới hạn chịu đựng của loài." },
    { q: "Cá rô phi ở Việt Nam chết ở nhiệt độ dưới 5.6°C và trên 42°C. Khoảng từ 5.6°C đến 42°C được gọi là:", opts: ["Khoảng thuận lợi", "Giới hạn sinh thái về nhiệt độ của cá rô phi", "Khoảng chống chịu", "Điểm cực thuận"], a: 1, exp: "Đó là khoảng nhiệt độ mà cá rô phi có thể tồn tại được." },
    { q: "Nhiệt độ thuận lợi nhất cho sự sinh trưởng của cá rô phi (khoảng 30°C) được gọi là:", opts: ["Điểm gây chết dưới", "Điểm gây chết trên", "Điểm cực thuận (khoảng thuận lợi)", "Khoảng chống chịu"], a: 2, exp: "Tại điểm cực thuận, sinh vật phát triển mạnh nhất." },
    { q: "Cây ưa bóng thường có đặc điểm hình thái nào thích nghi?", opts: ["Lá dày, màu xanh nhạt, phiến nhỏ", "Phiến lá rộng, mỏng, màu xanh thẫm chứa nhiều lục lạp", "Lá biến thành gai", "Thân mọng nước"], a: 1, exp: "Lá mỏng, xanh thẫm giúp bắt nhận ánh sáng tán xạ trong bóng râm." },
    { q: "Sinh vật biến nhiệt là sinh vật có đặc điểm nhiệt độ cơ thể:", opts: ["Luôn ổn định 37°C", "Biến đổi phụ thuộc vào nhiệt độ môi trường ngoài", "Cao hơn môi trường ngoài 10°C", "Không phụ thuộc nhiệt độ ngoài"], a: 1, exp: "Cá, lưỡng cư, bò sát là động vật biến nhiệt." }
  ],
  part2: [
    {
      statement: "Về các loại môi trường sống của sinh vật:",
      sub: [
        { text: "Môi trường trên cạn gồm mặt đất và lớp khí quyển sát bề mặt Trái Đất.", a: true },
        { text: "Cây xanh quang hợp lấy nước và muối khoáng từ môi trường đất.", a: true },
        { text: "Cơ thể con người cũng là môi trường sống của nhiều loài vi sinh vật và giun sán ký sinh.", a: true },
        { text: "Tất cả các loài sinh vật trên Trái Đất chỉ có thể sống ở môi trường nước ngọt.", a: false }
      ],
      exp: "Ý d sai vì sinh vật phân bố ở cả 4 loại môi trường khắp Trái Đất."
    },
    {
      statement: "Về phân loại các nhân tố sinh thái:",
      sub: [
        { text: "Nhân tố sinh thái là tất cả những nhân tố môi trường có ảnh hưởng trực tiếp hoặc gián tiếp tới sinh vật.", a: true },
        { text: "Ánh sáng, nhiệt độ, độ ẩm và đất đá thuộc nhóm nhân tố sinh thái vô sinh.", a: true },
        { text: "Con người được xếp chung ngang hàng và không có ảnh hưởng gì khác so với các động vật khác.", a: false },
        { text: "Mối quan hệ con mồi - vật ăn thịt thuộc nhóm nhân tố sinh thái hữu sinh.", a: true }
      ],
      exp: "Ý c sai vì con người có vai trò chi phối và tác động mạnh mẽ nhất đến môi trường."
    },
    {
      statement: "Về giới hạn sinh thái của sinh vật:",
      sub: [
        { text: "Mỗi loài sinh vật có một giới hạn sinh thái nhất định đối với từng nhân tố môi trường.", a: true },
        { text: "Loài có giới hạn sinh thái càng rộng thì vùng phân bố của loài đó càng rộng.", a: true },
        { text: "Vượt ra ngoài giới hạn sinh thái (điểm gây chết), sinh vật sẽ bị suy yếu và chết.", a: true },
        { text: "Mọi loài sinh vật đều có giới hạn chịu đựng nhiệt độ hoàn toàn giống hệt nhau.", a: false }
      ],
      exp: "Ý d sai vì mỗi loài thích nghi với một giới hạn sinh thái nhiệt độ riêng biệt."
    },
    {
      statement: "Về sự thích nghi của thực vật với nhân tố ánh sáng:",
      sub: [
        { text: "Cây ưa sáng mọc ở nơi quang đãng, tán lá hẹp, phiến lá dày, màu xanh nhạt.", a: true },
        { text: "Cây ưa bóng thường mọc dưới tán rừng rậm rạp hoặc trong nhà râm mát.", a: true },
        { text: "Cây lá lốt, cây vạn niên thanh là những ví dụ điển hình của cây ưa bóng.", a: true },
        { text: "Nếu đem cây ưa bóng trồng ra ngoài bãi đất trống nắng gắt buổi trưa, cây sẽ quang hợp tốt hơn và phát triển vượt bậc.", a: false }
      ],
      exp: "Ý d sai vì ánh sáng quá mạnh sẽ làm cháy lá, phá hủy diệp lục của cây ưa bóng."
    }
  ],
  part3: [
    { q: "Môi trường sống của các loài giun đũa, giun kim ký sinh thuộc loại môi trường nào?", a: "Môi trường sinh vật", accept: ["sinh vat", "moi truong sinh vat"], exp: "Cơ thể vật chủ là môi trường sinh vật." },
    { q: "Nhân tố sinh thái nào được tách riêng biệt do có hoạt động cải tạo và phá hủy thiên nhiên to lớn?", a: "Con người", accept: ["người", "con nguoi"], exp: "Con người là nhân tố hữu sinh đặc biệt." },
    { q: "Khoảng giá trị của nhân tố sinh thái mà ở đó sinh vật phát triển thuận lợi nhất gọi là gì?", a: "Khoảng thuận lợi", accept: ["khoang thuan loi", "điểm cực thuận"], exp: "Khoảng thuận lợi giúp sinh vật phát triển tối ưu." },
    { q: "Động vật có nhiệt độ cơ thể không thay đổi theo nhiệt độ môi trường (như chim, thú) gọi là động vật gì?", a: "Động vật hằng nhiệt", accept: ["hằng nhiệt", "hang nhiet", "dong vat hang nhiet"], exp: "Chim và thú là động vật hằng nhiệt." }
  ]
};

const LESSON_42 = {
  id: 42,
  chapter: 8,
  title: "Quần thể sinh vật",
  keywords: ["Quần thể sinh vật", "Mật độ cá thể", "Tỉ lệ giới tính", "Thành phần tuổi", "Phân bố cá thể"],
  theory: "<h3>1. Khái niệm quần thể</h3><p>Tập hợp các cá thể <b>cùng loài</b>, cùng sinh sống trong một sinh cảnh xác định, vào thời điểm xác định và có khả năng giao phối sinh ra thế hệ sau.</p><h3>2. Các đặc trưng cơ bản</h3><ul><li><b>Mật độ cá thể:</b> Số cá thể trên một đơn vị diện tích/thể tích (đặc trưng quan trọng nhất).</li><li><b>Tỉ lệ giới tính:</b> Tỉ lệ đực/cái đảm bảo hiệu quả sinh sản.</li><li><b>Thành phần nhóm tuổi:</b> Trước sinh sản, đang sinh sản và sau sinh sản.</li><li><b>Phân bố:</b> Theo nhóm (phổ biến nhất), đồng đều hoặc ngẫu nhiên.</li></ul>",
  part1: [
    { q: "Quần thể sinh vật là tập hợp các cá thể có đặc điểm:", opts: ["Khác loài cùng sống trong một khu rừng", "Cùng loài, cùng sống trong một khoảng không gian và thời gian nhất định, có khả năng sinh sản", "Nuôi chung trong một chuồng nuôi hỗn hợp", "Cùng sống trên Trái Đất"], a: 1, exp: "Định nghĩa quần thể sinh vật." },
    { q: "Tập hợp sinh vật nào sau đây là một quần thể sinh vật?", opts: ["Tất cả các loài cá trong một cái ao", "Các con ếch đồng sống trong một ruộng lúa", "Các loài cây gỗ trong rừng Cúc Phương", "Đàn thú ăn cỏ trên đồng cỏ Savan"], a: 1, exp: "Cùng loài ếch đồng sống trong cùng không gian ruộng lúa." },
    { q: "Tập hợp nào dưới đây KHÔNG phải là một quần thể sinh vật?", opts: ["Rừng thông Đà Lạt", "Các con cá rô phi sống trong hồ Tây", "Các loài cỏ trên một thảo nguyên", "Bầy voi rừng Tánh Linh"], a: 2, exp: "Các loài cỏ gồm nhiều loài khác nhau, không phải một quần thể." },
    { q: "Đặc trưng nào được xem là đặc trưng cơ bản và quan trọng nhất của quần thể sinh vật?", opts: ["Tỉ lệ giới tính", "Mật độ cá thể", "Thành phần nhóm tuổi", "Kiểu phân bố"], a: 1, exp: "Mật độ quyết định mức độ sử dụng nguồn sống, tần số gặp gỡ và mức sinh sản." },
    { q: "Mật độ cá thể của quần thể là:", opts: ["Tổng số lượng cá thể trong tự nhiên", "Số lượng cá thể trên một đơn vị diện tích hay thể tích của quần thể", "Số cá thể đực so với cá thể cái", "Số lượng cá thể mới sinh ra"], a: 1, exp: "Định nghĩa mật độ cá thể." },
    { q: "Khi mật độ cá thể của quần thể tăng lên quá cao so với nguồn sống thì:", opts: ["Cạnh tranh cùng loài gay gắt, tỉ lệ tử vong tăng", "Các cá thể yêu thương hỗ trợ nhau nhiều hơn", "Tốc độ sinh sản tăng vọt", "Kích thước cá thể to gấp đôi"], a: 0, exp: "Mật độ quá cao dẫn đến cạnh tranh thức ăn, nơi ở, bệnh tật làm giảm số lượng cá thể." },
    { q: "Tỉ lệ giới tính của quần thể sinh vật thường xấp xỉ tỉ lệ nào ở giai đoạn trứng/sơ sinh?", opts: ["1 đực : 1 cái (1:1)", "1 đực : 3 cái", "2 đực : 1 cái", "1 đực : 5 cái"], a: 0, exp: "Tỉ lệ phân ly giới tính tự nhiên xấp xỉ 1:1." },
    { q: "Quần thể có cấu trúc tuổi gồm 3 nhóm tuổi sinh thái là:", opts: ["Tuổi sơ sinh, trưởng thành và già", "Tuổi trước sinh sản, tuổi sinh sản và tuổi sau sinh sản", "Tuổi ấu trùng, nhộng và bướm", "Tuổi mầm, chồi và lá"], a: 1, exp: "Phân loại theo khả năng sinh sản của sinh thái học." },
    { q: "Nếu một quần thể có số lượng cá thể thuộc nhóm tuổi trước sinh sản ít hơn nhiều so với nhóm tuổi sau sinh sản thì quần thể đó đang ở trạng thái nào?", opts: ["Quần thể đang phát triển", "Quần thể ổn định", "Quần thể đang suy thoái (già cỗi)", "Quần thể bùng nổ số lượng"], a: 2, exp: "Số lượng cá thể già chiếm đa số báo hiệu sự suy thoái." },
    { q: "Kiểu phân bố cá thể phổ biến nhất trong tự nhiên là kiểu nào?", opts: ["Phân bố đồng đều", "Phân bố theo nhóm", "Phân bố ngẫu nhiên", "Phân bố rải rác"], a: 1, exp: "Phân bố theo nhóm giúp sinh vật hỗ trợ nhau chống chọi điều kiện bất lợi." },
    { q: "Ý nghĩa của việc kiểm soát mật độ trong chăn nuôi và trồng trọt là:", opts: ["Cho phép cạnh tranh tối đa", "Đạt năng suất tối ưu, tận dụng tốt nguồn thức ăn và ánh sáng", "Làm giảm khả năng thụ phấn", "Để các cây tự che khuất nhau"], a: 1, exp: "Mật độ thích hợp giúp cây cối và vật nuôi tăng trưởng nhanh nhất." },
    { q: "Quan hệ hỗ trợ giữa các cá thể cùng loài mang lại lợi ích gì?", opts: ["Giúp kiếm ăn dễ hơn, chống kẻ thù và sinh sản tốt hơn", "Làm cạn kiệt thức ăn nhanh chóng", "Làm tăng nguy cơ bị ăn thịt", "Giảm khả năng sống sót"], a: 0, exp: "Hỗ trợ cùng loài giúp tăng hiệu quả bảo vệ và sinh tồn (hiệu quả nhóm)." }
  ],
  part2: [
    {
      statement: "Về các tiêu chuẩn xác định một quần thể sinh vật trong tự nhiên:",
      sub: [
        { text: "Các cá thể trong quần thể phải thuộc cùng một loài sinh học.", a: true },
        { text: "Các cá thể phải cùng sinh sống trong một sinh cảnh xác định vào cùng thời điểm.", a: true },
        { text: "Giữa các cá thể không cần có khả năng giao phối sinh con hữu thụ.", a: false },
        { text: "Các con cá nuôi ngẫu nhiên trong một chậu cảnh gia đình được coi là một quần thể tự nhiên.", a: false }
      ],
      exp: "Ý c sai vì bắt buộc phải có khả năng sinh sản tạo thế hệ mới; Ý d sai vì cá cảnh nuôi nhốt nhân tạo khác loài không phải quần thể tự nhiên."
    },
    {
      statement: "Về đặc trưng mật độ cá thể của quần thể:",
      sub: [
        { text: "Mật độ cá thể không cố định mà có thể thay đổi theo mùa, năm hoặc điều kiện môi trường.", a: true },
        { text: "Khi nguồn thức ăn dồi dào, điều kiện khí hậu ấm áp, mật độ quần thể thường có xu hướng tăng.", a: true },
        { text: "Trồng cây với mật độ quá dày giúp tăng năng suất trên mỗi hecta đất vô hạn độ.", a: false },
        { text: "Nuôi cá với mật độ quá dày dễ làm thiếu oxy hòa tan trong nước và phát sinh dịch bệnh.", a: true }
      ],
      exp: "Ý c sai vì trồng quá dày cây sẽ thiếu sáng, thiếu dinh dưỡng dẫn đến còi cọc giảm năng suất."
    },
    {
      statement: "Về các nhóm tuổi và tháp tuổi của quần thể:",
      sub: [
        { text: "Nhóm tuổi trước sinh sản có vai trò quyết định sự phát triển kích thước quần thể trong tương lai.", a: true },
        { text: "Tháp tuổi dạng phát triển có đáy tháp (nhóm tuổi trước sinh sản) rất rộng.", a: true },
        { text: "Tháp tuổi suy thoái có số cá thể nhóm tuổi sau sinh sản nhiều hơn nhóm tuổi trẻ.", a: true },
        { text: "Khai thác tài nguyên thủy sản triệt để cả cá con, cá mang trứng hoàn toàn không ảnh hưởng tới quần thể.", a: false }
      ],
      exp: "Ý d sai vì đánh bắt cá con làm suy thoái nguồn lợi thủy sản, quần thể không thể tự phục hồi."
    },
    {
      statement: "Về các mối quan hệ giữa các cá thể trong quần thể:",
      sub: [
        { text: "Hiện tượng liền rễ ở cây thông nhựa giúp các cây hỗ trợ nhau hút nước và muối khoáng.", a: true },
        { text: "Chó rừng săn mồi theo đàn giúp hạ gục được con mồi lớn hơn bản thân.", a: true },
        { text: "Hiện tượng cạnh tranh cùng loài là có hại hoàn toàn và dẫn đến diệt vong cả quần thể.", a: false },
        { text: "Cạnh tranh cùng loài giúp chọn lọc tự nhiên duy trì số lượng cá thể phù hợp với nguồn sống.", a: true }
      ],
      exp: "Ý c sai vì cạnh tranh cùng loài là động lực tiến hóa giúp loại bỏ cá thể yếu, giữ cân bằng số lượng."
    }
  ],
  part3: [
    { q: "Tập hợp các cá thể cùng loài sống trong không gian xác định có khả năng sinh sản gọi là gì?", a: "Quần thể sinh vật", accept: ["quần thể", "quan the sinh vat", "quan the"], exp: "Định nghĩa quần thể." },
    { q: "Đặc trưng nào thể hiện số lượng cá thể trên một đơn vị diện tích hoặc thể tích?", a: "Mật độ cá thể", accept: ["mật độ", "mat do ca the", "mat do"], exp: "Mật độ cá thể là đặc trưng cơ bản nhất." },
    { q: "Kiểu phân bố cá thể nào phổ biến nhất trong tự nhiên?", a: "Phân bố theo nhóm", accept: ["theo nhóm", "phan bo theo nhom"], exp: "Phân bố theo nhóm chiếm ưu thế trong tự nhiên." },
    { q: "Tỉ lệ số lượng giữa cá thể đực và cá thể cái trong quần thể được gọi là gì?", a: "Tỉ lệ giới tính", accept: ["ti le gioi tinh", "tỷ lệ giới tính"], exp: "Tỉ lệ giới tính đảm bảo tiềm năng sinh sản." }
  ]
};

const LESSON_43 = {
  id: 43,
  chapter: 8,
  title: "Quần xã sinh vật",
  keywords: ["Quần xã sinh vật", "Độ đa dạng", "Loài ưu thế", "Loài đặc trưng", "Khống chế sinh học"],
  theory: "<h3>1. Khái niệm quần xã</h3><p>Tập hợp các <b>quần thể sinh vật khác loài</b> cùng sống trong một không gian và thời gian xác định, gắn bó hữu cơ với nhau.</p><h3>2. Các đặc trưng cơ bản</h3><ul><li><b>Độ đa dạng:</b> Số lượng loài và số cá thể mỗi loài.</li><li><b>Loài ưu thế:</b> Đóng vai trò quan trọng, số lượng cá thể lớn hoặc hoạt động mạnh.</li><li><b>Loài đặc trưng:</b> Chỉ có ở một quần xã hoặc có số lượng vượt trội (cá cóc Tam Đảo).</li></ul><div class='theory-highlight'><b>Khống chế sinh học:</b> Số lượng loài này bị khống chế ở mức ổn định bởi loài khác qua quan hệ thiên địch.</div>",
  part1: [
    { q: "Quần xã sinh vật là tập hợp:", opts: ["Nhiều cá thể của cùng một loài sinh vật", "Nhiều quần thể sinh vật khác loài cùng sống trong một không gian và thời gian xác định", "Nhiều sinh vật nuôi nhốt trong thảo cầm viên", "Tất cả các sinh vật chết và hóa thạch"], a: 1, exp: "Định nghĩa quần xã sinh vật." },
    { q: "Tập hợp nào dưới đây là một ví dụ về quần xã sinh vật?", opts: ["Đàn bò gặm cỏ trên sườn đồi", "Tất cả các sinh vật sống trong một hồ nước tự nhiên", "Các cây cao su trong một nông trường", "Các con ốc bươu vàng trong ruộng lúa"], a: 1, exp: "Hồ nước có tảo, cá, tôm, ốc, vi sinh vật... khác loài sống chung." },
    { q: "Mức độ phong phú về số lượng loài và số cá thể của mỗi loài trong quần xã được gọi là:", opts: ["Độ thường gặp", "Độ đa dạng của quần xã", "Độ tập trung", "Mật độ cá thể"], a: 1, exp: "Độ đa dạng phản ánh độ phong phú thành phần loài." },
    { q: "Loài đóng vai trò quan trọng trong quần xã do số lượng nhiều, sinh khối lớn hoặc hoạt động mạnh gọi là:", opts: ["Loài đặc trưng", "Loài ngẫu nhiên", "Loài ưu thế", "Loài thứ yếu"], a: 2, exp: "Loài ưu thế chi phối cấu trúc và chức năng quần xã." },
    { q: "Loài chỉ có ở một quần xã xác định hoặc có số lượng vượt trội so với các loài khác gọi là:", opts: ["Loài ưu thế", "Loài đặc trưng", "Loài ngoại lai", "Loài chỉ thị"], a: 1, exp: "Loài đặc trưng là nét riêng biệt của quần xã (cá cóc Tam Đảo)." },
    { q: "Hiện tượng phân tầng của các loài thực vật trong rừng mưa nhiệt đới là sự thích nghi với nhân tố nào?", opts: ["Độ ẩm", "Ánh sáng", "Nhiệt độ", "Gió"], a: 1, exp: "Phân tầng từ tầng vượt tán, tầng tán, dưới tán đến thảm cỏ để tận dụng ánh sáng." },
    { q: "Mối quan hệ mà hai loài cùng có lợi và nhất thiết phải có nhau để tồn tại gọi là:", opts: ["Hội sinh", "Cộng sinh", "Ký sinh", "Hợp tác"], a: 1, exp: "Cộng sinh là quan hệ gắn bó khăng khít cùng có lợi (ví dụ địa y)." },
    { q: "Mối quan hệ giữa phong lan sống bám trên thân cây gỗ lớn là ví dụ của mối quan hệ:", opts: ["Cộng sinh", "Ký sinh", "Hội sinh", "Ức chế - cảm nhiễm"], a: 2, exp: "Phong lan có lợi (chỗ ở) còn cây gỗ không lợi cũng không hại (hội sinh)." },
    { q: "Mối quan hệ giữa giun đũa sống trong ruột người là quan hệ:", opts: ["Cộng sinh", "Ký sinh", "Con mồi - vật ăn thịt", "Cạnh tranh"], a: 1, exp: "Giun đũa lấy dinh dưỡng gây hại cho vật chủ (ký sinh)." },
    { q: "Hiện tượng số lượng cá thể của một loài bị kìm hãm ở mức nhất định bởi loài khác qua quan hệ dinh dưỡng gọi là:", opts: ["Cân bằng động", "Khống chế sinh học", "Thoái hóa giống", "Đột biến số lượng"], a: 1, exp: "Hiện tượng khống chế sinh học qua chuỗi dinh dưỡng." },
    { q: "Ứng dụng nào sau đây trong nông nghiệp dựa trên hiện tượng khống chế sinh học?", opts: ["Phun thuốc trừ sâu định kỳ hàng tuần", "Dùng ong mắt đỏ để tiêu diệt sâu đục thân lúa", "Đốt đồng ruộng sau thu hoạch", "Bón nhiều phân bón vô cơ"], a: 1, exp: "Dùng thiên địch ong mắt đỏ diệt sâu hại bảo vệ mùa màng an toàn." },
    { q: "Nếu loại bỏ hoàn toàn loài ưu thế ra khỏi quần xã thì:", opts: ["Quần xã phát triển thịnh vượng hơn", "Cấu trúc quần xã bị biến đổi mạnh mẽ, có thể dẫn đến suy thoái", "Không có ảnh hưởng gì", "Các loài khác lập tức biến mất hết"], a: 1, exp: "Loài ưu thế giữ vai trò trụ cột nên khi mất đi sẽ làm xáo trộn toàn bộ quần xã." }
  ],
  part2: [
    {
      statement: "Về các đặc trưng về thành phần loài trong quần xã sinh vật:",
      sub: [
        { text: "Một quần xã ổn định thường có độ đa dạng loài cao và lưới thức ăn phức tạp.", a: true },
        { text: "Cá cóc ở vườn quốc gia Tam Đảo là ví dụ tiêu biểu của loài đặc trưng.", a: true },
        { text: "Rừng dừa Bến Tre có dừa là loài ưu thế đồng thời là loài đặc trưng.", a: true },
        { text: "Tất cả các loài trong quần xã đều có số lượng cá thể bằng chằn chặn như nhau.", a: false }
      ],
      exp: "Ý d sai vì mỗi loài có mật độ và số lượng khác nhau tùy bậc dinh dưỡng."
    },
    {
      statement: "Về sự phân bố cá thể trong không gian của quần xã:",
      sub: [
        { text: "Rừng rậm nhiệt đới có cấu trúc phân tầng thẳng đứng rõ rệt từ cây gỗ cao đến cây ưa bóng sát mặt đất.", a: true },
        { text: "Sự phân tầng giúp các loài sinh vật tận dụng tối đa nguồn sống như ánh sáng và không gian.", a: true },
        { text: "Sinh vật dưới đáy biển sâu có thể phân bố theo chiều ngang từ ven bờ ra khơi xa.", a: true },
        { text: "Sự phân bố cá thể trong quần xã chỉ phụ thuộc duy nhất vào nhân tố con người.", a: false }
      ],
      exp: "Ý d sai vì phân bố phụ thuộc chủ yếu vào các nhân tố vô sinh tự nhiên như ánh sáng, nhiệt độ, chất nền."
    },
    {
      statement: "Về các mối quan hệ hỗ trợ giữa các loài trong quần xã:",
      sub: [
        { text: "Cộng sinh giữa nấm và tảo tạo thành địa y là mối quan hệ bắt buộc của cả hai loài.", a: true },
        { text: "Vi khuẩn nốt sần sống cộng sinh với rễ cây họ Đậu giúp cố định đạm cho cây.", a: true },
        { text: "Quan hệ hội sinh đem lại lợi ích cho một loài, còn loài kia hoàn toàn không bị tổn hại.", a: true },
        { text: "Chim sáo bắt ve bét trên lưng trâu rừng là mối quan hệ ký sinh gây hại cho trâu.", a: false }
      ],
      exp: "Ý d sai vì đây là quan hệ hợp tác cùng có lợi giữa sáo và trâu."
    },
    {
      statement: "Về hiện tượng khống chế sinh học và ứng dụng thực tiễn:",
      sub: [
        { text: "Số lượng thỏ tăng lên sẽ làm số lượng cáo (động vật ăn thịt thỏ) tăng theo sau đó.", a: true },
        { text: "Khống chế sinh học giúp duy trì trạng thái cân bằng sinh thái trong quần xã tự nhiên.", a: true },
        { text: "Sử dụng thiên địch phòng trừ sâu hại thay thế hóa chất giúp bảo vệ môi trường và nông sản sạch.", a: true },
        { text: "Lạm dụng thuốc trừ sâu hóa học giúp bảo tồn tối đa các loài thiên địch có ích trong ruộng lúa.", a: false }
      ],
      exp: "Ý d sai vì thuốc trừ sâu hóa học tiêu diệt cả sâu hại lẫn thiên địch có ích."
    }
  ],
  part3: [
    { q: "Tập hợp các quần thể sinh vật khác loài cùng sống trong sinh cảnh xác định gọi là gì?", a: "Quần xã sinh vật", accept: ["quần xã", "quan xa sinh vat", "quan xa"], exp: "Định nghĩa quần xã sinh vật." },
    { q: "Loài chỉ có ở một quần xã nhất định hoặc có số lượng nhiều vượt trội gọi là loài gì?", a: "Loài đặc trưng", accept: ["loai dac trung"], exp: "Loài đặc trưng thể hiện bản sắc của quần xã." },
    { q: "Hiện tượng số lượng cá thể của một loài bị kìm hãm ở mức ổn định bởi loài khác gọi là gì?", a: "Khống chế sinh học", accept: ["khong che sinh hoc"], exp: "Khống chế sinh học qua quan hệ sinh thái." },
    { q: "Địa y là kết quả của mối quan hệ cộng sinh giữa nấm sợi và sinh vật nào?", a: "Tảo", accept: ["tảo lục", "tao", "vi khuẩn lam"], exp: "Địa y do nấm và tảo (hoặc vi khuẩn lam) cộng sinh tạo thành." }
  ]
};

const LESSON_44 = {
  id: 44,
  chapter: 8,
  title: "Hệ sinh thái",
  keywords: ["Hệ sinh thái", "Sinh cảnh", "Sinh vật sản xuất", "Sinh vật tiêu thụ", "Sinh vật phân giải", "Chuỗi thức ăn", "Lưới thức ăn"],
  theory: "<h3>1. Khái niệm hệ sinh thái</h3><p>Bao gồm <b>quần xã sinh vật</b> và <b>môi trường vô sinh (sinh cảnh)</b> tác động qua lại tạo thành một thể thống nhất.</p><h3>2. Cấu trúc hệ sinh thái</h3><ul><li>Sinh cảnh (yếu tố vô sinh: đất, nước, khí hậu,...).</li><li>Sinh vật sản xuất (thực vật, tảo quang hợp).</li><li>Sinh vật tiêu thụ (động vật ăn thực vật, động vật ăn thịt).</li><li>Sinh vật phân giải (vi khuẩn, nấm hoại sinh).</li></ul><h3>3. Chuỗi và lưới thức ăn</h3><p>Chuỗi thức ăn là dãy các loài có quan hệ dinh dưỡng. Nhiều chuỗi có mắt xích chung tạo thành lưới thức ăn.</p>",
  part1: [
    { q: "Hệ sinh thái bao gồm hai thành phần chính cấu tạo nên là:", opts: ["Quần xã sinh vật và sinh vật sản xuất", "Quần xã sinh vật và môi trường vô sinh (sinh cảnh)", "Sinh vật tiêu thụ và chuỗi thức ăn", "Đất, nước và không khí"], a: 1, exp: "Hệ sinh thái = Quần xã sinh vật + Sinh cảnh." },
    { q: "Sinh vật nào sau đây đóng vai trò là sinh vật sản xuất trong hệ sinh thái?", opts: ["Cây bàng và tảo lục", "Con hươu ăn cỏ", "Nấm hoại sinh", "Hổ và báo hoa mai"], a: 0, exp: "Thực vật và tảo có khả năng quang hợp tạo chất hữu cơ." },
    { q: "Sinh vật nào sau đây là sinh vật tiêu thụ bậc 1 trong chuỗi thức ăn?", opts: ["Cây lúa", "Châu chấu ăn lá lúa", "Ếch đồng ăn châu chấu", "Rắn ăn ếch"], a: 1, exp: "Động vật ăn trực tiếp sinh vật sản xuất là sinh vật tiêu thụ bậc 1." },
    { q: "Nhóm sinh vật nào có vai trò phân hủy xác sinh vật và chất hữu cơ thành chất vô cơ tuần hoàn lại môi trường?", opts: ["Sinh vật sản xuất", "Sinh vật tiêu thụ bậc 2", "Sinh vật phân giải (vi khuẩn, nấm)", "Thực vật phù du"], a: 2, exp: "Sinh vật phân giải khép kín chu trình vật chất." },
    { q: "Chuỗi thức ăn mở đầu bằng sinh vật sản xuất thường có thứ tự nào sau đây là ĐÚNG?", opts: ["Sinh vật sản xuất → Sinh vật tiêu thụ bậc 1 → Sinh vật tiêu thụ bậc 2 → ...", "Sinh vật tiêu thụ → Sinh vật sản xuất → Sinh vật phân giải", "Sinh vật phân giải → Sinh vật sản xuất → Động vật ăn thịt", "Động vật ăn cỏ → Thực vật → Động vật ăn thịt"], a: 0, exp: "Bắt đầu từ sinh vật sản xuất qua các bậc tiêu thụ tiếp theo." },
    { q: "Tập hợp nhiều chuỗi thức ăn có các mắt xích chung trong một hệ sinh thái được gọi là:", opts: ["Bậc dinh dưỡng", "Lưới thức ăn", "Tháp sinh thái", "Dòng năng lượng"], a: 1, exp: "Định nghĩa lưới thức ăn." },
    { q: "Hệ sinh thái nào sau đây có độ đa dạng sinh học và năng suất sinh học lớn nhất trên cạn?", opts: ["Hệ sinh thái sa mạc cát", "Hệ sinh thái rừng mưa nhiệt đới", "Hệ sinh thái đồng rêu hàn đới", "Hệ sinh thái thảo nguyên"], a: 1, exp: "Rừng mưa nhiệt đới nóng ẩm quanh năm có đa dạng sinh học cao nhất." },
    { q: "Hệ sinh thái nào dưới đây là hệ sinh thái nhân tạo do con người tạo ra?", opts: ["Rừng nguyên sinh Cúc Phương", "Rạn san hô biển Nha Trang", "Hồ tự nhiên Ba Bể", "Ruộng bậc thang trồng lúa nước"], a: 3, exp: "Ruộng lúa do con người canh tác và chăm sóc." },
    { q: "So với hệ sinh thái tự nhiên, hệ sinh thái nhân tạo có đặc điểm nào?", opts: ["Độ đa dạng sinh học rất cao", "Lưới thức ăn vô cùng phức tạp", "Tính ổn định thấp, dễ bị sâu bệnh và phụ thuộc vào con người", "Không cần cung cấp năng lượng từ bên ngoài"], a: 2, exp: "Hệ sinh thái nhân tạo đơn loài, kém bền vững, cần con người bón phân tưới nước." },
    { q: "Trong chuỗi thức ăn: Cỏ → Thỏ → Cáo → Vi khuẩn phân giải, mắt xích sinh vật tiêu thụ bậc 2 là loài nào?", opts: ["Cỏ", "Thỏ", "Cáo", "Vi khuẩn"], a: 2, exp: "Cỏ (sản xuất) → Thỏ (tiêu thụ bậc 1) → Cáo (tiêu thụ bậc 2)." },
    { q: "Dòng năng lượng truyền trong hệ sinh thái có đặc điểm:", opts: ["Tuần hoàn kín lặp đi lặp lại", "Truyền một chiều từ sinh vật sản xuất lên các bậc cao hơn và tiêu hao dần qua nhiệt", "Tăng dần qua các bậc dinh dưỡng", "Chảy ngược từ động vật ăn thịt về cây xanh"], a: 1, exp: "Năng lượng đi một chiều và thất thoát qua hô hấp, bài tiết, nhiệt." },
    { q: "Biện pháp nào giúp nâng cao độ bền vững và ổn định của một hệ sinh thái nông nghiệp?", opts: ["Chỉ độc canh một giống cây duy nhất suốt nhiều năm", "Trồng xen canh, luân canh và nuôi kết hợp đa dạng loài (mô hình V.A.C)", "Phun hóa chất diệt trừ toàn bộ côn trùng", "Không bổ sung bất kỳ chất dinh dưỡng nào"], a: 1, exp: "Xen canh, luân canh làm tăng mắt xích lưới thức ăn giúp sinh thái ổn định hơn." }
  ],
  part2: [
    {
      statement: "Về các thành phần cấu trúc của hệ sinh thái hoàn chỉnh:",
      sub: [
        { text: "Sinh cảnh gồm tất cả các yếu tố vô sinh như khí hậu, thổ nhưỡng, nước, ánh sáng.", a: true },
        { text: "Thực vật quang hợp được gọi là sinh vật tự dưỡng (sinh vật sản xuất).", a: true },
        { text: "Động vật ăn cỏ và động vật ăn thịt đều được xếp vào nhóm sinh vật tiêu thụ.", a: true },
        { text: "Nếu thiếu nhóm sinh vật phân giải, chất hữu cơ vẫn tự tiêu biến hoàn toàn trong một ngày.", a: false }
      ],
      exp: "Ý d sai vì nếu thiếu sinh vật phân giải xác sinh vật sẽ ứ đọng lại, chu trình vật chất bị tắc nghẽn."
    },
    {
      statement: "Về chuỗi thức ăn và lưới thức ăn trong hệ sinh thái:",
      sub: [
        { text: "Mỗi loài trong chuỗi thức ăn đóng vai trò là một mắt xích dinh dưỡng.", a: true },
        { text: "Một loài sinh vật có thể tham gia vào nhiều chuỗi thức ăn khác nhau trong cùng một hệ sinh thái.", a: true },
        { text: "Quần xã càng đa dạng về thành phần loài thì lưới thức ăn càng phức tạp và bền vững.", a: true },
        { text: "Trong một chuỗi thức ăn, năng lượng được bảo toàn 100% khi truyền từ bậc dưới lên bậc trên.", a: false }
      ],
      exp: "Ý d sai vì phần lớn năng lượng (khoảng 90%) bị thất thoát qua nhiệt và chất thải ở mỗi bậc."
    },
    {
      statement: "Về sự khác nhau giữa hệ sinh thái tự nhiên và hệ sinh thái nhân tạo:",
      sub: [
        { text: "Rừng ngập mặn Cần Giờ là một hệ sinh thái tự nhiên có chuỗi thức ăn phức tạp.", a: true },
        { text: "Hệ sinh thái đồng ruộng cần sự bổ sung phân bón, nước tưới và công chăm sóc từ con người.", a: true },
        { text: "Hệ sinh thái tự nhiên có khả năng tự phục hồi và tự điều chỉnh cao hơn hệ sinh thái nhân tạo.", a: true },
        { text: "Hệ sinh thái nhân tạo hoàn toàn không có sự tham gia của sinh vật phân giải.", a: false }
      ],
      exp: "Ý d sai vì đất ruộng vườn luôn chứa vô số nấm và vi khuẩn phân giải."
    },
    {
      statement: "Về sự truyền năng lượng và vật chất trong hệ sinh thái:",
      sub: [
        { text: "Nguồn năng lượng khởi đầu cho toàn bộ hệ sinh thái trên Trái Đất là năng lượng ánh sáng mặt trời.", a: true },
        { text: "Vật chất (các nguyên tố C, N, P, H2O,...) được tuần hoàn liên tục giữa sinh vật và môi trường.", a: true },
        { text: "Năng lượng được sinh vật sử dụng và cuối cùng thoát ra ngoài vũ trụ dưới dạng nhiệt.", a: true },
        { text: "Hiệu suất sinh thái ở mỗi bậc dinh dưỡng thường đạt xấp xỉ 90% đến 100%.", a: false }
      ],
      exp: "Ý d sai vì hiệu suất sinh thái chỉ đạt khoảng 10% (90% thất thoát)."
    }
  ],
  part3: [
    { q: "Hệ thống bao gồm quần xã sinh vật và môi trường vô sinh của nó được gọi là gì?", a: "Hệ sinh thái", accept: ["he sinh thai"], exp: "Định nghĩa hệ sinh thái." },
    { q: "Nhóm sinh vật có khả năng tự tổng hợp chất hữu cơ từ năng lượng ánh sáng mặt trời là gì?", a: "Sinh vật sản xuất", accept: ["thực vật", "sinh vat san xuat"], exp: "Sinh vật sản xuất khởi đầu chuỗi thức ăn." },
    { q: "Tập hợp nhiều chuỗi thức ăn có mắt xích chung trong hệ sinh thái gọi là gì?", a: "Lưới thức ăn", accept: ["luoi thuc an"], exp: "Lưới thức ăn mô tả mối quan hệ dinh dưỡng đa chiều." },
    { q: "Nguồn năng lượng ban đầu cung cấp cho hầu hết các hệ sinh thái trên Trái Đất là năng lượng gì?", a: "Năng lượng mặt trời", accept: ["mặt trời", "ánh sáng mặt trời", "nang luong mat troi"], exp: "Ánh sáng mặt trời là nguồn năng lượng sơ cấp." }
  ]
};

const LESSON_45 = {
  id: 45,
  chapter: 8,
  title: "Sinh quyển",
  keywords: ["Khái niệm sinh quyển", "Giới hạn sinh quyển", "Khu sinh học", "Biom trên cạn", "Biom nước"],
  theory: "<h3>1. Khái niệm và giới hạn của sinh quyển</h3><p><b>Sinh quyển</b> là toàn bộ lớp vỏ Trái Đất có sự sống. Gồm: Tầng đối lưu của khí quyển, toàn bộ thủy quyển và phần trên lớp vỏ phong hóa của thạch quyển.</p><h3>2. Các khu sinh học (Biom)</h3><ul><li><b>Biom trên cạn:</b> Tundra (đồng rêu), Taiga (rừng lá kim), rừng rụng lá ôn đới, rừng nhiệt đới, thảo nguyên, sa mạc.</li><li><b>Biom nước ngọt:</b> Nước đứng (hồ, ao), nước chảy (sông, suối).</li><li><b>Biom nước mặn:</b> Ven bờ, rạn san hô, khơi xa và vực thẳm.</li></ul>",
  part1: [
    { q: "Sinh quyển là quyển của Trái Đất có đặc điểm nào sau đây?", opts: ["Là quyển chỉ chứa đất đá không có sinh vật", "Là toàn bộ khu vực trên Trái Đất có sinh vật sinh sống", "Là tầng ozon bảo vệ khí quyển", "Là phần tâm Trái Đất có nhiệt độ cao"], a: 1, exp: "Định nghĩa sinh quyển." },
    { q: "Giới hạn của sinh quyển bao gồm các phần nào sau đây?", opts: ["Tâm Trái Đất và tầng điện ly", "Phía dưới khí quyển, toàn bộ thủy quyển và phần trên thạch quyển", "Chỉ gồm bề mặt các lục địa", "Chỉ gồm các đại dương"], a: 1, exp: "Nơi nào có điều kiện tồn tại sự sống thì nơi đó thuộc sinh quyển." },
    { q: "Giới hạn trên của sinh quyển chạm tới tầng nào của khí quyển?", opts: ["Tầng bình lưu (gần nơi có lớp ozon)", "Tầng đối lưu", "Tầng ngoài không gian vũ trụ", "Tầng nhiệt"], a: 0, exp: "Giới hạn trên đạt đến lớp ozon của tầng bình lưu (khoảng 20-25km)." },
    { q: "Giới hạn dưới của sinh quyển ở phần thủy quyển sâu tới đâu?", opts: ["Độ sâu 200m", "Độ sâu 1000m", "Đáy của các vực thẳm đại dương (đến hơn 11.000m)", "Chỉ ở tầng nước mặt có ánh sáng"], a: 2, exp: "Vi khuẩn và sinh vật chịu áp suất cao sống ở tận đáy rãnh Mariana sâu hơn 11km." },
    { q: "Khu sinh học (Biom) là gì?", opts: ["Một chậu nuôi cấy vi khuẩn", "Vùng địa lý sinh thái rộng lớn đặc trưng bởi khí hậu, thảm thực vật và động vật ưu thế", "Một cánh đồng nhân tạo", "Một phòng thí nghiệm sinh học"], a: 1, exp: "Định nghĩa khu sinh học (Biom)." },
    { q: "Khu sinh học nào có khí hậu băng giá quanh năm, mùa đông rất dài và thảm thực vật chủ yếu là rêu, địa y?", opts: ["Rừng lá kim Taiga", "Đồng rêu hàn đới (Tundra)", "Thảo nguyên ôn đới", "Sa mạc"], a: 1, exp: "Tundra ở cực bắc có khí hậu lạnh khắc nghiệt." },
    { q: "Khu sinh học rừng Taiga phương Bắc đặc trưng bởi loại cây nào?", opts: ["Cây rụng lá theo mùa", "Cây lá kim (thông, tùng, linh sam)", "Cây bụi gai", "Rêu và địa y"], a: 1, exp: "Taiga là dải rừng lá kim bạt ngàn ở cận Bắc cực." },
    { q: "Khu sinh học nào có lượng mưa rất ít (dưới 250mm/năm), nhiệt độ ngày đêm chênh lệch cực lớn?", opts: ["Rừng mưa nhiệt đới", "Đồng rêu hàn đới", "Sa mạc và bán sa mạc", "Rừng lá rộng ôn đới"], a: 2, exp: "Sa mạc cực kỳ khô hạn, thực vật tiêu biểu là xương rồng." },
    { q: "Hồ, ao, đầm lầy thuộc loại khu sinh học nước ngọt nào?", opts: ["Vùng nước đứng", "Vùng nước chảy", "Vùng cửa sông", "Vùng triều"], a: 0, exp: "Hồ và ao là các thủy vực nước đứng." },
    { q: "Sông, suối là các ví dụ điển hình của loại khu sinh học nước ngọt nào?", opts: ["Vùng nước đứng", "Vùng nước chảy", "Vùng biển khơi", "Rạn san hô"], a: 1, exp: "Nước sông suối có dòng chảy liên tục." },
    { q: "Hệ sinh thái rạn san hô ở vùng biển nhiệt đới có đặc điểm nổi bật nào?", opts: ["Rất nghèo nàn sinh vật", "Được ví như 'rừng mưa của đại dương' với độ đa dạng sinh học cực kỳ phong phú", "Không có ánh sáng", "Nước hoàn toàn là nước ngọt"], a: 1, exp: "Rạn san hô là nơi trú ẩn và sinh sôi của hàng ngàn loài hải sản." },
    { q: "Nhân tố nào sau đây quyết định chủ yếu đến sự phân bố của các khu sinh học trên cạn?", opts: ["Khí hậu (nhiệt độ và lượng mưa)", "Độ mặn của nước biển", "Sự xuất hiện của núi lửa", "Áp suất khí quyển"], a: 0, exp: "Nhiệt độ và lượng mưa phân bố theo vĩ độ quyết định đặc tính Biom trên cạn." }
  ],
  part2: [
    {
      statement: "Về cấu trúc và giới hạn không gian của sinh quyển:",
      sub: [
        { text: "Sinh quyển bao trùm một lớp mỏng vỏ ngoài của Trái Đất có sự sống.", a: true },
        { text: "Sinh vật tập trung dày đặc nhất ở bề mặt đất và tầng nước mặt dày khoảng 200m của biển khơi.", a: true },
        { text: "Tâm Trái Đất chứa nhiều dung nham nóng đỏ cũng là một phần trung tâm của sinh quyển.", a: false },
        { text: "Bào tử nấm và vi khuẩn có thể bay lơ lửng ở độ cao hàng chục kilômét trong khí quyển.", a: true }
      ],
      exp: "Ý c sai vì tâm Trái Đất nhiệt độ hàng nghìn độ C không thể có sinh vật sống."
    },
    {
      statement: "Về các khu sinh học (Biom) trên cạn:",
      sub: [
        { text: "Từ xích đạo về hai cực lần lượt gặp: rừng nhiệt đới, rừng ôn đới, rừng taiga và đồng rêu hàn đới.", a: true },
        { text: "Động vật ở sa mạc thường hoạt động vào ban đêm để tránh cái nóng gay gắt ban ngày.", a: true },
        { text: "Rừng lá kim Taiga là nơi có số lượng loài thực vật đa dạng nhất trên hành tinh.", a: false },
        { text: "Rừng mưa nhiệt đới có thảm thực vật nhiều tầng và cây thường xanh quanh năm.", a: true }
      ],
      exp: "Ý c sai vì rừng nhiệt đới mới là nơi đa dạng nhất (Taiga thành phần loài khá đơn điệu)."
    },
    {
      statement: "Về các khu sinh học dưới nước:",
      sub: [
        { text: "Khu sinh học nước ngọt gồm khu sinh học nước đứng và khu sinh học nước chảy.", a: true },
        { text: "Vùng nước biển khơi chia thành tầng mặt có ánh sáng và tầng đáy tối tăm sâu thẳm.", a: true },
        { text: "Vùng cửa sông là nơi tiếp giáp nước ngọt và nước mặn (nước lợ) có năng suất sinh học cao.", a: true },
        { text: "Ở đáy biển sâu hàng nghìn mét không có ánh sáng thì hoàn toàn không có bất kỳ dạng sống nào tồn tại.", a: false }
      ],
      exp: "Ý d sai vì ở đáy biển sâu có các loài cá phát quang, giun biển quanh miệng phun thủy nhiệt."
    },
    {
      statement: "Về vai trò của sinh quyển đối với Trái Đất:",
      sub: [
        { text: "Sinh quyển tham gia điều hòa thành phần khí quyển thông qua quang hợp và hô hấp.", a: true },
        { text: "Thực vật giữ đất, chống xói mòn và điều hòa vòng tuần hoàn nước trên Trái Đất.", a: true },
        { text: "Hoạt động phát triển công nghiệp của con người hiện đang đe dọa sự toàn vẹn của nhiều khu sinh học.", a: true },
        { text: "Sinh quyển có thể tồn tại mãi mãi tươi tốt mà không cần bất kỳ sự bảo vệ nào từ con người.", a: false }
      ],
      exp: "Ý d sai vì tác động tiêu cực của con người đang làm ô nhiễm và suy thoái sinh quyển nhanh chóng."
    }
  ],
  part3: [
    { q: "Quyển của Trái Đất bao gồm toàn bộ các khu vực có sinh vật sinh sống gọi là gì?", a: "Sinh quyển", accept: ["sinh quyen"], exp: "Sinh quyển là nơi có sự sống trên Trái Đất." },
    { q: "Khu sinh học cận Bắc cực với thảm thực vật chủ yếu là rêu và địa y có tên quốc tế là gì?", a: "Tundra", accept: ["đồng rêu", "dong reu", "tun-đra"], exp: "Đồng rêu hàn đới (Tundra)." },
    { q: "Dải rừng lá kim bạt ngàn ở phương Bắc có tên gọi là gì?", a: "Taiga", accept: ["rừng taiga", "rừng lá kim", "tai-ga"], exp: "Rừng lá kim Taiga." },
    { q: "Hai yếu tố khí hậu nào quan trọng nhất quyết định sự phân bố các khu sinh học trên cạn?", a: "Nhiệt độ và lượng mưa", accept: ["nhiệt độ, lượng mưa", "nhiet do va luong mua"], exp: "Nhiệt độ và lượng mưa chi phối thảm thực vật." }
  ]
};

const LESSON_46 = {
  id: 46,
  chapter: 8,
  title: "Cân bằng tự nhiên",
  keywords: ["Cân bằng tự nhiên", "Cơ chế tự điều chỉnh", "Mất cân bằng sinh thái", "Bảo vệ cân bằng"],
  theory: "<h3>1. Khái niệm cân bằng tự nhiên</h3><p>Trạng thái ổn định tương đối về số lượng cá thể của các quần thể trong hệ sinh thái phù hợp với khả năng cung cấp nguồn sống của môi trường.</p><h3>2. Cơ chế duy trì</h3><p>Thông qua chuỗi, lưới thức ăn, quan hệ cạnh tranh, hỗ trợ và khống chế sinh học.</p><h3>3. Nguyên nhân gây mất cân bằng</h3><ul><li>Yếu tố tự nhiên: Thiên tai, hạn hán, lũ lụt, núi lửa,...</li><li>Yếu tố con người: Phá rừng, săn bắt quá mức, xả thải gây ô nhiễm, du nhập sinh vật ngoại lai.</li></ul>",
  part1: [
    { q: "Cân bằng tự nhiên trong hệ sinh thái là trạng thái:", opts: ["Số lượng cá thể luôn tăng lên không ngừng", "Số lượng cá thể các loài ổn định phù hợp với khả năng cung cấp nguồn sống của môi trường", "Tất cả các loài sinh vật săn mồi đều bị tiêu diệt", "Không còn mối quan hệ cạnh tranh nào"], a: 1, exp: "Định nghĩa trạng thái cân bằng tự nhiên." },
    { q: "Cơ chế chính giúp hệ sinh thái tự duy trì trạng thái cân bằng là:", opts: ["Sự tự điều chỉnh thông qua các mối quan hệ dinh dưỡng và sinh thái giữa các loài", "Sự phun hóa chất của con người", "Sự di cư của toàn bộ động vật", "Thời tiết luôn không đổi"], a: 0, exp: "Hệ sinh thái tự điều chỉnh qua cơ chế con mồi - vật ăn thịt và khống chế sinh học." },
    { q: "Khi số lượng sâu ăn lá lúa tăng đột biến, đàn chim sâu trong ruộng lúa sẽ phản ứng thế nào?", opts: ["Số lượng chim sâu giảm đi", "Số lượng chim sâu tăng lên do có nhiều thức ăn, sau đó kìm hãm số lượng sâu giảm trở lại", "Chim sâu bỏ đi nơi khác", "Chim sâu chuyển sang ăn lúa"], a: 1, exp: "Nhiều mồi làm tăng số lượng chim ăn sâu, đưa sâu về mức cân bằng." },
    { q: "Hành động nào sau đây của con người là nguyên nhân trực tiếp làm mất cân bằng tự nhiên?", opts: ["Trồng cây gây rừng", "Khai thác vàng trái phép tàn phá rừng đầu nguồn và ô nhiễm nguồn nước", "Xử lý nước thải trước khi xả ra sông", "Sử dụng chế phẩm sinh học bảo vệ thực vật"], a: 1, exp: "Phá rừng và xả hóa chất độc hại phá vỡ hệ sinh thái." },
    { q: "Việc săn bắt triệt để các loài thú ăn thịt đầu bảng (như hổ, báo, sói) trong rừng sẽ dẫn đến hậu quả gì?", opts: ["Rừng trở nên an toàn và tốt tươi hơn", "Động vật ăn cỏ tăng quá mức, gặm trụi thực vật dẫn đến xói mòn và suy kiệt rừng", "Không có tác động gì", "Động vật ăn cỏ sẽ tự chết hết"], a: 1, exp: "Mất thú săn mồi làm động vật ăn cỏ bùng nổ phá hủy thảm thực vật." },
    { q: "Sinh vật ngoại lai xâm hại (như ốc bươu vàng, rùa tai đỏ, cây mai dương) gây hại cho hệ sinh thái bản địa vì:", opts: ["Chúng quá nhút nhát", "Chúng sinh sản nhanh, cạnh tranh gay gắt thức ăn và nơi ở mà không có thiên địch tự nhiên kiểm soát", "Chúng mang lại nhiều lợi ích kinh tế", "Chúng chỉ ăn rác thải"], a: 1, exp: "Thiếu thiên địch kiểm soát, loài ngoại lai lấn át tiêu diệt sinh vật bản địa." },
    { q: "Hiện tượng nào sau đây là do nguyên nhân thiên nhiên gây mất cân bằng sinh thái tạm thời?", opts: ["Xây dựng đập thủy điện tràn lan", "Cháy rừng do sét đánh trong mùa khô hạn", "Đánh cá bằng thuốc nổ và kích điện", "Xả trộm nước thải công nghiệp"], a: 1, exp: "Sét đánh gây cháy rừng là thảm họa tự nhiên." },
    { q: "Hiện tượng sa mạc hóa đất đai thường là hệ quả nghiêm trọng của việc:", opts: ["Trồng nhiều cây xanh", "Chặt phá rừng phòng hộ và chăn thả gia súc quá mức trên đất dốc", "Bảo tồn thiên nhiên", "Tưới tiêu khoa học"], a: 1, exp: "Mất thảm thực vật che phủ làm đất bị rửa trôi thoái hóa thành sa mạc." },
    { q: "Hệ sinh thái nào sau đây có khả năng tự phục hồi và duy trì cân bằng tự nhiên cao nhất?", opts: ["Rừng mưa nhiệt đới nguyên sinh", "Cánh đồng ngô độc canh", "Bể cá thủy sinh mini", "Vườn rau thủy canh"], a: 0, exp: "Độ đa dạng sinh học càng cao thì khả năng tự điều chỉnh cân bằng càng lớn." },
    { q: "Biện pháp nào sau đây giúp khôi phục trạng thái cân bằng tự nhiên đã bị suy thoái?", opts: ["Trồng rừng phục hồi và thiết lập các khu bảo tồn thiên nhiên", "Tiếp tục khai thác gỗ quý", "Đưa thêm nhiều loài động vật lạ từ nước ngoài thả vào rừng", "Lấp các vùng đất ngập nước làm khu đô thị"], a: 0, exp: "Phục hồi sinh cảnh rừng và bảo vệ nghiêm ngặt các loài quý hiếm." },
    { q: "Vai trò của mỗi học sinh trong việc duy trì cân bằng tự nhiên là:", opts: ["Không tham gia mua bán tiêu thụ động vật hoang dã, tích cực trồng và chăm sóc cây xanh", "Đi săn bắt chim về nuôi chơi", "Bẻ cành cây công viên", "Cổ vũ ăn thịt thú rừng"], a: 0, exp: "Nói không với tiêu thụ động vật hoang dã và trồng cây xanh." },
    { q: "Khái niệm 'khả năng tự điều chỉnh' của hệ sinh thái đồng nghĩa với:", opts: ["Cân bằng tĩnh không thay đổi", "Cân bằng động, số lượng cá thể dao động quanh vị trí cân bằng", "Sự tuyệt chủng vĩnh viễn", "Chỉ phụ thuộc vào con người"], a: 1, exp: "Cân bằng tự nhiên là cân bằng động linh hoạt." }
  ],
  part2: [
    {
      statement: "Về trạng thái cân bằng tự nhiên trong hệ sinh thái:",
      sub: [
        { text: "Trong hệ sinh thái cân bằng, số lượng cá thể của mỗi quần thể luôn luôn cố định bất biến từng ngày.", a: false },
        { text: "Cân bằng tự nhiên là cân bằng động, số lượng cá thể dao động quanh một giá trị trung bình tối ưu.", a: true },
        { text: "Tỉ lệ giữa sinh vật sản xuất, sinh vật tiêu thụ và sinh vật phân giải được duy trì hài hòa.", a: true },
        { text: "Nếu nguồn sống của môi trường tăng lên, sức chứa của hệ sinh thái cũng có thể tăng theo.", a: true }
      ],
      exp: "Ý a sai vì số lượng dao động lên xuống theo mùa và theo chu kỳ thức ăn."
    },
    {
      statement: "Về tác động của việc phá rừng đối với cân bằng tự nhiên:",
      sub: [
        { text: "Phá rừng làm mất nơi cư trú và nguồn thức ăn của hàng triệu loài động thực vật hoang dã.", a: true },
        { text: "Mất thảm thực vật rừng làm tăng nguy cơ lũ quét, sạt lở đất vào mùa mưa và hạn hán vào mùa khô.", a: true },
        { text: "Phá rừng giúp giải phóng nhiều đất và không gây bất kỳ tác động nào đến khí hậu toàn cầu.", a: false },
        { text: "Độ che phủ rừng cao giúp điều hòa nguồn nước ngầm và giữ độ phì nhiêu cho đất.", a: true }
      ],
      exp: "Ý c sai vì phá rừng làm tăng khí CO2 trong khí quyển thúc đẩy biến đổi khí hậu."
    },
    {
      statement: "Về tác hại của sinh vật ngoại lai xâm hại:",
      sub: [
        { text: "Ốc bươu vàng nhập khẩu vào Việt Nam đã tàn phá mùa màng lúa nước trên diện rộng.", a: true },
        { text: "Cây mai dương có gai độc xâm lấn các vùng đất ngập nước làm suy kiệt thảm thực vật bản địa.", a: true },
        { text: "Sinh vật ngoại lai luôn luôn mang lại lợi ích cân bằng cho hệ sinh thái mới tiếp nhận nó.", a: false },
        { text: "Cần kiểm soát chặt chẽ việc nhập khẩu và phóng sinh các loài sinh vật ngoại lai vào môi trường tự nhiên.", a: true }
      ],
      exp: "Ý c sai vì sinh vật ngoại lai xâm hại đe dọa trực tiếp sự sinh tồn của loài bản địa."
    },
    {
      statement: "Về các biện pháp duy trì cân bằng tự nhiên của con người:",
      sub: [
        { text: "Quy hoạch và bảo vệ các vườn quốc gia, khu dự trữ sinh quyển thế giới.", a: true },
        { text: "Xây dựng các hành lang sinh học giúp các loài thú hoang dã di chuyển an toàn giữa các cánh rừng.", a: true },
        { text: "Cấm triệt để việc đánh bắt hải sản bằng lưới mắt nhỏ, xung điện và chất nổ.", a: true },
        { text: "Được phép săn bắt tự do các loài động vật trong Sách Đỏ nếu phục vụ nghiên cứu cá nhân.", a: false }
      ],
      exp: "Ý d sai vì động vật trong Sách Đỏ được pháp luật bảo vệ nghiêm ngặt, cấm săn bắt trái phép."
    }
  ],
  part3: [
    { q: "Trạng thái ổn định tương đối về số lượng cá thể trong hệ sinh thái gọi là gì?", a: "Cân bằng tự nhiên", accept: ["can bang tu nhien", "cân bằng sinh thái"], exp: "Khái niệm cân bằng tự nhiên." },
    { q: "Loài ốc ngoại lai xâm hại tàn phá lúa nước nghiêm trọng ở Việt Nam tên là gì?", a: "Ốc bươu vàng", accept: ["oc buou vang"], exp: "Ốc bươu vàng là loài ngoại lai nguy hại." },
    { q: "Hệ sinh thái tự nhiên có độ đa dạng loài càng cao thì khả năng tự điều chỉnh như thế nào?", a: "Càng cao", accept: ["càng lớn", "tăng", "cao"], exp: "Độ đa dạng cao giúp hệ sinh thái chống chịu biến động tốt hơn." },
    { q: "Cơ chế duy trì cân bằng qua mối quan hệ dinh dưỡng giữa các loài gọi là gì?", a: "Khống chế sinh học", accept: ["khong che sinh hoc"], exp: "Khống chế sinh học giữ số lượng loài ở mức ổn định." }
  ]
};

const LESSON_47 = {
  id: 47,
  chapter: 8,
  title: "Bảo vệ môi trường",
  keywords: ["Ô nhiễm không khí", "Ô nhiễm nước", "Ô nhiễm đất", "Rác thải nhựa", "Phát triển bền vững"],
  theory: "<h3>1. Các dạng ô nhiễm môi trường</h3><ul><li>Ô nhiễm không khí (CO2, SO2, NOx, bụi mịn PM2.5).</li><li>Ô nhiễm nguồn nước (nước thải sinh hoạt, hóa chất công nghiệp chưa xử lý).</li><li>Ô nhiễm đất (hóa chất bảo vệ thực vật, rác thải nhựa).</li></ul><h3>2. Biện pháp bảo vệ môi trường</h3><ul><li>Sử dụng năng lượng tái tạo (mặt trời, gió).</li><li>Phân loại rác tại nguồn, tái chế, hạn chế nhựa dùng 1 lần.</li><li>Trồng và bảo vệ rừng, bảo tồn đa dạng sinh học.</li></ul>",
  part1: [
    { q: "Ô nhiễm môi trường là hiện tượng:", opts: ["Môi trường ngày càng trong sạch hơn", "Môi trường bị biến đổi tính chất vật lý, hóa học, sinh học gây hại cho sức khỏe con người và sinh vật", "Nhiệt độ môi trường luôn mát mẻ", "Lượng oxy trong không khí tăng vọt"], a: 1, exp: "Định nghĩa ô nhiễm môi trường." },
    { q: "Khí thải nào từ hoạt động đốt nhiên liệu hóa thạch là nguyên nhân chủ yếu gây hiệu ứng nhà kính?", opts: ["Cacbon đioxit (CO2)", "Khí Oxy (O2)", "Khí Nitơ (N2)", "Khí Heli (He)"], a: 0, exp: "CO2 chiếm tỉ trọng lớn nhất trong các khí gây hiệu ứng nhà kính." },
    { q: "Hiện tượng mưa axit xuất phát chủ yếu từ khí thải nào của các nhà máy nhiệt điện và luyện kim?", opts: ["SO2 và NOx", "Khí Oxy", "Khí Metan", "Hơi nước tinh khiết"], a: 0, exp: "SO2 và NOx kết hợp với hơi nước trong không khí tạo axit H2SO4 và HNO3 gây mưa axit." },
    { q: "Chất thải nhựa và túi ni lông dùng một lần được coi là 'ô nhiễm trắng' vì:", opts: ["Chúng có màu trắng tinh", "Chúng tồn tại hàng trăm năm trong tự nhiên rất khó phân hủy gây tắc nghẽn đất và đại dương", "Chúng biến thành tuyết trắng", "Chúng làm nước đóng băng"], a: 1, exp: "Rác thải nhựa mất từ 100 đến 500 năm để phân hủy hoàn toàn." },
    { q: "Nguồn gây ô nhiễm nguồn nước phổ biến nhất ở các đô thị là:", opts: ["Lá cây rụng xuống sông", "Nước thải sinh hoạt và công nghiệp chưa qua xử lý xả thẳng ra kênh rạch", "Nước mưa tự nhiên", "Cá chết già"], a: 1, exp: "Nước thải sinh hoạt và sản xuất công nghiệp xả trộm chưa xử lý." },
    { q: "Lạm dụng phân bón hóa học và thuốc bảo vệ thực vật sẽ gây ô nhiễm trực tiếp cho môi trường nào?", opts: ["Môi trường đất và nước ngầm", "Tầng bình lưu của khí quyển", "Đáy đại dương sâu", "Vũ trụ ngoài Trái Đất"], a: 0, exp: "Hóa chất dư thừa ngấm làm thoái hóa đất và ô nhiễm mạch nước ngầm." },
    { q: "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo, năng lượng sạch?", opts: ["Nhiên liệu than đá", "Dầu mỏ", "Năng lượng gió và năng lượng mặt trời", "Khí đốt tự nhiên"], a: 2, exp: "Gió, mặt trời, thủy triều không phát thải khí nhà kính." },
    { q: "Quy tắc 3R trong quản lý rác thải bảo vệ môi trường viết tắt của các từ tiếng Anh nào?", opts: ["Reduce (Giảm thiểu) - Reuse (Tái sử dụng) - Recycle (Tái chế)", "Run - Read - Relax", "Rice - River - Road", "Real - Right - Rich"], a: 0, exp: "3R: Reduce (Giảm thiểu), Reuse (Tái sử dụng), Recycle (Tái chế)." },
    { q: "Hành động nào sau đây là việc làm thiết thực của học sinh nhằm bảo vệ môi trường học đường?", opts: ["Vứt vỏ bánh kẹo và túi ni lông xuống gầm bàn", "Phân loại rác hữu cơ, rác vô cơ và bỏ đúng nơi quy định", "Vẽ bậy lên tường lớp học", "Để vòi nước chảy tự do trong nhà vệ sinh"], a: 1, exp: "Phân loại rác tại nguồn là hành vi văn minh bảo vệ môi trường." },
    { q: "Phát triển bền vững là sự phát triển nhằm đáp ứng nhu cầu của thế hệ hiện tại mà:", opts: ["Khai thác cạn kiệt toàn bộ tài nguyên cho nhanh giàu", "Không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai", "Bỏ qua các tiêu chuẩn bảo vệ môi trường", "Chỉ tập trung vào công nghiệp nặng"], a: 1, exp: "Định nghĩa phát triển bền vững của Liên Hợp Quốc." },
    { q: "Việc xử lý rác thải pin cũ đúng cách là:", opts: ["Bỏ chung vào thùng rác gia đình hoặc đốt ngoài vườn", "Thu gom riêng và chuyển giao đến điểm thu hồi rác thải nguy hại", "Ném xuống ao hồ", "Chôn xuống đất vườn"], a: 1, exp: "Pin chứa chì, thủy ngân, cadimi cực độc cần thu gom xử lý riêng." },
    { q: "Trồng cây xanh trên các đường phố đô thị có tác dụng chủ yếu là gì?", opts: ["Chỉ để trang trí cho đẹp mắt", "Hấp thu khí CO2, cản khói bụi, giảm tiếng ồn và điều hòa vi khí hậu", "Làm hẹp lòng đường xe chạy", "Tăng lượng bụi bẩn"], a: 1, exp: "Cây xanh là lá phổi xanh lọc không khí và giảm tiếng ồn." }
  ],
  part2: [
    {
      statement: "Về các nguyên nhân gây ô nhiễm môi trường đất, nước, không khí:",
      sub: [
        { text: "Bụi mịn PM2.5 từ khí thải xe cộ có khả năng thâm nhập sâu vào phế nang phổi người.", a: true },
        { text: "Hiện tượng phú dưỡng ở ao hồ là do nước thải chứa quá nhiều hợp chất nitơ và phốt pho.", a: true },
        { text: "Đốt rơm rạ sau thu hoạch hoàn toàn không gây ô nhiễm không khí vì rơm là chất hữu cơ.", a: false },
        { text: "Túi ni lông chôn lấp trong đất làm đất cằn cỗi và cản trở rễ cây sinh trưởng.", a: true }
      ],
      exp: "Ý c sai vì đốt rơm rạ sinh ra khói, bụi mịn và khí độc CO gây ô nhiễm không khí nặng nề."
    },
    {
      statement: "Về hiện tượng biến đổi khí hậu toàn cầu:",
      sub: [
        { text: "Nồng độ khí CO2 trong khí quyển tăng cao làm Trái Đất nóng lên.", a: true },
        { text: "Trái Đất ấm lên làm băng tan ở hai cực khiến mực nước biển dâng cao đe dọa các vùng đồng bằng ven biển.", a: true },
        { text: "Thời tiết cực đoan như bão lũ dữ dội, hạn hán kéo dài xảy ra với tần suất ngày càng nhiều hơn.", a: true },
        { text: "Biến đổi khí hậu là hiện tượng tự nhiên bình thường, con người không thể và không cần hành động gì.", a: false }
      ],
      exp: "Ý d sai vì hoạt động xả thải của con người là nguyên nhân chính và toàn cầu phải chung tay cắt giảm khí thải."
    },
    {
      statement: "Về các biện pháp bảo vệ tài nguyên thiên nhiên và môi trường:",
      sub: [
        { text: "Chuyển đổi từ xe chạy xăng dầu sang xe điện hoặc phương tiện giao thông công cộng giúp giảm phát thải.", a: true },
        { text: "Thay thế túi ni lông dùng một lần bằng túi vải, túi giấy tái chế hoặc làn nhựa đi chợ.", a: true },
        { text: "Tắt các thiết bị điện khi không sử dụng giúp tiết kiệm năng lượng và giảm áp lực sản xuất nhiệt điện.", a: true },
        { text: "Mọi loại rác thải đều có thể đem đốt lộ thiên tại nhà để tiêu hủy nhanh nhất.", a: false }
      ],
      exp: "Ý d sai vì đốt rác nhựa tại nhà sinh ra dioxin và furan cực kỳ độc hại gây ung thư."
    },
    {
      statement: "Về bảo tồn đa dạng sinh học và phát triển bền vững:",
      sub: [
        { text: "Bảo tồn đa dạng sinh học là bảo vệ nguồn gen quý và duy trì sự cân bằng của sinh quyển.", a: true },
        { text: "Xây dựng các công viên sinh thái, vườn bách thảo giúp nhân giống các loài thực vật quý hiếm.", a: true },
        { text: "Khai thác triệt để tất cả các mỏ khoáng sản trong 5 năm tới để phát triển kinh tế nhanh nhất.", a: false },
        { text: "Giáo dục nâng cao ý thức bảo vệ môi trường cho thế hệ trẻ là giải pháp lâu dài và căn cơ.", a: true }
      ],
      exp: "Ý c sai vì đi ngược lại nguyên tắc phát triển bền vững cho các thế hệ tương lai."
    }
  ],
  part3: [
    { q: "Khí thải nhà kính phổ biến nhất do đốt than và xăng dầu làm Trái Đất nóng lên là gì?", a: "CO2", accept: ["cacbon đioxit", "carbon dioxide", "khí CO2"], exp: "Khí CO2 là thủ phạm chính gây nóng lên toàn cầu." },
    { q: "Ô nhiễm do rác thải nhựa và túi ni lông khó phân hủy trong môi trường còn gọi là ô nhiễm gì?", a: "Ô nhiễm trắng", accept: ["o nhiem trang"], exp: "Ô nhiễm rác thải nhựa được gọi là ô nhiễm trắng." },
    { q: "Mô hình quản lý rác thải nổi tiếng viết tắt bằng 3 chữ cái tiếng Anh gồm Reduce, Reuse và gì?", a: "Recycle", accept: ["tái chế", "tai che"], exp: "3R: Giảm thiểu, Tái sử dụng, Tái chế (Recycle)." },
    { q: "Nguồn năng lượng sạch tận dụng bức xạ nhiệt và quang năng từ bầu trời gọi là năng lượng gì?", a: "Năng lượng mặt trời", accept: ["mặt trời", "nang luong mat troi"], exp: "Năng lượng mặt trời là năng lượng tái tạo." }
  ]
};

const LESSONS_DATA = [ LESSON_30, LESSON_31, LESSON_32, LESSON_33, LESSON_34, LESSON_35, LESSON_36, LESSON_37, LESSON_38, LESSON_39, LESSON_40, LESSON_41, LESSON_42, LESSON_43, LESSON_44, LESSON_45, LESSON_46, LESSON_47 ];
