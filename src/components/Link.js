import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/useNavigation";

function Link({to,children,className,activeClassName}){
    const {navigate,currentPath} = useNavigation()
    const classes = classNames('text-blue-500',className,currentPath===to&&activeClassName)
    const handleClick=(evt)=>{
        if(evt.metaKey||evt.ctrlKey){
            return;
        }
        evt.preventDefault();
        navigate(to);
    }
    return <a className={classes} onClick={handleClick} href={to}>{children}</a>
}

export default Link;