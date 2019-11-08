
import React, { Component } from 'react';
import { Text,View,StyleSheet,TextInput,CheckBox,TouchableOpacity } from 'react-native';
import { Container} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class todo extends Component{
  constructor(props){
    super(props)
    this.state={
      todos : ['Work','Swim','Study','Sleep','Run'],
      checked : {},
      marked : {},
      string : '',
      status : 'add',
      change : 3
    }
  }
  onRemoveItem = i => {
    this.setState(state => {
      const todos = state.todos.filter((todo, j) => i !== j);
      return {
        todos
      };
    });
  };
  
  onChangeCheck = (index,todo) => {
    const checkCopy = {...this.state.checked}
    const checkmark = {...this.state.marked}
    if (checkCopy[index]) {checkCopy[index] = false; checkmark[todo] = false;}
    else {checkCopy[index] = true; checkmark[todo]= true ;}
    this.setState({ checked: checkCopy}) 
    this.setState({ marked: checkmark})
  }

  onUpdateItem = () => {
    const some_array = [...this.state.marked]
    some_array[this.state.change] = this.state.string
    this.setState({some_array:some_array})
  }

    

  
  render() {

    return (
      <Container >
      <View style= {styles.container}>
        <View style={styles.fixToText}>
          <TextInput style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 2 ,alignItems: 'stretch'}}
          placeholder="type new todo..."
          onChangeText={(value) => this.setState({string : value})}
          value={this.state.string}
          />
          
          <TouchableOpacity title="Add" style={{width :30, height :20,color: 'red'}}
          onPress={(value) =>{if (this.state.status == 'add'){
            this.setState({todo : this.state.todos.push(this.state.string)})
          }else{
            this.state.todos[this.state.change] = this.state.string
          }this.setState({string : "",status: 'add'})}}
          ><Icon name='check' size={30} type='FontAwesome'/>
          </TouchableOpacity>
        </View>
        <View>

        {this.state.todos.map((todo,index)=>{
          return (
          <View style={styles.fixToText}>
            <CheckBox
              value = {this.state.checked[index]}
              onChange = {() => this.onChangeCheck(index,todo)}
            />
          <Text style = {styles.text} key = {todo}>{todo}</Text>
          <TouchableOpacity title='update' onPress={() => this.setState({change : Object.keys(this.state.checked),status: 'Update',string : this.state.string = JSON.stringify(Object.keys(this.state.marked))})}
           ><Icon name='pencil' size={20}/></TouchableOpacity> 
          <TouchableOpacity title="Delete" onPress={() => this.onRemoveItem(index)}
           ><Icon name='trash' size={20} color='red'></Icon>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => this.onUpdateItem(todo)}
           ><Icon name='star' size={20} color='red'></Icon></TouchableOpacity>
          </View>
            )
        }
        )}
         </View>
      </View>
      </Container>
    )
  }
};

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       justifyContent : 'center',
       borderTopLeftRadius : 20,
       borderBottomEndRadius: 20,
       height : 400,
       marginTop: 100,
       backgroundColor : '#00bbd4'
    },
    text: {
       color: '#4f603c',
       borderBottomColor: 'black',
       borderBottomWidth: 2,
       paddingBottom: 5,
       paddingTop:5,
       width : 250
    },
    fixToText: {
      flexDirection: 'row',
      alignContent: 'stretch',
      paddingHorizontal: 0
    },
    justText: {
      flexDirection: 'row',
      alignContent: 'stretch',
      paddingHorizontal: 5,
      width: 300
    },
 })