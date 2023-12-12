import { Story } from "./Story";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Story",
	component: Story,
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
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		title: "Chuyện chúng mình",
		content: `"Cuối ngõ ấy là quán cà phê quen Anh đã tin vì uống cà phê mà mắt em
    nâu đến thế" Tôi đã đánh liều nhắn tin cho anh ấy khi nhìn thấy dòng
    story của anh trên Facebook sau khi chắc chắn anh ấy chưa hẹn hò với
    ai rằng: Mắt em màu nâu Môi em màu đỏ Lại đây nói nhỏ “Em thích bạn
    anh”. Cứ thế chúng tôi nhắn tin qua lại, và không biết trái tim mình
    đã thuộc về nửa kia từ bao giờ dù chúng tôi chưa từng gặp nhau...`,
	},
};
