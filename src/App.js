import { useEffect, useState } from 'react';
import './App.css';
import { getCountries, getReportByCountry } from './components/apis';
import CountrySelector from './components/CountrySelector';
import HightLight from './components/HightLight';
import Summary from './components/Summary';

function App() {
  const [countries,setcountries] = useState([])
  const [selectContryID,setSelectContryID] = useState('')
  const [report,setReport] = useState([])
  useEffect(() => {
    getCountries()
      .then(res => {
        setcountries(res.data)
        setSelectContryID('vn')
      })
  }, [])
  useEffect(()=>{
    if(selectContryID) {
    const {Slug} = countries.find(country=> country.ISO2.toLowerCase() === selectContryID)
    getReportByCountry(Slug)
    .then(res=> {
      res.data.pop()
      setReport(res.data) })
    }
  },[selectContryID,countries])


  const handleOnchange = (e) => {
    setSelectContryID(e.target.value)
    
  }
  return (
    <div className="App">
      <CountrySelector  
        value={selectContryID}
        countries={countries}
        handleOnchange={handleOnchange}
        />
      <HightLight report={report}/>
      <Summary report={report} />
    </div>
  );
}

export default App;
