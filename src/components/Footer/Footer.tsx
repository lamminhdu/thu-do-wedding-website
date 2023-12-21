import Link from "next/link";

interface Props {
	content: string;
	logo: string;
	href: string;
}

export function Footer({ content, logo, href }: Props) {
	return (
		<section className="bg-[#ffdca7]">
			<div className="flex flex-row items-center justify-center max-w-2xl px-5 py-14 mx-auto">
				<p className="text-sm md:text-xl text-[#004539] leading-tight">
					{content}
				</p>
				<Link href={href} target="_blank" className="ml-6">
					<img
						src={logo}
						alt="logo"
						width={40}
						height={40}
						className="rounded-full"
					/>
				</Link>
			</div>
		</section>
	);
}
