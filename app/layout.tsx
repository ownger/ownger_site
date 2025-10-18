const RootLayout = (props) => {
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
