const pokeIndex = (n) => {
    return `https://pokeapi.co/api/v2/pokemon?limit=${n}&offset=0`
}

const pokeDetail = (n) => {
    return `https://pokeapi.co/api/v2/pokemon/${n}`
}

export { pokeIndex, pokeDetail }