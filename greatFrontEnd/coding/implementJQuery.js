function $(selector) {
  // first we need to get the element
  const element = document.querySelector(selector);

  // return the method css

  return {
    /**
     * takes in props (css property to change)
     * takens in value (value to change css property to)
     * @param {*} props
     * @param {*} value
     */
    css: function (props, value) {
      // if there is no value, we just want to return the css value

      if (value === undefined) {
        // if there is no element ,return undefined

        if (element == null) {
          return undefined;
        }

        // now we need to get the css property
        // e.g. button.style[backgroundColor]
        const cssValue = element.style[props];

        return cssValue === "" ? undefined : cssValue;
      }

      // if there is value, we want to set the element style AND return the entire object
      if (element !== null) {
        element.style[props] = value;
      }
      return this;
    },
  };
}
