import { useContext } from 'react';
import AllContext from '../../../Store/Context';

import MiniProductDetailsContent from './MiniProductDetailsContent'
import Backdrop from '../../../Components/Backdrop';

function MiniProductDetails(){
    const context = useContext(AllContext);
    // console.log(context.productOpen)    


    return(
        <div>
            { context.productOpen && <MiniProductDetailsContent/> }
            { context.productOpen && <Backdrop onCancel={context.toggleProduct} /> }
        </div>
    );
}
export default MiniProductDetails;