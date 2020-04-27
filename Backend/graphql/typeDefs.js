const gql = require('graphql-tag');

module.exports = gql`
	type User {
		id: ID!
		username: String!
		authToken: String!
	}
	type Event {
		organizer: User!
		name: String!
		description: String!
		date: String!
		location:String!
	}
	input RegisterInput {
		username: String!
		password: String!
		confirmPassord: String!
	}
	input EventInput {
		organizer: ID!
		name: String!
		description: String!
		date: String!
		location:String!
	}
	type Query {
		helloWorld: String!
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username:String! password:String!): User!
		crear_evento(eventInput:EventInput!): Event!
	}
`;