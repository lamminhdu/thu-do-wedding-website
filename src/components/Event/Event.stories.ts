import { Event } from "./Event";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Event",
	component: Event,
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
		events: [
			{
				date: "09:00 20/05/2021",
				title: "Ăn hỏi 2",
				location: "Nhà Gái",
				googleMap: "https://www.google.com/maps/",
				address: "461 Nguyễn Khang, Cầu Giấy, Hà Nội & Tòa nhà Hei",
			},
			{
				date: "09:00 20/05/2021",
				title: "Rước dâu",
				location: "Nhà Gái",
				googleMap: "https://www.google.com/maps/",
				address: "461 Nguyễn Khang, Cầu Giấy, Hà Nội & Tòa nhà Hei",
			},
			{
				date: "09:00 20/05/2021",
				title: "Tiệc cưới",
				location: "Nhà Gái",
				googleMap: "https://www.google.com/maps/",
				address: "461 Nguyễn Khang, Cầu Giấy, Hà Nội & Tòa nhà Hei",
			},
		],
	},
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
