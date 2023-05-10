import { Head } from '$fresh/runtime.ts';
import Pixels from '../islands/Pixels.tsx';
export default function Home() {
	return (
		<>
			<Head>
				<title>Pixel</title>
			</Head>
			<div class="p-4 h-screen w-screen bg-[#383838] flex flex-col items-center justify-center">
				<Pixels />
			</div>
		</>
	);
}
