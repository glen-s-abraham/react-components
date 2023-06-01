import classNames from "classnames";
function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      { children }
    </div>
  );
}
//document.addEventListener('click',handleClick,true//capture phase enabled)
export default Panel;
