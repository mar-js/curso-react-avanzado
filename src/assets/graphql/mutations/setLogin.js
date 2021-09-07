import { gql } from '@apollo/client'

export const SET_LOGIN = gql`
	mutation login($input: UserCredentials!) {
		login(input: $input)
	}
`
