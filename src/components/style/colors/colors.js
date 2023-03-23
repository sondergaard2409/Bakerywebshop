export const colors = (themeMode) => {
	const primary = themeMode === "light" ? "#FF0000" : "#ccc" ;
    return{
        primary: primary,
        darkgray: "#333333",
        grayblue: "#BBC8D4",
        darkblue: "#6D8FAB",
        vdarkgray: "#252525",
        lightblue: "#F0F7FD",
        black: "#000000",
    }
}