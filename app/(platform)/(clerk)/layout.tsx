const ClerkLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex justify-center items-center h-full'>
			{children}
		</div>
	);
};

export default ClerkLayout;
