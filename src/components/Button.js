import className from "classnames";
function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  children,
  ...rest
}) {
  const classes = className('flex items-center px-3 py-1.5 border',{
      'border-blue-500 bg-blue-500 text-white':primary,
      'border-gray-900 bg-gray-900 text-white':secondary,
      'border-green-500 bg-green-500 text-white':success,
      'border-red-500 bg-red-500 text-white':danger,
      'border-yellow-400 bg-yellow-400 text-white':warning,
      'rounded-full':rounded,
      'bg-white':outline,
      'text-blue-500':outline && primary,
      'text-gray-500':outline && secondary,
      'text-green-500':outline && success,
      'text-red-500':outline && danger,
      'text-yellow-500':outline && warning,
  });
  Button.propTypes = {
    checkVariations: ({ primary, secondary, success, warning, danger }) => {
      const count =
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);
      if (count > 1) {
        return new Error(
          "Only on of primary,secondary,success,warning,danger could be true"
        );
      }
    },
  };

  return <button {...rest} className={classes}>{children}</button>;
}

export default Button;
