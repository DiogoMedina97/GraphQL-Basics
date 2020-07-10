const users = [{
    id: '1',
    name: 'Diogo',
    email: 'diogo@example.com',
    age: 22
}, {
    id: '2',
    name: 'Medina',
    email: 'medina@example.com'
}, {
    id: '3',
    name: 'John',
    email: 'john@example.com'
}]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
}]

const comments = [{
    id: '102',
    text: 'This worked well form me. Thanks!',
    author: '3',
    post: '10'
}, {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '10'
}, {
    id: '104',
    text: 'This did not work.',
    author: '2',
    post: '11'
}, {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    post: '12'
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }