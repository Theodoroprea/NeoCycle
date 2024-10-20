interface DropDownItemProps {
  img?: string;
  text: string;
  type: string;
}

export default function DropDownItem(props: DropDownItemProps) {
  if (props.type === "checkbox") {
    return (
      <li className="dropdownItem">
        <label>
          <input type="checkbox" />
          {props.text}
        </label>
      </li>
    );
  } else {
    //Add the if props.type === "range" block here
    return (
      <li className="dropdownItem">
        <label>
          Price Range
          <input type="range" min="0" max="1000" />
        </label>
      </li>
    );
  }
}
