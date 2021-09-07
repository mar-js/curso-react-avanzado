import { gql } from '@apollo/client'

export const SET_SIGNUP = gql`
	mutation signup($input: UserCredentials!) {
		signup(input: $input)
	}
`
