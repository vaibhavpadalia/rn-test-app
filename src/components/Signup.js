import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Header, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class Signup extends Component {
	static navigationOptions = {
		headerTitle: 'Test App',
		headerStyle: { backgroundColor: '#173746' },
		headerTitleStyle: { color: 'white' },
		drawerLockMode: 'locked-closed'
	};

	state = {
		email: '',
		password: ''
	};

	emailValidation = () => {
		if (this.state.email.length === 0) {
			return <FormValidationMessage>Email address is required</FormValidationMessage>;
		} else {
			return null;
		}
	};

	passwordValidation = () => {
		if (this.state.password.length === 0) {
			return <FormValidationMessage>Password is required</FormValidationMessage>;
		} else {
			return null;
		}
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView keyboardShouldPersistTaps="always">
				<View style={styles.container}>
					<FormLabel>Email:</FormLabel>
					<FormInput placeholder="Enter email" onChangeText={(text) => this.setState({ email: text })} />
					{this.emailValidation()}
					<FormLabel>Password:</FormLabel>
					<FormInput
						placeholder="Enter password"
						onChangeText={(text) => this.setState({ password: text })}
					/>
					{this.passwordValidation()}
					<View style={styles.submitStyle}>
						<Button
							title="SIGNNUP"
							raised
							icon={{ name: 'code' }}
							backgroundColor="#173746"
							onPress={() => navigate('Dashboard')}
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		marginBottom: 20
	},
	submitStyle: {
		marginTop: 30
	}
});

export default Signup;
