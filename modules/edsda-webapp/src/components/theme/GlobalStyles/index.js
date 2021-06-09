import { createGlobalStyle } from "styled-components";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const THEME = createMuiTheme({
  typography: {
    fontFamily: `'IBM Plex Sans','Source Sans Pro', sans-serif`,
    fontSize: 16,
  },
});

export const useGlobalStyles = makeStyles((theme) => ({
  button: {
    margin: "0 10px !important",
    borderRadius: "10px !important",
    paddingTop: "5px !important",
    paddingBottom: "5px !important",
    color: "#CFD8F0",
  },
  buttonSecondary: {
    margin: "0 10px !important",
    borderRadius: "10px !important",
    paddingTop: "5px !important",
    paddingBottom: "5px !important",
    color: "#FFFFFF",
    backgroundColor: "var(--hover-color)",
    fontSize: "14px !important",
    fontWeight: "bold !important",
  },
}));

const GlobalStyles = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: "IBM Plex Sans", "Source Sans Pro", sans-serif;
		font-size: '12px',
	}

	a, a:hover, a:focus, a:active {
      text-decoration: none;
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
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
