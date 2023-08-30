import { useMemo } from "react";
import styles from "./StyleFilledStateDefaultS.module.css";
const StyleFilledStateDefaultS = ({
  label = "Button",
  styleFilledStateDefaultSPosition,
  styleFilledStateDefaultSWidth,
  styleFilledStateDefaultSHeight,
  styleFilledStateDefaultSOverflow,
  styleFilledStateDefaultSMargin,
  styleFilledStateDefaultSTop,
  styleFilledStateDefaultSLeft,
  styleFilledStateDefaultSBorderRadius,
  styleFilledStateDefaultSCursor,
  styleFilledStateDefaultSZIndex,
  styleFilledStateDefaultSBackgroundColor,
  onButtonContainerClick,
}) => {
  const styleFilledStateDefaultSStyle = useMemo(() => {
    return {
      position: styleFilledStateDefaultSPosition,
      width: styleFilledStateDefaultSWidth,
      height: styleFilledStateDefaultSHeight,
      overflow: styleFilledStateDefaultSOverflow,
      margin: styleFilledStateDefaultSMargin,
      top: styleFilledStateDefaultSTop,
      left: styleFilledStateDefaultSLeft,
      borderRadius: styleFilledStateDefaultSBorderRadius,
      cursor: styleFilledStateDefaultSCursor,
      zIndex: styleFilledStateDefaultSZIndex,
      backgroundColor: styleFilledStateDefaultSBackgroundColor,
    };
  }, [
    styleFilledStateDefaultSPosition,
    styleFilledStateDefaultSWidth,
    styleFilledStateDefaultSHeight,
    styleFilledStateDefaultSOverflow,
    styleFilledStateDefaultSMargin,
    styleFilledStateDefaultSTop,
    styleFilledStateDefaultSLeft,
    styleFilledStateDefaultSBorderRadius,
    styleFilledStateDefaultSCursor,
    styleFilledStateDefaultSZIndex,
    styleFilledStateDefaultSBackgroundColor,
  ]);

  return (
    <div
      className={styles.stylefilledStatedefaultS}
      style={styleFilledStateDefaultSStyle}
      onClick={onButtonContainerClick}
    >
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StyleFilledStateDefaultS;
