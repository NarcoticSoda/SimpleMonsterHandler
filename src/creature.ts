enum elements {
    earth = `Earth`,
    wind = `Wind`,
    water = `Water`,
    energy = `Energy`,
    fire = `Fire`,
    spirit = `Spirit`,
    shadow = `Shadow`,
    nature = `Nature`
}
//  {Stamina, Stability, Resilience, fertility(for breeding purposes), teamwork}
enum stats {
    strength = 'Strength',
    teamwork = 'Teamwork',
    mutationStability = 'Mutation Stability',
    fertility =' Fertility',
    stamina = 'Stamina',
    cuteness = 'Cuteness',
    

}

interface ICreature {
    uuid: string
    name: string
    species: string
    birthdate: number
    elementValues: Record<elements, number>
    type: elements
    skills: string
    stats: number
    happiness: number
}

interface ISpecies {
    name: string
    type: elements
    stats: number
}






