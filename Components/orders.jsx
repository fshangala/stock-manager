import React from "react";
import { ScrollView, View } from "react-native";
import { DataTable, Dialog, Portal } from "react-native-paper";

class Orders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [["...","...","...","..."]],
            dialogVisible: false
        };
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }
    renderData(){
        var body = this.state.data.map(function(row){
            return(
                <DataTable.Row key={row[0]}>
                    <DataTable.Cell>{row[0]}</DataTable.Cell>
                    <DataTable.Cell>{row[1]}</DataTable.Cell>
                    <DataTable.Cell>{row[2]}</DataTable.Cell>
                    <DataTable.Cell>{row[3]}</DataTable.Cell>
                </DataTable.Row>
            );
        });
        return body;
    }
    showDialog(){
        this.setState({dialogVisible: true});
    }
    hideDialog(){
        this.setState({dialogVisible: false});
    }
    render(){
        return(
            <ScrollView>
                <Portal>
                    <Dialog visible={this.state.dialogVisible}>
                        <Dialog.Title>Alert</Dialog.Title>
                    </Dialog>
                </Portal>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>ID</DataTable.Title>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title>Quantity</DataTable.Title>
                        <DataTable.Title>Price</DataTable.Title>
                    </DataTable.Header>
                    {this.renderData()}
                </DataTable>
            </ScrollView>
        );
    }
}

export default Orders;