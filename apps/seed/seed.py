from graphqlclient import GraphQLClient

client = GraphQLClient('http://localhost:4000/graphql')

result = client.execute('''
 mutation {
  createParticipant (input: {
    email: "elizaveta@gmail.com",
    name: "Elizaveta Astapova",
    title: "Mrs"
  }) {
    id
  }
}
''')

print(result)