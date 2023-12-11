import { Gallery } from "~/components/Gallery";
import { GalleryLink } from "~/components/GalleryLink";
import { Invitation } from "~/components/Invitation";

export default function HomePage() {
	return (
		<main>
			<h1>Homepage Test</h1>
			<Invitation />
			<GalleryLink
				leadText={`Tiệm chụp ảnh cưới vì "ế" khách mùa dịch đã quyết định tặng bọn mình
    bộ ảnh cưới mới đấy!`}
				label="Link ảnh ngày cưới"
				href="https://google.com"
			/>
			<Gallery title="Album Ảnh" />
		</main>
	);
}
