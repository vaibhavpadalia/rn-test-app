import { View, Text, Button, TouchableOpacity, WebView } from "react-native";
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
    // const { config, fs } = RNFetchBlob;
    // console.warn("mem",fs.dirs.DownloadDir);
    const { config, fs } = RNFetchBlob;
    let path = fs.dirs.DownloadDir; // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
      fileCache: true,
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
      .fetch("GET", "http://www.axmag.com/download/pdfurl-guide.pdf")
      .then(res => {
        console.warn("in");
        RNFetchBlob.fs
          .exists(resp.path())
          .then(exist => {
            console.warn(`file ${exist ? "" : "not"} exists`);
          })
          .catch(() => {
            console.warn("error while checking file for exists");
          });
      })
      .catch((errorMessage, statusCode) => {
        console.warn("therre");

        //     // error handling
      });
    // RNFetchBlob.fetch("GET", "http://www.example.com/images/img1.png", { Authorization: "Bearer access-token..." })
    //   // more headers  ..
    //   // when response status code is 200
    //   .then(res => {
    //     // the conversion is done in native code
    //     let base64Str = res.base64();
    //     // the following conversions are done in js, it's SYNC
    //     let text = res.text();
    //     let json = res.json();
    //   })
    //   // Status code is not 200
    //   .catch((errorMessage, statusCode) => {
    //     // error handling
    //   });
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
