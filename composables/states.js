export const useAuth = () => useState(() => ({ isAuthenticated: true }));

export const useCart = () => useState(() => []);

export const usePaintings = () =>
	useState(() => [
		{ title: "A_bird", price: 200 },
		{ title: "Burcus_Starry_Night", price: 400 },
		{ title: "Darkness", price: 350 },
		{ title: "Dear_Friend", price: 200 },
		{ title: "Infinite", price: 300 },
		{ title: "Picassing", price: 150 },
		{ title: "Rick_and_Morty", price: 200 },
		{ title: "RickKlimt", price: 250 },
		{ title: "Worlds", price: 1000 },
		{ title: "Xenomorph", price: 700 },
		{ title: "Semi-nude", price: 350 },
		{ title: "Zuhre", price: 400 },
	]);
