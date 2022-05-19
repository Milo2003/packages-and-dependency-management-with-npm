const names = ['Juan', 'Andrea', 'luis'];
const randomNames = () => {
    const message = names[Math.floor(Math.random() * names.length)];
    console.log(message)
}

module.exports = { randomNames };