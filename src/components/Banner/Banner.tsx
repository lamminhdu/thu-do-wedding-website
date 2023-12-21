interface Props {
	href: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	characters: Array<string>;
	title: string;
	headings: Array<string>;
	date: string;
}

export function Banner({ href, characters, title, headings, date }: Props) {
	const { mobile, desktop, tablet } = href;
	return (
		<section
			style={{
				"--image-url-mobile": `url(${mobile})`,
				"--image-url-tablet": `url(${tablet})`,
				"--image-url-desktop": `url(${desktop})`,
			}}
			className={
				"text-center bg-[image:var(--image-url-mobile)] md:bg-[image:var(--image-url-tablet)] xl:bg-[image:var(--image-url-desktop)] lg:h-full min-h-[752px] lg:min-h-[956px] bg-no-repeat bg-cover pt-12"
			}
		>
			<div className="flex flex-row gap-2.5 lg:gap-5 justify-center items-center">
				<p className="text-2xl lg:text-7xl text-[#ffdca7]">{characters[0]}</p>
				<div className="w-[1px] h-9 lg:h-24 bg-[#ffdca7]" />
				<p className="text-2xl lg:text-7xl text-[#ffdca7]">{characters[1]}</p>
			</div>
			<p className="text-xl lg:text-5xl text-[#ffdca7] mt-16 lg:mt-20 ">
				{title}
			</p>
			<div className="mt-4 lg:mt-6 text-6xl lg:text-9xl text-[#ffdca7] lg:flex lg:flex-row lg:justify-center lg:gap-5 lg:leading-snug">
				<p>{headings[0]}</p>
				<p>&</p>
				<p>{headings[1]}</p>
			</div>
			<p className="text-xl lg:text-5xl text-[#ffdca7] mt-4 lg:mt-10">{date}</p>
		</section>
	);
}
