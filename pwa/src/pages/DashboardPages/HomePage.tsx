import { ClockPanel, FFMPEGPanel, GlobePanel } from "./HomePagePanels";
import {
	Stack,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { UserContext } from "../../data";
import { useContext } from "react";

export function HomePage() {
	const [user] = useContext(UserContext);
	const theme = useTheme();
	const onDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return user.loggedIn ? (
		<Stack sx={{ px: 4, py: onDesktop ? 4 : 0 }} gap={4}>
			{!onDesktop && <Toolbar />}
			<Stack
				direction="row"
				gap={4}
				sx={{
					flexWrap: "wrap",
					justifyContent: onDesktop ? "flex-start" : "center",
				}}
			>
				<ClockPanel />
				<GlobePanel />
				<FFMPEGPanel />
			</Stack>
			<Typography>
				{user.name}, you are logged in! Your current session expires at{" "}
				{new Date(user.tokenEpiresAt).toLocaleTimeString()}.
			</Typography>
		</Stack>
	) : (
		<Typography>
			Soemthing weird is happening. The dashboard homepage is trying to
			render but you aren{"'"}t logged in.
		</Typography>
	);
}
