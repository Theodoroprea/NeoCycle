import styles from "../styles/FiltersModal.module.scss";
import SortingMenu from "./dropdownMenu";

interface FiltersModalProps {
  isOpen: boolean;
  closeModal: (open: boolean) => void;
}

export default function FiltersModal(props: FiltersModalProps) {
  return (
    <div
      className={`${styles.filters_modal} ${props.isOpen ? styles.show : ""}`}
    >
      <div className={styles.filters_modal_content}>
        <button onClick={() => props.closeModal(false)}>Close</button>
        {/* Add your filter and sort components here */}
        Hello?
      </div>
    </div>
  );
}
