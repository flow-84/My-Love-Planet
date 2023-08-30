import { useMemo } from "react";
import styles from "./TypeText.module.css";
const TypeText = ({
  typeTextPosition,
  typeTextWidth,
  typeTextBorder,
  typeTextFontFamily,
  typeTextFontSize,
  typeTextTop,
  typeTextLeft,
}) => {
  const typeTextStyle = useMemo(() => {
    return {
      position: typeTextPosition,
      width: typeTextWidth,
      border: typeTextBorder,
      fontFamily: typeTextFontFamily,
      fontSize: typeTextFontSize,
      top: typeTextTop,
      left: typeTextLeft,
    };
  }, [
    typeTextPosition,
    typeTextWidth,
    typeTextBorder,
    typeTextFontFamily,
    typeTextFontSize,
    typeTextTop,
    typeTextLeft,
  ]);

  return (
    <div className={styles.typetext} style={typeTextStyle}>
      <div className={styles.text}>Table label</div>
    </div>
  );
};

export default TypeText;
