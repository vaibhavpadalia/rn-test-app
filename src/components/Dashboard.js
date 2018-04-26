import {
  Text,
  View,
  Slider,
  Button,
  StyleSheet,
  Keyboard,
  Dimensions,
  TextInput,
  WebView,
  TouchableOpacity
} from "react-native";
import React, { Component } from "react";
import { Icon } from "react-native-elements";

class Dashboard extends Component {
  state = {
    value: 0,
    otp: []
  };
  static navigationOptions = {};

  render() {
    return (
      <View>
        <Text style={{ marginBottom: 20 }}>Dashboard Page</Text>
        <Slider
          value={this.state.value}
          maximumValue={200}
          step={1}
          minimumValue={0}
          maximumValue={71}
          onValueChange={value => this.setState({ value })}
        />
        <Text style={{ marginBottom: 20 }}>Value: {this.state.value}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropDownView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  otpText: {
    height: 35,
    width: 50,
    alignSelf: "center",
    backgroundColor: "transparent",
    color: "#262626",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 0
  },
  spaces: {
    width: (Dimensions.get("window").width - 250) / 5
  },
  otpUnderline: {
    width: 50,
    height: 2,
    backgroundColor: "#262626"
  }
});

export default Dashboard;
