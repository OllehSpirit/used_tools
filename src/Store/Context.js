import {createContext , useState} from 'react';

const AllContext = createContext({
    profileOpen : false,
    toggleProfile : () => {},
    toggleProduct : ()=> {}
});

export function AllContextProvider(props){

    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const [ProductIsOpen, setProductIsOpen] = useState(false);
    
    const ToggleProfileIsOpen = ()=>{
        setProfileIsOpen((current)=>(!current));
    }

    const ToggleProductIsOpen = ()=>{
        setProductIsOpen((current)=>(!current));
    }

    const context = {
        profileOpen : profileIsOpen,
        toggleProfile : ToggleProfileIsOpen,
        
        productOpen : ProductIsOpen,
        toggleProduct : ToggleProductIsOpen,

        ENDPOINT : 'http://localhost:8000'
    };

    return <AllContext.Provider value={context}>
        {props.children}
    </AllContext.Provider>
}

export default AllContext;