

  
type User = {
    _id: ID!
    name: string,
    email: string,
    password: string,
}

type CategoryScore = {
    category: string,
    score: number
}

type Result = {
    overallScore: number
    scoreByCategory:CategoryScore[]
    user: string
}