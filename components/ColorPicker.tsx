import { useContext } from 'preact/hooks';
import { COLOR } from '../common/const.ts';
import { Signal, signal, useSignal } from '@preact/signals';
import { AppState } from '../islands/Pixels.tsx';

export default function ColorPicker() {
	const CTX = useContext(AppState);
	const currentColor = useSignal(CTX.colors);

	return (
		<div class="flex gap-2 w-full justify-center ">
			<div
				class={`grid grid-cols-${COLOR.length} gap-2 border p-4 rounded-sm cursor-pointer`}>
				{COLOR.map((color, index) => (
					<div
						class={`w-8 h-8 rounded-full bg-[${color}]`}
						onClick={() => {
							CTX.colors.value = color;
							console.log(currentColor.value, 'colorPicker');
						}}></div>
				))}
			</div>
		</div>
	);
}
