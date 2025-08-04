import { useState } from 'react'
import './App.css'


import Credit_money from './components/Credit_money'
import Financial_summary from './components/Financial_summary'
import Add_expense from './components/Add_expense'
import Recent_transactions from './components/Recent_transactions'
import Nav_bar from './components/Nav_bar'
import { creditContext } from './context/context'

function App() {
  const [credit, setCredit] = useState(0);
  const [title, setTitle]=useState(0);
  const [debit, setDebit]=useState(0);
  const [totalincome, settotalincome]=useState(0);
  const [totalexpense, settotalexpense]=useState(0);
  const [toggle, settoggle]=useState('+ve')
  

  return (
    <div className='body flex flex-col gap-10 '>
      <creditContext.Provider value={{toggle,settoggle,credit,setCredit,debit,setDebit,totalincome,settotalincome,totalexpense,settotalexpense,title,setTitle}}>
      <div className=''>
        <Nav_bar/>
      </div>
      
      <div className='middle flex gap-10 mt-[8%]'>
            <div className=" left gap-5 flex flex-col ">
                <Credit_money/> 
                <Add_expense/> 
            </div>
            <div className='right'>
                <Financial_summary/>
                
            </div>
      </div>
      <div className='lower'>
            <Recent_transactions />
           
      </div>
      </creditContext.Provider>
    </div>
  )
}

export default App
