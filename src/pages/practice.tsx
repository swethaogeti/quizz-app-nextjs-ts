import React from "react";
type MyProps = {
  children: string;
  name: string;
  someBigPropertyName: number;
  someotherbigProperty: number;
};
// const Button = (props: MyProps) => {
//   return <button>{props.children}</button>;
// };

const Button = ({
  children,
  name,
  someBigPropertyName,
  someotherbigProperty,
}: MyProps) => {
  return (
    <button>
      {children} {someBigPropertyName + someBigPropertyName}
    </button>
  );
};

const numberProperties: Pick<
  MyProps,
  "someBigPropertyName" | "someotherbigProperty"
> = {
  someBigPropertyName: 12,
  someotherbigProperty: 13,
};
const Practice = () => {
  return (
    <div>
      <Button name="skillovilla" {...numberProperties}>
        ewqr
      </Button>
    </div>
  );
};

const obj = { name: "skillovilla" };

const { name: company } = obj;

console.log(company);

export default Practice;
