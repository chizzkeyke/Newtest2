import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import {Auth} from './components/pages/Auth'
import {HomePage} from './components/pages/HomePage'
import {Navbar} from './components/Navbar'
import {UserList} from './components/pages/UsersList'
import {User} from './components/pages/User'

import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

import {CurrentUserContextProvider} from "./contexts/ContextUser"
import {ContextUserListProvider} from './contexts/ContextUsersList'

const queryClient = new QueryClient()

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ContextUserListProvider>
            <CurrentUserContextProvider>
               <BrowserRouter>
                  <Navbar/>
                  <Switch>
                     <Route path='/' component={HomePage} exact/>
                     <Route path='/login' component={Auth}/>
                     <Route path='/register' component={Auth}/>
                     <Route path='/user/:id' component={User}/>
                     <Route path='/users' component={UserList}/>
                     <Route path='/users?page=:id' component={UserList}/>
                  </Switch>
               </BrowserRouter>
               <ReactQueryDevtools initialIsOpen={false}/>
            </CurrentUserContextProvider>
         </ContextUserListProvider>
      </QueryClientProvider>
   )
}

export default App
