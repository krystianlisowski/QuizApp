import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView, RefreshControl, ListView } from "react-native";
import { Navigation } from 'react-native-navigation';

import SQLite from 'react-native-sqlite-storage';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class ResultScreen extends Component {
    constructor(props) {
        super(props);
        
        state={
            data: ''
        }
        
        
        this.state = {
            refreshing: false,
            dataSource: ds
        };

        
    }

    /*componentDidMount = () => {
        
        return fetch('https://pwsz-quiz-api.herokuapp.com/api/results', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           this.setState({
              dataSource: ds.cloneWithRows(responseJson)
           })
        })
        .catch((error) => {
           console.error(error);
        });
    }*/

    componentWillMount() {
        fetch('https://pwsz-quiz-api.herokuapp.com/api/results')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ dataSource: ds.cloneWithRows(responseJson) });
          })
          .catch((error) => {
            console.error(error);
          });
      }


    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }


    _onRefresh = () => {
        this.setState({ refreshing: true });
        /*fetchData().then(() => {
            this.setState({ refreshing: false });
        });*/
        setTimeout(()=> {
            this.setState({ refreshing: false });
        }, 2000)
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize: 20}}>{rowData.nick}</Text>
                        <Text>Wynik: {rowData.score}/{rowData.total}</Text>
                        <Text>typ: {rowData.type}</Text>
                        <Text>data: {rowData.date}</Text>
                        <Text>id: {rowData.id}</Text>
                    </View>
                   }

                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            />
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
  },
});

/*<ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        />*/