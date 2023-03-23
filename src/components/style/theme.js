import {Colors} from "./colors/colors";

export const Theme = (ThemeMode) => {
	return {colors: Colors(ThemeMode),
	fonts: ['Lobster', 'Open Sans']}
}