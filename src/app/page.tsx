import { Banner } from "~/components/Banner/Banner";
import { Biography } from "~/components/Biography/Biography";
import { Gallery } from "~/components/Gallery";
import { GalleryLink } from "~/components/GalleryLink";
import { Invitation } from "~/components/Invitation";
import { Story } from "~/components/Story/Story";

const banner = {
	href: {
		mobile: "https://static.namtay.vn/assets/img/theme4/banner-mobile.png",
		tablet: "https://static.namtay.vn/assets/img/theme4/banner-tablet.png",
		desktop: "https://static.namtay.vn/assets/img/theme4/banner.jpg",
	},
	characters: ["L", "H"],
	title: "Chúng tôi cưới",
	headings: ["Chú rể", "Cô dâu"],
	date: "06 . 09 . 2069",
};

const biographies = [
	{
		href: "https://static.namtay.vn/assets/img/theme4/info1.png",
		title: "CHÚ RỂ",
		bio: `Chứng kiến cô gái của mình trông ngóng đến ngày cưới rồi lại báo
    hủy, cô ấy đã khóc rất nhiều, là đàn ông tôi cũng không khỏi chạnh
    lòng. Quá tam ba bận, chúng tôi quyết định "in" thiệp online gửi tới
    những người thân yêu nhất. Cô ấy cứ đùa rằng: Lãi rồi!`,
		family: {
			title: "Nhà Trai:",
			father: "TRẦN VĂN TÚ",
			mother: "LÊ THỊ MAI",
			address: "252 Nguyễn Xí, Q. GV Tp.Hồ Chí Minh",
		},
	},
	{
		href: "https://static.namtay.vn/assets/img/theme4/info2.png",
		title: "CÔ DÂU",
		bio: `Chúng tôi đã ba lần hoãn cưới, mỗi lần gửi thiệp cưới rồi lại báo
  hủy, đại dịch mà! Bao cảm giác buồn tủi cứ kéo đến và tôi vẫn chưa
  được khoác lên mình bộ váy cưới. Và lần này chúng tôi cưới thật rồi!`,
		family: {
			title: "Nhà Gái:",
			father: "LƯU MINH TRÍ",
			mother: "LÝ MỸ KỲ",
			address: "252 Nguyễn Xí, Q. GV Tp.Hồ Chí Minh",
		},
	},
];

const storyProp = {
	title: "Chuyện chúng mình",
	content: `"Cuối ngõ ấy là quán cà phê quen Anh đã tin vì uống cà phê mà mắt em
  nâu đến thế" Tôi đã đánh liều nhắn tin cho anh ấy khi nhìn thấy dòng
  story của anh trên Facebook sau khi chắc chắn anh ấy chưa hẹn hò với
  ai rằng: Mắt em màu nâu Môi em màu đỏ Lại đây nói nhỏ “Em thích bạn
  anh”. Cứ thế chúng tôi nhắn tin qua lại, và không biết trái tim mình
  đã thuộc về nửa kia từ bao giờ dù chúng tôi chưa từng gặp nhau...`,
};

export default function HomePage() {
	return (
		<main>
			<Banner {...banner} />
			<Invitation />
			<GalleryLink
				leadText={`Tiệm chụp ảnh cưới vì "ế" khách mùa dịch đã quyết định tặng bọn mình
    bộ ảnh cưới mới đấy!`}
				label="Link ảnh ngày cưới"
				href="https://google.com"
			/>
			<Biography biographies={biographies} />
			<Story {...storyProp} />
			<Gallery title="Album Ảnh" />
		</main>
	);
}
