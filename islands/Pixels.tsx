import { signal } from '@preact/signals';
import ColorPicker from '../components/ColorPicker.tsx';
import Table from '../components/Table.tsx';
import { createContext } from 'preact';

function createAppState() {
	const colors = signal('#000');
	return {
		colors
	};
}
export const AppState = createContext(createAppState());

export default function Pixels() {
	return (
		<>
			<AppState.Provider value={createAppState()}>
				<ColorPicker />

				<Table />
			</AppState.Provider>
		</>
	);
}
