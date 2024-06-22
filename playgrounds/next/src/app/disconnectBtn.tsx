"use client";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";

type Props = {};

export const DisconnectBtn = (props: Props) => {
	const { disconnectAsync } = useDisconnect();
	const { isConnected } = useAccount();

	return (
		<div>
			<button
				onClick={async () => {
					await disconnectAsync();
					alert("You have been disconnected");
				}}
				style={{
					backgroundColor: "red",
					color: "white",
					padding: "10px",
					border: "none",
					borderRadius: "5px",
				}}
			>
				Disconnect
			</button>
			<h1>Status= {isConnected ? "Connected" : "Not Connected"}</h1>
		</div>
	);
};
