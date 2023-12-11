import Link from "next/link";

interface Props {
	leadText: string;
	label: string;
	href: string;
}

export function GalleryLink({ leadText, label, href }: Props) {
	return (
		<section className="border-2 border-[#ffdca7] border-solid py-12 md:py-16">
			<div className="flex flex-col lg:flex-row gap-7 items-center justify-between container mx-auto px-5 md:px-44">
				<p className="text-[#B1C4C0] text-sm md:text-lg">{leadText}</p>
				<Link
					className="bg-[#ffdca7] px-6 md:px-12 py-3 md:py-6 text-2xl text-[#004539] border-2 border-[#B1C4C0] border-solid shadow-md shadow-black"
					href={href}
					target="_blank"
				>
					{label}
				</Link>
			</div>
		</section>
	);
}
