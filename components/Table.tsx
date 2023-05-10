import { Signal, useSignal } from '@preact/signals';
import {
	TILE_SIZE_MOBILE,
	TILE_SIZE_DESKTOP,
	HEIGHT,
	WIDHT
} from '../common/const.ts';
import { useState } from 'preact/hooks';
import { AppState } from '../islands/Pixels.tsx';
import { useContext } from 'https://esm.sh/preact@10.13.1/hooks';

interface Props {
	colorSelected: Signal<string>;
}
const table = Array.from({ length: HEIGHT * WIDHT }).fill(
	'#ffffff'
) as string[];

export default function Table() {
	const CTX = useContext(AppState);
	const currentColor = useSignal(CTX.colors);
	console.log(currentColor.value, 'table');

	const [colorTable, setColorTable] = useState<string[]>(table);

	return (
		<div
			class={`grid w-[${WIDHT * TILE_SIZE_MOBILE}px] h-[${
				HEIGHT * TILE_SIZE_MOBILE
			}px]  gap-0.5 border
			md:w-[${WIDHT * TILE_SIZE_DESKTOP}px] md:h-[${
				HEIGHT * TILE_SIZE_DESKTOP
			}px]
			grid-cols-${WIDHT} grid-rows-${HEIGHT}
			`}>
			{colorTable.map((color, index) => (
				<div
					class={`w-[${TILE_SIZE_MOBILE}px] h-[${TILE_SIZE_MOBILE}px] md:w-[${TILE_SIZE_DESKTOP}px] md:h-[${TILE_SIZE_DESKTOP}px]  bg-[${color}]
					`}
					onClick={() => {
						setColorTable(table => {
							table[index] = String(currentColor.value);
							return [...table];
						});
					}}></div>
			))}
		</div>
	);
}
