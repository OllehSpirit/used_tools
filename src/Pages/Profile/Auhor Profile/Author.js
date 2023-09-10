import { useContext } from 'react';
import AllContext from '../../../Store/Context';

import MiniAuthorProfile from './MiniAuthorProfile';
import Backdrop from '../../../Components/Backdrop';

function Author(){
    const context = useContext(AllContext);
    // console.log(context.profileOpen)    


    return(
        <div>
            { context.profileOpen && <MiniAuthorProfile/> }
            { context.profileOpen && <Backdrop onCancel={context.toggleProfile} /> }
        </div>
    );
}
// export {Profile};
export default Author;