import React,{Fragment} from 'react'
import ParametreDesk from '../component/desktop/ParametreDesk'
import ParametresMobile from '../component/mobile/ParametresMobile'





function Parametres(props) {
    const  isstaf=props.isstaf

    return (
      <Fragment>
        {isstaf?null:
        <Fragment>
        <ParametreDesk/>
        <ParametresMobile/>
        </Fragment>}
        </Fragment>
    )
}

export default Parametres
