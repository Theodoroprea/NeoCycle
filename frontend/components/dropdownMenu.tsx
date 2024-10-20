import styles from "../styles/DropDownMenu.module.scss";
import DropdownItem from "./dropdownItem";

interface SortingMenuProps {
  open: boolean;
  setOpen: () => void;
}

export default function SortingMenu(props: SortingMenuProps) {
  return (
    <>
      <div className={styles.sort_by_btn_container}>
        <div className={styles.menu_trigger} onClick={() => props.setOpen()}>
          Sort By
        </div>
      </div>
      <div
        className={`${styles.dropdown_menu} ${
          props.open ? styles.active : styles.inactive
        }`}
      >
        <ul>
          <DropdownItem text={"Popularity"} type="checkbox" />
          <DropdownItem text={"Newest"} type="checkbox" />
          <DropdownItem text={"Rating"} type="checkbox" />
          <DropdownItem text={"Range"} type="range" />
        </ul>
      </div>
    </>
  );
}
