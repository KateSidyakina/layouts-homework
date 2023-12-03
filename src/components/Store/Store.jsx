import CardsView from "../CardsView/CardsView";
import IconSwitch from "../IconSwitch/IconSwitch";
import { useState } from "react";
import ListView from "../ListView/ListView";

export default function Store({products}) {
  const [view, setView] = useState('view_module');

  return (
    <div className="store">
      <IconSwitch icon={view} onSwitch={(newView) => setView(newView)}/>
      
      <CardsView style={{display: view === 'view_module' ? 'grid' : 'none'}} cards={products}/>
      <ListView style={{display: view === 'view_list' ? 'block' : 'none'}} items={products}/>
    </div>
  )
}