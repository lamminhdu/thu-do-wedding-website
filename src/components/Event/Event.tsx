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
	return (
		<section>
			<p className="text-2xl text-[#ffdca7]">Sự kiện</p>
			<ol className="mt-24 relative border-s border-[#ffdca7] text-[#ffdca7] text-sm before:w-2.5 before:h-2.5 before:bg-[#ffdca7] before:content-[''] before:absolute before:-left-[0.3125rem] before:-bottom-[0.3125rem] before:rotate-45">
				{events.map((weddingEvent) => {
					return (
						<li className="mb-10 relative pl-20 h-52">
							<time className="block absolute -top-8">{weddingEvent.date}</time>
							<div className="h-[1px] w-20 absolute bg-[#ffdca7] top-0 left-0 before:w-2.5 before:h-2.5 before:bg-[#ffdca7] before:rounded-full before:content-[''] before:absolute before:-left-[0.3125rem] before:-bottom-[0.3125rem]" />
							<h3 className="flex items-center text-lg mt-9 mb-4 pt-4">
								{weddingEvent.title}
							</h3>
							<Link
								className="underline"
								href={weddingEvent.googleMap}
								target="_blank"
							>
								{weddingEvent.location}
							</Link>
							<p className="mt-4 text-[#B1C4C0]">{weddingEvent.address}</p>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
