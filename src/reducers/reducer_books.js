// Stephen Grider prefers to prepend filenames with the type of file they are.
// so with the reducers in this folder, they are prepended by 'reducer_' for
// the sake of clarity. because there are going to end up being a lot of files
// with the word 'book' in them.

export default function () {
	return [
		{ title: 'Javascript: the Good Parts', pages: 101 },
		{ title: 'Qwertymaster', pages: 200 },
		{ title: 'The Best Cookbook in the Universe', pages: 60 },
		{ title: 'Gooby pls', pages: 42 }
	]
}
