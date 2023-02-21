export default name => {
    console.log('Hello ' + name + '!');
    console.log(`Hello ${name}!`);
};

export const topla = (a, b) => a + b;

export const cikar = (a, b) => a - b;

export const text = 'Text';

export const user = {
    name: 'Kutluhan',
    age: 25
};

export const users = [
    {
        name: 'Kutluhan',
        age: 25
    },
    {
        name: 'Ayça',
        age: 20
    }
];

// export default hello;

// export { hello, topla, cikar, text, user, users };