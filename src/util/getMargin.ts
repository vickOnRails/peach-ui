type MarginProp = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

const getMargin = (margin: MarginProp): string => {
  return `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`;
};

export default getMargin;
