import { Guestbook } from "./Guestbook";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Guestbook",
	component: Guestbook,
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
		remitters: [
			{
				name: "Nguyễn Huy Hoàng",
				amount: "xxx,000đ",
				date: "19:00, 22/03/2022",
				message:
					"Mừng cho cái ngày mày chính thức thoát kiếp FA, phải thật hạnh phúc đó nha!",
			},
			{
				name: "Nguyễn Bích Diệp",
				amount: "xxx,000đ",
				date: "19:00, 22/03/2022",
				message:
					"Một cuộc sống mới đang đến với bạn, mình mong rằng nó sẽ tràn đầy niềm vui và tháng ngày hạnh phúc",
			},
			{
				name: "Phan Tấn Hảo",
				amount: "xxx,000đ",
				date: "19:00, 22/03/2022",
				message:
					"Chúc mừng hai bạn và gia đình! Chúc cô dâu chú rể trăm năm hạnh phúc, thủy chung trọn vẹn, đi về có nhau. Dù sống đến tuổi răng long đầu bạc nhưng xem nhau như những ngày mới gặp. Đã chỉ non mà thề đã chỉ trăng mà hẹn thì phải đợi đến lúc tôi đi cưới lại bạn nhá :))",
			},
			{
				name: "Lệ Thị Cẩm Tú",
				amount: "xxx,000đ",
				date: "19:00, 22/03/2022",
				message:
					"Chúc hai đứa có một tình yêu bền chặt, luôn gắn bó với nhau để xây dựng tổ ấm riêng của mình. Hãy sống tốt và phải thật hạnh phúc nhé!",
			},
			{
				name: "Tạ Quỳnh Chi",
				amount: "xxx,000đ",
				date: "19:00, 22/03/2022",
				message:
					"Thay mặt Đảng và Chính phủ, chúc hai đứa mãi hạnh phúc, sớm có tin vui nhé!",
			},
		],
	},
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
