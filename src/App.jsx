import { Button } from 'antd'
import './App.css'
import UserItem from './components/UsersItem'
import { useFetch } from './hooks/useFetch'
import { useEffect, useReducer, useState } from 'react'

function reduce(state, action) {
  switch(action.type) {
    case "liked": {
      action.payload.isLiked = true
      if(!state.liked.includes(action.payload)) {
        return {
          liked: [...state.liked, action.payload],
          saved: state.saved
        }
      } 
      else{
        return {
          liked: state.liked,
          saved: state.saved
        }
      }
    }
    case "saved":{
      action.payload.isSaved = true
      if (!state.saved.includes(action.payload)){
        return {
          liked: state.liked,
          saved: [...state.saved, action.payload]
        }
      } 
      else {
        return {
          liked: state.liked,
          saved: state.saved
        }
      }
    }
    default:
      return state
  }
}

const intialState = {
  liked:[],
  saved:[]
}

function App() {
  const {users} = useFetch("/users")
  const [usersData, setUsersData] = useState([])
  const [products, dispatch] = useReducer(reduce, intialState )

  useEffect(() => {
    setUsersData(users)
  },[users])

  return(
    <>
      <div className='flex p-5 items-center space-x-5'>
        <Button onClick={() => setUsersData(products.liked)} size='large'>Liked ({products.liked.length})</Button>
        <Button onClick={() => setUsersData(products.saved)} size='large'>Saved ({products.saved.length})</Button>
    </div>
      <div className='p-5 flex justify-between flex-wrap gap-10'>
      {usersData ? usersData.map(item => <UserItem handleLikeBtnClick={() => dispatch({type:"liked", payload:item})} handleSavedBtncClick={() => dispatch({type:"saved", payload:item})} dispatch={dispatch} key={item.id} item={item}/>) : ""}
    </div>
    </>
  )
}

export default App