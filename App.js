import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList ,AsyncStorage} from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder', array: false };

  }

  testArray() {
    let array = this.state.array;
    if (array.length < 0) {
      return;
    }
    return array.map((element, i) => {
      return (<Text key={i}>{element}</Text>)
    })


  }

  onSubmitEditing = () => {
    let i = 0;
    let arry = [];
    if(this.state.array){
     i = this.state.array.length;
       arry = this.state.array;
    }

arry.push({key:i++, name: this.state.text});
    this.setState(previousState => {
      return {array : arry };
    });
    console.log(this.state.array)

    try {
       AsyncStorage.setItem('keys', 'I like to save it.');
       const value =  AsyncStorage.getItem('keys');
      console.log(value)
    } catch (error) {
      // Error saving data
    }

  }


  render() {
    return (

      <View style={styles.container}>
      <View style={{height:20}}></View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text >Shake your phone to open the developer menu.</Text>
        <TextInput value={this.state.text} onSubmitEditing={this.onSubmitEditing.bind(this)} onChangeText={(text) => this.setState({ text })} blurOnSubmit={true}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, alignSelf: 'stretch', margin: 10, padding: 10 }} />
        <Text style={{ fontSize: 20 }}>{this.state.text}</Text>

        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <FlatList
          data={this.state.array} extraData={this.state}
          renderItem={({ item, index }) => <Text tyle={{ height: 100 }}>{item.name}{ console.log(item)}</Text>}
        />
       
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
  , button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

