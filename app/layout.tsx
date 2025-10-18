import type { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren<unknown>> = (props) => {
	const { children } = props;

	return (
		<html lang="en">
			<head>
				<title />
			</head>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
