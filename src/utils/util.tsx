export const checkWallet = async (wallet: string) => {
  const result = await fetch("/api/wallet", {
    method: "POST", // Specify the HTTP method as POST
    headers: {
      "Content-Type": "application/json", // Specify the content type (JSON in this case)
    },
    body: JSON.stringify({
      // The data to be sent with the POST request
      wallet
    }),
  });

  // Parse the JSON response
  const data = await result.json();
  return data;
}
