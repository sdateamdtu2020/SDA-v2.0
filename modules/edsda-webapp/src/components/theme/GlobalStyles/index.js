import { createGlobalStyle } from "styled-components";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Source Sans Pro", sans-serif`,
    fontSize: 16,
  },
});

export const useGlobalStyles = makeStyles((theme) => ({
  button: {
    margin: "0 10px !important",
    borderRadius: "10px !important",
    color: "#CFD8F0",
  },
}));

const GlobalStyles = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "Source Sans Pro", sans-serif;
		font-size: '14px',
	}

	/* Custom scrollbar */
	::-webkit-scrollbar {
		width: 12px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: rgba(0,0,0,0.8); 
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: rgba(0,0,0,0.4); 
	}
`;

export default GlobalStyles;
