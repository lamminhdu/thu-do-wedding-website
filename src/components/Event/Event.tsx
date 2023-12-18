import Link from "next/link";

type Props = {
	events: {
		date: string;
		title: string;
		location: string;
		googleMap: string;
		address: string;
	}[];
};

export function Event({ events }: Props) {
	const firstStyle =
		"before:w-2.5 before:h-2.5 before:bg-[#ffdca7] before:absolute before:-left-[0.3125rem] before:-bottom-[0.3125rem] before:rotate-45";
	const lastStyle =
		"before:w-2.5 before:h-2.5 before:bg-[#ffdca7] before:absolute before:-right-[0.3125rem] before:-bottom-[0.3125rem] before:rotate-45";
	return (
		<section className="md:text-center">
			<p className="text-2xl md:text-5xl text-[#ffdca7]">Sự kiện</p>
			<ol className="md:before:hidden mt-24 relative border-s md:border-0 border-[#ffdca7] text-[#ffdca7] text-sm md:flex md:flex-row before:w-2.5 before:h-2.5 before:bg-[#ffdca7] before:absolute before:-left-[0.3125rem] before:-bottom-[0.3125rem] before:rotate-45">
				{events.map((weddingEvent, index) => {
					return (
						<li className="relative pl-20 mb-10 h-52 md:pl-0 md:h-full md:flex md:flex-col md:justify-center md:items-center">
							<time className="block absolute -top-8 md:static md:text-3xl md:mb-5">
								{weddingEvent.date}
							</time>
							<div className="h-[1px] md:h-20 w-20 md:w-[1px] absolute top-0 left-0 md:relative bg-[#ffdca7] before:w-2.5 before:h-2.5 before:bg-[#ffdca7] before:rounded-full before:absolute before:-left-[0.3125rem] before:-bottom-[0.3125rem]" />
							<div
								className={`hidden md:block md:h-[1px] md:w-full md:relative md:bg-[#ffdca7] ${
									index === 0 && firstStyle
								} ${index === events.length - 1 && lastStyle}`}
							/>
							<h3 className="pt-4 mt-9 mb-4 text-lg md:text-3xl md:mt-6">
								{weddingEvent.title}
							</h3>
							<Link
								className="underline md:text-lg"
								href={weddingEvent.googleMap}
								target="_blank"
							>
								{weddingEvent.location}
							</Link>
							<p className="mt-4 text-[#B1C4C0] md:text-lg md:px-10">
								{weddingEvent.address}
							</p>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
