import React from 'react';
import List from './List.js';
import './App.css';

function App(props) {
 
let godList = [];
props.store.lists.forEach(list =>{
  let listOfCards = list.cardIds.map(id =>{
   return props.store.allCards[id]
  })
  godList.push(<List no = {list.id}  cards = {listOfCards} header = {list.header}/>)
})

//Our origional Solution. i.e The better way.
// props.store.overList.forEach((listDetails) =>{


//   godList.push(<List no = {godList.length + 1}  cards = {listDetails.cards} title = {listDetails.title}/>)
// }
// )
 
 
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div class="App-list">
      {godList}
    </div>

    </main>
  );
}

export default App;