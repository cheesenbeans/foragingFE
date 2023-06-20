import axios from "axios";
const foragingApi = axios.create({
	baseURL: "https://u08cns9a09.execute-api.us-east-1.amazonaws.com",
});

export const fetchItems = (params) => {
	let items = [];
	if (!params) {
		items = [
			{
				resource_id: "1",
				resource_name: "black raspberry",
				location: {
					latitude: 50.82998419421786,
					longitude: -0.15759806528483825,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/06/2023",
				description: "a lovely bunch of raspberries",
				img_url:
					"https://images.pexels.com/photos/479454/pexels-photo-479454.jpeg",
			},
			{
				resource_id: "2",
				resource_name: "blueberries",
				location: {
					latitude: 50.83542426202701,
					longitude: -0.1550466660217834,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/05/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "3",
				resource_name: "blackberries",
				location: {
					latitude: 50.83963065065905,
					longitude: -0.16770397845957438,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/04/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "4",
				resource_name: "redcurrants",
				location: {
					latitude: 50.84281606610109,
					longitude: -0.17208415690061635,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/03/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "5",
				resource_name: "gooseberries",
				location: {
					latitude: 50.8433276085873,
					longitude: -0.17266901220018463,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/02/2023",
				description: "a lovely bunch of blueberries",
			},
		];
	} else if (params.params.search.includes("berries")) {
		items = [
			{
				resource_id: "2",
				resource_name: "blueberries",
				location: {
					latitude: 50.83542426202701,
					longitude: -0.1550466660217834,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/05/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "3",
				resource_name: "blackberries",
				location: {
					latitude: 50.83963065065905,
					longitude: -0.16770397845957438,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/04/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "5",
				resource_name: "gooseberries",
				location: {
					latitude: 50.8433276085873,
					longitude: -0.17266901220018463,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/02/2023",
				description: "a lovely bunch of blueberries",
			},
		];
		console.log(params.params.search.includes("berries"));
	} else {
		items = [
			{
				resource_id: "1",
				resource_name: "black raspberry",
				location: {
					latitude: 50.82998419421786,
					longitude: -0.15759806528483825,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/06/2023",
				description: "a lovely bunch of raspberries",
				img_url:
					"https://images.pexels.com/photos/479454/pexels-photo-479454.jpeg",
			},
			{
				resource_id: "2",
				resource_name: "blueberries",
				location: {
					latitude: 50.83542426202701,
					longitude: -0.1550466660217834,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/05/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "3",
				resource_name: "blackberries",
				location: {
					latitude: 50.83963065065905,
					longitude: -0.16770397845957438,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/04/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "4",
				resource_name: "redcurrants",
				location: {
					latitude: 50.84281606610109,
					longitude: -0.17208415690061635,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/03/2023",
				description: "a lovely bunch of blueberries",
			},
			{
				resource_id: "5",
				resource_name: "gooseberries",
				location: {
					latitude: 50.8433276085873,
					longitude: -0.17266901220018463,
				},
				condition: 90,
				depletion: 10,
				username: "Chris",
				created_at: "12/02/2023",
				description: "a lovely bunch of blueberries",
			},
		];
	}

	return Promise.resolve(items);
};

export const fetchCommentsByResourceId = (resource_id) => {
	const comments = [
		{
			resource_id: 1,
			comment_id: 1,
			username: "James",
			created_at: "13/06/2023",
			body: "comment 1",
		},
		{
			resource_id: 1,
			comment_id: 2,
			username: "Andrii",
			created_at: "13/05/2023",
			body: "comment 2",
		},
		{
			resource_id: 2,
			comment_id: 1,
			username: "Jack",
			created_at: "13/04/2023",
			body: "comment 3",
		},
		{
			resource_id: 2,
			comment_id: 2,
			username: "Sarah",
			created_at: "13/03/2023",
			body: "comment 4",
		},
		{
			resource_id: 3,
			comment_id: 1,
			username: "Chris",
			created_at: "13/02/2023",
			body: "comment 5",
		},
		{
			resource_id: 4,
			comment_id: 1,
			username: "Conor",
			created_at: "13/01/2023",
			body: "comment 6",
		},
		{
			resource_id: 4,
			comment_id: 2,
			username: "James",
			created_at: "13/12/2022",
			body: "comment 7",
		},
	];

	return Promise.resolve(comments);
};

export const postComment = (resource_id, body, username) => {
	const newComment = {
		resource_id,
		body,
		username,
	};

	console.log(newComment);
};

export const postResource = (formData) => {
	console.log("request made");
	// console.log(formData, "<<<<<<<<< form data");
	return foragingApi
		.post("/api/resources", formData, {
			headers: { "Content-Type": "multipart/form-data" },
		})
		.then((response) =>
			console.log(response.data, "<<<<<<<<<<<<<<<server response")
		)
		.catch((error) =>
			console.log(error, "<<<<<<<<<<<<<<<<<<<server error")
		);
	
};
