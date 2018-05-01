import { View, Text, Button, TouchableOpacity, WebView, Platform } from "react-native";
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
// import RNFetchBlob from "react-native-fetch-blob";
// const rNFetchBlob = require("react-native-fetch-blob").default;

var RNFetchBlob = require("react-native-fetch-blob").default;

function renderLeft(state) {
  const { editing } = state.params || false;
  return <Button title={editing ? "Done" : "Edit"} onPress={() => state.params.handleEdit()} />;
}

class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: "Profile",
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: "#173746" }
    };
  };

  componentWillMount() {}

  dothis() {
    const { config, fs } = RNFetchBlob;
    let path = fs.dirs.DocumentDir; // this is the pictures directory. You can check the available directories in the wiki.
    console.warn("Path", path)
    let options = {
      fileCache: true,
      path: path + "/pdfurl-guide.pdf",
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        title: "pdfurl-guide.pdf",
        mime: "application/pdf",
        path: path + "/pdfurl-guide.pdf",
        description: "Downloading image."
      }
     }; // setting it to true will use the device's native download manager and will be shown in the notification bar. // this is the path where your downloaded file will live in
    RNFetchBlob.config(options)
      .fetch("POST", "http://192.168.15.75:8080/api/isp/v1/customer/sendReceiptOnMail")
      .then(resp => {
        console.warn("in");
        RNFetchBlob.fs
          .exists(resp.path())
          .then(exist => {
            console.warn(`file ${exist ? "" : "not"} exists`);
            RNFetchBlob.ios.openDocument(path + "/pdfurl-guide.pdf")
          })
          .catch(() => {
            console.warn("error while checking file for exists");
          });
      })
      .catch((errorMessage, statusCode) => {
        console.warn("here",errorMessage);
      });
  }

  // state = {
  //   count: 0
  // };
  _onNavigationStateChange(navState) {
    console.warn("nav", navState);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: "https://facebook.github.io/react-native/docs/webview.html" }}
          javaScriptEnabled={true}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        />
        <Button onPress={() => this.dothis()} title="Click" />
      </View>
    );
  }
}

export default Profile;
