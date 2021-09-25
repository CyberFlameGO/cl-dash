import { useDebugValue, useEffect, useState } from "react";

export function useAPI(endpoint: string, token?: string, body?: any) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<boolean | string>(false);
	const [data, setData] = useState<any>(null);

	useDebugValue(
		loading
			? "Loading data..."
			: error
			? "Errored"
			: "Successfully loaded data!"
	);

	useEffect(() => {
		fetch(`/api/${endpoint}`, {
			headers: {
				"X-Clearance": token
					? `Gigachad. Proof: ${token}`
					: "Nerd. No doumentation found. Reccomended treatment: Instant termination.",
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : undefined,
		})
			.catch((error) => {
				setError(error + "");
				setLoading(false);
			})
			.then((res) => {
				if (res?.ok) {
					return res.json();
				} else {
					setError(`HTTP error: ${res?.status} ${res?.statusText}`);
					setLoading(false);
				}
			})
			.catch((error) => {
				setError(error + "");
				setLoading(false);
			})
			.then((data) => {
				if (data.data) {
					setData(data.data);
				} else if (data.error) {
					setError(data.error);
				} else if (data.detail) {
					setError(data.detail?.msg);
				}
				setLoading(false);
			});
	}, [endpoint, token, body]);

	return { loading, error, data };
}
