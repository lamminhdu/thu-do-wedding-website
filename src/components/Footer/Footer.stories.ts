import Avatar from "~/assets/portrait.png";
import { Footer } from "./Footer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Footer",
	component: Footer,
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
		content: "Sản phẩm được tạo bởi",
		logo: Avatar.src,
		href: "https://www.facebook.com/AnhThu2301",
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {};
