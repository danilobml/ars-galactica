export const useAuth = () => useState(() => ({ isAuthenticated: true }));

export const useCart = () => useState(() => []);

export const usePaintings = () =>
	useState(() => [
		{ title: "A_bird", price: 200, type: "Acrylic over canvas", year: 2014 },
		{ title: "Burcus_Starry_Night", price: 400, type: "Acrylic over canvas", year: 2016 },
		{ title: "Darkness", price: 350, type: "Acrylic over paper", year: 2013 },
		{ title: "Dear_Friend", price: 200, type: "Acrylic over canvas", year: 2014 },
		{ title: "Infinite", price: 300, type: "Acrylic over canvas", year: 2022 },
		{ title: "Picassing", price: 150, type: "Acrylic over paper", year: 2018 },
		{ title: "Rick_and_Morty", price: 200, type: "Acrylic over canvas", year: 2019 },
		{ title: "RickKlimt", price: 250, type: "Acrylic over canvas", year: 2019 },
		{ title: "Worlds", price: 1000, type: "Acrylic over canvas", year: 2021 },
		{ title: "Xenomorph", price: 700, type: "Acrylic over canvas", year: 2017 },
		{ title: "Semi-nude", price: 350, type: "Acrylic over canvas", year: 2015 },
		{ title: "Zuhre", price: 400, type: "Acrylic over canvas", year: 2015 },
	]);
