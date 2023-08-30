import { useMemo } from "react";
import styles from "./SizeRegularTypePrimarySt.module.css";
const SizeRegularTypePrimarySt = ({
  iconImageUrl,
  label = "Button label",
  iconTextId,
  trailingIcon = true,
  leadingIcon = true,
  sizeRegularTypePrimaryStPosition,
  sizeRegularTypePrimaryStBorderRadius,
  sizeRegularTypePrimaryStHeight,
  sizeRegularTypePrimaryStMargin,
  sizeRegularTypePrimaryStRight,
  sizeRegularTypePrimaryStBottom,
  sizeRegularTypePrimaryStZIndex,
}) => {
  const sizeRegularTypePrimaryStStyle = useMemo(() => {
    return {
      position: sizeRegularTypePrimaryStPosition,
      borderRadius: sizeRegularTypePrimaryStBorderRadius,
      height: sizeRegularTypePrimaryStHeight,
      margin: sizeRegularTypePrimaryStMargin,
      right: sizeRegularTypePrimaryStRight,
      bottom: sizeRegularTypePrimaryStBottom,
      zIndex: sizeRegularTypePrimaryStZIndex,
    };
  }, [
    sizeRegularTypePrimaryStPosition,
    sizeRegularTypePrimaryStBorderRadius,
    sizeRegularTypePrimaryStHeight,
    sizeRegularTypePrimaryStMargin,
    sizeRegularTypePrimaryStRight,
    sizeRegularTypePrimaryStBottom,
    sizeRegularTypePrimaryStZIndex,
  ]);

  return (
    <div
      className={styles.sizeregularTypeprimarySt}
      style={sizeRegularTypePrimaryStStyle}
    >
      {leadingIcon && (
        <img className={styles.plusCircleIcon} alt="" src={iconImageUrl} />
      )}
      <div className={styles.buttonLabel}>{label}</div>
      {trailingIcon && (
        <img className={styles.plusCircleIcon} alt="" src={iconTextId} />
      )}
    </div>
  );
};

export default SizeRegularTypePrimarySt;
