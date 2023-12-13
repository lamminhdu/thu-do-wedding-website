import { Biography } from "./Biography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Biography",
	component: Biography,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
	args: {
		groom: {
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
		bride: {
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
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
